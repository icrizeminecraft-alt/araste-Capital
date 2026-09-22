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
  faq: {
    title: "Questions fréquentes",
    lead: "Ce que l'on nous demande le plus souvent avant un premier échange.",
    items: [
      {
        question: "À quel moment nous contacter ?",
        answer: "Le plus tôt possible, dès qu'une opération se dessine : une acquisition à sécuriser, une échéance qui approche, un projet à financer par étapes. Un premier échange permet de situer le besoin, d'identifier les pièces utiles et de dire si nous pouvons vous aider, avant que le calendrier ne se resserre.",
      },
      {
        question: "Que se passe-t-il après l'envoi du formulaire ?",
        answer: "Nous prenons connaissance des éléments transmis et revenons vers vous par le canal indiqué. Si l'opération relève de notre périmètre, nous convenons d'un échange pour la comprendre en détail et préciser les documents à réunir. Rien n'est engagé à ce stade.",
      },
      {
        question: "Quelles informations préparer pour un premier échange ?",
        answer: "Des ordres de grandeur suffisent : la nature du besoin, le montant envisagé, le pays de l'opération et le délai souhaité. Ajoutez une description de l'actif ou de l'activité, de la structure et de la sortie envisagée. Les pièces détaillées viendront plus tard, si nous décidons ensemble d'avancer.",
      },
      {
        question: "Travaillez-vous avec des particuliers ?",
        answer: "Non. Nous intervenons pour des emprunteurs professionnels : entreprises, sociétés immobilières, holdings, véhicules d'investissement, promoteurs et propriétaires professionnels. Nous ne traitons ni le crédit à la consommation ni le financement d'une résidence principale.",
      },
      {
        question: "Comment est rémunéré le cabinet ?",
        answer: "Les modalités de rémunération sont présentées avant tout engagement et précisées dans les informations légales. Elles sont convenues par écrit avec vous, en amont de la recherche de financement.",
      },
      {
        question: "Garantissez-vous l'obtention d'un financement ?",
        answer: "Non, et personne ne le peut sérieusement. La décision appartient toujours au prêteur. Notre engagement porte sur la qualité de l'analyse, la clarté du dossier et la pertinence des pistes explorées, et sur la franchise de nos retours, y compris lorsqu'ils sont négatifs.",
      },
      {
        question: "Comment sont traitées les informations transmises ?",
        answer: "Elles servent uniquement à étudier votre demande. Elles ne sont ni utilisées à des fins de prospection, ni cédées à des tiers. Elles ne sont partagées qu'avec les prêteurs que nous consultons pour votre opération, avec votre accord. Le détail figure dans la politique de confidentialité.",
      },
    ],
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
