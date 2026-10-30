import type { CSSProperties } from "react";
import { preload } from "react-dom";
import type { Locale } from "@/lib/i18n";
import type { PhotoAsset, PhotoFiles, VisualSlot } from "@/config/images";

type Format = "avif" | "jpg";

/** Liste `srcset` d'une photographie dans un format donné. */
export function srcSetFor(files: PhotoFiles, format: Format): string {
  return files.widths.map((w) => `/images/${files.base}-${w}.${format} ${w}w`).join(", ");
}

/** Attributs de l'élément `img` d'une photographie du registre : source JPEG de repli, dimensions et cadrage. */
export function photoAttributes(photo: PhotoAsset) {
  const largest = photo.widths[photo.widths.length - 1];
  return {
    src: `/images/${photo.base}-${largest}.jpg`,
    srcSet: srcSetFor(photo, "jpg"),
    width: photo.width,
    height: photo.height,
    style: { objectPosition: `${photo.focal.x}% ${photo.focal.y}%` } satisfies CSSProperties,
  };
}

/**
 * Annonce au navigateur, dès l'en-tête du document, la photographie du premier
 * écran : chaque recadrage avec sa requête de média, en AVIF, puis la version
 * de base. Le navigateur ne télécharge que la source qui correspond à l'écran.
 */
export function preloadPhoto(photo: PhotoAsset, sizes: string) {
  const variants = photo.variants ?? [];
  for (const v of variants) {
    preload(`/images/${v.base}-${v.widths[v.widths.length - 1]}.avif`, { as: "image", imageSrcSet: srcSetFor(v, "avif"), imageSizes: sizes, media: v.media, fetchPriority: "high" });
  }
  // La version de base sert aux écrans que le recadrage ne couvre pas (un seul recadrage pris en charge ici).
  const base = variants.length === 1 ? { media: `not all and ${variants[0]?.media}` } : {};
  preload(`/images/${photo.base}-${photo.widths[photo.widths.length - 1]}.avif`, {
    as: "image",
    imageSrcSet: srcSetFor(photo, "avif"),
    imageSizes: sizes,
    ...base,
    fetchPriority: "high",
  });
}

/**
 * Rend un emplacement visuel du registre `config/images.ts` : une photographie
 * (fichiers statiques de /public/images, plusieurs largeurs, AVIF puis JPEG).
 * Le site étant exporté en statique, l'image est servie telle quelle : `sizes`
 * doit décrire la largeur réellement affichée.
 *
 * Un seul élément `picture` par emplacement : les recadrages (`variants`)
 * sont déclarés comme sources conditionnelles, si bien qu'un seul fichier est
 * téléchargé, celui qui correspond à l'écran.
 */
export function Visual({
  slot,
  locale,
  className = "",
  priority = false,
  decorative = false,
  sizes = "100vw",
}: {
  slot: VisualSlot;
  locale: Locale;
  className?: string;
  /** Contenu principal du premier écran : chargement immédiat et prioritaire. */
  priority?: boolean;
  /** Décoratif : masqué aux technologies d'assistance. */
  decorative?: boolean;
  sizes?: string;
}) {
  const { photo } = slot;
  const attrs = photoAttributes(photo);
  if (priority) preloadPhoto(photo, sizes);
  return (
    <picture className="contents">
      {(photo.variants ?? []).map((v) => (
        <Source key={v.base} files={v} media={v.media} sizes={sizes} />
      ))}
      <source type="image/avif" srcSet={srcSetFor(photo, "avif")} sizes={sizes} width={photo.width} height={photo.height} />
      <img
        src={attrs.src}
        srcSet={attrs.srcSet}
        sizes={sizes}
        width={attrs.width}
        height={attrs.height}
        alt={decorative ? "" : photo.alt[locale]}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={`h-full w-full object-cover ${className}`}
        style={attrs.style}
      />
    </picture>
  );
}

/** Deux sources conditionnelles (AVIF puis JPEG) pour un recadrage servi selon une requête de média. */
function Source({ files, media, sizes }: { files: PhotoFiles; media: string; sizes: string }) {
  return (
    <>
      <source media={media} type="image/avif" srcSet={srcSetFor(files, "avif")} sizes={sizes} width={files.width} height={files.height} />
      <source media={media} type="image/jpeg" srcSet={srcSetFor(files, "jpg")} sizes={sizes} width={files.width} height={files.height} />
    </>
  );
}
