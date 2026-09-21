import { z } from "zod";
import { expertiseKeys } from "@/config/routes";

/**
 * Schéma partagé client / serveur du formulaire « Présenter une opération ».
 * Les messages sont des codes, traduits par le dictionnaire de la langue.
 */
export const financingTypes = [...expertiseKeys, "other"] as const;
export const currencies = ["EUR", "GBP", "USD", "CHF"] as const;
export const timelines = ["under-1m", "1-3m", "3-6m", "over-6m", "undefined"] as const;
export const channels = ["email", "phone"] as const;

export const LIMITS = {
  amount: 20,
  country: 80,
  descriptionMin: 20,
  description: 1500,
  name: 120,
  company: 160,
  email: 254,
  phone: 40,
  body: 16 * 1024,
} as const;

export type FieldErrorCode = "required" | "email" | "amount" | "tooLong" | "tooShort" | "phone";

const required = { error: "required" } as const;

const text = (max: number) =>
  z
    .string(required)
    .trim()
    .min(1, { error: "required" })
    .max(max, { error: "tooLong" });

export const stepOneSchema = z.object({
  financingType: z.enum(financingTypes, { error: "required" }),
  amount: z
    .string(required)
    .trim()
    .min(1, { error: "required" })
    .max(LIMITS.amount, { error: "tooLong" })
    .regex(/^\d[\d\s.,'’]*$/u, { error: "amount" }),
  currency: z.enum(currencies, { error: "required" }),
  country: text(LIMITS.country),
  timeline: z.enum(timelines, { error: "required" }),
  description: z
    .string(required)
    .trim()
    .min(1, { error: "required" })
    .min(LIMITS.descriptionMin, { error: "tooShort" })
    .max(LIMITS.description, { error: "tooLong" }),
});

export const stepTwoSchema = z.object({
  name: text(LIMITS.name),
  company: text(LIMITS.company),
  email: z
    .string(required)
    .trim()
    .min(1, { error: "required" })
    .max(LIMITS.email, { error: "tooLong" })
    .pipe(z.email({ error: "email" })),
  phone: z
    .string()
    .trim()
    .max(LIMITS.phone, { error: "tooLong" })
    .refine((v) => v === "" || /^\+?[\d\s().-]{6,}$/.test(v), { error: "phone" }),
  channel: z.enum(channels, { error: "required" }),
});

export const contactFieldsSchema = stepOneSchema.extend(stepTwoSchema.shape);

/** Enveloppe envoyée à l'API : champs + protections. */
export const contactRequestSchema = contactFieldsSchema.extend({
  locale: z.enum(["fr", "en"]),
  token: z.string().min(1).max(200),
  idempotencyKey: z.string().regex(/^[a-zA-Z0-9-]{8,64}$/),
  /** Pot de miel : doit rester vide. */
  website: z.string().max(0).optional(),
});

export type ContactFields = z.infer<typeof contactFieldsSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
export type FieldErrors = Partial<Record<keyof ContactFields, FieldErrorCode>>;

const knownCodes: FieldErrorCode[] = ["required", "email", "amount", "tooLong", "tooShort", "phone"];

/** Transforme les problèmes zod en codes d'erreur par champ (premier problème seulement). */
export function toFieldErrors(issues: z.core.$ZodIssue[]): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of issues) {
    const field = issue.path[0];
    if (typeof field !== "string" || field in errors) continue;
    const code = knownCodes.includes(issue.message as FieldErrorCode)
      ? (issue.message as FieldErrorCode)
      : "required";
    errors[field as keyof ContactFields] = code;
  }
  return errors;
}

export function validateStep(step: 1 | 2, values: Record<string, string>): FieldErrors {
  const schema = step === 1 ? stepOneSchema : stepTwoSchema;
  const result = schema.safeParse(values);
  return result.success ? {} : toFieldErrors(result.error.issues);
}

export const emptyContactFields: Record<keyof ContactFields, string> = {
  financingType: "",
  amount: "",
  currency: "EUR",
  country: "",
  timeline: "",
  description: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  channel: "email",
};
