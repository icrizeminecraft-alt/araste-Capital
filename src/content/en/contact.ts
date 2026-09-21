import type { ContactContent } from "@/content/types";

export const contact: ContactContent = {
  meta: {
    title: "Present a transaction",
    description:
      "Share the main elements of your professional financing need with ARASTE CAPITAL: nature, amount, country, timing. A first conversation, without commitment.",
  },
  eyebrow: "Contact",
  title: "Let's talk about your next transaction.",
  lead: "A few elements are enough for a first conversation. You may stay at a general level; details will follow, if we decide together to go further.",
  aside: {
    title: "What helps us",
    items: [
      "The nature of the financing sought.",
      "The order of magnitude and the currency.",
      "The country of the transaction and the intended timing.",
      "A brief description: the asset, the structure, the expected exit.",
    ],
    confidentiality:
      "This form asks for no identity document, bank statement or financial document. Such elements will only be exchanged, where relevant, after a first contact and through an agreed channel.",
    detailsTitle: "Reach us directly",
    detailsPending: "Direct contact details to be confirmed before publication.",
  },
  form: {
    stepLabel: "Step {current} of {total}",
    steps: [
      {
        title: "The transaction",
        description: "The outline of the need.",
      },
      {
        title: "Your details",
        description: "So that we can come back to you.",
      },
    ],
    fields: {
      financingType: {
        label: "Type of financing",
        placeholder: "Select",
        other: "Other / to be specified",
      },
      amount: {
        label: "Amount sought",
        hint: "Order of magnitude, in figures.",
      },
      currency: { label: "Currency" },
      country: {
        label: "Country of the transaction",
        hint: "Country where the asset or the borrowing entity is located.",
      },
      timeline: {
        label: "Intended timing",
        options: [
          { value: "under-1m", label: "Less than one month" },
          { value: "1-3m", label: "One to three months" },
          { value: "3-6m", label: "Three to six months" },
          { value: "over-6m", label: "More than six months" },
          { value: "undefined", label: "Not yet defined" },
        ],
      },
      description: {
        label: "Brief description",
        hint: "The asset or the business, the structure, the intended exit. A few lines are enough (1,500 characters maximum).",
      },
      name: { label: "Full name" },
      company: { label: "Company or entity" },
      email: { label: "Email address" },
      phone: {
        label: "Telephone",
        hint: "With the international dialling code.",
      },
      channel: {
        label: "Preferred contact channel",
        options: [
          { value: "email", label: "Email" },
          { value: "phone", label: "Telephone" },
        ],
      },
    },
    optional: "optional",
    required: "All fields are required unless marked otherwise.",
    next: "Continue",
    back: "Back",
    submit: "Send the request",
    submitting: "Sending",
    privacyNotice:
      "The information you provide is used solely to respond to your request. It is neither stored in your browser nor used for marketing purposes.",
    privacyLink: "Privacy policy",
    errors: {
      required: "This field is required.",
      email: "Please enter a valid email address.",
      amount: "Please enter an amount in figures.",
      tooLong: "This text exceeds the permitted length.",
      tooShort: "Please tell us a little more about your request.",
      phone: "Please enter a valid telephone number.",
      formInvalid: "Some fields need your attention.",
      network: "The request could not be sent. Check your connection and try again.",
      rateLimited: "Several requests were sent recently. Please try again in a few minutes.",
      server: "An error occurred while sending. No message was transmitted; please try again later.",
      duplicate: "This request has already been sent.",
      token: "The form session has expired. Reload the page and try again.",
    },
    result: {
      sentTitle: "Your request has been sent.",
      sentBody: "We will come back to you as soon as possible through the channel you indicated.",
      demoTitle: "Demonstration mode: no message was sent.",
      demoBody: "The form works, but no sending provider is configured on this deployment. Your entry was neither transmitted nor stored.",
      errorTitle: "The request could not be sent.",
      newRequest: "Present another transaction",
    },
  },
};
