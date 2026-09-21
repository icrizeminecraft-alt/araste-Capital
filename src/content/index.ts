import "server-only";
import type { Locale } from "@/lib/i18n";
import type { Dictionary, ExpertiseContent } from "@/content/types";
import type { ExpertiseKey } from "@/config/routes";
import { deepMapStrings, frenchTypography } from "@/lib/typography";

import { common as frCommon } from "@/content/fr/common";
import { home as frHome } from "@/content/fr/home";
import { firm as frFirm } from "@/content/fr/firm";
import { expertisesIndex as frExpertisesIndex } from "@/content/fr/expertises-index";
import { approach as frApproach } from "@/content/fr/approach";
import { contact as frContact } from "@/content/fr/contact";
import { legal as frLegal } from "@/content/fr/legal";
import { privacy as frPrivacy } from "@/content/fr/privacy";
import { bridge as frBridge } from "@/content/fr/expertises/bridge";
import { complex as frComplex } from "@/content/fr/expertises/complex";
import { refinancing as frRefinancing } from "@/content/fr/expertises/refinancing";
import { acquisition as frAcquisition } from "@/content/fr/expertises/acquisition";
import { development as frDevelopment } from "@/content/fr/expertises/development";
import { privateDebt as frPrivateDebt } from "@/content/fr/expertises/privateDebt";

import { common as enCommon } from "@/content/en/common";
import { home as enHome } from "@/content/en/home";
import { firm as enFirm } from "@/content/en/firm";
import { expertisesIndex as enExpertisesIndex } from "@/content/en/expertises-index";
import { approach as enApproach } from "@/content/en/approach";
import { contact as enContact } from "@/content/en/contact";
import { legal as enLegal } from "@/content/en/legal";
import { privacy as enPrivacy } from "@/content/en/privacy";
import { bridge as enBridge } from "@/content/en/expertises/bridge";
import { complex as enComplex } from "@/content/en/expertises/complex";
import { refinancing as enRefinancing } from "@/content/en/expertises/refinancing";
import { acquisition as enAcquisition } from "@/content/en/expertises/acquisition";
import { development as enDevelopment } from "@/content/en/expertises/development";
import { privateDebt as enPrivateDebt } from "@/content/en/expertises/privateDebt";

const frExpertises: Record<ExpertiseKey, ExpertiseContent> = {
  bridge: frBridge,
  complex: frComplex,
  refinancing: frRefinancing,
  acquisition: frAcquisition,
  development: frDevelopment,
  privateDebt: frPrivateDebt,
};

const enExpertises: Record<ExpertiseKey, ExpertiseContent> = {
  bridge: enBridge,
  complex: enComplex,
  refinancing: enRefinancing,
  acquisition: enAcquisition,
  development: enDevelopment,
  privateDebt: enPrivateDebt,
};

const raw: Record<Locale, Dictionary> = {
  fr: {
    common: frCommon,
    home: frHome,
    firm: frFirm,
    expertisesIndex: frExpertisesIndex,
    expertises: frExpertises,
    approach: frApproach,
    contact: frContact,
    legal: frLegal,
    privacy: frPrivacy,
  },
  en: {
    common: enCommon,
    home: enHome,
    firm: enFirm,
    expertisesIndex: enExpertisesIndex,
    expertises: enExpertises,
    approach: enApproach,
    contact: enContact,
    legal: enLegal,
    privacy: enPrivacy,
  },
};

/** Dictionnaires finalisés : la typographie française est appliquée une fois. */
const dictionaries: Record<Locale, Dictionary> = {
  fr: deepMapStrings(raw.fr, frenchTypography),
  en: raw.en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
