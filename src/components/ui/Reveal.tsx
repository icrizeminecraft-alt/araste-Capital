import type { ElementType, ReactNode } from "react";

/**
 * Apparition brève au défilement, entièrement en CSS (animation pilotée par le
 * défilement, voir globals.css) : aucun script, rien à hydrater. Sans prise en
 * charge ou avec `prefers-reduced-motion`, le contenu est visible d'emblée.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
}) {
  return (
    <Tag className={`reveal ${className}`} data-delay={delay || undefined}>
      {children}
    </Tag>
  );
}
