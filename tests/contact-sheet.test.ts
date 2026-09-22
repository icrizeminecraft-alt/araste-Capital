import { describe, expect, it } from "vitest";
import { buildSheet, renderHtml, renderPlainText } from "@/lib/contact/providers";
import { renderSheetPdf } from "@/lib/contact/pdf";
import type { ContactFields } from "@/lib/contact/schema";

/** Données fictives uniquement. */
const fields: ContactFields = {
  financingType: "bridge",
  purpose: "acquisition",
  amount: "12 000 000",
  currency: "EUR",
  country: "France",
  timeline: "1-3m",
  description: "Acquisition d'un immeuble de bureaux <b>fictif</b> dans l'attente d'un refinancement engagé.",
  assetType: "commercial",
  assetLocation: "Lyon",
  assetValue: "18 000 000",
  valueBasis: "appraisal",
  annualIncome: "1 100 000",
  assetStatus: "stabilised",
  borrowerType: "spv",
  borrowerCountry: "France",
  equity: "4 000 000",
  existingDebt: "",
  existingDebtMaturity: "",
  securityOffered: "Hypothèque de premier rang, nantissement des titres.",
  exitType: "refinancing",
  exitTiming: "Mars 2027",
  role: "introducer",
  name: "Test Fictif",
  company: "Société Exemple",
  email: "test@example.invalid",
  phone: "",
  channel: "email",
  notes: "",
};
const receivedAt = new Date("2026-09-22T10:30:00Z");

describe("fiche d'opération", () => {
  it("regroupe les quatre sections avec les libellés du dictionnaire", () => {
    const sheet = buildSheet(fields, "fr", receivedAt);
    expect(sheet.title).toBe("Fiche d'opération");
    expect(sheet.reference).toBe("Fiche 2026-09-22 10:30 UTC");
    expect(sheet.sections.map((s) => s.title)).toEqual(["L'opération", "L'actif", "Structure et sortie", "Vous"]);
    expect(sheet.subtitle).toContain("12 000 000 EUR");
    expect(sheet.subtitle).toContain("Apporteur d'affaires");
    const rows = sheet.sections.flatMap((s) => s.rows);
    expect(rows.find((r) => r.label === "Sortie envisagée")?.value).toBe("Refinancement de long terme");
    expect(rows.find((r) => r.label === "Base de cette valeur")?.value).toBe("Expertise indépendante");
  });
  it("existe aussi en anglais", () => {
    const sheet = buildSheet(fields, "en", receivedAt);
    expect(sheet.title).toBe("Transaction sheet");
    expect(sheet.sections[2]?.rows.find((r) => r.label === "Intended exit")?.value).toBe("Long-term refinancing");
  });
  it("rend un texte brut complet et un HTML échappé", () => {
    const text = renderPlainText(fields, "fr", receivedAt);
    expect(text).toContain("Localisation de l'actif");
    expect(text).toContain("Lyon");
    const html = renderHtml(fields, "fr", receivedAt);
    expect(html).not.toContain("<b>fictif</b>");
    expect(html).toContain("&lt;b&gt;fictif&lt;/b&gt;");
    expect(html).toContain("Hypothèque de premier rang");
  });
  it("produit un PDF A4 valide", async () => {
    const sheet = buildSheet(fields, "fr", receivedAt);
    const pdf = await renderSheetPdf(sheet);
    expect(pdf.byteLength).toBeGreaterThan(5_000);
    expect(new TextDecoder().decode(pdf.slice(0, 5))).toBe("%PDF-");
  });
});
