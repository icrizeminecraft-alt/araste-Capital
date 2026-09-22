import type { Locale } from "@/lib/i18n";
import type { HomeContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HomePartners({ locale, t }: { locale: Locale; t: HomeContent["partners"] }) {
  return (
    <section className="border-t border-stone bg-ivory-deep/60" aria-labelledby="partners-title">
      <div className="container-x section-y grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
        <Reveal className="lg:col-span-8">
          <Eyebrow className="mb-6">{t.eyebrow}</Eyebrow>
          <h2 id="partners-title" className="display-lg">
            {t.title}
          </h2>
          <p className="lead measure-lead mt-8 text-ink-soft">{t.body}</p>
        </Reveal>
        <Reveal className="lg:col-span-3 lg:col-start-10 lg:pb-2" delay={1}>
          <ButtonLink href={pagePath(locale, "partners")} variant="outline">
            {t.cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
