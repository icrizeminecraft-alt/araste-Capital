import type { NextConfig } from "next";

const isIndexable = process.env.SITE_INDEXABLE === "true";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
// HSTS et la montée en HTTPS ne sont émis que pour un site public servi en HTTPS.
const httpsProduction = process.env.NODE_ENV === "production" && siteUrl.startsWith("https://");

const securityHeaders = [
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
      "connect-src 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      ...(httpsProduction ? ["upgrade-insecure-requests"] : []),
    ].join("; "),
  },
  ...(httpsProduction ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }] : []),
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  typedRoutes: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    const headers = [...securityHeaders];
    if (!isIndexable) {
      // Mode préproduction : le site est servi mais non indexable.
      // (noindex n'est pas une protection d'accès : voir README.)
      headers.push({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }
    return [{ source: "/:path*", headers }];
  },
};

export default nextConfig;
