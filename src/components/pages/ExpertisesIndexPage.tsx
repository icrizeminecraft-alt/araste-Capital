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
        crumbs={[{ label: "ARASTE CAPITAL", href: `/${locale}` }, { label: dict.common.nav.expertises }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />
      <section className="container-x py-16 md:py-20">
        <ol className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:gap-y-20">
          {keys.map((key, i) => {
            const e = dict.expertises[key];
            const featured = i < 2;
            return (
              <Reveal as="li" key={key} className={featured ? "md:col-span-1" : ""} delay={(i % 2) as 0 | 1}>
                <article className="group grid gap-6">
                  <Link href={expertisePath(locale, key)} className="grain relative block aspect-[16/10] overflow-hidden bg-stone" tabIndex={-1} aria-hidden="true">
                    <Visual slot={visuals.expertises[key]} locale={locale} decorative sizes="(min-width: 48rem) 50vw, 100vw" className="transition-transform duration-700 ease-out-quart group-hover:scale-[1.02] motion-reduce:transition-none" />
                  </Link>
                  <div className="grid grid-cols-[3.5rem_1fr] gap-x-4">
                    <span aria-hidden="true" className="numeral text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="eyebrow mb-2 text-[0.68rem]">{e.eyebrow}</p>
                      <h2 className={`font-serif font-medium leading-tight text-forest ${featured ? "text-[2rem] md:text-[2.4rem]" : "text-[1.75rem] md:text-[2rem]"}`}>
                        <Link href={expertisePath(locale, key)} className="link-line">
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
