import type { HomeContent } from "@/content/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Interlocutors({ t }: { t: HomeContent["interlocutors"] }) {
  return (
    <section className="container-x py-20 md:py-28 lg:py-32" aria-labelledby="interlocutors-title">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="interlocutors-title" eyebrow={t.eyebrow} title={t.title} body={t.body} />
        </Reveal>
        <dl className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {t.groups.map((group, i) => (
            <Reveal key={group.title} className="border-t border-stone pt-5" delay={Math.min(i, 3) as 0 | 1 | 2 | 3}>
              <dt className="font-serif text-2xl font-medium text-forest">{group.title}</dt>
              <dd className="mt-3 font-sans text-[0.9375rem] leading-relaxed text-ink-soft">{group.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
