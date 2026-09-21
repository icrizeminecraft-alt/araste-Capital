"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { common as fr } from "@/content/fr/common";
import { common as en } from "@/content/en/common";

/** Page d'erreur localisée ; les libellés viennent des dictionnaires communs. */
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "en" ? "en" : "fr";
  const t = (locale === "en" ? en : fr).error;

  useEffect(() => {
    // Journal minimal côté client, sans données utilisateur.
    console.error("[page error]", error.digest ?? error.message);
  }, [error]);

  return (
    <section className="container-x py-24 md:py-32">
      <p className="eyebrow mb-6">{t.eyebrow}</p>
      <h1 className="display-lg">{t.title}</h1>
      <p className="lead measure mt-8 text-ink-soft">{t.body}</p>
      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
        <button type="button" onClick={reset} className="btn btn-primary">
          {t.retry}
        </button>
        <Link href={`/${locale}`} className="link-line font-sans text-[0.9375rem] font-medium text-forest">
          {t.home}
        </Link>
      </div>
    </section>
  );
}
