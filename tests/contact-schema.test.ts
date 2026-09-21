import { describe, expect, it } from "vitest";
import {
  contactRequestSchema,
  validateStep,
  LIMITS,
  toFieldErrors,
  stepOneSchema,
  envelopeErrorCode,
  sanitizeFieldErrors,
} from "@/lib/contact/schema";

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
