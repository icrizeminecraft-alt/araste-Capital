import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.brand.legalName,
    short_name: siteConfig.brand.name,
    description: siteConfig.brand.tagline.fr,
    start_url: "/fr",
    display: "browser",
    background_color: "#f4f0e8",
    theme_color: "#142a25",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
