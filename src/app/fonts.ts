import localFont from "next/font/local";

/**
 * Polices auto-hébergées (SIL Open Font License 1.1).
 * Sous-ensemble « latin » de Google Fonts : couvre intégralement le français
 * (accents, œ, «  », espaces insécables, €).
 */
export const cormorant = localFont({
  src: [
    { path: "../assets/fonts/cormorant-latin-wght-normal.woff2", weight: "300 700", style: "normal" },
    { path: "../assets/fonts/cormorant-latin-wght-italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const dmSans = localFont({
  src: [
    { path: "../assets/fonts/dm-sans-latin-wght-normal.woff2", weight: "100 1000", style: "normal" },
    { path: "../assets/fonts/dm-sans-latin-wght-italic.woff2", weight: "100 1000", style: "italic" },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
});
