"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pagePath } from "@/config/routes";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Monogram } from "@/components/brand/Monogram";

type Copy = { title: string; body: string; cta: string; all: string };

export function NotFoundContent({ copy }: { copy: { fr: Copy; en: Copy } }) {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/en") ? "en" : "fr";
  const t = copy[locale];
  return (
    <section className="container-x grid grid-cols-1 gap-10 py-24 md:py-32 lg:grid-cols-12" lang={locale}>
      <div className="lg:col-span-7">
        <Eyebrow className="mb-6">404</Eyebrow>
        <h1 className="display-lg">{t.title}</h1>
        <p className="lead measure mt-8 text-ink-soft">{t.body}</p>
        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
          <Link href={`/${locale}`} className="btn btn-primary">
            {t.cta}
          </Link>
          <Link href={pagePath(locale, "expertises")} className="link-line font-sans text-[0.9375rem] font-medium text-forest">
            {t.all}
          </Link>
        </div>
      </div>
      <div className="hidden lg:col-span-3 lg:col-start-10 lg:flex lg:justify-end" aria-hidden="true">
        <Monogram className="h-40 w-40 opacity-70" />
      </div>
    </section>
  );
}
