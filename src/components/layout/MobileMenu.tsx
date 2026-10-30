"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { CommonContent } from "@/content/types";
import type { NavLink as NavItem } from "@/components/layout/Header";
import { Wordmark } from "@/components/brand/Wordmark";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";

/**
 * Menu mobile : un panneau blanc, épuré, dans la continuité de l'en-tête.
 * Fondé sur l'élément <dialog> natif : piège de focus, fermeture par Échap,
 * arrière-plan inerte et retour du focus sur le bouton d'ouverture.
 * La page courante est signalée par un filet doré.
 */
export function MobileMenu({
  locale,
  t,
  links,
  contactHref,
}: {
  locale: Locale;
  t: CommonContent;
  links: NavItem[];
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
        className="flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center gap-3 font-sans text-[0.8125rem] uppercase tracking-[0.16em] text-navy"
      >
        <span aria-hidden="true" className="hidden xs:inline">
          {t.nav.menuTitle}
        </span>
        <span aria-hidden="true" className="flex w-5 flex-col gap-[6px]">
          <span className="block h-px w-full bg-navy" />
          <span className="block h-px w-full bg-navy" />
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
        className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-porcelain text-navy backdrop:bg-navy/30 open:flex open:flex-col"
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="container-x flex h-[var(--header-h)] shrink-0 items-center justify-between border-b border-silver">
            <Link href={`/${locale}`} aria-label={t.nav.home} onClick={close}>
              <Wordmark />
            </Link>
            <button
              type="button"
              onClick={close}
              autoFocus
              aria-label={t.nav.menuClose}
              className="-mr-3 flex min-h-[2.75rem] min-w-[2.75rem] items-center justify-center text-navy"
            >
              <span aria-hidden="true" className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 h-px w-full rotate-45 bg-navy" />
                <span className="absolute left-0 top-1/2 h-px w-full -rotate-45 bg-navy" />
              </span>
            </button>
          </div>

          <nav aria-label={t.nav.menuLabel} className="container-x flex flex-1 flex-col pb-10 pt-6">
            <ul>
              {links.map((link) => {
                const current = pathname === link.href;
                return (
                  <li key={link.href} className="border-b border-silver">
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={current ? "page" : undefined}
                      className="flex items-center justify-between py-[1.125rem] font-serif text-[1.625rem] font-medium leading-none text-navy"
                    >
                      {link.label}
                      {current ? <span aria-hidden="true" className="h-px w-6 bg-gold" /> : null}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10">
              <Link href={contactHref} onClick={close} className="btn btn-primary w-full">
                {t.nav.present}
              </Link>
            </div>
            <div className="mt-8">
              <LocaleSwitcher locale={locale} labels={t.locale} />
            </div>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
