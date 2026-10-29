import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { MarketsLine } from "@/components/home/MarketsLine";
import { Needs } from "@/components/home/Needs";
import { Value } from "@/components/home/Value";
import { Method } from "@/components/home/Method";
import { Advisers } from "@/components/home/Advisers";
import { HomeGuides } from "@/components/home/HomeGuides";
import { HomeContact } from "@/components/home/HomeContact";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const dict = getDictionary(l);
  return buildMetadata({
    locale: l,
    title: dict.home.meta.title,
    description: dict.home.meta.description,
    route: { kind: "page", key: "home" },
    siteName: dict.common.meta.siteName,
  });
}

/**
 * Accueil, dans l'ordre : le métier (ouverture), les marchés en une ligne,
 * les besoins du client, la valeur du conseil, la méthode, les conseils du
 * client, deux guides, puis la prise de contact. Chaque section répond à une
 * question nouvelle ; l'analyse détaillée reste dans les pages spécialisées.
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const dict = getDictionary(l);
  const t = dict.home;

  return (
    <>
      <Hero locale={l} t={t.hero} />
      <MarketsLine locale={l} label={dict.common.ui.markets} />
      <Needs locale={l} t={t.needs} dict={dict} />
      <Value locale={l} t={t.value} />
      <Method locale={l} t={t.approach} />
      <Advisers locale={l} t={t.advisers} />
      <HomeGuides locale={l} t={t.guides} dict={dict} />
      <HomeContact locale={l} t={t.contact} dict={dict} />
    </>
  );
}
