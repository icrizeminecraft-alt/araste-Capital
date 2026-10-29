**Objet.** Rassembler, sans recopie manuelle, ce que propose Silver Oak Capital (silveroakcapital.co.uk), partenaire d'ARASTE CAPITAL, afin de servir de base de contenu au site ARASTE, qui sera réécrit dans un style plus épuré. Ce document ne reproduit pas le site : il en inventorie la structure, les produits, les arguments, les conditions annoncées et les chiffres avancés, avec leurs sources.

**Comment les informations ont été obtenues.** L'environnement de travail n'a pas accès direct au site (politique réseau : connexion refusée vers `www.silveroakcapital.co.uk`, vers les archives du web et vers les sites miroirs). Tout provient donc d'**extraits de moteurs de recherche** : titres de pages, descriptions, fragments de texte indexés et résumés produits par l'outil de recherche à partir de ces fragments. Quatre passes ont été menées entre le 18 et le 29 octobre 2026 :

1. inventaire de toutes les adresses du site par familles de mots-clés (environ 190 recherches) ;
2. extraction page par page des 51 pages de services et du cabinet, trois recherches ciblées par page (153 recherches) ;
3. sources tierces (registre, presse, annuaires, profils) : 28 recherches, 145 faits relevés ;
4. études de cas, articles et pages jamais remontées (en cours au moment de l'assemblage ; les fiches sont ajoutées à mesure dans `raw/`).

**Ce que cela implique.** Une fiche courte signifie que peu de texte de la page a été indexé, pas que la page est vide. Les phrases « verbatim » sont celles que les extraits reproduisent ; lorsque l'outil résume, la fiche le signale. Les titres de pages et la liste des produits sont fiables (confirmés par plusieurs recherches) ; les conditions chiffrées (ratios, durées, frais) proviennent parfois de pages voisines ou d'une copie ancienne de la page, et sont marquées comme telles. Les contradictions entre pages (nombre de prêteurs, fourchette de montants, code postal) sont relevées sans être tranchées.

**Fichiers.** `seed.json` (plan du site et faits de la première passe), `raw/*.json` (une fiche par page, sources tierces, pages manquantes), `assemble.py` (génère ce document), `narrative/*.md` (sections rédigées). Pour une extraction complète et exacte, il suffira d'autoriser l'hôte `www.silveroakcapital.co.uk` dans les paramètres réseau de l'environnement, ou de fournir une exportation du site.
