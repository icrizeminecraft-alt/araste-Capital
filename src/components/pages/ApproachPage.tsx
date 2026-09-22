import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { visuals } from "@/config/images";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Numeral } from "@/components/ui/Numeral";
import { Visual } from "@/components/visuals/Visual";
import { ContactCta } from "@/components/home/ContactCta";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ApproachPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.approach;
  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: dict.common.nav.approach }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />

      <div className="container-x mt-12 md:mt-16">
        <Reveal className="reveal-media grain relative aspect-[16/9] overflow-hidden bg-stone lg:aspect-[21/9]">
          <Visual slot={visuals.approach} locale={locale} decorative sizes="100vw" />
        </Reveal>
      </div>

      <section className="container-x section-y-sm">
        <ol className="space-y-0 divide-y divide-stone border-y border-stone">
          {t.steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="grid grid-cols-1 gap-8 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
              <div className="lg:col-span-1">
                <Numeral n={i + 1} className="text-3xl" />
              </div>
              <div className="lg:col-span-5">
                <h2 className="display-sm">{step.title}</h2>
                <p className="measure mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink">{step.body}</p>
              </div>
              <ul className="space-y-3 lg:col-span-5 lg:col-start-8 lg:pt-3">
                {step.details.map((detail) => (
                  <li key={detail} className="flex gap-4 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-champagne" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-ivory-deep/60" aria-labelledby="coordination-title">
        <div className="container-x section-y-sm">
          <Reveal>
            <SectionHeading id="coordination-title" eyebrow={t.coordination.eyebrow} title={t.coordination.title} body={t.coordination.body} size="md" className="max-w-3xl" />
          </Reveal>
        </div>
      </section>

      <ContactCta locale={locale} t={{ title: t.cta.title, body: t.cta.body, cta: t.cta.button }} />
    </>
  );
}
