"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Apparition douce au défilement.
 * Sans JavaScript ou avec `prefers-reduced-motion`, le contenu est visible
 * d'emblée (voir globals.css). Si l'observateur est indisponible, on affiche.
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
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-in");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-in");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    // Filet de sécurité : jamais de contenu invisible.
    const timer = window.setTimeout(() => node.classList.add("is-in"), 2500);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} data-delay={delay || undefined}>
      {children}
    </Tag>
  );
}
