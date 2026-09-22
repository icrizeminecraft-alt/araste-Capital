import { siteConfig } from "@/config/site";
import type { Crumb } from "@/components/ui/Breadcrumb";

/** Fil d'Ariane en données structurées, uniquement lorsque l'URL publique est connue. */
export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const base = siteConfig.siteUrl;
  if (!base) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${base}${crumb.href}` } : {}),
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
