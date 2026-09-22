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
};

export const siteConfig = {
  brand: {
    /** Dénomination complète demandée (identité juridique exacte à confirmer). */
    legalName: "ARASTE CAPITAL LTD",
    /** Passer à true une fois la dénomination vérifiée : elle est alors publiée dans les données structurées. */
    legalNameConfirmed: false,
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
   * Coordonnées affichées (pied de page, page contact, données structurées) —
   * À COMPLÉTER AVANT PUBLICATION. Vides, elles sont masquées et signalées.
   * Les informations légales (immatriculation, siège, statut, hébergeur,
   * responsable du traitement, conservation) se renseignent dans les blocs
   * « à compléter » de src/content/{fr,en}/legal.ts et privacy.ts.
   */
  toConfirm: {
    email: "",
    phone: "",
    /** Adresse du siège (une ligne par élément). */
    addressLines: [],
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

  /**
   * Implantations affichées (accueil, pied de page, contact).
   * Les noms sont fournis par le cabinet ; adresses et entités juridiques
   * de chaque implantation restent À RENSEIGNER avant publication
   * (chaîne vide = non affichée). `timeZone` sert à l'heure locale.
   */
  locations: [
    { key: "andorra", name: { fr: "Andorre", en: "Andorra" }, timeZone: "Europe/Andorra", addressLines: [] as string[] },
    { key: "london", name: { fr: "Londres", en: "London" }, timeZone: "Europe/London", addressLines: [] as string[] },
    { key: "monaco", name: { fr: "Monaco", en: "Monaco" }, timeZone: "Europe/Monaco", addressLines: [] as string[] },
    { key: "uae", name: { fr: "Émirats arabes unis", en: "United Arab Emirates" }, timeZone: "Asia/Dubai", addressLines: [] as string[] },
  ],

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
