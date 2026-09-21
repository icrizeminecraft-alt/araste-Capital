import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { VisualSlot } from "@/config/images";
import { ArchitecturalPlate } from "@/components/visuals/ArchitecturalPlate";

/**
 * Rend un emplacement visuel du registre `config/images.ts` :
 * composition SVG originale ou photographie (une fois les droits vérifiés).
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
    return (
      <Image
        src={photo.src}
        alt={decorative ? "" : photo.alt[locale]}
        width={photo.width}
        height={photo.height}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full object-cover ${className}`}
        style={{ objectPosition: `${photo.focal.x}% ${photo.focal.y}%` }}
      />
    );
  }
  return (
    <ArchitecturalPlate
      kind={slot.plate}
      title={decorative ? undefined : slot.alt[locale]}
      priority={priority}
      className={`h-full w-full ${className}`}
    />
  );
}
