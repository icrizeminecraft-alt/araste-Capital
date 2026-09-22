import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { buildMetadata } from "@/lib/metadata";
import { expertisePath, pagePath } from "@/config/routes";
import { enabledExpertises } from "@/config/site";
import { visuals } from "@/config/images";
import { Hero } from "@/components/home/Hero";
import { Stance } from "@/components/home/Stance";
import { ExpertiseList, type ExpertiseListItem } from "@/components/home/ExpertiseList";
import { BridgeFeature } from "@/components/home/BridgeFeature";
import { ApproachSteps } from "@/components/home/ApproachSteps";
import { Situations } from "@/components/home/Situations";
import { Interlocutors } from "@/components/home/Interlocutors";
import { HomeGuides } from "@/components/home/HomeGuides";
import { Presence } from "@/components/home/Presence";
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
      plate: slot.kind === "plate" ? slot.plate : "arcade",
      featured: i < 2,
    };
  });

  return (
    <>
      <Hero locale={l} t={t.hero} />
      <Stance t={t.stance} />

      <section id="expertises" className="container-x section-y scroll-mt-24" aria-labelledby="expertises-title">
        <Reveal>
          <SectionHeading id="expertises-title" eyebrow={t.expertises.eyebrow} title={t.expertises.title} body={t.expertises.body} className="max-w-3xl" />
        </Reveal>
        <div className="mt-14 lg:mt-20">
          <ExpertiseList items={items} allLabel={t.expertises.all} allHref={pagePath(l, "expertises")} />
        </div>
      </section>

      {siteConfig.expertises.bridge ? <BridgeFeature locale={l} t={t.bridge} /> : null}
      <ApproachSteps locale={l} t={t.approach} />
      <Situations locale={l} t={t.situations} dict={dict} />
      <Interlocutors t={t.interlocutors} />
      <HomePartners locale={l} t={t.partners} />
      <Presence locale={l} t={t.presence} dict={dict} />
      <HomeGuides locale={l} t={t.guides} dict={dict} />
      <ContactCta locale={l} t={t.contact} />
    </>
  );
}
