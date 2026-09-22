import type { ExpertiseContent } from "@/content/types";

export const complex: ExpertiseContent = {
  meta: {
    title: "Complex financing",
    description:
      "Advice and intermediation for transactions beyond standard banking channels: multi-tier holdings, atypical assets, constrained timetables.",
  },
  title: "Complex financing",
  shortTitle: "Complex financing",
  eyebrow: "Beyond standard channels",
  summary:
    "Support for transactions that standard banking channels struggle to assess: layered holdings, foreign structures, atypical assets, a constrained timetable or a case that calls for an in-depth presentation.",
  lead: "Some transactions fall outside the standard credit framework: multi-tier ownership, cross-holdings, a foreign structure, an asset with no reference market, a timetable too short for a conventional process. The need itself is often simple; what takes work is making it understandable. Our role is to make the transaction clear, then to take it to the lenders whose analytical approach suits this kind of structure.",
  sections: {
    needs: {
      title: "The situations we review",
      intro: "Complexity rarely lies in the amount; it comes from the structure, the asset, the timetable or the history of the case.",
      items: [
        "Financing an acquisition or a requirement arising within a chain of holding companies or under cross-holdings.",
        "Presenting a foreign structure or a non-resident borrower to lenders accustomed to a domestic framework.",
        "Financing an atypical asset with no obvious reference market: mixed use, specialised site, property under conversion.",
        "Financing a transaction whose timetable is tighter than an ordinary credit process allows.",
        "Presenting a case whose history, accounts or documentation requires in-depth explanation.",
        "Combining several sources of financing around one transaction, each with its own ranking and timetable.",
      ],
    },
    approach: {
      title: "How we approach these cases",
      paragraphs: [
        "Everything starts with the structure. Multi-tier ownership, a chain of companies or a foreign entity is nothing unusual, but each must be explainable in a few diagrams. Who owns what, where the asset sits, where the cash flows sit, where the debt will be placed, what security each level can grant: this is what a lender needs to see at once. This clarification precedes any search for financing. It sometimes reveals that a transaction deemed complex is simply poorly described, and sometimes that an adjustment to the structure, for your advisers to assess, would make it simpler to finance.",
        "We then address what makes a lender hesitate. An asset without comparables, mixed use, a recently formed entity, an irregular track record: each of these points calls for a documented answer rather than silence. We identify them with you, gather the elements that shed light on them (valuations, contracts, accounts, shareholder undertakings) and build the case around them. The presentation does not seek to play down the particular features of the transaction; it sets them out, explains them and shows how the proposed structure takes them into account.",
        "The choice of lenders follows from this analysis. Not all of them review the same structures, the same assets or the same jurisdictions; some have the capacity to analyse case by case, while others apply fixed criteria. We take the case to those whose review framework matches the transaction, rather than circulating it widely. We follow the discussions, answer further questions and compare with you the terms and constraints of each proposal, in coordination with your legal and tax advisers.",
      ],
    },
    analysis: {
      title: "What we will need",
      intro: "An ownership diagram and two lines on the need are enough for a first conversation; the review itself relies on the following elements.",
      items: [
        "Ownership chart down to the beneficial owners, with the jurisdictions concerned.",
        "Description of the asset or transaction, its use and its particular features.",
        "Amount sought, use of proceeds and the actual timetable of the transaction.",
        "Existing debt, security already granted and undertakings between the group's entities.",
        "Accounts of the borrowing entities and intended guarantors, with any useful explanations.",
        "Any available valuation material and, for an atypical asset, the assumptions used.",
        "History of steps already taken and, where relevant, the points that proved an obstacle.",
      ],
    },
    limits: {
      title: "The limits of the exercise",
      paragraphs: [
        "A case declined by one lender will not necessarily be taken up by another. Complexity cannot be circumvented; it has to be documented. Some transactions still prove difficult to finance on reasonable terms, or find no lender at all; we say so as soon as our analysis shows it. A tight timetable does not shorten the lender's review: we indicate neither timing nor terms before studying the transaction and do not guarantee that financing will be obtained.",
        "We do not restructure ownership arrangements and we give no legal or tax advice. Where an adjustment to the holding structure or the security appears useful, it is for your advisers to assess and implement it. Nor do we stand in for the lender: the review, the terms and the decision are the lender's alone. What we owe you is an accurate analysis of your structure and an introduction to the lenders genuinely able to review it.",
      ],
    },
  },
  related: ["bridge", "privateDebt", "refinancing"],
  faq: [
    {
      question: "What makes a case 'complex'?",
      answer:
        "Complexity rarely lies in the amount. It comes from multi-tier ownership, a foreign entity, an asset with no reference market, a timetable shorter than an ordinary credit process allows, or a history that needs explaining. In most cases the need itself is simple; what requires particular work is presenting it in a way a lender can assess.",
    },
    {
      question: "Is multi-tier ownership an obstacle?",
      answer:
        "No, provided it can be explained. A chain of holding companies or cross-holdings is nothing unusual, but the lender must understand who owns what, where the asset sits, where the cash flows pass and what security each level can grant. A clear ownership chart, down to the beneficial owners, often removes most of the hesitation. What worries a lender is opacity, not the structure itself.",
    },
    {
      question: "Does a bank's refusal close the door to any financing?",
      answer:
        "Not necessarily, but nor does it point to a favourable outcome. A refusal is sometimes explained by the review framework of the lender consulted, which did not suit the structure or the asset. It may also reveal a genuine weakness in the file. The first step is to understand the reasons given, document the points raised, then take the file to lenders whose review framework matches the transaction.",
    },
    {
      question: "What documents should we prepare for a first conversation?",
      answer:
        "For a first conversation, an ownership diagram and an outline of the need are enough. For the review, you will need the full ownership chart with the jurisdictions concerned, a description of the asset or transaction, the amount sought and its use, existing debt and security, the accounts of the borrowing entities, any available valuation material and, where relevant, the history of steps already taken.",
    },
  ],
  cta: {
    title: "A transaction that does not fit the usual mould?",
    body: "Describe the structure, the asset and the timetable to us, even in outline. We will tell you what we think can be reviewed, and what cannot.",
    button: "Present a transaction",
  },
};
