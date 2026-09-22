import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { visuals } from "@/config/images";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Numeral } from "@/components/ui/Numeral";
import { Visual } from "@/components/visuals/Visual";
import { Faq } from "@/components/ui/Faq";
import { ContactCta } from "@/components/home/ContactCta";

export function PartnersPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.partners;
  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: dict.common.nav.partners }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />

      <section className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-5">
          {t.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} className="measure mt-6 font-sans text-[1.0625rem] leading-relaxed text-ink first:mt-0" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
              {p}
            </Reveal>
          ))}
        </div>
        <Reveal className="reveal-media grain relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[4/3] lg:col-span-6 lg:col-start-7 lg:aspect-[4/5]" delay={1}>
          <Visual slot={visuals.expertises.refinancing} locale={locale} decorative sizes="(min-width: 64rem) 50vw, 100vw" />
        </Reveal>
      </section>

      <section className="bg-ivory-deep/60" aria-labelledby="profiles-title">
        <div className="container-x section-y-sm">
          <Reveal>
            <SectionHeading id="profiles-title" eyebrow={t.profiles.eyebrow} title={t.profiles.title} className="max-w-3xl" />
          </Reveal>
          <dl className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.profiles.items.map((item, i) => (
              <Reveal key={item.title} className="border-t border-forest/40 pt-5" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <dt className="font-serif text-2xl font-medium leading-tight text-forest">{item.title}</dt>
                <dd className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x section-y-sm" aria-labelledby="method-title">
        <Reveal>
          <SectionHeading id="method-title" eyebrow={t.method.eyebrow} title={t.method.title} className="max-w-3xl" />
        </Reveal>
        <ol className="mt-14 grid grid-cols-1 border-t border-stone md:grid-cols-3 md:gap-x-10">
          {t.method.steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="relative border-b border-stone py-8 md:border-b-0 md:border-r md:pr-8 md:last:border-r-0" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
              <Numeral n={i + 1} className="text-xl lg:text-2xl" />
              <h3 className="mt-3 font-serif text-2xl font-medium text-forest md:text-[1.7rem] lg:mt-6">{step.title}</h3>
              <p className="mt-4 max-w-[38ch] font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="on-dark bg-forest text-ivory" aria-labelledby="commitments-title">
        <div className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="commitments-title" eyebrow={t.commitments.eyebrow} title={t.commitments.title} dark size="md" />
          </Reveal>
          <Reveal as="ul" className="space-y-5 border-t border-champagne/30 pt-6 lg:col-span-6 lg:col-start-7" delay={1}>
            {t.commitments.items.map((item) => (
              <li key={item} className="flex gap-4 font-sans text-[1.0625rem] leading-relaxed text-stone">
                <span aria-hidden="true" className="mt-[0.75em] h-px w-5 shrink-0 bg-champagne" />
                {item}
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <div className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-10 lg:col-start-2">
          <Faq id="faq-partners" title={dict.common.ui.faq} items={t.faq} />
        </div>
      </div>

      <ContactCta locale={locale} t={{ title: t.cta.title, body: t.cta.body, cta: t.cta.button }} />
    </>
  );
}
