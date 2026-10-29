# Visuels : sources, droits et remplacement

## État livré

Chaque emplacement visuel est servi par une **photographie d'illustration** importée depuis Unsplash sous licence Unsplash (utilisation libre, y compris commerciale, sans attribution obligatoire ; seules les photos gratuites `images.unsplash.com` sont admises, jamais les photos Unsplash+ `plus.unsplash.com`). Les crédits figurent dans `src/config/images.ts` et dans les mentions légales.

L'accueil se limite à trois images, de la même famille de lumière (lumière douce, pierre claire, Méditerranée) ; les autres visuels sont réservés aux pages spécialisées.

| Fichiers (`public/images/`) | Usage | Évocation |
| --- | --- | --- |
| `altea` (cadrage 4:3, petits écrans) et `altea-portrait` (4:5, grand écran) | ouverture de l'accueil | balcons d'une résidence blanche sur une mer calme, au crépuscule |
| `cassis` (3:2) et `cassis-large` (21:9, grand écran) | vue d'ensemble (accueil, avant « La valeur du conseil ») | villas de pierre claire sur la côte |
| `pierre-ombre` (4:5) | détail architectural (accueil, « Vos conseils ») | ombres de feuillage sur un mur de pierre claire |
| portrait du fondateur (à livrer) | page du cabinet | tant qu'il n'est pas livré, le module se présente sans image |
| `plume-or` | approche | plume dorée d'un stylo noir |
| `accord` | partenaires | poignée de main dans la pénombre |
| `stylo-dossier` | contact | stylo sur une pile de documents |
| `villa-crepuscule`, `corniche`, `paris-balcons`, `villa-cassis`, `chantier-mer`, `travertin` | vignettes de la page des expertises | relais, complexes, refinancement, acquisition, promotion, dette privée |
| `fontvieille`, `ville-fenetre`, `paris-angle`, `riviera-palmiers`, `grue`, `tour-doree` | bandeaux des pages d'expertise | une seconde image par expertise, jamais la même que la vignette |

Chaque photographie n'apparaît qu'à un seul emplacement du site. Le portrait du fondateur se déclare dans `visuals.portrait` une fois la photographie déposée dans `public/images/` (voir plus bas).

Les compositions architecturales originales en SVG (`src/components/visuals/ArchitecturalPlate.tsx`, `public/plates/`) restent disponibles comme solution de repli (`kind: "plate"`).

Aucune photographie n'est présentée comme un actif financé ou comme les bureaux du cabinet ; les mentions légales le rappellent (aucune légende sur les pages).

## Formats et dimensions réelles

Chaque largeur existe en AVIF et en JPEG (`<nom>-<largeur>.avif`, `<nom>-<largeur>.jpg`). Le composant `Visual` rend un seul élément `picture` par emplacement : sources AVIF puis JPEG, et, pour les recadrages conditionnels (`variants`), une paire de sources par requête de média. Un seul fichier est téléchargé, celui qui correspond à l'écran ; l'image d'ouverture est la seule chargée en priorité.

Les largeurs et dimensions déclarées viennent de `public/images/manifest.json`, écrit par l'import à partir des pixels réellement reçus : une largeur annoncée correspond toujours à un fichier qui l'a. Si Unsplash fournit moins de pixels que demandé, l'import le note dans `public/images/journal-import.txt` et ajuste les largeurs ; rien n'est agrandi artificiellement.

## Importer ou changer une photographie

1. Ajouter une ligne à `outils/photos.txt` : nom de fichier, identifiant Unsplash, URL de base (`https://images.unsplash.com/photo-…`, sans paramètres), largeurs souhaitées et, pour un recadrage, le ratio et le point focal (`4:5 | 0.5 | 0.45`).
2. Pousser : le workflow `.github/workflows/import-photos.yml` exécute `outils/importer-photos.mjs`, qui télécharge une seule fois chaque photographie à sa plus grande largeur, produit toutes les variantes (AVIF et JPEG) avec `sharp`, écrit `manifest.json` et commet le tout sur la branche. Les fichiers absents de la liste sont retirés.
3. Déclarer la photographie dans `src/config/images.ts` (`photos`, avec `files("<nom>")` pour les dimensions), puis l'affecter à un emplacement (`visuals`) avec son point focal, son texte alternatif et son crédit.

Pour trier des candidats, `outils/candidats-images.txt` et le workflow `candidats-images.yml` produisent des planches-contact sur la branche `candidats-images`.

## Utiliser une photographie d'une autre source

1. Vérifier les droits : auteur, licence (usage commercial, modification, attribution), durée, territoires. Conserver la preuve (facture ou licence) hors du dépôt.
2. Déposer l'original dans un dossier hors du dépôt, puis l'ajouter à `outils/photos.txt` avec une URL accessible au workflow, ou produire les variantes avec `sharp` de la même manière que l'import (AVIF et JPEG, mêmes noms) et compléter `manifest.json` à la main avec les dimensions réelles.
3. Déclarer la photographie dans `src/config/images.ts` :

```ts
ouverture: {
  ...files("ouverture"),                // dimensions réelles, d'après manifest.json
  focal: { x: 40, y: 50 },              // point focal en %, pour object-position
  alt: { fr: "…", en: "…" },            // description factuelle, sans mention d'un actif financé
  credit: "Photographe — licence — référence",
  variants: [variant("ouverture-portrait", "(min-width: 64rem)")], // recadrage conditionnel, facultatif
},
```

4. Le composant `Visual` sert alors l'image avec `srcset` et `sizes` (export statique : aucune optimisation au vol).

## Règles éditoriales

- Une série, pas une collection : même famille de lumière, température de couleur proche, retouche retenue.
- Pierre claire, lignes architecturales, lumière méditerranéenne : pas d'imagerie hôtelière ou touristique, pas de voitures, jets ou graphiques boursiers ; aucune enseigne ni logo de commerce.
- Ne jamais utiliser les photographies, logos ou signes distinctifs d'un tiers (établissements, concurrents, hôtels) sans droits explicites.
- Une photographie d'illustration reste une illustration : rien ne doit laisser entendre qu'il s'agit d'une opération conseillée ou des locaux du cabinet.
