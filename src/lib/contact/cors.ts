/**
 * Origines autorisées à appeler l'API depuis un autre domaine : uniquement
 * lorsque le site est hébergé en statique ailleurs que l'instance Node
 * (CONTACT_ALLOWED_ORIGINS, séparées par des virgules). Par défaut, aucune.
 */
export function allowedOrigins(env: string | undefined = process.env.CONTACT_ALLOWED_ORIGINS): string[] {
  return (env ?? "")
    .split(",")
    .map((o) => o.trim().replace(/\/$/, ""))
    .filter((o) => /^https?:\/\/[^\s/]+$/.test(o));
}

/** Vrai si l'origine (en-tête Origin) figure dans la liste autorisée. */
export function isAllowedOrigin(origin: string | null, origins = allowedOrigins()): boolean {
  return Boolean(origin) && origins.includes((origin as string).replace(/\/$/, ""));
}

/** En-têtes CORS pour une origine autorisée (sans cookies ni identifiants). */
export function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Access-Control-Max-Age": "600",
    Vary: "Origin",
  };
}
