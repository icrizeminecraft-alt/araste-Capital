import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/content";
import { expertiseSlugs, guideKeys, guideSlugs, pageSlugs } from "@/config/routes";
import { enabledExpertises, siteConfig } from "@/config/site";
import { resolveSlug } from "./page";

export const alt = "ARASTE CAPITAL";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    ...enabledExpertises().map((key) => ({ locale, section: pageSlugs.expertises[locale], slug: expertiseSlugs[key][locale] })),
    ...guideKeys.map((key) => ({ locale, section: pageSlugs.guides[locale], slug: guideSlugs[key][locale] })),
  ]);
}

/** Aperçu de partage propre à chaque expertise et à chaque repère. */
export default async function SlugOpenGraphImage({ params }: { params: Promise<{ locale: string; section: string; slug: string }> }) {
  const { locale, section, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "fr";
  const dict = getDictionary(l);
  const resolved = resolveSlug(l, section, slug);
  const content = resolved ? (resolved.kind === "expertise" ? dict.expertises[resolved.key] : dict.guides[resolved.key]) : null;
  const eyebrow = resolved ? (resolved.kind === "expertise" ? dict.common.nav.expertises : dict.common.nav.guides) : "";
  const title = content ? content.title : siteConfig.brand.name;
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
          background: resolved?.kind === "guide" ? "#f4f0e8" : "#142a25",
          color: resolved?.kind === "guide" ? "#142a25" : "#f4f0e8",
          padding: "72px 84px",
          fontFamily: "DM Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width="56" height="56" viewBox="0 0 64 64">
            <path d="M32 8 L8 56 H16.5 L32 25 L47.5 56 H56 Z" fill={resolved?.kind === "guide" ? "#142a25" : "#f4f0e8"} />
            <rect x="13" y="39.6" width="38" height="2.4" fill="#aa9167" />
            <path d="M22 56 C22 48.6 26.5 44 32 44 C37.5 44 42 48.6 42 56" fill="none" stroke="#aa9167" strokeWidth="1.7" />
          </svg>
          <div style={{ fontFamily: "Cormorant", fontSize: 34, letterSpacing: 9, textTransform: "uppercase" }}>Araste Capital</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#aa9167" }}>{eyebrow}</div>
          <div style={{ fontFamily: "Cormorant", fontSize: title.length > 40 ? 62 : 74, lineHeight: 1.02, maxWidth: 1000 }}>{title}</div>
          <div style={{ fontSize: 22, letterSpacing: 3, textTransform: "uppercase", color: resolved?.kind === "guide" ? "#7d6740" : "#cdb88f" }}>
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
