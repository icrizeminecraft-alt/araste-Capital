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
 * Les photographies sont des illustrations : les mentions légales le rappellent,
 * sans légende sur les pages.
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
  hommeFenetre: {
    base: "homme-fenetre",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 14, y: 50 },
    alt: { fr: "Homme de dos, à la fenêtre, devant une ville la nuit.", en: "Man from behind at a window, facing a city at night." },
    credit: unsplash("avechenri", "ccsxNJmOGPw"),
  },
  villaCrepuscule: {
    base: "villa-crepuscule",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1867,
    focal: { x: 50, y: 55 },
    alt: { fr: "Villa contemporaine éclairée au crépuscule.", en: "Contemporary villa lit at dusk." },
    credit: unsplash("Arthur Baudry", "4vioYQ9Nn9Y"),
  },
  maquette: {
    base: "maquette",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1565,
    focal: { x: 50, y: 50 },
    alt: { fr: "Maquette blanche d'un immeuble à arcades.", en: "White model of an arcaded building." },
    credit: unsplash("Declan Sun", "ctvBcS6LLXQ"),
  },
  tourDoree: {
    base: "tour-doree",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 3200,
    focal: { x: 50, y: 50 },
    alt: { fr: "Tour de verre reflétant la lumière dorée du couchant.", en: "Glass tower reflecting golden sunset light." },
    credit: unsplash("Hoak Shen", "OLhtAXMgaaQ"),
  },
  refletsVerre: {
    base: "reflets-verre",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 50 },
    alt: { fr: "Façade de verre reflétant le ciel et les immeubles voisins.", en: "Glass façade reflecting the sky and neighbouring buildings." },
    credit: unsplash("Leyla M", "Gk83RDasfe4"),
  },
  chantierCrepuscule: {
    base: "chantier-crepuscule",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 55 },
    alt: { fr: "Maison en construction au crépuscule.", en: "House under construction at twilight." },
    credit: unsplash("Greg Rosenke", "lAyDxOCDYwI"),
  },
  tourCouchant: {
    base: "tour-couchant",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 50 },
    alt: { fr: "Gratte-ciel sous un ciel de couchant.", en: "Skyscraper under a sunset sky." },
    credit: unsplash("LEDC", "J9zND9ieE4Q"),
  },
  hommeVeste: {
    base: "homme-veste",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 40 },
    alt: { fr: "Homme boutonnant sa veste, en noir et blanc.", en: "Man buttoning his jacket, in black and white." },
    credit: unsplash("Sydney Riggs", "zcs5Wk-3bB0"),
  },
  plumeOr: {
    base: "plume-or",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1350,
    focal: { x: 50, y: 50 },
    alt: { fr: "Plume dorée d'un stylo noir, en gros plan.", en: "Gold nib of a black fountain pen, close up." },
    credit: unsplash("Thomas Griggs", "8ylzXjzqkJQ"),
  },
  accord: {
    base: "accord",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 45 },
    alt: { fr: "Poignée de main au-dessus d'une table de bois, dans la pénombre.", en: "Handshake over a wooden table, in low light." },
    credit: unsplash("Rock Staar", "NzIV4vOBA7s"),
  },
  styloDossier: {
    base: "stylo-dossier",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 1200,
    focal: { x: 50, y: 50 },
    alt: { fr: "Stylo posé sur une pile de documents, en noir et blanc.", en: "Pen resting on a pile of documents, in black and white." },
    credit: unsplash("Andres Vera", "OJbjBsNIwjk"),
  },
  costumeMontre: {
    base: "costume-montre",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 3627,
    focal: { x: 55, y: 40 },
    alt: { fr: "Costume bleu nuit, mains croisées, montre au poignet.", en: "Midnight-blue suit, hands clasped, watch on the wrist." },
    credit: unsplash("Ruthson Zimmerman", "4oDG18btbWI"),
  },
  horizonVerre: {
    base: "horizon-verre",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 50 },
    alt: { fr: "Ligne d'horizon d'une ville, vue à travers une paroi de verre.", en: "City skyline seen through a glass wall." },
    credit: unsplash("Yosuke Ota", "bD-1TlciAIQ"),
  },
  villeFenetre: {
    base: "ville-fenetre",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1800,
    focal: { x: 55, y: 50 },
    alt: { fr: "Ville vue d'une haute fenêtre, en noir et blanc.", en: "City seen from a high window, in black and white." },
    credit: unsplash("V", "sYtp3sQkqbM"),
  },
} as const satisfies Record<string, PhotoAsset>;


export const visuals: {
  hero: VisualSlot;
  bridgeFeature: VisualSlot;
  firm: VisualSlot;
  approach: VisualSlot;
  partners: VisualSlot;
  contact: VisualSlot;
  /** Vignette de chaque expertise (liste de l'accueil, page des expertises). */
  expertises: Record<ExpertiseKey, VisualSlot>;
  /** Bandeau de la page de chaque expertise, distinct de la vignette. */
  expertiseBanners: Record<ExpertiseKey, VisualSlot>;
  places: Record<"andorra" | "london" | "monaco" | "uae", VisualSlot>;
} = {
  hero: { kind: "photo", photo: photos.monacoCrepuscule },
  bridgeFeature: { kind: "photo", photo: photos.costumeMontre },
  firm: { kind: "photo", photo: photos.hommeVeste },
  approach: { kind: "photo", photo: photos.plumeOr },
  partners: { kind: "photo", photo: photos.accord },
  contact: { kind: "photo", photo: photos.styloDossier },
  expertises: {
    bridge: { kind: "photo", photo: photos.hommeFenetre },
    complex: { kind: "photo", photo: photos.corniche },
    refinancing: { kind: "photo", photo: photos.refletsVerre },
    acquisition: { kind: "photo", photo: photos.villaCrepuscule },
    development: { kind: "photo", photo: photos.maquette },
    privateDebt: { kind: "photo", photo: photos.tourDoree },
  },
  expertiseBanners: {
    bridge: { kind: "photo", photo: photos.horizonVerre },
    complex: { kind: "photo", photo: photos.villeFenetre },
    refinancing: { kind: "photo", photo: photos.colonnade },
    acquisition: { kind: "photo", photo: photos.residencesMer },
    development: { kind: "photo", photo: photos.chantierCrepuscule },
    privateDebt: { kind: "photo", photo: photos.tourCouchant },
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
