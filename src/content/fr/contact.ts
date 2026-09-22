import type { ContactContent } from "@/content/types";

export const contact: ContactContent = {
  meta: {
    title: "Présenter une opération",
    description:
      "Présentez les principaux éléments de votre besoin de financement professionnel à ARASTE CAPITAL : nature, montant, pays, délai. Un premier échange pour situer le besoin.",
  },
  eyebrow: "Contact",
  title: "Présentez votre opération.",
  lead: "La fiche d'opération rassemble, en quatre étapes courtes, ce dont nous avons besoin pour vous donner un premier avis de faisabilité. Des ordres de grandeur suffisent ; chaque champ non obligatoire peut rester vide.",
  aside: {
    title: "Ce que la fiche nous apporte",
    items: [
      "L'opération : nature, objet, montant, pays, délai.",
      "L'actif : type, localisation, valeur et base de valeur, revenus, état.",
      "La structure : entité emprunteuse, fonds propres, dette existante, garanties.",
      "La sortie : comment et quand le financement sera remboursé.",
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
    stepsLabel: "Étapes de la fiche",
    noscript: "Cette fiche nécessite JavaScript. Si vous ne pouvez pas l'activer, utilisez les coordonnées indiquées sur cette page.",
    honeypotLabel: "Ne pas remplir ce champ",
    errorSummary: "{count} champ(s) demandent votre attention.",
    steps: [
      { title: "L'opération", description: "Les grandes lignes du besoin." },
      { title: "L'actif", description: "Ce qui est financé ou apporté en garantie." },
      { title: "Structure et sortie", description: "Qui emprunte, avec quoi, et comment le financement sera remboursé." },
      { title: "Vous", description: "Pour revenir vers vous." },
    ],
    fields: {
      financingType: {
        label: "Nature du financement",
        placeholder: "Sélectionner",
        other: "Autre (à préciser dans le descriptif)",
      },
      purpose: {
        label: "Objet de l'opération",
        options: [
          { value: "acquisition", label: "Acquisition" },
          { value: "refinancing", label: "Refinancement d'une dette existante" },
          { value: "development", label: "Développement, travaux ou transformation" },
          { value: "liquidity", label: "Besoin de trésorerie adossé à un actif" },
          { value: "other", label: "Autre" },
        ],
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
      assetType: {
        label: "Type d'actif",
        options: [
          { value: "residential", label: "Résidentiel d'investissement" },
          { value: "commercial", label: "Commercial, bureaux ou logistique" },
          { value: "hotel", label: "Hôtellerie" },
          { value: "mixed", label: "Usage mixte" },
          { value: "land", label: "Foncier ou projet" },
          { value: "portfolio", label: "Portefeuille d'actifs" },
          { value: "business", label: "Entreprise ou fonds de commerce" },
          { value: "other", label: "Autre" },
        ],
      },
      assetLocation: { label: "Localisation de l'actif", hint: "Ville ou région, sans adresse précise à ce stade." },
      assetValue: { label: "Valeur estimée", hint: "En chiffres, dans la devise choisie." },
      valueBasis: {
        label: "Base de cette valeur",
        options: [
          { value: "appraisal", label: "Expertise indépendante" },
          { value: "estimate", label: "Estimation interne ou d'agent" },
          { value: "price", label: "Prix d'acquisition" },
          { value: "none", label: "Pas encore d'estimation" },
        ],
      },
      annualIncome: { label: "Revenus annuels de l'actif", hint: "Loyers ou chiffre d'affaires, en chiffres. Laisser vide si sans objet." },
      assetStatus: {
        label: "État de l'actif",
        options: [
          { value: "stabilised", label: "Stabilisé, loué ou exploité" },
          { value: "works", label: "En travaux ou en rénovation" },
          { value: "development", label: "En développement" },
          { value: "vacant", label: "Vacant" },
          { value: "other", label: "Autre" },
        ],
      },
      borrowerType: {
        label: "Entité emprunteuse",
        options: [
          { value: "company", label: "Société opérationnelle" },
          { value: "spv", label: "Société dédiée à l'actif" },
          { value: "holding", label: "Holding" },
          { value: "fund", label: "Véhicule d'investissement" },
          { value: "professional", label: "Propriétaire professionnel" },
          { value: "other", label: "Autre" },
        ],
      },
      borrowerCountry: { label: "Pays d'immatriculation de l'emprunteur" },
      equity: { label: "Fonds propres disponibles", hint: "Ordre de grandeur, en chiffres. Laisser vide si non déterminé." },
      existingDebt: { label: "Dette existante sur l'actif", hint: "Montant restant dû, en chiffres. Laisser vide s'il n'y en a pas." },
      existingDebtMaturity: { label: "Échéance de cette dette", hint: "Mois et année, ou « à la demande »." },
      securityOffered: { label: "Garanties envisageables", hint: "Actifs, sûretés, cautions ou engagements que vous pourriez proposer." },
      exitType: {
        label: "Sortie envisagée",
        options: [
          { value: "sale", label: "Vente de l'actif" },
          { value: "refinancing", label: "Refinancement de long terme" },
          { value: "receipt", label: "Encaissement attendu" },
          { value: "partner", label: "Entrée d'un partenaire ou levée de fonds" },
          { value: "amortisation", label: "Amortissement sur les revenus" },
          { value: "other", label: "Autre ou non déterminée" },
        ],
      },
      exitTiming: { label: "Horizon de la sortie", hint: "Mois et année envisagés, même approximatifs." },
      role: {
        label: "Vous présentez cette opération en qualité de",
        options: [
          { value: "borrower", label: "Emprunteur ou dirigeant" },
          { value: "introducer", label: "Apporteur d'affaires ou courtier indépendant" },
          { value: "adviser", label: "Avocat, expert-comptable ou autre conseil" },
          { value: "other", label: "Autre" },
        ],
      },
      name: { label: "Nom et prénom" },
      company: { label: "Société ou structure" },
      email: { label: "Adresse électronique" },
      phone: { label: "Téléphone", hint: "Avec l'indicatif international. Nécessaire si vous préférez être rappelé." },
      channel: {
        label: "Canal de contact préféré",
        options: [
          { value: "email", label: "Courriel" },
          { value: "phone", label: "Téléphone" },
        ],
      },
      notes: { label: "Précisions utiles", hint: "Contraintes, calendrier, démarches déjà engagées, ou tout ce que vous jugez utile." },
    },
    summaryTitle: "Récapitulatif de la fiche",
    summaryHint: "Vérifiez les éléments avant l'envoi. Vous pouvez revenir sur chaque étape.",
    edit: "Modifier",
    optional: "facultatif",
    required: "Champs obligatoires sauf mention contraire.",
    next: "Continuer",
    back: "Retour",
    submit: "Envoyer la fiche",
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
      sentTitle: "Votre fiche d'opération a été transmise.",
      sentBody: "Nous en prenons connaissance et revenons vers vous par le canal indiqué, avec un premier retour franc.",
      demoTitle: "Mode démonstration : aucun message n'a été envoyé.",
      demoBody: "Le formulaire fonctionne, mais aucun fournisseur d'envoi n'est configuré sur ce déploiement. Votre saisie n'a été ni acheminée au cabinet ni conservée.",
      demoBanner: "Mode démonstration : les messages ne sont pas envoyés depuis ce déploiement.",
      newRequest: "Présenter une autre opération",
    },
  },
};
