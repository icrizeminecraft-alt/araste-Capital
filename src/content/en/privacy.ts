import type { LegalContent } from "@/content/types";

/**
 * Privacy policy.
 * Reflects the actual implementation of the site (no trackers, forms without
 * browser storage). The dedicated contact for exercising rights will be added
 * once the firm's professional address is communicated
 * (docs/AVANT-PUBLICATION.md). To be reviewed by counsel.
 */
export const privacy: LegalContent = {
  meta: {
    title: "Privacy policy",
    description:
      "How ARASTE CAPITAL handles the information submitted through its website: data collected, purposes, retention, rights.",
  },
  eyebrow: "Information",
  title: "Privacy policy",
  lead: "This policy describes the information the site collects, how it is used and your rights. It reflects the actual operation of the site.",
  updated: "Last updated: October 2026.",
  sections: [
    {
      title: "Data controller",
      paragraphs: [
        "The data controller is ARASTE CAPITAL, a French single-shareholder simplified joint-stock company registered with the Grenoble Trade and Companies Register, represented by its President, Lucas Araste. Any request concerning your data may be addressed to the firm through the form on the contact page.",
      ],
    },
    {
      title: "What the site does not collect",
      paragraphs: [
        "The site loads no advertising tracker, no third-party analytics tool and no external script. It sets no tracking cookie. No data entered in the forms is stored in your browser, in the page address or in any analytics tool.",
      ],
    },
    {
      title: "Contact forms",
      paragraphs: [
        "The first conversation asks for your name, your email address, an optional telephone number and a few lines about your project. The transaction sheet adds two groups of information. On the transaction: the type of financing, an amount and a currency, the country, an intended timeframe and a brief description. On you: your company and your preferred contact channel.",
        "This information is used solely to review your request and respond to it. It is not used for marketing purposes and is not sold or disclosed to third parties, other than the site's hosting provider, whose infrastructure delivers requests to the firm's mailbox.",
        "The forms ask for no identity document, bank statement or financial document. A limit on the number of requests per period is applied to prevent automated submissions. It relies on a temporary technical fingerprint of the connection; the application itself does not store the IP address in clear text.",
      ],
    },
    {
      title: "Transmission and retention",
      paragraphs: [
        "Requests are routed by a relay installed on the site's hosting, then received in the firm's mailbox and handled by the person in charge of cases. When routing is not enabled, the form says so and nothing is transmitted or kept.",
        "Requests are kept for as long as needed to handle them, then for no more than three years after the last exchange, unless a contractual relationship has begun in the meantime.",
      ],
    },
    {
      title: "Legal basis",
      paragraphs: [
        "Processing is governed by the General Data Protection Regulation and the French Data Protection Act. It is based on pre-contractual steps taken at your request and on the firm's legitimate interest in responding to the professional enquiries addressed to it.",
      ],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You may request access to, rectification or erasure of information concerning you, object to its processing or request its restriction, by writing to the firm through the contact page. You may also lodge a complaint with the French supervisory authority, the Commission nationale de l'informatique et des libertés (CNIL).",
      ],
    },
    {
      title: "Technical logs",
      paragraphs: [
        "The application does not write the content of contact requests to its logs. The site's hosting provider, Hostinger International Ltd., may record limited technical logs (for example response code, timestamp and connection data) required for the security and proper operation of the site, under its own terms.",
      ],
    },
  ],
};
