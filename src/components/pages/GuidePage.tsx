import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { expertisePath, guidePath, pagePath, type GuideKey } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactCta } from "@/components/home/ContactCta";
import { readingTime } from "@/lib/reading-time";

export function GuidePage({ locale, dict, guide }: { locale: Locale; dict: Dictionary; guide: GuideKey }) {
  const g = dict.guides[guide];
  const related = g.relatedExpertises.filter((key) => siteConfig.expertises[key]);
  const minutes = readingTime(g);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title,
    description: g.meta.description,
    inLanguage: locale,
    author: { "@type": "Organization", name: siteConfig.brand.name },
    publisher: { "@type": "Organization", name: siteConfig.brand.name },
    ...(siteConfig.siteUrl ? { mainEntityOfPage: `${siteConfig.siteUrl}${guidePath(locale, guide)}` } : {}),
  };

  return (
    <>
      <PageIntro
        eyebrow={`${dict.common.nav.guides} — ${g.eyebrow}`}
        title={g.title}
        lead={g.lead}
        crumbs={[
          { label: dict.common.ui.homeCrumb, href: `/${locale}` },
          { label: dict.common.nav.guides, href: pagePath(locale, "guides") },
          { label: g.title },
        ]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      >
        <p className="mt-6 font-sans text-sm text-ink-soft">{dict.common.ui.readingTime.replace("{minutes}", String(minutes))}</p>
      </PageIntro>

      <article className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <aside className="order-2 lg:order-1 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <Reveal className="border-t-2 border-forest pt-5">
              <h2 className="eyebrow mb-5">{dict.common.ui.keyPoints}</h2>
              <ul className="space-y-4">
                {g.keyPoints.map((point, i) => (
                  <li key={point} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-2 font-sans text-[0.9375rem] leading-relaxed text-ink">
                    <span aria-hidden="true" className="numeral text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            {related.length > 0 ? (
              <Reveal className="mt-12" delay={1}>
                <h2 className="eyebrow mb-4">{dict.common.ui.relatedExpertises}</h2>
                <ul className="space-y-3 border-t border-stone pt-4">
                  {related.map((key) => (
                    <li key={key}>
                      <Link href={expertisePath(locale, key)} className="link-line font-serif text-xl text-forest">
                        {dict.expertises[key].shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}
          </div>
        </aside>

        <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6">
          {g.sections.map((section, i) => (
            <Reveal as="section" key={section.title} className="border-t border-stone py-10 first:border-t-0 first:pt-0" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
              <Eyebrow className="mb-3">{String(i + 1).padStart(2, "0")}</Eyebrow>
              <h2 className="display-sm">{section.title}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="measure mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink">
                  {p}
                </p>
              ))}
              {section.items && section.items.length > 0 ? (
                <ul className="mt-6 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-4 font-sans text-[1rem] leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-[0.75em] h-px w-5 shrink-0 bg-champagne" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
          <p className="mt-10 border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft">{dict.guidesIndex.note}</p>
        </div>
      </article>

      {g.relatedGuides.length > 0 ? (
        <section className="bg-ivory-deep/60" aria-labelledby="related-guides-title">
          <div className="container-x section-y-sm">
            <Eyebrow as="h2" id="related-guides-title" className="mb-6">
              {dict.common.ui.relatedGuides}
            </Eyebrow>
            <ul className="grid grid-cols-1 gap-px border-t border-stone-dark/60 md:grid-cols-2">
              {g.relatedGuides.map((key) => (
                <li key={key} className="border-b border-stone-dark/60 md:odd:border-r md:odd:pr-8">
                  <Link href={guidePath(locale, key)} className="group block py-6">
                    <span className="eyebrow block">{dict.guides[key].eyebrow}</span>
                    <span className="mt-2 inline-flex items-baseline gap-2 font-serif text-2xl font-medium text-forest transition-colors group-hover:text-champagne-deep">
                      {dict.guides[key].title}
                      <span aria-hidden="true" className="font-sans text-base text-champagne-deep">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href={pagePath(locale, "guides")} className="link-line font-sans text-[0.9375rem] font-medium text-forest">
                {dict.common.ui.allGuides}
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <ContactCta locale={locale} t={{ title: dict.home.contact.title, body: dict.home.contact.body, cta: dict.home.contact.cta }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
