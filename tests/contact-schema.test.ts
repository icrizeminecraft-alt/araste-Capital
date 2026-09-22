import { describe, expect, it } from "vitest";
import {
  contactRequestSchema,
  validateStep,
  LIMITS,
  toFieldErrors,
  stepOneSchema,
  stepFields,
  emptyContactFields,
  envelopeErrorCode,
  sanitizeFieldErrors,
} from "@/lib/contact/schema";

const validStepOne = {
  financingType: "bridge",
  purpose: "acquisition",
  amount: "12 000 000",
  currency: "EUR",
  country: "France",
  timeline: "1-3m",
  description: "Acquisition d'un immeuble de bureaux dans l'attente d'un refinancement engagé.",
};

const validStepTwo = {
  assetType: "commercial",
  assetLocation: "Lyon",
  assetValue: "",
  valueBasis: "",
  annualIncome: "",
  assetStatus: "",
};

const validStepThree = {
  borrowerType: "spv",
  borrowerCountry: "France",
  equity: "",
  existingDebt: "",
  existingDebtMaturity: "",
  securityOffered: "",
  exitType: "refinancing",
  exitTiming: "",
};

const validStepFour = {
  role: "borrower",
  name: "Test Fictif",
  company: "Société Exemple",
  email: "test@example.invalid",
  phone: "",
  channel: "email",
  notes: "",
};

describe("validateStep", () => {
  it("accepte une étape 1 valide", () => {
    expect(validateStep(1, validStepOne)).toEqual({});
  });
  it("signale les champs requis avec des codes", () => {
    const errors = validateStep(1, { ...validStepOne, financingType: "", purpose: "", country: "  ", description: "" });
    expect(errors.financingType).toBe("required");
    expect(errors.purpose).toBe("required");
    expect(errors.country).toBe("required");
    expect(errors.description).toBe("required");
  });
  it("refuse un montant non numérique", () => {
    expect(validateStep(1, { ...validStepOne, amount: "douze millions" }).amount).toBe("amount");
  });
  it("refuse une description trop courte ou trop longue", () => {
    expect(validateStep(1, { ...validStepOne, description: "court" }).description).toBe("tooShort");
    expect(validateStep(1, { ...validStepOne, description: "x".repeat(LIMITS.description + 1) }).description).toBe("tooLong");
  });
  it("valide l'étape 2 : type et localisation requis, montants facultatifs mais numériques", () => {
    expect(validateStep(2, validStepTwo)).toEqual({});
    const errors = validateStep(2, { ...validStepTwo, assetType: "", assetLocation: "" });
    expect(errors.assetType).toBe("required");
    expect(errors.assetLocation).toBe("required");
    expect(validateStep(2, { ...validStepTwo, assetValue: "environ 5M" }).assetValue).toBe("amount");
    expect(validateStep(2, { ...validStepTwo, assetValue: "5 000 000", valueBasis: "appraisal" })).toEqual({});
  });
  it("valide l'étape 3 : emprunteur, pays et sortie requis", () => {
    expect(validateStep(3, validStepThree)).toEqual({});
    const errors = validateStep(3, { ...validStepThree, borrowerType: "", borrowerCountry: "", exitType: "" });
    expect(errors.borrowerType).toBe("required");
    expect(errors.borrowerCountry).toBe("required");
    expect(errors.exitType).toBe("required");
    expect(validateStep(3, { ...validStepThree, existingDebt: "abc" }).existingDebt).toBe("amount");
  });
  it("valide l'étape 4", () => {
    expect(validateStep(4, validStepFour)).toEqual({});
    expect(validateStep(4, { ...validStepFour, role: "" }).role).toBe("required");
    expect(validateStep(4, { ...validStepFour, email: "pas-un-courriel" }).email).toBe("email");
    expect(validateStep(4, { ...validStepFour, phone: "abc" }).phone).toBe("phone");
    expect(validateStep(4, { ...validStepFour, phone: "+33 1 23 45 67 89" })).toEqual({});
    expect(validateStep(4, { ...validStepFour, channel: "phone" }).phone).toBe("phoneRequired");
  });
  it("couvre tous les champs de la fiche, une seule fois", () => {
    const all = Object.values(stepFields).flat();
    expect(new Set(all).size).toBe(all.length);
    expect([...all].sort()).toEqual(Object.keys(emptyContactFields).sort());
  });
});

describe("contactRequestSchema", () => {
  const envelope = { ...validStepOne, ...validStepTwo, ...validStepThree, ...validStepFour, locale: "fr", token: "1.a", idempotencyKey: "abcdefgh-1234", website: "" };
  it("accepte une enveloppe complète", () => {
    expect(contactRequestSchema.safeParse(envelope).success).toBe(true);
  });
  it("accepte un pot de miel rempli (traité en silence par la route)", () => {
    expect(contactRequestSchema.safeParse({ ...envelope, website: "http://spam" }).success).toBe(true);
  });
  it("refuse une clé d'idempotence mal formée", () => {
    expect(contactRequestSchema.safeParse({ ...envelope, idempotencyKey: "x" }).success).toBe(false);
  });
  it("distingue les erreurs d'enveloppe des erreurs de champ", () => {
    const noToken = contactRequestSchema.safeParse({ ...envelope, token: "" });
    expect(noToken.success).toBe(false);
    if (!noToken.success) {
      expect(toFieldErrors(noToken.error.issues)).toEqual({});
      expect(envelopeErrorCode(noToken.error.issues)).toBe("token");
    }
    const badLocale = contactRequestSchema.safeParse({ ...envelope, locale: "de" });
    if (!badLocale.success) expect(envelopeErrorCode(badLocale.error.issues)).toBe("invalid");
  });
  it("neutralise les caractères de contrôle des champs monolignes", () => {
    const result = contactRequestSchema.safeParse({ ...envelope, country: "France\nX-Injected: yes" });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.country).toBe("France X-Injected: yes");
  });
});

describe("sanitizeFieldErrors", () => {
  it("ne garde que les champs et codes connus", () => {
    expect(sanitizeFieldErrors({ email: "email", token: "required", name: "bogus", x: 1 })).toEqual({ email: "email" });
    expect(sanitizeFieldErrors(null)).toEqual({});
  });
});

describe("toFieldErrors", () => {
  it("ne garde que le premier problème par champ", () => {
    const result = stepOneSchema.safeParse({ ...validStepOne, description: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = toFieldErrors(result.error.issues);
      expect(errors.description).toBe("required");
    }
  });
});
