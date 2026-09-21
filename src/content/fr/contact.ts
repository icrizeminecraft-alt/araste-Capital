import type { ContactContent } from "@/content/types";

export const contact: ContactContent = {
  meta: {
    title: "Présenter une opération",
    description:
      "Présentez les principaux éléments de votre besoin de financement professionnel à ARASTE CAPITAL : nature, montant, pays, échéance. Premier échange sans engagement.",
  },
  eyebrow: "Contact",
  title: "Parlons de votre prochaine opération.",
  lead: "Quelques éléments suffisent pour un premier échange. Vous pouvez rester à un niveau de généralité ; les précisions viendront ensuite, si nous décidons ensemble d'aller plus loin.",
  aside: {
    title: "Ce qui nous est utile",
    items: [
      "La nature du financement recherché.",
      "L'ordre de grandeur et la devise.",
      "Le pays de l'opération et l'échéance envisagée.",
      "Une description brève : l'actif, la structure, la sortie pressentie.",
    ],
    confidentiality:
      "Ce formulaire ne demande aucune pièce d'identité, relevé bancaire ni document financier. Ces éléments ne seront échangés, le cas échéant, qu'après un premier contact et par un canal convenu.",
    detailsTitle: "Nous joindre directement",
    detailsPending: "Coordonnées directes à renseigner avant publication.",
  },
  form: {
    stepLabel: "Étape {current} sur {total}",
    steps: [
      {
        title: "L'opération",
        description: "Les grandes lignes du besoin.",
      },
      {
        title: "Vos coordonnées",
        description: "Pour revenir vers vous.",
      },
    ],
    fields: {
      financingType: {
        label: "Nature du financement",
        placeholder: "Sélectionner",
        other: "Autre / à préciser",
      },
      amount: {
        label: "Montant recherché",
        hint: "Ordre de grandeur, en chiffres.",
      },
      currency: { label: "Devise" },
      country: {
        label: "Pays de l'opération",
        hint: "Pays où se situe l'actif ou l'entité emprunteuse.",
      },
      timeline: {
        label: "Échéance souhaitée",
        options: [
          { value: "under-1m", label: "Moins d'un mois" },
          { value: "1-3m", label: "Un à trois mois" },
          { value: "3-6m", label: "Trois à six mois" },
          { value: "over-6m", label: "Plus de six mois" },
          { value: "undefined", label: "Non définie à ce stade" },
        ],
      },
      description: {
        label: "Bref descriptif",
        hint: "L'actif ou l'activité, la structure, la sortie envisagée. Quelques lignes suffisent (1 500 caractères maximum).",
      },
      name: { label: "Nom et prénom" },
      company: { label: "Société ou structure" },
      email: { label: "Adresse électronique" },
      phone: {
        label: "Téléphone",
        hint: "Avec l'indicatif international.",
      },
      channel: {
        label: "Canal de contact préféré",
        options: [
          { value: "email", label: "Courriel" },
          { value: "phone", label: "Téléphone" },
        ],
      },
    },
    optional: "facultatif",
    required: "Champs obligatoires sauf mention contraire.",
    next: "Continuer",
    back: "Retour",
    submit: "Envoyer la demande",
    submitting: "Envoi en cours",
    privacyNotice:
      "Les informations transmises servent uniquement à répondre à votre demande. Elles ne sont ni conservées dans votre navigateur ni utilisées à des fins de prospection.",
    privacyLink: "Politique de confidentialité",
    errors: {
      required: "Ce champ est requis.",
      email: "Veuillez indiquer une adresse électronique valide.",
      amount: "Veuillez indiquer un montant en chiffres.",
      tooLong: "Ce texte dépasse la longueur autorisée.",
      tooShort: "Merci de préciser un peu votre demande.",
      phone: "Veuillez indiquer un numéro de téléphone valide.",
      formInvalid: "Certains champs demandent votre attention.",
      network: "La demande n'a pas pu être transmise. Vérifiez votre connexion et réessayez.",
      rateLimited: "Plusieurs demandes ont été envoyées récemment. Merci de réessayer dans quelques minutes.",
      server: "Une erreur est survenue lors de l'envoi. Aucun message n'a été transmis ; merci de réessayer plus tard.",
      duplicate: "Cette demande a déjà été transmise.",
      token: "La session du formulaire a expiré. Rechargez la page et réessayez.",
    },
    result: {
      sentTitle: "Votre demande a été transmise.",
      sentBody: "Nous revenons vers vous dans les meilleurs délais par le canal indiqué.",
      demoTitle: "Mode démonstration : aucun message n'a été envoyé.",
      demoBody: "Le formulaire fonctionne, mais aucun fournisseur d'envoi n'est configuré sur ce déploiement. Votre saisie n'a été ni transmise ni conservée.",
      errorTitle: "La demande n'a pas pu être envoyée.",
      newRequest: "Présenter une autre opération",
    },
  },
};
