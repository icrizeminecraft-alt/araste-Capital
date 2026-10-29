**Limites de la récolte.** Aucune page n'a été lue en entier : les fiches reposent sur les fragments indexés. Manquent donc, pour la plupart des pages, le titre principal exact (H1), la méta-description, les intertitres, le texte des boutons et les formulaires. Les pages « Lenders », « Western Europe », « Buy-to-Let Mortgages » et « Lender Calculator » n'ont pas été remontées par les moteurs et ne sont connues que par des pages voisines.

**Pages signalées mais jamais vues.** Pages « Middle East », « United States », « United Kingdom » du menu international ; pages « Holiday Lets », « Main home mortgages », « Bridge to Purchase », « Bridge to Sell », « Equity Release », « Second Charge » (sous-rubriques de « Types of Borrowing ») ; page équipe détaillée, carrières, politique de confidentialité, politique de cookies ; détail des entrées du « Lender Calculator » et du « Developer Scorecard » ; catégories et derniers articles du blog (un article « Why 70% of London Development Finance Deals Get Rejected » et un article Medium de décembre 2025 ont été aperçus sans être extraits).

**Vérifications à faire directement.** Registre des sociétés (numéro 08551479 : nom exact, date, dirigeants, siège), registre de la FCA (statut, numéro, éventuel représentant désigné), adhésions professionnelles, existence de bureaux hors Londres, honoraires en vigueur.

**Comment obtenir le reste.**

1. Autoriser l'hôte `www.silveroakcapital.co.uk` dans les paramètres réseau de l'environnement de travail (niveau d'accès plus large, ou domaine ajouté à la liste autorisée) : une extraction complète et exacte de chaque page devient alors possible en une passe.
2. Ou fournir une exportation du site (WordPress : outil d'exportation XML, ou copie du dossier `wp-content/uploads` et des pages) ; le script d'assemblage pourra être adapté pour lire ces fichiers.
3. Ou coller le texte des pages jugées prioritaires (produits et FAQ) dans la conversation.

Les quatre passes sont terminées. Toute fiche ajoutée dans `raw/` est intégrée en relançant `python3 -I docs/references/silver-oak/assemble.py`.
