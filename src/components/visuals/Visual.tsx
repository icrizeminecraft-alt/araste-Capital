import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n";
import type { PhotoAsset, VisualSlot } from "@/config/images";
import { ArchitecturalPlate } from "@/components/visuals/ArchitecturalPlate";

/** Attributs d'une photographie du registre : source, variantes de largeur et cadrage. */
export function photoAttributes(photo: PhotoAsset) {
  const largest = photo.widths[photo.widths.length - 1];
  return {
    src: `/images/${photo.base}-${largest}.jpg`,
    srcSet: photo.widths.map((w) => `/images/${photo.base}-${w}.jpg ${w}w`).join(", "),
    width: photo.width,
    height: photo.height,
    style: { objectPosition: `${photo.focal.x}% ${photo.focal.y}%` } satisfies CSSProperties,
  };
}

/**
 * Rend un emplacement visuel du registre `config/images.ts` : photographie
 * (fichiers statiques de /public/images, plusieurs largeurs) ou composition
 * SVG originale. Le site étant exporté en statique, l'image est servie telle
 * quelle : `sizes` doit décrire la largeur réellement affichée.
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
  priority?: boolean;
  /** Décoratif : masqué aux technologies d'assistance. */
  decorative?: boolean;
  sizes?: string;
}) {
  if (slot.kind === "photo") {
    const { photo } = slot;
    const attrs = photoAttributes(photo);
    const img = (
      // eslint-disable-next-line @next/next/no-img-element -- export statique : variantes de largeur servies telles quelles.
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
    );
    if (!photo.variants || photo.variants.length === 0) return img;
    return (
      <picture className="contents">
        {photo.variants.map((v) => (
          <source
            key={v.base}
            media={v.media}
            srcSet={v.widths.map((w) => `/images/${v.base}-${w}.jpg ${w}w`).join(", ")}
            sizes={sizes}
            width={v.width}
            height={v.height}
          />
        ))}
        {img}
      </picture>
    );
  }
  if (priority) {
    return <ArchitecturalPlate kind={slot.plate} title={decorative ? undefined : slot.alt[locale]} className={`h-full w-full ${className}`} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- SVG statique, aucune optimisation raster à appliquer.
    <img
      src={`/plates/${slot.plate}.svg`}
      alt={decorative ? "" : slot.alt[locale]}
      width={800}
      height={1000}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
