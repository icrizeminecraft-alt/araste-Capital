import { describe, expect, it } from "vitest";
import { expertiseKeys, guideKeys } from "@/config/routes";
import type { Dictionary } from "@/content/types";
import * as frCommon from "@/content/fr/common";
import * as enCommon from "@/content/en/common";
import { home as frHome } from "@/content/fr/home";
import { home as enHome } from "@/content/en/home";
import { firm as frFirm } from "@/content/fr/firm";
import { firm as enFirm } from "@/content/en/firm";
import { approach as frApproach } from "@/content/fr/approach";
import { approach as enApproach } from "@/content/en/approach";
import { contact as frContact } from "@/content/fr/contact";
import { contact as enContact } from "@/content/en/contact";
import { legal as frLegal } from "@/content/fr/legal";
import { legal as enLegal } from "@/content/en/legal";
import { privacy as frPrivacy } from "@/content/fr/privacy";
import { privacy as enPrivacy } from "@/content/en/privacy";
import { expertisesIndex as frIndex } from "@/content/fr/expertises-index";
import { expertisesIndex as enIndex } from "@/content/en/expertises-index";
import { guidesIndex as frGuidesIndex } from "@/content/fr/guides-index";
import { guidesIndex as enGuidesIndex } from "@/content/en/guides-index";
import * as frG from "@/content/fr/guides/bridgeBasics";
import * as frG2 from "@/content/fr/guides/exitStrategy";
import * as frG3 from "@/content/fr/guides/preparingFile";
import * as frG4 from "@/content/fr/guides/refinancingSignals";
import * as frG5 from "@/content/fr/guides/developmentPhases";
import * as frG6 from "@/content/fr/guides/privateDebtWhen";
import * as enG from "@/content/en/guides/bridgeBasics";
import * as enG2 from "@/content/en/guides/exitStrategy";
import * as enG3 from "@/content/en/guides/preparingFile";
import * as enG4 from "@/content/en/guides/refinancingSignals";
import * as enG5 from "@/content/en/guides/developmentPhases";
import * as enG6 from "@/content/en/guides/privateDebtWhen";
import { bridge as frBridge } from "@/content/fr/expertises/bridge";
import { complex as frComplex } from "@/content/fr/expertises/complex";
import { refinancing as frRefinancing } from "@/content/fr/expertises/refinancing";
import { acquisition as frAcquisition } from "@/content/fr/expertises/acquisition";
import { development as frDevelopment } from "@/content/fr/expertises/development";
import { privateDebt as frPrivateDebt } from "@/content/fr/expertises/privateDebt";
import { bridge as enBridge } from "@/content/en/expertises/bridge";
import { complex as enComplex } from "@/content/en/expertises/complex";
import { refinancing as enRefinancing } from "@/content/en/expertises/refinancing";
import { acquisition as enAcquisition } from "@/content/en/expertises/acquisition";
import { development as enDevelopment } from "@/content/en/expertises/development";
import { privateDebt as enPrivateDebt } from "@/content/en/expertises/privateDebt";

const dicts: Record<"fr" | "en", Dictionary> = {
  fr: {
    common: frCommon.common, home: frHome, firm: frFirm, approach: frApproach, contact: frContact, legal: frLegal, privacy: frPrivacy, expertisesIndex: frIndex,
    guidesIndex: frGuidesIndex,
    guides: { bridgeBasics: frG.bridgeBasics, exitStrategy: frG2.exitStrategy, preparingFile: frG3.preparingFile, refinancingSignals: frG4.refinancingSignals, developmentPhases: frG5.developmentPhases, privateDebtWhen: frG6.privateDebtWhen },
    expertises: { bridge: frBridge, complex: frComplex, refinancing: frRefinancing, acquisition: frAcquisition, development: frDevelopment, privateDebt: frPrivateDebt },
  },
  en: {
    common: enCommon.common, home: enHome, firm: enFirm, approach: enApproach, contact: enContact, legal: enLegal, privacy: enPrivacy, expertisesIndex: enIndex,
    guidesIndex: enGuidesIndex,
    guides: { bridgeBasics: enG.bridgeBasics, exitStrategy: enG2.exitStrategy, preparingFile: enG3.preparingFile, refinancingSignals: enG4.refinancingSignals, developmentPhases: enG5.developmentPhases, privateDebtWhen: enG6.privateDebtWhen },
    expertises: { bridge: enBridge, complex: enComplex, refinancing: enRefinancing, acquisition: enAcquisition, development: enDevelopment, privateDebt: enPrivateDebt },
  },
};

function allStrings(value: unknown, acc: string[] = []): string[] {
  if (typeof value === "string") acc.push(value);
  else if (Array.isArray(value)) value.forEach((v) => allStrings(v, acc));
  else if (value && typeof value === "object") Object.values(value).forEach((v) => allStrings(v, acc));
  return acc;
}

/** Termes interdits par le brief : promesses, chiffres commerciaux, marques d'inspiration. */
const forbidden = [
  /leader/i, /financement garanti/i, /guaranteed (financing|funding|approval|outcome)/i, /accès exclusif/i, /exclusive access/i, /toutes les banques/i, /all (the )?banks/i, /48\s?h/i, /financ\w+ l'impossible/i,
  /Monte[- ]Carlo/i, /Hermitage/i, /Hôtel de Paris/i, /Enness/i, /Brotherton/i, /Londres|Monaco|Duba[iï]|London|Dubai/i,
  /\bSix (domaines|areas)\b/i, /\d+\s?%/, /\bLTV\b/, /\d+\s?(M€|m€|€|£|\$)/, /taux (fixe|réduit|bas|compétitif)/i, /best rate/i,
  /[\u{1F300}-\u{1FAFF}]/u,
];

describe("contraintes des contenus", () => {
  for (const locale of ["fr", "en"] as const) {
    const dict = dicts[locale];

    it(`${locale} : aucune expression interdite par le brief`, () => {
      const hits: string[] = [];
      for (const s of allStrings(dict)) {
        for (const re of forbidden) if (re.test(s)) hits.push(`${re}: ${s.slice(0, 80)}`);
      }
      expect(hits).toEqual([]);
    });

    for (const key of expertiseKeys) {
      it(`${locale}/${key} : structure éditoriale conforme`, () => {
        const e = dict.expertises[key];
        expect(e.meta.description.length).toBeLessThanOrEqual(160);
        expect(e.sections.needs.items.length).toBeGreaterThanOrEqual(4);
        expect(e.sections.needs.items.length).toBeLessThanOrEqual(6);
        expect(e.sections.approach.paragraphs).toHaveLength(3);
        expect(e.sections.analysis.items.length).toBeGreaterThanOrEqual(5);
        expect(e.sections.analysis.items.length).toBeLessThanOrEqual(7);
        expect(e.sections.limits.paragraphs).toHaveLength(2);
        expect(e.related).not.toContain(key);
        expect(e.related.length).toBeGreaterThan(0);
        expect(e.faq.length).toBeGreaterThanOrEqual(3);
        expect(e.faq.length).toBeLessThanOrEqual(5);
      });
    }

    for (const key of guideKeys) {
      it(`${locale}/${key} : structure du repère conforme`, () => {
        const g = dict.guides[key];
        expect(g.meta.description.length).toBeLessThanOrEqual(160);
        expect(g.sections.length).toBeGreaterThanOrEqual(4);
        expect(g.sections.length).toBeLessThanOrEqual(6);
        expect(g.keyPoints.length).toBeGreaterThanOrEqual(3);
        expect(g.keyPoints.length).toBeLessThanOrEqual(5);
        expect(g.relatedGuides).not.toContain(key);
        for (const s of g.sections) expect(s.paragraphs.length).toBeGreaterThanOrEqual(1);
      });
    }
  }

  it("FR et EN sont structurellement équivalents", () => {
    for (const key of expertiseKeys) {
      const fr = dicts.fr.expertises[key];
      const en = dicts.en.expertises[key];
      expect(en.sections.needs.items.length).toBe(fr.sections.needs.items.length);
      expect(en.sections.analysis.items.length).toBe(fr.sections.analysis.items.length);
      expect(en.related).toEqual(fr.related);
      expect(en.faq.length).toBe(fr.faq.length);
    }
    for (const key of guideKeys) {
      const fr = dicts.fr.guides[key];
      const en = dicts.en.guides[key];
      expect(en.sections.length).toBe(fr.sections.length);
      expect(en.keyPoints.length).toBe(fr.keyPoints.length);
      expect(en.relatedExpertises).toEqual(fr.relatedExpertises);
      expect(en.relatedGuides).toEqual(fr.relatedGuides);
    }
    expect(dicts.en.contact.faq.items.length).toBe(dicts.fr.contact.faq.items.length);
    expect(dicts.en.home.approach.steps.length).toBe(dicts.fr.home.approach.steps.length);
    expect(dicts.en.home.situations.cases.length).toBe(dicts.fr.home.situations.cases.length);
    expect(dicts.en.approach.steps.length).toBe(dicts.fr.approach.steps.length);
    expect(dicts.en.legal.sections.length).toBe(dicts.fr.legal.sections.length);
    expect(dicts.en.privacy.sections.length).toBe(dicts.fr.privacy.sections.length);
    expect(dicts.en.contact.form.fields.timeline.options.map((o) => o.value)).toEqual(dicts.fr.contact.form.fields.timeline.options.map((o) => o.value));
  });
});
