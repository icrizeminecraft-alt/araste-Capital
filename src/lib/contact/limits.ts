/**
 * Longueurs maximales des champs des deux formulaires (premier échange et fiche
 * d'opération). Module sans dépendance : importé côté client sans embarquer
 * la bibliothèque de validation du serveur.
 */
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

export const knownCodes: readonly FieldErrorCode[] = ["required", "email", "amount", "tooLong", "tooShort", "phone", "phoneRequired"];

export function isFieldErrorCode(value: unknown): value is FieldErrorCode {
  return typeof value === "string" && (knownCodes as readonly string[]).includes(value);
}
