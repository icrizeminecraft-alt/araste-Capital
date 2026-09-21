import type { ExpertiseContent } from "@/content/types";

export const refinancing: ExpertiseContent = {
  meta: {
    title: "Refinancing and debt reorganisation",
    description:
      "Review of existing debt and the search for a financing structure better matched to the transaction, its repayment schedule and its security.",
  },
  title: "Refinancing and debt reorganisation",
  shortTitle: "Refinancing",
  eyebrow: "Existing debt, new structure",
  summary:
    "The review of existing debt, approaching maturity or no longer fit for purpose, and the search for a financing structure consistent with the transaction in its current state, its repayment schedule and its security.",
  lead: "Debt is negotiated at a given moment, for a given transaction. When maturity approaches, when financial covenants no longer reflect the asset or when several loans have been layered on top of one another, the original structure needs to be re-examined. We review the debt in place and seek, from the existing lender or from others, a structure better matched to the transaction as it stands today.",
  sections: {
    needs: {
      title: "The situations we review",
      intro: "Refinancing becomes necessary when the debt in place no longer fits the transaction it finances.",
      items: [
        "Preparing for an approaching maturity without relying solely on renewal by the existing lender.",
        "Revisiting covenants that no longer suit the business, its income or the value of the asset.",
        "Adapting the debt to an asset that has changed: works completed, leases renewed, change of use.",
        "Supporting a change of strategy: retaining an asset initially earmarked for sale, or the reverse.",
        "Consolidating several loans taken out at different times into a single, clear structure.",
        "Replacing a bridge facility that has reached maturity with a longer-term resource.",
      ],
    },
    approach: {
      title: "How we approach a refinancing",
      paragraphs: [
        "We start from the debt in place, not from the debt hoped for. Agreements, repayment schedule, security granted, covenants, prepayment terms: each element is re-read to understand what genuinely constrains the transaction and what can be renegotiated. This reading separates difficulties of timing from difficulties of structure. It also allows us to measure the cost of exiting the existing financing, which bears on the true value of any alternative.",
        "We then set this debt against the transaction as it is now: income actually generated, current value of the assets, ownership structure, holding horizon. The structure sought emerges from that gap. Depending on the case, it takes the form of an amendment negotiated with the existing lender, a replacement by a new lender or a consolidation of several facilities. We favour none of these routes as a matter of principle: the right one is the one whose repayment schedule and security match the reality of the transaction.",
        "The file presented to lenders sets out this evolution without disguising it: what the debt financed, what the transaction has become, what the new structure must allow. It includes the history of the financing, the proposed repayment schedule, the security offered and the documents supporting them. We conduct the discussions with the lenders approached, including the existing lender where relevant, and compare the proposals received with you. The release of existing security and the creation of new security are handled in coordination with your advisers.",
      ],
    },
    analysis: {
      title: "What is useful to gather",
      intro: "A first conversation can proceed on approximate figures; the review itself relies on the documentation of the debt in place.",
      items: [
        "Current facility agreements, amendments and repayment schedules.",
        "Security granted, ranking and undertakings given to each lender.",
        "Applicable covenants and current position against each of them.",
        "Prepayment terms and the cost of exiting the existing financing.",
        "Current income from the assets, leases in place and recent valuation material.",
        "Ownership structure and financial position of the borrower and its shareholders or partners.",
        "Intended strategy for the assets: retention, disposal, works, holding horizon.",
      ],
    },
    limits: {
      title: "The limits of the exercise",
      paragraphs: [
        "A refinancing does not automatically improve the terms of a debt. It may lead to a better-suited structure, sometimes at an overall cost comparable to or higher than before, once exit costs, new security and fees are taken into account. We promise neither a lower cost of debt, nor a release of cash, nor a relaxation of covenants: these outcomes depend on the transaction, its history and the lenders consulted.",
        "With the existing lender, we act as the borrower's adviser: we prepare and conduct the discussions. Accepting an amendment or exiting the existing financing remains your decision; the legal and tax aspects of that exit fall to your advisers. We do not lend, do not purchase or assume any debt, and make no commitment to obtaining new financing. We commit to a complete reading of the debt in place and an honest comparison between keeping it and the alternatives.",
      ],
    },
  },
  related: ["bridge", "complex", "acquisition"],
  cta: {
    title: "Debt worth a second look?",
    body: "Tell us about the financing in place, its maturity and what has changed since it was arranged. We will tell you whether, in our view, a new structure is worth exploring.",
    button: "Present a transaction",
  },
};
