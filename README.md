# ARASTE CAPITAL — site

Site d'ARASTE CAPITAL LTD, boutique indépendante de conseil et d'intermédiation en financements professionnels. Bilingue (français par défaut, anglais complet), responsive, accessible, sans traceur.

> **État : préproduction.** Le site est livré non indexable (`SITE_INDEXABLE=false`) et le formulaire fonctionne en mode démonstration tant qu'aucun fournisseur d'envoi n'est configuré. Voir `docs/AVANT-PUBLICATION.md` pour la liste des éléments à renseigner et valider.

## Direction créative

Ivoire chaud dominant, vert forêt profond pour les moments importants, champagne patiné pour les détails. Deux familles typographiques auto-hébergées sous licence OFL : **Cormorant** (titres) et **DM Sans** (texte et interface). Les visuels sont des compositions architecturales originales en SVG (arcades, colonnade, voûte, escalier, façade, corniche, balustrade), remplaçables par des photographies une fois les droits vérifiés. Logotype typographique et monogramme « A » (arche et tablier de laiton) en SVG, déclinés clair/sombre, favicon et icône Apple.

## Pile technique

- Next.js 16 (App Router, composants serveur, `proxy.ts`), React 19, TypeScript strict
- Tailwind CSS 4 (jetons de design dans `src/app/globals.css`)
- Zod pour la validation partagée client/serveur
- Vitest (tests unitaires) et Playwright + axe-core (tests de bout en bout et accessibilité)
- Aucune dépendance d'animation : transitions CSS, `prefers-reduced-motion` respecté

## Installation et lancement

```bash
npm install
cp .env.example .env.local     # facultatif en développement
npm run dev                    # http://localhost:3000 → redirige vers /fr
```

Production :

```bash
npm run build
npm run start
```

## Vérifications

```bash
npm run typecheck   # TypeScript strict
npm run lint        # ESLint (config Next core-web-vitals + TypeScript)
npm run test        # Vitest : typographie, routes, schéma et protections du formulaire
npm run test:e2e    # Playwright : navigation, 404, langues, menu mobile, formulaire, axe-core, zoom 200 %
npm run check       # typecheck + lint + test
```

Les tests de bout en bout construisent puis démarrent le site sur le port 3100 en mode démonstration. Si Playwright ne peut pas télécharger Chromium, indiquez un exécutable existant : `PLAYWRIGHT_CHROMIUM_EXECUTABLE=/chemin/vers/chromium npm run test:e2e`. Les tests utilisent uniquement des données fictives et ne peuvent déclencher aucun envoi réel.

## Arborescence

```
src/
  app/
    [locale]/                 layout racine (html lang, polices, en-tête, pied de page)
      page.tsx                accueil
      [section]/page.tsx      cabinet, expertises, approche, contact, mentions légales, confidentialité
      [section]/[slug]/       pages d'expertise
      [...rest]/              404 localisée
      opengraph-image.tsx     aperçu de partage FR/EN généré à la construction
      error.tsx, not-found.tsx
    api/contact/route.ts      réception du formulaire (validation, jeton, débit, envoi)
    sitemap.ts, robots.ts, manifest.ts, icon.svg, apple-icon.png
  components/
    brand/                    Wordmark, Monogram
    layout/                   Header, MobileMenu, LocaleSwitcher, Footer
    home/                     sections de l'accueil
    pages/                    pages intérieures
    contact/ContactForm.tsx   formulaire en deux étapes
    visuals/                  compositions SVG et emplacement visuel
    ui/                       éléments réutilisables
  content/
    types.ts                  structure des contenus
    fr/, en/                  dictionnaires (une page par fichier, une expertise par fichier)
    index.ts                  chargement + typographie française automatique
  config/
    site.ts                   marque, champs à confirmer, activation des expertises, montants cibles
    routes.ts                 slugs localisés FR/EN
    images.ts                 registre des visuels (point focal, textes alternatifs, droits)
  lib/
    contact/                  schéma, jeton signé, limitation de débit, fournisseurs
    i18n.ts, metadata.ts, typography.ts
  proxy.ts                    redirection vers la langue (/ → /fr ou /en)
docs/                         images, contenus, liste avant publication
tests/, e2e/                  tests unitaires et de bout en bout
```

## Modifier les contenus

- Textes : `src/content/fr/*.ts` et `src/content/en/*.ts`. Chaque fichier est typé (`src/content/types.ts`) ; une clé manquante fait échouer la compilation. Les espaces insécables françaises sont ajoutées automatiquement.
- Expertises : activer ou désactiver dans `src/config/site.ts` (`expertises`), ordre dans `expertiseOrder`. Une expertise désactivée disparaît de la navigation, des listes, du sitemap et renvoie une 404.
- Montants cibles (5 M€ et plus) : `siteConfig.ticketSize.enabled`, désactivé par défaut tant qu'ils ne sont pas validés.
- Coordonnées et informations légales : `siteConfig.toConfirm`. Vides par défaut, ils ne sont jamais inventés ; les pages légales affichent les champs restants comme « à compléter ».
- Visuels : `src/config/images.ts` et `docs/IMAGES.md`.
- Slugs : `src/config/routes.ts` (le sélecteur de langue et le sitemap en dépendent).

## Formulaire de contact

Deux étapes (opération, puis coordonnées), données conservées en mémoire lors du retour, aucun stockage navigateur, URL ou analytics. Côté serveur : validation Zod, limite de taille (16 Ko), jeton signé HMAC (envoi refusé avant 3 s ou après 24 h), pot de miel, limitation de débit par empreinte salée de l'adresse IP, prévention des doubles envois par clé d'idempotence, journaux sans contenu.

Fournisseurs (`CONTACT_PROVIDER`) :

| Valeur | Comportement |
| --- | --- |
| `none` (défaut) | Mode démonstration : le formulaire annonce clairement qu'aucun message n'a été envoyé. Jamais de faux succès. |
| `resend` | Envoi par l'API Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). |
| `webhook` | POST JSON vers `CONTACT_WEBHOOK_URL`, jeton Bearer facultatif (`CONTACT_WEBHOOK_TOKEN`). |

En production, définir `CONTACT_FORM_SECRET`. La limitation de débit et l'idempotence sont en mémoire par processus : sur une plateforme à plusieurs instances ou fonctions éphémères, les remplacer par un magasin partagé (Redis, KV) dans `src/lib/contact/rate-limit.ts`.

## Indexation et URL

- `NEXT_PUBLIC_SITE_URL` : active les URL canoniques, les balises `hreflang`, le sitemap et les aperçus de partage absolus.
- `SITE_INDEXABLE=true` : retire `noindex` (balise, en-tête `X-Robots-Tag`) et ouvre `robots.txt`. À n'activer qu'après validation des éléments légaux. `noindex` n'est pas une protection d'accès : pour une préproduction confidentielle, ajouter une authentification au niveau de l'hébergeur.
- Les données structurées (`Organization`) ne contiennent que des faits confirmés.

## Ce qui a été vérifié

- `npm run typecheck`, `npm run lint`, `npm run test` (28 tests unitaires) et `npm run build` : passés.
- Tests de bout en bout Playwright (Chromium) à 1440, 768 et 390 px : navigation et liens internes, 404 localisée, sélecteur de langue, menu mobile au clavier, parcours complet du formulaire en mode démonstration, refus de l'API (jeton, pot de miel, taille), axe-core WCAG 2.x A/AA, texte à 200 %, `prefers-reduced-motion`.
- Inspection visuelle des captures d'écran aux trois largeurs.

Non vérifié : Firefox et Safari réels, Lighthouse (aucun score n'est avancé), lecteurs d'écran réels, envoi avec un fournisseur configuré.

## Licences

Cormorant et DM Sans : SIL Open Font License 1.1 (`src/assets/fonts/`). Compositions visuelles, logotype et monogramme : créations originales livrées avec le projet.
