import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/content";
import { locales } from "@/lib/i18n";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

/**
 * Page « introuvable » adressable (/fr/introuvable, /en/not-found) : utilisée
 * comme document d'erreur 404 par l'hébergeur en export statique.
 */
export const notFoundSlugs = { fr: "introuvable", en: "not-found" } as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, rest: [notFoundSlugs[locale]] }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale === "en" ? "en" : "fr");
  return { title: dict.common.notFound.title, robots: { index: false, follow: false } };
}

/** Toute autre route inconnue sous une langue valide affiche la page 404 localisée. */
export default async function CatchAll({ params }: { params: Promise<{ locale: string; rest: string[] }> }) {
  const { locale, rest } = await params;
  const expected = locale === "en" ? notFoundSlugs.en : notFoundSlugs.fr;
  if (rest.length !== 1 || rest[0] !== expected) notFound();
  const fr = getDictionary("fr");
  const en = getDictionary("en");
  return (
    <NotFoundContent
      copy={{
        fr: { ...fr.common.notFound, all: fr.common.ui.allExpertises },
        en: { ...en.common.notFound, all: en.common.ui.allExpertises },
      }}
    />
  );
}
