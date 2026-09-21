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

export type AddressOptions = {
  /** Nombre de mandataires de confiance devant l'application (X-Forwarded-For). 0 = ne pas lire l'en-tête. */
  hops?: number;
  /** En-tête posé par l'hébergeur (ex. cf-connecting-ip), lu en priorité s'il est configuré. */
  trustedHeader?: string;
};

/**
 * Adresse du client selon la topologie déclarée.
 * - `TRUSTED_IP_HEADER` : en-tête propre à l'hébergeur, lu seulement s'il est
 *   explicitement configuré (sinon un client pourrait le forger).
 * - `TRUSTED_PROXY_HOPS` (défaut 1) : l'adresse retenue est la n-ième en partant
 *   de la droite de X-Forwarded-For, les mandataires ajoutant leur entrée à droite.
 * Sans adresse fiable, la requête est rattachée à un compartiment partagé.
 */
export function clientAddress(headers: Headers, options: AddressOptions = {}): ClientAddress {
  const trustedHeader = options.trustedHeader ?? process.env.TRUSTED_IP_HEADER?.trim().toLowerCase();
  const hops = options.hops ?? Number(process.env.TRUSTED_PROXY_HOPS ?? 1);

  if (trustedHeader) {
    const value = headers.get(trustedHeader)?.split(",")[0]?.trim();
    if (value) return { ip: value, trusted: true };
  }
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded && Number.isFinite(hops) && hops >= 1) {
    const parts = forwarded.split(",").map((p) => p.trim()).filter(Boolean);
    const picked = parts[parts.length - Math.floor(hops)];
    if (picked) return { ip: picked, trusted: true };
  }
  return { ip: "unknown", trusted: false };
}
