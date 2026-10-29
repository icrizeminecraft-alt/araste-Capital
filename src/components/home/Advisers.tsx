import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { Visual } from "@/components/visuals/Visual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink, ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Les conseils du client — avocats, notaires, experts-comptables, gestionnaires
 * de patrimoine — et la manière dont le cabinet coordonne les échanges avec eux.
 * Le détail architectural à droite apporte une respiration ; le texte porte l'information.
 */
export function Advisers({ locale, t }: { locale: Locale; t: HomeContent["advisers"] }) {
  return (
    <section className="bg-porcelain" aria-labelledby="advisers-title">
      <div className="container-x section-y grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <Reveal className="lg:col-span-6 lg:pr-8">
          <Eyebrow className="mb-6">{t.eyebrow}</Eyebrow>
          <h2 id="advisers-title" className="display-md">
            {t.title}
          </h2>
          <div aria-hidden="true" className="mt-8 h-px w-16 bg-gold" />
          <p className="measure mt-8 font-sans text-[1.0625rem] leading-relaxed text-ink">{t.body}</p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <ButtonLink href={pagePath(locale, "partners")} variant="outline">
              {t.cta}
            </ButtonLink>
            <ArrowLink href={pagePath(locale, "approach")}>{t.secondary}</ArrowLink>
          </div>
        </Reveal>
        <Reveal className="reveal-media relative aspect-[4/5] overflow-hidden bg-silver lg:col-span-5 lg:col-start-8" delay={1}>
          <Visual slot={visuals.detail} locale={locale} decorative sizes="(min-width: 64rem) 40vw, 100vw" className="absolute inset-0" />
        </Reveal>
      </div>
    </section>
  );
}
