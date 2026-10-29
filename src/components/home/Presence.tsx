import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { siteConfig } from "@/config/site";
import { visuals } from "@/config/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { LocalTime } from "@/components/layout/LocalClocks";
import { Visual } from "@/components/visuals/Visual";

/** Implantations : Andorre, Londres, Monaco, Émirats arabes unis — une photographie et l'heure locale pour chacune. */
export function Presence({ locale, t, dict }: { locale: Locale; t: HomeContent["presence"]; dict: Dictionary }) {
  const places = siteConfig.locations.map((l) => ({
    key: l.key,
    name: l.name[locale],
    timeZone: l.timeZone,
    slot: visuals.places[l.key],
  }));
  const timeLocale = locale === "fr" ? "fr-FR" : "en-GB";
  return (
    <section className="on-dark relative overflow-hidden bg-navy text-porcelain" aria-labelledby="presence-title">
      <div className="container-x section-y relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <SectionHeading id="presence-title" eyebrow={t.eyebrow} title={t.title} body={t.body} dark size="md" />
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-start lg:pt-2" delay={1}>
            <p className="font-sans text-sm text-silver">{t.note}</p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 md:gap-5 lg:mt-20 lg:grid-cols-4" aria-label={dict.common.ui.localTime}>
          {places.map((place, i) => (
            <Reveal as="li" key={place.key} className="group relative aspect-[3/4] overflow-hidden bg-navy-soft" delay={(i % 3) as 0 | 1 | 2}>
              <Visual slot={place.slot} locale={locale} decorative sizes="(min-width: 64rem) 22vw, 50vw" className="transition-transform duration-700 ease-out-quart group-hover:scale-[1.03] motion-reduce:transition-none" />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-6">
                <span className="font-serif text-xl font-medium leading-tight text-porcelain md:text-[1.75rem]">{place.name}</span>
                <LocalTime timeZone={place.timeZone} locale={timeLocale} className="shrink-0 font-sans text-xs text-gold-light md:text-sm" />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
