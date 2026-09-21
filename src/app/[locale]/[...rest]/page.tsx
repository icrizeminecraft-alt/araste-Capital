import { notFound } from "next/navigation";

/** Toute route inconnue sous une langue valide affiche la page 404 localisée. */
export default function CatchAll() {
  notFound();
}
