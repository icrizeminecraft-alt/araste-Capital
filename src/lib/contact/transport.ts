import { siteConfig } from "@/config/site";
import { currentProvider } from "@/lib/contact/providers";

export type Transport = "server" | "remote" | "demo";

/**
 * Acheminement des formulaires selon le déploiement.
 * - Export statique : « php » désigne le relais PHP de même origine (Hostinger),
 *   une URL une instance Node distante, rien le mode démonstration.
 * - Serveur Node : la page contact rend un jeton frais (`server`) ; l'accueil,
 *   page statique, demande son jeton au moment de l'envoi (`remote`, même origine).
 */
export function contactTransport(page: "contact" | "home"): { transport: Transport; endpoint: string; demo: boolean } {
  if (!siteConfig.staticExport) {
    return { transport: page === "contact" ? "server" : "remote", endpoint: "", demo: currentProvider() === "none" };
  }
  const relay = siteConfig.contactEndpoint;
  if (relay === "php") return { transport: "remote", endpoint: "", demo: false };
  if (/^https?:\/\//.test(relay)) return { transport: "remote", endpoint: relay, demo: false };
  return { transport: "demo", endpoint: "", demo: true };
}
