import type { Locale } from "@/lib/i18n";
import type { ExpertiseKey } from "@/config/routes";

/**
 * Registre centralisé des visuels.
 *
 * Aucune photographie tierce n'est livrée avec cette version : les banques
 * d'images n'étaient pas accessibles depuis l'environnement de réalisation et
 * aucune licence ne doit être supposée. Chaque emplacement est donc servi par
 * une composition architecturale originale en SVG (`plate`), remplaçable par
 * une photographie (`photo`) une fois les droits vérifiés — voir docs/IMAGES.md.
 *
 * Une photographie d'illustration ne doit jamais être présentée comme un actif
 * financé ni comme les bureaux du cabinet : les légendes le rappellent.
 */
export type PlateKind =
  | "arcade"
  | "colonnade"
  | "stair"
  | "facade"
  | "horizon"
  | "vault"
  | "cornice";

export type PhotoAsset = {
  /** Chemin sous /public, par exemple "/images/hero.jpg". */
  src: string;
  width: number;
  height: number;
  /** Point focal en pourcentage, pour object-position. */
  focal: { x: number; y: number };
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
  /** Source, auteur, licence — à documenter avant usage. */
  credit: string;
};

export type VisualSlot =
  | { kind: "plate"; plate: PlateKind; alt: Record<Locale, string> }
  | { kind: "photo"; photo: PhotoAsset };

export const visuals: {
  hero: VisualSlot;
  bridgeFeature: VisualSlot;
  firm: VisualSlot;
  approach: VisualSlot;
  expertises: Record<ExpertiseKey, VisualSlot>;
} = {
  hero: {
    kind: "plate",
    plate: "arcade",
    alt: {
      fr: "Composition architecturale : arcades en pierre claire ouvrant sur une lumière méditerranéenne.",
      en: "Architectural composition: light stone arches opening onto Mediterranean light.",
    },
  },
  bridgeFeature: {
    kind: "plate",
    plate: "vault",
    alt: {
      fr: "Composition architecturale : voûte en pierre franchissant un vide.",
      en: "Architectural composition: a stone vault spanning a void.",
    },
  },
  firm: {
    kind: "plate",
    plate: "facade",
    alt: {
      fr: "Composition architecturale : façade rythmée par ses ouvertures.",
      en: "Architectural composition: a façade set by the rhythm of its openings.",
    },
  },
  approach: {
    kind: "plate",
    plate: "stair",
    alt: {
      fr: "Composition architecturale : escalier de pierre montant vers la lumière.",
      en: "Architectural composition: a stone staircase rising towards the light.",
    },
  },
  expertises: {
    bridge: { kind: "plate", plate: "vault", alt: { fr: "Voûte en pierre franchissant un vide.", en: "Stone vault spanning a void." } },
    complex: { kind: "plate", plate: "cornice", alt: { fr: "Corniche et moulures superposées.", en: "Layered cornice and mouldings." } },
    refinancing: { kind: "plate", plate: "colonnade", alt: { fr: "Colonnade régulière en pierre claire.", en: "Regular colonnade in light stone." } },
    acquisition: { kind: "plate", plate: "facade", alt: { fr: "Façade rythmée par ses ouvertures.", en: "Façade set by the rhythm of its openings." } },
    development: { kind: "plate", plate: "stair", alt: { fr: "Escalier de pierre montant vers la lumière.", en: "Stone staircase rising towards the light." } },
    privateDebt: { kind: "plate", plate: "horizon", alt: { fr: "Balustrade ouverte sur l'horizon marin.", en: "Balustrade opening onto the sea horizon." } },
  },
};
