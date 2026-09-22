import type { MetadataRoute } from "next";
import { locales, localeTags } from "@/lib/i18n";
import { alternatesFor, guideKeys, pageKeys, type ResolvedRoute } from "@/config/routes";
import { enabledExpertises, siteConfig } from "@/config/site";

/**
 * Plan du site : généré uniquement lorsque l'URL publique est configurée et
 * que le site est indexable. En préproduction, il reste vide.
 * Les alternatives de langue utilisent les mêmes codes que les pages (fr-FR,
 * en-GB, x-default).
 */
function languagesFor(route: ResolvedRoute, base: string): Record<string, string> {
  const paths = alternatesFor(route);
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeTags[l]] = `${base}${paths[l]}`;
  languages["x-default"] = `${base}${paths.fr}`;
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
        url: `${base}${paths[l]}`,
        changeFrequency: "monthly",
        priority: l === "fr" ? priority : Math.max(0.1, priority - 0.1),
        alternates: { languages },
      });
    }
  }
  return entries;
}
