import type { HomeContent } from "@/content/types";

export const home: HomeContent = {
  meta: {
    title: "Conseil indépendant en financement immobilier et solutions de liquidité",
    description:
      "ARASTE CAPITAL accompagne entrepreneurs, investisseurs et structures patrimoniales dans leurs acquisitions, leurs refinancements et leurs besoins de financement complexes.",
  },
  hero: {
    eyebrow: "Conseil indépendant en financement",
    title: "Financement immobilier et solutions de liquidité.",
    body: "ARASTE CAPITAL accompagne entrepreneurs, investisseurs et structures patrimoniales dans leurs acquisitions, leurs refinancements et leurs besoins de financement complexes.",
    cta: "Échanger sur votre projet",
    secondary: "Découvrir nos financements",
  },
  needs: {
    eyebrow: "Vos besoins",
    title: "Acquérir, refinancer, dégager des liquidités.",
    items: [
      {
        title: "Acquérir",
        body: "Étudier le financement d'un investissement en tenant compte de l'actif, de la structure d'acquisition et du calendrier.",
        expertises: ["acquisition", "development"],
      },
      {
        title: "Refinancer",
        body: "Examiner une dette existante et comparer les options correspondant à la situation actuelle de l'emprunteur.",
        expertises: ["refinancing", "complex"],
      },
      {
        title: "Dégager des liquidités",
        body: "Étudier les possibilités de financement adossées aux actifs mobilisables, selon leur nature et les critères des prêteurs.",
        expertises: ["bridge", "privateDebt"],
      },
    ],
    all: "L'offre détaillée",
  },
  value: {
    eyebrow: "La valeur du conseil",
    title: "Une proposition de financement s'apprécie au-delà du taux.",
    body: "Montant disponible, coût global, garanties, échéancier et conditions de remboursement : nous organisons l'analyse de ces paramètres afin de vous permettre de comparer les options proposées.",
    parameters: ["Montant disponible", "Coût global", "Garanties demandées", "Échéancier", "Conditions de remboursement"],
    cta: "Notre approche",
  },
  approach: {
    eyebrow: "Notre méthode",
    title: "De l'analyse du besoin à la comparaison des propositions.",
    intro: "Quatre temps, les mêmes pour chaque opération, du premier échange jusqu'à la mise en place du financement.",
    steps: [
      {
        title: "Comprendre l'opération",
        body: "Un premier échange pour situer le besoin, les actifs, la structure de détention et le calendrier.",
      },
      {
        title: "Préparer le dossier",
        body: "Une présentation chiffrée et documentée, lisible par un prêteur, et les options de financement envisageables.",
      },
      {
        title: "Consulter et comparer",
        body: "La consultation des prêteurs pertinents et la lecture comparative des propositions reçues.",
      },
      {
        title: "Accompagner jusqu'à l'issue",
        body: "Le suivi des conditions et des échanges jusqu'à la mise en place, avec vos conseils.",
      },
    ],
    cta: "Notre approche en détail",
  },
  advisers: {
    eyebrow: "Vos conseils",
    title: "Des rôles définis et des échanges coordonnés.",
    body: "Avocats, notaires, experts-comptables, gestionnaires de patrimoine et family offices : nous travaillons avec vos conseils habituels, dans le respect du rôle de chacun. Le dossier que nous préparons a vocation à être lu, vérifié et discuté avec eux. Les professionnels qui nous présentent une opération disposent d'un espace dédié.",
    cta: "L'espace partenaires",
    secondary: "Comment nous coordonnons les échanges",
  },
  guides: {
    eyebrow: "Guides",
    title: "Comprendre avant de décider.",
    body: "Deux guides courts pour lire une opération comme un prêteur la lira.",
    all: "Tous les guides",
    featured: ["bridgeBasics", "preparingFile"],
  },
  contact: {
    eyebrow: "Contact",
    title: "Échangeons sur votre projet.",
    body: "Votre nom, le moyen de vous joindre et le contexte de l'opération : nous reprenons contact avec vous.",
    cta: "Échanger sur votre projet",
    secondary: "Présenter votre opération dans la fiche détaillée",
    sheetLead: "Vous souhaitez aller plus loin dès maintenant ?",
  },
};
