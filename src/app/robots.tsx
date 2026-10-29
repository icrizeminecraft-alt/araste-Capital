import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Fichier généré à la construction (également requis par l'export statique).
export const dynamic = "force-static";

/** Préproduction : tout est interdit aux robots. Publication : tout est ouvert sauf l'API. */
export default function robots(): MetadataRoute.Robots {
  if (!siteConfig.indexable || !siteConfig.siteUrl) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
