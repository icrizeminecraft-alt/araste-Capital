import type { FirmContent } from "@/content/types";

export const firm: FirmContent = {
  meta: {
    title: "Le cabinet",
    description:
      "ARASTE CAPITAL est une boutique indépendante de conseil et d'intermédiation en financements professionnels, dédiée aux financements relais et aux dossiers complexes.",
  },
  eyebrow: "Le cabinet",
  title: "Une boutique indépendante, dédiée aux financements qui demandent une lecture attentive.",
  lead: "ARASTE CAPITAL conseille et accompagne les emprunteurs professionnels dans la recherche et la structuration de financements. Nous intervenons de leur côté, sur des opérations où le calendrier, la structure ou la nature des actifs appellent une présentation approfondie.",
  paragraphs: [
    "Notre métier consiste à comprendre une opération, à la présenter avec précision et à rechercher les pistes de financement qui lui correspondent. Nous ne prêtons pas et ne gérons aucun actif : notre rôle est celui d'un conseil et d'un intermédiaire, au service de l'emprunteur.",
    "L'indépendance est la condition de ce rôle. Nous n'appartenons à aucun établissement et ne défendons aucun produit. La comparaison des pistes se fait au regard de l'opération, de son échéancier et de ses garanties.",
    "Nous travaillons en coordination avec vos conseils habituels. Le dossier que nous préparons a vocation à être lu, vérifié et discuté : sa clarté est notre premier engagement.",
  ],
  principles: {
    eyebrow: "Principes",
    title: "Ce qui guide notre travail.",
    items: [
      {
        title: "Discernement",
        body: "Chaque opération est étudiée pour ce qu'elle est. Nous disons lorsqu'une piste nous paraît peu réaliste, et pourquoi.",
      },
      {
        title: "Précision",
        body: "Un financement se décide sur des éléments concrets. Nous les rassemblons, les vérifions et les présentons sans approximation.",
      },
      {
        title: "Discrétion",
        body: "Les informations confiées restent strictement limitées aux échanges nécessaires à la recherche de financement.",
      },
      {
        title: "Coordination",
        body: "Nous travaillons avec vos avocats, experts-comptables et notaires, dans le respect du rôle de chacun.",
      },
    ],
  },
  scope: {
    eyebrow: "Périmètre",
    title: "Ce que nous faisons, et ce que nous ne faisons pas.",
    body: "Notre activité est celle d'un conseil et d'un intermédiaire en financements professionnels. Le périmètre exact des prestations, ainsi que le statut réglementaire correspondant, sont précisés dans les informations légales.",
    items: [
      "Analyse d'un besoin de financement professionnel et de sa faisabilité.",
      "Préparation et structuration de la présentation du dossier.",
      "Recherche, comparaison et discussion des pistes de financement.",
      "Accompagnement des échanges jusqu'à leur issue, avec vos conseils.",
    ],
    exclusionsTitle: "Hors de notre périmètre",
    exclusions: [
      "Crédit à la consommation et financement des particuliers.",
      "Gestion de portefeuille, gestion de fortune et conseil en placement.",
      "Commercialisation de fonds ou collecte auprès d'investisseurs.",
      "Conseil juridique ou fiscal, qui relève de vos conseils habituels.",
    ],
  },
  cta: {
    title: "Une opération à nous présenter ?",
    body: "Un premier échange permet de situer le besoin et de dire, simplement, si nous pouvons être utiles.",
    button: "Présenter une opération",
  },
};
