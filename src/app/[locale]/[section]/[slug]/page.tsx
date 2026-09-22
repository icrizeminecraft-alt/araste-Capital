import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { expertiseKeyFromSlug, expertiseSlugs, guideKeyFromSlug, guideKeys, guideSlugs, pageSlugs, type ExpertiseKey, type GuideKey } from "@/config/routes";
import { enabledExpertises, siteConfig } from "@/config/site";
import { ExpertisePage } from "@/components/pages/ExpertisePage";
import { GuidePage } from "@/components/pages/GuidePage";

type Props = { params: Promise<{ locale: string; section: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    ...enabledExpertises().map((key) => ({ locale, section: pageSlugs.expertises[locale], slug: expertiseSlugs[key][locale] })),
    ...guideKeys.map((key) => ({ locale, section: pageSlugs.guides[locale], slug: guideSlugs[key][locale] })),
  ]);
}

type Resolved = { kind: "expertise"; key: ExpertiseKey } | { kind: "guide"; key: GuideKey } | null;

export function resolveSlug(locale: Locale, section: string, slug: string): Resolved {
  if (section === pageSlugs.expertises[locale]) {
    const key = expertiseKeyFromSlug(locale, slug);
    return key && siteConfig.expertises[key] ? { kind: "expertise", key } : null;
  }
  if (section === pageSlugs.guides[locale]) {
    const key = guideKeyFromSlug(locale, slug);
    return key ? { kind: "guide", key } : null;
  }
  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) return {};
  const resolved = resolveSlug(locale, section, slug);
  if (!resolved) return {};
  const dict = getDictionary(locale);
  const content = resolved.kind === "expertise" ? dict.expertises[resolved.key] : dict.guides[resolved.key];
  return buildMetadata({
    locale,
    title: content.meta.title,
    description: content.meta.description,
    route: resolved,
    siteName: dict.common.meta.siteName,
  });
}

export default async function SlugRoute({ params }: Props) {
  const { locale, section, slug } = await params;
  if (!isLocale(locale)) notFound();
  const resolved = resolveSlug(locale, section, slug);
  if (!resolved) notFound();
  const dict = getDictionary(locale);
  if (resolved.kind === "guide") return <GuidePage locale={locale} dict={dict} guide={resolved.key} />;
  return <ExpertisePage locale={locale} dict={dict} expertise={resolved.key} />;
}
