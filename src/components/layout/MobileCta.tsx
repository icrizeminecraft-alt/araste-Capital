"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Barre d'appel discrète sur mobile : apparaît une fois l'ouverture dépassée,
 * jamais sur la page contact, et laisse la place à la barre système (safe-area).
 */
export function MobileCta({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === href || pathname?.endsWith("/contact")) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-stone bg-ivory/98 px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 transition-transform duration-500 ease-out-quart motion-reduce:transition-none md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link href={href} tabIndex={visible ? 0 : -1} className="btn btn-primary w-full">
        {label}
      </Link>
    </div>
  );
}
