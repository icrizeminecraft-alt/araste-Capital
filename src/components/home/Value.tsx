import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { Visual } from "@/components/visuals/Visual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";

/**
 * La valeur du conseil : une proposition de financement s'apprécie au-delà du
 * taux. Précédée d'une vue d'ensemble — un actif, un contexte d'investissement —
 * qui situe le propos sans légende.
 */
export function Value({ locale, t }: { locale: Locale; t: HomeContent["value"] }) {
  return (
    <section className="bg-porcelain-deep/60" aria-labelledby="value-title">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-silver lg:aspect-[21/9] lg:max-h-[34rem]" aria-hidden="true">
        <Visual slot={visuals.overview} locale={locale} decorative sizes="100vw" className="absolute inset-0" />
      </div>
      <div className="container-x section-y grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="value-title" eyebrow={t.eyebrow} title={t.title} />
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={1}>
          <p className="lead measure-lead text-ink-soft">{t.body}</p>
          <ol className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-navy pt-6 sm:grid-cols-2">
            {t.parameters.map((parameter, i) => (
              <li key={parameter} className="flex items-baseline gap-4 font-sans text-[0.9375rem] text-ink">
                <span aria-hidden="true" className="numeral text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {parameter}
              </li>
            ))}
          </ol>
          <ArrowLink href={pagePath(locale, "approach")} className="mt-10">
            {t.cta}
          </ArrowLink>
        </Reveal>
      </div>
    </section>
  );
}
