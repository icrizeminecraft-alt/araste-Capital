import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Numeral } from "@/components/ui/Numeral";

export function ApproachSteps({ locale, t }: { locale: Locale; t: HomeContent["approach"] }) {
  return (
    <section className="container-x section-y" aria-labelledby="approach-title">
      <Reveal>
        <SectionHeading id="approach-title" eyebrow={t.eyebrow} title={t.title} body={t.intro} className="max-w-3xl" />
      </Reveal>
      <ol className="mt-14 grid grid-cols-1 border-t border-stone md:grid-cols-2 md:gap-x-10 lg:mt-20 lg:grid-cols-4 lg:gap-x-8">
        {t.steps.map((step, i) => (
          <Reveal as="li" key={step.title} className="relative border-b border-stone py-8 md:pr-6 lg:border-b-0 lg:border-r lg:pr-8 lg:last:border-r-0" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
            <Numeral n={i + 1} className="text-xl lg:text-2xl" />
            <h3 className="mt-3 font-serif text-2xl font-medium text-forest md:text-[1.7rem] lg:mt-6">{step.title}</h3>
            <p className="mt-4 max-w-[36ch] font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{step.body}</p>
          </Reveal>
        ))}
      </ol>
      <div className="mt-10">
        <ArrowLink href={pagePath(locale, "approach")}>{t.cta}</ArrowLink>
      </div>
    </section>
  );
}
