import { describe, expect, it } from "vitest";
import { alternatePath, expertisePath, guidePath, pagePath, resolvePath, alternatesFor } from "@/config/routes";

describe("routes", () => {
  it("construit les chemins localisés", () => {
    expect(pagePath("fr", "home")).toBe("/fr");
    expect(pagePath("en", "firm")).toBe("/en/the-firm");
    expect(expertisePath("fr", "bridge")).toBe("/fr/expertises/financement-relais");
    expect(expertisePath("en", "privateDebt")).toBe("/en/expertise/private-debt");
  });

  it("résout un chemin en route connue", () => {
    expect(resolvePath("/fr")).toEqual({ locale: "fr", route: { kind: "page", key: "home" } });
    expect(resolvePath("/en/our-approach")).toEqual({ locale: "en", route: { kind: "page", key: "approach" } });
    expect(resolvePath("/fr/expertises/refinancement")).toEqual({ locale: "fr", route: { kind: "expertise", key: "refinancing" } });
    expect(resolvePath("/fr/expertise/refinancement")?.route.kind).toBe("unknown");
    expect(resolvePath("/de/x")).toBeNull();
    expect(resolvePath("/fr/a/b/c")?.route.kind).toBe("unknown");
  });

  it("conserve la page correspondante en changeant de langue", () => {
    expect(alternatePath("/fr/expertises/financement-relais", "en")).toBe("/en/expertise/bridge-finance");
    expect(alternatePath("/en/legal-notice", "fr")).toBe("/fr/mentions-legales");
    expect(alternatePath("/fr/inconnue", "en")).toBe("/en");
  });

  it("résout et alterne les repères", () => {
    expect(guidePath("fr", "bridgeBasics")).toBe("/fr/reperes/comprendre-le-financement-relais");
    expect(resolvePath("/en/guides/the-exit-key-to-a-bridge")).toEqual({ locale: "en", route: { kind: "guide", key: "exitStrategy" } });
    expect(alternatePath("/fr/reperes/preparer-un-dossier-de-financement", "en")).toBe("/en/guides/preparing-a-financing-file");
    expect(resolvePath("/fr/reperes/inconnu")?.route.kind).toBe("unknown");
  });

  it("fournit toutes les alternatives", () => {
    expect(alternatesFor({ kind: "page", key: "contact" })).toEqual({ fr: "/fr/contact", en: "/en/contact" });
  });
});
