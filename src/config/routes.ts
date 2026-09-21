import { type Locale, locales, isLocale } from "@/lib/i18n";

/**
 * Registre des pages et de leurs slugs localisés.
 * Les URL françaises et anglaises sont différentes ; le sélecteur de langue
 * s'appuie sur ce registre pour conserver la page correspondante.
 */
export const pageKeys = [
  "home",
  "firm",
  "expertises",
  "approach",
  "contact",
  "legal",
  "privacy",
] as const;
export type PageKey = (typeof pageKeys)[number];

export const pageSlugs: Record<PageKey, Record<Locale, string>> = {
  home: { fr: "", en: "" },
  firm: { fr: "le-cabinet", en: "the-firm" },
  expertises: { fr: "expertises", en: "expertise" },
  approach: { fr: "notre-approche", en: "our-approach" },
  contact: { fr: "contact", en: "contact" },
  legal: { fr: "mentions-legales", en: "legal-notice" },
  privacy: { fr: "confidentialite", en: "privacy" },
};

export const expertiseKeys = [
  "bridge",
  "complex",
  "refinancing",
  "acquisition",
  "development",
  "privateDebt",
] as const;
export type ExpertiseKey = (typeof expertiseKeys)[number];

export const expertiseSlugs: Record<ExpertiseKey, Record<Locale, string>> = {
  bridge: { fr: "financement-relais", en: "bridge-finance" },
  complex: { fr: "financements-complexes", en: "complex-financing" },
  refinancing: { fr: "refinancement", en: "refinancing" },
  acquisition: { fr: "acquisition-immobiliere", en: "property-acquisition" },
  development: { fr: "promotion-immobiliere", en: "property-development" },
  privateDebt: { fr: "dette-privee", en: "private-debt" },
};

export function pagePath(locale: Locale, key: PageKey): string {
  const slug = pageSlugs[key][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

export function expertisePath(locale: Locale, key: ExpertiseKey): string {
  return `/${locale}/${pageSlugs.expertises[locale]}/${expertiseSlugs[key][locale]}`;
}

export function pageKeyFromSlug(locale: Locale, slug: string): PageKey | null {
  for (const key of pageKeys) {
    if (key !== "home" && pageSlugs[key][locale] === slug) return key;
  }
  return null;
}

export function expertiseKeyFromSlug(locale: Locale, slug: string): ExpertiseKey | null {
  for (const key of expertiseKeys) {
    if (expertiseSlugs[key][locale] === slug) return key;
  }
  return null;
}

export type ResolvedRoute =
  | { kind: "page"; key: PageKey }
  | { kind: "expertise"; key: ExpertiseKey }
  | { kind: "unknown" };

/** Analyse un chemin (« /fr/expertises/financement-relais ») en route connue. */
export function resolvePath(pathname: string): { locale: Locale; route: ResolvedRoute } | null {
  const segments = pathname.split("/").filter(Boolean);
  const [maybeLocale, first, second, ...rest] = segments;
  if (!isLocale(maybeLocale)) return null;
  const locale = maybeLocale;
  if (rest.length > 0) return { locale, route: { kind: "unknown" } };
  if (!first) return { locale, route: { kind: "page", key: "home" } };
  if (!second) {
    const key = pageKeyFromSlug(locale, first);
    return { locale, route: key ? { kind: "page", key } : { kind: "unknown" } };
  }
  if (first === pageSlugs.expertises[locale]) {
    const key = expertiseKeyFromSlug(locale, second);
    return { locale, route: key ? { kind: "expertise", key } : { kind: "unknown" } };
  }
  return { locale, route: { kind: "unknown" } };
}

/** Chemin équivalent dans l'autre langue (retombe sur l'accueil si inconnu). */
export function alternatePath(pathname: string, target: Locale): string {
  const resolved = resolvePath(pathname);
  if (!resolved || resolved.route.kind === "unknown") return `/${target}`;
  if (resolved.route.kind === "page") return pagePath(target, resolved.route.key);
  return expertisePath(target, resolved.route.key);
}

/** Toutes les URL localisées d'une route, pour hreflang et le sitemap. */
export function alternatesFor(route: ResolvedRoute): Record<Locale, string> {
  const out = {} as Record<Locale, string>;
  for (const locale of locales) {
    out[locale] =
      route.kind === "page"
        ? pagePath(locale, route.key)
        : route.kind === "expertise"
          ? expertisePath(locale, route.key)
          : `/${locale}`;
  }
  return out;
}
