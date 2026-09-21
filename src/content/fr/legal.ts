import type { LegalContent } from "@/content/types";

/**
 * Mentions légales — PROJET À VALIDER.
 * Les éléments entre crochets sont des champs à compléter, affichés comme tels.
 * Ce texte n'est pas un avis juridique et doit être relu par un conseil.
 */
export const legal: LegalContent = {
  meta: {
    title: "Mentions légales",
    description: "Informations légales relatives au site d'ARASTE CAPITAL LTD.",
  },
  eyebrow: "Informations",
  title: "Mentions légales",
  lead: "Cette page présente l'éditeur du site, son hébergeur et les conditions d'utilisation des contenus. Les informations signalées comme « à compléter » doivent être renseignées et validées avant toute publication.",
  pendingLabel: "À compléter avant publication",
  updated: "Dernière mise à jour : à renseigner lors de la publication.",
  sections: [
    {
      title: "Éditeur du site",
      paragraphs: [
        "Le site est édité par ARASTE CAPITAL LTD (dénomination sociale à confirmer), ci-après « le cabinet ».",
      ],
      pending: [
        "Forme juridique et pays d'immatriculation",
        "Numéro d'immatriculation",
        "Adresse du siège social",
        "Adresse électronique et téléphone de contact",
        "Nom du responsable de la publication",
      ],
    },
    {
      title: "Activité et statut",
      paragraphs: [
        "Le cabinet exerce une activité de conseil et d'intermédiation en financements professionnels, pour le compte d'emprunteurs professionnels. Il ne consent pas de crédit, ne gère aucun actif pour compte de tiers, ne propose aucun placement au public et n'intervient pas auprès des particuliers.",
        "Le périmètre autorisé des prestations, le statut d'intermédiaire applicable, les pays servis et les éventuelles mentions obligatoires dépendent de la juridiction d'exercice et doivent être vérifiés avec un conseil avant publication.",
      ],
      pending: [
        "Statut réglementaire, agrément ou enregistrement applicable (le cas échéant)",
        "Pays dans lesquels les prestations sont proposées",
        "Modalités de rémunération et mentions obligatoires associées",
      ],
    },
    {
      title: "Hébergement",
      paragraphs: ["Le site est hébergé par le prestataire indiqué ci-dessous."],
      pending: ["Nom, raison sociale et adresse de l'hébergeur"],
    },
    {
      title: "Propriété intellectuelle",
      paragraphs: [
        "Les textes, la marque typographique, le monogramme et les compositions visuelles de ce site sont la propriété du cabinet ou font l'objet d'une autorisation d'utilisation. Toute reproduction ou réutilisation sans accord préalable est interdite.",
        "Les polices de caractères Cormorant et DM Sans sont utilisées sous licence SIL Open Font License 1.1.",
      ],
    },
    {
      title: "Nature des contenus",
      paragraphs: [
        "Les contenus de ce site ont un caractère informatif et présentent l'activité du cabinet. Ils ne constituent ni une offre de financement, ni un conseil juridique, fiscal ou en investissement, ni une garantie d'obtention d'un financement. Les situations décrites sont des illustrations pédagogiques et ne se rapportent pas à des opérations réalisées.",
      ],
    },
    {
      title: "Données personnelles",
      paragraphs: [
        "Le traitement des données transmises via le formulaire de contact est décrit dans la politique de confidentialité.",
      ],
    },
  ],
};
