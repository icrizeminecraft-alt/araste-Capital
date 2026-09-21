/**
 * Contrôles de configuration au démarrage (production, exécution Node).
 * Les replis restent silencieux pour l'utilisateur ; ils sont ici rendus
 * visibles dans les journaux du serveur.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.NODE_ENV !== "production") return;
  const { providerStatus } = await import("@/lib/contact/providers");
  const warnings: string[] = [];

  const secret = process.env.CONTACT_FORM_SECRET ?? "";
  if (secret.length < 32) {
    warnings.push(
      "CONTACT_FORM_SECRET absent ou trop court (32 caractères minimum) : un secret éphémère par processus est utilisé ; sur un hébergement à plusieurs instances, les jetons du formulaire seront rejetés aléatoirement.",
    );
  }
  const status = providerStatus();
  if (status.problem) {
    warnings.push(`CONTACT_PROVIDER=${status.requested} ignoré (${status.problem}) : le formulaire fonctionne en mode démonstration, aucun message n'est envoyé.`);
  }
  if (process.env.SITE_INDEXABLE === "true" && !process.env.NEXT_PUBLIC_SITE_URL) {
    warnings.push("SITE_INDEXABLE=true sans NEXT_PUBLIC_SITE_URL : robots.txt et le plan du site restent fermés.");
  }
  for (const warning of warnings) console.warn(`[araste] ${warning}`);
}
