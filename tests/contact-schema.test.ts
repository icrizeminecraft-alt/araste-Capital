import { describe, expect, it } from "vitest";
import { contactRequestSchema, validateStep, LIMITS, toFieldErrors, stepOneSchema } from "@/lib/contact/schema";

const validStepOne = {
  financingType: "bridge",
  amount: "12 000 000",
  currency: "EUR",
  country: "France",
  timeline: "1-3m",
  description: "Acquisition d'un immeuble de bureaux dans l'attente d'un refinancement engagé.",
};

const validStepTwo = {
  name: "Test Fictif",
  company: "Société Exemple",
  email: "test@example.invalid",
  phone: "",
  channel: "email",
};

describe("validateStep", () => {
  it("accepte une étape 1 valide", () => {
    expect(validateStep(1, validStepOne)).toEqual({});
  });
  it("signale les champs requis avec des codes", () => {
    const errors = validateStep(1, { ...validStepOne, financingType: "", country: "  ", description: "" });
    expect(errors.financingType).toBe("required");
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
  it("valide l'étape 2", () => {
    expect(validateStep(2, validStepTwo)).toEqual({});
    expect(validateStep(2, { ...validStepTwo, email: "pas-un-courriel" }).email).toBe("email");
    expect(validateStep(2, { ...validStepTwo, phone: "abc" }).phone).toBe("phone");
    expect(validateStep(2, { ...validStepTwo, phone: "+33 1 23 45 67 89" })).toEqual({});
  });
});

describe("contactRequestSchema", () => {
  const envelope = { ...validStepOne, ...validStepTwo, locale: "fr", token: "1.a", idempotencyKey: "abcdefgh-1234", website: "" };
  it("accepte une enveloppe complète", () => {
    expect(contactRequestSchema.safeParse(envelope).success).toBe(true);
  });
  it("refuse un pot de miel rempli", () => {
    expect(contactRequestSchema.safeParse({ ...envelope, website: "http://spam" }).success).toBe(false);
  });
  it("refuse une clé d'idempotence mal formée", () => {
    expect(contactRequestSchema.safeParse({ ...envelope, idempotencyKey: "x" }).success).toBe(false);
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
