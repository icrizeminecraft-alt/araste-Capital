import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "porcelain" | "outline-porcelain";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  porcelain: "btn btn-porcelain",
  "outline-porcelain": "btn btn-outline-porcelain",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}

/** Lien texte souligné, avec flèche typographique. */
export function ArrowLink({
  href,
  children,
  className = "",
  dark = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-baseline gap-2 font-sans text-[0.9375rem] font-medium ${dark ? "text-porcelain" : "text-navy"} ${className}`}
    >
      <span className="link-line">{children}</span>
      <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
        →
      </span>
    </Link>
  );
}
