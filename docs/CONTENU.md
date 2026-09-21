# Guide des contenus

## Principes rédactionnels

- Ton précis, calme, assuré, accessible. Phrases courtes ou moyennes, peu de superlatifs.
- Le cabinet est un conseil et un intermédiaire côté emprunteur : il ne prête pas, ne gère pas d'actifs, ne commercialise pas de fonds, n'assure pas de maîtrise d'ouvrage, ne donne pas de conseil juridique ou fiscal.
- Interdits : « leader », « garanti », « exclusif », « toutes les banques », « en 48 heures », taux, durées, délais, montants, pourcentages, opérations réalisées, clients, partenaires, agréments, témoignages, portraits ou biographies inventés.
- Les situations décrites sont des illustrations pédagogiques et doivent rester présentées comme telles.
- Aucune référence aux marques ayant servi d'inspiration.

## Où modifier quoi

| Élément | Fichier |
| --- | --- |
| Interface, navigation, pied de page, 404 | `src/content/{fr,en}/common.ts` |
| Accueil (toutes sections) | `src/content/{fr,en}/home.ts` |
| Le cabinet | `src/content/{fr,en}/firm.ts` |
| Index des expertises | `src/content/{fr,en}/expertises-index.ts` |
| Une expertise | `src/content/{fr,en}/expertises/<clé>.ts` |
| Notre approche | `src/content/{fr,en}/approach.ts` |
| Contact et formulaire (libellés, erreurs, résultats) | `src/content/{fr,en}/contact.ts` |
| Mentions légales, confidentialité | `src/content/{fr,en}/legal.ts`, `privacy.ts` |
| Métadonnées par page | champ `meta` de chaque fichier |

Chaque fichier est typé par `src/content/types.ts`. Les deux langues doivent rester équivalentes : même nombre d'éléments, mêmes idées.

## Typographie française

Écrire normalement (`Titre : texte`, `« relais »`) ; les espaces insécables sont ajoutées au chargement (`src/lib/typography.ts`). Utiliser les guillemets « » en français et “ ” en anglais.

## Ajouter une expertise

1. Ajouter la clé dans `expertiseKeys` et ses slugs FR/EN dans `expertiseSlugs` (`src/config/routes.ts`).
2. Créer `src/content/fr/expertises/<clé>.ts` et `src/content/en/expertises/<clé>.ts` (type `ExpertiseContent`).
3. Les importer dans `src/content/index.ts`.
4. Déclarer son visuel dans `src/config/images.ts` et l'activer dans `src/config/site.ts`.
