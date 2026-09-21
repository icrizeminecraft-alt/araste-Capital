import type { ExpertiseContent } from "@/content/types";

export const complex: ExpertiseContent = {
  meta: {
    title: "Financements complexes",
    description:
      "Conseil et intermédiation pour les opérations hors des circuits bancaires standard : détention à plusieurs niveaux, actifs atypiques, calendrier contraint.",
  },
  title: "Financements complexes",
  shortTitle: "Financements complexes",
  eyebrow: "Hors des circuits standard",
  summary:
    "Un accompagnement pour les opérations que les circuits bancaires standard lisent mal : holdings en cascade, structures étrangères, actifs atypiques, calendrier contraint ou dossier qui appelle une présentation approfondie.",
  lead: "Certaines opérations ne tiennent pas dans une grille d'analyse standard : détention à plusieurs niveaux, participations croisées, structure étrangère, actif sans marché de référence, calendrier trop court pour une instruction classique. Le besoin lui-même est souvent simple ; c'est sa lecture qui demande un travail particulier. Notre rôle consiste à rendre l'opération lisible, puis à la porter vers les prêteurs dont le cadre d'analyse correspond à ce type de structure.",
  sections: {
    needs: {
      title: "Les configurations que nous étudions",
      intro: "La complexité tient rarement au montant ; elle vient de la structure, de l'actif, du calendrier ou de l'histoire du dossier.",
      items: [
        "Financer une acquisition ou un besoin porté par une chaîne de holdings ou par des participations croisées.",
        "Présenter une structure étrangère ou un emprunteur non résident à des prêteurs habitués à un cadre national.",
        "Financer un actif atypique, sans marché de référence évident : usage mixte, site spécialisé, bien en transformation.",
        "Financer une opération dont le calendrier est plus serré que celui d'un circuit d'instruction ordinaire.",
        "Présenter un dossier dont l'histoire, les comptes ou la documentation exigent une explication approfondie.",
        "Combiner plusieurs sources de financement autour d'une même opération, avec des rangs et des calendriers distincts.",
      ],
    },
    approach: {
      title: "Notre manière d'aborder ces dossiers",
      paragraphs: [
        "Tout commence par la structure. Une détention à plusieurs niveaux, une chaîne de sociétés ou une entité étrangère n'ont rien d'anormal, mais elles doivent pouvoir s'expliquer en quelques schémas. Qui détient quoi, où se trouve l'actif, où passent les flux, où se placera la dette, quelles garanties chaque niveau peut consentir : voilà ce que le prêteur doit lire d'emblée. Cette clarification précède toute recherche de financement. Elle révèle parfois qu'une opération jugée complexe est surtout mal décrite, et parfois qu'un ajustement de la structure, à apprécier avec vos conseils, la rendrait plus simple à financer.",
        "Nous traitons ensuite ce qui fait hésiter un prêteur. Un actif sans comparables, un usage mixte, une entité récente, un historique irrégulier : chacun de ces points appelle une réponse documentée plutôt qu'un silence. Nous les identifions avec vous, rassemblons les éléments qui les éclairent (valorisations, contrats, comptes, engagements des associés) et construisons l'argumentaire autour d'eux. Le dossier ne cherche pas à minimiser les particularités de l'opération ; il les expose, les explique et montre comment la structure proposée en tient compte.",
        "Le choix des interlocuteurs découle de cette analyse. Les prêteurs n'étudient pas tous les mêmes structures, les mêmes actifs ni les mêmes juridictions ; certains disposent d'une capacité d'analyse au cas par cas, d'autres appliquent des critères fixes. Nous orientons le dossier vers ceux dont le cadre d'instruction correspond à l'opération, plutôt que de le diffuser largement. Nous suivons les échanges, répondons aux questions complémentaires et comparons avec vous les conditions et les contraintes de chaque proposition, en coordination avec vos conseils juridiques et fiscaux.",
      ],
    },
    analysis: {
      title: "Les éléments à réunir",
      intro: "Un schéma de détention et deux lignes sur le besoin suffisent pour un premier échange ; l'étude, elle, s'appuie sur les éléments suivants.",
      items: [
        "Organigramme de détention, jusqu'aux bénéficiaires effectifs, avec les juridictions concernées.",
        "Description de l'actif ou de l'opération, de son usage et de ses particularités.",
        "Montant recherché, emploi des fonds et calendrier réel de l'opération.",
        "Dettes existantes, garanties déjà consenties et engagements entre les entités du groupe.",
        "Comptes des entités emprunteuses et des garants envisagés, avec les explications utiles.",
        "Éléments de valorisation disponibles et, pour un actif atypique, hypothèses retenues.",
        "Historique des démarches déjà engagées et points qui ont fait obstacle, le cas échéant.",
      ],
    },
    limits: {
      title: "Les limites de l'exercice",
      paragraphs: [
        "Un dossier écarté par un prêteur ne sera pas nécessairement accueilli par un autre. La complexité ne se contourne pas : elle se documente. Certaines opérations restent difficiles à financer dans des conditions raisonnables, ou ne trouvent pas de prêteur ; nous vous le disons dès que notre analyse le montre. Un calendrier contraint ne raccourcit pas l'instruction du prêteur : nous n'indiquons ni délai ni conditions avant d'avoir étudié l'opération, et nous ne garantissons pas l'obtention d'un financement.",
        "Nous ne restructurons pas les montages et ne donnons pas de conseil juridique ou fiscal. Lorsqu'un ajustement de la détention ou des garanties paraît utile, il revient à vos conseils de l'apprécier et de le mettre en œuvre. Nous ne nous substituons pas non plus au prêteur : l'instruction, les conditions et la décision lui appartiennent. Ce que nous vous devons, c'est une analyse exacte de votre structure et une orientation vers les prêteurs qui peuvent réellement l'instruire.",
      ],
    },
  },
  related: ["bridge", "privateDebt", "refinancing"],
  cta: {
    title: "Une opération qui sort du cadre ?",
    body: "Décrivez-nous la structure, l'actif et le calendrier, même de manière sommaire. Nous vous indiquerons ce qui peut, selon nous, être étudié et ce qui ne le peut pas.",
    button: "Présenter une opération",
  },
};
