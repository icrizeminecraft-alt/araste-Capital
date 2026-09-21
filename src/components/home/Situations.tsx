import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { expertisePath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Situations({ locale, t, dict }: { locale: Locale; t: HomeContent["situations"]; dict: Dictionary }) {
  return (
    <section className="bg-ivory-deep/60" aria-labelledby="situations-title">
      <div className="container-x py-20 md:py-28 lg:py-32">
        <Reveal>
          <SectionHeading id="situations-title" eyebrow={t.eyebrow} title={t.title} className="max-w-3xl" />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-20 lg:gap-10">
          {t.cases.map((item, i) => {
            const enabled = siteConfig.expertises[item.expertise];
            return (
              <Reveal as="article" key={item.title} className="flex flex-col border-t-2 border-forest pt-6" delay={i as 0 | 1 | 2}>
                <p className="eyebrow mb-4 text-[0.68rem]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-[1.6rem] font-medium leading-tight text-forest">{item.title}</h3>
                <p className="mt-4 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
                {enabled ? (
                  <Link
                    href={expertisePath(locale, item.expertise)}
                    className="link-line mt-6 self-start font-sans text-sm font-medium text-forest"
                  >
                    {dict.expertises[item.expertise].shortTitle}
                    <span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                ) : null}
              </Reveal>
            );
          })}
        </div>
        <p className="mt-12 max-w-2xl border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft">
          {t.note}
        </p>
      </div>
    </section>
  );
}
