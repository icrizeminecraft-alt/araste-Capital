# Guide des contenus

## Principes rédactionnels

- Ton précis, calme, assuré, accessible. Phrases courtes ou moyennes, peu de superlatifs. Chaque phrase ajoute une information ; chaque section de l'accueil répond à une question nouvelle (l'analyse détaillée reste dans les pages spécialisées).
- Le fondateur est présenté une seule fois, sur la page du cabinet : nom, fonction exacte, 40 à 60 mots factuels et le moyen d'entrer en relation. Son nom n'est pas répété dans les textes de contact.
- Les étapes de la méthode portent les mêmes libellés sur l'accueil et sur la page Notre approche (vérifié par les tests).
- Aucun renseignement « à compléter » n'est publié : ce qui manque est listé dans `docs/AVANT-PUBLICATION.md`.
- Le cabinet est un conseil et un intermédiaire côté emprunteur : il ne prête pas, ne gère pas d'actifs, ne commercialise pas de fonds, n'assure pas de maîtrise d'ouvrage, ne donne pas de conseil juridique ou fiscal.
- Interdits : « leader », « garanti », « exclusif », « toutes les banques », « en 48 heures », taux, durées, délais, montants, pourcentages, opérations réalisées, clients, partenaires, agréments, témoignages, portraits ou biographies inventés.
- Les situations décrites sont des illustrations pédagogiques et doivent rester présentées comme telles.
- Aucune référence aux marques ayant servi d'inspiration.

## Où modifier quoi

| Élément | Fichier |
| --- | --- |
| Interface, navigation, pied de page, 404 | `src/content/{fr,en}/common.ts` |
| Accueil (ouverture, besoins, valeur du conseil, méthode, conseils, guides, contact) | `src/content/{fr,en}/home.ts` |
| Le cabinet | `src/content/{fr,en}/firm.ts` |
| Index des expertises | `src/content/{fr,en}/expertises-index.ts` |
| Une expertise | `src/content/{fr,en}/expertises/<clé>.ts` |
| Notre approche | `src/content/{fr,en}/approach.ts` |
| Contact et fiche d'opération (étapes, libellés, options, erreurs, résultats) | `src/content/{fr,en}/contact.ts` ; listes de valeurs dans `src/lib/contact/schema.ts` |
| Partenaires indépendants (profils, méthode, engagements, FAQ) | `src/content/{fr,en}/partners.ts` |
| Marchés d'intervention (ligne sous l'ouverture, pied de page, contact) | `siteConfig.locations` dans `src/config/site.ts` ; phrase correspondante dans `legal.ts` |
| Mentions légales, confidentialité | `src/content/{fr,en}/legal.ts`, `privacy.ts` |
| Un repère (guide) | `src/content/{fr,en}/guides/<clé>.ts` |
| Index des repères | `src/content/{fr,en}/guides-index.ts` |
| Questions fréquentes d'une expertise | champ `faq` du fichier de l'expertise |
| Questions fréquentes générales | champ `faq` de `contact.ts` |
| Métadonnées par page | champ `meta` de chaque fichier |

Chaque fichier est typé par `src/content/types.ts`. Les deux langues doivent rester équivalentes : même nombre d'éléments, mêmes idées.

## Typographie française

Écrire normalement (`Titre : texte`, `« relais »`) ; les espaces insécables sont ajoutées au chargement (`src/lib/typography.ts`). Utiliser les guillemets « » en français et “ ” en anglais.

## Ajouter un repère (guide)

1. Ajouter la clé dans `guideKeys` et ses slugs FR/EN dans `guideSlugs` (`src/config/routes.ts`).
2. Créer `src/content/fr/guides/<clé>.ts` et `src/content/en/guides/<clé>.ts` (type `GuideContent` : 4 à 6 sections, 3 à 5 points à retenir, expertises et guides liés).
3. Les importer dans `src/content/index.ts`. Les guides n'ont ni date ni auteur nommé : ce sont des repères évolutifs, pas des actualités.

## Ajouter une expertise

1. Ajouter la clé dans `expertiseKeys` et ses slugs FR/EN dans `expertiseSlugs` (`src/config/routes.ts`).
2. Créer `src/content/fr/expertises/<clé>.ts` et `src/content/en/expertises/<clé>.ts` (type `ExpertiseContent`).
3. Les importer dans `src/content/index.ts`.
4. Déclarer son visuel dans `src/config/images.ts` et l'activer dans `src/config/site.ts`.
