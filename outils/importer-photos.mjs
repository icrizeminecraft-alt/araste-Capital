// Import des photographies listées dans outils/photos.txt.
//
// Pour chaque ligne, une seule descente depuis Unsplash à la plus grande largeur
// demandée (recadrage par Unsplash lorsqu'un ratio et un point focal sont
// indiqués), puis production locale de toutes les largeurs en AVIF et en JPEG.
// Les dimensions réellement obtenues sont consignées dans
// public/images/manifest.json : une largeur annoncée correspond toujours à un
// fichier qui l'a réellement. Exécuté par .github/workflows/import-photos.yml
// (Node 22, dépendance `sharp` installée à la volée).

import { createRequire } from "node:module";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

// `sharp` est installé par le workflow dans outils/.deps (hors du projet).
const require = createRequire(new URL("./.deps/package.json", import.meta.url));
const sharp = require("sharp");

const racine = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const liste = path.join(racine, "outils", "photos.txt");
const dossier = path.join(racine, "public", "images");

const JPEG = { quality: 80, progressive: true, mozjpeg: true };
const AVIF = { quality: 56, effort: 5 };

function lireListe(texte) {
  return texte
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#") && l.includes("|"))
    .map((l) => {
      const [nom, id, url, largeurs, ratio, fpx, fpy] = l.split("|").map((c) => c.trim());
      return {
        nom,
        id,
        url,
        largeurs: largeurs.split(",").map((w) => Number(w.trim())).filter(Boolean).sort((a, b) => a - b),
        ratio: ratio || null,
        fpx: fpx ? Number(fpx) : 0.5,
        fpy: fpy ? Number(fpy) : 0.5,
      };
    });
}

function urlSource(entree) {
  const max = entree.largeurs[entree.largeurs.length - 1];
  const params = new URLSearchParams({ w: String(max), q: "90", fm: "jpg" });
  if (entree.ratio) {
    const [rw, rh] = entree.ratio.split(":").map(Number);
    params.set("h", String(Math.round((max * rh) / rw)));
    params.set("fit", "crop");
    params.set("crop", "focalpoint");
    params.set("fp-x", String(entree.fpx));
    params.set("fp-y", String(entree.fpy));
  } else {
    params.set("fit", "max");
  }
  return `${entree.url}?${params.toString()}`;
}

async function telecharger(url) {
  for (let essai = 1; essai <= 3; essai++) {
    try {
      const reponse = await fetch(url, { headers: { Accept: "image/jpeg,image/*" } });
      if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
      return Buffer.from(await reponse.arrayBuffer());
    } catch (erreur) {
      if (essai === 3) throw erreur;
      await new Promise((r) => setTimeout(r, 1500 * essai));
    }
  }
  throw new Error("inatteignable");
}

const journal = [];
const dire = (ligne) => {
  journal.push(ligne);
  console.log(ligne);
};

await mkdir(dossier, { recursive: true });
const entrees = lireListe(await readFile(liste, "utf8"));
const manifest = {};
const produits = new Set();

for (const entree of entrees) {
  const source = urlSource(entree);
  let original;
  try {
    original = await telecharger(source);
  } catch (erreur) {
    dire(`échec ${entree.nom} : ${erreur.message}`);
    continue;
  }
  const meta = await sharp(original).metadata();
  const largeurReelle = meta.width ?? 0;
  const hauteurReelle = meta.height ?? 0;
  if (!largeurReelle || !hauteurReelle) {
    dire(`échec ${entree.nom} : dimensions illisibles`);
    continue;
  }
  // Largeurs réellement disponibles : jamais au-delà des pixels reçus.
  const largeurs = entree.largeurs.filter((w) => w < largeurReelle);
  largeurs.push(largeurReelle);
  const demandee = entree.largeurs[entree.largeurs.length - 1];
  if (largeurReelle < demandee) {
    dire(`note  ${entree.nom} : ${demandee} px demandés, ${largeurReelle} px reçus (largeurs ajustées)`);
  }
  let hauteurMax = hauteurReelle;
  for (const w of largeurs) {
    const base = sharp(original).resize({ width: w, withoutEnlargement: true });
    const jpg = path.join(dossier, `${entree.nom}-${w}.jpg`);
    const avif = path.join(dossier, `${entree.nom}-${w}.avif`);
    const infoJpg = await base.clone().jpeg(JPEG).toFile(jpg);
    const infoAvif = await base.clone().avif(AVIF).toFile(avif);
    produits.add(path.basename(jpg));
    produits.add(path.basename(avif));
    if (w === largeurReelle) hauteurMax = infoJpg.height;
    dire(`ok    ${entree.nom}-${w} : ${infoJpg.width}×${infoJpg.height}, jpg ${Math.round(infoJpg.size / 1024)} ko, avif ${Math.round(infoAvif.size / 1024)} ko`);
  }
  manifest[entree.nom] = { id: entree.id, widths: largeurs, width: largeurReelle, height: hauteurMax };
}

// Nettoyage : seuls les fichiers de la liste restent dans public/images.
for (const fichier of await readdir(dossier)) {
  if (/\.(jpg|avif)$/.test(fichier) && !produits.has(fichier)) {
    await rm(path.join(dossier, fichier));
    dire(`retiré ${fichier}`);
  }
}
for (const ancien of ["dimensions.txt", "journal-import.txt"]) {
  await rm(path.join(dossier, ancien), { force: true });
}

await writeFile(path.join(dossier, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
await writeFile(path.join(dossier, "journal-import.txt"), `${journal.join("\n")}\n`);
dire(`manifest : ${Object.keys(manifest).length} photographies`);
