import type { ReactNode } from "react";

export function Eyebrow({
  children,
  dark = false,
  className = "",
  as: Tag = "p",
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return <Tag className={`eyebrow ${dark ? "eyebrow--dark" : ""} ${className}`}>{children}</Tag>;
}
