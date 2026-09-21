import type { Locale } from "@/lib/i18n";
import type { Dictionary, LegalContent } from "@/content/types";
import { PageIntro } from "@/components/ui/PageIntro";
import { PendingNote } from "@/components/ui/PendingNote";

export function LegalPage({ locale, dict, content, crumbLabel }: { locale: Locale; dict: Dictionary; content: LegalContent; crumbLabel: string }) {
  return (
    <>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: crumbLabel }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />
      <article className="container-x section-y-sm">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <nav aria-labelledby="contents-title" className="lg:col-span-3">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <h2 id="contents-title" className="eyebrow mb-4">{dict.common.ui.contents}</h2>
            <ol className="space-y-3 border-t border-forest pt-5 font-sans text-sm">
              {content.sections.map((section, i) => (
                <li key={section.title}>
                  <a href={`#section-${i + 1}`} className="link-line text-ink-soft hover:text-forest">
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
            </div>
          </nav>
          <div className="lg:col-span-8 lg:col-start-5">
            {content.sections.map((section, i) => (
              <section key={section.title} id={`section-${i + 1}`} className="border-t border-stone py-10 first:border-t-0 first:pt-0">
                <h2 className="display-sm">{section.title}</h2>
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="measure mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink">
                    {p}
                  </p>
                ))}
                {section.pending && section.pending.length > 0 ? <PendingNote label={content.pendingLabel} items={section.pending} /> : null}
              </section>
            ))}
            <p className="mt-10 font-sans text-sm text-ink-soft">{content.updated}</p>
          </div>
        </div>
      </article>
    </>
  );
}
