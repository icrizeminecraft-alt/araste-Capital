# Avant publication : éléments à renseigner et à valider

Le site est un projet de communication à valider, pas une attestation de conformité. Rien de ce qui suit n'est déduit du seul nom « LTD » ni de la seule clientèle professionnelle. Tant que cette liste n'est pas traitée, laisser `SITE_INDEXABLE=false`.

## 1. Identité et coordonnées (`src/config/site.ts` → `toConfirm`)

- [ ] Dénomination sociale exacte, forme juridique, pays d'immatriculation
- [ ] Numéro d'immatriculation
- [ ] Adresse du siège
- [ ] Adresse électronique et téléphone de contact (affichés dans le pied de page et la page contact dès qu'ils sont renseignés)
- [ ] Responsable de la publication

## 2. Périmètre et statut (à valider avec un conseil)

- [ ] Pays dans lesquels les prestations sont proposées
- [ ] Périmètre autorisé des prestations (conseil, intermédiation, mise en relation) et classes d'actifs effectivement couvertes
- [ ] Statut d'intermédiaire, agrément, enregistrement ou exemption applicable ; mentions obligatoires associées
- [ ] Modalités de rémunération (honoraires, commissions) et mentions requises
- [ ] Ciblage commercial des montants (« à partir de 5 M€… ») : valider avant d'activer `siteConfig.ticketSize.enabled`
- [ ] Liste des expertises effectivement fournies : désactiver celles qui ne le sont pas (`siteConfig.expertises`)

## 3. Données personnelles (`src/content/*/privacy.ts`, `legal.ts`)

- [ ] Responsable du traitement et contact pour l'exercice des droits
- [ ] Cadre applicable (RGPD, UK GDPR, autre) et autorité de contrôle
- [ ] Hébergeur et localisation des serveurs
- [ ] Prestataire de messagerie ou d'acheminement des demandes (Resend, webhook, autre)
- [ ] Durée de conservation des demandes de contact
- [ ] Relecture juridique des mentions légales et de la politique de confidentialité ; retirer les blocs « à compléter » une fois renseignés
- [ ] Vérifier les renvois internes une fois les champs renseignés : « le contact indiqué dans la section Responsable du traitement » (confidentialité), « seront précisés dans les mentions légales » (page Le cabinet, à passer au présent)
- [ ] Portée et durée des journaux d'accès tenus par l'hébergeur
- [ ] Titularité des droits sur le logotype, le monogramme et les compositions visuelles ; dépôt éventuel de la marque
- [ ] Date de dernière mise à jour

## 4. Technique

- [ ] `NEXT_PUBLIC_SITE_URL` (domaine réel) : canoniques, hreflang, sitemap, aperçus de partage
- [ ] `CONTACT_FORM_SECRET` (valeur aléatoire longue) et fournisseur d'envoi configuré, testé avec des données fictives vers une boîte interne
- [ ] Limitation de débit : magasin partagé si l'hébergement est multi-instance
- [ ] En-têtes de sécurité (CSP) adaptés si un service tiers est ajouté un jour
- [ ] Protection d'accès de la préproduction au niveau de l'hébergeur (`noindex` ne suffit pas)
- [ ] `SITE_INDEXABLE=true` uniquement à la mise en ligne

## 5. Contenus

- [ ] Relecture finale des textes FR et EN par le cabinet (ton, exactitude du métier, terminologie)
- [ ] Vérification qu'aucune référence, résultat, partenaire ou chiffre non validé n'a été ajouté
- [ ] Visuels : conserver les compositions originales ou intégrer des photographies dont les droits sont documentés (`docs/IMAGES.md`)
