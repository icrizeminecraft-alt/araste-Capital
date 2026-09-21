import type { HomeContent } from "@/content/types";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Stance({ t }: { t: HomeContent["stance"] }) {
  return (
    <section className="container-x section-y" aria-labelledby="stance-title">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-3">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-champagne" />
        </Reveal>
        <Reveal className="lg:col-span-8 lg:col-start-5" delay={1}>
          <h2 id="stance-title" className="display-md">
            {t.title}
          </h2>
          <p className="lead measure-lead mt-8 text-ink-soft">{t.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
