import type { ContactContent } from "@/content/types";

export const contact: ContactContent = {
  meta: {
    title: "Présenter une opération",
    description:
      "Présentez les principaux éléments de votre besoin de financement professionnel à ARASTE CAPITAL : nature, montant, pays, délai. Un premier échange pour situer le besoin.",
  },
  eyebrow: "Contact",
  title: "Parlons de votre prochaine opération.",
  lead: "Quelques éléments suffisent pour un premier échange. Vous pouvez rester général ; les précisions viendront ensuite, si nous décidons ensemble d'aller plus loin.",
  aside: {
    title: "Ce qui nous est utile",
    items: [
      "La nature du financement recherché.",
      "L'ordre de grandeur et la devise.",
      "Le pays de l'opération et le délai souhaité.",
      "Une description brève : l'actif, la structure, la sortie envisagée.",
    ],
    confidentiality:
      "Ce formulaire ne demande ni pièce d'identité, ni relevé bancaire, ni document financier. Ces éléments ne seront échangés, le cas échéant, qu'après un premier contact et par un canal convenu.",
    detailsTitle: "Nous joindre directement",
    detailsPending: "Coordonnées directes à renseigner avant publication.",
  },
  form: {
    stepLabel: "Étape {current} sur {total}",
    stepsLabel: "Étapes du formulaire",
    noscript: "Ce formulaire nécessite JavaScript. Si vous ne pouvez pas l'activer, utilisez les coordonnées indiquées sur cette page.",
    honeypotLabel: "Ne pas remplir ce champ",
    errorSummary: "{count} champ(s) demandent votre attention.",
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
        other: "Autre (à préciser dans le descriptif)",
      },
      amount: {
        label: "Montant recherché",
        hint: "Ordre de grandeur, en chiffres uniquement, sans symbole ni abréviation (ex. 3 500 000).",
      },
      currency: { label: "Devise" },
      country: {
        label: "Pays de l'opération",
        hint: "Pays où se situe l'actif ; à défaut, pays de l'entité emprunteuse.",
      },
      timeline: {
        label: "Délai souhaité de mise en place",
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
        hint: "L'actif ou l'activité, la structure, la sortie envisagée. Quelques lignes suffisent (de 20 à 1 500 caractères).",
      },
      name: { label: "Nom et prénom" },
      company: { label: "Société ou structure" },
      email: { label: "Adresse électronique" },
      phone: {
        label: "Téléphone",
        hint: "Avec l'indicatif international. Nécessaire si vous préférez être rappelé.",
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
      required: "Ce champ est obligatoire.",
      email: "Veuillez indiquer une adresse électronique valide.",
      amount: "Indiquez le montant en chiffres uniquement, sans symbole ni lettre (ex. 3 500 000).",
      tooLong: "Ce texte dépasse la longueur autorisée ; raccourcissez-le.",
      tooShort: "Quelques mots de plus sont nécessaires (20 caractères minimum).",
      phone: "Veuillez indiquer un numéro de téléphone valide.",
      phoneRequired: "Indiquez un numéro pour être rappelé.",
      formInvalid: "Certains champs demandent votre attention.",
      tooLarge: "La demande est trop volumineuse. Merci de raccourcir le descriptif.",
      network: "La demande n'a pas pu être transmise. Vérifiez votre connexion et réessayez.",
      rateLimited: "Plusieurs demandes ont été envoyées récemment. Merci de réessayer dans quelques minutes.",
      server: "Une erreur est survenue lors de l'envoi. Nous ne pouvons pas confirmer que votre demande a été reçue ; merci de réessayer plus tard.",
      duplicate: "Une demande identique vient d'être reçue. Si vous n'avez pas vu de confirmation, rechargez la page avant de réessayer.",
      token: "Le formulaire n'a pas pu être vérifié. Patientez un instant et réessayez, ou rechargez la page.",
    },
    result: {
      sentTitle: "Votre demande a été transmise.",
      sentBody: "Nous revenons vers vous dans les meilleurs délais par le canal indiqué.",
      demoTitle: "Mode démonstration : aucun message n'a été envoyé.",
      demoBody: "Le formulaire fonctionne, mais aucun fournisseur d'envoi n'est configuré sur ce déploiement. Votre saisie n'a été ni acheminée au cabinet ni conservée.",
      demoBanner: "Mode démonstration : les messages ne sont pas envoyés depuis ce déploiement.",
      newRequest: "Présenter une autre opération",
    },
  },
};
