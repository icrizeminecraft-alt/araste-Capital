import { getDictionary } from "@/content";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

/**
 * Page introuvable localisée. Le choix de la langue se fait côté client à
 * partir de l'URL, ce qui permet de conserver le rendu statique des pages.
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
