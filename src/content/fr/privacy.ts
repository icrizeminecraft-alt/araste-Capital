import type { LegalContent } from "@/content/types";

/**
 * Politique de confidentialité.
 * Reflète l'implémentation réelle du site (aucun traceur, formulaires sans
 * stockage navigateur). Le contact dédié à l'exercice des droits sera ajouté
 * dès que l'adresse professionnelle du cabinet sera communiquée
 * (docs/AVANT-PUBLICATION.md). À relire avec un conseil.
 */
export const privacy: LegalContent = {
  meta: {
    title: "Politique de confidentialité",
    description:
      "Comment ARASTE CAPITAL traite les informations transmises via son site : données collectées, finalités, conservation, droits.",
  },
  eyebrow: "Informations",
  title: "Politique de confidentialité",
  lead: "Cette politique décrit les informations que le site collecte, la manière dont elles sont utilisées et vos droits. Elle reflète le fonctionnement réel du site.",
  updated: "Dernière mise à jour : octobre 2026.",
  sections: [
    {
      title: "Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement est ARASTE CAPITAL, société par actions simplifiée unipersonnelle de droit français immatriculée au registre du commerce et des sociétés de Grenoble, représentée par son président, Lucas Araste. Toute demande relative à vos données peut lui être adressée par le formulaire de la page contact.",
      ],
    },
    {
      title: "Ce que le site ne collecte pas",
      paragraphs: [
        "Le site ne charge aucun traceur publicitaire, aucun outil de mesure d'audience tiers et aucun script externe. Il ne dépose aucun cookie de suivi. Aucune donnée saisie dans les formulaires n'est conservée dans votre navigateur, dans l'adresse de la page ou dans un outil d'analyse.",
      ],
    },
    {
      title: "Formulaires de contact",
      paragraphs: [
        "Le premier échange demande votre nom, votre adresse électronique, un numéro de téléphone facultatif et quelques lignes sur votre projet. La fiche d'opération ajoute deux groupes d'informations. Sur l'opération : la nature du financement, un montant et une devise, le pays, un délai souhaité de mise en place et un bref descriptif. Sur vous : votre société et votre canal de contact préféré.",
        "Ces informations servent uniquement à étudier votre demande et à y répondre. Elles ne sont pas utilisées à des fins de prospection et ne sont ni cédées ni communiquées à des tiers, hors l'hébergeur du site, dont l'infrastructure achemine les demandes jusqu'à la messagerie du cabinet.",
        "Les formulaires ne demandent ni pièce d'identité, ni relevé bancaire, ni document financier. Une limitation du nombre de demandes par période est appliquée pour prévenir les envois automatisés. Elle repose sur une empreinte technique temporaire de la connexion ; l'application elle-même ne conserve pas l'adresse IP en clair.",
      ],
    },
    {
      title: "Transmission et conservation",
      paragraphs: [
        "Les demandes sont acheminées par un relais installé sur l'hébergement du site, puis reçues dans la messagerie du cabinet et traitées par la personne en charge des dossiers. Lorsque l'acheminement n'est pas activé, le formulaire l'indique et aucune donnée n'est transmise ni conservée.",
        "Les demandes sont conservées le temps nécessaire à leur traitement, puis au plus trois ans après le dernier échange, sauf relation contractuelle engagée entre-temps.",
      ],
    },
    {
      title: "Base légale",
      paragraphs: [
        "Le traitement relève du règlement général sur la protection des données et de la loi Informatique et Libertés. Il repose sur les mesures précontractuelles prises à votre demande et sur l'intérêt légitime du cabinet à répondre aux sollicitations professionnelles qui lui sont adressées.",
      ],
    },
    {
      title: "Vos droits",
      paragraphs: [
        "Vous pouvez demander l'accès, la rectification ou l'effacement des informations vous concernant, vous opposer à leur traitement ou en demander la limitation, en écrivant au cabinet par la page contact. Vous pouvez également saisir la Commission nationale de l'informatique et des libertés (CNIL).",
      ],
    },
    {
      title: "Journaux techniques",
      paragraphs: [
        "L'application n'inscrit pas le contenu des demandes de contact dans ses journaux. L'hébergeur du site, Hostinger International Ltd., peut tenir des journaux techniques limités (par exemple code de réponse, horodatage et données de connexion) nécessaires à la sécurité et au bon fonctionnement du site, selon ses propres conditions.",
      ],
    },
  ],
};
