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
 * Ouverture : photographie en pleine page, voilée d'un dégradé bleu nuit, et
 * texte posé en bas à gauche. C'est le seul moment spectaculaire du site ;
 * tout ce qui suit reste sobre, sur fond blanc.
 */
export function Hero({ locale, t }: { locale: Locale; t: HomeContent["hero"] }) {
  const ticket = siteConfig.ticketSize;
  const slot = visuals.hero;
  const caption = slot.kind === "photo" ? slot.photo.caption?.[locale] : t.caption;
  return (
    <section className="on-dark relative isolate overflow-hidden bg-navy text-porcelain" aria-labelledby="hero-title">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Visual slot={slot} locale={locale} priority decorative sizes="100vw" />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/55 to-navy/15" />
        <div className="absolute inset-0 bg-linear-to-r from-navy/70 via-navy/25 to-transparent" />
      </div>

      <div className="container-x flex min-h-[calc(100svh-var(--header-h))] max-h-[60rem] flex-col justify-end pb-12 pt-32 md:pb-16 lg:pb-20">
        <div className="max-w-3xl">
          <Eyebrow dark className="mb-6">{t.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="display-xl text-porcelain">
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
        {caption ? <p className="mt-12 max-w-xl font-sans text-xs text-silver/70 md:ml-auto md:text-right">{caption}</p> : null}
      </div>
    </section>
  );
}
