import type { ExpertiseKey } from "@/config/routes";

/**
 * Configuration du site.
 *
 * Deux zones distinctes :
 *  - `brand` : éléments confirmés par le brief (nom, marque, signature).
 *  - `toConfirm` : champs à renseigner avant publication. Tant qu'ils sont
 *    vides, l'interface ne les affiche pas et n'invente rien.
 *
 * Les montants cibles et les expertises sont activables individuellement.
 */
export type ContactDetails = {
  email: string;
  phone: string;
  addressLines: string[];
  jurisdiction: string;
  registrationNumber: string;
  regulatoryStatus: string;
  dataController: string;
  host: string;
  emailProvider: string;
  retentionPeriod: string;
};

export const siteConfig = {
  brand: {
    /** Dénomination complète (identité juridique exacte à confirmer). */
    legalName: "ARASTE CAPITAL LTD",
    /** Marque mise en avant dans le design. */
    name: "ARASTE CAPITAL",
    tagline: {
      fr: "Conseil indépendant en financements professionnels",
      en: "Independent Financing Advisory",
    },
  },

  /** URL publique, depuis l'environnement. Vide = pas d'URL canonique ni de sitemap complet. */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, ""),

  /** Indexation (préproduction non indexable par défaut). */
  indexable: process.env.SITE_INDEXABLE === "true",

  /**
   * Coordonnées et informations légales — À COMPLÉTER AVANT PUBLICATION.
   * Laisser une chaîne vide pour masquer l'élément correspondant.
   */
  toConfirm: {
    email: "",
    phone: "",
    /** Adresse du siège (une ligne par élément). */
    addressLines: [],
    /** Pays / juridiction d'immatriculation. */
    jurisdiction: "",
    registrationNumber: "",
    /** Statut d'intermédiaire, agrément ou mention réglementaire éventuelle. */
    regulatoryStatus: "",
    /** Responsable du traitement (RGPD / UK GDPR) — nom et contact. */
    dataController: "",
    /** Hébergeur du site. */
    host: "",
    /** Prestataire de messagerie utilisé pour le formulaire. */
    emailProvider: "",
    /** Durée de conservation des demandes de contact. */
    retentionPeriod: "",
  } as ContactDetails,

  /**
   * Ciblage commercial des opérations — DÉSACTIVÉ PAR DÉFAUT.
   * Ce sont des objectifs à valider, jamais des opérations réalisées ni un
   * encours. Passer `enabled` à true seulement après validation.
   */
  ticketSize: {
    enabled: false,
    text: {
      fr: "Opérations envisagées à partir de 5 M€, pouvant atteindre ou dépasser 50 à 100 M€ selon les dossiers.",
      en: "Transactions considered from €5m, potentially reaching or exceeding €50m to €100m depending on the case.",
    },
  },

  /** Activation individuelle des expertises présentées. */
  expertises: {
    bridge: true,
    complex: true,
    refinancing: true,
    acquisition: true,
    development: true,
    privateDebt: true,
  } satisfies Record<ExpertiseKey, boolean>,

  /** Ordre éditorial (les deux premières dominent la hiérarchie). */
  expertiseOrder: [
    "bridge",
    "complex",
    "refinancing",
    "acquisition",
    "development",
    "privateDebt",
  ] as ExpertiseKey[],
} as const;

export type SiteConfig = typeof siteConfig;

export function enabledExpertises(): ExpertiseKey[] {
  return siteConfig.expertiseOrder.filter((key) => siteConfig.expertises[key]);
}

export function hasContactDetails(): boolean {
  const c = siteConfig.toConfirm;
  return Boolean(c.email || c.phone || c.addressLines.length > 0);
}
