import type { ExpertiseKey, GuideKey } from "@/config/routes";

export type Meta = {
  title: string;
  description: string;
};

export type CommonContent = {
  meta: {
    /** Suffixe ajouté aux titres de page. */
    siteName: string;
    defaultDescription: string;
  };
  nav: {
    firm: string;
    expertises: string;
    approach: string;
    guides: string;
    partners: string;
    contact: string;
    present: string;
    menuOpen: string;
    menuClose: string;
    menuLabel: string;
    menuTitle: string;
    skipToContent: string;
    home: string;
  };
  locale: {
    switchLabel: string;
    current: string;
    fr: string;
    en: string;
  };
  footer: {
    navigationTitle: string;
    expertisesTitle: string;
    contactTitle: string;
    legalTitle: string;
    languagesTitle: string;
    legal: string;
    privacy: string;
    contactPending: string;
    rights: string;
    previewNotice: string;
    tagline: string;
  };
  ui: {
    allExpertises: string;
    allGuides: string;
    breadcrumbLabel: string;
    homeCrumb: string;
    contents: string;
    keyPoints: string;
    relatedExpertises: string;
    relatedGuides: string;
    faq: string;
    readingTime: string; // "{minutes} min de lecture"
    mobileCta: string;
    presence: string;
    localTime: string;
    addressPending: string;
  };
  notFound: { title: string; body: string; cta: string };
  error: { eyebrow: string; title: string; body: string; retry: string; home: string };
  loading: string;
};

export type HomeContent = {
  meta: Meta;
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    secondary: string;
    caption: string;
  };
  stance: {
    eyebrow: string;
    title: string;
    body: string;
  };
  expertises: {
    eyebrow: string;
    title: string;
    body: string;
    all: string;
  };
  bridge: {
    eyebrow: string;
    title: string;
    body: string;
    points: { title: string; body: string }[];
    cta: string;
  };
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; body: string }[];
    cta: string;
  };
  situations: {
    eyebrow: string;
    title: string;
    note: string;
    cases: { title: string; body: string; expertise: ExpertiseKey }[];
  };
  guides: {
    eyebrow: string;
    title: string;
    body: string;
    all: string;
    featured: GuideKey[];
  };
  presence: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  interlocutors: {
    eyebrow: string;
    title: string;
    body: string;
    groups: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    secondary: string;
  };
};

export type FirmContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  principles: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  scope: { eyebrow: string; title: string; body: string; items: string[]; exclusionsTitle: string; exclusions: string[] };
  cta: { title: string; body: string; button: string };
};

export type ExpertisesIndexContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  cta: string;
};

export type ExpertiseContent = {
  meta: Meta;
  /** Titre principal (H1). */
  title: string;
  /** Titre court pour la navigation et les listes. */
  shortTitle: string;
  /** Sous-titre / traduction (ex. « Bridge finance »). */
  eyebrow: string;
  /** Résumé d'une ou deux phrases pour les listes. */
  summary: string;
  /** Chapeau de la page. */
  lead: string;
  sections: {
    needs: { title: string; intro: string; items: string[] };
    approach: { title: string; paragraphs: string[] };
    analysis: { title: string; intro: string; items: string[] };
    limits: { title: string; paragraphs: string[] };
  };
  related: ExpertiseKey[];
  /** Questions fréquentes propres à l'expertise (3 à 4). */
  faq: FaqItem[];
  cta: { title: string; body: string; button: string };
};

export type FaqItem = { question: string; answer: string };

/** Guide pédagogique (« Repères ») : contenu évolutif, sans date ni auteur nommé. */
export type GuideContent = {
  meta: Meta;
  title: string;
  eyebrow: string;
  summary: string;
  lead: string;
  sections: { title: string; paragraphs: string[]; items?: string[] }[];
  keyPoints: string[];
  relatedExpertises: ExpertiseKey[];
  relatedGuides: GuideKey[];
};

export type GuidesIndexContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  note: string;
};

export type PartnersContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  paragraphs: string[];
  profiles: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  method: { eyebrow: string; title: string; steps: { title: string; body: string }[] };
  commitments: { eyebrow: string; title: string; items: string[] };
  faq: FaqItem[];
  cta: { title: string; body: string; button: string };
};

export type ApproachContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  steps: { title: string; body: string; details: string[] }[];
  coordination: { eyebrow: string; title: string; body: string };
  cta: { title: string; body: string; button: string };
};

export type ContactContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  aside: {
    title: string;
    items: string[];
    confidentiality: string;
    detailsTitle: string;
    detailsPending: string;
  };
  faq: { title: string; lead: string; items: FaqItem[] };
  form: {
    stepLabel: string; // "Étape {current} sur {total}"
    stepsLabel: string;
    steps: { title: string; description: string }[];
    noscript: string;
    honeypotLabel: string;
    errorSummary: string; // "{count} champ(s) demandent votre attention."
    fields: {
      financingType: { label: string; placeholder: string; other: string };
      purpose: { label: string; options: { value: string; label: string }[] };
      amount: { label: string; hint: string };
      currency: { label: string };
      country: { label: string; hint: string };
      timeline: { label: string; options: { value: string; label: string }[] };
      description: { label: string; hint: string };
      assetType: { label: string; options: { value: string; label: string }[] };
      assetLocation: { label: string; hint: string };
      assetValue: { label: string; hint: string };
      valueBasis: { label: string; options: { value: string; label: string }[] };
      annualIncome: { label: string; hint: string };
      assetStatus: { label: string; options: { value: string; label: string }[] };
      borrowerType: { label: string; options: { value: string; label: string }[] };
      borrowerCountry: { label: string };
      equity: { label: string; hint: string };
      existingDebt: { label: string; hint: string };
      existingDebtMaturity: { label: string; hint: string };
      securityOffered: { label: string; hint: string };
      exitType: { label: string; options: { value: string; label: string }[] };
      exitTiming: { label: string; hint: string };
      role: { label: string; options: { value: string; label: string }[] };
      name: { label: string };
      company: { label: string };
      email: { label: string };
      phone: { label: string; hint: string };
      channel: { label: string; options: { value: string; label: string }[] };
      notes: { label: string; hint: string };
    };
    summaryTitle: string;
    summaryHint: string;
    edit: string;
    optional: string;
    required: string;
    next: string;
    back: string;
    submit: string;
    submitting: string;
    privacyNotice: string;
    privacyLink: string;
    errors: {
      required: string;
      email: string;
      amount: string;
      tooLong: string;
      tooShort: string;
      phone: string;
      phoneRequired: string;
      formInvalid: string;
      tooLarge: string;
      network: string;
      rateLimited: string;
      server: string;
      duplicate: string;
      token: string;
    };
    result: {
      sentTitle: string;
      sentBody: string;
      demoTitle: string;
      demoBody: string;
      demoBanner: string;
      newRequest: string;
    };
  };
};

export type LegalSection = {
  title: string;
  paragraphs: string[];
  /** Champs à compléter avant publication, affichés comme tels. */
  pending?: string[];
};

export type LegalContent = {
  meta: Meta;
  eyebrow: string;
  title: string;
  lead: string;
  pendingLabel: string;
  sections: LegalSection[];
  updated: string;
};

export type Dictionary = {
  common: CommonContent;
  home: HomeContent;
  firm: FirmContent;
  expertisesIndex: ExpertisesIndexContent;
  expertises: Record<ExpertiseKey, ExpertiseContent>;
  approach: ApproachContent;
  guidesIndex: GuidesIndexContent;
  guides: Record<GuideKey, GuideContent>;
  partners: PartnersContent;
  contact: ContactContent;
  legal: LegalContent;
  privacy: LegalContent;
};
