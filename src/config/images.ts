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
 * sans légende sur les pages. Chaque image n'est utilisée qu'à un seul
 * emplacement (les vignettes d'expertise sont reprises à l'identique entre
 * l'accueil et la page des expertises).
 */
export type PlateKind =
  | "arcade"
  | "colonnade"
  | "stair"
  | "facade"
  | "horizon"
  | "vault"
  | "cornice";

/** Variante recadrée d'une photographie, servie selon une requête de média (direction artistique). */
export type PhotoVariant = {
  media: string;
  base: string;
  widths: readonly number[];
  width: number;
  height: number;
};

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
  /** Auteur, source et licence. */
  credit: string;
  /** Recadrages alternatifs (par exemple un cadrage portrait pour les petits écrans). */
  variants?: readonly PhotoVariant[];
};

export type VisualSlot =
  | { kind: "plate"; plate: PlateKind; alt: Record<Locale, string> }
  | { kind: "photo"; photo: PhotoAsset };

const unsplash = (author: string, id: string) => `${author} — Unsplash (licence Unsplash), unsplash.com/photos/${id}`;

/** Photographies importées (voir outils/photos.txt). */
export const photos = {
  residencesMer: {
    base: "residences-mer",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 62, y: 55 },
    alt: { fr: "Immeubles aux arcades de pierre claire ouvrant sur la Méditerranée.", en: "Light-stone buildings with arched balconies opening onto the Mediterranean." },
    credit: unsplash("Thomas K", "WuyR34c3qJA"),
    variants: [{ media: "(max-width: 47.99rem)", base: "residences-mer-portrait", widths: [960, 1400], width: 1400, height: 1867 }],
  },
  monacoCrepuscule: {
    base: "monaco-crepuscule",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 3200,
    focal: { x: 50, y: 58 },
    alt: { fr: "Monaco au crépuscule : la Principauté et la mer sous un ciel bleu nuit.", en: "Monaco at dusk: the Principality and the sea under a deep blue sky." },
    credit: unsplash("Alexis Bens", "_0hTRmpkT5s"),
  },
  parisBalcons: {
    base: "paris-balcons",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 2700,
    focal: { x: 50, y: 50 },
    alt: { fr: "Immeuble parisien aux balcons ouvragés.", en: "Parisian building with ornate balconies." },
    credit: unsplash("Meizhi Lang", "NmrbDuAVoDk"),
  },
  parisLumiere: {
    base: "paris-lumiere",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 2700,
    focal: { x: 50, y: 45 },
    alt: { fr: "Façade parisienne et balcon en fer forgé dans la lumière du matin.", en: "Parisian façade and wrought-iron balcony in morning light." },
    credit: unsplash("Ruben Hanssen", "U8Ygo0wNNZI"),
  },
  parisAngle: {
    base: "paris-angle",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1609,
    focal: { x: 50, y: 45 },
    alt: { fr: "Immeubles parisiens aux balcons ouvragés sous un ciel bleu.", en: "Parisian buildings with ornate balconies under a blue sky." },
    credit: unsplash("Pavel Abramiankou", "qgfwU8JarIg"),
  },
  rivieraImmeuble: {
    base: "riviera-immeuble",
    widths: [800, 1200, 1800],
    width: 1800,
    height: 2700,
    focal: { x: 50, y: 45 },
    alt: { fr: "Immeuble Belle Époque aux façades claires, sur la Riviera.", en: "Belle Époque building with light façades on the Riviera." },
    credit: unsplash("Shalev Cohen", "LDaMQABui7o"),
  },
  rivieraPalmiers: {
    base: "riviera-palmiers",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 45 },
    alt: { fr: "Immeuble de la Riviera derrière des palmiers.", en: "Riviera building behind palm trees." },
    credit: unsplash("Stevo", "oSuZIcno8qc"),
  },
  fontvieille: {
    base: "fontvieille",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 55 },
    alt: { fr: "Immeubles au bord de l'eau, vus d'en haut.", en: "Waterside buildings seen from above." },
    credit: unsplash("Diane Picchiottino", "RuvW7a2R8HM"),
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
  villaCrepuscule: {
    base: "villa-crepuscule",
    widths: [800, 1600, 2400],
    width: 2400,
    height: 1867,
    focal: { x: 50, y: 55 },
    alt: { fr: "Villa contemporaine éclairée au crépuscule.", en: "Contemporary villa lit at dusk." },
    credit: unsplash("Arthur Baudry", "4vioYQ9Nn9Y"),
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
  grue: {
    base: "grue",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 3600,
    focal: { x: 50, y: 42 },
    alt: { fr: "Ombre d'une grue de chantier sur une façade blanche.", en: "Shadow of a construction crane on a white façade." },
    credit: unsplash("Alexander Kaufmann", "e8dE5m7Vsf8"),
  },
  tourCouchant: {
    base: "tour-couchant",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1600,
    focal: { x: 50, y: 50 },
    alt: { fr: "Immeuble de bureaux sous un ciel de couchant.", en: "Office building under a sunset sky." },
    credit: unsplash("LEDC", "J9zND9ieE4Q"),
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
  villeFenetre: {
    base: "ville-fenetre",
    widths: [960, 1600, 2400],
    width: 2400,
    height: 1800,
    focal: { x: 55, y: 50 },
    alt: { fr: "Ville vue d'une haute fenêtre, en noir et blanc.", en: "City seen from a high window, in black and white." },
    credit: unsplash("V", "sYtp3sQkqbM"),
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

export const visuals: {
  hero: VisualSlot;
  bridgeFeature: VisualSlot;
  /**
   * Portrait du fondateur (accueil et page du cabinet). `null` tant que la
   * photographie n'est pas livrée : le monogramme tient lieu de portrait.
   */
  portrait: VisualSlot | null;
  approach: VisualSlot;
  partners: VisualSlot;
  contact: VisualSlot;
  /** Vignette de chaque expertise (liste de l'accueil, page des expertises). */
  expertises: Record<ExpertiseKey, VisualSlot>;
  /** Bandeau de la page de chaque expertise, distinct de la vignette. */
  expertiseBanners: Record<ExpertiseKey, VisualSlot>;
  places: Record<"andorra" | "london" | "monaco" | "uae", VisualSlot>;
} = {
  hero: { kind: "photo", photo: photos.residencesMer },
  bridgeFeature: { kind: "photo", photo: photos.parisBalcons },
  portrait: null,
  approach: { kind: "photo", photo: photos.plumeOr },
  partners: { kind: "photo", photo: photos.accord },
  contact: { kind: "photo", photo: photos.styloDossier },
  expertises: {
    bridge: { kind: "photo", photo: photos.villaCrepuscule },
    complex: { kind: "photo", photo: photos.corniche },
    refinancing: { kind: "photo", photo: photos.parisLumiere },
    acquisition: { kind: "photo", photo: photos.rivieraImmeuble },
    development: { kind: "photo", photo: photos.chantierCrepuscule },
    privateDebt: { kind: "photo", photo: photos.tourCouchant },
  },
  expertiseBanners: {
    bridge: { kind: "photo", photo: photos.fontvieille },
    complex: { kind: "photo", photo: photos.villeFenetre },
    refinancing: { kind: "photo", photo: photos.parisAngle },
    acquisition: { kind: "photo", photo: photos.rivieraPalmiers },
    development: { kind: "photo", photo: photos.grue },
    privateDebt: { kind: "photo", photo: photos.tourDoree },
  },
  places: {
    andorra: { kind: "photo", photo: photos.andorre },
    london: { kind: "photo", photo: photos.londres },
    monaco: { kind: "photo", photo: photos.monacoCrepuscule },
    uae: { kind: "photo", photo: photos.emirats },
  },
};

/** Liste dédoublonnée des crédits, pour la page des mentions légales. */
export const photoCredits: string[] = Array.from(new Set(Object.values(photos).map((p) => p.credit)));
