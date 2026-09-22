import type { ExpertiseContent } from "@/content/types";

export const bridge: ExpertiseContent = {
  meta: {
    title: "Bridge finance",
    description:
      "Sourcing and structuring bridge finance for an acquisition, a debt maturity or a transaction pending a sale, a refinancing or another identified exit.",
  },
  title: "Bridge finance",
  shortTitle: "Bridge finance",
  eyebrow: "Between the need and the resource",
  summary:
    "A transitional resource for an acquisition, a debt maturity or a transaction, pending a sale, a refinancing or another identified exit.",
  lead: "Bridge finance covers the time between an immediate need and an expected resource. Its quality is judged by the strength of the intended exit, the consistency of the security and the precision of the file, far more than by its supposed speed.",
  sections: {
    needs: {
      title: "The needs we review",
      intro: "A bridge addresses situations where the timetable of the permanent resource does not coincide with that of the need.",
      items: [
        "Securing an acquisition before long-term financing is in place.",
        "Meeting a debt maturity while a refinancing is in progress.",
        "Financing a transaction pending the sale of an identified asset.",
        "Covering the period between an investment and a capital raise or the arrival of a partner.",
        "Easing a timetable constrained by a condition precedent or an administrative delay.",
      ],
    },
    approach: {
      title: "How we support you",
      paragraphs: [
        "We start with the exit. A bridge only makes sense if its repayment rests on an identified event, realistically dated and documented: the signing of a sale, a refinancing in progress, an expected receipt. We analyse the likelihood of that event, its timing and what would happen if it were delayed.",
        "We then review the available security: the assets concerned, the ranking that can be envisaged, the value adopted and its consistency with the amount sought. This reading allows us to present lenders with a structure they can read, rather than a mere figure.",
        "Finally, the file is prepared to be read quickly and well: a summary of the transaction, the timetable, an exit table and supporting documents. We present this file to the relevant lenders and review the terms offered together with you.",
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
        "We indicate neither term, nor rate, nor time to completion before having reviewed the transaction: these parameters depend on the file, the security and the lenders consulted. Bridge finance is generally more expensive than long-term financing and is only justified by a credible exit.",
        "We do not guarantee that financing will be obtained. Our commitment concerns the quality of the analysis, the clarity of the presentation and the relevance of the routes explored.",
      ],
    },
  },
  related: ["complex", "refinancing", "development"],
  faq: [
    {
      question: "What is bridge finance for?",
      answer:
        "A bridge covers the time between an immediate need and an expected resource: the proceeds of a sale, a refinancing in progress, a capital raise or an expected receipt. It makes it possible to secure an acquisition, meet a maturity or complete a step without waiting for the permanent resource to be available. It does not replace that resource; it brings its effect forward, for a limited period.",
    },
    {
      question: "What is meant by the “exit” of a bridge?",
      answer:
        "The exit is the event that will allow the bridge to be repaid: the signing of a sale, the completion of a refinancing, the receipt of an expected sum. It is the first element a lender analyses, before the security and the borrower's position. An identified exit, realistically dated and documented, changes the reading of the file. A vague or distant exit makes the bridge hard to justify.",
    },
    {
      question: "Is security required to obtain a bridge?",
      answer:
        "In most cases, a lender expects security consistent with the amount and term of the bridge. It looks at the assets involved in the transaction, other available assets, the ranking that can be envisaged and the value adopted. Its nature depends on the transaction and on the lender consulted. What matters is to check beforehand what is genuinely available, taking into account existing debt and charges already taken over the assets concerned.",
    },
    {
      question: "Is a bridge feasible without a committed sale?",
      answer:
        "A signed sale is not the only possible exit. A refinancing under review, an advanced capital raise or a contractual receipt can also document the exit. On the other hand, a mere intention to sell, with no steps taken and no valuation elements, makes the file harder to present. The better supported the exit, the more open the conversation with a lender. Only a review of the file can measure this.",
    },
  ],
  cta: {
    title: "A transition to finance?",
    body: "Tell us about the transaction, its intended exit and its timetable. We will tell you plainly whether a bridge seems feasible to us.",
    button: "Present a transaction",
  },
};
