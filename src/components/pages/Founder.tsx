import type { Locale } from "@/lib/i18n";
import type { FirmContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { Visual } from "@/components/visuals/Visual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Le module fondateur, présent une seule fois, sur la page du cabinet : nom,
 * fonction, quelques phrases factuelles et le moyen d'entrer en relation.
 * Le portrait est facultatif ; tant qu'il n'est pas livré, le module se
 * présente sans image, sans photographie de substitution.
 */
export function Founder({ locale, founder, headingId = "founder-title" }: { locale: Locale; founder: FirmContent["founder"]; headingId?: string }) {
  const portrait = visuals.portrait;
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
      <Reveal className="lg:col-span-5">
        <Eyebrow className="mb-5">{founder.eyebrow}</Eyebrow>
        <h2 id={headingId} className="display-md">
          {founder.title}
        </h2>
        {portrait ? (
          <div className="relative mt-10 aspect-[4/5] max-w-sm overflow-hidden bg-porcelain-deep">
            <Visual slot={portrait} locale={locale} sizes="(min-width: 64rem) 30vw, 100vw" className="absolute inset-0" />
          </div>
        ) : null}
      </Reveal>

      <Reveal className="lg:col-span-6 lg:col-start-7" delay={1}>
        <div className="border-t border-navy pt-6">
          <p className="font-serif text-[1.85rem] font-medium leading-tight text-navy md:text-[2.2rem]">{founder.name}</p>
          <p className="mt-2 font-sans text-sm text-gold-ink">{founder.role}</p>
        </div>
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
