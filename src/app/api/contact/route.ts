import { NextResponse } from "next/server";
import { contactRequestSchema, LIMITS, toFieldErrors } from "@/lib/contact/schema";
import { verifyFormToken, formSecret } from "@/lib/contact/token";
import { SlidingWindowLimiter, RecentKeys, clientIp, fingerprint } from "@/lib/contact/rate-limit";
import { sendContact } from "@/lib/contact/providers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const limiter = new SlidingWindowLimiter(
  Number(process.env.CONTACT_RATE_LIMIT_MAX) || 5,
  (Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MINUTES) || 10) * 60 * 1000,
);
const recentKeys = new RecentKeys(10 * 60 * 1000);

function error(status: number, code: string, extra?: Record<string, unknown>) {
  return NextResponse.json({ status: "error", code, ...extra }, { status, headers: { "Cache-Control": "no-store" } });
}

/**
 * Réception des demandes « Présenter une opération ».
 * Validation stricte, taille limitée, jeton signé, pot de miel, limitation de
 * débit, idempotence. Le contenu de la demande n'est jamais journalisé.
 */
export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return error(415, "unsupported");

  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > LIMITS.body) return error(413, "too-large");

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return error(400, "invalid");
  }
  if (raw.length > LIMITS.body) return error(413, "too-large");

  let json: unknown;
  try {
    json = JSON.parse(raw);
  } catch {
    return error(400, "invalid");
  }

  const parsed = contactRequestSchema.safeParse(json);
  if (!parsed.success) {
    const fields = toFieldErrors(parsed.error.issues);
    const hasFieldErrors = Object.keys(fields).length > 0;
    return error(400, hasFieldErrors ? "invalid" : "token", hasFieldErrors ? { fields } : undefined);
  }
  const { token, idempotencyKey, website, locale, ...fields } = parsed.data;

  // Pot de miel rempli : on répond comme si tout allait bien, sans rien envoyer.
  if (website) {
    return NextResponse.json({ status: "demo" }, { headers: { "Cache-Control": "no-store" } });
  }

  const tokenCheck = verifyFormToken(token);
  if (tokenCheck !== "ok") return error(400, "token");

  const key = fingerprint(clientIp(request.headers), formSecret());
  const limit = limiter.hit(key);
  if (!limit.allowed) {
    const response = error(429, "rate-limited");
    response.headers.set("Retry-After", String(Math.ceil(limit.retryAfterMs / 1000)));
    return response;
  }

  if (!recentKeys.add(`${key}:${idempotencyKey}`)) return error(409, "duplicate");

  try {
    const outcome = await sendContact(fields, locale);
    return NextResponse.json({ status: outcome }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    // Journal minimal : aucun contenu de la demande.
    console.error("[contact] provider failure", err instanceof Error ? err.message : "unknown");
    return error(502, "provider");
  }
}

export function GET() {
  return error(405, "method-not-allowed");
}
