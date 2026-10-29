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
 * Ouverture : à gauche, le métier et la cible sur bleu nuit, dans une zone
 * calme ; à droite, la photographie en pleine hauteur jusqu'au bord de
 * l'écran. Sur petit écran, le texte précède l'image. C'est le seul moment
 * spectaculaire du site ; tout ce qui suit reste sobre, sur fond blanc.
 */
export function Hero({ locale, t }: { locale: Locale; t: HomeContent["hero"] }) {
  const ticket = siteConfig.ticketSize;
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-porcelain" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block" aria-hidden="true">
        <Visual slot={visuals.hero} locale={locale} priority decorative sizes="50vw" />
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-navy to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-navy/60 to-transparent" />
      </div>

      <div className="container-x grid grid-cols-1 lg:min-h-[calc(100svh-var(--header-h))] lg:max-h-[56rem] lg:grid-cols-12">
        <div className="flex flex-col justify-center py-20 md:py-24 lg:col-span-6 lg:pr-12 lg:py-28">
          <Eyebrow dark className="mb-6">{t.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="display-lg text-porcelain">
            {t.title}
          </h1>
          <div aria-hidden="true" className="mt-8 h-px w-16 bg-gold" />
          <p className="lead measure-lead mt-8 text-silver">{t.body}</p>
          {ticket.enabled ? <p className="mt-5 font-sans text-sm text-gold-light">{ticket.text[locale]}</p> : null}
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <ButtonLink href={pagePath(locale, "contact")} variant="porcelain">
              {t.cta}
            </ButtonLink>
            <Link href="#expertises" className="link-line self-start font-sans text-[0.9375rem] font-medium text-porcelain sm:self-auto">
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>

      <div className="relative aspect-[4/5] w-full sm:aspect-[3/2] lg:hidden" aria-hidden="true">
        <Visual slot={visuals.hero} locale={locale} priority decorative sizes="100vw" className="absolute inset-0" />
      </div>
    </section>
  );
}
