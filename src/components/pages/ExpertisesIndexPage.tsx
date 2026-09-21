import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { expertisePath } from "@/config/routes";
import { visuals } from "@/config/images";
import { enabledExpertises } from "@/config/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/visuals/Visual";
import { ContactCta } from "@/components/home/ContactCta";

export function ExpertisesIndexPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.expertisesIndex;
  const keys = enabledExpertises();
  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: dict.common.nav.expertises }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />
      <section className="container-x section-y-sm">
        <ol className="grid grid-cols-1 gap-y-14 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-24">
          {keys.map((key, i) => {
            const e = dict.expertises[key];
            const featured = i < 2;
            // Composition asymétrique : larges et étroites alternent, la seconde colonne est décalée.
            const layouts = ["lg:col-span-7", "lg:col-span-5 lg:mt-24", "lg:col-span-5", "lg:col-span-6 lg:col-start-7", "lg:col-span-7", "lg:col-span-5 lg:mt-24"];
            const wide = i % 3 === 0 || i === 3;
            return (
              <Reveal as="li" key={key} className={layouts[i % layouts.length]} delay={(i % 2) as 0 | 1}>
                <article className="group grid grid-cols-1 gap-6">
                  <Link href={expertisePath(locale, key)} className={`grain relative block overflow-hidden bg-stone ${wide ? "aspect-[4/3]" : "aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"}`} tabIndex={-1} aria-hidden="true">
                    <Visual slot={visuals.expertises[key]} locale={locale} decorative sizes="(min-width: 64rem) 50vw, 100vw" className="transition-transform duration-700 ease-out-quart group-hover:scale-[1.02] motion-reduce:transition-none" />
                  </Link>
                  <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4">
                    <span aria-hidden="true" className="numeral text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="eyebrow mb-2">{e.eyebrow}</p>
                      <h2 className={`font-serif font-medium leading-tight text-forest ${featured ? "text-[1.85rem] lg:text-[2.5rem]" : "text-[1.6rem] lg:text-[2.1rem]"}`}>
                        <Link href={expertisePath(locale, key)} className="decoration-champagne underline-offset-8 transition-colors group-hover:underline hover:underline">
                          {e.title}
                        </Link>
                      </h2>
                      <p className="mt-4 max-w-[52ch] font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{e.summary}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ol>
      </section>
      <ContactCta locale={locale} t={{ title: dict.home.contact.title, body: dict.home.contact.body, cta: t.cta }} />
    </>
  );
}
