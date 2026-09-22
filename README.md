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
npm run test        # Vitest : typographie, routes, schéma et protections du formulaire, fiche (texte, HTML, PDF)
npm run test:e2e    # Playwright : navigation, 404, langues, menu mobile, formulaire, axe-core, zoom 200 %
npm run check       # typecheck + lint + test
```

Les tests de bout en bout construisent puis démarrent le site sur le port 3100 en mode démonstration (`CONTACT_PROVIDER=none`), et n'utilisent que des données fictives. Un serveur déjà lancé sur ce port n'est réutilisé qu'avec `PLAYWRIGHT_REUSE_SERVER=1`, pour ne jamais tester contre un déploiement relié à un vrai fournisseur. Si Playwright ne peut pas télécharger Chromium, indiquez un exécutable existant : `PLAYWRIGHT_CHROMIUM_EXECUTABLE=/chemin/vers/chromium npm run test:e2e`.

## Arborescence

```
src/
  app/
    [locale]/                 layout racine (html lang, polices, en-tête, pied de page)
      page.tsx                accueil
      [section]/page.tsx      cabinet, expertises, approche, repères, partenaires, contact, mentions légales, confidentialité
      [section]/[slug]/       pages d'expertise et repères (guides), aperçu de partage par page
      [...rest]/              404 localisée
      opengraph-image.tsx     aperçu de partage FR/EN généré à la construction
      error.tsx, not-found.tsx
    api/contact/route.ts      réception de la fiche d'opération (validation, jeton, débit, envoi)
    sitemap.ts, robots.ts, manifest.ts, icon.svg, apple-icon.png
  components/
    brand/                    Wordmark, Monogram
    layout/                   Header, MobileMenu, LocaleSwitcher, Footer, LocalClocks (heure des implantations)
    home/                     sections de l'accueil
    pages/                    pages intérieures
    contact/ContactForm.tsx   fiche d'opération en quatre étapes, avec récapitulatif avant envoi
    visuals/                  compositions SVG (source) et emplacement visuel ; fichiers statiques dans public/plates
    seo/                      données structurées (faits confirmés seulement)
    ui/                       éléments réutilisables
  instrumentation.ts        avertissements de configuration au démarrage (production)
  content/
    types.ts                  structure des contenus
    fr/, en/                  dictionnaires (une page par fichier, une expertise par fichier, un guide par fichier)
    index.ts                  chargement + typographie française automatique
  config/
    site.ts                   marque, champs à confirmer, implantations, activation des expertises, montants cibles
    routes.ts                 slugs localisés FR/EN
    images.ts                 registre des visuels (point focal, textes alternatifs, droits)
  lib/
    contact/                  schéma, jeton signé, limitation de débit, fournisseurs, fiche PDF (pdf-lib)
    i18n.ts, metadata.ts, typography.ts
  proxy.ts                    redirection vers la langue (/ → /fr ou /en)
docs/                         images, contenus, liste avant publication
scripts/render-icons.mjs      génération de l'icône Apple depuis le SVG
scripts/render-plates.mts     génération des planches SVG statiques (npm run plates)
tests/, e2e/                  tests unitaires et de bout en bout
```

## Modifier les contenus

- Textes : `src/content/fr/*.ts` et `src/content/en/*.ts`. Chaque fichier est typé (`src/content/types.ts`) ; une clé manquante fait échouer la compilation. Les espaces insécables françaises sont ajoutées automatiquement.
- Expertises : activer ou désactiver dans `src/config/site.ts` (`expertises`), ordre dans `expertiseOrder`. Une expertise désactivée disparaît de la navigation, des listes, du sitemap et renvoie une 404.
- Montants cibles (5 M€ et plus) : `siteConfig.ticketSize.enabled`, désactivé par défaut tant qu'ils ne sont pas validés.
- Coordonnées affichées (pied de page, contact, données structurées) : `siteConfig.toConfirm`. Vides par défaut, elles ne sont jamais inventées. Les informations légales (immatriculation, siège, statut, hébergeur, responsable du traitement, conservation) se renseignent directement dans `src/content/{fr,en}/legal.ts` et `privacy.ts`, dont les blocs « à compléter » disparaissent une fois les textes rédigés.
- Repères (guides) : `src/content/{fr,en}/guides/<clé>.ts`, clés et slugs dans `src/config/routes.ts` (`guideKeys`, `guideSlugs`). Chaque expertise porte aussi ses questions fréquentes (`faq`), la page contact les siennes.
- Visuels : `src/config/images.ts` et `docs/IMAGES.md`. Après modification d'une composition SVG, régénérer les fichiers statiques avec `npm run plates` (commités).
- Implantations (Andorre, Londres, Monaco, Émirats arabes unis) : `siteConfig.locations`. Les noms et fuseaux horaires sont affichés (accueil, contact, pied de page) ; les adresses (`addressLines`) sont vides par défaut et n'apparaissent qu'une fois renseignées. Ne rien inventer.
- Espace partenaires (apporteurs, courtiers, conseils) : `src/content/{fr,en}/partners.ts` ; la fiche d'opération demande à chacun en quelle qualité il la présente.
- Slugs : `src/config/routes.ts` (le sélecteur de langue et le sitemap en dépendent).

## Fiche d'opération (formulaire de contact)

Le formulaire est une fiche en quatre étapes : l'opération (nature, objet, montant, pays, délai, descriptif), l'actif (type, localisation, valeur et base de valeur, revenus, état), la structure et la sortie (entité emprunteuse, pays, fonds propres, dette existante, garanties, sortie et horizon), puis les coordonnées et la qualité du demandeur (emprunteur, apporteur, conseil). Un récapitulatif précède l'envoi, chaque section étant modifiable. Les champs marqués facultatifs peuvent rester vides ; les montants facultatifs doivent rester numériques. Données conservées en mémoire lors des retours, aucun stockage navigateur, URL ou analytics. Sans JavaScript, un message l'indique et renvoie aux coordonnées de la page.

Le cabinet reçoit la fiche complète : un courriel (texte et HTML, libellés du site, langue de la demande) accompagné d'un PDF A4 « Fiche d'opération » généré côté serveur (`src/lib/contact/pdf.ts`, polices du site). Avec le fournisseur `webhook`, le PDF est transmis en base64 dans le JSON (`pdf.base64`). Rien n'est conservé sur le serveur après l'envoi.

Côté serveur (`src/app/api/contact/route.ts`) :

- validation Zod partagée avec le client, caractères de contrôle neutralisés dans les champs monolignes ;
- corps lu en flux et plafonné à 24 Ko (octets), quel que soit l'en-tête Content-Length ;
- jeton signé HMAC émis au rendu de la page (envoi refusé avant 3 s ou après 24 h) ;
- pot de miel : un champ caché rempli déclenche une réponse neutre, sans envoi ni indice ;
- limitation de débit par empreinte salée de l'adresse IP : `TRUSTED_PROXY_HOPS` définit quel mandataire de la chaîne X-Forwarded-For est de confiance, `TRUSTED_IP_HEADER` désigne un en-tête d'hébergeur lu en priorité ; les en-têtes non configurés sont ignorés et, sans adresse fiable, un compartiment partagé à limite élargie s'applique ;
- clé d'idempotence contre les doubles envois, libérée si le fournisseur échoue afin qu'un nouvel essai reste possible ;
- refus des requêtes déclarées inter-sites (`Sec-Fetch-Site`) et des expertises désactivées, journaux sans contenu ;
- courriel ou webhook rédigé dans la langue de la demande, avec les libellés du site plutôt que les codes internes.

Fournisseurs (`CONTACT_PROVIDER`) :

| Valeur | Comportement |
| --- | --- |
| `none` (défaut) | Mode démonstration : le formulaire annonce clairement qu'aucun message n'a été envoyé. Jamais de faux succès. |
| `resend` | Envoi par l'API Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). |
| `webhook` | POST JSON vers `CONTACT_WEBHOOK_URL`, jeton Bearer facultatif (`CONTACT_WEBHOOK_TOKEN`). |

Replis à connaître :

- sans `CONTACT_FORM_SECRET`, un secret éphémère par processus est utilisé : suffisant en développement, incompatible avec plusieurs instances (jetons rejetés aléatoirement). Définir une valeur d'au moins 32 caractères en production ;
- si `CONTACT_PROVIDER` vaut `resend` ou `webhook` mais que sa configuration est incomplète, le formulaire retombe en mode démonstration et l'annonce ;
- ces deux situations sont signalées dans les journaux du serveur au démarrage en production (`src/instrumentation.ts`).

La limitation de débit et l'idempotence sont en mémoire par processus : sur une plateforme à plusieurs instances ou fonctions éphémères, les remplacer par un magasin partagé (Redis, KV) dans `src/lib/contact/rate-limit.ts`.

## Indexation, URL et en-têtes

- `NEXT_PUBLIC_SITE_URL` : active les URL canoniques, les balises `hreflang`, le sitemap et les aperçus de partage absolus.
- `SITE_INDEXABLE=true` : retire `noindex` (balise, en-tête `X-Robots-Tag`) et ouvre `robots.txt`. À n'activer qu'après validation des éléments légaux. `noindex` n'est pas une protection d'accès : pour une préproduction confidentielle, ajouter une authentification au niveau de l'hébergeur.
- Ces deux variables sont évaluées à la construction (pages prérendues, en-têtes compilés) : les modifier impose un nouveau `npm run build`.
- Les données structurées (`Organization`) ne contiennent que des faits confirmés ; la dénomination sociale n'y figure qu'une fois `brand.legalNameConfirmed` passé à `true`.
- En-têtes de sécurité (`next.config.ts`) : CSP sans aucune ressource tierce, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`. HSTS et `upgrade-insecure-requests` ne sont émis qu'en production avec une `NEXT_PUBLIC_SITE_URL` en HTTPS, pour ne pas casser une préproduction servie en HTTP. La CSP conserve `'unsafe-inline'` pour les scripts d'amorçage des pages statiques : elle limite ce qu'une page peut charger mais n'atténue pas une injection de script. Une CSP par nonce imposerait un rendu dynamique de toutes les pages.
- Sans `NEXT_PUBLIC_SITE_URL`, l'image d'aperçu de partage est référencée sur `localhost` (comportement de Next) : sans conséquence tant que le site n'est pas indexé, à corriger avant publication.
- La dénomination « ARASTE CAPITAL LTD » figure dans le pied de page et le manifeste comme demandé ; elle n'est ajoutée aux données structurées qu'une fois `brand.legalNameConfirmed` passé à `true`.

## Ce qui a été vérifié

- `npm run typecheck`, `npm run lint`, `npm run test` (typographie, routes, schéma et protections du formulaire, contraintes éditoriales FR/EN) et `npm run build` : passés.
- Tests de bout en bout Playwright (Chromium) à 1440, 768 et 390 px : navigation et liens internes, 404 localisée, sélecteur de langue, menu mobile au clavier, parcours complet de la fiche en quatre étapes (validation par étape, retour, récapitulatif, envoi) en mode démonstration, réponses de l'API (jeton, pot de miel, taille, origine, méthode), axe-core WCAG 2.x A/AA, texte à 200 %, `prefers-reduced-motion`.
- Relecture adversariale par agents indépendants (contenus FR et EN, sécurité, accessibilité, code, design, repères) et inspection visuelle des captures d'écran aux trois largeurs.
- Lighthouse (Chromium headless, réseau mobile simulé, build de production locale) : desktop 100 / 100 / 100 en performance, accessibilité et bonnes pratiques ; mobile 92 à 97 en performance selon la page, 100 en accessibilité. Le score SEO (63 à 66) reflète uniquement le `noindex` volontaire de préproduction. Les planches SVG servies en fichiers ont ramené le blocage du fil principal de l'accueil mobile de 460 ms à 70 ms. Ces mesures dépendent de la machine et du réseau simulé : à refaire sur l'hébergement réel.

Non vérifié : Firefox et Safari réels, Lighthouse (aucun score n'est avancé), lecteurs d'écran réels, envoi avec un fournisseur configuré.

## Licences

Cormorant et DM Sans : SIL Open Font License 1.1, fichiers et licences copiés dans `src/assets/fonts/` (aucune dépendance de police à l'exécution). Compositions visuelles, logotype et monogramme : créations originales livrées avec le projet.
