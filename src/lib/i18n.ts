export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
};

/** Code BCP 47 pour l'attribut lang et Open Graph. */
export const localeTags: Record<Locale, string> = {
  fr: "fr-FR",
  en: "en-GB",
};
