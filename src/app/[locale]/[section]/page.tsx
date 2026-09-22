import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { pageKeyFromSlug, pageKeys, pageSlugs } from "@/config/routes";
import { FirmPage } from "@/components/pages/FirmPage";
import { ExpertisesIndexPage } from "@/components/pages/ExpertisesIndexPage";
import { ApproachPage } from "@/components/pages/ApproachPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { LegalPage } from "@/components/pages/LegalPage";
import { GuidesIndexPage } from "@/components/pages/GuidesIndexPage";

type Props = { params: Promise<{ locale: string; section: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    pageKeys.filter((key) => key !== "home").map((key) => ({ locale, section: pageSlugs[key][locale] })),
  );
}

function metaFor(locale: "fr" | "en", section: string) {
  const key = pageKeyFromSlug(locale, section);
  if (!key) return null;
  const dict = getDictionary(locale);
  const meta =
    key === "firm"
      ? dict.firm.meta
      : key === "expertises"
        ? dict.expertisesIndex.meta
        : key === "approach"
          ? dict.approach.meta
          : key === "guides"
            ? dict.guidesIndex.meta
          : key === "contact"
            ? dict.contact.meta
            : key === "legal"
              ? dict.legal.meta
              : dict.privacy.meta;
  return { key, dict, meta };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isLocale(locale)) return {};
  const resolved = metaFor(locale, section);
  if (!resolved) return {};
  return buildMetadata({
    locale,
    title: resolved.meta.title,
    description: resolved.meta.description,
    route: { kind: "page", key: resolved.key },
    siteName: resolved.dict.common.meta.siteName,
  });
}

export default async function SectionPage({ params }: Props) {
  const { locale, section } = await params;
  if (!isLocale(locale)) notFound();
  const resolved = metaFor(locale, section);
  if (!resolved) notFound();
  const { key, dict } = resolved;

  switch (key) {
    case "firm":
      return <FirmPage locale={locale} dict={dict} />;
    case "expertises":
      return <ExpertisesIndexPage locale={locale} dict={dict} />;
    case "approach":
      return <ApproachPage locale={locale} dict={dict} />;
    case "guides":
      return <GuidesIndexPage locale={locale} dict={dict} />;
    case "contact":
      return <ContactPage locale={locale} dict={dict} />;
    case "legal":
      return <LegalPage locale={locale} dict={dict} content={dict.legal} crumbLabel={dict.common.footer.legal} />;
    case "privacy":
      return <LegalPage locale={locale} dict={dict} content={dict.privacy} crumbLabel={dict.common.footer.privacy} />;
    default:
      notFound();
  }
}
