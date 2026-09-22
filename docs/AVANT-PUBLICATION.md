# Avant publication : éléments à renseigner et à valider

Le site est un projet de communication à valider, pas une attestation de conformité. Rien de ce qui suit n'est déduit du seul nom « LTD » ni de la seule clientèle professionnelle. Tant que cette liste n'est pas traitée, laisser `SITE_INDEXABLE=false`.

## 1. Identité et coordonnées

- [ ] Dénomination sociale exacte, forme juridique, pays d'immatriculation (`src/content/{fr,en}/legal.ts`, puis `brand.legalNameConfirmed` dans `src/config/site.ts` pour les données structurées)
- [ ] Numéro d'immatriculation (`legal.ts`)
- [ ] Adresse du siège (`legal.ts` et `siteConfig.toConfirm.addressLines`)
- [ ] Adresse électronique et téléphone de contact (`siteConfig.toConfirm` : affichés dans le pied de page, la page contact et les données structurées dès qu'ils sont renseignés)
- [ ] Responsable de la publication (`legal.ts`)
- [ ] Implantations affichées (Andorre, Londres, Monaco, Émirats arabes unis ; `siteConfig.locations`) : confirmer pour chacune l'entité juridique qui y opère, son statut et son adresse (`addressLines`, vides par défaut, jamais inventées) ; retirer toute implantation qui ne correspondrait pas à une présence effective
- [ ] Boîte de réception de la fiche d'opération (`CONTACT_TO_EMAIL`) et adresse d'expédition autorisée chez le fournisseur (`CONTACT_FROM_EMAIL`)

## 2. Périmètre et statut (à valider avec un conseil)

- [ ] Pays dans lesquels les prestations sont proposées
- [ ] Périmètre autorisé des prestations (conseil, intermédiation, mise en relation) et classes d'actifs effectivement couvertes
- [ ] Statut d'intermédiaire, agrément, enregistrement ou exemption applicable ; mentions obligatoires associées
- [ ] Modalités de rémunération (honoraires, commissions) et mentions requises
- [ ] Collaboration avec des apporteurs d'affaires, courtiers et conseils indépendants (page Partenaires) : cadre contractuel, partage éventuel de rémunération et mentions requises dans chaque pays d'implantation ; adapter ou retirer la réponse « Comment la collaboration est-elle rémunérée ? » (`partners.ts`) si le cadre diffère
- [ ] Ciblage commercial des montants (« à partir de 5 M€… ») : valider avant d'activer `siteConfig.ticketSize.enabled`
- [ ] Liste des expertises effectivement fournies : désactiver celles qui ne le sont pas (`siteConfig.expertises`)

## 3. Données personnelles (`src/content/*/privacy.ts`, `legal.ts`)

- [ ] Responsable du traitement et contact pour l'exercice des droits
- [ ] Cadre applicable (RGPD, UK GDPR, autre) et autorité de contrôle
- [ ] Hébergeur et localisation des serveurs
- [ ] Prestataire de messagerie ou d'acheminement des demandes (Resend, webhook, autre)
- [ ] Durée de conservation des demandes de contact (la fiche d'opération, courriel et PDF, ne réside que dans la messagerie du cabinet : définir sa conservation et son accès)
- [ ] Transferts hors de l'Espace économique européen si la fiche est lue depuis Londres ou les Émirats : base juridique et mention dans la politique de confidentialité
- [ ] Relecture juridique des mentions légales et de la politique de confidentialité ; retirer les blocs « à compléter » une fois renseignés
- [ ] Vérifier les renvois internes une fois les champs renseignés : « le contact indiqué dans la section Responsable du traitement » (confidentialité), « seront précisés dans les mentions légales » (page Le cabinet, à passer au présent)
- [ ] Portée et durée des journaux d'accès tenus par l'hébergeur
- [ ] Titularité des droits sur le logotype, le monogramme et les compositions visuelles ; dépôt éventuel de la marque
- [ ] Date de dernière mise à jour

## 4. Technique

- [ ] `NEXT_PUBLIC_SITE_URL` (domaine réel, en HTTPS) défini avant la construction : canoniques, hreflang, sitemap, aperçus de partage, HSTS
- [ ] `TRUSTED_PROXY_HOPS` / `TRUSTED_IP_HEADER` adaptés à l'hébergeur (limitation de débit)
- [ ] `CONTACT_FORM_SECRET` (valeur aléatoire longue) et fournisseur d'envoi configuré, testé avec des données fictives vers une boîte interne
- [ ] Limitation de débit : magasin partagé si l'hébergement est multi-instance
- [ ] En-têtes de sécurité (CSP) adaptés si un service tiers est ajouté un jour
- [ ] Protection d'accès de la préproduction au niveau de l'hébergeur (`noindex` ne suffit pas)
- [ ] `SITE_INDEXABLE=true` uniquement à la mise en ligne

## 5. Contenus

- [ ] Relecture finale des textes FR et EN par le cabinet (ton, exactitude du métier, terminologie)
- [ ] Champs de la fiche d'opération : vérifier qu'ils correspondent à ce dont le cabinet a réellement besoin pour un premier avis (ajouter ou retirer dans `src/lib/contact/schema.ts` et `src/content/{fr,en}/contact.ts`)
- [ ] Vérification qu'aucune référence, résultat, partenaire ou chiffre non validé n'a été ajouté
- [ ] Visuels : conserver les compositions originales ou intégrer des photographies dont les droits sont documentés (`docs/IMAGES.md`)
