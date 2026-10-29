# Avant publication : éléments à renseigner et à valider

Le site est un projet de communication à valider, pas une attestation de conformité. Rien de ce qui suit n'est déduit de la seule clientèle professionnelle. Tant que cette liste n'est pas traitée, laisser `SITE_INDEXABLE=false`.

Règle de publication : aucun renseignement « à compléter » n'est affiché sur le site. Les pages publient ce qui est établi ; le reste est listé ici et ajouté dès qu'il est communiqué.

## 1. Identité et coordonnées

- [x] Dénomination sociale, forme juridique, pays d'immatriculation : ARASTE CAPITAL, SASU de droit français, RCS Grenoble (`src/content/{fr,en}/legal.ts`, `brand.legalNameConfirmed` dans `src/config/site.ts`)
- [ ] Numéro d'immatriculation au RCS de Grenoble et capital social (`legal.ts`, section « Éditeur du site », FR et EN)
- [ ] Adresse du siège (`legal.ts` ; `siteConfig.toConfirm.addressLines` seulement s'il s'agit d'un bureau où recevoir) — le siège étant domicilié chez le dirigeant, décider avec un conseil de la forme sous laquelle il est publié
- [ ] Adresse électronique et téléphone professionnels (`siteConfig.toConfirm` : affichés dans le pied de page, l'accueil, la page contact et les données structurées dès qu'ils sont renseignés ; à reporter aussi dans « Éditeur du site » et « Responsable du traitement »)
- [x] Directeur de la publication : Lucas Araste, président (`legal.ts`)
- [ ] Marchés d'intervention affichés (France, Monaco, Londres, Andorre, Émirats arabes unis ; `siteConfig.locations` et `legal.ts`) : confirmer la liste, en particulier la France, ajoutée comme pays d'immatriculation du cabinet
- [ ] Hébergeur : Hostinger International Ltd. (Larnaca, Chypre), mentionné dans `legal.ts` et `privacy.ts` — vérifier l'entité contractante et son adresse sur la facture Hostinger
- [ ] Boîte de réception de la fiche d'opération (`CONTACT_TO_EMAIL`) et adresse d'expédition autorisée chez le fournisseur (`CONTACT_FROM_EMAIL`)

## 2. Périmètre et statut (à valider avec un conseil)

- [ ] Pays dans lesquels les prestations sont proposées
- [ ] Périmètre autorisé des prestations (conseil, intermédiation, mise en relation) et classes d'actifs effectivement couvertes
- [ ] Statut d'intermédiaire, agrément, enregistrement ou exemption applicable ; mentions obligatoires associées
- [ ] Modalités de rémunération (honoraires, commissions) et mentions requises — le site indique seulement qu'elles sont présentées avant tout engagement et convenues par écrit (`legal.ts`, `contact.ts`, `partners.ts`)
- [ ] Collaboration avec des apporteurs d'affaires, courtiers et conseils indépendants (page Partenaires) : cadre contractuel, partage éventuel de rémunération et mentions requises dans chaque pays d'implantation ; adapter ou retirer la réponse « Comment la collaboration est-elle rémunérée ? » (`partners.ts`) si le cadre diffère
- [ ] Ciblage commercial des montants (« à partir de 5 M€… ») : valider avant d'activer `siteConfig.ticketSize.enabled`
- [ ] Liste des expertises effectivement fournies : désactiver celles qui ne le sont pas (`siteConfig.expertises`)

## 3. Données personnelles (`src/content/*/privacy.ts`, `legal.ts`)

- [x] Responsable du traitement : ARASTE CAPITAL, représentée par son président ; contact pour l'exercice des droits : le formulaire de contact, à remplacer par l'adresse électronique professionnelle dès qu'elle existe
- [x] Cadre applicable : RGPD et loi Informatique et Libertés ; autorité de contrôle : CNIL (à confirmer par un conseil pour les opérations hors de France)
- [ ] Localisation des serveurs de l'hébergeur (centre de données du compte Hostinger) : à vérifier dans hPanel avant d'en faire état
- [x] Acheminement des demandes : relais PHP sur l'hébergement, vers la messagerie du cabinet (`deploy/hostinger/api/config.php`, à créer avec la boîte professionnelle)
- [ ] Durée de conservation des demandes de contact : le site annonce « au plus trois ans après le dernier échange » (`privacy.ts`) — à confirmer ou ajuster
- [ ] Transferts hors de l'Espace économique européen si la fiche est lue depuis Londres ou les Émirats : base juridique et mention dans la politique de confidentialité
- [ ] Relecture juridique des mentions légales et de la politique de confidentialité
- [ ] Portée et durée des journaux d'accès tenus par l'hébergeur
- [ ] Titularité des droits sur le logotype, le monogramme et les compositions visuelles ; dépôt éventuel de la marque
- [x] Date de dernière mise à jour : octobre 2026 (à actualiser à chaque modification des pages d'information)

## 4. Technique

- [ ] `NEXT_PUBLIC_SITE_URL` (domaine réel, en HTTPS) défini avant la construction : canoniques, hreflang, sitemap, aperçus de partage, HSTS
- [ ] `TRUSTED_PROXY_HOPS` / `TRUSTED_IP_HEADER` adaptés à l'hébergeur (limitation de débit)
- [ ] `CONTACT_FORM_SECRET` (valeur aléatoire longue) et fournisseur d'envoi configuré, testé avec des données fictives vers une boîte interne
- [ ] Limitation de débit : magasin partagé si l'hébergement est multi-instance
- [ ] En-têtes de sécurité (CSP) adaptés si un service tiers est ajouté un jour
- [ ] Protection d'accès de la préproduction au niveau de l'hébergeur (`noindex` ne suffit pas)
- [ ] `SITE_INDEXABLE=true` uniquement à la mise en ligne (dans `.github/workflows/site-statique.yml`) : ouvre l'exploration et l'indexation, publie le plan du site
- [ ] Envoi des formulaires testé avec des données fictives (premier échange et fiche), réception vérifiée dans la boîte du cabinet

## 5. Contenus

- [ ] Relecture finale des textes FR et EN par le cabinet (ton, exactitude du métier, terminologie)
- [ ] Champs de la fiche d'opération : vérifier qu'ils correspondent à ce dont le cabinet a réellement besoin pour un premier avis (ajouter ou retirer dans `src/lib/contact/schema.ts` et `src/content/{fr,en}/contact.ts`)
- [ ] Vérification qu'aucune référence, résultat, partenaire ou chiffre non validé n'a été ajouté
- [ ] Visuels : conserver la série livrée ou intégrer des photographies dont les droits sont documentés (`docs/IMAGES.md`) ; portrait du fondateur facultatif (`visuals.portrait`)
