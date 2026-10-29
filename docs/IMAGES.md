# Visuels : sources, droits et remplacement

## État livré

Chaque emplacement visuel est servi par une **photographie d'illustration** importée depuis Unsplash sous licence Unsplash (utilisation libre, y compris commerciale, sans attribution obligatoire ; seules les photos gratuites `images.unsplash.com` sont admises, jamais les photos Unsplash+ `plus.unsplash.com`). Les crédits figurent dans `src/config/images.ts` et dans les mentions légales.

| Fichier (`public/images/`) | Usage | Évocation |
| --- | --- | --- |
| `residences-mer` (+ `-portrait` pour les petits écrans) | ouverture de l'accueil | arcades de pierre claire sur la Méditerranée, ciel calme pour le titre |
| `paris-balcons` | moment fort du financement relais (accueil) | immeuble parisien aux balcons ouvragés |
| portrait du fondateur (à livrer) | accueil et page du cabinet | tant qu'il n'est pas livré, le monogramme tient sa place |
| `plume-or` | approche | plume dorée d'un stylo noir |
| `accord` | partenaires | poignée de main dans la pénombre |
| `stylo-dossier` | contact | stylo sur une pile de documents |
| `villa-crepuscule`, `corniche`, `paris-lumiere`, `riviera-immeuble`, `chantier-crepuscule`, `tour-couchant` | vignettes des expertises (accueil, page des expertises) | relais, complexes, refinancement, acquisition, promotion, dette privée |
| `fontvieille`, `ville-fenetre`, `paris-angle`, `riviera-palmiers`, `grue`, `tour-doree` | bandeaux des pages d'expertise | une seconde image par expertise, jamais la même que la vignette |
| `andorre`, `londres`, `monaco-crepuscule`, `emirats` | marchés (accueil) | une vue par place |

Chaque photographie n'apparaît qu'à un seul emplacement du site (les vignettes d'expertise sont reprises à l'identique entre l'accueil et la page des expertises). Le portrait du fondateur se déclare dans `visuals.portrait` une fois la photographie déposée dans `public/images/` (voir plus bas).

Les compositions architecturales originales en SVG (`src/components/visuals/ArchitecturalPlate.tsx`, `public/plates/`) restent disponibles comme solution de repli (`kind: "plate"`).

Aucune photographie n'est présentée comme un actif financé ou comme les bureaux du cabinet ; les mentions légales le rappellent (aucune légende sur les pages).

## Importer ou changer une photographie

1. Ajouter une ligne à `outils/photos.txt` : nom de fichier, identifiant Unsplash, URL de base (`https://images.unsplash.com/photo-…`, sans paramètres) et largeurs souhaitées.
2. Pousser : le workflow `.github/workflows/import-photos.yml` télécharge chaque largeur en JPEG (`public/images/<nom>-<largeur>.jpg`) et commet les fichiers sur la branche. `public/images/dimensions.txt` donne les dimensions réelles.
3. Déclarer la photographie dans `src/config/images.ts` (`photos`), puis l'affecter à un emplacement (`visuals`) avec son point focal, son texte alternatif et, s'il y a lieu, sa légende.

Pour trier des candidats, `outils/candidats-images.txt` et le workflow `candidats-images.yml` produisent des planches-contact sur la branche `candidats-images`.

## Utiliser une photographie d'une autre source

1. Vérifier les droits : auteur, licence (usage commercial, modification, attribution), durée, territoires. Conserver la preuve (facture ou licence) hors du dépôt.
2. Préparer le fichier : JPEG ou AVIF, largeur 2400 px maximum pour l'ouverture, 1600 px pour les autres emplacements, poids raisonnable. Le déposer dans `public/images/`.
3. Produire les variantes de largeur (`<nom>-<largeur>.jpg`) et les déclarer dans `src/config/images.ts` :

```ts
ouverture: {
  base: "ouverture",                    // fichiers public/images/ouverture-960.jpg, -1600, -2400
  widths: [960, 1600, 2400],
  width: 2400, height: 3000,            // dimensions du plus grand fichier
  focal: { x: 40, y: 50 },              // point focal en %, utilisé pour le recadrage
  alt: { fr: "…", en: "…" },            // description factuelle, sans mention d'un actif financé
  caption: { fr: "…", en: "…" },        // facultatif
  credit: "Photographe — licence — référence",
},
```

4. Le composant `Visual` sert alors l'image avec `srcset` et `sizes` (export statique : aucune optimisation au vol).

## Règles éditoriales

- Pierre claire, lignes architecturales, lumière méditerranéenne : pas d'imagerie hôtelière ou touristique, pas de poignées de main, voitures, jets ou graphiques boursiers.
- Ne jamais utiliser les photographies, logos ou signes distinctifs d'un tiers (établissements, concurrents, hôtels) sans droits explicites.
- Une photographie d'illustration reste une illustration : la légende ne doit jamais laisser entendre qu'il s'agit d'une opération conseillée ou des locaux du cabinet.
