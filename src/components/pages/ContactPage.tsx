import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactForm } from "@/components/contact/ContactForm";
import { createFormToken } from "@/lib/contact/token";
import { enabledExpertises, siteConfig, hasContactDetails } from "@/config/site";
import { currentProvider } from "@/lib/contact/providers";
import { connection } from "next/server";

export async function ContactPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // Rendu à la demande : le jeton signé doit être frais à chaque visite.
  await connection();
  const t = dict.contact;
  const token = createFormToken();
  const c = siteConfig.toConfirm;
  const financingOptions = enabledExpertises().map((key) => ({ value: key, label: dict.expertises[key].shortTitle }));
  const demo = currentProvider() === "none";

  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: "ARASTE CAPITAL", href: `/${locale}` }, { label: dict.common.nav.contact }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />

      <div className="container-x grid gap-14 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
        <aside className="order-2 lg:order-1 lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <p className="eyebrow mb-4">{t.aside.title}</p>
            <ul className="space-y-3 border-t border-forest pt-5">
              {t.aside.items.map((item) => (
                <li key={item} className="flex gap-4 font-sans text-[0.9375rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-champagne" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l border-champagne pl-4 font-sans text-sm leading-relaxed text-ink-soft">{t.aside.confidentiality}</p>

            <p className="eyebrow mb-4 mt-12">{t.aside.detailsTitle}</p>
            {hasContactDetails() ? (
              <address className="not-italic font-sans text-[0.9375rem] text-ink">
                {c.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                {c.email ? (
                  <a href={`mailto:${c.email}`} className="link-line mt-3 block text-forest">
                    {c.email}
                  </a>
                ) : null}
                {c.phone ? (
                  <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="link-line mt-1 block text-forest">
                    {c.phone}
                  </a>
                ) : null}
              </address>
            ) : (
              <p className="font-sans text-sm text-ink-soft">{t.aside.detailsPending}</p>
            )}
          </div>
        </aside>

        <div className="order-1 relative lg:order-2 lg:col-span-7 lg:col-start-6">
          {demo ? (
            <p className="mb-8 border-l-2 border-champagne bg-ivory-deep/60 px-4 py-3 font-sans text-sm text-ink-soft" role="note">
              {t.form.result.demoTitle}
            </p>
          ) : null}
          <ContactForm locale={locale} t={t.form} token={token} financingOptions={financingOptions} />
        </div>
      </div>
    </>
  );
}
