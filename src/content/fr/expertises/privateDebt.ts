import type { ExpertiseContent } from "@/content/types";

export const privateDebt: ExpertiseContent = {
  meta: {
    title: "Dette privée et situations particulières",
    description:
      "Recherche de financements auprès de fonds de dette et de prêteurs privés, côté emprunteur, quand l'opération appelle une autre approche que le crédit bancaire.",
  },
  title: "Dette privée et situations particulières",
  shortTitle: "Dette privée",
  eyebrow: "Prêteurs spécialisés",
  summary:
    "La recherche de financements auprès de fonds de dette, de prêteurs privés et de plateformes institutionnelles, pour les opérations que le crédit bancaire standard ne couvre pas, ou pas dans des conditions acceptables.",
  lead: "Fonds de dette, prêteurs privés, plateformes institutionnelles : à côté du crédit bancaire, des prêteurs spécialisés étudient des opérations que la grille bancaire standard peine à accueillir. Le calendrier, la structure, la nature de l'actif ou une situation de transition y appellent une analyse au cas par cas. Nous recherchons ces financements pour votre compte, en qualité de conseil de l'emprunteur : nous ne prêtons pas, ne représentons aucun prêteur et ne recommandons ce segment que sur des critères précis, jamais par défaut.",
  sections: {
    needs: {
      title: "Les opérations qui appellent un prêteur spécialisé",
      intro: "Le recours à un prêteur spécialisé se justifie par une caractéristique précise de l'opération, non par le seul refus d'une banque.",
      items: [
        "Financer une opération dont le calendrier est incompatible avec le circuit d'instruction d'une banque.",
        "Loger une dette au niveau d'une holding ou d'un véhicule d'investissement, hors du périmètre bancaire habituel.",
        "Financer un actif en transition, avant sa stabilisation : repositionnement, changement d'usage, restructuration locative.",
        "Compléter un financement bancaire par une tranche de rang subordonné, afin de boucler le plan de financement.",
        "Traverser une situation particulière : départ d'un associé, transmission de l'entreprise, réorganisation ou période de résultats irréguliers.",
        "Obtenir un échéancier adapté aux flux réels de l'opération plutôt qu'à un amortissement standard.",
      ],
    },
    approach: {
      title: "Comment nous conduisons cette recherche",
      paragraphs: [
        "Nous vérifions d'abord que l'opération relève bien de ce segment. La dette privée n'est pas une solution par défaut : elle coûte plus cher qu'un crédit bancaire et s'accompagne d'une documentation plus exigeante. Elle se justifie lorsqu'un financement bancaire n'est pas accessible dans des conditions acceptables, ou lorsqu'une tranche complémentaire est nécessaire. Nous vous disons franchement si une piste bancaire reste préférable et, si ce n'est pas le cas, ce que le recours à un prêteur spécialisé implique pour vous.",
        "Nous identifions ensuite les prêteurs dont le cadre d'intervention correspond à l'opération. Fonds de dette, prêteurs privés et plateformes institutionnelles n'étudient pas les mêmes actifs, les mêmes zones géographiques, les mêmes rangs ni les mêmes situations. Chacun décide selon ses propres critères, connus à l'avance pour l'essentiel. Présenter un dossier au mauvais prêteur fait perdre du temps et peut fragiliser la suite de la recherche. Nous sélectionnons donc un nombre restreint d'interlocuteurs pertinents, leur exposons l'opération de manière cohérente et organisons les échanges pour qu'ils avancent en parallèle.",
        "Le dossier est construit dans le format que ces prêteurs attendent : plan de trésorerie, hypothèses et analyses de sensibilité, garanties envisagées, scénario de sortie et solutions de repli. Lorsqu'une proposition arrive, nous en lisons chaque terme avec vous : structure de la dette, garanties, engagements financiers, conditions de remboursement anticipé, obligations d'information, frais. Le coût apparent n'est qu'un élément parmi d'autres ; ce sont souvent les engagements et les clauses de sortie qui déterminent si le financement convient réellement à l'opération. La documentation relève de vos conseils juridiques ; nous suivons la négociation à leurs côtés jusqu'à la signature, lorsque l'opération aboutit.",
      ],
    },
    analysis: {
      title: "Les éléments à préparer",
      intro: "Les prêteurs spécialisés attendent un dossier complet dès la première présentation ; ces éléments en forment la base.",
      items: [
        "Description de l'opération, de la structure emprunteuse et de l'emploi des fonds.",
        "Raisons pour lesquelles un financement bancaire standard n'est pas, ou plus, envisagé.",
        "Plan de trésorerie ou plan d'affaires, avec les hypothèses retenues.",
        "Actifs et garanties mobilisables, dettes existantes et rang des garanties déjà consenties.",
        "Scénario de sortie envisagé : vente, refinancement, stabilisation de l'actif ou événement identifié.",
        "Comptes de l'emprunteur et des garants, avec les explications utiles sur la période récente.",
        "Propositions déjà reçues ou refus déjà essuyés, avec leurs motifs lorsqu'ils sont connus.",
      ],
    },
    limits: {
      title: "Ce que la dette privée n'est pas",
      paragraphs: [
        "La dette privée n'est pas un raccourci : c'est un financement différent. Les prêteurs spécialisés étudient les dossiers avec rigueur, refusent ceux qui ne correspondent pas à leur cadre et exigent une documentation souvent plus détaillée que celle d'une banque. Leur coût est plus élevé et les engagements qu'ils imposent plus contraignants. Une opération sans sortie crédible ou sans garanties cohérentes ne trouvera pas davantage de prêteur dans ce segment qu'ailleurs.",
        "Nous ne prêtons pas, ne gérons ni ne commercialisons aucun fonds et n'intervenons que du côté de l'emprunteur. Notre rôle est de rechercher, présenter et négocier, jamais de décider à la place du prêteur. Nous n'annonçons ni conditions ni délai avant l'étude, et nous ne promettons pas l'obtention d'un financement. Notre engagement porte sur la justesse de l'orientation, la qualité du dossier et la lecture attentive des propositions reçues.",
      ],
    },
  },
  related: ["complex", "bridge", "refinancing"],
  cta: {
    title: "Un besoin que le crédit bancaire ne couvre pas ?",
    body: "Décrivez-nous l'opération, ce qui la distingue d'un dossier bancaire classique et la sortie envisagée. Nous vous dirons si ce segment nous paraît pertinent et ce qu'il impliquerait pour vous.",
    button: "Présenter une opération",
  },
};
