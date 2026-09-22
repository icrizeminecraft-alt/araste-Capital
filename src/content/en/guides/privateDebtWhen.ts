import type { GuideContent } from "@/content/types";

export const privateDebtWhen: GuideContent = {
  meta: {
    title: "When private debt makes sense",
    description:
      "Debt funds and private lenders, on the borrower side: the situations where this financing is justified, what it costs and the clauses to read before signing.",
  },
  title: "When private debt makes sense",
  eyebrow: "Specialist lenders",
  summary:
    "Specialist lenders finance transactions that standard bank criteria struggle to accommodate. This guide explains what private debt covers, when it is justified, what it costs and what to read before committing.",
  lead: "Private debt is often presented as an alternative to bank credit, without it always being clear what it covers or what it involves. This guide describes what specialist lenders are, the situations where their involvement is justified and the price, in the broad sense, that the borrower accepts in return. You will come away with simple criteria for deciding whether this route is worth exploring.",
  sections: [
    {
      title: "What private debt covers",
      paragraphs: [
        "The term refers to financing provided by lenders that are not banks: debt funds, private lenders, institutional platforms. They lend from resources they manage or hold and decide according to their own criteria. A bank applies standard criteria: nature of the asset, repayment capacity, ratios, track record. A specialist lender analyses the transaction on its own terms, with its exit and its specific risks. In return, the lender expects higher remuneration and more robust documentation, because it carries a risk or a configuration that standard bank criteria accommodate poorly.",
      ],
    },
    {
      title: "The situations where it is justified",
      paragraphs: [
        "Turning to a specialist lender is justified by a feature of the transaction, never by a bank's refusal alone. The timetable first: the transaction must complete before a bank's credit process could conclude. The structure next: the debt must sit in a holding company or a vehicle that the bank does not usually finance. The asset too: in transition, without stabilised cash flows, it does not fit standard criteria. The additional tranche last: a bank finances most of the transaction, but the gap with the available equity remains to be filled.",
      ],
      items: [
        "A timetable incompatible with a bank's credit process.",
        "Debt to be placed at the level of a holding company or an investment vehicle.",
        "An asset in transition: repositioning, change of use, lease restructuring.",
        "A subordinated tranche to complete a bank-financed funding package.",
        "A special situation: business transfer, reorganisation, irregular recent results.",
      ],
    },
    {
      title: "What it really costs",
      paragraphs: [
        "Private debt is generally more expensive than bank credit; that is the price of the risk accepted and of the flexibility of analysis. But the headline cost is only part of the equation. Added to it are arrangement, structuring and monitoring fees, together with the advisers' fees that heavier documentation requires. Preparation also takes longer: these lenders expect a complete file from the first presentation, with documented assumptions.",
        "The second cost is less visible: the covenants. A specialist lender frames the transaction with financial covenants and with restrictions on what the borrower may do during the life of the loan. These cover distributions, disposals, additional borrowing or a change of control. These constraints have a real cost. They reduce your freedom to manage and can hinder a strategy the lender did not anticipate. Before comparing two proposals by their cost, compare them by what they prohibit.",
      ],
    },
    {
      title: "What these lenders analyse",
      paragraphs: [
        "A specialist lender does not seek to replicate a bank's analysis; it seeks to understand how it will be repaid. The exit is therefore its first concern: sale, refinancing once the asset is stabilised, an expected receipt or the entry of a partner. It assesses its credibility, its timetable and the fallback options if the main scenario fails. Next comes the security: its nature, its ranking, its value in a forced sale. Finally it examines the borrower itself: ownership structure, quality of the accounts, experience of comparable transactions. Bank refusals already encountered are not disqualifying, but they must be explained.",
      ],
      items: [
        "Does your exit scenario still hold if the sale or the refinancing takes longer than planned?",
        "Which fallback option can you document today, rather than merely promise?",
        "Prepare a cash-flow forecast in which every assumption can be supported by a document.",
        "Gather the title documents, existing debt, prior charges already in place and recent valuations.",
        "Attach a note explaining what a bank declined, or what it leaves uncovered.",
      ],
    },
    {
      title: "The clauses to read carefully",
      paragraphs: [
        "A private debt proposal is read in full, not only in its financial terms. Financial covenants first: ratios to be met, how often they are tested, the consequences of a breach and the cure options. Prepayment next: is it possible, when, at what price, and how does that cost change if the exit occurs earlier or later than planned? Information undertakings last: periodic reports, notification of events, access to the accounts. A breach of these undertakings can, in some documentation, constitute a default in the same way as a missed payment: a point to be checked with your advisers.",
      ],
      items: [
        "What happens if a ratio is breached once: a warning, a cure period or a default?",
        "Is the cost of prepayment known in advance, whatever the timing of the exit?",
        "Who will produce the periodic reports, how often, and with what resources in-house?",
        "Does a distribution or a change of shareholder require the lender's prior consent?",
        "Which fees remain payable if the transaction does not proceed or the exit comes earlier?",
      ],
    },
    {
      title: "When the bank route remains preferable",
      paragraphs: [
        "Private debt is not a shortcut to avoid a demanding bank file. Where the asset is stabilised, the cash flows legible and the timetable open, a bank will generally offer more favourable terms and lighter covenants. A bank refusal deserves first to be understood: was it down to the file, its presentation or the transaction itself? The right reflex is to explore both routes in order. Check what a bank can do, identify what is missing, then open the specialist route only for that specific gap. An adviser can help you frame that question.",
      ],
    },
  ],
  keyPoints: [
    "Private debt is justified by a feature of the transaction, never by a bank's refusal alone.",
    "It generally costs more and imposes more restrictive covenants than bank credit.",
    "These lenders analyse the exit first, then the security, then the borrower and the consistency of the file.",
    "Read the financial covenants, the prepayment terms and the information undertakings before comparing costs.",
    "Where the asset is stabilised and the timetable open, the bank route generally remains preferable.",
  ],
  relatedExpertises: ["privateDebt", "complex"],
  relatedGuides: ["bridgeBasics", "refinancingSignals"],
};
