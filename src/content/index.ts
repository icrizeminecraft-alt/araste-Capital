import "server-only";
import type { Locale } from "@/lib/i18n";
import type { Dictionary, ExpertiseContent, GuideContent } from "@/content/types";
import type { ExpertiseKey, GuideKey } from "@/config/routes";
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
import { guidesIndex as frGuidesIndex } from "@/content/fr/guides-index";
import { bridgeBasics as frBridgeBasics } from "@/content/fr/guides/bridgeBasics";
import { exitStrategy as frExitStrategy } from "@/content/fr/guides/exitStrategy";
import { preparingFile as frPreparingFile } from "@/content/fr/guides/preparingFile";
import { refinancingSignals as frRefinancingSignals } from "@/content/fr/guides/refinancingSignals";
import { developmentPhases as frDevelopmentPhases } from "@/content/fr/guides/developmentPhases";
import { privateDebtWhen as frPrivateDebtWhen } from "@/content/fr/guides/privateDebtWhen";

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
import { guidesIndex as enGuidesIndex } from "@/content/en/guides-index";
import { bridgeBasics as enBridgeBasics } from "@/content/en/guides/bridgeBasics";
import { exitStrategy as enExitStrategy } from "@/content/en/guides/exitStrategy";
import { preparingFile as enPreparingFile } from "@/content/en/guides/preparingFile";
import { refinancingSignals as enRefinancingSignals } from "@/content/en/guides/refinancingSignals";
import { developmentPhases as enDevelopmentPhases } from "@/content/en/guides/developmentPhases";
import { privateDebtWhen as enPrivateDebtWhen } from "@/content/en/guides/privateDebtWhen";

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

const frGuides: Record<GuideKey, GuideContent> = {
  bridgeBasics: frBridgeBasics,
  exitStrategy: frExitStrategy,
  preparingFile: frPreparingFile,
  refinancingSignals: frRefinancingSignals,
  developmentPhases: frDevelopmentPhases,
  privateDebtWhen: frPrivateDebtWhen,
};

const enGuides: Record<GuideKey, GuideContent> = {
  bridgeBasics: enBridgeBasics,
  exitStrategy: enExitStrategy,
  preparingFile: enPreparingFile,
  refinancingSignals: enRefinancingSignals,
  developmentPhases: enDevelopmentPhases,
  privateDebtWhen: enPrivateDebtWhen,
};

const raw: Record<Locale, Dictionary> = {
  fr: {
    common: frCommon,
    home: frHome,
    firm: frFirm,
    expertisesIndex: frExpertisesIndex,
    expertises: frExpertises,
    approach: frApproach,
    guidesIndex: frGuidesIndex,
    guides: frGuides,
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
    guidesIndex: enGuidesIndex,
    guides: enGuides,
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
