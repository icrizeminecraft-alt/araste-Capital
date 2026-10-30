"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Barre d'appel discrète sur mobile : apparaît une fois l'ouverture dépassée,
 * jamais sur la page contact, et laisse la place à la barre système (safe-area).
 * Un repère invisible placé sous l'ouverture est observé : aucun calcul au
 * défilement, le navigateur signale seulement son franchissement.
 */
export function MobileCta({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const sentinel = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = sentinel.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (pathname === href || pathname?.endsWith("/contact")) return null;

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="pointer-events-none absolute left-0 top-[35rem] h-px w-px md:hidden" />
      <div
        aria-hidden={!visible}
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-silver bg-porcelain/98 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 ease-out-quart motion-reduce:transition-none md:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Link href={href} tabIndex={visible ? 0 : -1} className="btn btn-primary w-full">
          {label}
        </Link>
      </div>
    </>
  );
}
