import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/types";
import { expertisePath, pagePath } from "@/config/routes";
import { siteConfig, enabledExpertises, hasContactDetails } from "@/config/site";
import { Wordmark } from "@/components/brand/Wordmark";
import { Monogram } from "@/components/brand/Monogram";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { NavLink } from "@/components/layout/NavLink";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.common;
  const c = siteConfig.toConfirm;
  const year = new Date().getFullYear();
  const nav = [
    { label: t.nav.firm, href: pagePath(locale, "firm") },
    { label: t.nav.expertises, href: pagePath(locale, "expertises") },
    { label: t.nav.approach, href: pagePath(locale, "approach") },
    { label: t.nav.guides, href: pagePath(locale, "guides") },
    { label: t.nav.partners, href: pagePath(locale, "partners") },
    { label: t.nav.contact, href: pagePath(locale, "contact") },
  ];
  const linkClass = "text-[0.9375rem] text-silver underline-offset-4 transition-colors hover:text-porcelain hover:underline";
  const titleClass = "eyebrow eyebrow--dark mb-5";

  return (
    <footer className="on-dark relative overflow-hidden bg-navy text-porcelain">
      <Monogram tone="porcelain" className="pointer-events-none absolute -bottom-24 -right-10 h-[30rem] w-[30rem] opacity-[0.04]" />
      <div className="container-x relative py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href={`/${locale}`} aria-label={t.nav.home} className="inline-block">
              <Wordmark tone="porcelain" />
            </Link>
            <p className="mt-6 max-w-xs font-serif text-xl leading-snug text-silver">{t.footer.tagline}</p>
            <p className="mt-6 font-sans text-sm text-silver">{siteConfig.brand.legalName}</p>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.18em] text-gold-light">{t.ui.markets}</p>
            <p className="mt-2 font-serif text-lg text-silver">{siteConfig.locations.map((l) => l.name[locale]).join(" · ")}</p>
          </div>

          <nav aria-label={t.footer.navigationTitle} className="lg:col-span-2">
            <p className={titleClass}>{t.footer.navigationTitle}</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className={linkClass} currentClassName="text-porcelain">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.expertisesTitle} className="lg:col-span-3">
            <p className={titleClass}>{t.footer.expertisesTitle}</p>
            <ul className="space-y-3">
              {enabledExpertises().map((key) => (
                <li key={key}>
                  <NavLink href={expertisePath(locale, key)} className={linkClass} currentClassName="text-porcelain">
                    {dict.expertises[key].shortTitle}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className={titleClass}>{t.footer.contactTitle}</p>
            {hasContactDetails() ? (
              <address className="not-italic font-sans text-[0.9375rem] text-silver">
                {c.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                {c.email ? (
                  <a href={`mailto:${c.email}`} className="link-line mt-3 block hover:text-porcelain">
                    {c.email}
                  </a>
                ) : null}
                {c.phone ? (
                  <a href={`tel:${c.phone.replace(/\s+/g, "")}`} className="link-line mt-1 block hover:text-porcelain">
                    {c.phone}
                  </a>
                ) : null}
              </address>
            ) : (
              <Link href={pagePath(locale, "contact")} className={linkClass}>
                {t.footer.contactLink}
              </Link>
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

        <div className="mt-16 flex flex-col gap-6 border-t border-gold/25 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-sm text-silver">
            © {year} {siteConfig.brand.legalName}. {t.footer.rights}
          </p>
          <LocaleSwitcher locale={locale} labels={t.locale} dark />
        </div>
      </div>
    </footer>
  );
}
