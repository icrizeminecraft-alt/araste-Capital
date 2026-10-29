import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary, HomeContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { siteConfig, hasContactDetails } from "@/config/site";
import { contactTransport } from "@/lib/contact/transport";
import { BriefContactForm } from "@/components/contact/BriefContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SHEET_ANCHOR } from "@/components/home/ContactCta";

/**
 * La prise de contact, sur l'accueil : coordonnées directes lorsqu'elles sont
 * renseignées, premier formulaire bref, accès secondaire à la fiche détaillée.
 */
export function HomeContact({ locale, t, dict }: { locale: Locale; t: HomeContent["contact"]; dict: Dictionary }) {
  const c = dict.contact;
  const { transport, endpoint, demo } = contactTransport("home");
  const details = siteConfig.toConfirm;
  const shared = {
    errors: c.form.errors,
    honeypotLabel: c.form.honeypotLabel,
    privacyNotice: c.form.privacyNotice,
    privacyLink: c.form.privacyLink,
    submitting: c.form.submitting,
    optional: c.form.optional,
    errorSummary: c.form.errorSummary,
  };
  return (
    <section id="contact" className="scroll-mt-24 bg-porcelain" aria-labelledby="contact-title">
      <div className="container-x section-y grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow className="mb-6">{t.eyebrow}</Eyebrow>
            <h2 id="contact-title" className="display-lg">
              {t.title}
            </h2>
            <p className="lead measure-lead mt-8 text-ink-soft">{t.body}</p>
          </Reveal>
          <div className="mt-10">
            {demo ? (
              <p className="mb-8 border-l-2 border-gold bg-porcelain-deep/60 px-4 py-3 font-sans text-sm text-ink-soft" role="note">
                {c.form.result.demoBanner}
              </p>
            ) : null}
            <BriefContactForm locale={locale} t={c.brief} form={shared} token="" transport={transport} endpoint={endpoint} />
          </div>
          <p className="mt-8 font-sans text-[0.9375rem] text-ink-soft">
            {t.sheetLead}{" "}
            <Link href={`${pagePath(locale, "contact")}#${SHEET_ANCHOR}`} className="link-line font-medium text-navy">
              {t.secondary}
            </Link>
          </p>
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <Reveal delay={1}>
            <h3 className="eyebrow mb-4">{c.brief.next.title}</h3>
            <ol className="space-y-3 border-t border-navy pt-5">
              {c.brief.next.items.map((item, i) => (
                <li key={item} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-2 font-sans text-[0.9375rem] leading-relaxed text-ink">
                  <span aria-hidden="true" className="numeral text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            {hasContactDetails() ? (
              <>
                <h3 className="eyebrow mb-4 mt-12">{c.aside.detailsTitle}</h3>
                <address className="not-italic font-sans text-[0.9375rem] text-ink">
                  {details.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  {details.email ? (
                    <a href={`mailto:${details.email}`} className="link-line mt-3 block text-navy">
                      {details.email}
                    </a>
                  ) : null}
                  {details.phone ? (
                    <a href={`tel:${details.phone.replace(/\s+/g, "")}`} className="link-line mt-1 block text-navy">
                      {details.phone}
                    </a>
                  ) : null}
                </address>
              </>
            ) : null}
          </Reveal>
        </aside>
      </div>
    </section>
  );
}
