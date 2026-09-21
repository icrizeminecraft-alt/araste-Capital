import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

/**
 * Jeton anti-automatisation : horodatage signé côté serveur.
 * Un envoi trop rapide (< 3 s) ou trop ancien (> 24 h) est refusé.
 * Sans CONTACT_FORM_SECRET, un secret éphémère par processus est utilisé
 * (suffisant en développement ; à définir en production).
 */
// Partagé via globalThis : la page et la route API sont compilées dans des
// modules distincts et doivent utiliser le même secret au sein du processus.
const globalStore = globalThis as unknown as { __arasteFormSecret?: string };

function ephemeralSecret(): string {
  globalStore.__arasteFormSecret ??= randomBytes(32).toString("hex");
  return globalStore.__arasteFormSecret;
}

export function formSecret(): string {
  return process.env.CONTACT_FORM_SECRET || ephemeralSecret();
}

function sign(payload: string, secret: string): string {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function createFormToken(now = Date.now(), secret = formSecret()): string {
  const ts = String(now);
  return `${ts}.${sign(ts, secret)}`;
}

export type TokenCheck = "ok" | "malformed" | "signature" | "too-fast" | "expired";

export function verifyFormToken(
  token: string,
  {
    now = Date.now(),
    secret = formSecret(),
    minAgeMs = 3_000,
    maxAgeMs = 24 * 60 * 60 * 1000,
  }: { now?: number; secret?: string; minAgeMs?: number; maxAgeMs?: number } = {},
): TokenCheck {
  const [ts, signature] = token.split(".");
  if (!ts || !signature || !/^\d{1,16}$/.test(ts) || !/^[0-9a-f]{64}$/.test(signature)) {
    return "malformed";
  }
  const expected = sign(ts, secret);
  const a = Buffer.from(signature, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !timingSafeEqual(a, b)) return "signature";
  const age = now - Number(ts);
  if (age < minAgeMs) return "too-fast";
  if (age > maxAgeMs) return "expired";
  return "ok";
}
