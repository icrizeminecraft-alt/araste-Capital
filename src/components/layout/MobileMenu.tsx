"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { CommonContent } from "@/content/types";
import type { NavLink } from "@/components/layout/Header";
import { Wordmark } from "@/components/brand/Wordmark";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

/**
 * Menu mobile fondé sur l'élément <dialog> natif : piège de focus, fermeture
 * par Échap, arrière-plan inerte et retour du focus sur le bouton d'ouverture.
 */
export function MobileMenu({
  locale,
  t,
  links,
  contactHref,
}: {
  locale: Locale;
  t: CommonContent;
  links: NavLink[];
  contactHref: string;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
  }, []);

  const show = useCallback(() => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setOpen(true);
  }, []);

  // Fermeture lors d'un changement de page.
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Verrou du défilement pendant l'ouverture.
  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={t.nav.menuOpen}
        className="flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center gap-2 font-sans text-[0.875rem] uppercase tracking-[0.14em] text-navy"
      >
        <span aria-hidden="true" className="hidden xs:inline">
          {t.nav.menuTitle}
        </span>
        <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
          <span className="block h-px w-full bg-navy" />
          <span className="block h-px w-full bg-navy" />
          <span className="block h-px w-3/4 bg-navy" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label={t.nav.menuTitle}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Clic sur le fond (hors du panneau) : fermeture.
          if (event.target === dialogRef.current) close();
        }}
        className="on-dark m-0 h-[100dvh] max-h-none w-full max-w-none bg-navy text-porcelain backdrop:bg-navy-deep/60 open:flex open:flex-col"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="container-x flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-gold/25">
            <Link href={`/${locale}`} aria-label={t.nav.home} onClick={close}>
              <Wordmark tone="porcelain" />
            </Link>
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label={t.nav.menuClose}
              className="flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center gap-2 font-sans text-[0.875rem] uppercase tracking-[0.14em] text-porcelain"
            >
              <span aria-hidden="true" className="hidden xs:inline">
                {t.nav.menuClose}
              </span>
              <span aria-hidden="true" className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-porcelain" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-porcelain" />
              </span>
            </button>
          </div>

          <nav aria-label={t.nav.menuLabel} className="container-x flex flex-1 flex-col justify-center py-10">
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={link.href} className="border-b border-gold/20">
                  <Link
                    href={link.href}
                    onClick={close}
                    className="flex items-baseline gap-5 py-5 font-serif text-[2rem] font-medium leading-none text-porcelain transition-colors hover:text-gold-light"
                  >
                    <span aria-hidden="true" className="numeral numeral--dark text-base">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-8">
              <Link href={contactHref} onClick={close} className="btn btn-porcelain w-full sm:w-auto">
                {t.nav.present}
              </Link>
              <LocaleSwitcher locale={locale} labels={t.locale} dark />
            </div>
          </nav>

          <p className="container-x shrink-0 border-t border-gold/20 py-5 font-serif text-lg text-gold-light">
            {t.footer.tagline}
          </p>
        </div>
      </dialog>
    </div>
  );
}
