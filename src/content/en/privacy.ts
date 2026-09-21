import type { LegalContent } from "@/content/types";

/**
 * Privacy policy — DRAFT TO BE VALIDATED.
 * Reflects the actual implementation of the site (no trackers, form without
 * browser storage). To be reviewed by counsel before publication.
 */
export const privacy: LegalContent = {
  meta: {
    title: "Privacy policy",
    description:
      "How ARASTE CAPITAL handles the information submitted through its website: data collected, purposes, retention, rights.",
  },
  eyebrow: "Information",
  title: "Privacy policy",
  lead: "This policy describes the information the site collects, how it is used and your rights. It reflects the actual operation of the site as delivered; items marked “to be completed” must be filled in before publication.",
  pendingLabel: "To be completed before publication",
  updated: "Last updated: to be set at publication.",
  sections: [
    {
      title: "Data controller",
      paragraphs: ["The data controller is ARASTE CAPITAL LTD (corporate name to be confirmed)."],
      pending: ["Identity and contact details of the data controller", "Contact for exercising your rights"],
    },
    {
      title: "What the site does not collect",
      paragraphs: [
        "The site loads no advertising tracker, no third-party analytics tool and no external script. It sets no tracking cookie. No data entered in the form is stored in your browser, in the page address or in any analytics tool.",
      ],
    },
    {
      title: "Contact form",
      paragraphs: [
        "When you present a transaction, you provide us with the details of the need: the type of financing, an amount and a currency, the country of the transaction, an intended timeframe and a brief description. You also provide your name, your company, your email address, an optional telephone number and your preferred contact channel.",
        "This information is used solely to review your request and respond to it. It is not used for marketing purposes and is not sold or disclosed to third parties, other than the service provider that delivers your request to us (identified below).",
        "The form asks for no identity document, bank statement or financial document. A limit on the number of requests per period is applied to prevent automated submissions. It relies on a temporary technical fingerprint of the connection; the application itself does not store the IP address in clear text.",
      ],
    },
    {
      title: "Transmission and retention",
      paragraphs: [
        "Requests are transmitted to the firm by the messaging provider identified below, then handled by the people in charge of cases. When no provider is configured, the form says so and nothing is forwarded or kept.",
      ],
      pending: [
        "Messaging or routing provider for requests",
        "Retention period for contact requests",
        "Hosting provider and server location",
      ],
    },
    {
      title: "Legal basis",
      paragraphs: [
        "Processing is based on pre-contractual steps taken at your request and on the firm's legitimate interest in responding to the professional enquiries addressed to it.",
      ],
      pending: ["Applicable framework depending on the jurisdiction (GDPR, UK GDPR or other) and review by counsel"],
    },
    {
      title: "Your rights",
      paragraphs: [
        "You may request access to, rectification or erasure of information concerning you, object to its processing or request its restriction, by writing to the contact indicated in the “Data controller” section. You may also lodge a complaint with the competent supervisory authority.",
      ],
      pending: ["Competent supervisory authority depending on the jurisdiction"],
    },
    {
      title: "Technical logs",
      paragraphs: [
        "The application does not write the content of contact requests to its logs. The server and its hosting provider may record limited technical logs (for example response code, timestamp and connection data) required for the security and proper operation of the site, under their own terms.",
      ],
      pending: ["Scope and retention of the hosting provider's access logs"],
    },
  ],
};
