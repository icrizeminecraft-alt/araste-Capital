import type { FaqItem } from "@/content/types";

/**
 * Questions fréquentes : accordéon natif (details/summary), accessible au
 * clavier sans JavaScript, accompagné des données structurées FAQPage.
 */
export function Faq({ title, lead, items, id = "faq", dark = false }: { title: string; lead?: string; items: FaqItem[]; id?: string; dark?: boolean }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <section aria-labelledby={`${id}-title`}>
      <p className={`eyebrow mb-5 ${dark ? "eyebrow--dark" : ""}`}>FAQ</p>
      <h2 id={`${id}-title`} className={`display-md ${dark ? "text-ivory" : ""}`}>
        {title}
      </h2>
      {lead ? <p className={`lead measure-lead mt-5 ${dark ? "text-stone" : "text-ink-soft"}`}>{lead}</p> : null}
      <div className={`mt-10 border-t ${dark ? "border-champagne/25" : "border-stone"}`}>
        {items.map((item, i) => (
          <details key={item.question} className={`faq-item group border-b ${dark ? "border-champagne/25" : "border-stone"}`} name={id}>
            <summary className={`flex cursor-pointer list-none items-baseline gap-5 py-5 font-serif text-[1.35rem] font-medium leading-snug md:text-[1.5rem] ${dark ? "text-ivory" : "text-forest"} [&::-webkit-details-marker]:hidden`}>
              <span aria-hidden="true" className={`numeral text-sm ${dark ? "numeral--dark" : ""}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">{item.question}</span>
              <span aria-hidden="true" className={`faq-icon relative mt-2 block h-4 w-4 shrink-0 ${dark ? "text-champagne-light" : "text-champagne-deep"}`}>
                <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
                <span className="absolute left-1/2 top-0 h-full w-px bg-current transition-transform duration-300 group-open:scale-y-0 motion-reduce:transition-none" />
              </span>
            </summary>
            <p className={`measure pb-6 pl-[calc(1.25rem+1.75rem)] font-sans text-[1rem] leading-relaxed ${dark ? "text-stone" : "text-ink"}`}>{item.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </section>
  );
}
