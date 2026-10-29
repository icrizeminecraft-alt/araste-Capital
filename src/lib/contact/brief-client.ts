import { LIMITS, isFieldErrorCode, type FieldErrorCode } from "@/lib/contact/limits";

/**
 * Validation côté navigateur du premier échange, sans bibliothèque : mêmes
 * règles et mêmes codes que `briefFieldsSchema` (serveur), qui reste
 * l'autorité. Ce module est chargé sur l'accueil : il doit rester léger.
 */
export type BriefValues = { name: string; email: string; phone: string; message: string };
export type BriefField = keyof BriefValues;
export type BriefFieldErrors = Partial<Record<BriefField, FieldErrorCode>>;

export const emptyBriefFields: BriefValues = { name: "", email: "", phone: "", message: "" };

export function isBriefField(value: unknown): value is BriefField {
  return typeof value === "string" && value in emptyBriefFields;
}

const stripControls = (v: string) => v.replace(/[\p{Cc}]+/gu, " ").trim();
const stripControlsKeepLines = (v: string) => v.replace(/[^\P{Cc}\n]+/gu, " ").trim();
const EMAIL = /^[^\s@"'<>()[\]\\,;:]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+$/;
const PHONE = /^\+?[\d\s().-]{6,}$/;

/** Valeurs nettoyées et erreurs par champ (premier problème par champ). */
export function validateBrief(values: BriefValues): { data: BriefValues; errors: BriefFieldErrors } {
  const data: BriefValues = {
    name: stripControls(values.name),
    email: stripControls(values.email),
    phone: stripControls(values.phone),
    message: stripControlsKeepLines(values.message),
  };
  const errors: BriefFieldErrors = {};
  if (!data.name) errors.name = "required";
  else if (data.name.length > LIMITS.name) errors.name = "tooLong";
  if (!data.email) errors.email = "required";
  else if (data.email.length > LIMITS.email) errors.email = "tooLong";
  else if (!EMAIL.test(data.email)) errors.email = "email";
  if (data.phone.length > LIMITS.phone) errors.phone = "tooLong";
  else if (data.phone && !PHONE.test(data.phone)) errors.phone = "phone";
  if (!data.message) errors.message = "required";
  else if (data.message.length < LIMITS.descriptionMin) errors.message = "tooShort";
  else if (data.message.length > LIMITS.description) errors.message = "tooLong";
  return { data, errors };
}

/** Erreurs renvoyées par le serveur, filtrées sur les champs et codes connus. */
export function sanitizeBriefFieldErrors(input: unknown): BriefFieldErrors {
  const out: BriefFieldErrors = {};
  if (!input || typeof input !== "object") return out;
  for (const [key, value] of Object.entries(input as Record<string, unknown>)) {
    if (isBriefField(key) && isFieldErrorCode(value)) out[key] = value;
  }
  return out;
}
