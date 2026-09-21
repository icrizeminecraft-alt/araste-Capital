"use client";

import Link from "next/link";
import { useState } from "react";
import type { PlateKind } from "@/config/images";
import { ArchitecturalPlate } from "@/components/visuals/ArchitecturalPlate";

export type ExpertiseListItem = {
  key: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  href: string;
  plate: PlateKind;
  featured: boolean;
};

/**
 * Liste éditoriale des expertises.
 * Chaque entrée est un lien complet (titre, résumé) lisible sans JavaScript.
 * Le visuel de droite, décoratif, suit l'entrée survolée, focalisée ou touchée.
 */
export function ExpertiseList({ items, allLabel, allHref }: { items: ExpertiseListItem[]; allLabel: string; allHref: string }) {
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
      <ol className="lg:col-span-7">
        {items.map((item, i) => (
          <li key={item.key} className="group border-t border-stone last:border-b">
            <Link
              href={item.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onTouchStart={() => setActive(i)}
              className={`grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-3 py-6 transition-colors md:grid-cols-[4rem_minmax(0,1fr)_auto] md:gap-x-4 md:py-7 ${
                active === i ? "bg-ivory-deep/50" : ""
              } hover:bg-ivory-deep/50 focus-visible:bg-ivory-deep/50`}
              aria-current={active === i ? "true" : undefined}
            >
              <span aria-hidden="true" className="numeral pl-1 text-base md:pl-2">
                {item.number}
              </span>
              <span className="min-w-0">
                <span
                  className={`block font-serif font-medium leading-tight text-forest ${
                    item.featured ? "text-[1.85rem] md:text-[2.3rem]" : "text-[1.55rem] md:text-[1.9rem]"
                  }`}
                >
                  {item.title}
                </span>
                <span className="mt-1 block font-sans text-xs uppercase tracking-[0.16em] text-champagne-deep">
                  {item.eyebrow}
                </span>
                <span className="mt-3 block max-w-[52ch] font-sans text-[0.9375rem] leading-relaxed text-ink-soft">
                  {item.summary}
                </span>
              </span>
              <span
                aria-hidden="true"
                className="hidden self-center pr-3 font-sans text-xl text-champagne-deep transition-transform duration-300 group-hover:translate-x-1 md:block"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
          <div className="grain relative aspect-[4/5] overflow-hidden bg-stone">
            {items.map((item, i) => (
              <div
                key={item.key}
                aria-hidden="true"
                className={`absolute inset-0 transition-opacity duration-700 ease-out-quart motion-reduce:transition-none ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              >
                <ArchitecturalPlate kind={item.plate} className="h-full w-full" />
              </div>
            ))}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 flex items-baseline justify-between bg-forest/85 px-6 py-4 text-ivory backdrop-blur-[1px]"
            >
              <span className="numeral numeral--dark text-sm">{current?.number}</span>
              <span className="font-serif text-lg">{current?.title}</span>
            </div>
          </div>
          <div className="mt-8">
            <Link href={allHref} className="link-line font-sans text-[0.9375rem] font-medium text-forest">
              {allLabel}
              <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
