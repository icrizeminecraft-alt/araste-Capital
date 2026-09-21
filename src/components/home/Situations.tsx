import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { expertisePath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";

export function Situations({ locale, t, dict }: { locale: Locale; t: HomeContent["situations"]; dict: Dictionary }) {
  return (
    <section className="bg-ivory-deep/60" aria-labelledby="situations-title">
      <div className="container-x section-y">
        <Reveal>
          <SectionHeading id="situations-title" eyebrow={t.eyebrow} title={t.title} className="max-w-3xl" />
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {t.cases.map((item, i) => {
            const enabled = siteConfig.expertises[item.expertise];
            return (
              <Reveal as="article" key={item.title} className="flex flex-col border-t-2 border-forest pt-6" delay={i as 0 | 1 | 2}>
                <p className="eyebrow mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="min-h-[2.4em] font-serif text-[1.6rem] font-medium leading-tight text-forest">{item.title}</h3>
                <p className="mt-4 flex-1 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
                {enabled ? (
                  <ArrowLink href={expertisePath(locale, item.expertise)} className="mt-6 self-start text-sm">
                    {dict.expertises[item.expertise].shortTitle}
                  </ArrowLink>
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
