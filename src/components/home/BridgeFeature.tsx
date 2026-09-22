import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { expertisePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { Visual } from "@/components/visuals/Visual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Numeral } from "@/components/ui/Numeral";

/** Moment fort sur fond vert profond : la fonction de transition et la sortie. */
export function BridgeFeature({ locale, t }: { locale: Locale; t: HomeContent["bridge"] }) {
  return (
    <section className="on-dark bg-forest text-ivory" aria-labelledby="bridge-title">
      <div className="container-x section-y grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:pr-8">
          <Reveal>
            <Eyebrow dark className="mb-6">{t.eyebrow}</Eyebrow>
            <h2 id="bridge-title" className="display-lg text-ivory">
              {t.title}
            </h2>
            <p className="lead measure-lead mt-8 text-stone">{t.body}</p>
            <div className="mt-10">
              <ButtonLink href={expertisePath(locale, "bridge")} variant="ivory">
                {t.cta}
              </ButtonLink>
            </div>
          </Reveal>
          <ol className="mt-14 divide-y divide-champagne/25 border-y border-champagne/25">
            {t.points.map((point, i) => (
              <Reveal as="li" key={point.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 py-6" delay={(i + 1) as 1 | 2 | 3}>
                <Numeral n={i + 1} dark className="text-lg" />
                <div>
                  <h3 className="font-serif text-2xl font-medium text-ivory">{point.title}</h3>
                  <p className="mt-2 max-w-[48ch] font-sans text-[0.9375rem] leading-relaxed text-stone">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal className="reveal-media grain relative aspect-[4/3] overflow-hidden bg-forest-soft [--color-ivory:var(--color-forest)] lg:col-span-5 lg:col-start-8 lg:aspect-auto lg:min-h-full" delay={1}>
          <Visual slot={visuals.bridgeFeature} locale={locale} decorative sizes="(min-width: 64rem) 40vw, 100vw" className="lg:absolute lg:inset-0" />
        </Reveal>
      </div>
    </section>
  );
}
