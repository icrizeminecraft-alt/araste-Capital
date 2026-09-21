import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { CommonContent } from "@/content/types";
import { pagePath } from "@/config/routes";
import { Wordmark } from "@/components/brand/Wordmark";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLink } from "@/components/layout/NavLink";

export type NavLink = { label: string; href: string };

export function Header({ locale, t }: { locale: Locale; t: CommonContent }) {
  const links: NavLink[] = [
    { label: t.nav.firm, href: pagePath(locale, "firm") },
    { label: t.nav.expertises, href: pagePath(locale, "expertises") },
    { label: t.nav.approach, href: pagePath(locale, "approach") },
    { label: t.nav.contact, href: pagePath(locale, "contact") },
  ];
  const contactHref = pagePath(locale, "contact");

  return (
    <header className="sticky top-0 z-40 border-b border-stone/70 bg-ivory/95 backdrop-blur-[2px] supports-[backdrop-filter]:bg-ivory/88">
      <div className="container-x flex min-h-[var(--header-h)] flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2">
        <Link href={`/${locale}`} aria-label={t.nav.home} className="min-w-0 shrink">
          <Wordmark />
        </Link>

        <nav aria-label={t.nav.menuLabel} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  className="link-line whitespace-nowrap font-sans text-[0.9375rem] text-ink hover:text-forest"
                  currentClassName="text-forest [background-image:linear-gradient(var(--color-champagne),var(--color-champagne))] [background-size:100%_2px]"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 md:gap-x-6">
          <div className="hidden md:block">
            <LocaleSwitcher locale={locale} labels={t.locale} />
          </div>
          <Link
            href={contactHref}
            className="btn btn-outline hidden min-h-[2.75rem] whitespace-nowrap px-5 py-2 text-[0.875rem] sm:inline-flex"
          >
            {t.nav.present}
          </Link>
          <MobileMenu locale={locale} t={t} links={links} contactHref={contactHref} />
        </div>
      </div>
    </header>
  );
}
