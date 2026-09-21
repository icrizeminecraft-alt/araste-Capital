import { describe, expect, it } from "vitest";
import { createFormToken, verifyFormToken } from "@/lib/contact/token";
import { SlidingWindowLimiter, RecentKeys, fingerprint, clientAddress } from "@/lib/contact/rate-limit";

const secret = "test-secret";

describe("jeton de formulaire", () => {
  it("accepte un jeton signé d'âge raisonnable", () => {
    const token = createFormToken(1_000_000, secret);
    expect(verifyFormToken(token, { now: 1_010_000, secret })).toBe("ok");
  });
  it("refuse un envoi trop rapide", () => {
    const token = createFormToken(1_000_000, secret);
    expect(verifyFormToken(token, { now: 1_001_000, secret })).toBe("too-fast");
  });
  it("refuse un jeton expiré", () => {
    const token = createFormToken(0, secret);
    expect(verifyFormToken(token, { now: 25 * 60 * 60 * 1000, secret })).toBe("expired");
  });
  it("refuse une signature invalide ou un format inconnu", () => {
    const token = createFormToken(1_000_000, secret);
    expect(verifyFormToken(token, { now: 1_010_000, secret: "autre" })).toBe("signature");
    expect(verifyFormToken("abc", { now: 1_010_000, secret })).toBe("malformed");
    expect(verifyFormToken("", { now: 1_010_000, secret })).toBe("malformed");
  });
});

describe("limitation de débit", () => {
  it("bloque après le maximum dans la fenêtre", () => {
    const limiter = new SlidingWindowLimiter(2, 1000);
    expect(limiter.hit("a", 0).allowed).toBe(true);
    expect(limiter.hit("a", 10).allowed).toBe(true);
    const third = limiter.hit("a", 20);
    expect(third.allowed).toBe(false);
    expect(third.retryAfterMs).toBe(980);
    expect(limiter.hit("b", 20).allowed).toBe(true);
    expect(limiter.hit("a", 1001).allowed).toBe(true);
  });
  it("accepte une limite plus large pour le compartiment partagé", () => {
    const limiter = new SlidingWindowLimiter(1, 1000);
    expect(limiter.hit("shared", 0, 3).allowed).toBe(true);
    expect(limiter.hit("shared", 1, 3).allowed).toBe(true);
    expect(limiter.hit("shared", 2, 3).allowed).toBe(true);
    expect(limiter.hit("shared", 3, 3).allowed).toBe(false);
  });
});

describe("clés récentes", () => {
  it("refuse une clé déjà vue dans la fenêtre", () => {
    const keys = new RecentKeys(1000);
    expect(keys.add("k", 0)).toBe(true);
    expect(keys.add("k", 500)).toBe(false);
    expect(keys.add("k", 1500)).toBe(true);
  });
  it("libère une clé après un envoi échoué", () => {
    const keys = new RecentKeys(1000);
    expect(keys.add("k", 0)).toBe(true);
    keys.release("k");
    expect(keys.add("k", 10)).toBe(true);
  });
});

describe("empreinte", () => {
  it("ne contient pas l'adresse IP en clair et dépend du secret", () => {
    const a = fingerprint("203.0.113.7", "s1");
    expect(a).not.toContain("203.0.113.7");
    expect(a).toHaveLength(32);
    expect(fingerprint("203.0.113.7", "s2")).not.toBe(a);
  });
  it("retient l'adresse ajoutée par le mandataire de confiance, pas celle fournie par le client", () => {
    // Un saut de confiance : l'adresse est la dernière de X-Forwarded-For.
    expect(clientAddress(new Headers({ "x-forwarded-for": "forged, 203.0.113.7" }), 1)).toEqual({ ip: "203.0.113.7", trusted: true });
    // Deux sauts : l'avant-dernière.
    expect(clientAddress(new Headers({ "x-forwarded-for": "forged, 203.0.113.7, 10.0.0.1" }), 2)).toEqual({ ip: "203.0.113.7", trusted: true });
    expect(clientAddress(new Headers({ "cf-connecting-ip": "203.0.113.5", "x-forwarded-for": "forged" }), 1).ip).toBe("203.0.113.5");
    expect(clientAddress(new Headers({ "x-real-ip": "203.0.113.9" }), 1).ip).toBe("203.0.113.9");
    expect(clientAddress(new Headers(), 1)).toEqual({ ip: "unknown", trusted: false });
  });
});
