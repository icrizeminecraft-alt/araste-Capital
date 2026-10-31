import localFont from "next/font/local";

/**
 * Polices auto-hébergées (SIL Open Font License 1.1), produites par
 * `outils/polices.py` à partir des fontes variables de Google Fonts :
 * sous-ensemble « latin » (couvre intégralement le français : accents, œ,
 * «  », espaces insécables, €), une seule fonte par famille, sans italique.
 *
 * - Newsreader (Production Type) pour les titres : graisse 400 fixée, axe de
 *   taille optique conservé (24 à 72) pour que le navigateur adapte le dessin
 *   à la taille du titre (`font-optical-sizing: auto`, comportement par défaut).
 * - Public Sans pour le texte et l'interface : graisses 400 à 500.
 */
export const newsreader = localFont({
  src: [{ path: "../assets/fonts/newsreader-latin-opsz-normal.woff2", weight: "400", style: "normal" }],
  variable: "--font-newsreader",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const publicSans = localFont({
  src: [{ path: "../assets/fonts/public-sans-latin-wght-normal.woff2", weight: "400 500", style: "normal" }],
  variable: "--font-public-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});
