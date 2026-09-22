import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { guideKeys, guidePath } from "@/config/routes";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { ContactCta } from "@/components/home/ContactCta";
import { readingTime } from "@/lib/reading-time";

export function GuidesIndexPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.guidesIndex;
  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: dict.common.nav.guides }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />
      <section className="container-x section-y-sm">
        <ol className="grid grid-cols-1 gap-x-8 gap-y-2 border-t border-stone md:grid-cols-2 lg:grid-cols-3">
          {guideKeys.map((key, i) => {
            const g = dict.guides[key];
            return (
              <Reveal as="li" key={key} className="border-b border-stone" delay={(i % 3) as 0 | 1 | 2}>
                <Link href={guidePath(locale, key)} className="group block py-8 lg:py-10">
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="eyebrow">{g.eyebrow}</span>
                    <span className="font-sans text-xs text-ink-soft">{dict.common.ui.readingTime.replace("{minutes}", String(readingTime(g)))}</span>
                  </span>
                  <span className="mt-4 block font-serif text-[1.6rem] font-medium leading-tight text-forest transition-colors group-hover:text-champagne-deep lg:text-[1.85rem]">
                    {g.title}
                  </span>
                  <span className="mt-4 block max-w-[46ch] font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{g.summary}</span>
                  <span aria-hidden="true" className="mt-6 inline-block font-sans text-base text-champagne-deep transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                    →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
        <p className="mt-12 max-w-2xl border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft">{t.note}</p>
      </section>
      <ContactCta locale={locale} t={{ title: dict.home.contact.title, body: dict.home.contact.body, cta: dict.home.contact.cta }} />
    </>
  );
}
