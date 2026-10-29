import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

/** Marchés d'intervention, en une ligne exacte, sous l'ouverture. Des marchés, pas des bureaux. */
export function MarketsLine({ locale, label }: { locale: Locale; label: string }) {
  const markets = siteConfig.locations.map((l) => l.name[locale]);
  return (
    <div className="border-y border-silver bg-porcelain">
      <div className="container-x flex flex-col gap-2 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <p className="eyebrow">{label}</p>
        <p className="font-serif text-[1.125rem] leading-snug text-navy md:text-right">{markets.join(" · ")}</p>
      </div>
    </div>
  );
}
