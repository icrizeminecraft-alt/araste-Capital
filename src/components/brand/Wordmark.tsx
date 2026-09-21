import { Monogram } from "@/components/brand/Monogram";

/**
 * Logotype typographique ARASTE CAPITAL : monogramme et capitales espacées.
 */
export function Wordmark({
  tone = "forest",
  compact = false,
  className = "",
}: {
  tone?: "forest" | "ivory";
  compact?: boolean;
  className?: string;
}) {
  const text = tone === "forest" ? "text-forest" : "text-ivory";
  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <Monogram tone={tone} className={compact ? "h-7 w-7 shrink-0" : "h-8 w-8 shrink-0 md:h-9 md:w-9"} />
      <span
        className={`min-w-0 font-serif font-medium uppercase leading-none ${text} ${
          compact ? "text-[1rem]" : "text-[1.1rem] md:text-[1.25rem]"
        }`}
        style={{ letterSpacing: "0.22em" }}
      >
        Araste Capital
      </span>
    </span>
  );
}
