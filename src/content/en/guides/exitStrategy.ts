import type { GuideContent } from "@/content/types";

export const exitStrategy: GuideContent = {
  meta: {
    title: "The exit: the key to a bridge",
    description:
      "What a lender calls the exit of a bridge, the main exit routes, what makes an exit credible and how to present it in a financing file.",
  },
  title: "The exit: the key to a bridge",
  eyebrow: "Repayment strategy",
  summary:
    "A bridge is repaid by an identified event: a sale, a refinancing, an expected receipt or the arrival of a partner. This guide explains what makes that exit credible to a lender and how to present it.",
  lead: "A bridge is judged less by its amount or its speed than by the way it will be repaid. That question, which lenders call the exit, often decides the outcome of a file. This guide describes the main exit routes, what makes them credible and how to present them.",
  sections: [
    {
      title: "What the exit means",
      paragraphs: [
        "In a bridge, the exit is the event that will allow the lender to be repaid at the agreed maturity. Unlike long-term financing, a bridge is not amortised over time from the borrower's rents or profits. It is most often repaid in one go, from a resource that is expected but not yet available. The exit is therefore not a detail of the file but its core. Security covers the case where the exit fails; it does not replace it. A lender that has to enforce security in order to be repaid considers that the transaction has failed.",
      ],
    },
    {
      title: "The main exit routes",
      paragraphs: [
        "Four routes appear in most files. They do not offer the same degree of certainty and are not documented in the same way. An asset sale depends on a buyer and a market. A refinancing depends on another lender and its review. An expected receipt depends on a third-party debtor or a contractual timetable. The arrival of a partner depends on a negotiation in progress. Identifying which route your exit belongs to tells you what evidence a lender will expect.",
      ],
      items: [
        "The sale of an asset, property or otherwise, whose proceeds will repay the bridge.",
        "Refinancing through a long-term loan, reviewed by another lender.",
        "An expected receipt: a disposal already signed, compensation, an established receivable, sales proceeds from a development.",
        "The arrival of a partner or investor in the capital of the borrowing structure.",
      ],
    },
    {
      title: "What makes an exit credible",
      paragraphs: [
        "A lender does not expect absolute certainty, but a high probability, supported by facts. Four criteria recur in its analysis. Identification: the exit names a specific asset, lender or third party, not a general intention. Progress: a signed sale agreement or a refinancing offer received carries more weight than an agent's instruction only just given. Timetable: the exit date must precede the bridge's maturity by a reasonable margin. Documentation: every step completed must be supported by a document.",
        "These criteria combine. A sale that is far advanced but poorly documented worries a lender as much as one that is documented but still distant. The lender also reads the consistency between the expected proceeds of the exit and the amount to be repaid. If the sale must cover the bridge, existing debt and costs at the same time, it will check that the value adopted leaves a margin. A recent independent valuation, where one exists, provides useful support here.",
      ],
      items: [
        "A named exit: which asset, which lender, which third party, which partner.",
        "Steps already completed, evidenced by dated documents.",
        "An exit date earlier than the bridge's maturity, with a margin.",
        "Exit proceeds consistent with the amount to be repaid.",
      ],
    },
    {
      title: "Planning a fallback",
      paragraphs: [
        "No exit is secured until it has happened. A buyer may withdraw, a refinancing may be delayed by a condition precedent, a partner may reconsider. An attentive lender will therefore ask what would happen if the main exit were delayed. The answer is not to promise that it will not be, but to describe a realistic fallback. That fallback can take several forms: another asset that can be sold, a refinancing with a different lender, a contribution from the shareholders, an extension discussed in advance. It must be credible in its turn: a backup solution weaker than the main exit reassures no one.",
      ],
    },
    {
      title: "The signals that worry a lender",
      paragraphs: [
        "Some elements lead a lender to decline a file or to tighten its terms. They relate less to the nature of the exit than to the way it is described. An exit that changes from one version of the file to the next is the most common example. A refinancing presented as secured, when no lender has been approached, is another. The signals below recur in many files.",
      ],
      items: [
        "An exit described as “obvious” but with no supporting document.",
        "An exit timetable that leaves no margin before the bridge's maturity.",
        "A bridge intended to cover a cash shortfall rather than an identified transition.",
        "An exit value that assumes a more favourable market than the one observed.",
        "One bridge after another, with no permanent resource in sight.",
      ],
    },
    {
      title: "Presenting the exit in the file",
      paragraphs: [
        "The exit deserves a place of its own in the file. A short summary is often enough. It sets out the nature of the exit, the parties involved, the state of progress, the intended timetable and the expected proceeds, against the amount to be repaid. This summary, sometimes called an exit table, allows the lender to check quickly that the whole is consistent. It refers to the supporting documents, filed in the order in which they will be consulted.",
        "It is better to set out uncertainties than to let them be discovered. If the buyer has not yet secured its own financing, the file says so. The same applies if the refinancing depends on an unresolved point or if the timetable carries an administrative risk. In each case, the file explains how the point is being handled. A lender prefers an exit described with its weaknesses to a smooth presentation whose flaws emerge during the review. An adviser can help you structure this presentation.",
      ],
    },
  ],
  keyPoints: [
    "The exit is the event that will repay the bridge; security covers its failure but does not replace it.",
    "A credible exit is identified, advanced, dated with a margin and documented at every step.",
    "A realistic fallback, however modest, reassures more than a promised exit with no alternative.",
    "Uncertainties set out in the file weigh less than those discovered during the review.",
  ],
  relatedExpertises: ["bridge", "refinancing"],
  relatedGuides: ["bridgeBasics", "preparingFile"],
};
