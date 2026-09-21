import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { expertiseKeyFromSlug, expertiseSlugs, pageSlugs } from "@/config/routes";
import { enabledExpertises, siteConfig } from "@/config/site";
import { ExpertisePage } from "@/components/pages/ExpertisePage";

type Props = { params: Promise<{ locale: string; section: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    enabledExpertises().map((key) => ({
      locale,
      section: pageSlugs.expertises[locale],
      slug: expertiseSlugs[key][locale],
    })),
  );
}

function resolve(locale: "fr" | "en", section: string, slug: string) {
  if (section !== pageSlugs.expertises[locale]) return null;
  const key = expertiseKeyFromSlug(locale, slug);
  if (!key || !siteConfig.expertises[key]) return null;
  return key;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) return {};
  const key = resolve(locale, section, slug);
  if (!key) return {};
  const dict = getDictionary(locale);
  const e = dict.expertises[key];
  return buildMetadata({
    locale,
    title: e.meta.title,
    description: e.meta.description,
    route: { kind: "expertise", key },
    siteName: dict.common.meta.siteName,
  });
}

export default async function ExpertiseRoute({ params }: Props) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) notFound();
  const key = resolve(locale, section, slug);
  if (!key) notFound();
  const dict = getDictionary(locale);
  return <ExpertisePage locale={locale} dict={dict} expertise={key} />;
}
