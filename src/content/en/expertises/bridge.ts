import type { ExpertiseContent } from "@/content/types";

export const bridge: ExpertiseContent = {
  meta: {
    title: "Bridge finance",
    description:
      "Sourcing and structuring bridge finance for an acquisition, a maturity or a transaction pending a sale, a refinancing or another identified exit.",
  },
  title: "Bridge finance",
  shortTitle: "Bridge finance",
  eyebrow: "Financement relais",
  summary:
    "A transitional resource for an acquisition, a maturity or a transaction, pending a sale, a refinancing or another identified exit.",
  lead: "Bridge finance covers the time between an immediate need and an expected resource. Its quality is judged by the strength of the intended exit, the consistency of the security and the precision of the file, far more than by its supposed speed.",
  sections: {
    needs: {
      title: "The needs we review",
      intro: "A bridge answers situations where the timetable of the permanent resource does not coincide with that of the need.",
      items: [
        "Securing an acquisition before long-term financing is in place.",
        "Meeting a debt maturity while a refinancing is in progress.",
        "Financing a transaction pending the sale of an identified asset.",
        "Covering the period between an investment and a capital raise or the arrival of a partner.",
        "Releasing a timetable constrained by a condition precedent or an administrative delay.",
      ],
    },
    approach: {
      title: "How we support you",
      paragraphs: [
        "We start with the exit. A bridge only makes sense if its repayment rests on an identified event, realistically dated and documented: the signing of a sale, a refinancing under way, an expected receipt. We analyse the likelihood of that event, its timing and what would happen if it were delayed.",
        "We then review the available security: the assets concerned, the ranking that can be envisaged, the retained value and its consistency with the amount sought. This reading allows us to present lenders with a legible structure rather than a mere figure.",
        "Finally, the file is prepared to be read quickly and well: a summary of the transaction, the timetable, an exit table and supporting documents. We present this file to the relevant counterparts and compare the terms offered with you.",
      ],
    },
    analysis: {
      title: "What helps the analysis",
      intro: "For a first conversation, orders of magnitude are enough. For the review, these elements will be requested.",
      items: [
        "Description of the transaction and of the borrowing structure.",
        "Amount sought, intended term and timetable of the transaction.",
        "Nature, degree of certainty and date of the intended exit.",
        "Assets that may serve as security and available valuation elements.",
        "Existing debt and current commitments on the assets concerned.",
        "Financial position of the borrowing structure and of its shareholders.",
      ],
    },
    limits: {
      title: "What we do not promise",
      paragraphs: [
        "We indicate neither term, nor rate, nor time to completion before having reviewed the transaction: these parameters depend on the file, the security and the lenders consulted. Bridge finance remains more expensive than long-term financing and is only justified by a credible exit.",
        "We do not guarantee that financing will be obtained. Our commitment concerns the quality of the analysis, the clarity of the presentation and the relevance of the routes explored.",
      ],
    },
  },
  related: ["complex", "refinancing", "development"],
  cta: {
    title: "A transition to finance?",
    body: "Tell us about the transaction, its intended exit and its timetable. We will tell you quickly whether a bridge seems feasible to us.",
    button: "Present a transaction",
  },
};
