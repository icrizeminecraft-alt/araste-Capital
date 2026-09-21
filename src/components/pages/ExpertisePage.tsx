import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { expertisePath, pagePath, type ExpertiseKey } from "@/config/routes";
import { visuals } from "@/config/images";
import { enabledExpertises, siteConfig } from "@/config/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/visuals/Visual";
import { ContactCta } from "@/components/home/ContactCta";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ExpertisePage({ locale, dict, expertise }: { locale: Locale; dict: Dictionary; expertise: ExpertiseKey }) {
  const e = dict.expertises[expertise];
  const index = enabledExpertises().indexOf(expertise) + 1;
  const related = e.related.filter((key) => siteConfig.expertises[key]);
  const s = e.sections;

  return (
    <>
      <PageIntro
        eyebrow={`${String(index).padStart(2, "0")} — ${e.eyebrow}`}
        title={e.title}
        lead={e.lead}
        crumbs={[
          { label: "ARASTE CAPITAL", href: `/${locale}` },
          { label: dict.common.nav.expertises, href: pagePath(locale, "expertises") },
          { label: e.shortTitle },
        ]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />

      <div className="container-x mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-12 lg:gap-8">
        <Reveal className="grain relative aspect-[16/9] overflow-hidden bg-stone lg:col-span-12 lg:aspect-[21/9]">
          <Visual slot={visuals.expertises[expertise]} locale={locale} decorative sizes="100vw" />
        </Reveal>
      </div>

      <section className="container-x grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-8" aria-labelledby="needs-title">
        <Reveal className="lg:col-span-4">
          <Eyebrow className="mb-4">01</Eyebrow>
          <h2 id="needs-title" className="display-sm">
            {s.needs.title}
          </h2>
          <p className="mt-4 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{s.needs.intro}</p>
        </Reveal>
        <Reveal as="ul" className="space-y-5 border-t border-forest pt-6 lg:col-span-7 lg:col-start-6" delay={1}>
          {s.needs.items.map((item) => (
            <li key={item} className="flex gap-4 font-sans text-[1.0625rem] leading-relaxed text-ink">
              <span aria-hidden="true" className="mt-[0.75em] h-px w-5 shrink-0 bg-champagne" />
              {item}
            </li>
          ))}
        </Reveal>
      </section>

      <section className="on-dark bg-forest text-ivory" aria-labelledby="approach-title">
        <div className="container-x grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow dark className="mb-4">02</Eyebrow>
            <h2 id="approach-title" className="display-sm text-ivory">
              {s.approach.title}
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {s.approach.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} className="measure mt-6 first:mt-0 font-sans text-[1.0625rem] leading-relaxed text-stone" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-8" aria-labelledby="analysis-title">
        <Reveal className="lg:col-span-4">
          <Eyebrow className="mb-4">03</Eyebrow>
          <h2 id="analysis-title" className="display-sm">
            {s.analysis.title}
          </h2>
          <p className="mt-4 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{s.analysis.intro}</p>
        </Reveal>
        <Reveal as="ol" className="grid grid-cols-1 gap-x-8 gap-y-4 border-t border-forest pt-6 sm:grid-cols-2 lg:col-span-7 lg:col-start-6" delay={1}>
          {s.analysis.items.map((item, i) => (
            <li key={item} className="flex gap-4 border-b border-stone py-3 font-sans text-[0.9375rem] leading-relaxed text-ink">
              <span aria-hidden="true" className="numeral text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </Reveal>
      </section>

      <section className="bg-ivory-deep/60" aria-labelledby="limits-title">
        <div className="container-x grid grid-cols-1 gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow className="mb-4">04</Eyebrow>
            <h2 id="limits-title" className="display-sm">
              {s.limits.title}
            </h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {s.limits.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} className="measure mt-6 first:mt-0 border-l border-champagne pl-5 font-sans text-[1.0625rem] leading-relaxed text-ink" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-x py-16 md:py-20" aria-labelledby="related-title">
          <Eyebrow as="h2" id="related-title" className="mb-6">{dict.common.footer.expertisesTitle}</Eyebrow>
          <ul className="grid grid-cols-1 gap-px border-t border-stone md:grid-cols-3">
            {related.map((key) => (
              <li key={key} className="border-b border-stone md:border-b-0 md:border-r md:last:border-r-0">
                <Link href={expertisePath(locale, key)} className="group block py-6 md:pr-6">
                  <span className="eyebrow block">{dict.expertises[key].eyebrow}</span>
                  <span className="link-line mt-2 inline-block font-serif text-2xl font-medium text-forest">{dict.expertises[key].title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ContactCta locale={locale} t={{ title: e.cta.title, body: e.cta.body, cta: e.cta.button }} />
    </>
  );
}
