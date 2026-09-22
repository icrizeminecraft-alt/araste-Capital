import { z } from "zod";
import { expertiseKeys } from "@/config/routes";

/**
 * Schéma partagé client / serveur de la fiche d'opération.
 * Les messages sont des codes, traduits par le dictionnaire de la langue.
 * Quatre étapes : l'opération, l'actif, la structure et la sortie, vous.
 */
export const financingTypes = [...expertiseKeys, "other"] as const;
export const purposes = ["acquisition", "refinancing", "development", "liquidity", "other"] as const;
export const currencies = ["EUR", "GBP", "USD", "CHF", "AED"] as const;
export const timelines = ["under-1m", "1-3m", "3-6m", "over-6m", "undefined"] as const;
export const assetTypes = ["residential", "commercial", "hotel", "mixed", "land", "portfolio", "business", "other"] as const;
export const valueBases = ["appraisal", "estimate", "price", "none"] as const;
export const assetStatuses = ["stabilised", "works", "development", "vacant", "other"] as const;
export const borrowerTypes = ["company", "spv", "holding", "fund", "professional", "other"] as const;
export const exitTypes = ["sale", "refinancing", "receipt", "partner", "amortisation", "other"] as const;
export const roles = ["borrower", "introducer", "adviser", "other"] as const;
export const channels = ["email", "phone"] as const;

export const LIMITS = {
  amount: 20,
  short: 80,
  country: 80,
  descriptionMin: 20,
  description: 1500,
  medium: 600,
  name: 120,
  company: 160,
  email: 254,
  phone: 40,
  body: 24 * 1024,
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

const optionalText = (max: number) =>
  z
    .string()
    .optional()
    .transform((v) => stripControls(v ?? ""))
    .pipe(z.string().max(max, { error: "tooLong" }));

const optionalNumeric = (max: number) =>
  optionalText(max).refine((v) => v === "" || /^\d[\d\s.,'’]*$/u.test(v), { error: "amount" });

const optionalMultiline = (max: number) =>
  z
    .string()
    .optional()
    .transform((v) => (v ?? "").replace(/[^\P{Cc}\n]+/gu, " ").trim())
    .pipe(z.string().max(max, { error: "tooLong" }));

const optionalEnum = <T extends readonly [string, ...string[]]>(values: T) =>
  z
    .string()
    .optional()
    .transform((v) => v ?? "")
    .pipe(z.union([z.literal(""), z.enum(values)]));

export const stepOneSchema = z.object({
  financingType: z.enum(financingTypes, { error: "required" }),
  purpose: z.enum(purposes, { error: "required" }),
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
  assetType: z.enum(assetTypes, { error: "required" }),
  assetLocation: text(LIMITS.short),
  assetValue: optionalNumeric(LIMITS.amount),
  valueBasis: optionalEnum(valueBases),
  annualIncome: optionalNumeric(LIMITS.amount),
  assetStatus: optionalEnum(assetStatuses),
});

export const stepThreeSchema = z.object({
  borrowerType: z.enum(borrowerTypes, { error: "required" }),
  borrowerCountry: text(LIMITS.country),
  equity: optionalNumeric(LIMITS.amount),
  existingDebt: optionalNumeric(LIMITS.amount),
  existingDebtMaturity: optionalText(LIMITS.short),
  securityOffered: optionalMultiline(LIMITS.medium),
  exitType: z.enum(exitTypes, { error: "required" }),
  exitTiming: optionalText(LIMITS.short),
});

export const stepFourSchema = z
  .object({
    role: z.enum(roles, { error: "required" }),
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
    notes: optionalMultiline(LIMITS.medium),
  })
  .check((ctx) => {
    // Être rappelé suppose un numéro.
    if (ctx.value.channel === "phone" && ctx.value.phone === "") {
      ctx.issues.push({ code: "custom", message: "phoneRequired", path: ["phone"], input: ctx.value.phone });
    }
  });

export const stepSchemas = { 1: stepOneSchema, 2: stepTwoSchema, 3: stepThreeSchema, 4: stepFourSchema } as const;
export type StepNumber = keyof typeof stepSchemas;

export const contactFieldsSchema = stepOneSchema.extend(stepTwoSchema.shape).extend(stepThreeSchema.shape).extend(stepFourSchema.shape);

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

export function validateStep(step: StepNumber, values: Record<string, string>): FieldErrors {
  const result = stepSchemas[step].safeParse(values);
  return result.success ? {} : toFieldErrors(result.error.issues);
}

export const stepFields: Record<StepNumber, (keyof ContactFields)[]> = {
  1: ["financingType", "purpose", "amount", "currency", "country", "timeline", "description"],
  2: ["assetType", "assetLocation", "assetValue", "valueBasis", "annualIncome", "assetStatus"],
  3: ["borrowerType", "borrowerCountry", "equity", "existingDebt", "existingDebtMaturity", "securityOffered", "exitType", "exitTiming"],
  4: ["role", "name", "company", "email", "phone", "channel", "notes"],
};

export const emptyContactFields: Record<keyof ContactFields, string> = {
  financingType: "",
  purpose: "",
  amount: "",
  currency: "EUR",
  country: "",
  timeline: "",
  description: "",
  assetType: "",
  assetLocation: "",
  assetValue: "",
  valueBasis: "",
  annualIncome: "",
  assetStatus: "",
  borrowerType: "",
  borrowerCountry: "",
  equity: "",
  existingDebt: "",
  existingDebtMaturity: "",
  securityOffered: "",
  exitType: "",
  exitTiming: "",
  role: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  channel: "email",
  notes: "",
};
