"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { alternatePath } from "@/config/routes";
import { locales, type Locale } from "@/lib/i18n";
import type { CommonContent } from "@/content/types";

/**
 * Sélecteur FR / EN : conserve la page correspondante dans l'autre langue.
 */
export function LocaleSwitcher({
  locale,
  labels,
  dark = false,
  className = "",
}: {
  locale: Locale;
  labels: CommonContent["locale"];
  dark?: boolean;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const base = dark ? "text-stone hover:text-ivory" : "text-ink-soft hover:text-forest";
  const current = dark ? "text-ivory" : "text-forest";

  return (
    <nav aria-label={labels.switchLabel} className={`font-sans text-[0.8125rem] uppercase tracking-[0.14em] ${className}`}>
      <ul className="flex items-center gap-3">
        {locales.map((target, i) => {
          const isCurrent = target === locale;
          return (
            <li key={target} className="flex items-center gap-3">
              {i > 0 ? (
                <span aria-hidden="true" className={dark ? "text-champagne-light/60" : "text-stone-dark"}>
                  /
                </span>
              ) : null}
              {isCurrent ? (
                <span aria-current="true" className={`${current} inline-flex min-h-6 items-center font-medium`} lang={target}>
                  <span className="sr-only">{labels.current} : </span>
                  {target.toUpperCase()}
                </span>
              ) : (
                <Link
                  href={alternatePath(pathname, target)}
                  hrefLang={target}
                  lang={target}
                  aria-label={labels[target]}
                  className={`${base} inline-flex min-h-6 items-center transition-colors`}
                >
                  {target.toUpperCase()}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
