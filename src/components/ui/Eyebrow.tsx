import type { ReactNode } from "react";

export function Eyebrow({
  children,
  dark = false,
  className = "",
  as: Tag = "p",
  id,
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
  as?: "p" | "span" | "div" | "h2" | "h3";
  id?: string;
}) {
  return (
    <Tag id={id} className={`eyebrow ${dark ? "eyebrow--dark" : ""} ${className}`}>
      {children}
    </Tag>
  );
}
