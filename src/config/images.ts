import type { Locale } from "@/lib/i18n";
import type { ExpertiseKey } from "@/config/routes";
import manifest from "../../public/images/manifest.json";

/**
 * Registre centralisé des visuels.
 *
 * Chaque emplacement est servi par une photographie (`photo`) importée depuis
 * Unsplash par le workflow `.github/workflows/import-photos.yml` à partir de
 * la liste `outils/photos.txt`, ou, à défaut, par une composition
 * architecturale originale en SVG (`plate`). Voir docs/IMAGES.md.
 *
 * Les largeurs et les dimensions de chaque photographie viennent du manifeste
 * écrit par l'import (`public/images/manifest.json`) : elles décrivent les
 * pixels réellement présents dans les fichiers, jamais une valeur supposée.
 * Chaque fichier existe en AVIF et en JPEG.
 *
 * Les photographies sont des illustrations : les mentions légales le rappellent,
 * sans légende sur les pages. Chaque image n'est utilisée qu'à un seul
 * emplacement. L'accueil se limite à trois images : l'ouverture, une vue
 * d'ensemble et un détail, de la même famille de lumière.
 */
export type PlateKind =
  | "arcade"
  | "colonnade"
  | "stair"
  | "facade"
  | "horizon"
  | "vault"
  | "cornice";

type ManifestEntry = { readonly id: string; readonly widths: readonly number[]; readonly width: number; readonly height: number };
type ManifestName = keyof typeof manifest;

/** Fichiers d'une photographie ou d'un recadrage : nom de base et dimensions réelles. */
export type PhotoFiles = {
  /** Nom de base des fichiers sous /public/images : `<base>-<largeur>.{avif,jpg}`. */
  base: string;
  /** Largeurs disponibles, croissantes (la dernière sert de source par défaut). */
  widths: readonly number[];
  /** Dimensions intrinsèques du plus grand fichier, pour réserver l'espace. */
  width: number;
  height: number;
};

/** Variante recadrée d'une photographie, servie selon une requête de média (direction artistique). */
export type PhotoVariant = PhotoFiles & { media: string };

export type PhotoAsset = PhotoFiles & {
  /** Point focal en pourcentage, pour object-position. */
  focal: { x: number; y: number };
  alt: Record<Locale, string>;
  /** Auteur, source et licence. */
  credit: string;
  /** Recadrages alternatifs (par exemple un cadrage vertical pour le grand écran). */
  variants?: readonly PhotoVariant[];
};

export type VisualSlot =
  | { kind: "plate"; plate: PlateKind; alt: Record<Locale, string> }
  | { kind: "photo"; photo: PhotoAsset };

const unsplash = (author: string, id: string) => `${author} — Unsplash (licence Unsplash), unsplash.com/photos/${id}`;

/** Dimensions réelles d'une photographie importée, d'après le manifeste. */
function files(name: ManifestName): PhotoFiles {
  const entry: ManifestEntry = manifest[name];
  return { base: name, widths: entry.widths, width: entry.width, height: entry.height };
}

function variant(name: ManifestName, media: string): PhotoVariant {
  return { ...files(name), media };
}

/** Photographies importées (voir outils/photos.txt). */
export const photos = {
  /* Série de l'accueil : lumière douce, pierre claire, Méditerranée. */
  altea: {
    ...files("altea"),
    focal: { x: 50, y: 45 },
    alt: { fr: "Balcons d'une résidence blanche ouvrant sur une mer calme, au crépuscule.", en: "Balconies of a white residence opening onto a calm sea at dusk." },
    credit: unsplash("Miká Heming", "i9PYRSr2uBc"),
    variants: [variant("altea-portrait", "(min-width: 64rem)")],
  },
  cassis: {
    ...files("cassis"),
    focal: { x: 50, y: 45 },
    alt: { fr: "Villas de pierre claire sur une côte méditerranéenne.", en: "Light-stone villas on a Mediterranean coastline." },
    credit: unsplash("Jac Alexandru", "A7SIkewdTIw"),
    variants: [variant("cassis-large", "(min-width: 64rem)")],
  },
  balconPierre: {
    ...files("balcon-pierre"),
    focal: { x: 55, y: 50 },
    alt: { fr: "Balcon en fer forgé sur une façade de pierre claire.", en: "Wrought-iron balcony on a light stone façade." },
    credit: unsplash("Zineddine Dinar", "LkYMnCsE_KU"),
  },

  /* Vignettes des expertises (page des expertises). */
  terrasseMer: {
    ...files("terrasse-mer"),
    focal: { x: 50, y: 50 },
    alt: { fr: "Terrasse de pierre claire ouvrant sur la mer.", en: "Light stone terrace opening onto the sea." },
    credit: unsplash("Paréj Richárd", "Tl9ntkhaimg"),
  },
  corniche: {
    ...files("corniche"),
    focal: { x: 55, y: 50 },
    alt: { fr: "Corniche sculptée éclairée par le soleil couchant, sur ciel bleu profond.", en: "Carved cornice lit by the setting sun against a deep blue sky." },
    credit: unsplash("Maxim Tolchinskiy", "uL8uhUj2gMg"),
  },
  parisBalcons: {
    ...files("paris-balcons"),
    focal: { x: 50, y: 40 },
    alt: { fr: "Immeuble parisien aux balcons ouvragés.", en: "Parisian building with ornate balconies." },
    credit: unsplash("Meizhi Lang", "NmrbDuAVoDk"),
  },
  villaCassis: {
    ...files("villa-cassis"),
    focal: { x: 55, y: 45 },
    alt: { fr: "Villa blanche sur une pointe rocheuse, au bord de la Méditerranée.", en: "White villa on a rocky headland by the Mediterranean." },
    credit: unsplash("Denis Dimitrov", "-chZwUizQXY"),
  },
  chantierMer: {
    ...files("chantier-mer"),
    focal: { x: 50, y: 55 },
    alt: { fr: "Immeuble de pierre en construction au bord de la mer.", en: "Stone building under construction by the sea." },
    credit: unsplash("Aleksandrs Zeltisevs", "o_QjE648MvM"),
  },
  travertin: {
    ...files("travertin"),
    focal: { x: 50, y: 50 },
    alt: { fr: "Lumière et ombre sur un angle de pierre.", en: "Light and shadow on a stone corner." },
    credit: unsplash("Jason Leung", "bwu6zJHrfNs"),
  },

  /* Bandeaux des pages d'expertise. */
  fontvieille: {
    ...files("fontvieille"),
    focal: { x: 50, y: 55 },
    alt: { fr: "Immeubles au bord de l'eau, vus d'en haut.", en: "Waterside buildings seen from above." },
    credit: unsplash("Diane Picchiottino", "RuvW7a2R8HM"),
  },
  villeFenetre: {
    ...files("ville-fenetre"),
    focal: { x: 55, y: 50 },
    alt: { fr: "Ville vue d'une haute fenêtre, en noir et blanc.", en: "City seen from a high window, in black and white." },
    credit: unsplash("V", "sYtp3sQkqbM"),
  },
  parisAngle: {
    ...files("paris-angle"),
    focal: { x: 50, y: 45 },
    alt: { fr: "Immeubles parisiens aux balcons ouvragés sous un ciel bleu.", en: "Parisian buildings with ornate balconies under a blue sky." },
    credit: unsplash("Pavel Abramiankou", "qgfwU8JarIg"),
  },
  rivieraPalmiers: {
    ...files("riviera-palmiers"),
    focal: { x: 50, y: 45 },
    alt: { fr: "Immeuble de la Riviera derrière des palmiers.", en: "Riviera building behind palm trees." },
    credit: unsplash("Stevo", "oSuZIcno8qc"),
  },
  grue: {
    ...files("grue"),
    focal: { x: 50, y: 42 },
    alt: { fr: "Ombre d'une grue de chantier sur une façade blanche.", en: "Shadow of a construction crane on a white façade." },
    credit: unsplash("Alexander Kaufmann", "e8dE5m7Vsf8"),
  },
  tourDoree: {
    ...files("tour-doree"),
    focal: { x: 50, y: 50 },
    alt: { fr: "Tour de verre reflétant la lumière dorée du couchant.", en: "Glass tower reflecting golden sunset light." },
    credit: unsplash("Hoak Shen", "OLhtAXMgaaQ"),
  },

  /* Pages approche, partenaires et contact. */
  plumeOr: {
    ...files("plume-or"),
    focal: { x: 50, y: 50 },
    alt: { fr: "Plume dorée d'un stylo noir, en gros plan.", en: "Gold nib of a black fountain pen, close up." },
    credit: unsplash("Thomas Griggs", "8ylzXjzqkJQ"),
  },
  signature: {
    ...files("signature"),
    focal: { x: 50, y: 45 },
    alt: { fr: "Signature d'un document au stylo, en noir et blanc.", en: "Signing a document with a pen, in black and white." },
    credit: unsplash("Signature Pro", "MbClFGJBH6k"),
  },
  styloDossier: {
    ...files("stylo-dossier"),
    focal: { x: 50, y: 50 },
    alt: { fr: "Stylo posé sur une pile de documents, en noir et blanc.", en: "Pen resting on a pile of documents, in black and white." },
    credit: unsplash("Andres Vera", "OJbjBsNIwjk"),
  },
} satisfies Record<string, PhotoAsset>;

export const visuals: {
  /** Ouverture de l'accueil : cadrage vertical sur grand écran, horizontal en dessous. */
  hero: VisualSlot;
  /** Vue d'ensemble (accueil) : situer un actif ou un contexte d'investissement. */
  overview: VisualSlot;
  /** Détail architectural (accueil) : une respiration, la pierre et l'ombre. */
  detail: VisualSlot;
  /**
   * Portrait du fondateur (page du cabinet). `null` tant que la photographie
   * n'est pas livrée : le module se présente alors sans image.
   */
  portrait: VisualSlot | null;
  approach: VisualSlot;
  partners: VisualSlot;
  contact: VisualSlot;
  /** Vignette de chaque expertise (page des expertises). */
  expertises: Record<ExpertiseKey, VisualSlot>;
  /** Bandeau de la page de chaque expertise, distinct de la vignette. */
  expertiseBanners: Record<ExpertiseKey, VisualSlot>;
} = {
  hero: { kind: "photo", photo: photos.altea },
  overview: { kind: "photo", photo: photos.cassis },
  detail: { kind: "photo", photo: photos.balconPierre },
  portrait: null,
  approach: { kind: "photo", photo: photos.plumeOr },
  partners: { kind: "photo", photo: photos.signature },
  contact: { kind: "photo", photo: photos.styloDossier },
  expertises: {
    bridge: { kind: "photo", photo: photos.terrasseMer },
    complex: { kind: "photo", photo: photos.corniche },
    refinancing: { kind: "photo", photo: photos.parisBalcons },
    acquisition: { kind: "photo", photo: photos.villaCassis },
    development: { kind: "photo", photo: photos.chantierMer },
    privateDebt: { kind: "photo", photo: photos.travertin },
  },
  expertiseBanners: {
    bridge: { kind: "photo", photo: photos.fontvieille },
    complex: { kind: "photo", photo: photos.villeFenetre },
    refinancing: { kind: "photo", photo: photos.parisAngle },
    acquisition: { kind: "photo", photo: photos.rivieraPalmiers },
    development: { kind: "photo", photo: photos.grue },
    privateDebt: { kind: "photo", photo: photos.tourDoree },
  },
};

/** Liste dédoublonnée des crédits, pour la page des mentions légales. */
export const photoCredits: string[] = Array.from(new Set(Object.values(photos).map((p) => p.credit)));
