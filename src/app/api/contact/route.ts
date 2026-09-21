import { NextResponse } from "next/server";
import { contactRequestSchema, LIMITS, toFieldErrors, envelopeErrorCode } from "@/lib/contact/schema";
import { verifyFormToken, formSecret } from "@/lib/contact/token";
import { SlidingWindowLimiter, RecentKeys, clientAddress, fingerprint } from "@/lib/contact/rate-limit";
import { sendContact } from "@/lib/contact/providers";
import { enabledExpertises } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_PER_WINDOW = Number(process.env.CONTACT_RATE_LIMIT_MAX) || 5;
const WINDOW_MS = (Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MINUTES) || 10) * 60 * 1000;
const limiter = new SlidingWindowLimiter(MAX_PER_WINDOW, WINDOW_MS);
const recentKeys = new RecentKeys(10 * 60 * 1000);
const NO_STORE = { "Cache-Control": "no-store" } as const;

function error(status: number, code: string, extra?: Record<string, unknown>, headers?: Record<string, string>) {
  return NextResponse.json({ status: "error", code, ...extra }, { status, headers: { ...NO_STORE, ...headers } });
}

/** Lecture du corps en flux, plafonnée en octets quel que soit Content-Length. */
async function readBody(request: Request): Promise<string | null> {
  const declared = Number(request.headers.get("content-length"));
  if (Number.isFinite(declared) && declared > LIMITS.body) return null;
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > LIMITS.body) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString("utf8");
}

/**
 * Réception des demandes « Présenter une opération ».
 * Validation stricte, taille limitée en octets, jeton signé, pot de miel
 * silencieux, limitation de débit, idempotence libérée en cas d'échec.
 * Le contenu de la demande n'est jamais journalisé.
 */
export async function POST(request: Request) {
  // Défense en profondeur : un navigateur déclare l'origine de la requête.
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none") return error(403, "forbidden");

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return error(415, "unsupported");

  let raw: string | null;
  try {
    raw = await readBody(request);
  } catch {
    return error(400, "invalid");
  }
  if (raw === null) return error(413, "too-large");

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return error(400, "invalid");
  }

  const parsed = contactRequestSchema.safeParse(json);
  if (!parsed.success) {
    const fields = toFieldErrors(parsed.error.issues);
    if (Object.keys(fields).length > 0) return error(400, "invalid", { fields });
    return error(400, envelopeErrorCode(parsed.error.issues) ?? "invalid");
  }
  const { token, idempotencyKey, website, locale, ...fields } = parsed.data;

  // Seules les expertises actives (et « autre ») sont recevables.
  if (fields.financingType !== "other" && !enabledExpertises().includes(fields.financingType)) {
    return error(400, "invalid", { fields: { financingType: "required" } });
  }

  // Pot de miel rempli : réponse neutre, rien n'est envoyé ni compté.
  if (website && website.trim() !== "") {
    return NextResponse.json({ status: "demo" }, { headers: NO_STORE });
  }

  if (verifyFormToken(token) !== "ok") return error(400, "token");

  const address = clientAddress(request.headers);
  const key = fingerprint(address.ip, formSecret());
  // Sans adresse fiable, compartiment partagé avec une limite plus large.
  const limit = limiter.hit(key, Date.now(), address.trusted ? MAX_PER_WINDOW : MAX_PER_WINDOW * 10);
  if (!limit.allowed) {
    return error(429, "rate-limited", undefined, { "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) });
  }

  const idem = `${key}:${idempotencyKey}`;
  if (!recentKeys.add(idem)) return error(409, "duplicate");

  try {
    const outcome = await sendContact(fields, locale);
    return NextResponse.json({ status: outcome }, { headers: NO_STORE });
  } catch (err) {
    // La clé est libérée : une nouvelle tentative reste possible.
    recentKeys.release(idem);
    // Journal minimal : aucun contenu de la demande.
    console.error("[contact] provider failure", err instanceof Error ? err.message : "unknown");
    return error(502, "provider");
  }
}

export function GET() {
  return error(405, "method-not-allowed", undefined, { Allow: "POST" });
}
