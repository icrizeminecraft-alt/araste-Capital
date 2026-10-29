"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type ComponentProps } from "react";

/**
 * La fiche d'opération détaillée est le script le plus lourd du site. Elle
 * n'est chargée que lorsque le visiteur s'en approche (ou dès l'ouverture si
 * la page est ouverte sur son ancre), afin que le premier échange, en haut de
 * page, reste immédiat. L'espace est réservé pour éviter tout saut de mise en page.
 */
const ContactForm = dynamic(() => import("@/components/contact/ContactForm").then((m) => m.ContactForm), {
  ssr: false,
  loading: () => null,
});

export function SheetFormLoader({ loading, ...props }: ComponentProps<typeof ContactForm> & { loading: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined" || window.location.hash) {
      const timer = window.setTimeout(() => setNear(true), 0);
      return () => window.clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[32rem]" aria-busy={near ? undefined : true}>
      {near ? <ContactForm {...props} /> : <p className="font-sans text-sm text-ink-soft">{loading}</p>}
    </div>
  );
}
