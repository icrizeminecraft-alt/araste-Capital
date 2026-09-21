# Visuels : sources, droits et remplacement

## État livré

Aucune photographie tierce n'est incluse. Les banques d'images n'étaient pas accessibles depuis l'environnement de réalisation et aucune licence ne doit être supposée. Chaque emplacement visuel est servi par une **composition architecturale originale en SVG** (`src/components/visuals/ArchitecturalPlate.tsx`), créée pour le projet et libre de droits tiers :

| Composition | Usage par défaut | Évocation |
| --- | --- | --- |
| `arcade` | ouverture de l'accueil | arcades de pierre claire ouvrant sur la mer |
| `vault` | mise en avant du financement relais, page relais | voûte franchissant un vide vers la lumière |
| `colonnade` | refinancement | rythme régulier de colonnes |
| `facade` | cabinet, acquisition immobilière | élévation rythmée par ses ouvertures |
| `stair` | approche, promotion immobilière | escalier montant vers la lumière |
| `cornice` | financements complexes | moulures superposées |
| `horizon` | dette privée | balustrade ouverte sur l'horizon marin |

Toutes sont décoratives par défaut (`aria-hidden`) sauf l'ouverture de l'accueil, qui porte un texte alternatif. Aucune n'est présentée comme un actif financé ou comme les bureaux du cabinet ; la légende de l'accueil le rappelle.

## Remplacer par une photographie

1. Vérifier les droits : auteur, licence (usage commercial, modification, attribution), durée, territoires. Conserver la preuve (facture ou licence) hors du dépôt.
2. Préparer le fichier : JPEG ou AVIF, largeur 2400 px maximum pour l'ouverture, 1600 px pour les autres emplacements, poids raisonnable. Le déposer dans `public/images/`.
3. Déclarer l'emplacement dans `src/config/images.ts` :

```ts
hero: {
  kind: "photo",
  photo: {
    src: "/images/ouverture.jpg",
    width: 2400,
    height: 3000,
    focal: { x: 40, y: 50 },              // point focal en %, utilisé pour le recadrage
    alt: { fr: "…", en: "…" },            // description factuelle, sans mention d'un actif financé
    caption: { fr: "…", en: "…" },        // facultatif
    credit: "Photographe — licence — référence",
  },
},
```

4. Les composants (`Visual`) chargent alors l'image via `next/image` (formats AVIF/WebP, tailles adaptées, priorité sur l'ouverture uniquement).

## Règles éditoriales

- Pierre claire, lignes architecturales, lumière méditerranéenne : pas d'imagerie hôtelière ou touristique, pas de poignées de main, voitures, jets ou graphiques boursiers.
- Ne jamais utiliser les photographies, logos ou signes distinctifs d'un tiers (établissements, concurrents, hôtels) sans droits explicites.
- Une photographie d'illustration reste une illustration : la légende ne doit jamais laisser entendre qu'il s'agit d'une opération conseillée ou des locaux du cabinet.
