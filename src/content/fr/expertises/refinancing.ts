import type { ExpertiseContent } from "@/content/types";

export const refinancing: ExpertiseContent = {
  meta: {
    title: "Refinancement et réorganisation de dette",
    description:
      "Étude d'une dette existante et recherche d'une structure de financement mieux adaptée à l'opération, à son échéancier et à ses garanties.",
  },
  title: "Refinancement et réorganisation de dette",
  shortTitle: "Refinancement",
  eyebrow: "Réorganiser la dette",
  summary:
    "L'étude d'une dette existante, proche de son terme ou devenue inadaptée, et la recherche d'une structure de financement cohérente avec l'opération dans son état actuel, son échéancier et ses garanties.",
  lead: "Une dette se négocie à un moment donné, pour une opération donnée. Lorsque l'échéance approche, que les engagements financiers (covenants) ne correspondent plus à la réalité de l'actif ou que plusieurs financements se sont superposés, la structure initiale doit être réexaminée. Nous étudions la dette existante et recherchons, auprès du prêteur en place ou d'autres prêteurs, une structure mieux adaptée à l'opération telle qu'elle est aujourd'hui.",
  sections: {
    needs: {
      title: "Les situations que nous étudions",
      intro: "Le refinancement s'impose lorsque la dette en place ne correspond plus à l'opération qu'elle finance.",
      items: [
        "Anticiper une échéance proche sans dépendre du seul renouvellement par le prêteur en place.",
        "Revoir des covenants devenus inadaptés à l'activité, aux revenus ou à la valeur de l'actif.",
        "Adapter la dette à un actif qui a changé : travaux achevés, baux renouvelés, usage modifié.",
        "Accompagner un changement de stratégie : conservation d'un actif initialement destiné à la vente, ou l'inverse.",
        "Consolider plusieurs dettes contractées à des moments différents en une structure unique et lisible.",
        "Remplacer un financement de transition arrivé à son terme par une ressource de plus longue durée.",
      ],
    },
    approach: {
      title: "Comment nous abordons un refinancement",
      paragraphs: [
        "Nous partons de la dette en place, non de la dette souhaitée. Contrats, échéancier, garanties consenties, covenants, conditions de remboursement anticipé : chaque élément est relu pour comprendre ce qui contraint réellement l'opération et ce qui peut être renégocié. Cette lecture distingue les difficultés de calendrier des difficultés de structure. Elle permet aussi de mesurer le coût d'une sortie du financement existant, qui pèse sur l'intérêt réel de toute alternative.",
        "Nous confrontons ensuite cette dette à l'opération d'aujourd'hui : revenus effectivement dégagés, valeur actuelle des actifs, structure de détention, horizon de conservation. De cet écart naît la structure recherchée. Selon les cas, elle prend la forme d'un aménagement négocié avec le prêteur en place, d'un remplacement par un nouveau prêteur ou d'une consolidation de plusieurs lignes. Nous ne privilégions aucune de ces voies par principe : la bonne est celle dont l'échéancier et les garanties correspondent à la réalité de l'opération.",
        "Le dossier présenté aux prêteurs retrace cette évolution sans la masquer : ce que la dette finançait, ce que l'opération est devenue, ce que la nouvelle structure doit permettre. Il comprend l'historique du financement, l'échéancier proposé, les garanties offertes et les pièces qui les étayent. Nous conduisons les échanges avec les prêteurs sollicités, y compris le prêteur en place lorsque c'est pertinent, et comparons avec vous les propositions reçues. La mainlevée des sûretés existantes et la constitution des nouvelles se font en coordination avec vos conseils.",
      ],
    },
    analysis: {
      title: "Ce qu'il est utile de réunir",
      intro: "Un premier échange peut se tenir sur des ordres de grandeur ; l'étude elle-même s'appuie sur la documentation de la dette en place.",
      items: [
        "Contrats de financement en cours, avenants et échéanciers.",
        "Garanties consenties, rang des sûretés et engagements pris envers chaque prêteur.",
        "Covenants applicables et situation au regard de chacun d'eux.",
        "Conditions de remboursement anticipé et coût de sortie du financement existant.",
        "Revenus actuels des actifs, baux en cours et éléments de valorisation récents.",
        "Structure de détention et situation financière de l'emprunteur et de ses associés.",
        "Stratégie envisagée pour les actifs : conservation, arbitrage, travaux, horizon de détention.",
      ],
    },
    limits: {
      title: "Les limites de l'exercice",
      paragraphs: [
        "Un refinancement n'améliore pas mécaniquement les conditions d'une dette. Il peut aboutir à une structure plus adaptée, parfois à un coût global comparable ou supérieur, une fois pris en compte les frais de sortie, les nouvelles sûretés et les honoraires. Nous ne promettons ni baisse du coût de la dette, ni dégagement de trésorerie, ni assouplissement des covenants : ces résultats dépendent de l'opération, de son historique et des prêteurs consultés.",
        "Face au prêteur en place, nous agissons comme conseil de l'emprunteur : nous préparons et conduisons les échanges. Accepter un aménagement ou sortir du financement existant reste votre décision ; les aspects juridiques et fiscaux de cette sortie relèvent de vos conseils. Nous ne prêtons pas, ne reprenons aucune créance et ne nous engageons pas sur l'obtention d'un nouveau financement. Notre engagement porte sur une lecture complète de la dette en place et une comparaison honnête entre son maintien et les alternatives.",
      ],
    },
  },
  related: ["bridge", "complex", "acquisition"],
  faq: [
    {
      question: "Quand faut-il commencer à réfléchir à un refinancement ?",
      answer:
        "Bien avant l'échéance. Un refinancement suppose une étude, la consultation de prêteurs, une négociation et la constitution de nouvelles garanties, chacune avec son délai. Partir de la date d'échéance et remonter ces étapes donne le moment où la réflexion doit s'ouvrir. Un signal plus précoce peut aussi la déclencher : covenants devenus inadaptés, actif ou stratégie ayant évolué, plusieurs dettes à consolider.",
    },
    {
      question: "Peut-on refinancer une dette avant son échéance ?",
      answer:
        "En principe oui, dans les conditions prévues par le contrat en place. Celui-ci définit les modalités de remboursement anticipé, les éventuelles indemnités et parfois des fenêtres de sortie. Ces clauses déterminent le coût réel et le moment le plus favorable pour changer de structure. Leur lecture attentive, avec vos conseils, précède toute consultation de prêteurs. Le prêteur en place peut aussi être approché pour un aménagement.",
    },
    {
      question: "Que devient la garantie existante lors d'un refinancement ?",
      answer:
        "Elle est en général levée au remboursement de la dette qu'elle garantit, puis remplacée par les sûretés consenties au nouveau prêteur. Lorsque le prêteur en place est conservé, la garantie peut être maintenue ou aménagée par avenant. Le calendrier de mainlevée et de constitution des nouvelles sûretés se coordonne entre les prêteurs, le notaire et vos conseils. Ce point mérite d'être anticipé, car il conditionne la date effective du changement.",
    },
    {
      question: "Un refinancement coûte-t-il quelque chose ?",
      answer:
        "Oui, et ce coût doit être mesuré avant toute décision. Sortir d'un financement peut entraîner des frais de remboursement anticipé, à vérifier dans le contrat en place. S'y ajoutent la constitution des nouvelles garanties, les frais du nouveau prêteur et les honoraires des intervenants. Une structure plus adaptée peut donc présenter un coût global comparable ou supérieur à la dette existante. C'est cette comparaison complète qui fonde la décision.",
    },
  ],
  cta: {
    title: "Une dette à réexaminer ?",
    body: "Présentez-nous le financement en place, son échéance et ce qui a changé depuis sa signature. Nous vous dirons si une nouvelle structure nous paraît mériter d'être étudiée.",
    button: "Présenter une opération",
  },
};
