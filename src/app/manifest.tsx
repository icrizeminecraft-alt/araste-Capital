import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { publicPath } from "@/config/routes";

// Fichier généré à la construction (également requis par l'export statique).
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand.legalName,
    short_name: siteConfig.brand.name,
    description: siteConfig.brand.tagline.fr,
    start_url: publicPath("/fr"),
    display: "browser",
    background_color: "#fbfbfc",
    theme_color: "#0b1730",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
