import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { expertisePath, pageKeys, pagePath } from "@/config/routes";
import { enabledExpertises, siteConfig } from "@/config/site";

/**
 * Plan du site : généré uniquement lorsque l'URL publique est configurée et
 * que le site est indexable. En préproduction, il reste vide.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  if (!base || !siteConfig.indexable) return [];

  const entries: MetadataRoute.Sitemap = [];
  const lastModified = new Date();

  for (const key of pageKeys) {
    if (key === "legal" || key === "privacy") continue;
    entries.push({
      url: `${base}${pagePath("fr", key)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: key === "home" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${base}${pagePath(l, key)}`])) },
    });
    entries.push({
      url: `${base}${pagePath("en", key)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: key === "home" ? 0.9 : 0.6,
    });
  }
  for (const key of enabledExpertises()) {
    for (const l of locales) {
      entries.push({
        url: `${base}${expertisePath(l, key)}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: { languages: Object.fromEntries(locales.map((x) => [x, `${base}${expertisePath(x, key)}`])) },
      });
    }
  }
  return entries;
}
