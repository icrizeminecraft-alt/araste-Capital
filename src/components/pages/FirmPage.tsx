import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { visuals } from "@/config/images";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/visuals/Visual";
import { ContactCta } from "@/components/home/ContactCta";
import { siteConfig } from "@/config/site";

export function FirmPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.firm;
  const ticket = siteConfig.ticketSize;
  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: dict.common.nav.firm }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />

      <section className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <Reveal className="reveal-media grain relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[4/3] lg:col-span-6">
          <Visual slot={visuals.firm} locale={locale} decorative sizes="(min-width: 64rem) 50vw, 100vw" />
        </Reveal>
        <div className="lg:col-span-5 lg:col-start-8">
          {t.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} className="measure mt-6 first:mt-0 font-sans text-[1.0625rem] leading-relaxed text-ink" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
              {p}
            </Reveal>
          ))}
          {ticket.enabled ? <p className="mt-8 border-l border-champagne pl-4 font-sans text-sm text-champagne-deep">{ticket.text[locale]}</p> : null}
        </div>
      </section>

      <section className="bg-ivory-deep/60" aria-labelledby="principles-title">
        <div className="container-x section-y-sm">
          <Reveal>
            <SectionHeading id="principles-title" eyebrow={t.principles.eyebrow} title={t.principles.title} className="max-w-3xl" />
          </Reveal>
          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.principles.items.map((item, i) => (
              <Reveal key={item.title} className="border-t border-forest/40 pt-5" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <dt className="font-serif text-2xl font-medium text-forest">{item.title}</dt>
                <dd className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8" aria-labelledby="scope-title">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="scope-title" eyebrow={t.scope.eyebrow} title={t.scope.title} body={t.scope.body} size="md" />
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <ul className="space-y-4 border-t border-forest pt-5">
              {t.scope.items.map((item) => (
                <li key={item} className="flex gap-4 font-sans text-[0.9375rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-champagne" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <p className="eyebrow mb-4">{t.scope.exclusionsTitle}</p>
            <ul className="space-y-4 border-t border-stone pt-5">
              {t.scope.exclusions.map((item) => (
                <li key={item} className="flex gap-4 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-stone-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ContactCta locale={locale} t={{ title: t.cta.title, body: t.cta.body, cta: t.cta.button }} />
    </>
  );
}
