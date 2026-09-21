import type { LegalContent } from "@/content/types";

/**
 * Legal notice — DRAFT TO BE VALIDATED.
 * Items marked as pending are fields to complete, displayed as such.
 * This text is not legal advice and must be reviewed by counsel.
 */
export const legal: LegalContent = {
  meta: {
    title: "Legal notice",
    description: "Legal information relating to the website of ARASTE CAPITAL LTD.",
  },
  eyebrow: "Information",
  title: "Legal notice",
  lead: "This page identifies the publisher of the site, its hosting provider, the rights attached to its contents and their scope. Items marked as “to be completed” must be filled in and validated before any publication.",
  pendingLabel: "To be completed before publication",
  updated: "Last updated: to be set at publication.",
  sections: [
    {
      title: "Publisher",
      paragraphs: [
        "This site is published by ARASTE CAPITAL LTD (corporate name to be confirmed), hereinafter “the firm”.",
      ],
      pending: [
        "Legal form and country of incorporation",
        "Registration number",
        "Registered office address",
        "Contact email address and telephone number",
        "Name of the person responsible for publication",
      ],
    },
    {
      title: "Activity and status",
      paragraphs: [
        "The firm advises on and arranges professional financing on behalf of professional borrowers. It does not lend, does not manage assets on behalf of third parties, does not offer any investment to the public and does not deal with private individuals.",
        "The scope of services, the applicable intermediary status, the countries served and any mandatory statements are set out below.",
      ],
      pending: [
        "Applicable regulatory status, authorisation or registration (if any)",
        "Countries in which services are offered",
        "Remuneration arrangements and associated mandatory statements",
      ],
    },
    {
      title: "Hosting",
      paragraphs: ["The site is hosted by the provider identified below."],
      pending: ["Name, corporate name and address of the hosting provider"],
    },
    {
      title: "Intellectual property",
      paragraphs: [
        "The texts, the typographic wordmark, the monogram and the visual compositions on this site are the property of the firm or are used under licence. Any reproduction or reuse without prior consent is prohibited.",
        "The Cormorant and DM Sans typefaces are used under the SIL Open Font License 1.1.",
      ],
      pending: ["Ownership of the rights in the wordmark, monogram and visual compositions (assignment to be confirmed); possible trade mark filing"],
    },
    {
      title: "Nature of the contents",
      paragraphs: [
        "The contents of this site are informative and present the firm's activity. They constitute neither an offer of financing, nor legal, tax or investment advice, nor any guarantee that financing will be obtained. The situations described are illustrative and do not relate to completed transactions.",
      ],
    },
    {
      title: "Personal data",
      paragraphs: [
        "The processing of data submitted through the contact form is described in the privacy policy.",
      ],
    },
  ],
};
