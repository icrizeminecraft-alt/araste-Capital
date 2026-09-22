import type { GuideContent } from "@/content/types";

export const preparingFile: GuideContent = {
  meta: {
    title: "Preparing a financing file",
    description:
      "What a lender expects from a professional financing file: the documents, an analyst's reading order, how to present weak points and the frequent mistakes.",
  },
  title: "Preparing a financing file",
  eyebrow: "Method",
  summary:
    "A lender decides on what it reads. This guide describes the documents in a financing file, the order in which an analyst reads them and the mistakes that weigh on the response.",
  lead: "Why do two comparable transactions receive different answers? Often because one was presented clearly and the other was not. This guide sets out what a financing file should contain, how to order it and how to handle its weak points, so that the lender can assess it on a clear basis.",
  sections: [
    {
      title: "What the file says about the transaction",
      paragraphs: [
        "A lender does not meet the transaction: it meets the file. It is on that document that the analyst forms a first view, prepares questions and defends the credit before a committee. An incomplete or confused file does not merely cause back-and-forth; it raises doubts about the borrower's command of its own transaction. Conversely, an ordered, quantified and documented file lets the analyst concentrate on substance. The quality of the file does not replace the quality of the transaction, but it determines how the transaction will be read.",
      ],
    },
    {
      title: "The documents in the file",
      paragraphs: [
        "The content varies with the transaction, but the framework is the same. A summary sets out the transaction in a few lines: what is being financed, why, with which resource and on what timetable. The ownership structure shows who is borrowing, who owns the borrower and where the equity comes from. The figures and their assumptions describe income, costs and the capacity to service the debt. The proposed security is presented together with the valuation material available. The exit, finally, explains how the debt will be repaid at the intended term.",
      ],
      items: [
        "The summary sets out the purpose of the transaction, its economic logic, the resource sought and the timetable.",
        "The ownership structure identifies the borrower, its shareholders, related companies and the source of the equity.",
        "The figures and assumptions cover the accounts, expected income, costs and useful sensitivities.",
        "The intended security is described with the valuation or survey material available.",
        "The exit states how the debt will be repaid, how certain that is and on what timetable.",
        "The supporting documents gather articles, leases, the sale agreement, existing debt and current commitments.",
      ],
    },
    {
      title: "How an analyst reads",
      paragraphs: [
        "An analyst rarely reads a file from the first page to the last. They begin with the summary to place the transaction and check that it falls within their institution's policy. They then look at the exit and the security: how will they be repaid, and what can they rely on if the intended scenario does not materialise. Then come the figures, which they test against the stated assumptions, followed by the structure and the supporting documents. The file is better arranged in that order than in the chronology of the project.",
        "This order is not an absolute rule; it varies with the lender, the nature of the transaction and the internal decision process. It nonetheless makes one point: the decisive questions must be answered in the first pages, without the analyst having to reconstruct them. Supporting detail and evidence come afterwards, in appendices, clearly referenced from the body of the file.",
      ],
    },
    {
      title: "Presenting the weak points",
      paragraphs: [
        "Every transaction has weak points: a lease that is expiring, a loss-making year, security already encumbered, a tight timetable. The temptation is to leave them in the background. That is a mistake: the analyst will find them, often while checking the documents, and will then wonder what else has been left unsaid. A weak point identified, explained and accompanied by a response strengthens the file. The same point discovered by the lender weakens it, whatever its real seriousness.",
        "Presenting a weak point means naming it, measuring its effect on the transaction and stating what is planned in response: additional security, a reserve, a fallback scenario, a condition precedent. This approach shows that the borrower knows the transaction and has already worked on its fragilities. It is often what the lender remembers best about a file, and what sets it apart from others.",
      ],
    },
    {
      title: "Frequent mistakes",
      paragraphs: [
        "Three mistakes recur in files that receive a late or negative answer. First, the incomplete file, missing documents the lender will ask for anyway: each further request reopens the assessment and moves the timetable. Second, unsourced assumptions: an expected rent, a resale value or a margin stated without a verifiable reference lose their credibility, and the rest of the file with them. Third, the unrealistic timetable, which allows neither for the time of assessment, nor for the valuation, nor for the conditions precedent, and puts the transaction under strain.",
      ],
    },
    {
      title: "The role of your advisers",
      paragraphs: [
        "A financing file rests on elements that only your advisers can establish or validate. The accountant produces the accounts, interim statements and forecasts, and documents the quantified assumptions. The lawyer or notary clarifies the ownership structure, the drafting of the security and the terms of the sale agreement. These legal and tax questions are theirs, not a financing adviser's. Involving your advisers early avoids a document being redone or a structure being called into question during the assessment.",
        "A financing adviser can help you order these elements, identify what is missing and present the file in the logic of a lender, before it is submitted. They coordinate with your usual advisers without taking their place. A clear division of roles, agreed from the outset, saves everyone time and gives the lender a single, consistent counterpart throughout the assessment.",
      ],
    },
  ],
  keyPoints: [
    "A lender does not meet the transaction: it reads the file and decides on what it finds there.",
    "Summary, ownership structure, figures, security and exit form the framework of any file.",
    "The decisive questions must be answered in the first pages, with the evidence in appendices.",
    "A weak point explained strengthens the file; discovered by the lender, it weakens it.",
    "Your advisers establish the documents; a financing adviser orders them for a lender.",
  ],
  relatedExpertises: ["complex", "acquisition"],
  relatedGuides: ["exitStrategy", "refinancingSignals"],
};
