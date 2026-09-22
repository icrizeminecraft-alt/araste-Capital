import type { ExpertiseContent } from "@/content/types";

export const privateDebt: ExpertiseContent = {
  meta: {
    title: "Private debt and special situations",
    description:
      "Sourcing financing from debt funds and private lenders, on the borrower side, where a transaction calls for an approach other than standard bank credit.",
  },
  title: "Private debt and special situations",
  shortTitle: "Private debt",
  eyebrow: "Specialist lenders",
  summary:
    "Sourcing financing from debt funds, private lenders and institutional platforms, for transactions that standard bank credit does not cover, or does not cover on acceptable terms.",
  lead: "Debt funds, private lenders, institutional platforms: alongside bank credit, specialist lenders review transactions that standard bank criteria struggle to accommodate. In such cases, the timetable, the structure, the nature of the asset or a transitional situation calls for case-by-case analysis. We source this financing on your behalf, as the borrower's adviser: we do not lend, we represent no lender and we recommend this segment only on precise criteria, never by default.",
  sections: {
    needs: {
      title: "Transactions that call for a specialist lender",
      intro: "Turning to a specialist lender is justified by a specific feature of the transaction, not merely by a bank's refusal.",
      items: [
        "Financing a transaction whose timetable is incompatible with a bank's credit process.",
        "Placing debt at the level of a holding company or an investment vehicle, outside the usual banking remit.",
        "Financing an asset in transition, before stabilisation: repositioning, change of use, lease restructuring.",
        "Supplementing bank financing with a subordinated tranche to complete the funding package.",
        "Getting through a special situation: a shareholder's departure, a business transfer, a reorganisation or a period of irregular results.",
        "Obtaining a repayment schedule matched to the transaction's actual cash flows rather than to standard amortisation.",
      ],
    },
    approach: {
      title: "How we conduct this search",
      paragraphs: [
        "We first check that the transaction genuinely belongs in this segment. Private debt is not a default solution: it costs more than bank credit and comes with more demanding documentation. It is justified where bank financing is not available on acceptable terms, or where an additional tranche is needed. We tell you frankly if a bank route remains preferable and, if not, what turning to a specialist lender will mean for you.",
        "We then identify the lenders whose remit matches the transaction. Debt funds, private lenders and institutional platforms do not review the same assets, the same geographies, the same rankings or the same situations. Each decides according to its own criteria, most of which are known in advance. Presenting a file to the wrong lender wastes time and can weaken the rest of the search. We therefore select a small number of relevant counterparts, set out the transaction to them consistently and organise the discussions so that they progress in parallel.",
        "The file is built in the format these lenders expect: cash-flow forecast, assumptions and sensitivities, proposed security, exit scenario and fallback options. When a proposal arrives, we read each term with you: debt structure, security, financial covenants, prepayment terms, information undertakings, fees. The headline cost is only one factor; it is often the covenants and the exit provisions that determine whether the financing genuinely suits the transaction. The documentation is a matter for your legal advisers; we follow the negotiation alongside them through to signing, where the transaction proceeds.",
      ],
    },
    analysis: {
      title: "The elements to prepare",
      intro: "Specialist lenders expect a complete file from the first presentation; these elements form its basis.",
      items: [
        "Description of the transaction, the borrowing structure and the use of proceeds.",
        "Reasons why standard bank financing is not, or is no longer, an option.",
        "Cash-flow forecast or business plan, with the underlying assumptions.",
        "Assets and security available, existing debt and the ranking of security already granted.",
        "Intended exit scenario: sale, refinancing, stabilisation of the asset or an identified event.",
        "Accounts of the borrower and the guarantors, with any necessary explanation of the recent period.",
        "Proposals already received or refusals already encountered, with the reasons where known.",
      ],
    },
    limits: {
      title: "What private debt is not",
      paragraphs: [
        "Private debt is not a shortcut: it is a different kind of financing. Specialist lenders review files rigorously, decline those that fall outside their remit and require documentation that is often more detailed than a bank's. Their cost is higher and the covenants they impose more restrictive. A transaction without a credible exit or consistent security will not find a lender in this segment any more than elsewhere.",
        "We do not lend, we neither manage nor market any fund, and we act on the borrower's side only. Our role is to source, present and negotiate, never to decide on the lender's behalf. We state neither terms nor timing before the review, and we do not promise that financing will be obtained. Our commitment concerns the soundness of the route recommended, the quality of the file and the careful reading of the proposals received.",
      ],
    },
  },
  related: ["complex", "bridge", "refinancing"],
  faq: [
    {
      question: "What is a specialist lender?",
      answer:
        "A debt fund, a private lender or an institutional platform that finances transactions according to its own criteria, outside standard bank criteria. These lenders lend on a senior or subordinated basis, or alongside existing debt. Each has a precise remit: asset types, geographies, structures, situations. Their analysis focuses above all on the exit and the security.",
    },
    {
      question: "Is private debt reserved for files that banks have declined?",
      answer:
        "No. A bank's refusal is neither necessary nor sufficient. This segment is justified by a feature of the transaction: a tight timetable, a particular ownership structure, an asset in transition or an additional tranche to be found. Many borrowers use it while a bank finances most of their activity elsewhere. Conversely, a file declined on substantive grounds will rarely find a taker here.",
    },
    {
      question: "What documentation should you expect?",
      answer:
        "A complete file from the first presentation: description of the transaction and the borrowing structure, cash-flow forecast with its assumptions. Added to this are the security available and existing debt, the exit scenario with its fallback options, and recent accounts. The contractual documentation is then more detailed than a bank agreement: financial covenants, information undertakings, events of default. It is a matter for your legal advisers, whom we support during the negotiation.",
    },
    {
      question: "Can bank debt and private debt be combined?",
      answer:
        "Yes: it is a common configuration. A bank finances the main portion and a specialist lender provides an additional tranche, often subordinated. This combination requires both lenders to agree to coexist, an agreement to settle the order of security and repayments, and the transaction's cash flows to support the whole. It is prepared from the outset, not once the bank debt has been signed.",
    },
  ],
  cta: {
    title: "A need that bank credit does not cover?",
    body: "Describe the transaction to us, what sets it apart from a conventional bank file and the intended exit. We will tell you whether this segment seems relevant to us and what it would involve for you.",
    button: "Present a transaction",
  },
};
