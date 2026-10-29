import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { PageIntro } from "@/components/ui/PageIntro";
import { SheetFormLoader } from "@/components/contact/SheetFormLoader";
import { BriefContactForm } from "@/components/contact/BriefContactForm";
import { createFormToken } from "@/lib/contact/token";
import { enabledExpertises, siteConfig, hasContactDetails } from "@/config/site";
import { currentProvider } from "@/lib/contact/providers";
import { Faq } from "@/components/ui/Faq";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Visual } from "@/components/visuals/Visual";
import { visuals } from "@/config/images";
import { SHEET_ANCHOR } from "@/components/home/ContactCta";
import { connection } from "next/server";

/**
 * Deux entrées, deux niveaux d'engagement : le premier échange (quelques
 * lignes) en premier, la fiche d'opération détaillée ensuite, sous une ancre.
 */
export async function ContactPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  // Serveur Node : rendu à la demande, le jeton signé doit être frais à chaque visite.
  // Export statique : pas de jeton local ; les formulaires s'adressent à une instance
  // Node distante (NEXT_PUBLIC_CONTACT_ENDPOINT) ou restent en mode démonstration.
  const staticMode = siteConfig.staticExport;
  if (!staticMode) await connection();
  const t = dict.contact;
  const token = staticMode ? "" : createFormToken();
  // Relais en export statique : « php » = relais PHP de même origine (Hostinger),
  // une URL = instance Node distante, vide = démonstration.
  const relay = siteConfig.contactEndpoint;
  const transport = !staticMode ? "server" : relay === "php" || /^https?:\/\//.test(relay) ? "remote" : "demo";
  const endpoint = relay === "php" ? "" : relay;
  const c = siteConfig.toConfirm;
  const financingOptions = enabledExpertises().map((key) => ({ value: key, label: dict.expertises[key].shortTitle }));
  const demo = staticMode ? transport === "demo" : currentProvider() === "none";
  const shared = {
    errors: t.form.errors,
    honeypotLabel: t.form.honeypotLabel,
    privacyNotice: t.form.privacyNotice,
    privacyLink: t.form.privacyLink,
    submitting: t.form.submitting,
    optional: t.form.optional,
    errorSummary: t.form.errorSummary,
  };

  return (
    <>
      <PageIntro
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[{ label: dict.common.ui.homeCrumb, href: `/${locale}` }, { label: dict.common.nav.contact }]}
        crumbsLabel={dict.common.ui.breadcrumbLabel}
      />

      {/* Première entrée : le premier échange. */}
      <section className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8" aria-labelledby="brief-title">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow className="mb-5">{t.brief.eyebrow}</Eyebrow>
            <h2 id="brief-title" className="display-md">
              {t.brief.title}
            </h2>
            <p className="measure-lead mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink-soft">{t.brief.lead}</p>
          </Reveal>
          <div className="mt-10">
            {demo ? (
              <p className="mb-8 border-l-2 border-gold bg-porcelain-deep/60 px-4 py-3 font-sans text-sm text-ink-soft" role="note">
                {t.form.result.demoBanner}
              </p>
            ) : null}
            <BriefContactForm locale={locale} t={t.brief} form={shared} token={token} transport={transport} endpoint={endpoint} />
          </div>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <div className="grain relative mb-8 aspect-[4/3] overflow-hidden bg-silver">
              <Visual slot={visuals.contact} locale={locale} decorative sizes="(min-width: 64rem) 30vw, 100vw" />
            </div>
            <h3 className="eyebrow mb-4">{t.brief.next.title}</h3>
            <ol className="space-y-3 border-t border-navy pt-5">
              {t.brief.next.items.map((item, i) => (
                <li key={item} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-2 font-sans text-[0.9375rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="numeral text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-8 border-l border-gold pl-4 font-sans text-sm leading-relaxed text-ink-soft">{t.brief.responder}</p>

            {hasContactDetails() ? (
              <>
                <h3 className="eyebrow mb-4 mt-12">{t.aside.detailsTitle}</h3>
                <address className="not-italic font-sans text-[0.9375rem] text-ink">
                  {c.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  {c.email ? (
                    <a href={`mailto:${c.email}`} className="link-line mt-3 block text-navy">
                      {c.email}
                    </a>
                  ) : null}
                  {c.phone ? (
                    <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="link-line mt-1 block text-navy">
                      {c.phone}
                    </a>
                  ) : null}
                </address>
              </>
            ) : null}

            <h3 className="eyebrow mb-4 mt-12">{dict.common.ui.markets}</h3>
            <p className="font-serif text-lg leading-snug text-navy">{siteConfig.locations.map((l) => l.name[locale]).join(" · ")}</p>
            {siteConfig.locations.some((l) => l.addressLines.length > 0) ? (
              <ul className="mt-4 space-y-4 font-sans text-sm text-ink">
                {siteConfig.locations
                  .filter((l) => l.addressLines.length > 0)
                  .map((l) => (
                    <li key={l.key}>
                      <span className="block font-medium text-navy">{l.name[locale]}</span>
                      {l.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </li>
                  ))}
              </ul>
            ) : null}
          </div>
        </aside>
      </section>

      {/* Seconde entrée : la fiche d'opération détaillée. */}
      <section id={SHEET_ANCHOR} className="scroll-mt-24 border-t border-silver bg-porcelain-deep/60" aria-labelledby="sheet-title">
        <div className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <aside className="order-2 lg:order-1 lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <Reveal>
                <Eyebrow className="mb-5">{t.sheet.eyebrow}</Eyebrow>
                <h2 id="sheet-title" className="display-md">
                  {t.sheet.title}
                </h2>
                <p className="measure-narrow mt-5 font-sans text-[1.0625rem] leading-relaxed text-ink-soft">{t.sheet.lead}</p>
              </Reveal>
              <h3 className="eyebrow mb-4 mt-10">{t.aside.title}</h3>
              <ul className="space-y-3 border-t border-navy pt-5">
                {t.aside.items.map((item) => (
                  <li key={item} className="flex gap-4 font-sans text-[0.9375rem] leading-relaxed text-ink">
                    <span aria-hidden="true" className="mt-[0.7em] h-px w-4 shrink-0 bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-l border-gold pl-4 font-sans text-sm leading-relaxed text-ink-soft">{t.aside.confidentiality}</p>
            </div>
          </aside>

          <div className="order-1 relative lg:order-2 lg:col-span-7 lg:col-start-6">
            {demo ? (
              <p className="mb-8 border-l-2 border-gold bg-porcelain-deep/60 px-4 py-3 font-sans text-sm text-ink-soft" role="note">
                {t.form.result.demoBanner}
              </p>
            ) : null}
            <noscript>
              <p className="mb-8 border-l-2 border-gold bg-porcelain-deep/60 px-4 py-3 font-sans text-sm text-ink">{t.form.noscript}</p>
            </noscript>
            <SheetFormLoader locale={locale} t={t.form} token={token} financingOptions={financingOptions} transport={transport} endpoint={endpoint} loading={dict.common.loading} />
          </div>
        </div>
      </section>

      <div className="border-t border-silver">
        <div className="container-x section-y-sm grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-10 lg:col-start-2">
            <Faq id="faq-contact" title={t.faq.title} lead={t.faq.lead} items={t.faq.items} />
          </div>
        </div>
      </div>
    </>
  );
}
