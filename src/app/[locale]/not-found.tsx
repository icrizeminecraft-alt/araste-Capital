import { getDictionary } from "@/content";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

/**
 * Page introuvable localisée. La langue est déduite de l'URL par un composant
 * client (rendu côté serveur à la demande), ce qui évite d'utiliser headers()
 * ici et conserve le rendu statique des autres pages.
 */
export default function NotFound() {
  const fr = getDictionary("fr");
  const en = getDictionary("en");
  return (
    <NotFoundContent
      copy={{
        fr: { ...fr.common.notFound, all: fr.common.ui.allExpertises },
        en: { ...en.common.notFound, all: en.common.ui.allExpertises },
      }}
    />
  );
}
