import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { pagePath } from "@/config/routes";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Monogram } from "@/components/brand/Monogram";

export function ContactCta({
  locale,
  t,
  tone = "dark",
}: {
  locale: Locale;
  t: { eyebrow?: string; title: string; body: string; cta: string; secondary?: string };
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={dark ? "on-dark bg-forest text-ivory" : "border-t border-stone bg-ivory"}
      aria-labelledby="contact-cta-title"
    >
      <div className="container-x grid grid-cols-1 gap-10 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-8">
        <Reveal className="lg:col-span-8">
          {t.eyebrow ? <Eyebrow dark={dark} className="mb-6">{t.eyebrow}</Eyebrow> : null}
          <h2 id="contact-cta-title" className={`display-lg ${dark ? "text-ivory" : ""}`}>
            {t.title}
          </h2>
          <p className={`lead measure mt-8 ${dark ? "text-stone" : "text-ink-soft"}`}>{t.body}</p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <ButtonLink href={pagePath(locale, "contact")} variant={dark ? "ivory" : "primary"}>
              {t.cta}
            </ButtonLink>
            {t.secondary ? (
              <Link
                href={pagePath(locale, "approach")}
                className={`link-line font-sans text-[0.9375rem] font-medium ${dark ? "text-ivory" : "text-forest"}`}
              >
                {t.secondary}
              </Link>
            ) : null}
          </div>
        </Reveal>
        <div className="hidden lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end" aria-hidden="true">
          <Monogram tone={dark ? "ivory" : "forest"} className="h-40 w-40 opacity-80" />
        </div>
      </div>
    </section>
  );
}
