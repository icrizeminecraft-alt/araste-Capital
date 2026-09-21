import type { Metadata } from "next";
import { locales, localeTags, type Locale } from "@/lib/i18n";
import { alternatesFor, type ResolvedRoute } from "@/config/routes";
import { siteConfig } from "@/config/site";

/**
 * Métadonnées par page : titre, description, URL canonique et hreflang
 * (uniquement lorsque NEXT_PUBLIC_SITE_URL est renseignée), indexation,
 * aperçus de partage.
 */
export function buildMetadata({
  locale,
  title,
  description,
  route,
  siteName,
}: {
  locale: Locale;
  title: string;
  description: string;
  route: ResolvedRoute;
  siteName: string;
}): Metadata {
  const paths = alternatesFor(route);
  const base = siteConfig.siteUrl;
  const isHome = route.kind === "page" && route.key === "home";
  const fullTitle = isHome ? `${siteName} — ${title}` : `${title} — ${siteName}`;

  const metadata: Metadata = {
    // Le gabarit du layout ajoute « — ARASTE CAPITAL » ; l'accueil inverse l'ordre.
    title: isHome ? { absolute: fullTitle } : title,
    description,
    robots: siteConfig.indexable ? { index: true, follow: true } : { index: false, follow: false, nocache: true },
    openGraph: {
      type: "website",
      siteName,
      title: fullTitle,
      description,
      locale: localeTags[locale].replace("-", "_"),
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeTags[l].replace("-", "_")),
      url: base ? `${base}${paths[locale]}` : undefined,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };

  if (base) {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[localeTags[l]] = `${base}${paths[l]}`;
    languages["x-default"] = `${base}${paths.fr}`;
    metadata.alternates = { canonical: `${base}${paths[locale]}`, languages };
  }
  return metadata;
}
