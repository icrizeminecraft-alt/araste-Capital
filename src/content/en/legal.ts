import type { LegalContent } from "@/content/types";
import { photoCredits } from "@/config/images";

/**
 * Legal notice.
 * Only established items are published; those still to be provided
 * (registration number, share capital, registered office, contact details,
 * regulatory status) are listed in docs/AVANT-PUBLICATION.md and will be
 * added once communicated. This text is not legal advice and must be
 * reviewed by counsel.
 */
export const legal: LegalContent = {
  meta: {
    title: "Legal notice",
    description: "Legal information relating to the website of ARASTE CAPITAL.",
  },
  eyebrow: "Information",
  title: "Legal notice",
  lead: "This page identifies the publisher of the site, its hosting provider, the rights attached to its contents and their scope.",
  updated: "Last updated: October 2026.",
  sections: [
    {
      title: "Publisher",
      paragraphs: [
        "This site is published by ARASTE CAPITAL, a French single-shareholder simplified joint-stock company (SASU) registered with the Grenoble Trade and Companies Register, hereinafter “the firm”. Its President, Lucas Araste, is the publishing director.",
        "The firm can be reached through the form on the contact page.",
      ],
    },
    {
      title: "Activity and scope",
      paragraphs: [
        "The firm advises on and arranges real estate finance and complex transactions on behalf of professional borrowers: entrepreneurs, investors and family holding structures. It does not lend, does not manage assets on behalf of third parties, does not offer any investment to the public and does not deal with private individuals.",
        "The firm acts on transactions located in France, Monaco, Switzerland, the United Kingdom, Andorra and the United Arab Emirates.",
        "The firm's remuneration is presented to the client before any engagement and agreed with them in writing, ahead of any search for financing.",
      ],
    },
    {
      title: "Hosting",
      paragraphs: ["The site is hosted by Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Cyprus."],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        "The texts, the typographic wordmark, the monogram and the visual compositions on this site are the property of the firm or are used under licence. Any reproduction or reuse without prior consent is prohibited.",
        "The Newsreader and Public Sans typefaces are used under the SIL Open Font License 1.1.",
        `The photographs are illustrative images published under the Unsplash License (free use, including commercial, with no attribution required); as a courtesy, their authors: ${photoCredits.join("; ")}. None depicts a transaction advised by the firm or its premises.`,
      ],
    },
    {
      title: "Nature of the contents",
      paragraphs: [
        "The contents of this site are informative and present the firm's activity. They constitute neither an offer of financing, nor legal, tax or investment advice, nor any guarantee that financing will be obtained. The situations described are illustrative and do not relate to completed transactions.",
      ],
    },
    {
      title: "Personal data",
      paragraphs: ["The processing of data submitted through the site's forms is described in the privacy policy."],
    },
  ],
};
