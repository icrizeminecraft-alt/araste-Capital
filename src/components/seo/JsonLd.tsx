import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

/**
 * Données structurées : uniquement des faits confirmés (nom, marque, URL si
 * configurée). Aucune adresse, téléphone ou zone desservie tant que ces
 * éléments ne sont pas renseignés dans la configuration.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const c = siteConfig.toConfirm;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand.name,
    legalName: siteConfig.brand.legalName,
    slogan: siteConfig.brand.tagline[locale],
  };
  if (siteConfig.siteUrl) {
    data.url = `${siteConfig.siteUrl}/${locale}`;
    data.logo = `${siteConfig.siteUrl}/icon.svg`;
  }
  if (c.email) data.email = c.email;
  if (c.phone) data.telephone = c.phone;
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}
