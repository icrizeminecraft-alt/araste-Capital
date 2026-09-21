"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Lien de navigation signalant la page courante (aria-current + soulignement champagne). */
export function NavLink({ href, children, className = "", currentClassName = "" }: { href: string; children: ReactNode; className?: string; currentClassName?: string }) {
  const pathname = usePathname();
  const isCurrent = pathname === href;
  return (
    <Link href={href} aria-current={isCurrent ? "page" : undefined} className={`${className} ${isCurrent ? currentClassName : ""}`}>
      {children}
    </Link>
  );
}
