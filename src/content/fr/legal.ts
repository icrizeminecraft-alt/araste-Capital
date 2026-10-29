import type { LegalContent } from "@/content/types";
import { photoCredits } from "@/config/images";

/**
 * Mentions légales.
 * Seuls les éléments établis sont publiés ; ceux qui restent à renseigner
 * (numéro d'immatriculation, capital, siège, coordonnées, statut
 * réglementaire) figurent dans docs/AVANT-PUBLICATION.md et seront ajoutés
 * dès qu'ils seront communiqués. Ce texte n'est pas un avis juridique et doit
 * être relu par un conseil.
 */
export const legal: LegalContent = {
  meta: {
    title: "Mentions légales",
    description: "Informations légales relatives au site d'ARASTE CAPITAL.",
  },
  eyebrow: "Informations",
  title: "Mentions légales",
  lead: "Cette page présente l'éditeur du site, son hébergeur, les droits attachés aux contenus et leur portée.",
  updated: "Dernière mise à jour : octobre 2026.",
  sections: [
    {
      title: "Éditeur du site",
      paragraphs: [
        "Le site est édité par ARASTE CAPITAL, société par actions simplifiée unipersonnelle de droit français, immatriculée au registre du commerce et des sociétés de Grenoble, ci-après « le cabinet ». Son président, Lucas Araste, est le directeur de la publication.",
        "Le cabinet peut être joint par le formulaire de la page contact.",
      ],
    },
    {
      title: "Activité et périmètre",
      paragraphs: [
        "Le cabinet exerce une activité de conseil et d'intermédiation en financement immobilier et opérations complexes, pour le compte d'emprunteurs professionnels : entrepreneurs, investisseurs et structures patrimoniales. Il ne consent pas de crédit, ne gère aucun actif pour compte de tiers, ne propose aucun placement au public et n'intervient pas auprès des particuliers.",
        "Le cabinet intervient pour des opérations situées en France, à Monaco, au Royaume-Uni, en Andorre et aux Émirats arabes unis.",
        "La rémunération du cabinet est présentée au client avant tout engagement et convenue par écrit avec lui, en amont de toute démarche de recherche de financement.",
      ],
    },
    {
      title: "Hébergement",
      paragraphs: ["Le site est hébergé par Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre."],
    },
    {
      title: "Propriété intellectuelle",
      paragraphs: [
        "Les textes, le logotype, le monogramme et les compositions visuelles de ce site sont la propriété du cabinet ou font l'objet d'une autorisation d'utilisation. Toute reproduction ou réutilisation sans accord préalable est interdite.",
        "Les polices de caractères Cormorant et DM Sans sont utilisées sous licence SIL Open Font License 1.1.",
        `Les photographies sont des images d'illustration publiées sous licence Unsplash (utilisation libre, y compris commerciale, sans attribution obligatoire) ; par courtoisie, leurs auteurs : ${photoCredits.join(" ; ")}. Aucune ne représente une opération conseillée par le cabinet ni ses locaux.`,
      ],
    },
    {
      title: "Nature des contenus",
      paragraphs: [
        "Les contenus de ce site ont un caractère informatif et présentent l'activité du cabinet. Ils ne constituent ni une offre de financement, ni un conseil juridique, fiscal ou en investissement, ni une garantie d'obtention d'un financement. Les situations décrites sont des illustrations et ne se rapportent pas à des opérations réalisées.",
      ],
    },
    {
      title: "Données personnelles",
      paragraphs: ["Le traitement des données transmises par les formulaires du site est décrit dans la politique de confidentialité."],
    },
  ],
};
