"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useParams } from "next/navigation";

const copy = {
  fr: { title: "Une erreur est survenue.", body: "La page n'a pas pu être affichée. Vous pouvez réessayer ou revenir à l'accueil.", retry: "Réessayer", home: "Retour à l'accueil" },
  en: { title: "Something went wrong.", body: "The page could not be displayed. You can try again or return to the home page.", retry: "Try again", home: "Back to home" },
};

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale === "en" ? "en" : "fr";
  const t = copy[locale];

  useEffect(() => {
    // Journal minimal côté client, sans données utilisateur.
    console.error("[page error]", error.digest ?? error.message);
  }, [error]);

  return (
    <section className="container-x py-24 md:py-32">
      <p className="eyebrow mb-6">Erreur</p>
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
