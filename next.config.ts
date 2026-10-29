import type { NextConfig } from "next";

const isIndexable = process.env.SITE_INDEXABLE === "true";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
// Export statique (`npm run build:static`) : fichiers HTML pour un hébergement
// web classique, sans serveur Node. Voir docs/DEPLOIEMENT.md.
const staticExport = process.env.STATIC_EXPORT === "true";
// HSTS et la montée en HTTPS ne sont émis que pour un site public servi en HTTPS.
const httpsProduction = process.env.NODE_ENV === "production" && siteUrl.startsWith("https://");

/** En-têtes de sécurité, servis par Node ; en export statique, ils sont transcrits dans `.htaccess`. */
export const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // CSP : aucune ressource tierce n'est autorisée (scripts, styles, polices,
  // images, connexions). `'unsafe-inline'` reste nécessaire aux scripts
  // d'amorçage des pages prérendues de Next : cette CSP n'atténue donc pas
  // une injection de script, elle limite ce qu'une page peut charger. Une CSP
  // par nonce imposerait un rendu dynamique de chaque page (voir README).
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      // Hébergement statique : le formulaire peut appeler une instance Node distante.
      `connect-src 'self'${process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ? ` ${process.env.NEXT_PUBLIC_CONTACT_ENDPOINT.replace(/\/$/, "")}` : ""}`,
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      ...(httpsProduction ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
  ...(httpsProduction ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }] : []),
  // Mode préproduction : le site est servi mais non indexable.
  // (noindex n'est pas une protection d'accès : voir README.)
  ...(isIndexable ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: false,
  ...(staticExport
    ? {
        output: "export",
        // Chaque page devient un dossier avec son index.html : aucune règle de
        // réécriture n'est nécessaire chez l'hébergeur.
        trailingSlash: true,
        images: { unoptimized: true },
        // Seuls les fichiers .tsx définissent des routes : la route API
        // (route.ts) et la redirection de langue (proxy.ts), qui exigent un
        // serveur Node, sont écartées de l'export.
        pageExtensions: ["tsx"],
      }
    : {
        images: { formats: ["image/avif", "image/webp"] },
        async headers() {
          return [{ source: "/:path*", headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
