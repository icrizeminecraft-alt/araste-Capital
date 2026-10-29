import type { MetadataRoute } from "next";
import { locales, localeTags } from "@/lib/i18n";
import { alternatesFor, guideKeys, pageKeys, publicPath, type ResolvedRoute } from "@/config/routes";
import { enabledExpertises, siteConfig } from "@/config/site";

// Fichier généré à la construction (également requis par l'export statique).
export const dynamic = "force-static";

/**
 * Plan du site : généré uniquement lorsque l'URL publique est configurée et
 * que le site est indexable. En préproduction, il reste vide.
 * Les alternatives de langue utilisent les mêmes codes que les pages (fr-FR,
 * en-GB, x-default).
 */
function languagesFor(route: ResolvedRoute, base: string): Record<string, string> {
  const paths = alternatesFor(route);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeTags[l]] = `${base}${publicPath(paths[l])}`;
  languages["x-default"] = `${base}${publicPath(paths.fr)}`;
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  if (!base || !siteConfig.indexable) return [];

  const routes: { route: ResolvedRoute; priority: number }[] = [];
  for (const key of pageKeys) {
    if (key === "legal" || key === "privacy") continue;
    routes.push({ route: { kind: "page", key }, priority: key === "home" ? 1 : 0.7 });
  }
  for (const key of enabledExpertises()) routes.push({ route: { kind: "expertise", key }, priority: 0.8 });
  for (const key of guideKeys) routes.push({ route: { kind: "guide", key }, priority: 0.6 });

  const entries: MetadataRoute.Sitemap = [];
  for (const { route, priority } of routes) {
    const paths = alternatesFor(route);
    const languages = languagesFor(route, base);
    for (const l of locales) {
      entries.push({
        url: `${base}${publicPath(paths[l])}`,
        changeFrequency: "monthly",
        priority: l === "fr" ? priority : Math.max(0.1, priority - 0.1),
        alternates: { languages },
      });
    }
  }
  return entries;
}
