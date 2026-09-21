import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { expertisePath, pagePath } from "@/config/routes";
import { siteConfig, enabledExpertises, hasContactDetails } from "@/config/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.common;
  const c = siteConfig.toConfirm;
  const year = new Date().getFullYear();
  const nav = [
    { label: t.nav.firm, href: pagePath(locale, "firm") },
    { label: t.nav.expertises, href: pagePath(locale, "expertises") },
    { label: t.nav.approach, href: pagePath(locale, "approach") },
    { label: t.nav.contact, href: pagePath(locale, "contact") },
  ];
  const linkClass = "link-line text-[0.9375rem] text-stone hover:text-ivory";
  const titleClass = "eyebrow eyebrow--dark mb-5";

  return (
    <footer className="on-dark bg-forest text-ivory">
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href={`/${locale}`} aria-label={t.nav.home} className="inline-block">
              <Wordmark tone="ivory" />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-xl leading-snug text-stone">{t.footer.tagline}</p>
            <p className="mt-6 font-sans text-sm text-stone">{siteConfig.brand.legalName}</p>
          </div>

          <nav aria-label={t.footer.navigationTitle} className="lg:col-span-2">
            <p className={titleClass}>{t.footer.navigationTitle}</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.expertisesTitle} className="lg:col-span-3">
            <p className={titleClass}>{t.footer.expertisesTitle}</p>
            <ul className="space-y-3">
              {enabledExpertises().map((key) => (
                <li key={key}>
                  <Link href={expertisePath(locale, key)} className={linkClass}>
                    {dict.expertises[key].shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className={titleClass}>{t.footer.contactTitle}</p>
            {hasContactDetails() ? (
              <address className="not-italic font-sans text-[0.9375rem] text-stone">
                {c.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                {c.email ? (
                  <a href={`mailto:${c.email}`} className="link-line mt-3 block hover:text-ivory">
                    {c.email}
                  </a>
                ) : null}
                {c.phone ? (
                  <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="link-line mt-1 block hover:text-ivory">
                    {c.phone}
                  </a>
                ) : null}
              </address>
            ) : (
              <p className="font-sans text-sm text-stone">{t.footer.contactPending}</p>
            )}

            <p className={`${titleClass} mt-10`}>{t.footer.legalTitle}</p>
            <ul className="space-y-3">
              <li>
                <Link href={pagePath(locale, "legal")} className={linkClass}>
                  {t.footer.legal}
                </Link>
              </li>
              <li>
                <Link href={pagePath(locale, "privacy")} className={linkClass}>
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-champagne/25 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-sm text-stone">
            © {year} {siteConfig.brand.legalName}. {t.footer.rights}
          </p>
          <LocaleSwitcher locale={locale} labels={t.locale} dark />
        </div>

        {!siteConfig.indexable ? (
          <p className="mt-8 border-l-2 border-champagne pl-4 font-sans text-xs leading-relaxed text-stone">
            {t.footer.previewNotice}
          </p>
        ) : null}
      </div>
    </footer>
  );
}
