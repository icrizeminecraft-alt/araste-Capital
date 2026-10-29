import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { expertisePath, pagePath } from "@/config/routes";
import { enabledExpertises } from "@/config/site";
import { visuals } from "@/config/images";
import { Hero } from "@/components/home/Hero";
import { ExpertiseList, type ExpertiseListItem } from "@/components/home/ExpertiseList";
import { BridgeFeature } from "@/components/home/BridgeFeature";
import { ApproachSteps } from "@/components/home/ApproachSteps";
import { Situations } from "@/components/home/Situations";
import { Founder } from "@/components/home/Founder";
import { HomeGuides } from "@/components/home/HomeGuides";
import { Markets } from "@/components/home/Markets";
import { HomePartners } from "@/components/home/HomePartners";
import { ContactCta } from "@/components/home/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

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
 * Accueil, dans l'ordre : dire le métier, reconnaître son enjeu, présenter
 * l'offre, identifier le responsable, le financement relais, la méthode en
 * quatre temps, les prescripteurs, les marchés, les guides, puis l'invitation.
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const dict = getDictionary(l);
  const t = dict.home;

  const items: ExpertiseListItem[] = enabledExpertises().map((key, i) => {
    const e = dict.expertises[key];
    const slot = visuals.expertises[key];
    return {
      key,
      number: String(i + 1).padStart(2, "0"),
      title: e.shortTitle,
      eyebrow: e.eyebrow,
      summary: e.summary,
      href: expertisePath(l, key),
      slot,
      featured: i < 2,
    };
  });

  return (
    <>
      <Hero locale={l} t={t.hero} />
      <Situations locale={l} t={t.situations} dict={dict} />

      <section id="expertises" className="container-x section-y scroll-mt-24" aria-labelledby="expertises-title">
        <Reveal>
          <SectionHeading id="expertises-title" eyebrow={t.expertises.eyebrow} title={t.expertises.title} body={t.expertises.body} className="max-w-3xl" />
        </Reveal>
        <div className="mt-14 lg:mt-20">
          <ExpertiseList items={items} allLabel={t.expertises.all} allHref={pagePath(l, "expertises")} locale={l} />
        </div>
      </section>

      <section className="border-t border-silver bg-porcelain-deep/60" aria-labelledby="founder-title">
        <div className="container-x section-y">
          <Founder locale={l} founder={{ ...dict.firm.founder, cta: t.founder.cta }} heading={{ eyebrow: t.founder.eyebrow, title: t.founder.title }} />
        </div>
      </section>

      {siteConfig.expertises.bridge ? <BridgeFeature locale={l} t={t.bridge} /> : null}
      <ApproachSteps locale={l} t={t.approach} />
      <HomePartners locale={l} t={t.partners} />
      <Markets locale={l} t={t.markets} />
      <HomeGuides locale={l} t={t.guides} dict={dict} />
      <ContactCta locale={l} t={t.contact} />
    </>
  );
}
