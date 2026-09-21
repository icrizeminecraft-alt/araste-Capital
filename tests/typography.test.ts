import { describe, expect, it } from "vitest";
import { frenchTypography, deepMapStrings } from "@/lib/typography";

describe("frenchTypography", () => {
  it("ajoute une espace insécable devant le deux-points", () => {
    expect(frenchTypography("Deux temps : un fil")).toBe("Deux temps : un fil");
  });
  it("ajoute une espace fine devant ; ! ?", () => {
    expect(frenchTypography("Vraiment ? Oui ! Bien ; voilà")).toBe("Vraiment ? Oui ! Bien ; voilà");
  });
  it("gère les guillemets français", () => {
    expect(frenchTypography("« relais »")).toBe("« relais »");
    expect(frenchTypography("«relais»")).toBe("« relais »");
  });
  it("est idempotente", () => {
    const once = frenchTypography("Titre : « a » ?");
    expect(frenchTypography(once)).toBe(once);
  });
  it("ne touche pas aux URL", () => {
    expect(frenchTypography("https://example.com")).toBe("https://example.com");
  });
  it("lie les unités monétaires", () => {
    expect(frenchTypography("5 M€ et 12 %")).toBe("5 M€ et 12 %");
  });
});

describe("deepMapStrings", () => {
  it("transforme toutes les chaînes d'un objet imbriqué", () => {
    const out = deepMapStrings({ a: "x", b: ["y", { c: "z" }], d: 1 }, (s) => s.toUpperCase());
    expect(out).toEqual({ a: "X", b: ["Y", { c: "Z" }], d: 1 });
  });
});
