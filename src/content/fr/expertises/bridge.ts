import type { ExpertiseContent } from "@/content/types";

export const bridge: ExpertiseContent = {
  meta: {
    title: "Financement relais",
    description:
      "Recherche et structuration de financements relais pour une acquisition, une échéance ou une opération, dans l'attente d'une vente ou d'un refinancement.",
  },
  title: "Financement relais",
  shortTitle: "Financement relais",
  eyebrow: "Le temps d'une sortie identifiée",
  summary:
    "Une ressource de transition pour une acquisition, une échéance ou une opération, dans l'attente d'une vente, d'un refinancement ou d'une autre sortie identifiée.",
  lead: "Un financement relais couvre le temps qui sépare un besoin immédiat d'une ressource attendue. Sa qualité se juge à la solidité de la sortie envisagée, à la cohérence des garanties et à la précision du dossier, bien plus qu'à sa rapidité supposée.",
  sections: {
    needs: {
      title: "Les besoins que nous étudions",
      intro: "Le relais répond à des situations où le calendrier de la ressource définitive ne coïncide pas avec celui du besoin.",
      items: [
        "Sécuriser une acquisition avant la mise en place du financement de long terme.",
        "Faire face à une échéance de dette dans l'attente d'un refinancement en cours.",
        "Financer une opération dans l'attente de la vente d'un actif identifié.",
        "Couvrir la période séparant un investissement d'une levée de fonds ou de l'entrée d'un partenaire.",
        "Libérer un calendrier contraint par une condition suspensive ou un délai administratif.",
      ],
    },
    approach: {
      title: "Notre logique d'accompagnement",
      paragraphs: [
        "Nous commençons par la sortie. Un relais n'a de sens que si son remboursement repose sur un événement identifié, daté avec réalisme et documenté : signature d'une vente, refinancement engagé, encaissement attendu. Nous analysons la probabilité de cet événement, ses délais et ce qui se passerait s'il tardait.",
        "Nous étudions ensuite les garanties mobilisables : actifs concernés, rang envisageable, valeur retenue et cohérence avec le montant recherché. Cette lecture permet de présenter aux prêteurs une structure lisible, plutôt qu'un simple montant.",
        "Le dossier est enfin préparé pour être lu vite et bien : synthèse de l'opération, calendrier, tableau de sortie, pièces justificatives. Nous présentons ce dossier aux interlocuteurs pertinents et comparons les conditions proposées avec vous.",
      ],
    },
    analysis: {
      title: "Les éléments utiles à l'analyse",
      intro: "Pour un premier échange, des ordres de grandeur suffisent. Pour l'étude, ces éléments seront demandés.",
      items: [
        "Description de l'opération et de la structure emprunteuse.",
        "Montant recherché, durée envisagée et calendrier de l'opération.",
        "Nature, degré de certitude et date de la sortie envisagée.",
        "Actifs pouvant servir de garantie et éléments de valorisation disponibles.",
        "Dettes existantes et engagements en cours sur les actifs concernés.",
        "Situation financière de la structure emprunteuse et de ses associés.",
      ],
    },
    limits: {
      title: "Ce que nous ne promettons pas",
      paragraphs: [
        "Nous n'indiquons ni durée, ni taux, ni délai d'obtention avant d'avoir étudié l'opération : ces paramètres dépendent du dossier, des garanties et des prêteurs consultés. Un financement relais est généralement plus coûteux qu'un financement de long terme et ne se justifie que par une sortie crédible.",
        "Nous ne garantissons pas l'obtention d'un financement. Notre engagement porte sur la qualité de l'analyse, la clarté de la présentation et la pertinence des pistes explorées.",
      ],
    },
  },
  related: ["complex", "refinancing", "development"],
  cta: {
    title: "Une transition à financer ?",
    body: "Présentez-nous l'opération, sa sortie envisagée et son calendrier. Nous vous dirons sans détour si un relais nous paraît envisageable.",
    button: "Présenter une opération",
  },
};
