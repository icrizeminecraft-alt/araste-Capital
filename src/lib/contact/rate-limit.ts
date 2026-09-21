import { createHash } from "node:crypto";

/**
 * Limitation de débit en mémoire, par processus.
 * Adaptée à un déploiement mono-instance ou à une préproduction. Sur une
 * plateforme sans état (plusieurs instances ou fonctions éphémères), la
 * remplacer par un magasin partagé (Redis, KV) — voir README.
 * La clé est une empreinte salée de l'adresse IP : l'IP n'est pas conservée.
 */
type Bucket = { count: number; resetAt: number };

const MAX_ENTRIES = 5000;

export class SlidingWindowLimiter {
  private buckets = new Map<string, Bucket>();

  constructor(
    private readonly max: number,
    private readonly windowMs: number,
  ) {}

  /** Retourne true si la requête est acceptée. `max` peut être surchargé pour une clé partagée. */
  hit(key: string, now = Date.now(), max = this.max): { allowed: boolean; retryAfterMs: number } {
    this.prune(now);
    const bucket = this.buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      this.buckets.set(key, { count: 1, resetAt: now + this.windowMs });
      return { allowed: true, retryAfterMs: 0 };
    }
    if (bucket.count >= max) {
      return { allowed: false, retryAfterMs: bucket.resetAt - now };
    }
    bucket.count += 1;
    return { allowed: true, retryAfterMs: 0 };
  }

  private prune(now: number) {
    if (this.buckets.size < 500) return;
    for (const [key, bucket] of this.buckets) {
      if (bucket.resetAt <= now) this.buckets.delete(key);
    }
    // Plafond strict : éviction des entrées les plus anciennes (ordre d'insertion).
    while (this.buckets.size > MAX_ENTRIES) {
      const oldest = this.buckets.keys().next().value;
      if (oldest === undefined) break;
      this.buckets.delete(oldest);
    }
  }
}

/** Mémoire courte des clés d'idempotence : évite les doubles envois. */
export class RecentKeys {
  private seen = new Map<string, number>();

  constructor(private readonly ttlMs: number) {}

  /** Retourne true si la clé est nouvelle (et la réserve). */
  add(key: string, now = Date.now()): boolean {
    for (const [k, at] of this.seen) {
      if (at + this.ttlMs <= now) this.seen.delete(k);
    }
    while (this.seen.size > MAX_ENTRIES) {
      const oldest = this.seen.keys().next().value;
      if (oldest === undefined) break;
      this.seen.delete(oldest);
    }
    if (this.seen.has(key)) return false;
    this.seen.set(key, now);
    return true;
  }

  /** Libère une clé réservée (envoi échoué) pour autoriser une nouvelle tentative. */
  release(key: string): void {
    this.seen.delete(key);
  }
}

export function fingerprint(ip: string, secret: string): string {
  return createHash("sha256").update(`${secret}:${ip}`).digest("hex").slice(0, 32);
}

export type ClientAddress = { ip: string; trusted: boolean };

/**
 * Adresse du client selon la topologie déclarée.
 * `TRUSTED_PROXY_HOPS` (défaut 1) : nombre de mandataires de confiance devant
 * l'application ; l'adresse retenue est la n-ième en partant de la droite de
 * X-Forwarded-For (les mandataires ajoutent leur entrée à droite). Les en-têtes
 * propres à certains hébergeurs sont pris en compte en priorité. Sans adresse
 * fiable, la requête est rattachée à un compartiment partagé (`trusted: false`).
 */
export function clientAddress(headers: Headers, hops = Number(process.env.TRUSTED_PROXY_HOPS ?? 1)): ClientAddress {
  for (const name of ["cf-connecting-ip", "x-vercel-forwarded-for", "fly-client-ip", "true-client-ip"]) {
    const value = headers.get(name)?.split(",")[0]?.trim();
    if (value) return { ip: value, trusted: true };
  }
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const parts = forwarded.split(",").map((p) => p.trim()).filter(Boolean);
    const n = Number.isFinite(hops) && hops >= 1 ? Math.floor(hops) : 1;
    const picked = parts[parts.length - n];
    if (picked) return { ip: picked, trusted: true };
  }
  const real = headers.get("x-real-ip")?.trim();
  if (real) return { ip: real, trusted: true };
  return { ip: "unknown", trusted: false };
}

/** @deprecated Conservé pour compatibilité ; préférer clientAddress. */
export function clientIp(headers: Headers): string {
  return clientAddress(headers).ip;
}
