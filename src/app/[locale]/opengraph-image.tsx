import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/site";

export const alt = "ARASTE CAPITAL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Aperçu de partage : logotype et signature sur ivoire, généré à la construction. */
export default async function OpenGraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const [serif, sans] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/cormorant-500-og.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/dm-sans-400-og.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f0e8",
          padding: "72px 84px",
          fontFamily: "DM Sans",
          color: "#142a25",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <path d="M32 8 L8 56 H16.5 L32 25 L47.5 56 H56 Z" fill="#142a25" />
            <rect x="13" y="39.6" width="38" height="2.4" fill="#aa9167" />
            <path d="M22 56 C22 48.6 26.5 44 32 44 C37.5 44 42 48.6 42 56" fill="none" stroke="#aa9167" strokeWidth="1.7" />
          </svg>
          <div style={{ fontFamily: "Cormorant", fontSize: 40, letterSpacing: 10, textTransform: "uppercase" }}>Araste Capital</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ width: 96, height: 2, background: "#aa9167" }} />
          <div style={{ fontFamily: "Cormorant", fontSize: 76, lineHeight: 1.02, maxWidth: 960 }}>
            {l === "fr" ? "Une autre lecture de votre financement." : "A different reading of your financing."}
          </div>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#7d6740" }}>
            {siteConfig.brand.tagline[l]}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif, weight: 500, style: "normal" },
        { name: "DM Sans", data: sans, weight: 400, style: "normal" },
      ],
    },
  );
}
