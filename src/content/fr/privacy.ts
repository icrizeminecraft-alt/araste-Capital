import type { LegalContent } from "@/content/types";

/**
 * Politique de confidentialité — PROJET À VALIDER.
 * Reflète l'implémentation réelle du site (aucun traceur, formulaire sans
 * stockage navigateur). À relire avec un conseil avant publication.
 */
export const privacy: LegalContent = {
  meta: {
    title: "Politique de confidentialité",
    description:
      "Comment ARASTE CAPITAL traite les informations transmises via son site : données collectées, finalités, conservation, droits.",
  },
  eyebrow: "Informations",
  title: "Politique de confidentialité",
  lead: "Cette politique décrit les informations que le site collecte, la manière dont elles sont utilisées et vos droits. Elle reflète le fonctionnement réel du site tel qu'il est livré ; les éléments « à compléter » doivent être renseignés avant publication.",
  pendingLabel: "À compléter avant publication",
  updated: "Dernière mise à jour : à renseigner lors de la publication.",
  sections: [
    {
      title: "Responsable du traitement",
      paragraphs: [
        "Le responsable du traitement est ARASTE CAPITAL LTD (dénomination sociale à confirmer).",
      ],
      pending: ["Identité et coordonnées du responsable du traitement", "Contact pour l'exercice des droits"],
    },
    {
      title: "Ce que le site ne collecte pas",
      paragraphs: [
        "Le site ne charge aucun traceur publicitaire, aucun outil de mesure d'audience tiers et aucun script externe. Il ne dépose aucun cookie de suivi. Aucune donnée saisie dans le formulaire n'est conservée dans votre navigateur, dans l'adresse de la page ou dans un outil d'analyse.",
      ],
    },
    {
      title: "Formulaire de contact",
      paragraphs: [
        "Lorsque vous présentez une opération, vous nous transmettez deux groupes d'informations. Sur l'opération : la nature du financement, un montant et une devise, le pays, un délai souhaité de mise en place et un bref descriptif. Sur vous : votre nom, votre société, votre adresse électronique, un numéro de téléphone facultatif et votre canal de contact préféré.",
        "Ces informations servent uniquement à étudier votre demande et à y répondre. Elles ne sont pas utilisées à des fins de prospection et ne sont ni cédées ni communiquées à des tiers, hors le prestataire technique d'acheminement indiqué ci-dessous, qui y accède pour nous les transmettre.",
        "Le formulaire ne demande ni pièce d'identité, ni relevé bancaire, ni document financier. Une limitation du nombre de demandes par période est appliquée pour prévenir les envois automatisés. Elle repose sur une empreinte technique temporaire de la connexion ; l'application elle-même ne conserve pas l'adresse IP en clair.",
      ],
    },
    {
      title: "Transmission et conservation",
      paragraphs: [
        "Les demandes sont transmises au cabinet par le prestataire de messagerie indiqué ci-dessous, puis traitées par les personnes en charge des dossiers. Lorsque aucun prestataire n'est configuré, le formulaire l'indique et aucune donnée n'est acheminée ni conservée.",
      ],
      pending: [
        "Prestataire de messagerie ou d'acheminement des demandes",
        "Durée de conservation des demandes de contact",
        "Hébergeur et localisation des serveurs",
      ],
    },
    {
      title: "Base légale",
      paragraphs: [
        "Le traitement repose sur les mesures précontractuelles prises à votre demande et sur l'intérêt légitime du cabinet à répondre aux sollicitations professionnelles qui lui sont adressées.",
      ],
      pending: ["Cadre applicable selon la juridiction (RGPD, UK GDPR ou autre) et vérification par un conseil"],
    },
    {
      title: "Vos droits",
      paragraphs: [
        "Vous pouvez demander l'accès, la rectification ou l'effacement des informations vous concernant, vous opposer à leur traitement ou en demander la limitation, en écrivant au contact indiqué dans la section « Responsable du traitement ». Vous pouvez également saisir l'autorité de contrôle compétente.",
      ],
      pending: ["Autorité de contrôle compétente selon la juridiction"],
    },
    {
      title: "Journaux techniques",
      paragraphs: [
        "L'application n'inscrit pas le contenu des demandes de contact dans ses journaux. Le serveur et l'hébergeur peuvent tenir des journaux techniques limités (par exemple code de réponse, horodatage et données de connexion) nécessaires à la sécurité et au bon fonctionnement du site, selon leurs propres conditions.",
      ],
      pending: ["Portée et durée des journaux d'accès tenus par l'hébergeur"],
    },
  ],
};
