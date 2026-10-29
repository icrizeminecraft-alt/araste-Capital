import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { expertisePath, pagePath } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ButtonLink";

/** Les besoins du client — acquérir, refinancer, dégager des liquidités — et, pour chacun, la réponse du cabinet. */
export function Needs({ locale, t, dict }: { locale: Locale; t: HomeContent["needs"]; dict: Dictionary }) {
  return (
    <section id="besoins" className="scroll-mt-24 border-b border-silver" aria-labelledby="needs-title">
      <div className="container-x section-y">
        <Reveal>
          <SectionHeading id="needs-title" eyebrow={t.eyebrow} title={t.title} className="max-w-3xl" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {t.items.map((item, i) => {
            const links = item.expertises.filter((key) => siteConfig.expertises[key]);
            return (
              <Reveal as="article" key={item.title} className="flex flex-col border-t-2 border-navy pt-6" delay={i as 0 | 1 | 2}>
                <p className="eyebrow mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-serif text-[1.85rem] font-medium leading-tight text-navy md:text-[2.1rem]">{item.title}</h3>
                <p className="mt-4 flex-1 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
                {links.length > 0 ? (
                  <ul className="mt-6 space-y-2">
                    {links.map((key) => (
                      <li key={key}>
                        <ArrowLink href={expertisePath(locale, key)} className="text-sm">
                          {dict.expertises[key].shortTitle}
                        </ArrowLink>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12">
          <ArrowLink href={pagePath(locale, "expertises")}>{t.all}</ArrowLink>
        </div>
      </div>
    </section>
  );
}
