import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "outline" | "ivory" | "outline-ivory";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  outline: "btn btn-outline",
  ivory: "btn btn-ivory",
  "outline-ivory": "btn btn-outline-ivory",
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
      className={`link-line font-sans text-[0.9375rem] font-medium ${dark ? "text-ivory" : "text-forest"} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="ml-2 inline-block">
        →
      </span>
    </Link>
  );
}
