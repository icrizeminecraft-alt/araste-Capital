import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { guidePath, pagePath } from "@/config/routes";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";

export function HomeGuides({ locale, t, dict }: { locale: Locale; t: HomeContent["guides"]; dict: Dictionary }) {
  return (
    <section className="border-t border-stone" aria-labelledby="guides-title">
      <div className="container-x section-y grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <SectionHeading id="guides-title" eyebrow={t.eyebrow} title={t.title} body={t.body} size="md" />
          <div className="mt-8">
            <ArrowLink href={pagePath(locale, "guides")}>{t.all}</ArrowLink>
          </div>
        </Reveal>
        <ol className="border-t border-stone lg:col-span-7 lg:col-start-6">
          {t.featured.map((key, i) => {
            const g = dict.guides[key];
            return (
              <Reveal as="li" key={key} className="border-b border-stone" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
                <Link href={guidePath(locale, key)} className="group grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-baseline gap-x-3 py-6 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:gap-x-4">
                  <span aria-hidden="true" className="numeral text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="eyebrow block">{g.eyebrow}</span>
                    <span className="mt-1 block font-serif text-[1.5rem] font-medium leading-tight text-forest transition-colors group-hover:text-champagne-deep md:text-[1.75rem]">{g.title}</span>
                    <span className="mt-2 block max-w-[52ch] font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{g.summary}</span>
                  </span>
                  <span aria-hidden="true" className="self-baseline font-sans text-xl text-champagne-deep transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
                    →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
