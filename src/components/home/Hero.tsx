import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { siteConfig } from "@/config/site";
import { Visual } from "@/components/visuals/Visual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";

/**
 * Première section : composition éditoriale, texte sur ivoire et grande
 * composition architecturale à droite. Sur mobile, le titre et le bouton
 * précèdent le visuel.
 */
export function Hero({ locale, t }: { locale: Locale; t: HomeContent["hero"] }) {
  const ticket = siteConfig.ticketSize;
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-title">
      <div className="container-x grid gap-10 pb-12 pt-10 md:pt-14 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-0 lg:pt-16 xl:pt-20">
        <div className="lg:col-span-6 lg:pb-20 xl:col-span-5">
          <Eyebrow className="mb-6">{t.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="display-xl">
            {t.title}
          </h1>
          <p className="lead measure mt-8 text-ink-soft">{t.body}</p>
          {ticket.enabled ? (
            <p className="mt-5 font-sans text-sm text-champagne-deep">{ticket.text[locale]}</p>
          ) : null}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <ButtonLink href={pagePath(locale, "contact")}>{t.cta}</ButtonLink>
            <Link href="#expertises" className="link-line font-sans text-[0.9375rem] font-medium text-forest">
              {t.secondary}
            </Link>
          </div>
        </div>

        <figure className="relative lg:col-span-6 lg:col-start-7 xl:col-span-7 xl:col-start-6">
          <div className="grain relative aspect-[4/5] w-full overflow-hidden bg-stone sm:aspect-[5/6] lg:aspect-[4/5] lg:max-h-[82vh] xl:aspect-[5/6]">
            <Visual slot={visuals.hero} locale={locale} priority sizes="(min-width: 64rem) 55vw, 100vw" />
          </div>
          <figcaption className="mt-3 font-sans text-xs text-ink-soft lg:absolute lg:-bottom-8 lg:left-0">
            {t.caption}
          </figcaption>
          {/* Cartouche laiton : discrète signature architecturale */}
          <div
            aria-hidden="true"
            className="absolute -left-3 top-10 hidden h-px w-24 bg-champagne lg:block"
          />
        </figure>
      </div>
    </section>
  );
}
