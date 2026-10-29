import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { siteConfig } from "@/config/site";
import { visuals } from "@/config/images";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/visuals/Visual";

/** Marchés d'intervention : une photographie par place. Des marchés, pas des bureaux. */
export function Markets({ locale, t }: { locale: Locale; t: HomeContent["markets"] }) {
  const places = siteConfig.locations.map((l) => ({ key: l.key, name: l.name[locale], slot: visuals.places[l.key] }));
  return (
    <section className="on-dark relative overflow-hidden bg-navy text-porcelain" aria-labelledby="markets-title">
      <div className="container-x section-y relative">
        <Reveal className="max-w-3xl">
          <SectionHeading id="markets-title" eyebrow={t.eyebrow} title={t.title} body={t.body} dark size="md" />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-3 md:gap-5 lg:mt-20 lg:grid-cols-4">
          {places.map((place, i) => (
            <Reveal as="li" key={place.key} className="group relative aspect-[3/4] overflow-hidden bg-navy-soft" delay={(i % 3) as 0 | 1 | 2}>
              <Visual slot={place.slot} locale={locale} decorative sizes="(min-width: 64rem) 22vw, 50vw" className="transition-transform duration-700 ease-out-quart group-hover:scale-[1.03] motion-reduce:transition-none" />
              <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/25 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4 font-serif text-xl font-medium leading-tight text-porcelain md:p-6 md:text-[1.75rem]">{place.name}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
