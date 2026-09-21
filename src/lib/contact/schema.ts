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

export type FieldErrorCode = "required" | "email" | "amount" | "tooLong" | "tooShort" | "phone" | "phoneRequired";

const required = { error: "required" } as const;

/** Champ monoligne : caractères de contrôle (retours à la ligne compris) remplacés par une espace. */
const stripControls = (v: string) => v.replace(/[\p{Cc}]+/gu, " ").trim();

const text = (max: number) =>
  z
    .string(required)
    .transform(stripControls)
    .pipe(z.string().min(1, { error: "required" }).max(max, { error: "tooLong" }));

export const stepOneSchema = z.object({
  financingType: z.enum(financingTypes, { error: "required" }),
  amount: z
    .string(required)
    .transform(stripControls)
    .pipe(
      z
        .string()
        .min(1, { error: "required" })
        .max(LIMITS.amount, { error: "tooLong" })
        .regex(/^\d[\d\s.,'’]*$/u, { error: "amount" }),
    ),
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
    .transform(stripControls)
    .pipe(z.string().min(1, { error: "required" }).max(LIMITS.email, { error: "tooLong" }))
    .pipe(z.email({ error: "email" })),
  phone: z
    .string()
    .transform(stripControls)
    .pipe(z.string().max(LIMITS.phone, { error: "tooLong" }))
    .refine((v) => v === "" || /^\+?[\d\s().-]{6,}$/.test(v), { error: "phone" }),
  channel: z.enum(channels, { error: "required" }),
}).check((ctx) => {
  // Être rappelé suppose un numéro.
  if (ctx.value.channel === "phone" && ctx.value.phone === "") {
    ctx.issues.push({ code: "custom", message: "phoneRequired", path: ["phone"], input: ctx.value.phone });
  }
});

export const contactFieldsSchema = stepOneSchema.extend(stepTwoSchema.shape);

/** Enveloppe envoyée à l'API : champs + protections. */
export const contactRequestSchema = contactFieldsSchema.extend({
  locale: z.enum(["fr", "en"]),
  token: z.string().min(1).max(200),
  idempotencyKey: z.string().regex(/^[a-zA-Z0-9-]{8,64}$/),
  /** Pot de miel : accepté tel quel, traité en silence par la route. */
  website: z.string().max(500).optional(),
});

export type ContactFields = z.infer<typeof contactFieldsSchema>;
export type ContactRequest = z.infer<typeof contactRequestSchema>;
export type FieldErrors = Partial<Record<keyof ContactFields, FieldErrorCode>>;

export const knownCodes: readonly FieldErrorCode[] = ["required", "email", "amount", "tooLong", "tooShort", "phone", "phoneRequired"];

export function isFieldErrorCode(value: unknown): value is FieldErrorCode {
  return typeof value === "string" && (knownCodes as readonly string[]).includes(value);
}

export function isContactField(value: unknown): value is keyof ContactFields {
  return typeof value === "string" && value in emptyContactFields;
}

/** Transforme les problèmes zod en codes d'erreur par champ (champs du formulaire seulement, premier problème). */
export function toFieldErrors(issues: z.core.$ZodIssue[]): FieldErrors {
  const errors: FieldErrors = {};
  for (const issue of issues) {
    const field = issue.path[0];
    if (!isContactField(field) || field in errors) continue;
    errors[field] = isFieldErrorCode(issue.message) ? issue.message : "required";
  }
  return errors;
}

/** Erreurs d'enveloppe (hors champs du formulaire) : jeton ou requête invalide. */
export function envelopeErrorCode(issues: z.core.$ZodIssue[]): "token" | "invalid" | null {
  let code: "token" | "invalid" | null = null;
  for (const issue of issues) {
    const field = issue.path[0];
    if (isContactField(field)) continue;
    if (field === "token") return "token";
    code = "invalid";
  }
  return code;
}

/** Nettoie les erreurs renvoyées par le serveur avant affichage. */
export function sanitizeFieldErrors(input: unknown): FieldErrors {
  const out: FieldErrors = {};
  if (!input || typeof input !== "object") return out;
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (isContactField(key) && isFieldErrorCode(value)) out[key] = value;
  }
  return out;
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
