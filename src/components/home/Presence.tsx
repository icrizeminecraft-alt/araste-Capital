import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LocalClocks } from "@/components/layout/LocalClocks";
import { Monogram } from "@/components/brand/Monogram";

/** Implantations : Andorre, Londres, Monaco, Émirats arabes unis, avec l'heure locale. */
export function Presence({ locale, t, dict }: { locale: Locale; t: HomeContent["presence"]; dict: Dictionary }) {
  const places = siteConfig.locations.map((l) => ({ key: l.key, name: l.name[locale], timeZone: l.timeZone }));
  return (
    <section className="on-dark relative overflow-hidden bg-forest text-ivory" aria-labelledby="presence-title">
      <Monogram tone="ivory" className="pointer-events-none absolute -right-16 -top-16 h-[28rem] w-[28rem] opacity-[0.045]" />
      <div className="container-x section-y relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="presence-title" eyebrow={t.eyebrow} title={t.title} body={t.body} dark size="md" />
          <p className="mt-6 font-sans text-sm text-stone">{t.note}</p>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-4" delay={1}>
          <LocalClocks places={places} locale={locale === "fr" ? "fr-FR" : "en-GB"} label={dict.common.ui.localTime} dark />
        </Reveal>
      </div>
    </section>
  );
}
