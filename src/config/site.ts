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
    /** Dénomination sociale (SASU de droit français, RCS Grenoble). */
    legalName: "ARASTE CAPITAL",
    /** Dénomination vérifiée : publiée dans les données structurées. */
    legalNameConfirmed: true,
    /** Marque mise en avant dans le design. */
    name: "ARASTE CAPITAL",
    tagline: {
      fr: "Conseil indépendant en financement immobilier et opérations complexes",
      en: "Independent advisory in real estate finance and complex transactions",
    },
  },

  /** URL publique, depuis l'environnement. Vide = pas d'URL canonique ni de sitemap complet. */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/\/$/, ""),

  /** Indexation (préproduction non indexable par défaut). */
  indexable: process.env.SITE_INDEXABLE === "true",
  /**
   * Export statique (`npm run build:static`) : pages en fichiers HTML pour un
   * hébergement web classique (FTP, cPanel, Apache, nginx), sans serveur Node.
   * Les URL se terminent alors par une barre oblique (/fr/contact/).
   */
  staticExport: process.env.STATIC_EXPORT === "true",
  /**
   * Hébergement statique uniquement : URL d'une instance Node de ce même site
   * qui reçoit les fiches d'opération (ex. https://app.exemple.com). Vide :
   * le formulaire reste en mode démonstration.
   */
  contactEndpoint: (process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "").replace(/\/$/, ""),

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
   * Marchés d'intervention affichés (accueil, pied de page, contact, mentions
   * légales) : des marchés, pas des bureaux. La France, pays d'immatriculation
   * du cabinet, ouvre la liste. Une adresse ne s'affiche que si elle est
   * renseignée (un bureau réel ou un représentant).
   */
  locations: [
    { key: "france", name: { fr: "France", en: "France" }, timeZone: "Europe/Paris", addressLines: [] as string[] },
    { key: "monaco", name: { fr: "Monaco", en: "Monaco" }, timeZone: "Europe/Monaco", addressLines: [] as string[] },
    { key: "switzerland", name: { fr: "Suisse", en: "Switzerland" }, timeZone: "Europe/Zurich", addressLines: [] as string[] },
    { key: "london", name: { fr: "Londres", en: "London" }, timeZone: "Europe/London", addressLines: [] as string[] },
    { key: "andorra", name: { fr: "Andorre", en: "Andorra" }, timeZone: "Europe/Andorra", addressLines: [] as string[] },
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
