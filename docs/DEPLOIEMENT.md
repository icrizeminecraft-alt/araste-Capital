# Déploiement sur Hostinger

Ce site est une application Next.js. Elle peut être servie de deux façons :

| Mode | Où | Comment | Formulaire |
| --- | --- | --- | --- |
| **Statique** (recommandé pour l'hébergement web Hostinger) | hPanel, `public_html`, serveur LiteSpeed + PHP | `npm run build:static` → déposer le contenu de `out/` | relais PHP livré (`api/`), courriel texte + HTML |
| **Node** | VPS Hostinger, ou tout hébergeur Node 20 | `npm run build` puis `npm start` | route API Node, courriel + fiche PDF |

L'erreur **403 « Access to this resource on the server is denied! »** vient du serveur LiteSpeed de l'hébergement web : le dossier transféré contenait le code source (`src/`, `package.json`…) et aucun `index.html`. Le serveur refuse alors d'afficher le contenu du dossier. Il faut déposer le site **construit** (dossier `out/`), pas le code source.

## 1. Hébergement web Hostinger (hPanel) : mode statique

### Construire

Sur un ordinateur disposant de Node 20 ou plus récent :

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.votre-domaine.com npm run build:static
```

Le script produit :

- `out/` : le site complet (pages HTML par dossier, `index.html` de redirection à la racine, `.htaccess`, `api/` du formulaire) ;
- `dist/araste-capital-hostinger.zip` : la même chose en archive, prête pour le gestionnaire de fichiers.

Variables utiles avant la construction (`.env.local` ou ligne de commande) :

| Variable | Valeur | Effet |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.votre-domaine.com` | URL canoniques, hreflang, plan du site, aperçus de partage |
| `SITE_INDEXABLE` | `false` (défaut) ou `true` | `true` uniquement à la mise en ligne définitive, après la liste `docs/AVANT-PUBLICATION.md` |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | `php` (défaut) | Le formulaire utilise le relais PHP de `public_html/api/` |

### Déposer

1. hPanel → **Sites web** → votre domaine → **Gestionnaire de fichiers** (ou FTP).
2. Ouvrir `public_html`. **Vider** le dossier des anciens fichiers transférés (code source, `.next`, `node_modules`…).
3. Téléverser `dist/araste-capital-hostinger.zip` dans `public_html`, puis clic droit → **Extraire** (ou déposer le contenu de `out/` par FTP).
4. Vérifier que `public_html` contient directement : `index.html`, `.htaccess`, `fr/`, `en/`, `_next/`, `api/`, `images/`, `robots.txt`, `sitemap.xml`. S'ils sont dans un sous-dossier `out/`, déplacer son contenu à la racine.
5. Les fichiers commençant par un point sont masqués par défaut : activer **Afficher les fichiers cachés** pour voir `.htaccess`.
6. Supprimer l'archive après extraction.

Le site répond alors sur `/` (redirection vers `/fr/` ou `/en/` selon la langue du navigateur), `/fr/`, `/fr/contact/`, etc.

### Activer le formulaire (relais PHP)

Sans configuration, le formulaire fonctionne mais annonce « Mode démonstration : aucun message n'a été envoyé ». Pour recevoir les fiches :

1. hPanel → **E-mails** : créer une boîte sur le domaine (ex. `site@votre-domaine.com`). Elle sert d'expéditeur technique ; les fiches peuvent être reçues sur n'importe quelle adresse.
2. Dans `public_html/api/`, copier `config.example.php` en `config.php` et renseigner :
   - `to` : la boîte qui reçoit les fiches ;
   - `from` : la boîte créée sur le domaine ;
   - `secret` : une chaîne aléatoire d'au moins 32 caractères (facultatif : sinon un secret est généré dans `api/_data/`).
3. Vérifier que `public_html/api/_data/` existe et est inscriptible (droits 750 ou 755) : il stocke la limitation de débit et l'idempotence, jamais le contenu des fiches.
4. Tester avec des données fictives depuis la page `/fr/contact/` : le message « Votre fiche d'opération a été transmise » doit apparaître et le courriel arriver (objet `[ARASTE CAPITAL] Fiche d'opération — …`).

`config.php`, `lib.php` et `labels.json` sont protégés par `api/.htaccess` (accès web refusé). Le relais PHP applique les mêmes protections que la route Node (jeton signé, pot de miel, limitation de débit, idempotence, validation stricte, taille limitée) et n'écrit jamais le contenu d'une fiche sur le serveur. Il n'envoie pas la fiche PDF : celle-ci nécessite le mode Node.

### Mettre à jour le site

Reconstruire (`npm run build:static`), puis remplacer le contenu de `public_html` **sauf** `api/config.php` et `api/_data/`. Le dossier `_next/` change de noms de fichiers à chaque construction : supprimer l'ancien avant de déposer le nouveau.

### Mise à jour automatique par GitHub Actions

Le dépôt contient un flux `.github/workflows/site-statique.yml` : à chaque poussée sur la branche de travail (hors modifications de la documentation), GitHub construit le site (`npm run build:static`) et publie le contenu de `out/` dans le dossier `site/` de la branche `hostinger-static`, accompagné d'un `package.json` minimal. Dans hPanel, un déploiement Git relié à cette branche (type Node.js sans dépendance, commande de construction `npm run build` qui ne fait rien, dossier publié `site/`) met `public_html` à jour sans dépôt manuel. La configuration du relais PHP (`api/config.php`) et le dossier `api/_data/` doivent être conservés hors de ce mécanisme, car la branche est régénérée à chaque publication.

### Vérifier après dépôt

| Adresse | Attendu |
| --- | --- |
| `https://www.votre-domaine.com/` | Redirection vers `/fr/` (ou `/en/`) |
| `/fr/contact/` | Page de contact, étapes de la fiche |
| `/fr/une-page-inexistante` | Page « Cette page n'existe pas » (statut 404) |
| `/api/contact/token` | `{"token":"…"}` (JSON) |
| `/api/config.php` | Refusé (403) |

Si `.htaccess` est ignoré (pas de redirection depuis `/`, en-têtes absents) : vérifier qu'il a bien été téléversé et qu'aucune règle du panneau Hostinger (redirections, cache) ne le remplace.

## 2. VPS Hostinger ou hébergeur Node : mode serveur

Prérequis : Node 20.9 ou plus récent, un processus persistant (PM2, systemd, Docker, ou le gestionnaire d'applications de l'hébergeur) et un reverse proxy HTTPS (Nginx, Caddy, Apache).

```bash
npm ci
NEXT_PUBLIC_SITE_URL=https://www.votre-domaine.com SITE_INDEXABLE=false npm run build
PORT=3000 npm start
```

Variables d'environnement (voir `.env.example`) : `NEXT_PUBLIC_SITE_URL`, `SITE_INDEXABLE`, `CONTACT_PROVIDER` (`resend` ou `webhook`), `CONTACT_FORM_SECRET`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `TRUSTED_PROXY_HOPS=1` derrière un reverse proxy.

Ce mode sert les en-têtes de sécurité lui-même, applique la redirection de langue, génère la fiche PDF jointe au courriel et reçoit les fiches sur `/api/contact`.

### Site statique sur l'hébergement web + API Node ailleurs

Il est possible de combiner : site statique sur `public_html` et formulaire traité par une instance Node (VPS) sur un autre domaine, par exemple `https://app.votre-domaine.com`.

1. Instance Node : définir `CONTACT_ALLOWED_ORIGINS=https://www.votre-domaine.com` (origines séparées par des virgules).
2. Site statique : construire avec `NEXT_PUBLIC_CONTACT_ENDPOINT=https://app.votre-domaine.com npm run build:static`.

Le formulaire demande alors son jeton à `https://app.votre-domaine.com/api/contact/token` et y envoie la fiche ; la politique de sécurité du contenu (`connect-src`) autorise cette seule origine.

## 3. Questions fréquentes

- **403 à la racine du domaine** : il manque `index.html` dans `public_html` (code source transféré au lieu de `out/`), ou les droits des fichiers sont trop restrictifs (644 pour les fichiers, 755 pour les dossiers).
- **404 sur `/fr/contact`** (sans barre oblique) : `.htaccess` absent ou ignoré ; avec lui, le serveur redirige vers `/fr/contact/`.
- **Le formulaire répond « Mode démonstration »** : `api/config.php` absent ou `to` vide.
- **« Le formulaire n'a pas pu être vérifié »** : `/api/contact/token` injoignable (règle de réécriture absente) ou PHP désactivé pour le domaine.
- **Courriels non reçus** : `from` doit être une boîte existante du domaine chez Hostinger ; vérifier les indésirables ; `api/_data/` doit être inscriptible.
- **Page blanche après mise à jour** : ancien dossier `_next/` conservé ; le supprimer et redéposer.
