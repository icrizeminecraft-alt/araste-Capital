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
 * Ouverture éditoriale : le métier et la cible à gauche, sur fond blanc, et
 * une photographie d'architecture à droite, jusqu'au bord de l'écran, séparée
 * par une limite franche. Une seule image est chargée : cadrage vertical sur
 * grand écran, horizontal en dessous (voir `photos.altea`). Rien n'est animé :
 * le premier écran est lisible immédiatement.
 */
export function Hero({ locale, t }: { locale: Locale; t: HomeContent["hero"] }) {
  const ticket = siteConfig.ticketSize;
  return (
    <section className="relative bg-porcelain" aria-labelledby="hero-title">
      <div className="container-x grid grid-cols-1 lg:min-h-[min(76svh,52rem)] lg:grid-cols-12">
        <div className="flex flex-col justify-center py-16 md:py-20 lg:col-span-6 lg:py-24 lg:pr-16">
          <Eyebrow className="mb-6">{t.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="display-lg">
            {t.title}
          </h1>
          <div aria-hidden="true" className="mt-8 h-px w-16 bg-gold" />
          <p className="lead measure-lead mt-8 text-ink-soft">{t.body}</p>
          {ticket.enabled ? <p className="mt-5 font-sans text-sm text-gold-ink">{ticket.text[locale]}</p> : null}
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <ButtonLink href={pagePath(locale, "contact")}>{t.cta}</ButtonLink>
            <Link href={pagePath(locale, "expertises")} className="link-line self-start font-sans text-[0.9375rem] font-medium text-navy sm:self-auto">
              {t.secondary}
            </Link>
          </div>
        </div>
      </div>

      {/* Photographie : en flux sous le texte, puis moitié droite de l'écran à partir de 64rem. */}
      <div className="relative aspect-[4/3] w-full bg-porcelain-deep lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-1/2" aria-hidden="true">
        <Visual slot={visuals.hero} locale={locale} priority decorative sizes="(min-width: 64rem) 50vw, 100vw" className="lg:absolute lg:inset-0" />
      </div>
    </section>
  );
}
