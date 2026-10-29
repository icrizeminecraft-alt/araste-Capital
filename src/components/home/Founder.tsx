import type { Locale } from "@/lib/i18n";
import type { FirmContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { Visual } from "@/components/visuals/Visual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Monogram } from "@/components/brand/Monogram";

/**
 * Le responsable du cabinet : nom, fonction, angle d'intervention et contact.
 * Le portrait est servi par le registre des visuels ; tant qu'il n'est pas
 * livré, une carte au monogramme tient sa place, sans photographie de
 * substitution.
 */
export function Founder({
  locale,
  founder,
  heading,
  headingId,
  compact = false,
}: {
  locale: Locale;
  founder: FirmContent["founder"];
  /** Surtitre et titre de la section ; omis sur la page du cabinet, qui a les siens. */
  heading?: { eyebrow: string; title: string };
  /** Identifiant du titre de section, pour `aria-labelledby`. */
  headingId?: string;
  compact?: boolean;
}) {
  const portrait = visuals.portrait;
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
      <Reveal className={`${compact ? "lg:col-span-4" : "lg:col-span-5"}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-navy">
          {portrait ? (
            <Visual slot={portrait} locale={locale} sizes="(min-width: 64rem) 40vw, 100vw" />
          ) : (
            <div aria-hidden="true" className="flex h-full w-full flex-col items-center justify-center gap-6">
              <Monogram tone="porcelain" className="h-24 w-24 opacity-90" />
              <span className="font-serif text-2xl text-porcelain">{founder.name}</span>
              <span aria-hidden="true" className="h-px w-12 bg-gold" />
            </div>
          )}
        </div>
      </Reveal>

      <Reveal className={`${compact ? "lg:col-span-7 lg:col-start-6" : "lg:col-span-6 lg:col-start-7"}`} delay={1}>
        {heading ? (
          <>
            <Eyebrow className="mb-5">{heading.eyebrow}</Eyebrow>
            <h2 id={headingId ?? "founder-title"} className="display-md">
              {heading.title}
            </h2>
            <div aria-hidden="true" className="mt-8 h-px w-16 bg-gold" />
          </>
        ) : (
          <Eyebrow className="mb-5">{founder.eyebrow}</Eyebrow>
        )}
        {heading ? (
          <p className="mt-8 font-serif text-[1.85rem] font-medium leading-tight text-navy md:text-[2.2rem]">{founder.name}</p>
        ) : (
          <h2 id={headingId ?? "founder-name"} className="font-serif text-[1.85rem] font-medium leading-tight text-navy md:text-[2.2rem]">
            {founder.name}
          </h2>
        )}
        <p className="mt-2 font-sans text-sm text-gold-ink">{founder.role}</p>
        <div className="mt-6 space-y-4">
          {founder.paragraphs.map((paragraph, i) => (
            <p key={i} className="measure font-sans text-[1.0625rem] leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>
        <ArrowLink href={pagePath(locale, "contact")} className="mt-8">
          {founder.cta}
        </ArrowLink>
      </Reveal>
    </div>
  );
}
