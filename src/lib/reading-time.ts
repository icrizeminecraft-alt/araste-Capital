import type { GuideContent } from "@/content/types";

/** Temps de lecture estimé (base 200 mots par minute), minimum 2 minutes. */
export function readingTime(guide: GuideContent): number {
  const text = [guide.lead, ...guide.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.items ?? [])]), ...guide.keyPoints].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}
