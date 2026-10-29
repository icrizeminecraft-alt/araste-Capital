import type { Locale } from "@/lib/i18n";
import type { ExpertiseKey } from "@/config/routes";

/**
 * Registre centralisé des visuels.
 *
 * Chaque emplacement est servi par une photographie (`photo`) importée depuis
 * Unsplash par le workflow `.github/workflows/import-photos.yml` à partir de
 * la liste `outils/photos.txt`, ou, à défaut, par une composition
 * architecturale originale en SVG (`plate`). Voir docs/IMAGES.md.
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
  /** Nom de base des fichiers sous /public/images : `<base>-<largeur>.jpg`. */
  base: string;
  /** Largeurs disponibles, croissantes (la dernière sert de source par défaut). */
  widths: readonly number[];
  /** Dimensions intrinsèques du plus grand fichier, pour réserver l'espace. */
  width: number;
  height: number;
  /** Point focal en pourcentage, pour object-position. */
  focal: { x: number; y: number };
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
  /** Auteur, source et licence. */
  credit: string;
  /** Variante recadrée au format paysage, servie aux écrans larges (direction artistique). */
  landscape?: { base: string; widths: readonly number[]; width: number; height: number; minWidth: string };
};

export type VisualSlot =
  | { kind: "plate"; plate: PlateKind; alt: Record<Locale, string> }
  | { kind: "photo"; photo: PhotoAsset };

const unsplash = (author: string, id: string) => `${author} — Unsplash (licence Unsplash), unsplash.com/photos/${id}`;

/** Photographies importées (voir outils/photos.txt). */
export const photos = {
  monacoCrepuscule: {
    base: "monaco-crepuscule",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 3200,
    focal: { x: 50, y: 58 },
    landscape: { base: "monaco-crepuscule-paysage", widths: [1600, 2400], width: 2400, height: 1350, minWidth: "64rem" },
    alt: {
      fr: "Monaco au crépuscule : la Principauté et la mer sous un ciel bleu nuit.",
      en: "Monaco at dusk: the Principality and the sea under a deep blue sky.",
    },
    credit: unsplash("Alexis Bens", "_0hTRmpkT5s"),
  },
  galerieVoutee: {
    base: "galerie-voutee",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 2700,
    focal: { x: 50, y: 50 },
    alt: { fr: "Galerie voûtée en pierre menant vers la lumière.", en: "Vaulted stone gallery leading towards the light." },
    credit: unsplash("Shapelined", "5kjDIw7STCw"),
  },
  voutePierre: {
    base: "voute-pierre",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 2700,
    focal: { x: 50, y: 40 },
    alt: { fr: "Voûte de pierre blonde, éclairée en contre-jour.", en: "Blond stone vault, lit from behind." },
    credit: unsplash("Essa Mhmad", "qOIP6cDKTzY"),
  },
  facadeMonaco: {
    base: "facade-monaco",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 2700,
    focal: { x: 40, y: 45 },
    alt: { fr: "Façade Belle Époque, pins et grille en fer forgé à Monaco.", en: "Belle Époque façade, pines and wrought-iron railing in Monaco." },
    credit: unsplash("Pedram Farjam", "GkCoXO22kIM"),
  },
  escalierMarbre: {
    base: "escalier-marbre",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 3200,
    focal: { x: 50, y: 55 },
    alt: { fr: "Premières marches d'un escalier de marbre clair.", en: "First steps of a light marble staircase." },
    credit: unsplash("Sebastian Schuster", "pfhVW5J2BKc"),
  },
  corniche: {
    base: "corniche",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 55, y: 50 },
    alt: { fr: "Corniche sculptée éclairée par le soleil couchant, sur ciel bleu profond.", en: "Carved cornice lit by the setting sun against a deep blue sky." },
    credit: unsplash("Maxim Tolchinskiy", "uL8uhUj2gMg"),
  },
  colonnade: {
    base: "colonnade",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 3200,
    focal: { x: 50, y: 55 },
    alt: { fr: "Colonnade de pierre aux lanternes, ombres longues sur un sol de marbre.", en: "Stone colonnade with lanterns, long shadows on a marble floor." },
    credit: unsplash("Maksim Shutov", "L_oILD2kB3I"),
  },
  residencesMer: {
    base: "residences-mer",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 62, y: 55 },
    alt: { fr: "Immeubles aux arcades de pierre claire ouvrant sur la Méditerranée.", en: "Light-stone buildings with arched balconies opening onto the Mediterranean." },
    credit: unsplash("Thomas K", "WuyR34c3qJA"),
  },
  grue: {
    base: "grue",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 3600,
    focal: { x: 50, y: 42 },
    alt: { fr: "Ombre d'une grue de chantier sur une façade blanche.", en: "Shadow of a construction crane on a white façade." },
    credit: unsplash("Alexander Kaufmann", "e8dE5m7Vsf8"),
  },
  falaisePort: {
    base: "falaise-port",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 3600,
    focal: { x: 55, y: 50 },
    alt: { fr: "Falaise, port et horizon marin sous un ciel clair.", en: "Cliff, harbour and sea horizon under a clear sky." },
    credit: unsplash("Eleonora Paolino", "boBaMH39P6Y"),
  },
  andorre: {
    base: "andorre",
    widths: [640, 1200],
    width: 1200,
    height: 800,
    focal: { x: 50, y: 55 },
    alt: { fr: "Andorre-la-Vieille dans sa vallée, sommets enneigés.", en: "Andorra la Vella in its valley, snow-capped peaks." },
    credit: unsplash("Jossuha Théophile", "txDX4b4n8AY"),
  },
  londres: {
    base: "londres",
    widths: [640, 1200],
    width: 1200,
    height: 1800,
    focal: { x: 50, y: 55 },
    alt: { fr: "Façades georgiennes et cabines téléphoniques rouges, Londres en automne.", en: "Georgian façades and red telephone boxes, London in autumn." },
    credit: unsplash("Anthony", "zjBxPUHE_ok"),
  },
  monaco: {
    base: "monaco",
    widths: [640, 1200],
    width: 1200,
    height: 1500,
    focal: { x: 50, y: 55 },
    alt: { fr: "Vue sur le Rocher de Monaco et la mer.", en: "View over the Rock of Monaco and the sea." },
    credit: unsplash("Mark de Jong", "UCtP4syENic"),
  },
  emirats: {
    base: "emirats",
    widths: [640, 1200],
    width: 1200,
    height: 1600,
    focal: { x: 50, y: 45 },
    alt: { fr: "Tours de Dubaï illuminées la nuit.", en: "Dubai towers lit up at night." },
    credit: unsplash("Nejc Soklič", "yFKBh1sC1ng"),
  },
} as const satisfies Record<string, PhotoAsset>;

const illustration = {
  fr: "Photographie d'illustration, sans lien avec une opération conseillée ni avec des locaux du cabinet.",
  en: "Illustrative photograph, unrelated to any advised transaction or to the firm's premises.",
};

export const visuals: {
  hero: VisualSlot;
  bridgeFeature: VisualSlot;
  firm: VisualSlot;
  approach: VisualSlot;
  expertises: Record<ExpertiseKey, VisualSlot>;
  places: Record<"andorra" | "london" | "monaco" | "uae", VisualSlot>;
} = {
  hero: { kind: "photo", photo: { ...photos.monacoCrepuscule, caption: illustration } },
  bridgeFeature: { kind: "photo", photo: photos.voutePierre },
  firm: { kind: "photo", photo: { ...photos.facadeMonaco, caption: illustration } },
  approach: { kind: "photo", photo: photos.escalierMarbre },
  expertises: {
    bridge: { kind: "photo", photo: photos.galerieVoutee },
    complex: { kind: "photo", photo: photos.corniche },
    refinancing: { kind: "photo", photo: photos.colonnade },
    acquisition: { kind: "photo", photo: { ...photos.residencesMer, caption: illustration } },
    development: { kind: "photo", photo: photos.grue },
    privateDebt: { kind: "photo", photo: photos.falaisePort },
  },
  places: {
    andorra: { kind: "photo", photo: photos.andorre },
    london: { kind: "photo", photo: photos.londres },
    monaco: { kind: "photo", photo: photos.monaco },
    uae: { kind: "photo", photo: photos.emirats },
  },
};

/** Liste dédoublonnée des crédits, pour la page des mentions légales. */
export const photoCredits: string[] = Array.from(new Set(Object.values(photos).map((p) => p.credit)));
