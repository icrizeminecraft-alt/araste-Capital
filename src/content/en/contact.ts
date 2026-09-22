import type { ContactContent } from "@/content/types";

export const contact: ContactContent = {
  meta: {
    title: "Present a transaction",
    description:
      "Share the main details of your professional financing need with ARASTE CAPITAL: type, amount, country, timing. A first conversation to understand where the need sits.",
  },
  eyebrow: "Contact",
  title: "Let's talk about your next transaction.",
  lead: "A few details are enough for a first conversation. You may keep it general; specifics can follow if we decide together to go further.",
  aside: {
    title: "What helps us",
    items: [
      "The type of financing sought.",
      "The order of magnitude and the currency.",
      "The country of the transaction and the intended timeframe.",
      "A brief description: the asset, the structure, the expected exit.",
    ],
    confidentiality:
      "This form asks for no identity document, bank statement or financial document. Such elements will only be exchanged, where relevant, after a first contact and through an agreed channel.",
    detailsTitle: "Reach us directly",
    detailsPending: "Direct contact details to be confirmed before publication.",
  },
  faq: {
    title: "Frequently asked questions",
    lead: "What we are asked most often before a first conversation.",
    items: [
      {
        question: "When should you contact us?",
        answer: "As early as possible, as soon as a transaction takes shape: an acquisition to secure, a maturity approaching, a project to finance in stages. A first conversation allows us to understand where the need sits, identify the relevant documents and say whether we can help you, before the timetable tightens.",
      },
      {
        question: "What happens after the form is sent?",
        answer: "We review the details provided and come back to you through the channel you indicated. If the transaction falls within our scope, we arrange a conversation to understand it in detail and specify the documents to gather. Nothing is committed at this stage.",
      },
      {
        question: "What information should you prepare for a first conversation?",
        answer: "Orders of magnitude are enough: the type of need, the amount envisaged, the country of the transaction and the intended timeframe. Add a description of the asset or business, the structure and the intended exit. Detailed documents come later, if we decide together to go further.",
      },
      {
        question: "Do you work with private individuals?",
        answer: "No. We act for professional borrowers: companies, property companies, holding companies, investment vehicles, developers and professional owners. We do not deal with consumer credit or the financing of a main residence.",
      },
      {
        question: "How is the firm remunerated?",
        answer: "Remuneration arrangements are presented before any commitment and set out in the legal notice. They are agreed with you in writing, ahead of the search for financing.",
      },
      {
        question: "Do you guarantee that financing will be obtained?",
        answer: "No, and nobody seriously can. The decision always rests with the lender. Our commitment concerns the quality of the analysis, the clarity of the file, the relevance of the routes explored and the candour of our feedback, including when it is negative.",
      },
      {
        question: "How is the information you provide handled?",
        answer: "It is used solely to review your request. It is neither used for marketing purposes nor sold or transferred to third parties. It is shared only with the lenders we consult for your transaction, with your agreement. The details are set out in the privacy policy.",
      },
    ],
  },
  form: {
    stepLabel: "Step {current} of {total}",
    stepsLabel: "Form steps",
    noscript: "This form requires JavaScript. If you cannot enable it, please use the contact details shown on this page.",
    honeypotLabel: "Leave this field empty",
    errorSummary: "{count} field(s) need your attention.",
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
        other: "Other (please specify in the description)",
      },
      amount: {
        label: "Amount sought",
        hint: "Order of magnitude, in figures only, without symbols or abbreviations (e.g. 3 500 000).",
      },
      currency: { label: "Currency" },
      country: {
        label: "Country of the transaction",
        hint: "Country where the asset is located; otherwise, country of the borrowing entity.",
      },
      timeline: {
        label: "Intended timeframe for completion",
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
        hint: "The asset or the business, the structure, the intended exit. A few lines are enough (20 to 1,500 characters).",
      },
      name: { label: "Full name" },
      company: { label: "Company or entity" },
      email: { label: "Email address" },
      phone: {
        label: "Telephone",
        hint: "With the international dialling code. Required if you prefer to be called back.",
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
      amount: "Enter the amount in figures only, without symbols or letters (e.g. 3 500 000).",
      tooLong: "This text exceeds the permitted length; please shorten it.",
      tooShort: "A few more words are needed (20 characters minimum).",
      phone: "Please enter a valid telephone number.",
      phoneRequired: "Enter a number so that we can call you back.",
      formInvalid: "Some fields need your attention.",
      tooLarge: "The request is too large. Please shorten the description.",
      network: "The request could not be sent. Check your connection and try again.",
      rateLimited: "Several requests were sent recently. Please try again in a few minutes.",
      server: "An error occurred while sending. We cannot confirm that your request was received; please try again later.",
      duplicate: "An identical request has just been received. If you did not see a confirmation, reload the page before trying again.",
      token: "The form could not be verified. Wait a moment and try again, or reload the page.",
    },
    result: {
      sentTitle: "Your request has been sent.",
      sentBody: "We will come back to you as soon as possible through the channel you indicated.",
      demoTitle: "Demonstration mode: no message was sent.",
      demoBody: "The form works, but no sending provider is configured on this deployment. Your entry has not been forwarded to anyone and has not been kept.",
      demoBanner: "Demonstration mode: messages are not sent from this deployment.",
      newRequest: "Present another transaction",
    },
  },
};
