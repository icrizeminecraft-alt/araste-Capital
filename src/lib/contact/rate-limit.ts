import { createHash } from "node:crypto";

/**
 * Limitation de débit en mémoire, par processus.
 * Adaptée à un déploiement mono-instance ou à une préproduction. Sur une
 * plateforme sans état (plusieurs instances ou fonctions éphémères), la
 * remplacer par un magasin partagé (Redis, KV) — voir README.
 * La clé est une empreinte salée de l'adresse IP : l'IP n'est pas conservée.
 */
type Bucket = { count: number; resetAt: number };

export class SlidingWindowLimiter {
  private buckets = new Map<string, Bucket>();

  constructor(
    private readonly max: number,
    private readonly windowMs: number,
  ) {}

  /** Retourne true si la requête est acceptée. */
  hit(key: string, now = Date.now()): { allowed: boolean; retryAfterMs: number } {
    this.prune(now);
    const bucket = this.buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      this.buckets.set(key, { count: 1, resetAt: now + this.windowMs });
      return { allowed: true, retryAfterMs: 0 };
    }
    if (bucket.count >= this.max) {
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
  }
}

/** Mémoire courte des clés d'idempotence : évite les doubles envois. */
export class RecentKeys {
  private seen = new Map<string, number>();

  constructor(private readonly ttlMs: number) {}

  /** Retourne true si la clé est nouvelle (et l'enregistre). */
  add(key: string, now = Date.now()): boolean {
    for (const [k, at] of this.seen) {
      if (at + this.ttlMs <= now) this.seen.delete(k);
    }
    if (this.seen.has(key)) return false;
    this.seen.set(key, now);
    return true;
  }
}

export function fingerprint(ip: string, secret: string): string {
  return createHash("sha256").update(`${secret}:${ip}`).digest("hex").slice(0, 32);
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return headers.get("x-real-ip")?.trim() || "unknown";
}
