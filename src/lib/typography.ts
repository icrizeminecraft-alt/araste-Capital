/**
 * Typographie française : espaces insécables devant la ponctuation haute
 * et à l'intérieur des guillemets. Appliquée aux dictionnaires FR au chargement,
 * afin que la rédaction reste lisible dans le code source.
 */
const NNBSP = " "; // espace fine insécable
const NBSP = " ";

export function frenchTypography(input: string): string {
  return (
    input
      // « texte » → « texte »
      .replace(/«\s*/g, `«${NBSP}`)
      .replace(/\s*»/g, `${NBSP}»`)
      // espace fine avant ; ! ? et espace insécable avant :
      .replace(/\s*([;!?])/g, `${NNBSP}$1`)
      .replace(/\s*:(?!\/\/)/g, `${NBSP}:`)
      // unités et abréviations courantes
      .replace(/(\d)\s(M€|€|%|k€)/g, `$1${NBSP}$2`)
  );
}

export function deepMapStrings<T>(value: T, fn: (s: string) => string): T {
  if (typeof value === "string") return fn(value) as unknown as T;
  if (Array.isArray(value)) return value.map((v) => deepMapStrings(v, fn)) as unknown as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = deepMapStrings(v, fn);
    }
    return out as T;
  }
  return value;
}
