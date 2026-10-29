import { NextResponse } from "next/server";
import { briefRequestSchema, contactRequestSchema, LIMITS, toBriefFieldErrors, toFieldErrors, envelopeErrorCode, type BriefFields, type ContactFields } from "@/lib/contact/schema";
import { verifyFormToken, formSecret } from "@/lib/contact/token";
import { SlidingWindowLimiter, RecentKeys, clientAddress, fingerprint } from "@/lib/contact/rate-limit";
import { sendBrief, sendContact } from "@/lib/contact/providers";
import { enabledExpertises } from "@/config/site";
import { corsHeaders, isAllowedOrigin } from "@/lib/contact/cors";

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

/** En-têtes CORS lorsque la requête vient d'une origine autorisée (site statique distant). */
function crossOriginHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin");
  return origin && isAllowedOrigin(origin) ? corsHeaders(origin) : {};
}

/** Pré-vérification CORS : uniquement pour une origine explicitement autorisée. */
export function OPTIONS(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || !isAllowedOrigin(origin)) return new NextResponse(null, { status: 403 });
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
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
  // Une origine étrangère n'est admise que si elle est explicitement autorisée.
  const fetchSite = request.headers.get("sec-fetch-site");
  const cors = crossOriginHeaders(request);
  if (fetchSite && fetchSite !== "same-origin" && fetchSite !== "none" && !("Access-Control-Allow-Origin" in cors)) return error(403, "forbidden", undefined, cors);

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return error(415, "unsupported", undefined, cors);

  let raw: string | null;
  try {
    raw = await readBody(request);
  } catch {
    return error(400, "invalid", undefined, cors);
  }
  if (raw === null) return error(413, "too-large", undefined, cors);

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return error(400, "invalid", undefined, cors);
  }

  // Deux entrées : le premier échange (kind: "brief") et la fiche d'opération.
  const brief = typeof json === "object" && json !== null && (json as { kind?: unknown }).kind === "brief";
  let envelope: { token: string; idempotencyKey: string; website?: string; locale: "fr" | "en" };
  let send: () => Promise<"sent" | "demo">;
  if (brief) {
    const parsed = briefRequestSchema.safeParse(json);
    if (!parsed.success) {
      const fields = toBriefFieldErrors(parsed.error.issues);
      if (Object.keys(fields).length > 0) return error(400, "invalid", { fields }, cors);
      return error(400, envelopeErrorCode(parsed.error.issues) ?? "invalid", undefined, cors);
    }
    const { token, idempotencyKey, website, locale, name, email, phone, message } = parsed.data;
    const fields: BriefFields = { name, email, phone, message };
    envelope = { token, idempotencyKey, website, locale };
    send = () => sendBrief(fields, locale);
  } else {
    const parsed = contactRequestSchema.safeParse(json);
    if (!parsed.success) {
      const fields = toFieldErrors(parsed.error.issues);
      if (Object.keys(fields).length > 0) return error(400, "invalid", { fields }, cors);
      return error(400, envelopeErrorCode(parsed.error.issues) ?? "invalid", undefined, cors);
    }
    const { token, idempotencyKey, website, locale, ...fields } = parsed.data;
    // Seules les expertises actives (et « autre ») sont recevables.
    if (fields.financingType !== "other" && !enabledExpertises().includes(fields.financingType)) {
      return error(400, "invalid", { fields: { financingType: "required" } }, cors);
    }
    envelope = { token, idempotencyKey, website, locale };
    send = () => sendContact(fields as ContactFields, locale);
  }
  const { token, idempotencyKey, website } = envelope;

  // Pot de miel rempli : réponse neutre, rien n'est envoyé ni compté.
  if (website && website.trim() !== "") {
    return NextResponse.json({ status: "demo" }, { headers: { ...NO_STORE, ...cors } });
  }

  if (verifyFormToken(token) !== "ok") return error(400, "token", undefined, cors);

  const address = clientAddress(request.headers);
  const key = fingerprint(address.ip, formSecret());
  // Sans adresse fiable, compartiment partagé avec une limite plus large.
  const limit = limiter.hit(key, Date.now(), address.trusted ? MAX_PER_WINDOW : MAX_PER_WINDOW * 10);
  if (!limit.allowed) {
    return error(429, "rate-limited", undefined, { ...cors, "Retry-After": String(Math.ceil(limit.retryAfterMs / 1000)) });
  }

  const idem = `${key}:${idempotencyKey}`;
  if (!recentKeys.add(idem)) return error(409, "duplicate", undefined, cors);

  try {
    const outcome = await send();
    return NextResponse.json({ status: outcome }, { headers: { ...NO_STORE, ...cors } });
  } catch (err) {
    // La clé est libérée : une nouvelle tentative reste possible.
    recentKeys.release(idem);
    // Journal minimal : aucun contenu de la demande.
    console.error("[contact] provider failure", err instanceof Error ? err.message : "unknown");
    return error(502, "provider", undefined, cors);
  }
}

export function GET() {
  return error(405, "method-not-allowed", undefined, { Allow: "POST" });
}
