# Référence : Silver Oak Capital (silveroakcapital.co.uk)

> Document de travail interne, non destiné à la publication. Il rassemble ce qui a pu être récolté du site public de Silver Oak Capital et de sources tierces, pour servir de base de contenu au site ARASTE CAPITAL (à réécrire dans le style et la voix du cabinet). Les citations en anglais sont reproduites telles quelles. Aucune donnée chiffrée ni affirmation de Silver Oak ne doit être reprise comme un fait concernant ARASTE sans validation.

## 1. Note de méthode

**Objet.** Rassembler, sans recopie manuelle, ce que propose Silver Oak Capital (silveroakcapital.co.uk), partenaire d'ARASTE CAPITAL, afin de servir de base de contenu au site ARASTE, qui sera réécrit dans un style plus épuré. Ce document ne reproduit pas le site : il en inventorie la structure, les produits, les arguments, les conditions annoncées et les chiffres avancés, avec leurs sources.

**Comment les informations ont été obtenues.** L'environnement de travail n'a pas accès direct au site (politique réseau : connexion refusée vers `www.silveroakcapital.co.uk`, vers les archives du web et vers les sites miroirs). Tout provient donc d'**extraits de moteurs de recherche** : titres de pages, descriptions, fragments de texte indexés et résumés produits par l'outil de recherche à partir de ces fragments. Quatre passes ont été menées entre le 18 et le 29 octobre 2026 :

1. inventaire de toutes les adresses du site par familles de mots-clés (environ 190 recherches) ;
2. extraction page par page des 51 pages de services et du cabinet, trois recherches ciblées par page (153 recherches) ;
3. sources tierces (registre, presse, annuaires, profils) : 28 recherches, 145 faits relevés ;
4. études de cas, articles et pages jamais remontées (en cours au moment de l'assemblage ; les fiches sont ajoutées à mesure dans `raw/`).

**Ce que cela implique.** Une fiche courte signifie que peu de texte de la page a été indexé, pas que la page est vide. Les phrases « verbatim » sont celles que les extraits reproduisent ; lorsque l'outil résume, la fiche le signale. Les titres de pages et la liste des produits sont fiables (confirmés par plusieurs recherches) ; les conditions chiffrées (ratios, durées, frais) proviennent parfois de pages voisines ou d'une copie ancienne de la page, et sont marquées comme telles. Les contradictions entre pages (nombre de prêteurs, fourchette de montants, code postal) sont relevées sans être tranchées.

**Fichiers.** `seed.json` (plan du site et faits de la première passe), `raw/*.json` (une fiche par page, sources tierces, pages manquantes), `assemble.py` (génère ce document), `narrative/*.md` (sections rédigées). Pour une extraction complète et exacte, il suffira d'autoriser l'hôte `www.silveroakcapital.co.uk` dans les paramètres réseau de l'environnement, ou de fournir une exportation du site.

## 2. Carte d'identité de la société

| Élément | Ce que disent les sources | Fiabilité |
| --- | --- | --- |
| Dénomination | Silver Oak Capital Ltd, société immatriculée en Angleterre et au pays de Galles, numéro 08551479 (conditions générales, février 2026). Le registre des sociétés n'a pas pu être consulté directement. | haute (document propre au site) |
| Création | 2019 (page « About us », profil Spear's, presse) ; une page mentionne 2018 et un article de 2021 parle d'un lancement « en août de l'année dernière ». | moyenne |
| Fondateur | Jimmy Baillie, fondateur et directeur général (« Founder & Managing Director »). Diplômé de l'université du Cap (B.Com Honours en économie, 2010) ; passé chez plusieurs courtiers londoniens en dette immobilière (Knight Frank, Enness, Arc & Co selon la presse). Profil Spear's 500 (indice « Debt Advisory », 2022-2023). | haute pour le rôle, moyenne pour le parcours |
| Équipe | Connor Dooley (Senior Associate, Debt Advisory, également délégué à la protection des données selon les conditions générales), Joe Berk (Associate, Debt Advisory), Sophia De Stefano (Relationship Manager). LinkedIn indique 11 à 50 salariés. Connor Dooley et Joe Berk représentaient le cabinet au MIPIM 2026. | moyenne (site et LinkedIn) |
| Siège | 91 Wimpole Street, Marylebone, Londres. Code postal W1G 0EE sur les pages web, W1G 0EF dans les conditions générales et les annuaires ; un annuaire classe le cabinet à Hackney (probablement ancien). Horaires : lundi à vendredi, 9 h à 17 h (données structurées de la page contact). | haute pour l'adresse, contradiction sur le code postal |
| Autres implantations | La page contact liste Londres, Monaco, Dubaï, Le Cap. Un article de 2021 cite ces quatre villes comme « principaux marchés ». LinkedIn mentionne Monaco dans les spécialités ; aucune adresse physique hors Londres n'apparaît dans les sources. | moyenne : présence commerciale affirmée, bureaux non documentés |
| Contact | enquiry@silveroakcapital.co.uk ; +44 207 459 4440 ; WhatsApp (« WhatsApp Us Now ») ; formulaire (nom, coordonnées, type de financement, montant, pays de résidence, aperçu, consentement). | haute |
| Positionnement (verbatim) | « International Debt Advisory l Expert Finance Solutions » (titre du site) ; « one of Europe's leading large loan brokers » ; « not a high-street mortgage broker », « bespoke solution for larger, more complex deals » (LinkedIn) ; « We specialise in structuring bespoke debt solutions across the UK and Western Europe, navigating the complexities of residential and commercial mortgages, bridging, development finance, complex structures, and special situations » (page apporteurs). | haute |
| Clientèle annoncée | Particuliers fortunés et très fortunés, promoteurs et groupes d'investisseurs, family offices et trustees, clients internationaux détenant des actifs au Royaume-Uni, trusts et structures offshore ; clients cités du Royaume-Uni, de France, d'Espagne, de Dubaï, d'Afrique du Sud, d'Afrique, d'Asie, du Moyen-Orient et de Turquie. | moyenne |
| Zones | Royaume-Uni, Europe de l'Ouest, Moyen-Orient, États-Unis (menu « International ») ; Afrique australe (Spear's, LinkedIn). | haute pour le menu |
| Statut réglementaire | Les conditions générales précisent que le cabinet **ne fournit pas de conseil réglementé en crédit immobilier ni en assurance** et ne détient pas de fonds de clients. Aucune inscription au registre de la FCA n'a été trouvée par recherche (ni infirmée) ; un annuaire affiche « FCA registered », un autre « Not confirmed ». Aucune adhésion NACFB, FIBA ou ASTL trouvée. | à vérifier directement avant toute reprise |
| Rémunération | Commission versée par les prêteurs, « details disclosed during the process » (page prêteurs) ; accord d'honoraires propre à chaque client (conditions générales) ; sur une ancienne page : environ 1 % du prêt (1,5 % hors Royaume-Uni), un article évoque des frais de dossier puis 0,5 % à l'offre et 0,5 % à la signature. Apporteurs : « a competitive percentage of our procurement fee upon the successful completion of the loan », conditions fixées à l'avance, pourcentage non publié. | moyenne, sources de dates différentes |
| Taille des opérations | « over £500,000 » (accueil, page prêteurs) ; « £500k to £20m » (page « About us ») ; « £2m to £20m » (page courtier commercial, Spear's, annuaires, presse 2020) ; résidentiel de prestige « £1m+ » et, sur une ancienne page, « £5m and above ». | contradictoire selon la page et la date |
| Réseau de prêteurs | 800+ (accueil, FAQ, Spear's, Trustpilot), 700+ (pages relais et courtier commercial), 500+ (LinkedIn), 300+ (page promotion, SlideShare, presse 2020-2021). Types cités : banques privées, banques d'investissement, prêteurs spécialisés, fonds de dette privée. Le cabinet « works with an unrestricted number of lenders » et propose « products from across the market, but not deals that you can only obtain by going direct to a lender ». | chiffres incohérents ; ne jamais reprendre |
| Reconnaissance | Inscription à la liste Spear's 500 (2022) ; article Bridging & Commercial sur « its largest ever bridging loan of £19.1m » (début 2020) ; participation aux Property Week Commercial Property Awards 2026 (liste des organisations) ; note 5/5 sur 9 avis non vérifiés (mortgage118) ; profil Trustpilot sans avis. | moyenne |
| Présences secondaires | Sites miroirs Odoo et Weebly (« Real Estate & Finance Professionals »), blog Wix, Linktree, SlideShare (plusieurs présentations), LinkedIn, Nextdoor, GoSimples, Medium (décembre 2025) ; sous-domaine « developerscorecard » (gabarit non rempli). | haute pour l'existence |

## 3. Plan du site

Navigation principale (relevée dans les extraits) : Home · About · Services · Introducers · Lenders · Lender Calculator · FAQ · Case Studies · Blogs · Contact · Terms.

- **Bridging** : Bridging Loans UK ; Auction Finance ; Below Market Value Purchases ; Distressed Asset Finance ; Light to Heavy Refurbishment ; Conversions ; Development Exit Loans ; Post Planning Land Acquisitions
- **Development** : Property Development Finance ; Development Finance Brokers ; Senior Development Finance ; Stretch Senior Development Finance ; Mezzanine / Junior Finance ; Whole Loans ; First-Time Developer Finance
- **Commercial** : Commercial Mortgages (Owner-Occupiers regulated, Investors) ; Commercial Mortgage Broker ; Mixed Use Property Finance ; Hotel Finance
- **Residential / Wealth** : Types of Borrowing (Bridge to Purchase, Bridge to Sell, Equity Release, Second Charge, Refinance) ; Prime Residential Mortgages ; Prime London Mortgages ; Private Bank Mortgages ; Foreign National Mortgages ; International Property Mortgages ; Complex Offshore Structures ; Buy-to-Let Mortgages ; HMO Finance ; Portfolio Mortgages ; Probate Lending
- **Marine** : Marine / Boat Finance ; Yacht Mortgages ; Superyacht Finance ; Marine Lease Finance ; Pre-Construction Marine Finance
- **Aviation** : Aviation Finance (secured loan, operating lease, finance lease) ; Aviation Bridging Loans ; Senior Secured Aircraft Finance Advisory
- **Securities and alternative** : Lombard Loan Advisory ; Single Stock Lending Advisory ; Crypto Bridging Advisory ; Bitcoin Loans Advisory ; Art Finance Advisory
- **International** : United Kingdom, Western Europe, Middle East, United States

### Accueil (1)

- [Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions](https://www.silveroakcapital.co.uk/)

### Pages produits et services (42)

- [Mortgage Bridging Loans UK & London](https://www.silveroakcapital.co.uk/bridging-loans-uk/)
- [Auction Finance UK](https://www.silveroakcapital.co.uk/auction-finance/)
- [Below Market Value Purchases](https://www.silveroakcapital.co.uk/below-market-purchases/)
- [Distressed Asset Finance UK](https://www.silveroakcapital.co.uk/distressed-asset-finance/)
- [Refurbishment Finance UK](https://www.silveroakcapital.co.uk/light-to-heavy-refurbishment/)
- [Property Conversion Finance UK](https://www.silveroakcapital.co.uk/conversions/)
- [Development Exit Loans UK](https://www.silveroakcapital.co.uk/development-exit-loans/)
- [Post Planning Land Finance UK](https://www.silveroakcapital.co.uk/post-planning-land-acquisitions/)
- [Property Development Finance](https://www.silveroakcapital.co.uk/property-development-finance/)
- [Development Finance Brokers - Get a Instant Quote Now (SERP title seen in [b]); same URL also listed as "Deve…](https://www.silveroakcapital.co.uk/development-finance-brokers/)
- [Senior Development Finance UK](https://www.silveroakcapital.co.uk/senior-development-finance/)
- [Stretch Senior Development Finance UK](https://www.silveroakcapital.co.uk/stretch-senior-development-finance/)
- [Mezzanine Finance UK](https://www.silveroakcapital.co.uk/mezzanine-junior-finance/)
- [Whole Loans UK](https://www.silveroakcapital.co.uk/whole-loans/)
- [First Time Developer Finance UK](https://www.silveroakcapital.co.uk/first-time-developer-finance/)
- [Commercial Mortgages UK](https://www.silveroakcapital.co.uk/commercial-mortgages/)
- [Commercial Mortgage Brokers - Silver Oak Capital (search-result title [a]; also shown as 'Commercial Mortgage…](https://www.silveroakcapital.co.uk/commercial-mortgage-broker/)
- [Mixed Use Property Finance UK](https://www.silveroakcapital.co.uk/mixed-use-property-finance/)
- [Hotel Finance UK](https://www.silveroakcapital.co.uk/hotel-finance/)
- [Residential Mortgages UK](https://www.silveroakcapital.co.uk/prime-residential-mortgages/)
- [Prime London Mortgages](https://www.silveroakcapital.co.uk/prime-london-mortgages/)
- [Private Bank Mortgages UK](https://www.silveroakcapital.co.uk/private-bank-mortgages/)
- [Foreign National Mortgages UK](https://www.silveroakcapital.co.uk/foreign-national-mortgages/)
- [International Property Mortgages](https://www.silveroakcapital.co.uk/international-property-mortgages/)
- [Complex Offshore Structures & International Finance Solution](https://www.silveroakcapital.co.uk/complex-offshore-structures/)
- [Buy-to-Let Mortgages (page <title> not revealed by search; navigation label in seed is 'Buy-to-Let Mortgages')](https://www.silveroakcapital.co.uk/buy-to-let-mortgages/)
- [HMO Finance UK](https://www.silveroakcapital.co.uk/hmo-finance/)
- [Portfolio Mortgages UK](https://www.silveroakcapital.co.uk/property-portfolio-mortgages/)
- [Probate Loans UK](https://www.silveroakcapital.co.uk/probate-lending/)
- [Boat Finance UK](https://www.silveroakcapital.co.uk/marine-finance/)
- [Yacht Mortgages & Marine Finance for Luxury Vessels](https://www.silveroakcapital.co.uk/yacht-mortgages/)
- [Superyacht Finance](https://www.silveroakcapital.co.uk/superyacht-finance/)
- [Marine Lease Finance](https://www.silveroakcapital.co.uk/marine-lease-finance/)
- [Pre-Construction Marine Finance](https://www.silveroakcapital.co.uk/pre-construction-marine-finance/)
- [Aviation Finance](https://www.silveroakcapital.co.uk/aviation-finance/)
- [Aviation Bridging Loans](https://www.silveroakcapital.co.uk/aviation-bridging-loans/)
- [Aircraft Finance Advisory](https://www.silveroakcapital.co.uk/senior-secured-aircraft-finance-advisory/)
- [Lombard Loans UK](https://www.silveroakcapital.co.uk/lombard-loan-advisory/)
- [Single Stock Lending UK](https://www.silveroakcapital.co.uk/single-stock-lending-advisory/)
- [Crypto Bridging Advisory - Bitcoin Loans](https://www.silveroakcapital.co.uk/crypto-bridging-advisory/)
- [Bitcoin Loans Uk (SERP title shown in [a] and [b]); the search tool's summary in [a] calls the page "Bitcoin …](https://www.silveroakcapital.co.uk/bitcoin-loans-advisory/)
- [Art Finance Advisory](https://www.silveroakcapital.co.uk/art-finance-advisory/)

### Cabinet, prêteurs, apporteurs, FAQ, contact (10)

- [About Us - Jimmy Baillie](https://www.silveroakcapital.co.uk/about-us/)
- [Silver Oak Capital Speak to Experts](https://www.silveroakcapital.co.uk/contact/)
- [Property Finance Introducers UK](https://www.silveroakcapital.co.uk/introducers/)
- [Lenders (navigation label per seed; actual <title> not revealed by any search result)](https://www.silveroakcapital.co.uk/lenders/)
- [Mortgage & Development Finance Calculator UK](https://www.silveroakcapital.co.uk/lender-calculator/)
- [Property Finance FAQs](https://www.silveroakcapital.co.uk/faq/)
- [Types of Borrowing - Silver Oak Capital](https://www.silveroakcapital.co.uk/types-of-borrowing/)
- [Property Finance Western Europe](https://www.silveroakcapital.co.uk/western-europe/)
- [/blogs/](https://www.silveroakcapital.co.uk/blogs/) _(non extraite : voir section 10)_
- [/development-finance-ltv-ltc-and-ltgdv-explained-how-lenders-decide-what-you-can-borrow/](https://www.silveroakcapital.co.uk/development-finance-ltv-ltc-and-ltgdv-explained-how-lenders-decide-what-you-can-borrow/) _(non extraite : voir section 10)_

### Études de cas (23)

- [Silver Oak Capital Case Studies](https://www.silveroakcapital.co.uk/case-studies/)
- [NW London Bridging Loan](https://www.silveroakcapital.co.uk/case-studies/nw-london-bridge/)
- [£3.6 Million Bridging Loan](https://www.silveroakcapital.co.uk/case-studies/3-6-million-bridging-loan-prime-kensington-property/)
- [Bridging Loan for Land with Planning](https://www.silveroakcapital.co.uk/case-studies/bridging-loan-land-with-planning/)
- [/case-studies/800k-bridging-loan-refinance/](https://www.silveroakcapital.co.uk/case-studies/800k-bridging-loan-refinance/) _(non extraite : voir section 10)_
- [/case-studies/bridging-for-a-retail-purchase-in-liverpool/](https://www.silveroakcapital.co.uk/case-studies/bridging-for-a-retail-purchase-in-liverpool/) _(non extraite : voir section 10)_
- [/case-studies/bridging-villa-cap-ferrat/](https://www.silveroakcapital.co.uk/case-studies/bridging-villa-cap-ferrat/) _(non extraite : voir section 10)_
- [/case-studies/finance-for-100-senior-housing-development-in-kent/](https://www.silveroakcapital.co.uk/case-studies/finance-for-100-senior-housing-development-in-kent/) _(non extraite : voir section 10)_
- [/case-studies/manchester-office/](https://www.silveroakcapital.co.uk/case-studies/manchester-office/) _(non extraite : voir section 10)_
- [/case-studies/pbsa/](https://www.silveroakcapital.co.uk/case-studies/pbsa/) _(non extraite : voir section 10)_
- [/case-studies/g650/](https://www.silveroakcapital.co.uk/case-studies/g650/) _(non extraite : voir section 10)_
- [/case-studies/heesen-yacht-finance/](https://www.silveroakcapital.co.uk/case-studies/heesen-yacht-finance/) _(non extraite : voir section 10)_
- [/case-studies/aircraft-loan-falcon-900/](https://www.silveroakcapital.co.uk/case-studies/aircraft-loan-falcon-900/) _(non extraite : voir section 10)_
- [/case-studies/yacht-finance-calculator/](https://www.silveroakcapital.co.uk/case-studies/yacht-finance-calculator/) _(non extraite : voir section 10)_
- [/case-studies/top-aviation-firms/](https://www.silveroakcapital.co.uk/case-studies/top-aviation-firms/) _(non extraite : voir section 10)_
- [/case-studies/bvi-trust-refinance/](https://www.silveroakcapital.co.uk/case-studies/bvi-trust-refinance/) _(non extraite : voir section 10)_
- [/case-studies/1-46-million-refinance-prime-central-london-property/](https://www.silveroakcapital.co.uk/case-studies/1-46-million-refinance-prime-central-london-property/) _(non extraite : voir section 10)_
- [/case-studies/silver-oak-capital-added-to-spears-500-list-for-2022/](https://www.silveroakcapital.co.uk/case-studies/silver-oak-capital-added-to-spears-500-list-for-2022/) _(non extraite : voir section 10)_
- [/case-studies/miami-developer/](https://www.silveroakcapital.co.uk/case-studies/miami-developer/) _(non extraite : voir section 10)_
- [/case-studies/purchase-and-upgrade-21-million-office-in-london/](https://www.silveroakcapital.co.uk/case-studies/purchase-and-upgrade-21-million-office-in-london/) _(non extraite : voir section 10)_
- [/case-studies/notting-hill-large-residential-mortgage/](https://www.silveroakcapital.co.uk/case-studies/notting-hill-large-residential-mortgage/) _(non extraite : voir section 10)_
- [/case-studies/mayfair-self-employed-equity-release/](https://www.silveroakcapital.co.uk/case-studies/mayfair-self-employed-equity-release/) _(non extraite : voir section 10)_
- [/case-studies/country-estate-refinance/](https://www.silveroakcapital.co.uk/case-studies/country-estate-refinance/) _(non extraite : voir section 10)_

### Articles (blog) (32)

- [/common-uses-for-property-bridging-loans-in-the-uk/](https://www.silveroakcapital.co.uk/common-uses-for-property-bridging-loans-in-the-uk/) _(non extraite : voir section 10)_
- [/how-does-a-bridge-loan-work-for-developers/](https://www.silveroakcapital.co.uk/how-does-a-bridge-loan-work-for-developers/) _(non extraite : voir section 10)_
- [/regulating-bridging-loans-through-fca-rules/](https://www.silveroakcapital.co.uk/regulating-bridging-loans-through-fca-rules/) _(non extraite : voir section 10)_
- [/what-are-bridging-loans-and-how-do-they-work/](https://www.silveroakcapital.co.uk/what-are-bridging-loans-and-how-do-they-work/) _(non extraite : voir section 10)_
- [/how-to-use-a-bridging-loan-when-youre-stuck-in-a-property-chain/](https://www.silveroakcapital.co.uk/how-to-use-a-bridging-loan-when-youre-stuck-in-a-property-chain/) _(non extraite : voir section 10)_
- [/property-bridging-finance-for-uk-high-net-worth-individuals/](https://www.silveroakcapital.co.uk/property-bridging-finance-for-uk-high-net-worth-individuals/) _(non extraite : voir section 10)_
- [/how-does-a-bridging-loan-work/](https://www.silveroakcapital.co.uk/how-does-a-bridging-loan-work/) _(non extraite : voir section 10)_
- [/why-are-property-bridging-loans-popular-in-the-uk/](https://www.silveroakcapital.co.uk/why-are-property-bridging-loans-popular-in-the-uk/) _(non extraite : voir section 10)_
- [/importance-of-bridging-loans-for-property-development/](https://www.silveroakcapital.co.uk/importance-of-bridging-loans-for-property-development/) _(non extraite : voir section 10)_
- [/different-types-of-interest-options-with-bridging-loans/](https://www.silveroakcapital.co.uk/different-types-of-interest-options-with-bridging-loans/) _(non extraite : voir section 10)_
- [/what-is-smart-financing-innovative-funding-options-for-todays-investors/](https://www.silveroakcapital.co.uk/what-is-smart-financing-innovative-funding-options-for-todays-investors/) _(non extraite : voir section 10)_
- [/how-can-offshore-borrowers-secure-fast-uk-property-development-finance-and-bridging-loans/](https://www.silveroakcapital.co.uk/how-can-offshore-borrowers-secure-fast-uk-property-development-finance-and-bridging-loans/) _(non extraite : voir section 10)_
- [/your-trusted-local-finance-brokers-for-smart-lending-solutions/](https://www.silveroakcapital.co.uk/your-trusted-local-finance-brokers-for-smart-lending-solutions/) _(non extraite : voir section 10)_
- [/different-ways-to-add-value-to-the-property-before-selling/](https://www.silveroakcapital.co.uk/different-ways-to-add-value-to-the-property-before-selling/) _(non extraite : voir section 10)_
- [/development-finance-requirements-in-the-uk-explained/](https://www.silveroakcapital.co.uk/development-finance-requirements-in-the-uk-explained/) _(non extraite : voir section 10)_
- [/top-mistakes-to-avoid-when-applying-for-property-development-lending/](https://www.silveroakcapital.co.uk/top-mistakes-to-avoid-when-applying-for-property-development-lending/) _(non extraite : voir section 10)_
- [/how-does-property-development-finance-in-scotland/](https://www.silveroakcapital.co.uk/how-does-property-development-finance-in-scotland/) _(non extraite : voir section 10)_
- [/how-does-property-development-finance-work-a-step-by-step-guide/](https://www.silveroakcapital.co.uk/how-does-property-development-finance-work-a-step-by-step-guide/) _(non extraite : voir section 10)_
- [/different-ways-to-finance-new-build-homes-in-the-uk/](https://www.silveroakcapital.co.uk/different-ways-to-finance-new-build-homes-in-the-uk/) _(non extraite : voir section 10)_
- [/understanding-short-term-property-funding-for-uk-real-estate/](https://www.silveroakcapital.co.uk/understanding-short-term-property-funding-for-uk-real-estate/) _(non extraite : voir section 10)_
- [/what-you-need-to-know-about-high-net-worth-property-funding-in-the-uk/](https://www.silveroakcapital.co.uk/what-you-need-to-know-about-high-net-worth-property-funding-in-the-uk/) _(non extraite : voir section 10)_
- [/impact-of-inflation-and-interest-rates-on-uk-commercial-property/](https://www.silveroakcapital.co.uk/impact-of-inflation-and-interest-rates-on-uk-commercial-property/) _(non extraite : voir section 10)_
- [/find-the-perfect-mortgage-with-a-specialist-broker/](https://www.silveroakcapital.co.uk/find-the-perfect-mortgage-with-a-specialist-broker/) _(non extraite : voir section 10)_
- [/secure-the-best-business-loan-with-expert-brokerage-services/](https://www.silveroakcapital.co.uk/secure-the-best-business-loan-with-expert-brokerage-services/) _(non extraite : voir section 10)_
- [/how-do-the-rates-for-commercial-mortgages-differ-from-residential-mortgages/](https://www.silveroakcapital.co.uk/how-do-the-rates-for-commercial-mortgages-differ-from-residential-mortgages/) _(non extraite : voir section 10)_
- [/different-ways-to-grow-and-develop-property-value/](https://www.silveroakcapital.co.uk/different-ways-to-grow-and-develop-property-value/) _(non extraite : voir section 10)_
- [/which-mortgage-company-is-right-for-you/](https://www.silveroakcapital.co.uk/which-mortgage-company-is-right-for-you/) _(non extraite : voir section 10)_
- [/how-do-shared-ownership-mortgage-broker-work/](https://www.silveroakcapital.co.uk/how-do-shared-ownership-mortgage-broker-work/) _(non extraite : voir section 10)_
- [/how-much-does-a-bridging-loan-cost/](https://www.silveroakcapital.co.uk/how-much-does-a-bridging-loan-cost/) _(non extraite : voir section 10)_
- [/selecting-the-ideal-property-finance-specialist-for-successful-developments/](https://www.silveroakcapital.co.uk/selecting-the-ideal-property-finance-specialist-for-successful-developments/) _(non extraite : voir section 10)_
- [/stamp-duty-changes-in-the-uk-from-april-2025/](https://www.silveroakcapital.co.uk/stamp-duty-changes-in-the-uk-from-april-2025/) _(non extraite : voir section 10)_
- [/how-london-property-investment-advisors-help-maximise-roi/](https://www.silveroakcapital.co.uk/how-london-property-investment-advisors-help-maximise-roi/) _(non extraite : voir section 10)_

## 4. Fiche par page

Chaque fiche reprend ce que les extraits de moteur de recherche ont révélé de la page. Une fiche courte signifie que peu de texte a été indexé, pas que la page est vide.

### Accueil

#### Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions

URL : <https://www.silveroakcapital.co.uk/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** NOT REVEALED by search results. Seed records the tagline/positioning 'International Debt Advisory l Expert Finance Solutions' [seed], but whether it is the H1 is unconfirmed.  
**Meta description :** NOT REVEALED. Only the <title> surfaced (search [b]): 'Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions'.

**Résumé.** Homepage of Silver Oak Capital, a London-based (91 Wimpole Street, W1G) debt advisory / large-loan broker founded in 2019 by Jimmy Baillie. Search [b] returned the homepage with the title 'Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions' and summarised it as arranging debt across the UK, US, Western Europe and the Middle East through a network of over 800 lenders. Search [a] did not return the homepage itself; it returned third-party directories and other site pages describing the firm (loans roughly GBP 500k to GBP 20m, 700+/300+/500+ lender counts depending on source, services spanning development finance, bridging, commercial and residential mortgages, marine and aviation finance). Search [c] surfaced Spear's and LinkedIn material (UHNW clients, GBP 2m-20m secured loans, 800+ lenders, UK/Western Europe/Southern Africa/Middle East, a GB Bank GBP 3.5m refinance for a Monaco-based expatriate). The homepage body text itself (hero copy, section headings, CTAs) was NOT exposed by any of the three searches; the seed supplies the navigation, the sector list on the home page (retail, office, logistics, care homes, student accommodation, hotels) and the residential line 'Main home mortgages, Buy to Lets, Holiday Lets and HMO's'.

**Sections repérées**

- **Page title (confirmed)** — [b] 'Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions' (title shown for https://www.silveroakcapital.co.uk/).
- **Positioning / tagline (seed only)** — [seed] 'International Debt Advisory l Expert Finance Solutions'; 'one of Europe's leading large loan brokers'; 'London based mortgage broker specialising in real estate debt solutions'. Not re-confirmed by the three searches as homepage wording.
- **Geographic reach and lender network (confirmed for homepage)** — [b] summary: 'The homepage says the firm arranges debt across the UK, US, Western Europe and the Middle East through a network of over 800 lenders.' Matches seed (home: 800+ lenders; international menu: United Kingdom, Western Europe, Middle East, United States).
- **Services (from seed navigation + search summaries)** — [seed] Top navigation: Home, About, Services, Introducers, Lenders, Lender Calculator, FAQ, Case Studies, Blogs, Contact, Terms. Service families: Bridging, Development, Commercial, Residential/Wealth, Marine, Aviation, Securities and alternative (Lombard, single stock, crypto, bitcoin, art). [a] summary: services 'include development finance, bridging loans, commercial and residential mortgages, and marine and aviation finance'. [c] summary: 'independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance'.
- **Commercial property sectors on home page (seed only)** — [seed] sectorsOnHome: retail, office, logistics, care homes, student accommodation, hotels.
- **Residential line on home page (seed only)** — [seed] 'Main home mortgages, Buy to Lets, Holiday Lets and HMO's'.
- **Firm facts (third-party and other site pages)** — [a] 'London-based debt advisory and commercial mortgage broker'; 'founded in 2019, it focuses on advice for loans between £500k and £20m, secured on assets in the UK and abroad'; 'Jimmy Baillie is listed as founder and Managing Director'; 'The regulated entity is Silver Oak Capital Ltd, company number 08551479 (incorporated in England and Wales)'. [c] Spear's: 'established in 2019 and specialises in advising UHNW clients on secured loans between £2 million and £20 million'.
- **Contact (third-party listing)** — [a] 'The office is at 91 Wimpole Street, Marylebone, London W1G 0EF. The phone number is 0207 459 4440 and the email is enquiry@silveroakcapital.co.uk'. Seed gives W1G 0EE on /contact/ and +44 207 459 4440, WhatsApp, enquiry form.

**Phrases verbatim (anglais)**

> [b] "Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions" (page title for https://www.silveroakcapital.co.uk/)
>
> [b] "The homepage says the firm arranges debt across the UK, US, Western Europe and the Middle East through a network of over 800 lenders."
>
> [b] "The About Us page says the founder set it up in 2019 to advise on loans of £500k to £20m secured on UK and overseas assets, with debt arranged in jurisdictions such as France, Spain, Dubai and South Africa."
>
> [b] "The firm's offshore structures page says it works with a network of hundreds of lenders that fund offshore companies, trusts and cross-border assets."
>
> [b] "The Western Europe page describes cross-border property and asset finance advice. It credits the firm's lender database, which spans specialist lenders, private debt funds, major European banks and private banks."
>
> [b] "The introducers page says the firm structures bespoke debt across the UK and Western Europe, covering mortgages, bridging, development finance and complex structures."
>
> [b] "The Lombard loan page covers securities-backed lending and says the firm has structured facilities across Europe and advised on transactions in the UK and internationally."
>
> [a] "It is a London-based debt advisory and commercial mortgage broker. It focuses on loans of roughly £500k to £20m, mainly for property developers and investors (founded in 2019, it focuses on advice for loans between £500k and £20m, secured on assets in the UK and abroad)."
>
> [a] "It says it works with 700+ lenders and gives independent, whole-of-market advice (the firm cites access to the largest network of lenders in the market). Another listing cites 300+ lenders, so the figures differ across sources."
>
> [a] "the Instagram profile lists 500+ lenders plus development, bridging, residential and commercial, and marine and aviation finance"
>
> [a] "The office is at 91 Wimpole Street, Marylebone, London W1G 0EF. The phone number is 0207 459 4440 and the email is enquiry@silveroakcapital.co.uk"
>
> [a] "The regulated entity is Silver Oak Capital Ltd, company number 08551479 (incorporated in England and Wales)."
>
> [a] "Jimmy Baillie is listed as founder and Managing Director."
>
> [c] "Spear's describes Baillie as the founder and managing director. The company was established in 2019 and specialises in advising UHNW clients on secured loans between £2 million and £20 million."
>
> [c] "The firm offers independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance. Its lender panel is reported at over 800 lenders."
>
> [c] "Spear's says it arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East."
>
> [c] "Clients include private individuals, family offices and real estate developers from locations around the globe, including the UK, France, Spain, Dubai and South Africa."
>
> [c] "A LinkedIn post shared by an associate says GB Bank delivered a £3.5 million refinance facility with Silver Oak Capital Debt Advisory, for an expatriate client based in Monaco."
>
> [seed] "International Debt Advisory l Expert Finance Solutions"
>
> [seed] "one of Europe's leading large loan brokers"
>
> [seed] "London based mortgage broker specialising in real estate debt solutions"
>
> [seed] "Main home mortgages, Buy to Lets, Holiday Lets and HMO's"

**Produits et services cités**

- Bridging loans (UK-wide, London focus) [seed][a][c]
- Auction finance, below market value purchases, distressed asset finance, light to heavy refurbishment, conversions, development exit loans, post-planning land acquisitions [seed]
- Property development finance: senior, stretch senior, mezzanine/junior, whole loans, first-time developer finance [seed][a]
- Commercial mortgages (owner-occupier regulated and investor), mixed-use property finance, hotel finance [seed][a]
- Residential / wealth: prime residential, prime London, private bank mortgages, foreign national mortgages, international property mortgages, complex offshore structures, buy-to-let, HMO finance, portfolio mortgages, probate lending [seed][c]
- Marine finance: boat finance, yacht mortgages, superyacht finance, marine lease finance, pre-construction marine finance [seed][a][c]
- Aviation finance: secured loan, operating lease, finance lease, aviation bridging loans, senior secured aircraft finance advisory [seed][a][c]
- Securities-backed and alternative: Lombard loan advisory, single stock lending advisory, crypto bridging advisory, bitcoin loans advisory, art finance advisory [seed][b]
- Introducer programme and lender partnerships [seed][b]
- Lender Calculator tool [seed]

**Cas d'usage**

- Arranging debt for property developers and investors [a]
- Secured loans for UHNW clients [c]
- Cross-border / offshore borrowing: offshore companies, trusts, cross-border assets [b]
- Refinance (example: GBP 3.5m GB Bank refinance for a Monaco-based expatriate) [c]
- Commercial sectors on home page: retail, office, logistics, care homes, student accommodation, hotels [seed]
- Residential: main home mortgages, buy to lets, holiday lets, HMOs [seed]

**Conditions, montants, délais, frais**

- Loan sizes: 'over £500,000' (home, per seed); 'between £500k and £20m' [a]; 'between £2 million and £20 million' for UHNW clients (Spear's) [c]; GBP 2-20m on /commercial-mortgage-broker/ [seed]
- Lender network: 'over 800 lenders' (homepage) [b][c]; 700+ [a, commercial-mortgage-broker page]; 500+ (Instagram) [a]; 300+ (another listing) [a]
- Security: loans 'secured on assets in the UK and abroad' [a]; 'secured loans' [c]
- Rates, LTV, durations, fees, timescales: NOT REVEALED for the homepage by any of the three searches. Seed gives fee claims from other pages only (e.g. ~1% broker fee on /types-of-borrowing/, blog: ~£1,500 application + 0.5% at offer + 0.5% at completion).

**Critères d'éligibilité**

- Client types named: private individuals, family offices, real estate developers [c]; property developers and investors [a]; UHNW clients [c]
- Client origins named: UK, France, Spain, Dubai, South Africa [b][c]; expatriate client based in Monaco [c]
- Specific eligibility criteria for the homepage: NOT REVEALED.

**Types de prêteurs**

- specialist lenders, private debt funds, major European banks and private banks (Western Europe page) [b]
- lenders that fund offshore companies, trusts and cross-border assets (offshore structures page) [b]
- GB Bank (named lender in a LinkedIn post about a GBP 3.5m refinance) [c]
- Homepage-specific lender type list: NOT REVEALED beyond 'network of over 800 lenders' [b].

**Étapes du processus**

- Homepage process steps: NOT REVEALED.
- Introducer process (introducers page, per [b]): 'a direct advisory process in which the introducer hands over the borrower once indicative terms are agreed'.

**Géographie**

- United Kingdom [b][c][seed]
- United States [b][seed]
- Western Europe [b][c][seed]
- Middle East [b][c][seed]
- Southern Africa (Spear's) [c]
- France, Spain, Dubai, South Africa (client/deal jurisdictions) [b][c]
- Monaco (expatriate client) [c]; Monaco, Dubai, Cape Town listed as other offices [seed]
- London, Marylebone (office) [a]

**Appels à l'action**

- Homepage CTAs: NOT REVEALED by searches.
- Contact routes known from seed/[a]: enquiry form, email enquiry@silveroakcapital.co.uk, phone 0207 459 4440 / +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **Does the homepage expose FAQ content?** No. None of the three searches surfaced FAQ text from the homepage. FAQ material exists on /faq/ (see seed snippet).

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of over 800 lenders (homepage) [b]; 'lender panel is reported at over 800 lenders' [c]
- (number-contradiction) 700+ lenders (/commercial-mortgage-broker/) [a]; 500+ lenders (Instagram) [a]; 300+ lenders (another listing) [a] - contradicts 800+
- (scope) Arranges debt across the UK, US, Western Europe and the Middle East [b]
- (credential) Founded in 2019 by Jimmy Baillie, Founder & Managing Director [a][b][c]
- (number) Loans between £500k and £20m [a][b]; £2m-£20m for UHNW clients per Spear's [c]
- (promise) Independent, whole-of-market advice; 'access to the largest network of lenders in the market' [a]
- (credential) Silver Oak Capital Ltd, company number 08551479, incorporated in England and Wales [a]
- (award/recognition) Spear's 500 adviser profile for Jimmy Baillie (spears500.com) [c][seed]
- (deal/testimonial-like) GB Bank delivered a £3.5 million refinance facility with Silver Oak Capital Debt Advisory for an expatriate client based in Monaco (LinkedIn) [c]
- (scope) Clients from UK, France, Spain, Dubai and South Africa [c]; debt arranged in France, Spain, Dubai and South Africa [b]
- (contact-contradiction) Office 91 Wimpole Street, Marylebone, London W1G 0EF [a] (seed: W1G 0EE) - postcode discrepancy

_Notes d'extraction : Search [a] (extended, exact URL) did not return the homepage; it returned other site pages and third-party directories. Search [b] (site: query) was the only one to return https://www.silveroakcapital.co.uk/ itself, exposing the page title and the 'UK, US, Western Europe and the Middle East ... over 800 lenders' statement. Search [c] (standard) mostly surfaced Spear's and LinkedIn plus unrelated …_

### Pages produits et services

#### Mortgage Bridging Loans UK & London

URL : <https://www.silveroakcapital.co.uk/bridging-loans-uk/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** Service page for Silver Oak Capital's UK bridging loans, with a stated London focus. Search results (titles + search-tool summaries) confirm the page title 'Mortgage Bridging Loans UK & London' and describe short-term property bridging loans for homeowners, investors and developers, approvals quoted at 5-14 days, same-day indicative terms, rapid completions across the UK and London, and rates sourced from specialist UK bridging lenders. The seed snippet adds: loans typically set up for 12 to 24 months, secured on property, interest rolled up (no affordability check), principal and interest repaid as one sum on expiry via refinance or sale, and a '700+ Lenders' claim. No H1, meta description, LTV, rate, fee or process-step text from this page itself was surfaced; the page body could not be fetched directly.

**Sections repérées**

- **Bridging loans UK wide, London focus (page positioning)** — [a][b][seed] The page positions Silver Oak Capital as providing bridging loans UK wide with a particular focus on the London property market, aimed at homeowners, investors and developers. [a] It describes short-term property bridging loans and presents London as a particular strength.
- **Speed: approvals and indicative terms** — [a] Search-tool summary of the page's description: approvals quoted at 5-14 days and same-day indicative terms with rapid completions across the UK and London property market. [b] Second search independently reports the page 'advertises approvals in 5-14 days'.
- **Common uses** — [b][seed] Buying a new property before selling your current one, funding a renovation, or covering a short-term cash flow gap.
- **How the loan is structured** — [seed] Loans typically set up for 12 to 24 months and secured on property; interest is rolled up rather than paid monthly, so no affordability check is needed; principal and interest repaid as one sum on expiry, usually via refinancing or sale. [b] A separate Silver Oak guide (page not identified by the search tool) says terms generally run between 1 and 24 months and that interest costs are generally higher than traditional finance, though interest can be rolled up.
- **Lender panel** — [a] The page says the firm sources rates from specialist UK bridging lenders. [seed] The page cites '700+ Lenders'. Neither of the three searches repeated a lender count.
- **Loan sizes (from other Silver Oak pages surfaced alongside)** — [a] /lenders/: generally focus[es] on transactions upwards of £500,000. [a] /commercial-mortgage-broker/: focuses on larger loan sizes of £2-£20 million. [b] HNW bridging guide: the firm's lenders offer loans from as little as £10,000 and are especially flexible for borrowers borrowing over £2,000,000. The search tool itself flagged that these thresholds differ.
- **Related bridging case studies surfaced** — [a] £3.6 Million Bridging Loan, prime Kensington property: finance arranged after two specialist lenders had previously withdrawn at the final stage. [b] NW London Bridging Loan: £19 million bridging loan at a 0.75% monthly rate over 12 months, arranged for a North West London development. [a] Trade press (bridgingandcommercial.co.uk, 2020): 'Silver Oak Capital completes its largest ever bridging loan of £19.1m' (described by the search tool as a refinance).

**Phrases verbatim (anglais)**

> [a] Page title in results: "Mortgage Bridging Loans UK & London"
>
> [a] "short-term property bridging loans"
>
> [a] approvals quoted at "5–14 days"
>
> [a] "same-day indicative terms with rapid completions across the UK and London property market"
>
> [a] "London as a particular strength"
>
> [a] "sources rates from specialist UK bridging lenders"
>
> [a] Homepage: "commercial mortgage brokerage services, property development finance, bridging loans, and development finance solutions"
>
> [a] /lenders/: "generally focus[es] on transactions upwards of £500,000"
>
> [a] /commercial-mortgage-broker/: "focuses on larger loan sizes of £2-£20 million"
>
> [a] Kensington case study: "arranged finance after two specialist lenders had previously withdrawn at the final stage"
>
> [a] bridgingandcommercial.co.uk headline: "Silver Oak Capital completes its largest ever bridging loan of £19.1m"
>
> [a] Third-party directory title: "Silver Oak Capital, Hackney" (mortgage118.com)
>
> [b] "covering the UK with a particular focus on London, aimed at homeowners, investors and developers"
>
> [b] "advertises approvals in 5–14 days"
>
> [b] "buying a new property before selling your current one, funding a renovation, or covering a short-term cash flow gap"
>
> [b] Guide (page unidentified): "terms generally run between 1 and 24 months"
>
> [b] Guide (page unidentified): "interest costs are generally higher than traditional finance, though interest can be rolled up"
>
> [b] HNW guide: "loans from as little as £10,000 and are especially flexible for borrowers borrowing over £2,000,000"
>
> [b] /auction-finance/: "a short-term bridging loan tailored to the time pressure of auctions"
>
> [b] NW London case study: "£19 million bridging loan at a 0.75% monthly rate over 12 months, arranged for a North West London development"
>
> [b] Result title: "Property Bridging Finance: A Guide for UK HNWIs"
>
> [b] Result title: "Property Bridging Loans UK Guide: Purchase, Sale & Refurbishment Finance"
>
> [b] Result title: "Fast Bridging Loans London" (/a-complete-guide-to-securing-quick-property-finance-in-london/)
>
> [b] Result title: "FCA Bridging Loan Regulations Explained - Silver Oak Capital"
>
> [b] Result title: "Auction Finance UK"
>
> [b] Result title: "NW London Bridging Loan"
>
> [c] Linktree (linktr.ee/silveroakcapital): "Secure Fast UK Property Development Finance and Bridging Loans"
>
> [seed] "provides bridging loans UK wide, with a strong focus on the London property market"
>
> [seed] "aimed at homeowners, investors and developers"
>
> [seed] "loans typically set up for 12 to 24 months and secured on property"

**Produits et services cités**

- Bridging loans UK wide (London focus)
- Short-term property bridging loans
- Same-day indicative terms
- Sourcing rates from specialist UK bridging lenders
- Related (other pages): auction finance bridging, bridging for HNW individuals, commercial mortgage brokerage, property development finance

**Cas d'usage**

- Buying a new property before selling your current one
- Funding a renovation
- Covering a short-term cash flow gap
- Case study: £3.6m bridge on a prime Kensington property after two lenders withdrew
- Case study: £19m bridge for a North West London development (0.75% per month, 12 months)
- Related page: auction purchases under time pressure (/auction-finance/)

**Conditions, montants, délais, frais**

- Duration: typically 12 to 24 months [seed, this page]; a separate Silver Oak guide says generally between 1 and 24 months [b]
- Security: secured on property [seed]
- Interest: rolled up rather than paid monthly; no affordability check needed [seed]; interest costs generally higher than traditional finance [b, guide]
- Repayment: principal and interest repaid as one sum on expiry, usually via refinancing or sale [seed]
- Timescales: approvals quoted at 5-14 days; same-day indicative terms; rapid completions [a][b]
- Rate example (case study, not a page quote): 0.75% per month over 12 months on a £19m NW London bridge [b]
- Loan sizes (other pages): generally upwards of £500,000 [/lenders/, a]; £2-£20 million focus [/commercial-mortgage-broker/, a]; lenders from as little as £10,000, especially flexible over £2,000,000 [HNW guide, b]
- LTV: not stated in any result for this page or for Silver Oak generally [c]
- Fees: not stated in any result for this page

**Critères d'éligibilité**

- Homeowners, investors and developers [a][b][seed]
- No affordability check needed because interest is rolled up [seed]
- Related HNW guide: borrowers over £2,000,000 get especially flexible treatment [b]

**Types de prêteurs**

- Specialist UK bridging lenders [a]
- '700+ Lenders' claimed on this page [seed]; not repeated in the three searches

**Étapes du processus**

- Same-day indicative terms [a]
- Approval in 5-14 days [a][b]
- Rapid completion [a]
- Exit on expiry via refinance or sale, with principal and rolled-up interest repaid as one sum [seed]

**Géographie**

- UK wide
- London (particular focus / particular strength)
- North West London (case study)
- Kensington, prime central London (case study)
- Hackney (third-party directory listing, mortgage118.com; conflicts with seed office at 91 Wimpole Street W1G)

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (timescale) Approvals in 5-14 days
- (timescale) Same-day indicative terms
- (promise) Rapid completions across the UK and London property market
- (number) 700+ Lenders (this page, per seed; other pages say 300+, 500+, 800+)
- (positioning) Sources rates from specialist UK bridging lenders
- (positioning) London property market is a particular strength
- (promise) No affordability check needed (interest rolled up)
- (case-study) £3.6 million bridging loan completed on a prime Kensington property after two specialist lenders withdrew at the final stage
- (case-study) £19 million bridging loan at 0.75% per month over 12 months for a North West London development
- (press) Largest ever bridging loan of £19.1m (trade press, 2020)
- (number) Transactions generally upwards of £500,000 (/lenders/)
- (number) Focus on larger loan sizes of £2-£20 million (/commercial-mortgage-broker/)
- (number) Lenders offer loans from as little as £10,000, especially flexible over £2,000,000 (HNW guide)

_Notes d'extraction : Searches run: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk bridging loans UK'; (c) standard, '"Silver Oak Capital" bridging loans loan to value'. Search (c) produced nothing about this page: only a Linktree tagline and unrelated lenders (Hope Capital, Shawbrook, Recognise, LendInvest, Oak Capital AU, Silver Arch) which are ignored. The verbatim fragments tagged [a]/[b] come…_

#### Auction Finance UK

URL : <https://www.silveroakcapital.co.uk/auction-finance/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Search-result title of the page is 'Auction Finance UK' [a][b]. The page presents auction finance as a short-term bridging loan built around auction deadlines: a 10% deposit is paid on auction day, the remaining 90% must be completed within 28 days, and the loan gives 6 to 12 months to refinance onto a standard mortgage or sell the property for a profit [a][b]. Only two sentences of the page itself surfaced verbatim [b]. Supporting statements come from other site pages surfaced alongside it: /faq/ (terms indication by lunchtime if lot number sent in the morning; indicative terms usually within 1 to 4 hours; lenders lend on value as-is with a clear schedule of works; network of over 800 lenders UK and international) and /bridging-loans-uk/ (completion in as little as 5-14 days subject to lender approval). The search tool states the page does not reveal fees, rates or minimum loan sizes [a]. Search (c) returned no Silver Oak content at all.

**Sections repérées**

- **(inferred topic; page headings not revealed) What auction finance is** — Search tool [a]: 'a specific type of short-term bridging loan tailored to the logistics of buying under the time pressure of auctions'. Search tool [b]: 'a short-term bridging product built around auction deadlines'.
- **(inferred topic) Auction timeline: deposit and 28-day completion** — Verbatim [b]: "Typically, you need to pay a 10% deposit on the day of the auction and must complete the remaining 90% within 28 days."
- **(inferred topic) How the bridge works and exit routes** — Verbatim [b]: "Auction finance bridges this gap, providing the funds to complete the purchase quickly, giving you 6 to 12 months to either refinance onto a standard mortgage or sell the property for a profit."
- **(related page /faq/) Speed of indicative terms for auction lots** — Verbatim [b]: "If you send us the auction lot number and your details in the morning, we can often give you a solid indication of terms by lunchtime." Search tool [a]: indicative terms usually arrive within 1 to 4 hours.
- **(related page /faq/) Lending on property condition** — Search tool [a]: lenders will lend on the property's value as is, provided you have a clear schedule of works and the budget to fix the issues.
- **(related page /faq/) Lender network** — Search tool [a]: network of over 800 lenders, both in the UK and internationally. Contradiction: Letting Agent Today directory cites over 300 lenders [a]; seed cites 700+ on /bridging-loans-uk/ [seed].
- **(related page /bridging-loans-uk/) Completion speed** — Verbatim [b]: "Our bridging loans across the UK, including London, can complete in as little as 5–14 days, subject to lender approval."
- **(related article) FCA regulation and auction purchases** — Search tool [b]: an FCA-focused article notes regulated bridging loans can be used for auction purchases, since they help meet the 28-day payment timeline; it also explains the difference between open-ended and close-ended loans.
- **(not revealed) Fees, rates, minimum loan size** — Search tool [a]: 'The page does not state fees, rates, or minimum loan sizes in the results I saw.' Nothing in [b] or [c] fills this gap.

**Phrases verbatim (anglais)**

> [b] (/auction-finance/) "Typically, you need to pay a 10% deposit on the day of the auction and must complete the remaining 90% within 28 days."
>
> [b] (/auction-finance/) "Auction finance bridges this gap, providing the funds to complete the purchase quickly, giving you 6 to 12 months to either refinance onto a standard mortgage or sell the property for a profit."
>
> [a] (/auction-finance/, search-tool summary wording) "a specific type of short-term bridging loan tailored to the logistics of buying under the time pressure of auctions"
>
> [a] (/auction-finance/, search-tool summary wording) "Buyers typically put down a deposit on auction day and then have 28 days to complete."
>
> [a] (/auction-finance/, search-tool summary wording) "the bridge gives you 6 to 12 months to either refinance onto a standard mortgage or sell the property"
>
> [a] (/auction-finance/, search-tool negative statement) "The page does not state fees, rates, or minimum loan sizes in the results I saw."
>
> [b] (/auction-finance/, search-tool summary wording) "a short-term bridging product built around auction deadlines"
>
> [b] (/faq/) "If you send us the auction lot number and your details in the morning, we can often give you a solid indication of terms by lunchtime."
>
> [a] (/faq/, search-tool summary wording) "indicative terms usually arrive within 1 to 4 hours"
>
> [a] (/faq/, search-tool summary wording) "lenders will lend on the property's value as is, provided you have a clear schedule of works and the budget to fix the issues"
>
> [a] (/faq/, search-tool summary wording) "the firm has a network of over 800 lenders, both in the UK and internationally"
>
> [a] (Letting Agent Today trades directory, search-tool summary wording) "An older directory listing cites over 300 lenders, so the figure may be outdated or inconsistent."
>
> [b] (/bridging-loans-uk/) "Our bridging loans across the UK, including London, can complete in as little as 5–14 days, subject to lender approval."
>
> [b] (/regulating-bridging-loans-through-fca-rules/amp/, search-tool summary wording) "regulated bridging loans can be used for auction purchases, since they help meet the 28-day payment timeline"; the article "also explains the difference between open-ended and close-ended loans"
>
> [c] No Silver Oak Capital result; search tool: "I couldn't find any results about Silver Oak Capital specifically."
>
> [seed] (/bridging-loans-uk/) "loans typically set up for 12 to 24 months and secured on property; interest is rolled up rather than paid monthly, so no affordability check is needed"
>
> [seed] (/lenders/) "generally focuses on transactions upwards of £500,000"

**Produits et services cités**

- Auction finance (short-term bridging loan to complete an auction purchase within the 28-day deadline) [a][b]
- Bridging loans UK & London (parent product; page title 'Mortgage Bridging Loans UK & London') [b]
- Sibling 'Bridging' menu services per seed: Below Market Value Purchases, Distressed Asset Finance, Light to Heavy Refurbishment, Conversions, Development Exit Loans, Post Planning Land Acquisitions [seed]
- Below Market Value Property Finance UK (page surfaced alongside) [b]
- Post Planning Land Finance UK (page surfaced alongside) [a][b]

**Cas d'usage**

- Buying property at auction where a 10% deposit is paid on the day and the remaining 90% must be completed within 28 days [b]
- Completing the purchase quickly, then refinancing onto a standard mortgage within 6 to 12 months [a][b]
- Completing the purchase quickly, then selling the property for a profit within 6 to 12 months [b]
- Properties needing works: lenders lend on the value as-is provided there is a clear schedule of works and budget to fix the issues [a, /faq/]
- Auction purchases via regulated bridging loans to meet the 28-day payment timeline [b, FCA article]

**Conditions, montants, délais, frais**

- Deposit: 10% on the day of the auction [b]
- Completion: remaining 90% within 28 days [a][b]
- Loan duration: 6 to 12 months [a][b]
- Exit: refinance onto a standard mortgage or sale of the property [a][b]
- Indicative terms: usually within 1 to 4 hours [a, /faq/]; 'solid indication of terms by lunchtime' if lot number and details sent in the morning [b, /faq/]
- Completion speed (bridging generally): 'as little as 5–14 days, subject to lender approval' [b, /bridging-loans-uk/]
- Valuation basis: lend on the property's value as is, with a clear schedule of works and budget [a, /faq/]
- Fees, rates, minimum loan size: NOT stated in results [a]
- Security: not stated for this page; seed says bridging loans are 'secured on property' [seed, /bridging-loans-uk/]
- Contradiction to note: auction page says 6 to 12 months [a][b] whereas seed snippet for /bridging-loans-uk/ says bridging loans are 'typically set up for 12 to 24 months' [seed]
- Firm-level minimum per seed: 'generally focuses on transactions upwards of £500,000' [seed, /lenders/]; not confirmed on this page

**Critères d'éligibilité**

- No eligibility criteria revealed for /auction-finance/ in the results
- Property condition: lenders accept value as-is if borrower has a clear schedule of works and the budget to fix the issues [a, /faq/]
- Regulated bridging loans can be used for auction purchases [b, FCA article]; seed /faq/: 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan' [seed]

**Types de prêteurs**

- 'network of over 800 lenders, both in the UK and internationally' [a, /faq/]
- Letting Agent Today directory listing: over 300 lenders (older, flagged as possibly outdated/inconsistent by the search tool) [a]
- Seed: 700+ lenders cited on /bridging-loans-uk/; 300+/500+/800+ cited elsewhere [seed]
- Lender types (bank, specialist, private) not named in results for this page

**Étapes du processus**

- Send the auction lot number and your details in the morning; a solid indication of terms can often be given by lunchtime [b, /faq/]
- Indicative terms usually arrive within 1 to 4 hours [a, /faq/]
- Pay a 10% deposit on the day of the auction [b]
- Complete the remaining 90% within 28 days, funded by the auction finance bridge [b]
- Bridging loans can complete in as little as 5–14 days, subject to lender approval [b, /bridging-loans-uk/]
- Within 6 to 12 months, refinance onto a standard mortgage or sell the property for a profit [a][b]
- Seed (not confirmed on this page): enquiry form fields are name, contact details, finance type, amount, country of residence, brief overview, consent; firm typically narrows lenders to 3 or 4 potential partners [seed]

**Géographie**

- United Kingdom (page title 'Auction Finance UK') [a][b]
- London (bridging loans page: 'across the UK, including London') [b]
- Lenders 'both in the UK and internationally' [a, /faq/]
- Seed: London-based broker, UK wide with strong focus on London property market [seed]

**Appels à l'action**

- No call to action revealed for /auction-finance/ in the results
- Implicit CTA from /faq/: send the auction lot number and your details [b]
- Seed (site-wide, not confirmed on this page): enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp [seed]

**Questions fréquentes**

- **(reconstructed from /faq/, not from /auction-finance/) How quickly can you give terms for an auction lot?** "If you send us the auction lot number and your details in the morning, we can often give you a solid indication of terms by lunchtime." [b]; indicative terms usually within 1 to 4 hours [a]
- **(reconstructed from /faq/) Will lenders lend on a property that needs work?** Lenders will lend on the property's value as is, provided you have a clear schedule of works and the budget to fix the issues [a]
- **(reconstructed from /faq/) How many lenders do you work with?** A network of over 800 lenders, both in the UK and internationally [a]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of over 800 lenders, both in the UK and internationally [a, /faq/]
- (number-contradiction) Over 300 lenders per Letting Agent Today trades directory listing (older, inconsistent with 800+) [a]
- (promise-timescale) Indicative terms usually within 1 to 4 hours [a, /faq/]
- (promise-timescale) Solid indication of terms by lunchtime if auction lot number and details sent in the morning [b, /faq/]
- (promise-timescale) Bridging loans across the UK, including London, can complete in as little as 5–14 days, subject to lender approval [b, /bridging-loans-uk/]
- (product-term) Auction finance gives 6 to 12 months to refinance or sell [a][b]
- (market-fact-stated-on-page) 10% deposit on auction day, remaining 90% within 28 days [b]
- (absence) No testimonials, awards, credentials, fees, rates or minimum loan sizes revealed for this page [a][b][c]

_Notes d'extraction : Seed file holds no snippetsFromFirstPass entry for /auction-finance/; the page is listed under navigation.services.Bridging as 'Auction Finance'. Queries: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk auction finance bridging loan'; (c) standard, '"Silver Oak Capital" auction finance "how it works"' -> no Silver Oak results, only generic auction-finance guides (Kandoo, iwoca…_

#### Below Market Value Purchases

URL : <https://www.silveroakcapital.co.uk/below-market-purchases/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** Silver Oak Capital's Below Market Value (BMV) Purchases page (a Bridging sub-page in the site nav) explains that a BMV purchase is one where the buyer pays less than open market value; a high-street bank lends against the lower purchase price while a specialist BMV/bridging lender can lend against the higher open market valuation. The page uses a worked example (house worth £200,000 bought for £150,000: 75% of price = £112,500 leaving a £37,500 deposit, whereas 75% of value = £150,000 covers the whole price). It names three buyer situations (family sale at a discount, sitting tenant buying their rented home, professional investor buying from a distressed seller), says bridging lenders do not apply the six-month refinance restriction that mainstream mortgage lenders do, and stresses that the reason for the discount (the 'story') matters to lenders. H1, meta description, rates, fees, loan sizes, durations, process and CTAs were not revealed by the search results.

**Sections repérées**

- **What is a below market value (BMV) purchase** — [a] A BMV purchase is a deal where the buyer pays less than the open market value of the property. The page is described as 'a specialist lending service for buying property below its open market value'.
- **How lenders treat BMV purchases: high street vs specialist** — [a] A high-street bank typically lends against the lower purchase price, while a specialist BMV lender can lend against the higher valuation. [b] A specialist BMV lender can often lend against the open market value rather than the discounted price. [b] Search summary across Silver Oak pages: 'offering lending on open market value, with bridging funds arranged in days'.
- **Worked example (£200,000 value / £150,000 price)** — [a] A £200,000 house bought for £150,000. A 75% loan on the purchase price gives a £112,500 mortgage, which leaves a £37,500 deposit to find. A 75% loan on the £200,000 value covers the whole £150,000 price. [b] 'A specialist BMV lender can often lend based on the £200,000 open market value.'
- **Who uses BMV finance** — [a] Three target buyer situations are named: family sales at a discount, sitting tenants buying the home they rent, and professional investors buying from distressed sellers.
- **Six-month refinance restriction** — [b] Bridging lenders don't apply the six-month refinance restriction that mainstream mortgage lenders do.
- **The 'story' behind the discount** — [b] The page stresses that the reason for the discount, or 'story', matters to lenders.
- **Legality (from sibling /faq/ page, surfaced in [b])** — [b] The FAQ page says the practice is legal, but misrepresenting the price to a lender is mortgage fraud: 'Buying a house for any agreed price is legal, but misleading a lender about the price is mortgage fraud.'
- **Related bridging pages surfaced with this one** — [b] /distressed-asset-finance/ covers repossessed properties and part-complete developments bought below value and recommends a clear asset management plan; /auction-finance/ describes bridging loans built around auction completion deadlines; /bridging-loans-for-prime-central-london-purchases/ and /post-planning-land-acquisitions/ also appeared. [seed] Nav places 'Below Market Value Purchases' under Bridging alongside Bridging Loans UK, Auction Finance, Distressed Asset Finance, Light to Heavy Refurbishment, Conversions, Development Exit Loans, Post Planning Land Acquisitions.

**Phrases verbatim (anglais)**

> [a] (search result title) "Below Market Value Purchases"
>
> [a] (search-tool summary) "a specialist lending service for buying property below its open market value"
>
> [a] (search-tool summary) "a BMV purchase is a deal where the buyer pays less than the open market value. A high-street bank typically lends against the lower purchase price, while a specialist BMV lender can lend against the higher valuation."
>
> [a] (search-tool summary, worked example) "a £200,000 house bought for £150,000. A 75% loan on the purchase price gives a £112,500 mortgage, which leaves a £37,500 deposit to find. A 75% loan on the £200,000 value covers the whole £150,000 price."
>
> [a] (search-tool summary, target buyers) "family sales at a discount, sitting tenants buying the home they rent, and professional investors buying from distressed sellers"
>
> [a] (search-tool caveat) "I did not retrieve the full page text, so the page's terms, fees, and eligibility criteria are unverified."
>
> [b] (search result title) "Below Market Value Purchases"
>
> [b] (search-tool summary) "a specialist BMV lender can often lend against the open market value rather than the discounted price, and bridging lenders don't apply the six-month refinance restriction that mainstream mortgage lenders do"
>
> [b] (search-tool summary) "It also stresses that the reason for the discount, or 'story,' matters to lenders."
>
> [b] (quoted sentence in search-tool summary, closest to page text) "A specialist BMV lender can often lend based on the £200,000 open market value."
>
> [b] (search-tool summary about /faq/) "the practice is legal, but misrepresenting the price to a lender is mortgage fraud"
>
> [b] (quoted sentence in search-tool summary about /faq/) "Buying a house for any agreed price is legal, but misleading a lender about the price is mortgage fraud."
>
> [b] (search-tool summary about /distressed-asset-finance/) "covers repossessed properties and part-complete developments bought below value, and recommends a clear asset management plan"
>
> [b] (search-tool summary about /auction-finance/) "describes bridging loans built around auction completion deadlines"
>
> [b] (search-tool summary, site-wide) "Silver Oak's pages describe the company as offering lending on open market value, with bridging funds arranged in days."
>
> [b] (search-tool freshness note) "the pages date from roughly 4 to 7 months ago"
>
> [seed] navigation label under Bridging: "Below Market Value Purchases"
>
> [seed] sibling /bridging-loans-uk/ (not this page): "loans typically set up for 12 to 24 months and secured on property; interest is rolled up rather than paid monthly, so no affordability check is needed; principal and interest repaid as one sum on expiry, usually via refinancing or sale; cites 700+ Lenders"

**Produits et services cités**

- Below market value (BMV) purchase finance: bridging/specialist lending sized against open market value rather than the discounted purchase price [a][b]
- Bridging finance for BMV purchases free of the six-month refinance restriction applied by mainstream mortgage lenders [b]
- Related Silver Oak bridging products surfaced alongside this page: Auction Finance, Distressed Asset Finance, Post Planning Land Acquisitions, Bridging Loans for Prime Central London Purchases [b]

**Cas d'usage**

- Family sale at a discount [a]
- Sitting tenant buying the home they rent [a]
- Professional investor buying from a distressed seller [a]
- Buying below open market value where a high-street bank would lend only on the purchase price, leaving a deposit gap (£37,500 in the worked example) [a]
- Related sibling pages [b]: repossessed properties and part-complete developments bought below value (/distressed-asset-finance/); auction purchases with completion deadlines (/auction-finance/)

**Conditions, montants, délais, frais**

- LTV (worked example only): 75% of £150,000 purchase price = £112,500 (deposit £37,500); 75% of £200,000 open market value = £150,000, covering the full purchase price [a][b]. No general maximum LTV stated.
- Lending basis: specialist BMV lender lends against open market value, not discounted price [a][b]
- Refinance: bridging lenders do not apply the six-month refinance restriction used by mainstream mortgage lenders [b]
- Timescale: 'bridging funds arranged in days' (search summary attributes this to Silver Oak pages generally, not confirmed on this specific page) [b]
- NOT revealed for this page: interest rates, broker/lender fees, minimum/maximum loan size, loan duration, security/charge details. [a] states explicitly that terms, fees and eligibility criteria are unverified.
- [seed] sibling /bridging-loans-uk/: 12 to 24 months, secured on property, interest rolled up, repaid via refinance or sale (not confirmed on BMV page)

**Critères d'éligibilité**

- The reason for the discount ('story') matters to lenders [b]
- Buyer situations named: family discount sales, sitting tenants, professional investors buying from distressed sellers [a]
- Legality caveat (from /faq/ via [b]): buying at any agreed price is legal, but misleading a lender about the price is mortgage fraud
- No explicit criteria (credit, residency, minimum loan, property type, experience) revealed in results

**Types de prêteurs**

- Specialist BMV lenders: lend against open market value [a][b]
- Bridging lenders: no six-month refinance restriction [b]
- Contrast: high-street banks / mainstream mortgage lenders: lend against the lower purchase price and apply the six-month rule [a][b]
- [seed] firm-level lender-network claims not seen on this page: 700+ (/bridging-loans-uk/), 800+ (home, /faq/)

**Étapes du processus**

- [seed] firm-wide: contact via enquiry form, email or WhatsApp; lender shortlist typically narrowed to 3 or 4 potential partners (/commercial-mortgage-broker/, /property-development-finance/)

**Géographie**

- UK (page sits under UK bridging in the site nav; no geography stated specifically for this page in results) [seed]
- London-based firm per LinkedIn/Crunchbase [a]

**Appels à l'action**

- [seed] site-wide: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **Is buying a property below market value legal?** [b] from /faq/: 'Buying a house for any agreed price is legal, but misleading a lender about the price is mortgage fraud.'
- **How much can be borrowed on a BMV purchase?** [a][b] worked example only: 75% of the £200,000 open market value (£150,000) covers the full discounted purchase price, whereas a high-street 75% on the £150,000 price gives £112,500. No general LTV cap stated.
- **Can a BMV purchase be refinanced within six months?** [b]: bridging lenders don't apply the six-month refinance restriction that mainstream mortgage lenders do.
- **What do lenders want to know about a BMV deal?** [b]: the reason for the discount, or 'story', matters to lenders.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (product-positioning [a][b]) A specialist BMV lender can lend against the higher open market valuation whereas a high-street bank lends against the lower purchase price
- (number / worked-example [a][b]) Worked example: £200,000 value, £150,000 price, 75% LTV: £112,500 (on price) vs £150,000 (on value); £37,500 deposit gap eliminated
- (product-feature [b]) Bridging lenders don't apply the six-month refinance restriction that mainstream mortgage lenders do
- (speed promise (search summary…) Lending on open market value, with bridging funds arranged in days
- (advice / criteria [b]) The 'story' behind the discount matters to lenders
- (legal caveat (from /faq/) [b]) Buying at any agreed price is legal; misleading a lender about the price is mortgage fraud
- (freshness metadata from searc…) Pages date from roughly 4 to 7 months ago (approx. March to June 2026)
- (credential / third-party conf…) LinkedIn and Crunchbase profiles confirm Silver Oak Capital is a London-based real estate debt firm
- (absence) No testimonials, awards, credentials, lender-count figures, rates or fees surfaced for this page

_Notes d'extraction : Seed had no snippetsFromFirstPass entry for /below-market-purchases/; only the nav label 'Below Market Value Purchases' under Bridging. The 'verbatim' items are the search tool's summaries, not confirmed page text; only two sentences appeared quoted in the summaries ('A specialist BMV lender can often lend based on the £200,000 open market value.' and the /faq/ mortgage-fraud sentence). Both [a] …_

#### Distressed Asset Finance UK

URL : <https://www.silveroakcapital.co.uk/distressed-asset-finance/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Not revealed by the search results. Only the search-result title 'Distressed Asset Finance UK' was returned [a][b]; the on-page H1 may differ.  
**Meta description :** Probable meta description (two-sentence summary line returned by [a], not confirmed as the meta tag): "Secure funding for distressed assets including property and businesses. Fast, flexible finance solutions for turnaround and recovery situations."

**Résumé.** Silver Oak Capital's /distressed-asset-finance/ page presents the firm as a UK/London debt-advisory broker arranging finance for distressed assets, covering both property and businesses, for 'turnaround and recovery situations'. The snippets define distressed assets as those undergoing financial hardship due to the owner's standing (foreclosure, bankruptcy, default, poor management), list common types (foreclosures, bank-mandated sales, part-complete developments, underperforming assets), state that purchasers are often offered a substantial discount, and say the financing process mirrors ordinary asset finance but can be quicker: within days for the right asset and borrower, generally 4-6 weeks. No loan sizes, LTVs, rates, fees or lender names were revealed for this page. Query (c) surfaced no page content at all.

**Sections repérées**

- **Intro / positioning (heading not revealed)** — [a] Financing for distressed property and businesses, aimed at turnaround and recovery situations. 'Secure funding for distressed assets including property and businesses. Fast, flexible finance solutions for turnaround and recovery situations.'
- **What are distressed assets? (heading inferred from content, not revealed)** — [a][b] Distressed assets are those 'undergoing some form of financial hardship', which 'may be due to the owner's financial standing, such as a foreclosure, bankruptcy, or default' [b]; [a] adds 'poor management' as a cause. Purchasers 'are often offered a substantial discount, creating interesting opportunities' [a].
- **Types of distressed assets (heading inferred, not revealed)** — [a] Search tool paraphrase: the page lists foreclosures, bank-mandated sales, part-complete developments, and underperforming assets as common types.
- **How long does it take? / process (heading inferred, possibly a FAQ item)** — [a][b] The process mirrors ordinary asset finance, with quicker timelines possible in some cases. 'For the right distressed asset (and borrower), finance can be arranged within days, although generally we would allow for 4–6 weeks to arrange.'

**Phrases verbatim (anglais)**

> [a] "Secure funding for distressed assets including property and businesses. Fast, flexible finance solutions for turnaround and recovery situations."
>
> [a] "Purchasers of distressed assets are often offered a substantial discount, creating interesting opportunities."
>
> [a] "For the right distressed asset (and borrower), finance can be arranged within days, although generally we would allow for 4–6 weeks to arrange."
>
> [b] "Distressed assets are those that are undergoing some form of financial hardship. This may be due to the owner's financial standing, such as a foreclosure, bankruptcy, or default."
>
> [b] "for the right distressed asset (and borrower), finance can be arranged within days, although generally we would allow for 4–6 weeks" (search tool attributed this to 'the FAQ'; [a] attributed the same sentence to the distressed-asset page itself)
>
> [b] (/below-market-purchases/, related page) "deploy bridging finance in days to secure the asset and then refinance you onto a long-term mortgage at a later stage"
>
> [b] (/faq/, related page) "database of hundreds of specialist lenders who generally have much more flexibility" (context given: when traditional lenders decline)
>
> [b] (another silveroakcapital.co.uk page, unspecified) "network of over 800 lenders, both in the UK and internationally"
>
> [a] (Ts-and-Cs.pdf) "offers a comprehensive range of first charge & second charge financial facilities from across the market"
>
> [a] (homepage) "expert commercial mortgage brokerage services, property development finance, bridging loans, and development finance solutions"
>
> [c] (LinkedIn company page snippet) "independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance"
>
> [c] (LinkedIn post snippet) "time-sensitive £4m refinance secured against a prime residential asset in Kensington"
>
> [seed] Page listed in the Services > Bridging menu as 'Distressed Asset Finance', alongside 'Bridging Loans UK', 'Auction Finance', 'Below Market Value Purchases', 'Light to Heavy Refurbishment', 'Conversions', 'Development Exit Loans', 'Post Planning Land Acquisitions'.

**Produits et services cités**

- Distressed asset finance for property [a][b]
- Distressed asset finance for businesses [a]
- Finance for turnaround and recovery situations [a]
- Bridging finance (page sits in the Bridging services menu) [seed]; related page: below-market-value purchase bridging followed by refinance onto a long-term mortgage [b]
- Debt advisory / brokerage, not direct lending [a]
- First charge and second charge facilities from across the market (Ts&Cs) [a]

**Cas d'usage**

- Purchasing a distressed asset at a substantial discount [a]
- Foreclosures [a]
- Bank-mandated sales [a]
- Part-complete developments [a]
- Underperforming assets [a]
- Turnaround and recovery situations for property or businesses [a]
- Owner in financial hardship: foreclosure, bankruptcy, default, poor management [a][b]
- Related (/below-market-purchases/): secure a below-market-value asset in days with bridging, then refinance onto a long-term mortgage [b]

**Conditions, montants, délais, frais**

- Timescale: 'finance can be arranged within days' for the right distressed asset and borrower; 'generally we would allow for 4–6 weeks to arrange' [a][b]
- Loan sizes: NOT revealed for this page (firm-level seed claims: 'over £500,000' on home and /lenders/; '£500k to £20m' on /about-us/) [seed]
- LTV: NOT revealed for this page
- Rates: NOT revealed
- Fees: NOT revealed for this page (firm-level seed: lender commission disclosed during process; blog ~£1,500 application + 0.5% at offer + 0.5% at completion) [seed]
- Duration: NOT revealed for this page (seed /bridging-loans-uk/: bridging typically 12 to 24 months) [seed]
- Security: first charge and second charge facilities offered per Ts&Cs [a]; bridging in this menu is secured on property [seed]

**Critères d'éligibilité**

- Speed depends on 'the right distressed asset (and borrower)' [a][b]; no explicit borrower criteria revealed
- Related /faq/: when traditional lenders decline, the firm has 'a database of hundreds of specialist lenders who generally have much more flexibility' [b]

**Types de prêteurs**

- Specialist lenders ('database of hundreds of specialist lenders') [b, /faq/]
- Network of 'over 800 lenders, both in the UK and internationally' [b, page unspecified]
- No lender names revealed for this page

**Étapes du processus**

- The financing process 'mirrors ordinary asset finance' [a, tool paraphrase]
- Quicker timelines possible in some cases: within days for the right asset/borrower, otherwise allow 4-6 weeks [a][b]
- Related (/below-market-purchases/): deploy bridging finance in days to secure the asset, then refinance onto a long-term mortgage later [b]

**Géographie**

- UK (page title 'Distressed Asset Finance UK') [a][b]
- London-based firm, 91 Wimpole St, London [a]
- Lender network 'both in the UK and internationally' [b]

**Questions fréquentes**

- **How long does it take to arrange distressed asset finance? (question wording inferred; [b] called this source 'the FAQ')** The process is much like financing an ordinary asset. 'For the right distressed asset (and borrower), finance can be arranged within days, although generally we would allow for 4–6 weeks to arrange.' [a][b]
- **What are distressed assets? (question wording inferred)** 'Distressed assets are those that are undergoing some form of financial hardship. This may be due to the owner's financial standing, such as a foreclosure, bankruptcy, or default.' [b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (timescale promise) Finance for distressed assets 'can be arranged within days' for the right asset and borrower [a][b]
- (timescale) Generally allow 4-6 weeks to arrange [a][b]
- (market claim) Purchasers of distressed assets 'are often offered a substantial discount' [a]
- (marketing promise) 'Fast, flexible finance solutions for turnaround and recovery situations' [a]
- (scope) Covers both property and businesses [a]
- (number / lender count) 'database of hundreds of specialist lenders' [b, /faq/]
- (number / lender count) 'network of over 800 lenders, both in the UK and internationally' [b, page unspecified]
- (scope) 'comprehensive range of first charge & second charge financial facilities from across the market' [a, Ts&Cs]
- (positioning) 'independent, whole-of-market advice' [c, LinkedIn]
- (deal example (not on this pag…) 'time-sensitive £4m refinance secured against a prime residential asset in Kensington' [c, LinkedIn post]
- (absence) No testimonials, awards or credentials were revealed for this page

_Notes d'extraction : Seed had no snippetsFromFirstPass entry for this path; only the navigation listing applied. Query (a) and (b) both surfaced the page; (c) surfaced zero page content (only generic distressed-asset articles, unrelated Oaktree/Silver Point/Silverleaf items, and a Silver Oak LinkedIn snippet) and the tool even said it could not confirm the service exists, which contradicts (a)/(b) where the page is d…_

#### Refurbishment Finance UK

URL : <https://www.silveroakcapital.co.uk/light-to-heavy-refurbishment/>  
Confiance : medium · Recherches effectuées : 3


**Résumé.** Service page for Silver Oak Capital's refurbishment finance, presented as a short-term bridging loan covering the purchase price of a property and typically 100% of build costs, with works funds released in stages/in arrears after inspection and interest rolled up or retained until sale or refinance. The page segments works into light (cosmetic, no building regs or planning), medium (beyond cosmetic, usually under Permitted Development Rights, often needing building regs approval) and heavy (extending the footprint or changing the roofline, e.g. dormer loft conversion). Search excerpts reveal no rates, fees, minimum loan size or LTV for this page; the heavy tier text was truncated in results. Search (c) surfaced nothing about the firm.

**Sections repérées**

- **Overview / bespoke refurbishment finance (light, medium, heavy)** — [a][b] 'Silver Oak Capital specialises in securing bespoke refurbishment finance solutions across the entire spectrum – light, medium, and heavy.' [a][b] The firm says it can fund up to 100% of build costs, released in stages. [a] The product is described as a short-term bridging loan that 'covers the purchase price of a property and typically 100% of the build costs'.
- **Light refurbishment** — [a] 'purely cosmetic updates that do not require building regulations or planning permission' - examples given: kitchens, bathrooms, decorating, flooring. [b] Examples repeated: kitchens, bathrooms, redecorating; the page notes these loans are typically quick to arrange with light monitoring (tool paraphrase).
- **Medium refurbishment** — [a][b] Works that go beyond cosmetic changes but stop short of major structural work; they 'often require building regulations approval but usually rely on Permitted Development Rights (PDRs)' rather than full planning permission.
- **Heavy refurbishment** — [a] Attributed by the search tool to 'the firm's FAQ': 'extending the footprint (extension) or changing the roofline (dormer loft conversion), it is Heavy.' [b] The heavy tier's details were cut off in results; nothing further revealed.
- **Interest and repayment** — [a] 'the interest is typically rolled up or retained' - interest is generally not paid monthly and is settled when the property is sold or refinanced at the end of the project. [b] (FAQ page per tool) no monthly payments are due during works.
- **Drawdowns / release of build costs** — [a] 'most lenders will advance 100% of the build costs. These are released in arrears' - build costs are reimbursed in arrears after an inspection, provided the end value supports the loan. [b] The lender reimburses after an inspection; funds released in stages.
- **Loan term** — [b] Described as a bridging loan that is a short-term facility (up to 12-24 months). [b] Another site page puts general bridging terms at between 1 and 36 months.
- **Related: HMO refurbishment bridging (from /hmo-finance/)** — [b] The HMO finance page says Silver Oak arranges refurbishment bridging finance for the purchase and works, and pre-agrees the exit onto a long-term HMO mortgage (tool paraphrase).

**Phrases verbatim (anglais)**

> [a][b] "Silver Oak Capital specialises in securing bespoke refurbishment finance solutions across the entire spectrum – light, medium, and heavy."
>
> [a] "covers the purchase price of a property and typically 100% of the build costs"
>
> [a] "purely cosmetic updates that do not require building regulations or planning permission"
>
> [a] "often require building regulations approval but usually rely on Permitted Development Rights (PDRs)"
>
> [a] "extending the footprint (extension) or changing the roofline (dormer loft conversion), it is Heavy." (search tool attributes this to the firm's FAQ)
>
> [a] "the interest is typically rolled up or retained"
>
> [a] "most lenders will advance 100% of the build costs. These are released in arrears"
>
> [a][b] Search-result page title: "Refurbishment Finance UK"
>
> [a][b] Search-result title of /faq/: "Property Finance FAQs"
>
> [a] Search-result title of /conversions/: "Property Conversion Finance UK"
>
> [b] Search-result title of /hmo-finance/: "HMO Finance UK"
>
> [b] Search-result title of /bridging-loans-uk/: "Mortgage Bridging Loans UK & London"
>
> [b] Search-result title of /common-uses-for-property-bridging-loans-in-the-uk/: "Property Bridging Loans UK Guide: Purchase, Sale & Refurbishment Finance"
>
> [b] Search-result title of /understanding-short-term-property-funding-for-uk-real-estate/: "Fast & Flexible Bridging Loans UK"
>
> [seed] /bridging-loans-uk/: "loans typically set up for 12 to 24 months and secured on property; interest is rolled up rather than paid monthly, so no affordability check is needed" (context from a sibling page, not this page)

**Produits et services cités**

- Refurbishment finance across light, medium and heavy works [a][b]
- Short-term refurbishment bridging loan covering purchase price plus typically 100% of build costs [a]
- Staged / in-arrears release of build-cost funding after inspection [a][b]
- Rolled-up or retained interest structure (no monthly payments during works) [a][b]
- Related: refurbishment bridging for HMO purchase and works with pre-agreed exit onto long-term HMO mortgage (/hmo-finance/) [b]
- Related sibling product: property conversion finance (/conversions/) [a]

**Cas d'usage**

- Cosmetic updates: kitchens, bathrooms, decorating, flooring (light) [a][b]
- Works beyond cosmetic but not major structural, carried out under Permitted Development Rights (medium) [a][b]
- Extensions / extending the footprint (heavy) [a]
- Changing the roofline, e.g. dormer loft conversion (heavy) [a]
- Buying a property and funding its refurbishment with exit via sale or refinance [a]
- Purchase and refurbishment to HMO, then refinance onto a long-term HMO mortgage [b]

**Conditions, montants, délais, frais**

- Loan type: short-term bridging loan [a][b]
- Term: short-term facility up to 12-24 months [b]; another site page cites general bridging terms of 1 to 36 months [b]
- Advance: covers purchase price of the property and typically 100% of build costs [a]
- Build costs: 'most lenders will advance 100% of the build costs', released in arrears / in stages after inspection [a][b]
- Condition on drawdowns: provided the end value supports the loan [a]
- Interest: typically rolled up or retained; no monthly payments during works [a][b]
- Repayment: principal and interest settled when the property is sold or refinanced at the end of the project [a]
- Monitoring: light refurbishment loans typically quick to arrange with light monitoring [b] (tool paraphrase)
- NOT revealed for this page: interest rates, fees, minimum/maximum loan size, LTV / loan-to-value limits, security details [a][b][c]

**Critères d'éligibilité**

- Light works: purely cosmetic updates that do not require building regulations or planning permission [a]
- Medium works: often require building regulations approval but usually rely on Permitted Development Rights (PDRs) rather than full planning permission [a][b]
- Heavy works: extending the footprint (extension) or changing the roofline (dormer loft conversion) [a]
- Drawdown of build costs conditional on the end value supporting the loan [a]
- No borrower eligibility criteria (status, nationality, experience, credit) revealed in the excerpts [a][b][c]

**Types de prêteurs**

- Not named on this page; generic reference only: 'most lenders will advance 100% of the build costs' [a]
- [seed] Sibling page /bridging-loans-uk/ cites '700+ Lenders'; home and /faq/ cite 800+; not stated in this page's excerpts

**Étapes du processus**

- 1. Bridging loan arranged to cover the property purchase price (and typically 100% of build costs) [a] - reconstructed order
- 2. Refurbishment works carried out; interest rolls up / is retained rather than paid monthly [a][b]
- 3. Lender inspects completed works [a][b]
- 4. Build costs reimbursed in arrears / released in stages after inspection, provided end value supports the loan [a][b]
- 5. Loan repaid at the end of the project through sale or refinance [a]; for HMO projects the exit onto a long-term HMO mortgage is pre-agreed [b]

**Géographie**

- United Kingdom (page title 'Refurbishment Finance UK') [a][b]
- [seed] Firm: London-based, UK-wide bridging with strong London focus (/bridging-loans-uk/); not stated in this page's excerpts

**Appels à l'action**

- [seed] Firm-wide contact routes: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **What counts as heavy refurbishment? (question reconstructed)** [a] 'extending the footprint (extension) or changing the roofline (dormer loft conversion), it is Heavy.' - attributed by the search tool to the firm's FAQ (unclear whether on-page FAQ block or /faq/)
- **How is interest paid during the works? (question reconstructed)** [a][b] 'the interest is typically rolled up or retained' - no monthly payments are due during works; settled on sale or refinance
- **How are build costs released? (question reconstructed)** [a][b] 'most lenders will advance 100% of the build costs. These are released in arrears' - the lender reimburses after an inspection

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning) Specialises in securing bespoke refurbishment finance solutions across the entire spectrum – light, medium, and heavy [a][b]
- (number/funding) Can fund up to 100% of build costs, released in stages [a][b]
- (number/funding) Loan covers the purchase price of a property and typically 100% of the build costs [a]
- (number/market statement) Most lenders will advance 100% of the build costs, released in arrears [a]
- (product feature) Interest is typically rolled up or retained; no monthly payments during works [a][b]
- (duration) Short-term facility, up to 12-24 months [b]
- (promise/speed) Light refurbishment loans typically quick to arrange with light monitoring [b] (tool paraphrase)
- (definition) Light works need no building regulations or planning permission; medium works usually rely on Permitted Development Rights [a][b]
- (absence) No testimonials, awards, credentials, rates, fees or LTV figures revealed in the excerpts for this page [a][b][c]

_Notes d'extraction : Seed file holds no snippet for /light-to-heavy-refurbishment/; everything page-specific comes from searches (a) and (b). H1 and meta description were not revealed; 'Refurbishment Finance UK' is the search-result title and may be the page <title> (possibly truncated). Search (c) ('Silver Oak Capital' light to heavy refurbishment finance 'loan to value') returned only unrelated UK lenders/brokers (…_

#### Property Conversion Finance UK

URL : <https://www.silveroakcapital.co.uk/conversions/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Property Conversion Finance UK (search-result title; H1 not confirmed by snippets)  

**Résumé.** The /conversions/ page presents Silver Oak Capital's 'conversion finance': short-term (bridging-type) funding for projects where the use class of a building changes. Two routes are described: (1) commercial-to-residential conversions under permitted development rights and (2) residential title-splitting, turning one large house into several flats. Lenders size the loan on the post-conversion value: the page cites borrowing of up to 65-70% of gross development value (GDV), said to cover most construction costs. The page also mentions the creation of new leases for each unit. Only partial excerpts were surfaced; no verbatim page text, meta description, FAQ, fees, rates, durations or CTA wording were revealed. Related site pages (refurbishment, HMO, mixed-use, bridging) carry adjacent detail.

**Sections repérées**

- **What conversion finance is** — Short-term funding designed for projects where the use class of a building is changing [b]. Positioned under the Bridging services group in site navigation [seed].
- **Commercial to residential (permitted development)** — Conversions of commercial buildings into residential use under permitted development rights [a][b].
- **Residential title splitting** — Projects that turn one large house into several flats, with titles split per unit [a][b].
- **How the loan is sized** — Lenders base the loan on the post-conversion value; the page cites borrowing of up to 65-70% of gross development value, which can cover most construction costs [a].
- **New leases per unit** — The page mentions the legal work of creating new leases for each unit; the search summary attributes this to the firm, which may be a paraphrase of a process description [a].
- **Related pages surfaced** — Refurbishment finance (purchase price + typically 100% of build costs, tranche drawdown with monitoring surveyor), HMO finance (bridging for HMO conversions), mixed-use finance (bridging for works and title splitting), bridging loans UK, and two blog articles on bridging [b].

**Phrases verbatim (anglais)**

> [a] search-tool summary: "its conversions page is about financing for property conversions. The page covers two categories: commercial-to-residential projects under permitted development rights, and residential title-splitting projects that turn one house into several flats."
>
> [a] search-tool summary: "The excerpt says lenders base the loan on the post-conversion value, and it cites borrowing up to 65–70% of that gross development value, which can cover most construction costs."
>
> [a] search-tool summary: "The page also says the firm handles the legal work of creating new leases for each unit."
>
> [a] search-tool summary (homepage): "Its homepage lists development finance, bridging loans, and residential and commercial mortgages, and says it focuses on loans over £500,000."
>
> [a] search-tool summary: "Silver Oak Capital is a London-based real estate debt firm"
>
> [a][b] SERP title of the page: "Property Conversion Finance UK"
>
> [b] search-tool summary: "The main conversions page describes conversion finance as a form of short-term funding designed for projects where the use class of a building is changing. It covers two routes: commercial-to-residential conversions under permitted development, and title-splitting a large house into flats."
>
> [b] search-tool summary (related page /light-to-heavy-refurbishment/): "a short-term bridging loan that covers the purchase price of a property and typically 100% of the build costs. Funds are released in stages, with a monitoring surveyor checking progress" and "Funds are released in tranches, overseen by a monitoring surveyor who visits the site to verify progress."
>
> [b] search-tool summary (related pages /mixed-use-property-finance/ and /hmo-finance/): "the firm can arrange short-term bridging finance to facilitate the works and title splitting on mixed-use buildings, and bridging finance for HMO conversions."
>
> [b] search-tool summary (homepage): "a commercial mortgage broker that arranges debt through a network of over 800 lenders."
>
> [c] search-tool summary (Silver Oak odoo blog, not the conversions page): a bridging loan is "a short term facility that gives a borrower fast access to finance."
>
> [c] search-tool summary: "I found no source on 'conversion finance' as a product, and no detailed Silver Oak application steps, fees, or eligibility."
>
> [seed] navigation: 'Conversions' sits under the Bridging service group alongside Bridging Loans UK, Auction Finance, Below Market Value Purchases, Distressed Asset Finance, Light to Heavy Refurbishment, Development Exit Loans, Post Planning Land Acquisitions.
>
> [seed] /property-development-finance/ snippet: loans fund real estate schemes "(either ground-up or conversions) of any nature".

**Produits et services cités**

- Property conversion finance (short-term / bridging-type funding)
- Commercial-to-residential conversion finance under permitted development rights
- Residential title-splitting finance (one house into several flats)
- Related on site: refurbishment finance, HMO conversion bridging, mixed-use works and title-splitting bridging [b]

**Cas d'usage**

- Converting a commercial building to residential under permitted development rights [a][b]
- Title-splitting a large house into several flats [a][b]
- Projects where the use class of a building is changing [b]
- Related: HMO conversions (/hmo-finance/) [b]
- Related: works and title splitting on mixed-use buildings (/mixed-use-property-finance/) [b]

**Conditions, montants, délais, frais**

- Short-term funding [b]
- Loan based on post-conversion value (gross development value) [a]
- Up to 65-70% of GDV [a]
- Said to cover most construction costs [a]
- Not revealed for this page: rates, fees, loan sizes, durations, timescales, security wording
- Site-wide context: firm focuses on loans over £500,000 [a][seed]
- Related page (/light-to-heavy-refurbishment/): purchase price plus typically 100% of build costs; funds released in tranches overseen by a monitoring surveyor [b]

**Critères d'éligibilité**

- Project must involve a change of use class of the building [b]
- Commercial-to-residential schemes under permitted development rights [a][b]
- Title-splitting schemes (large house into flats) [a][b]
- No explicit borrower criteria (experience, deposit, credit, residency) revealed in results

**Types de prêteurs**

- Not specified on the conversions page in the surfaced excerpts
- Site-wide: network of over 800 lenders (homepage) [b]; 700+ on /bridging-loans-uk/ and 300+ on /property-development-finance/ [seed]

**Étapes du processus**

- Loan sized against the post-conversion value (GDV) rather than current value [a]
- New leases created for each unit as part of title splitting [a]
- No application sequence, timescale or drawdown steps revealed for this page; related refurbishment page describes tranche release verified by a monitoring surveyor [b]

**Géographie**

- UK (page title 'Property Conversion Finance UK') [a][b]
- London-based firm [a]

**Appels à l'action**

- Not revealed in snippets for this page
- Site-wide contact routes [seed]: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number / LTGDV) Borrowing of up to 65-70% of gross development value on conversion projects
- (promise) Loan can cover most construction costs
- (lending mechanic) Lenders base the loan on the post-conversion value
- (service claim (unverified wor…) The firm handles the legal work of creating new leases for each unit (as summarised by the search tool; possibly a paraphrase)
- (positioning) London-based real estate debt firm
- (number) Focuses on loans over £500,000 (homepage)
- (number) Arranges debt through a network of over 800 lenders (homepage)
- (absence) No testimonials, awards or credentials surfaced for this page

_Notes d'extraction : SERP titles for related pages: 'Refurbishment Finance UK' (/light-to-heavy-refurbishment/), 'Mortgage Bridging Loans UK & London' (/bridging-loans-uk/), 'HMO Finance UK' (/hmo-finance/), 'Mixed Use Property Finance UK' (/mixed-use-property-finance/), 'Property Bridging Loans UK Guide: Purchase, Sale & Refurbishment Finance' (blog). All 'verbatim' entries are the search tool's summary wording of s…_

#### Development Exit Loans UK

URL : <https://www.silveroakcapital.co.uk/development-exit-loans/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Not revealed by search results. Indexed link title is "Development Exit Loans UK" [a][b].  
**Meta description :** Not revealed by search results.

**Résumé.** Silver Oak Capital's Development Exit Loans page (indexed title "Development Exit Loans UK") presents a development exit loan as a short-term bridging loan secured on a completed or nearly completed development, used to redeem / pay off the existing construction (development) lender. It typically gives the developer roughly 12 to 18 months to sell, with repayments made as each unit sells. Stated reasons to use it: avoid default penalties / default interest (which can roughly double the rate) when the development loan nears expiry, avoid discounting units to sell quickly, and release equity early for the next project. The page says it is cheaper than construction finance because construction risk has fallen away. No lender list, fee schedule, LTV range, process steps, CTA wording or meta description for this page were revealed. Related Silver Oak pages surfaced: FAQ (development loans usually run 18-24 months; exit bridge gives a further 12 months at a lower rate), a bridging guide (exit finance as fallback adding 12 to 24 months), and the NW London case study (GBP 19m, 0.75% per month, 12 months, max 73% LTV, 15% personal guarantee; deal-specific, not general pricing). The direct page could not be fetched; all content is from search-tool summaries of the indexed page.

**Sections repérées**

- **What a development exit loan is (page content as summarised by search [a][b])** — A short-term bridging loan secured on a completed or nearly completed development, used to pay off the existing construction lender / redeem the original development facility. It typically gives the borrower roughly 12 to 18 months to sell, with repayments made as each unit sells.
- **Why developers use it (page content as summarised by search [a][b])** — Avoid default penalties when a development loan nears expiry: construction loans near expiry may attract default interest, which can roughly double the rate; refinancing before that point can move the borrower to a lower rate. Avoid discounting units to sell quickly. Release equity early for the next project.
- **Cost angle (page content as summarised by search [a])** — The page says a development exit loan is cheaper than construction finance, since construction risk has already fallen away.
- **Related site content surfaced alongside the page (not from /development-exit-loans/ itself)** — /faq/ [b]: development loans usually run 18 to 24 months; an exit bridge can pay off the development loan and give a further 12 months at a lower rate. /common-uses-for-property-bridging-loans-in-the-uk/ [b]: describes the same product as a fallback when a developer cannot sell or refinance in time, adding 12 to 24 months. /case-studies/nw-london-bridge/ [a][b]: GBP 19 million bridging loan at 0.75% per month over a 12-month term, maximum 73% LTV, 15% personal guarantee, used to refinance a partly complete 25-apartment London scheme; the search summary notes these terms are specific to that d…
- **Not revealed by the three searches** — No H1 text, meta description, section headings, lender names or lender types, fee schedule, LTV / LTGDV range, minimum or maximum loan size, interest-rate range, timescales to completion, step-by-step process, FAQ items on this page, testimonials, awards, or call-to-action wording for /development-exit-loans/. Search (c) returned only third-party, non-Silver-Oak pages and was not used for page content.

**Phrases verbatim (anglais)**

> [a] "Development Exit Loans UK" (indexed link title of the page)
>
> [a] "a short-term bridging loan secured on a completed or nearly completed development, used to pay off the existing construction lender"
>
> [a] "It gives developers roughly 12 to 18 months to sell, with repayments made as each unit sells"
>
> [a] "it helps developers avoid default penalties when a development loan nears expiry and avoid discounting units to sell quickly"
>
> [a] "It can also release equity early for the next project"
>
> [a] "the page says it is cheaper than construction finance, since construction risk has already fallen away"
>
> [a] (case study /case-studies/nw-london-bridge/) "a £19 million bridging loan at 0.75% per month over 12 months, with a maximum 73% LTV, used to refinance a partly complete 25-apartment London scheme. Its listed terms are specific to that deal, not general pricing"
>
> [a] (LinkedIn) "founded in 2019 and is based in London"
>
> [b] "a short-term bridging loan secured against a completed or nearly completed development. It redeems the original development facility and typically gives the borrower 12 to 18 months to sell, with repayments made as each unit sells"
>
> [b] "Developers whose construction loans are near expiry may face default interest, which can roughly double the rate. Refinancing before that point can move them to a lower rate"
>
> [b] (/common-uses-for-property-bridging-loans-in-the-uk/) "A separate guide describes the same product as a fallback when a developer cannot sell or refinance in time, adding 12 to 24 months"
>
> [b] (/case-studies/nw-london-bridge/) "The loan was £19 million, at 0.75% per month over a 12-month term, with a maximum 73% LTV and a 15% personal guarantee"
>
> [b] (/faq/) "development loans usually run 18 to 24 months, and that an exit bridge can pay off the development loan and give a further 12 months at a lower rate"
>
> [c] "I couldn't find anything about Silver Oak Capital specifically. None of the results mention the firm"
>
> [seed] Navigation: Services > Bridging > "Development Exit Loans" (listed with Bridging Loans UK, Auction Finance, Below Market Value Purchases, Distressed Asset Finance, Light to Heavy Refurbishment, Conversions, Post Planning Land Acquisitions)

**Produits et services cités**

- Development exit loans (short-term bridging loan secured on a completed or nearly completed development) [a][b]
- Refinancing / redeeming an existing construction or development facility [a][b]
- Equity release from a completed development for the next project [a]
- Listed on the site under Services > Bridging [seed]

**Cas d'usage**

- Development loan nearing expiry: refinance to avoid default penalties / default interest that can roughly double the rate [a][b]
- Avoid discounting units to sell quickly; take 12 to 18 months to sell down [a][b]
- Release equity early for the next project [a]
- Fallback when a developer cannot sell or refinance in time (per /common-uses-for-property-bridging-loans-in-the-uk/) [b]
- Refinance of a partly complete 25-apartment London scheme (per /case-studies/nw-london-bridge/) [a][b]

**Conditions, montants, délais, frais**

- Duration: roughly 12 to 18 months to sell (page) [a][b]
- Duration (contradiction/variation): /faq/ says exit bridge gives 'a further 12 months at a lower rate'; bridging guide says 'adding 12 to 24 months' [b]
- Repayment: made as each unit sells [a][b]
- Security: completed or nearly completed development [a][b]
- Pricing: 'cheaper than construction finance, since construction risk has already fallen away' (no rate given on page) [a]
- Default interest context: construction loans near expiry 'can roughly double the rate' [b]
- Case-study example only (not general pricing): £19m, 0.75% per month, 12-month term, max 73% LTV, 15% personal guarantee [a][b]
- Context from /faq/: development loans usually run 18 to 24 months [b]
- Not revealed: loan size min/max, LTV/LTGDV range, arrangement/exit fees, timescales to complete, interest roll-up vs serviced for this product

**Critères d'éligibilité**

- Developers holding a completed or nearly completed development [a][b]
- Existing construction / development facility to be redeemed [a][b]
- Units still to be sold (repayment as each unit sells) [a][b]
- Case study only: 15% personal guarantee was required on the £19m deal [b]
- Not revealed: borrower type restrictions, residency, experience, minimum completion stage

**Types de prêteurs**

- Not revealed for this page. Only reference is to the 'existing construction lender' / 'original development facility' being paid off [a][b].

**Étapes du processus**

- Not revealed as explicit steps. Implied sequence from page content: development loan nears expiry -> refinance onto a development exit loan before default interest applies -> sell units over 12 to 18 months -> repay as each unit sells [a][b]

**Géographie**

- United Kingdom (page title 'Development Exit Loans UK') [a][b]
- London (case study scheme; firm based in London) [a][b]

**Questions fréquentes**

- **Topic from /faq/ (exact question wording not revealed by search): how long development loans run and how an exit bridge helps** [b] /faq/: development loans usually run 18 to 24 months; an exit bridge can pay off the development loan and give a further 12 months at a lower rate.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (pricing-claim [a]) Development exit loan is cheaper than construction finance because construction risk has already fallen away
- (market-claim [b]) Default interest on an expiring construction loan can roughly double the rate
- (product-term [a][b]) Gives developers roughly 12 to 18 months to sell
- (case-study-figure [a][b]) Case study: £19 million bridging loan, 0.75% per month, 12 months, max 73% LTV, 15% personal guarantee, partly complete 25-apartment London scheme (/case-studies/nw-london-bridge/)
- (site-faq-statement [b]) Development loans usually run 18 to 24 months; exit bridge gives a further 12 months at a lower rate (/faq/)
- (firm-fact [a]) Firm founded in 2019 and based in London (LinkedIn)
- (absence-note) No testimonials, awards, lender-count or loan-size figures were revealed for this page

_Notes d'extraction : Seed had no snippet for /development-exit-loans/; only the navigation entry (Services > Bridging > Development Exit Loans) and the URL. Searches run: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk development exit loans finance'; (c) standard, '"Silver Oak Capital" development exit loan how it works'. Search (c) returned only third-party lender/press pages (LendInvest, Shawbr…_

#### Post Planning Land Finance UK

URL : <https://www.silveroakcapital.co.uk/post-planning-land-acquisitions/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Not confirmed. Search-result title is 'Post Planning Land Finance UK'; seed navigation label under Bridging is 'Post Planning Land Acquisitions'. Either could be the on-page H1.  
**Meta description :** Not revealed by any snippet. Closest candidate (snippet text, [a]): 'Silver Oak Capital offers bridging finance for land that already has planning consent, such as full permission, outline permission, or permitted development rights.'

**Résumé.** Service page under the Bridging menu. Silver Oak Capital (London broker) presents post-planning land acquisition finance as a short-term bridging loan secured against land that already carries some form of planning consent (full permission, outline permission or permitted development rights). It is paid as a single lump sum used purely to complete the site purchase, which the page contrasts with staged/tranched development finance. Stated timeline: purchase completed in about 2-4 weeks, with a loan term of roughly 6-12 months to arrange build finance and discharge planning conditions before refinancing onto a development loan. A related FAQ entry (apparently on /faq/) gives a typical term of 12-18 months as a 'safety buffer' (contradiction with 6-12 months), says developer experience is less critical for a pure land bridge than for development finance but the lender will still want the exit strategy, and says the firm has access to niche pre-planning bridge lenders for unconsented land where location and planning logic are sound. Snippets only; full page text, meta description, H1, rates, LTV, fees and CTAs for this page were not revealed.

**Sections repérées**

- **Intro / what it is (heading not revealed)** — [a] Silver Oak Capital offers bridging finance for land that already has planning consent, such as full permission, outline permission, or permitted development rights. It provides specialised bridging solutions tailored to post planning land acquisitions.
- **How it differs from development finance (heading not revealed)** — [a][b] A short-term bridging loan secured against land with some form of planning consent. Unlike development finance, it is a single lump sum used purely to complete the purchase; the page contrasts this with staged (tranched) development finance.
- **Timeline (heading not revealed)** — [a][b] Land can be bought in about 2 to 4 weeks, with a term of roughly 6 to 12 months to arrange build finance and discharge planning conditions before refinancing.
- **FAQ (location uncertain: likely /faq/ page, possibly on-page FAQ)** — [a] Term typically 12 to 18 months as a safety buffer to buy the land, discharge pre-commencement planning conditions and finalise the contractor tender pack before refinancing onto a development loan. Experience is less critical for a pure land bridge than for development finance, but lenders still want the exit strategy. Access to niche pre-planning bridge lenders for unconsented land where the location is strong and the planning logic is sound.

**Phrases verbatim (anglais)**

> [a] (snippet) "Silver Oak Capital offers bridging finance for land that already has planning consent, such as full permission, outline permission, or permitted development rights."
>
> [a] (snippet) "It provides specialised bridging solutions tailored to post planning land acquisitions."
>
> [a] (snippet) "It is a short-term bridging loan secured against land with some form of planning consent. Unlike development finance, it is a single lump sum used purely to complete the purchase."
>
> [a] (search-tool summary of page) "The page says the land can be bought in about 2 to 4 weeks, with a term of roughly 6 to 12 months to arrange build finance and discharge planning conditions."
>
> [a] (snippet, FAQ entry - most likely /faq/) "Typically 12 to 18 months. This provides a safety buffer. It gives you time to buy the land, discharge pre-commencement planning conditions, and finalise your tender pack for contractors before refinancing onto a development loan."
>
> [a] (snippet, FAQ entry - most likely /faq/) "For a pure land bridge, experience is less critical than for development finance because you aren't building yet. They will still want to know your exit strategy."
>
> [a] (snippet, FAQ entry - most likely /faq/) "Silver Oak Capital has access to niche pre-planning bridge lenders who will consider unconsented land if the location is strong and the planning logic is sound."
>
> [b] (search-tool summary of page) "The page describes a short-term bridging loan secured against land that already has some planning consent. It is a single lump sum for the purchase, which the page contrasts with staged development finance. The stated timeline is buying within about 2-4 weeks, followed by 6-12 months to finish build costs and planning conditions before refinancing"
>
> [b] (search-tool summary of /faq/) "The FAQ says a pure land bridge needs less track record than development finance. It also says the lender still wants a credible exit plan, and that the typical term is 12 to 18 months to allow a buffer"
>
> [b] (search-tool summary of /senior-development-finance/) "For sites with planning approval that still need buying, the page says senior lenders usually limit land-acquisition funding to roughly 50-60% of market value"
>
> [b] (search-tool summary of /how-does-a-bridging-loan-work/) "A bridging-loans guide lists land purchases before planning as a common use"
>
> [b] (search-tool summary of /stamp-duty-changes-in-the-uk-from-april-2025/) "A stamp duty article from April 2025 notes higher upfront acquisition costs for developers"
>
> [seed] Navigation, Bridging sub-menu: "Post Planning Land Acquisitions" listed alongside "Bridging Loans UK", "Auction Finance", "Below Market Value Purchases", "Distressed Asset Finance", "Light to Heavy Refurbishment", "Conversions", "Development Exit Loans"
>
> [seed] Related case study URL in seed: https://www.silveroakcapital.co.uk/case-studies/bridging-loan-land-with-planning/

**Produits et services cités**

- Post planning land acquisition bridging finance (land bridge) for sites with full planning permission, outline planning permission or permitted development rights
- Referral to niche pre-planning bridge lenders for unconsented land (per FAQ snippet, where location is strong and planning logic is sound)
- Implied follow-on: refinancing onto a development loan (senior development finance) once planning conditions are discharged

**Cas d'usage**

- Buying a site that already has planning consent quickly (about 2-4 weeks) before build finance is in place
- Holding the site for roughly 6-12 months (page) or 12-18 months (FAQ) while arranging build finance, discharging pre-commencement planning conditions and finalising the contractor tender pack
- Exit by refinancing onto a development loan
- Unconsented land purchase via niche pre-planning bridge lenders (related offering mentioned in FAQ)

**Conditions, montants, délais, frais**

- Structure: short-term bridging loan, single lump sum used purely to complete the purchase (not drawn in tranches like development finance) [a][b]
- Security: secured against land with some form of planning consent (full, outline, or permitted development rights) [a]
- Timescale to complete purchase: about 2 to 4 weeks [a][b]
- Term (page): roughly 6 to 12 months [a][b]
- Term (FAQ entry): 'Typically 12 to 18 months' as a safety buffer [a][b] - CONTRADICTS the 6-12 month figure
- Loan size: not stated for this page (seed: firm generally focuses on transactions over £500,000; £500k-£20m on /about-us/)
- LTV: not stated on this page. Related snippet from /senior-development-finance/ [b]: senior lenders usually limit land-acquisition funding to roughly 50-60% of market value for sites with planning that still need buying
- Rates: not revealed
- Fees: not revealed for this page (seed: firm-level fee claims vary; commission from lenders disclosed during process)
- Interest treatment: not revealed for this page (seed /bridging-loans-uk/: interest typically rolled up on bridging)

**Critères d'éligibilité**

- Land must have some form of planning consent: full permission, outline permission, or permitted development rights [a]
- Developer experience/track record: 'less critical than for development finance because you aren't building yet' [a FAQ]
- Exit strategy: lenders 'will still want to know your exit strategy' / want a credible exit plan [a][b FAQ]
- Unconsented land: considered only by niche pre-planning bridge lenders 'if the location is strong and the planning logic is sound' [a FAQ]

**Types de prêteurs**

- Bridging lenders lending against consented land (implied by product description) [a]
- Niche pre-planning bridge lenders willing to consider unconsented land [a FAQ]
- Senior development lenders as the refinance exit (limit land acquisition funding to roughly 50-60% of market value per /senior-development-finance/) [b]

**Étapes du processus**

- 1. Buy the consented land with the bridging loan, completing in about 2-4 weeks [a][b]
- 2. During the term (6-12 months per page; 12-18 months per FAQ): discharge pre-commencement planning conditions [a]
- 3. Finalise the tender pack for contractors [a FAQ]
- 4. Arrange build/development finance [a]
- 5. Refinance onto a development loan to repay the bridge [a FAQ]

**Géographie**

- UK (page title 'Post Planning Land Finance UK') [a][b]
- No regional detail revealed for this page; seed: firm is London-based with UK-wide focus

**Questions fréquentes**

- **How long is a post planning land bridge typically? (question wording not revealed; answer snippet below)** [a] "Typically 12 to 18 months. This provides a safety buffer. It gives you time to buy the land, discharge pre-commencement planning conditions, and finalise your tender pack for contractors before refinancing onto a development loan." NOTE: page body gives 6-12 months.
- **Do I need development experience for a land bridge? (question wording not revealed)** [a] "For a pure land bridge, experience is less critical than for development finance because you aren't building yet. They will still want to know your exit strategy."
- **Can you finance land without planning permission? (question wording not revealed)** [a] "Silver Oak Capital has access to niche pre-planning bridge lenders who will consider unconsented land if the location is strong and the planning logic is sound."

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (product-scope [a]) Offers bridging finance for land that already has planning consent, such as full permission, outline permission, or permitted development rights
- (positioning [a]) Provides specialised bridging solutions tailored to post planning land acquisitions
- (structure [a][b]) Loan is a single lump sum used purely to complete the purchase, unlike development finance
- (timescale [a][b]) Land can be bought in about 2 to 4 weeks
- (duration - page body [a][b]) Term of roughly 6 to 12 months to arrange build finance and discharge planning conditions
- (duration - FAQ entry [a][b]; …) Typically 12 to 18 months, providing a safety buffer
- (eligibility [a][b]) For a pure land bridge, experience is less critical than for development finance
- (eligibility [a][b]) Lenders will still want to know your exit strategy
- (lender-access [a]) Access to niche pre-planning bridge lenders who will consider unconsented land if the location is strong and the planning logic is sound
- (ltv - from /senior-developmen…) Senior lenders usually limit land-acquisition funding to roughly 50-60% of market value for sites with planning that still need buying
- (absence-note) No testimonials, awards, credentials, lender counts or loan-size figures were revealed for this specific page

_Notes d'extraction : Direct fetching blocked; everything above comes from WebSearch snippets and the tool's summaries. Query (a) and (b) both returned the target page (result title 'Post Planning Land Finance UK') and /faq/. Query (c) returned no Silver Oak Capital content at all (only other lenders such as Hope Capital and a LinkedIn profile for team member Joe Berk) and was discarded per the rule to ignore unrelate…_

#### Property Development Finance

URL : <https://www.silveroakcapital.co.uk/property-development-finance/>  
Confiance : medium · Recherches effectuées : 3

**H1 :** Property Development Finance — this is the SERP title returned for the URL in searches [a] and [b]; whether it is the on-page H1 or only the <title> tag is not confirmed.  
**Meta description :** Not revealed verbatim. Search summary [a] paraphrases the page opening as 'flexible funding for residential, commercial, or mixed-use projects, covering borrowing, development, refinancing, and acquisition'; the seed first-pass snippet gives 'flexible property development finance for residential, commercial, or mixed-use projects'. Probably the meta description / intro line, unconfirmed.

**Résumé.** Service page of Silver Oak Capital (London-based debt advisory / finance broker) for property development finance. The page positions the firm as a source of flexible funding for residential, commercial or mixed-use projects (borrowing, development, refinancing, acquisition). Development finance is described as funding for property developers and property investors building real estate schemes 'of any nature', ground-up or conversions. Mechanics stated on the page: the loan is secured against the available land, drawn down in line with the business plan and construction schedule, interest is not serviced but rolled up on top of the principal, and the loan is repaid at practical completion through sales proceeds or refinance. The page claims '300+ Lenders' and 'access to the largest network of lenders in the market' (seed adds: vast network of senior debt, mezzanine debt and equity lenders; typically 3 or 4 potential partners per deal). Other pages of the same site give different lender counts (800+ on home and in a LinkedIn post, 500+ on the LinkedIn profile) and a minimum deal size of £500,000 (home, /lenders/) versus 'over £2m' on an older cached page. No page headings, FAQ block, calls to action, rates, LTV/LTGDV figures, fees or timescales from this specific page were surfaced by the searches; the LTGDV ranges (65-70%, 65-75%) and durations (18-24 months) recorded below come from sibling pages (/conversions/, /faq/, Scotland guide).

**Phrases verbatim (anglais)**

> [a] "flexible funding for residential, commercial, or mixed-use projects, covering borrowing, development, refinancing, and acquisition" (search summary wording describing the page)
>
> [a] "Development finance is used to assist property developers and property investors who require funding to build real estate schemes (either ground-up or conversions) of any nature."
>
> [b] "Development finance is used to assist property developers and property investors who require funding to build real estate schemes (either ground-up or conversions) of any nature." (same sentence surfaced again)
>
> [a] "these loans are secured against the available land and are drawn in line with the business plan and construction schedule of the proposed project."
>
> [a] "The interest for this loan is not serviced but is instead rolled up on top of the principal amount."
>
> [a] "The loan is repaid upon practical completion of the project – either through sales proceeds or via refinance."
>
> [a] "300+ Lenders – we have access to the largest network of lenders in the market."
>
> [a] homepage: "over 800 lenders"; LinkedIn profile: "500+ different private banks, investment banks, specialist lenders & private debt funds"
>
> [a] /lenders/: "generally focus on transactions upwards of £500,000"; older-looking cached page: "loans over £2m"
>
> [b] main development finance page: "broker covering residential and commercial projects across the UK"; "can access a large lender panel for whole-of-market advice"; "the loans are secured against land and interest is rolled up rather than paid monthly" (search summary wording)
>
> [b] homepage: "specialising in loans over £500,000"; "works through a network of over 800 lenders"; "offers senior debt, mezzanine and equity finance, plus bridging loans"
>
> [b] /conversions/: "covers office-to-residential and HMO projects"; "stated lending ceiling is 65–70% of gross development value (GDV), though the figure is given as a typical range"
>
> [b] /faq/: "Development loans usually run 18–24 months. If units are unsold at term end, the firm can arrange a Development Exit Bridge, which gives a further 12 months at a lower rate. Mezzanine lenders often have minimum loan sizes of roughly £150,000–£250,000."
>
> [b] Scotland guide: "Senior loans are typically up to 65–75% of GDV"
>
> [c] Linktree (linktr.ee/silveroakcapital) "lists pages on UK property development finance and bridging loans"; a LinkedIn post tagged #SilverOakCapital describes "a firm with a network of over 800 lenders that offers independent, whole-of-market advice" and links it to Jimmy Baillie and a Connor
>
> [c] "The search didn't turn up a list of lenders that Silver Oak Capital works with" (all lender names in [c] — Silbury Finance, OakNorth, Octane Capital, Silver Point Capital, Silver Oak Partners — are unrelated firms and are ignored)
>
> [seed] "flexible property development finance for residential, commercial, or mixed-use projects; loans fund real estate schemes (either ground-up or conversions) of any nature; secured against the available land and drawn in line with the business plan and construction schedule; interest rolled up; repaid at practical completion through sales or refinance; access to a vast network of senior debt, mezzanine debt and…

**Produits et services cités**

- Property development finance for residential projects
- Property development finance for commercial projects
- Property development finance for mixed-use projects
- Ground-up development funding
- Conversion / refurbishment-to-development funding
- Funding for borrowing, development, refinancing and acquisition (as listed in the page intro per [a])
- Whole-of-market brokerage / debt advisory across a large lender panel
- Senior debt, mezzanine debt and equity sourcing (seed, homepage [b])
- Related site services surfaced: Development Finance Brokers (instant quote), Development Exit Bridge (/faq/), Conversions finance, Bridging loans for developers

**Cas d'usage**

- Property developers needing funding to build a real estate scheme
- Property investors needing funding to build a real estate scheme
- Ground-up new build schemes
- Conversion schemes (sibling /conversions/ page: office-to-residential, HMO)
- Residential, commercial or mixed-use projects
- Acquisition of a site and development of it (page intro lists 'acquisition' and 'development')
- Refinancing of a development (page intro lists 'refinancing')
- Exit at practical completion via sales or refinance; unsold units at term end handled with a Development Exit Bridge (/faq/)

**Conditions, montants, délais, frais**

- Security: loan secured against the available land [a][seed]
- Drawdown: drawn in line with the business plan and construction schedule of the project (staged drawdowns) [a][seed]
- Interest: not serviced monthly, rolled up on top of the principal [a][b]
- Repayment: at practical completion, from sales proceeds or refinance [a][seed]
- Minimum deal size (site-level, not this page): transactions upwards of £500,000 (/lenders/, home) [a][b]; contradiction: an older cached page says 'loans over £2m' [a]; seed also records £500k–£20m (/about-us/) and £2m–£20m (/commercial-mortgage-broker/)
- Leverage (sibling pages, not this page): conversions typically 65–70% of GDV (/conversions/) [b]; senior development loans typically up to 65–75% of GDV (Scotland guide) [b][seed]
- Duration (sibling /faq/, not this page): development loans usually 18–24 months; Development Exit Bridge adds a further 12 months at a lower rate [b]
- Mezzanine minimums (sibling /faq/): roughly £150,000–£250,000 [b]
- Rates, arrangement fees, broker fees, timescales to offer/completion: NOT revealed for this page by any search (seed: site-wide fee claims exist on /types-of-borrowing/ and a blog, approx 1% broker fee)

**Critères d'éligibilité**

- Property developers [a][b][seed]
- Property investors [a][b][seed]
- Schemes 'of any nature', ground-up or conversions [a][b]
- Residential, commercial or mixed-use projects [a][seed]
- Projects across the UK [b]
- No experience, credit, deposit/equity or planning-status criteria for this page were surfaced (the site has a separate /first-time-developer-finance/ page per seed navigation)

**Types de prêteurs**

- Senior debt lenders [seed]
- Mezzanine debt lenders [seed]; homepage lists mezzanine finance [b]
- Equity lenders / equity finance [seed][b]
- Site-level description of the panel (LinkedIn profile per [a]): private banks, investment banks, specialist lenders and private debt funds
- No individual lender names for Silver Oak's panel were surfaced [c]

**Étapes du processus**

- Loan is secured against the available land [a]
- Funds are drawn in line with the business plan and construction schedule of the proposed project [a]
- Interest is rolled up on top of the principal rather than serviced during the build [a][b]
- Loan is repaid at practical completion through sales proceeds or refinance [a]
- Broker process (seed, same page): lender search across 300+ lenders narrowed to as many as 3 or 4 potential partners per deal [seed]
- Sibling step-by-step guide (seed, other page): buy land/existing property, obtain planning approval, fund in a series of tranches

**Géographie**

- United Kingdom — 'residential and commercial projects across the UK' [b]
- London-based firm [a]
- Scotland covered by a dedicated guide (/how-does-property-development-finance-in-scotland/) [b]
- Offshore / overseas borrowers addressed in a blog (/how-can-offshore-borrowers-secure-fast-uk-property-development-finance-and-bridging-loans/) [b]
- Seed (firm-level): offices in London (91 Wimpole Street), Monaco, Dubai, Cape Town; markets UK, Western Europe, Middle East, United States

**Appels à l'action**

- No call-to-action wording from this page was revealed by the searches
- Sibling page SERP title: 'Development Finance Brokers - Get a Instant Quote Now' (/development-finance-brokers/) [a][b]
- Seed (site-level): enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp; Lender Calculator tool (/lender-calculator/)

**Questions fréquentes**

- **Does the page itself contain an FAQ block?** Not revealed by any of the three searches. The items below come from the site-wide /faq/ page surfaced in [b].
- **How long do development loans run? (/faq/)** Development loans usually run 18–24 months [b].
- **What if units are unsold at term end? (/faq/)** The firm can arrange a Development Exit Bridge, which gives a further 12 months at a lower rate [b].
- **Minimum size for mezzanine lenders? (/faq/)** Mezzanine lenders often have minimum loan sizes of roughly £150,000–£250,000 [b].
- **How is interest handled on a development loan? (this page)** Interest is not serviced but rolled up on top of the principal amount [a].
- **How is the loan repaid? (this page)** Upon practical completion, through sales proceeds or via refinance [a].

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) 300+ Lenders (this page) [a][seed]
- (promise/superlative) we have access to the largest network of lenders in the market (this page) [a]
- (number — contradicts the 300+…) over 800 lenders (homepage [a][b]; LinkedIn post [c])
- (number — third differing lend…) 500+ different private banks, investment banks, specialist lenders & private debt funds (LinkedIn profile) [a]
- (number) generally focus on transactions upwards of £500,000 (/lenders/) [a]; specialising in loans over £500,000 (home) [b]
- (number — contradiction with £…) loans over £2m (older-looking cached page) [a]
- (promise) independent, whole-of-market advice (LinkedIn post) [c]; whole-of-market advice via a large lender panel (this page per [b])
- (process/promise) typically narrows lenders to as many as 3 or 4 potential partners per deal (this page per seed)
- (service scope) offers senior debt, mezzanine and equity finance, plus bridging loans (home) [b]
- (number — sibling pages, sligh…) conversions lending ceiling typically 65–70% of GDV (/conversions/) [b]; senior loans typically up to 65–75% of GDV (Scotland guide) [b]
- (absence) No testimonials, awards, credentials or named case studies were surfaced for this page by the searches

_Notes d'extraction : Direct fetching was blocked, as the task states; all content is from search snippets/summaries plus the seed. Contradictions recorded: lender count 300+ (this page) vs 500+ (LinkedIn) vs 800+ (home, LinkedIn post); minimum loan £500,000 (home, /lenders/) vs 'over £2m' (older cached page) vs seed's £500k–£20m and £2m–£20m; GDV leverage 65–70% (/conversions/) vs 65–75% (Scotland guide). Search [b] …_

#### Development Finance Brokers - Get a Instant Quote Now (SERP title seen in [b]); same URL also listed as "Deve…

URL : <https://www.silveroakcapital.co.uk/development-finance-brokers/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Service page positioning Silver Oak Capital as a London-based development finance broker. Only partial page text surfaced via search. What is visible: the page explains the broker's role in general terms (intermediary between developer and lender; draws on a network of banks, private lenders and other institutions; assesses project documents; advises on available development finance products), and describes a process of initial consultation, lender shortlist, market review and formal heads of terms. One verbatim sentence from the site (attributed by the search tool to 'its own website', page not pinpointed): 'As a leading development finance broker, we offer comprehensive advisory services to help you secure the funding needed for your residential, commercial, or mixed-use developments.' No H1, meta description, FAQ, fees, rates or page-specific LTV figures were revealed. Lender-count claims differ by source (300+ / 500+ / 700+ / 800+).

**Sections repérées**

- **[reconstructed - no page headings revealed] What a development finance broker does** — An intermediary who advises property developers on funding [b]. Brokers draw on lender networks, assess project documents, and act as the go-between for borrower and lender [a]. They can tap a network of banks, private lenders and other institutions to find a suitable development lender [a], and draw on industry knowledge and experience to advise clients on the available development finance products [b].
- **[reconstructed] Silver Oak Capital positioning** — 'As a leading development finance broker, we offer comprehensive advisory services to help you secure the funding needed for your residential, commercial, or mixed-use developments.' [c]. Specialist in development finance and commercial mortgage services, based in London; also covers bridging loans [a]. Also lists independent commercial mortgage brokerage, refinancing and debt restructuring [c].
- **[reconstructed] Lender network** — Network of over 800 lenders [b site-level; c Spear's]; 300+ on the property development finance page [a][b][seed]; 700+ on the commercial mortgage broker page [a][seed]; 500+ on LinkedIn [a][seed]. Lender types named: banks, private lenders, other institutions [a]; specialist lenders [b]; senior debt, mezzanine debt and equity lenders [seed]; private banks [c].
- **[reconstructed] Process** — Initial consultation, then a shortlist of lenders, then formal heads of terms after a market review [a]. Seed sibling pages add that the firm typically narrows lenders to as many as 3 or 4 potential partners.
- **[reconstructed] Deal size and geography** — Larger deals, loan sizes £2-£20 million [b]; seed records 'over £500,000' and '£500k to £20m' elsewhere. London-based [a]; transactions in the UK, Western Europe, Southern Africa and the Middle East [c Spear's].
- **[reconstructed] Contact** — 91 Wimpole St, Marylebone, London W1G 0EF; +44 207 459 4440 [a]. Seed: enquiry@silveroakcapital.co.uk, WhatsApp, enquiry form.

**Phrases verbatim (anglais)**

> [c] "As a leading development finance broker, we offer comprehensive advisory services to help you secure the funding needed for your residential, commercial, or mixed-use developments." (search tool attributes this to 'Its own website'; exact page not pinpointed - likely this page or /development-finance-broker-find-the-best-funding-partner-for-your-project/)
>
> [c] search-tool summary: "It also lists independent commercial mortgage brokerage, refinancing, and debt restructuring."
>
> [a] search-tool summary (page 'only partial text was visible'): "The page describes a broker's role in general terms: brokers draw on lender networks, assess project documents, and act as the go-between for borrower and lender."
>
> [a] search-tool summary: "Brokers can tap their network of banks, private lenders and other institutions to find a suitable development lender."
>
> [a] search-tool summary: "It describes itself as a specialist in development finance and commercial mortgage services, based in London, and it also covers bridging loans."
>
> [a] search-tool summary: "It describes an initial consultation, then a shortlist of lenders, then formal heads of terms after a market review."
>
> [a] search-tool summary: "The office is at 91 Wimpole St, Marylebone, London W1G 0EF, with the phone number +44 207 459 4440."
>
> [b] search-tool summary: "The site describes a development finance broker as an intermediary who advises property developers on funding. Brokers can draw on industry knowledge and experience to advise clients on the available development finance products."
>
> [b] search-tool summary (site-level, page not pinpointed): "The company says it operates across a network of over 800 lenders. A separate page on property development finance cites 300+ Lenders, so the two figures differ."
>
> [b] search-tool summary (firm-level, page not pinpointed): "The firm says it works on larger deals, focusing on loan sizes of £2-£20 million."
>
> [b] search-tool summary about /first-time-developer-finance/ (NOT the target page): "it helps newer developers package applications for specialist lenders, and notes that a maximum of 60% to 65% LTGDV is typical for first-time applicants."
>
> [b] search-tool summary about /how-does-property-development-finance-in-scotland/ (NOT the target page): "covers how brokers help with negotiation on your behalf and access to specialist lenders."
>
> [c] Spear's adviser profile (external): "arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East through a network of more than 800 lenders."
>
> [c] Spear's adviser profile (external): "brokers and advises on loans to (U)HNWs through its strong relationships with private banks around the world."
>
> [c] LinkedIn snippet (firm name not confirmed in snippet): "over 800 lenders offering whole-of-market advice on development finance, among other products."
>
> [seed] /property-development-finance/: "flexible property development finance for residential, commercial, or mixed-use projects; loans fund real estate schemes (either ground-up or conversions) of any nature; secured against the available land and drawn in line with the business plan and construction schedule; interest rolled up; repaid at practical completion through sales or refinance; access to a vast network of…
>
> [seed] /commercial-mortgage-broker/: "typically narrows lenders to as many as 3 or 4 potential partners."
>
> [seed] /how-does-property-development-finance-in-scotland/: "Senior development loans cover a percentage of land purchase and construction costs, typically up to 65-75% of Gross Development Value."
>
> [seed] /about-us/: "has focused on loans between £500K to £20m"; "one of Europe's leading large loan brokers".

**Produits et services cités**

- Development finance brokerage / advisory for residential, commercial and mixed-use developments [c]
- Intermediary role between property developer and development lender; sourcing a suitable lender from a network of banks, private lenders and other institutions [a][b]
- Advice on the range of available development finance products [b]
- Assessment of project documents on the borrower's behalf [a]
- Independent commercial mortgage brokerage [c]
- Refinancing [c]
- Debt restructuring [c]
- Bridging loans [a]
- Related development products in site navigation [seed]: Property Development Finance, Senior Development Finance, Stretch Senior Development Finance, Mezzanine / Junior Finance, Whole Loans, First-Time Developer Finance

**Cas d'usage**

- Funding residential developments [c]
- Funding commercial developments [c]
- Funding mixed-use developments [c]
- Ground-up schemes or conversions [seed, /property-development-finance/]
- First-time / newer developers needing applications packaged for specialist lenders [b, /first-time-developer-finance/]
- Financing new build homes [b, blog title only]
- Refinancing and debt restructuring [c]

**Conditions, montants, délais, frais**

- Loan size focus £2-£20 million [b, firm-level, page not pinpointed]
- Other seed loan-size claims: transactions upwards of £500,000 (home, /lenders/); £500k to £20m (/about-us/)
- Lender network: over 800 [b][c]; 300+ on development finance page [a][b][seed]
- First-time developers: max 60%-65% LTGDV typical [b, /first-time-developer-finance/, NOT target page]
- Senior development loans typically up to 65-75% of GDV [seed, Scotland blog, NOT target page]
- Interest rolled up; repaid at practical completion through sales or refinance; loan secured against the land and drawn in line with business plan and construction schedule [seed, /property-development-finance/, NOT target page]
- Fees, rates, durations and timescales for this page: NOT revealed

**Critères d'éligibilité**

- No page-specific eligibility criteria revealed
- Related [b, /first-time-developer-finance/]: first-time applicants typically capped at 60%-65% LTGDV
- Related [seed, /about-us/, /lenders/]: firm generally focuses on transactions upwards of £500,000

**Types de prêteurs**

- Banks [a]
- Private lenders [a]
- Other institutions [a]
- Specialist lenders [b]
- Senior debt lenders [seed]
- Mezzanine debt lenders [seed]
- Equity lenders [seed]
- Private banks around the world [c, Spear's]

**Étapes du processus**

- 1. Initial consultation [a]
- 2. Shortlist of lenders [a]
- 3. Market review [a]
- 4. Formal heads of terms [a]
- Seed (sibling pages): lenders typically narrowed to as many as 3 or 4 potential partners

**Géographie**

- London-based [a]
- Office: 91 Wimpole St, Marylebone, London W1G 0EF [a] (seed: W1G 0EE)
- UK [c]
- Western Europe [c, Spear's]
- Southern Africa [c, Spear's]
- Middle East [c, Spear's]
- Scotland covered by a sibling guide [b]

**Appels à l'action**

- 'Get a Instant Quote Now' (SERP title wording for this URL) [b]
- Phone +44 207 459 4440 [a]
- Seed: enquiry form, direct email enquiry@silveroakcapital.co.uk, WhatsApp

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning) 'As a leading development finance broker' - self-described leadership positioning [c]
- (positioning) Specialist in development finance and commercial mortgage services, based in London; also covers bridging loans [a]
- (lender-count) Network of over 800 lenders [b, site-level; c Spear's and LinkedIn]
- (lender-count) 300+ lenders cited on /property-development-finance/ [a][b][seed]
- (lender-count) 700+ lenders cited on /commercial-mortgage-broker/ [a][seed]
- (lender-count) 500+ lenders cited on LinkedIn [a][seed]
- (contradiction) CONTRADICTION: lender count varies 300+ / 500+ / 700+ / 800+ across pages and profiles; search tool flags 'verify it before relying on it' [a][b]
- (loan-size) Focus on larger deals, loan sizes £2-£20 million [b, firm-level]; seed also records 'over £500,000' (home, /lenders/) and '£500k to £20m' (/about-us/)
- (process) Process: initial consultation, shortlist of lenders, market review, formal heads of terms [a]
- (process) Typically narrows lenders to as many as 3 or 4 potential partners per deal [seed, sibling pages]
- (contact) Office: 91 Wimpole St, Marylebone, London W1G 0EF; phone +44 207 459 4440 [a]. Seed records postcode W1G 0EE on /contact/ - minor contradiction (0EE vs 0EF)
- (geography) Arranges real estate debt in the UK, Western Europe, Southern Africa and the Middle East [c, Spear's]
- (credential) Brokers and advises on loans to (U)HNWs through strong relationships with private banks around the world [c, Spear's]
- (ltv) First-time developers: maximum of 60% to 65% LTGDV typical [b, /first-time-developer-finance/, NOT target page]

_Notes d'extraction : Seed file has no snippet keyed to /development-finance-brokers/; seed material used comes from sibling development-finance pages and is tagged [seed]. Search [a] returned the target URL but the tool stated 'only partial text was visible'; the broker-role description and the 4-step process are the only items the tool attributes to the page itself. Search [b] returned the target URL with a differen…_

#### Senior Development Finance UK

URL : <https://www.silveroakcapital.co.uk/senior-development-finance/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Not revealed by search results. The indexed page title is "Senior Development Finance UK" (seen identically in results [a] and [b]); the H1 is likely the same or close, but this is not confirmed.  
**Meta description :** Not revealed. The search tool returned paraphrased summaries, not the meta description.

**Résumé.** Product page of the UK broker Silver Oak Capital describing senior development finance: a first-charge loan secured on the development site, presented as the main funding source for large construction projects (from a single bespoke build to a multi-unit housing scheme). It covers a large share of the land purchase and most of the construction costs. The loan is structured in two parts: a day-one tranche to buy the site or refinance an existing bridging loan, and a held-back portion paid out in stages as construction progresses, after certification by a monitoring surveyor. The page positions the firm as focusing on leverage, cash flow and control rather than interest rate alone, and says specialist lenders fill the gap left by high-street banks. No figures (LTV, LTGDV, rates, fees, loan sizes, durations) specific to THIS page were surfaced; the only leverage figure (65-75% of GDV) comes from a separate Silver Oak blog page. Search (c) surfaced nothing about Silver Oak at all.

**Sections repérées**

- **What senior development finance is (page summary [a][b])** — Described as the main funding source for large construction projects, from a single bespoke build to a multi-unit housing scheme. It is a first-charge loan / first-charge facility secured on the development site. It covers a large share of the land purchase and most of the construction costs ([a]); [b] phrases it as covering construction and, if needed, the land purchase.
- **How the loan is structured: two parts (page summary [a][b])** — A portion is released on day one to buy the site or refinance an existing bridge loan. The rest is held back and paid out in stages as construction progresses, after a monitoring surveyor certifies the work.
- **Firm's approach (page summary [a])** — The firm says it focuses on leverage, cash flow, and control rather than the interest rate alone. It also says specialist lenders fill the gap left by high-street banks; the summary attaches 'which assess projects on viability' to this sentence (ambiguous whether it refers to specialist lenders or banks; most plausibly the specialist lenders assess on project viability).
- **Related leverage figure (NOT from this page) [b][seed]** — A separate Silver Oak page (the Scotland development finance blog) puts standard senior development loans at roughly 65-75% of Gross Development Value. The stretch senior page says stretch senior can reach up to 75% of GDV or 90% loan-to-cost, usually with tighter covenants.
- **Related process (NOT from this page) [a][b][seed]** — The general property development finance page describes an initial consultation, a shortlist of around three or four lenders, then formal heads of terms for the client to review; loans are rolled up and repaid on completion through sales or refinancing.
- **Related worked example (NOT from this page) [a][seed]** — The older /types-of-borrowing/ page lists senior, stretched senior, mezzanine and joint venture equity options and gives an indicative example of a GBP 10 million loan at a 6.5% fixed rate over 18 months with a typical broker fee of 1.00%. The search tool flagged that page as about 1,600 days old.

**Phrases verbatim (anglais)**

> [a] "Senior development finance is described as the main funding source for large construction projects, from a single bespoke build to a multi-unit housing scheme."
>
> [a] "It is a first-charge loan secured on the development site. It covers a large share of the land purchase and most of the construction costs."
>
> [a] "The loan has two parts. A portion is released on day one to buy the site or refinance an existing bridge loan. The rest is held back and paid out in stages as construction progresses, after a monitoring surveyor certifies the work."
>
> [a] "The page says the firm focuses on leverage, cash flow, and control rather than the interest rate alone. It also says specialist lenders fill the gap left by high-street banks, which assess projects on viability."
>
> [b] "Their main page describes senior development finance as a first-charge facility secured on the development site, covering construction and, if needed, the land purchase."
>
> [b] "Part of the loan is paid out up front, often to buy the site or repay a bridge. The rest is held back and paid in stages as building work is certified by a monitoring surveyor."
>
> [b] "A separate Silver Oak page puts standard senior loans at roughly 65-75% of gross development value."
>
> [b] "Stretch senior: This is a higher-leverage single-lender version. The page says it can reach up to 75% of GDV or 90% of loan-to-cost, and it usually comes with tighter covenants."
>
> [b] "Silver Oak says it works with more than 800 lenders in the UK and abroad."
>
> [b] "Their development finance page describes an initial consultation, a shortlist of around three or four lenders, and then formal heads of terms for the client to review."
>
> [b] "One example is a 100-unit affordable housing scheme in Kent with a GBP 45 million GDV, where the client needed to fund the build and refinance an existing bridging loan."
>
> [a] "The types-of-borrowing page lists senior, stretched senior, mezzanine, and joint venture equity options. Its indicative example is a GBP 10 million loan at a 6.5% fixed rate over 18 months, with a typical broker fee of 1.00%."
>
> [a] "The homepage says the firm specialises in loans over GBP 500,000 and works through a network of more than 800 lenders."
>
> [seed] "Senior development loans cover a percentage of land purchase and construction costs, typically up to 65-75% of Gross Development Value." (from /how-does-property-development-finance-in-scotland/)
>
> [seed] "secured against the available land and drawn in line with the business plan and construction schedule; interest rolled up; repaid at practical completion through sales or refinance" (from /property-development-finance/)
>
> [seed] "development finance (senior, stretched senior, mezzanine/second charge, joint venture equity; broker fees around 1%; worked example at 6.5% fixed)" (from /types-of-borrowing/)

**Produits et services cités**

- Senior development finance (first-charge development loan) - this page
- Stretch senior development finance (related page)
- Mezzanine / junior finance (related, listed on /types-of-borrowing/)
- Joint venture equity (related, listed on /types-of-borrowing/)
- Whole loans (related page seen in results)
- Property development finance brokerage generally (related page)
- Refinancing an existing bridging loan into development finance (use stated on this page)

**Cas d'usage**

- Large construction projects, from a single bespoke build to a multi-unit housing scheme [a]
- Buying the development site (day-one tranche) [a][b]
- Refinancing / repaying an existing bridge loan on the site (day-one tranche) [a][b]
- Funding construction costs in stages as works are certified [a][b]
- Related case study: 100-unit affordable housing scheme in Kent, GBP 45m GDV, funding the build and refinancing an existing bridging loan [b]

**Conditions, montants, délais, frais**

- Security: first charge over the development site [a][b]
- Coverage: a large share of the land purchase and most of the construction costs [a]; construction and, if needed, the land purchase [b]
- Drawdown: part released on day one; remainder held back and released in stages against monitoring surveyor certification [a][b]
- Leverage (NOT stated on this page; from Silver Oak Scotland blog): standard senior loans typically up to 65-75% of GDV [b][seed]
- Leverage (related stretch senior page): up to 75% GDV or 90% loan-to-cost, tighter covenants [b]
- Rate / fee / duration (NOT from this page; older /types-of-borrowing/ example): GBP 10m at 6.5% fixed over 18 months, broker fee 1.00% [a][seed]
- Repayment (related /property-development-finance/ page): interest rolled up, repaid on completion via sales or refinance [a][seed]
- Minimum loan size (firm-wide, homepage): over GBP 500,000 [a][seed]
- No loan size, LTV/LTGDV/LTC cap, interest rate, arrangement fee, exit fee, term length or timescale specific to this page was surfaced

**Critères d'éligibilité**

- Not stated in surfaced content for this page. The only hint is the market framing: specialist lenders assess projects on viability (ambiguous attribution) [a]. No experience, deposit, planning or nationality criteria were revealed.

**Types de prêteurs**

- Specialist development lenders, described as filling the gap left by high-street banks [a]
- High-street banks (mentioned by contrast) [a]
- Firm-wide claim: network of more than 800 lenders in the UK and abroad [a][b]

**Étapes du processus**

- Day one: a portion of the loan is released to buy the site or refinance an existing bridge loan [a][b]
- During construction: remaining funds held back and paid out in stages as construction progresses [a]
- Each stage released after a monitoring surveyor certifies the work [a][b]
- Related (from /property-development-finance/, not this page): initial consultation -> shortlist of around three or four lenders -> formal heads of terms for the client to review [b]

**Géographie**

- UK (page title 'Senior Development Finance UK') [a][b]
- Lender network described as UK and abroad [b]
- Kent (related case study) [b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (product-definition [a]) Senior development finance is the main funding source for large construction projects, from a single bespoke build to a multi-unit housing scheme
- (security [a][b]) First-charge loan secured on the development site
- (coverage [a]) Covers a large share of the land purchase and most of the construction costs
- (mechanism [a][b]) Two-part structure: day-one release plus staged drawdowns certified by a monitoring surveyor
- (positioning / promise [a]) The firm focuses on leverage, cash flow and control rather than the interest rate alone
- (market claim [a]) Specialist lenders fill the gap left by high-street banks
- (number (firm-wide; attributio…) Works with more than 800 lenders in the UK and abroad
- (number (homepage, not this pa…) Firm specialises in loans over GBP 500,000
- (number (Scotland blog, not th…) Standard senior loans roughly 65-75% of GDV
- (number (stretch senior page, …) Stretch senior up to 75% GDV or 90% LTC with tighter covenants
- (number (old /types-of-borrowi…) Indicative example GBP 10m at 6.5% fixed over 18 months, broker fee 1.00%
- (case study (separate case-stu…) Case study: 100-unit affordable housing scheme in Kent, GBP 45m GDV, build funding plus bridge refinance
- (process (development finance …) Lender shortlist of around three or four per deal
- (credential (third-party profi…) Company founded 2019, London, 11-50 employees

_Notes d'extraction : Direct fetch blocked; everything comes from the WebSearch tool's paraphrased summaries of indexed snippets, not from the page HTML. 'Verbatim' entries are the summary's wording, not guaranteed page wording. Searches (a) and (b) both surfaced the page and agree on the core mechanism (first charge, two-part drawdown, monitoring surveyor). Search (c) ("Silver Oak Capital" senior development finance …_

#### Stretch Senior Development Finance UK

URL : <https://www.silveroakcapital.co.uk/stretch-senior-development-finance/>  
Confiance : medium · Recherches effectuées : 3


**Résumé.** Product page for Silver Oak Capital's stretch senior development finance. Search results reveal the core description: a single high-leverage facility from one lender that combines the leverage of senior debt and mezzanine finance, 'stretching' higher than a standard senior development loan. The firm says it can help secure up to 75% of Gross Development Value (GDV) or 90% Loan to Cost (LTC) in a single transaction; the product often carries tighter controls and covenants, and avoids a second lender (so no Intercreditor Deed between senior and junior lenders). The site FAQ adds that stretch senior lenders typically have a minimum loan size of about £1m-£2m, can fund projects up to £50m+, and may cap commercial schemes at 65% LTGDV. H1, meta description, process steps and CTAs were not revealed by search snippets. Contradictions noted: an older /types-of-borrowing/ example shows 75% LTGDV / 85% LTC and the Scotland article says up to 85% of total costs, versus 90% LTC on this page.

**Sections repérées**

- **What is stretch senior development finance (heading inferred, not revealed)** — A single high-leverage loan from one lender. It 'stretches' higher than a standard senior development loan, effectively combining the leverage provided by a mixture of senior debt and mezzanine finance into one single facility from one lender. [a][b]
- **Leverage available (heading inferred)** — Silver Oak Capital says it can help you secure up to 75% of the Gross Development Value (GDV) or 90% of Loan to Cost (LTC) in a single transaction. [a][b]
- **Controls and covenants (heading inferred)** — The product often includes tighter controls and covenants to get comfortable at higher leverage. [a][b]
- **One lender, no Intercreditor Deed (heading inferred)** — A key selling point is avoiding a second lender; the page notes this eliminates the 'Intercreditor Deed', the agreement between senior and junior lenders. [b]
- **Related FAQ answers from /faq/ (not on this page)** — Stretch Senior lenders typically have a minimum loan size of around £1m – £2m, as the work involved in setting up the facility doesn't justify smaller loans; they can scale up significantly, funding projects up to £50m+. Commercial development is possible though leverage might be lower; lenders may cap the leverage at 65% LTGDV. [a][b]

**Phrases verbatim (anglais)**

> [a] The product combines senior and mezzanine debt into one facility from one lender.
>
> [a] It "stretches" higher than a standard senior development loan, effectively combining the leverage provided by a mixture of senior debt and mezzanine finance into one single facility from one lender.
>
> [a] The firm says it can secure up to 75% of the Gross Development Value (GDV) or 90% of Loan to Cost (LTC) in a single transaction.
>
> [a] This product often includes tighter controls and covenants to get comfortable at higher leverage.
>
> [a] Per the FAQ, Stretch Senior lenders typically have a minimum loan size of around £1m – £2m, as the work involved in setting up the facility doesn't justify smaller loans. However, they can scale up significantly, funding projects up to £50m+.
>
> [a] The FAQ notes that using it for commercial development is possible, though the leverage might be lower.
>
> [a] Another page from the same firm lists a Loan to GDV 75% (Loan to Cost 85%) example, which is older and conflicts with the 90% LTC figure on the stretch page.
>
> [b] a single high-leverage loan from one lender
>
> [b] combining the leverage provided by a mixture of senior debt and mezzanine finance into one single facility from one lender
>
> [b] They say they can help you secure up to 75% of the Gross Development Value (GDV) or 90% of Loan to Cost (LTC), and the product often includes tighter controls and covenants.
>
> [b] A key selling point is avoiding a second lender. Their page notes this eliminates the "Intercreditor Deed", which is the agreement between senior and junior lenders.
>
> [b] Lenders typically have a minimum loan size of around £1m – £2m, but can fund projects up to £50m+. For commercial schemes, leverage is lower: lenders may cap the leverage at 65% LTGDV.
>
> [b] a Scotland-focused article describes stretched senior loans as finance up to 85% of total costs, which differs from the 90% LTC figure on the main product page
>
> [c] The search didn't turn up anything about Silver Oak Capital specifically. None of the results mention that lender, so I can't confirm its stretch senior terms or LTV limits.
>
> [seed] /types-of-borrowing/: development finance (senior, stretched senior, mezzanine/second charge, joint venture equity; broker fees around 1%; worked example at 6.5% fixed)
>
> [seed] /how-does-property-development-finance-in-scotland/: types: senior loans, mezzanine finance, bridging loans, stretched senior loans, joint venture finance
>
> [seed] 'Senior development loans cover a percentage of land purchase and construction costs, typically up to 65-75% of Gross Development Value.'
>
> [seed] mezzanine 'a secondary loan that sits behind senior debt, reducing the developer's equity requirement'

**Produits et services cités**

- Stretch senior development finance: one facility from one lender combining the leverage of senior debt and mezzanine finance [a][b]
- Brokerage/advisory to secure the facility ('can help you secure up to 75% GDV or 90% LTC') [a][b]
- Related development products on the site: Senior Development Finance, Mezzanine / Junior Finance, Whole Loans, Property Development Finance, Post Planning Land Acquisitions [seed][a][b]

**Cas d'usage**

- Development projects needing higher leverage than a standard senior development loan [a]
- Developers wanting a single lender instead of a separate senior and mezzanine lender, avoiding an Intercreditor Deed [b]
- Commercial development schemes (possible, but with lower leverage, e.g. capped at 65% LTGDV per FAQ) [a][b]
- Larger schemes: FAQ says lenders can fund projects up to £50m+ [a][b]

**Conditions, montants, délais, frais**

- Leverage: up to 75% of Gross Development Value (GDV) [a][b]
- Leverage: up to 90% Loan to Cost (LTC) 'in a single transaction' [a][b]
- Structure: single facility from one lender combining senior and mezzanine leverage [a][b]
- Controls: 'often includes tighter controls and covenants to get comfortable at higher leverage' [a]
- No Intercreditor Deed because there is no second (junior) lender [b]
- Minimum loan size (site FAQ): around £1m – £2m [a][b]
- Maximum (site FAQ): projects up to £50m+ [a][b]
- Commercial schemes (site FAQ): leverage may be capped at 65% LTGDV [b]
- Contradiction: older /types-of-borrowing/ example shows Loan to GDV 75% / Loan to Cost 85% [a]; Scotland article says stretched senior finances up to 85% of total costs [b]
- Rates, fees, duration, timescales and security for this product: NOT revealed by search results for this page (seed only gives general firm-level fee claims, e.g. ~1% broker fee on /types-of-borrowing/)

**Critères d'éligibilité**

- Loan size typically at least around £1m – £2m, as 'the work involved in setting up the facility doesn't justify smaller loans' (site FAQ) [a]
- Borrower must accept tighter controls and covenants at higher leverage [a]
- Commercial development eligible but at lower leverage (FAQ: may cap at 65% LTGDV) [a][b]
- Developer experience / track record requirements: NOT revealed in results

**Types de prêteurs**

- 'Stretch Senior lenders' - single lenders providing a combined senior + mezzanine facility [a][b]
- Contrasted with the alternative of a senior lender plus a separate junior/mezzanine lender bound by an Intercreditor Deed [b]
- Firm-level lender network claims (seed, not from this page): 300+ on /property-development-finance/, 800+ on home and /faq/

**Géographie**

- United Kingdom (page title 'Stretch Senior Development Finance UK') [a][b]

**Questions fréquentes**

- **What is the minimum loan size for stretch senior development finance?** Site FAQ (as surfaced by [a][b]): 'Stretch Senior lenders typically have a minimum loan size of around £1m – £2m, as the work involved in setting up the facility doesn't justify smaller loans. However, they can scale up significantly, funding projects up to £50m+.'
- **Can stretch senior finance be used for commercial development?** Site FAQ (as surfaced by [a][b]): possible, 'though the leverage might be lower'; 'lenders may cap the leverage at 65% LTGDV'.
- **How is stretch senior different from senior plus mezzanine?** Page content per [b]: one facility from one lender, which 'eliminates the Intercreditor Deed, which is the agreement between senior and junior lenders'.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Can help secure up to 75% of Gross Development Value (GDV) [a][b]
- (number) Can help secure up to 90% Loan to Cost (LTC) in a single transaction [a][b]
- (structure) Combines senior debt and mezzanine finance into one single facility from one lender [a][b]
- (promise) Stretches higher than a standard senior development loan [a]
- (caveat) Often includes tighter controls and covenants at higher leverage [a][b]
- (benefit) Avoiding a second lender eliminates the Intercreditor Deed [b]
- (number) FAQ: minimum loan size around £1m – £2m [a][b]
- (number) FAQ: can fund projects up to £50m+ [a][b]
- (number) FAQ: commercial schemes may be capped at 65% LTGDV [b]
- (contradiction) Contradiction: /types-of-borrowing/ older example 75% LTGDV / 85% LTC vs 90% LTC on this page [a]
- (contradiction) Contradiction: Scotland article 'up to 85% of total costs' vs 90% LTC on this page [b]
- (absence) No testimonials, awards, credentials or case-study references for this specific page were surfaced

_Notes d'extraction : Seed file has no snippetsFromFirstPass entry for this path; only navigation (Development > Stretch Senior Development Finance) and related-page snippets apply. Search [a] (extended, exact URL) and [b] (extended, site: query) both surfaced the page with title 'Stretch Senior Development Finance UK' and the same core paragraph; the search tool reported the page is 'only partly visible'. Search [c] …_

#### Mezzanine Finance UK

URL : <https://www.silveroakcapital.co.uk/mezzanine-junior-finance/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Silver Oak Capital's mezzanine / junior finance page (search-result title 'Mezzanine Finance UK') sits under the Development menu as 'Mezzanine / Junior Finance'. Per the search tool's summary of the page [b], it describes mezzanine as a junior loan placed behind senior debt where the lender takes a second charge, explains that the second-charge position carries higher risk and therefore a higher interest rate than the senior facility, and gives an example capital stack of roughly 65% senior debt, 10-20% mezzanine and a small developer equity share. Related site pages seen in the same results position stretch senior and whole loans as single-lender alternatives combining senior and mezzanine debt, and the FAQ frames mezzanine as debt (borrower keeps remaining profit) rather than a profit-share. H1, meta description, loan sizes, durations, fees, timescales and process steps for the mezzanine page itself were NOT revealed by any of the 3 searches. Direct fetching was blocked; everything comes from search snippets/summaries.

**Sections repérées**

- **What is mezzanine / junior finance (as described on the page)** — [b] Silver Oak describes mezzanine as a junior loan placed behind senior debt, with the lender taking a second charge. [seed, Scotland blog] mezzanine is 'a secondary loan that sits behind senior debt, reducing the developer's equity requirement'. [seed, /types-of-borrowing/] the development finance options listed are senior, stretched senior, mezzanine/second charge and joint venture equity.
- **Risk and pricing** — [b] 'Because the Mezzanine lender is in a second charge position, the risk is higher, and therefore the interest rate is higher than the senior facility.' No numeric mezzanine rate was revealed. For comparison, the stretch senior page [b] puts the blended cost of a stretch senior loan at 'typically between 8% and 10% per annum (plus execution fees)'.
- **Example capital stack** — [b] The page gives an example capital stack of roughly 65% senior debt, 10-20% mezzanine, and a small developer equity share. [seed, Scotland blog] 'Senior development loans cover a percentage of land purchase and construction costs, typically up to 65-75% of Gross Development Value.'
- **Mezzanine vs profit share (from /faq/)** — [b] Mezzanine is presented as debt rather than a profit-sharing partnership, so the borrower keeps the remaining profit. 'If your project is highly profitable, mezzanine finance is usually cheaper than giving away half your profit.'
- **Alternatives promoted on the site: stretch senior and whole loans** — [b] Silver Oak promotes stretch senior and whole loans as single-lender options that combine senior and mezzanine debt. [a] The whole-loans page frames mezzanine as a separate layer that sits alongside a bank's senior loan in a high-leverage deal, says Silver Oak has direct relationships with pension funds, hedge funds and private equity managers, and claims a whole loan can cut legal costs because the borrower pays for two sets of lawyers instead of three.
- **Broker positioning (homepage, seen in same results)** — [b] The homepage says the firm 'arranges debt on a wide range of real estate and luxury assets transactions across the UK, US, Western Europe and the Middle East through our network of over 800 lenders'. [seed, /property-development-finance/] access to a vast network of senior debt, mezzanine debt and equity lenders; typically narrows to 3 or 4 potential lending partners per deal.

**Phrases verbatim (anglais)**

> [b] Search-result title of the page: "Mezzanine Finance UK"
>
> [b] "Because the Mezzanine lender is in a second charge position, the risk is higher, and therefore the interest rate is higher than the senior facility."
>
> [b] (/faq/) "If your project is highly profitable, mezzanine finance is usually cheaper than giving away half your profit."
>
> [b] (/stretch-senior-development-finance/) blended cost "typically between 8% and 10% per annum (plus execution fees)"
>
> [b] (homepage) "arranges debt on a wide range of real estate and luxury assets transactions across the UK, US, Western Europe and the Middle East through our network of over 800 lenders"
>
> [a] (/whole-loans/, search-tool wording, not confirmed verbatim) mezzanine is "a separate layer that sits alongside a bank's senior loan in a high-leverage deal"; whole loan means "the borrower pays for two sets of lawyers instead of three"
>
> [c] (LinkedIn, Joe Berk) firm described as a finance arranger "with access to over 800 lenders"; "arranged a £4 million bridging loan on a Kensington residential property"
>
> [seed] (/how-does-property-development-finance-in-scotland/) mezzanine: "a secondary loan that sits behind senior debt, reducing the developer's equity requirement"
>
> [seed] (/how-does-property-development-finance-in-scotland/) "Senior development loans cover a percentage of land purchase and construction costs, typically up to 65-75% of Gross Development Value."
>
> [seed] (navigation) menu label under Development: "Mezzanine / Junior Finance"

**Produits et services cités**

- Mezzanine / junior development finance (second-charge loan behind senior debt) [b][seed]
- Stretch senior development finance (single-lender alternative combining senior + mezzanine) [b]
- Whole loans (single-lender alternative combining senior + mezzanine) [a][b]
- Senior development finance [seed]
- Joint venture equity (listed on older /types-of-borrowing/ page) [seed]

**Cas d'usage**

- Reducing the developer's equity requirement on a development scheme [seed]
- Topping up a senior development facility (example stack ~65% senior + 10-20% mezzanine + small developer equity) [b]
- Retaining project profit instead of giving away a profit share to a JV partner [b, /faq/]
- High-leverage development deals where a mezzanine layer sits alongside a bank's senior loan [a, /whole-loans/]

**Conditions, montants, délais, frais**

- Security: second charge behind the senior lender [b]
- Pricing: interest rate higher than the senior facility; no mezzanine rate figure revealed [b]
- Example capital stack: roughly 65% senior debt, 10-20% mezzanine, small developer equity share [b]
- Comparison: stretch senior blended cost typically 8%-10% per annum plus execution fees [b, related page]
- Comparison: senior development loans typically up to 65-75% of GDV [seed, Scotland blog]
- Broker fees around 1% (older /types-of-borrowing/ page; not confirmed for mezzanine page) [seed]
- NOT revealed for this page: loan sizes, durations, timescales, arrangement/exit fees, max LTGDV/LTC for mezzanine

**Critères d'éligibilité**

- Not revealed on the mezzanine page by any search.
- Firm-level (seed): generally focuses on transactions upwards of £500,000 (/lenders/); 'loans between £500K to £20m' (/about-us/).

**Types de prêteurs**

- Senior debt, mezzanine debt and equity lenders (network) [seed, /property-development-finance/]
- Pension funds, hedge funds, private equity managers (direct relationships, per /whole-loans/) [a]
- Banks providing the senior loan alongside a mezzanine layer [a]
- Lender count: 'over 800 lenders' [b homepage, c LinkedIn]; seed also records 300+/500+/700+ on other pages (contradiction)

**Étapes du processus**

- Not revealed for this page.
- Firm-level (seed): typically narrows lenders to as many as 3 or 4 potential partners per deal (/property-development-finance/, /commercial-mortgage-broker/).

**Géographie**

- United Kingdom (page title 'Mezzanine Finance UK') [b]
- UK, US, Western Europe, Middle East (homepage) [b]

**Appels à l'action**

- Not revealed for this page.
- Firm-level (seed): enquiry form, direct email enquiry@silveroakcapital.co.uk, WhatsApp, +44 207 459 4440

**Questions fréquentes**

- **Is mezzanine finance cheaper than giving away a share of profit?** [b, /faq/] Mezzanine is debt rather than a profit-sharing partnership, so the borrower keeps the remaining profit. 'If your project is highly profitable, mezzanine finance is usually cheaper than giving away half your profit.'
- **Why is mezzanine more expensive than senior debt?** [b] 'Because the Mezzanine lender is in a second charge position, the risk is higher, and therefore the interest rate is higher than the senior facility.'

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of over 800 lenders [b homepage][c LinkedIn]; seed shows 300+ (/property-development-finance/), 500+ (LinkedIn), 700+ (/bridging-loans-uk/) on other pages
- (number) Example capital stack ~65% senior / 10-20% mezzanine / small developer equity [b]
- (number) Stretch senior blended cost typically 8%-10% p.a. plus execution fees [b, related page]
- (credential) Direct relationships with pension funds, hedge funds and private equity managers [a, /whole-loans/]
- (promise) Whole loan can cut legal costs: two sets of lawyers instead of three [a, /whole-loans/]
- (track-record) £4 million bridging loan arranged on a Kensington residential property [c, LinkedIn post by Joe Berk]; seed case-study URL says '3-6-million-bridging-loan-prime-kensington-property' (£3.6m) - possible contradiction or different deal
- (geography) Arranges debt across the UK, US, Western Europe and the Middle East [b homepage]

_Notes d'extraction : Query (a) [extended, exact URL] did NOT return the mezzanine page; it returned /whole-loans/ plus unrelated Oaktree Capital results (ignored). Query (b) [extended, site: search] was the only one to surface the page, and the content is the search tool's summary with two sentences that read as verbatim. Query (c) [standard] returned nothing on Silver Oak's mezzanine terms; only a LinkedIn post (Joe…_

#### Whole Loans UK

URL : <https://www.silveroakcapital.co.uk/whole-loans/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** The /whole-loans/ page (search-result title 'Whole Loans UK') presents a whole loan as a single facility from one lender covering a developer's entire debt requirement, combining what would otherwise be senior plus mezzanine finance, usually secured by one first charge over the property. The lender may still split the loan internally into senior and junior tranches, but the structure avoids an intercreditor deed and a separate credit committee for each tranche. Silver Oak Capital says it works with a select group of private debt funds and specialist lenders who offer whole loans. No pricing, fees, rates, LTV/LTC/LTGDV limits, loan sizes, durations, eligibility criteria, process steps, FAQ items, testimonials or calls to action specific to this page were revealed by any of the three searches. Firm-level figures surfacing alongside are contradictory (300+ vs 800+ lenders; GBP 500k-20m vs GBP 2m-20m loan focus).

**Sections repérées**

- **What is a whole loan (as the page defines it)** — [a] one lender providing the entire debt requirement, combining senior and mezzanine finance. [b] a single facility from one lender that covers the full debt requirement, often reaching leverage that would otherwise need senior and mezzanine debt combined. Page title per search results: 'Whole Loans UK' [a][b]. Actual H1 and meta description not revealed.
- **Structure and security** — [a] usually with one first charge over the property. [b] a lender may still split the loan internally into senior and junior tranches. [a][b] the structure avoids the need for an intercreditor deed; [a] also avoids a separate credit committee for each tranche. Presented as a 'single-lender alternative' [a] to a separate senior + mezzanine stack.
- **Lender panel for whole loans** — [a][b] Silver Oak Capital works with a select group of private debt funds and specialist lenders who offer whole loans. No lender names revealed.
- **Context from sibling development pages (not text of /whole-loans/)** — [b] /stretch-senior-development-finance/: up to 75% of GDV or 90% of loan-to-cost in one transaction. [seed] senior development loans typically up to 65-75% of GDV; mezzanine sits behind senior debt, reducing the developer's equity requirement. [seed] /faq/: whole-loan providers often sector-agnostic: PBSA, hotels, BTR, industrial. [b]/[seed] /property-development-finance/: network of 300+ lenders, narrowed to three or four suitable partners per project. Whole Loans sits in the 'Development' services menu alongside Property Development Finance, Development Finance Brokers, Senior Development …
- **Firm-level claims surfacing alongside (contradictory)** — Lender count: 800+ Lenders on about-us page per [a] and on homepage per [b]; more than 300 lenders on property-development-finance page per [b] (seed first pass also recorded 300+ there and 700+ on /bridging-loans-uk/ and /commercial-mortgage-broker/). Loan size: £500K to £20m on about-us per [a]; £2 million to £20 million on commercial-mortgage-broker per [b]; third-party directory £2-£20m per [a]. [a] explicitly flags these as differing and unverified. Geography: UK, US, Western Europe and the Middle East (homepage) [b]; London-based [a].
- **Not revealed by any result for this page** — Pricing, interest rates, arrangement/broker fees, exit fees, maximum LTV / LTC / LTGDV for whole loans, minimum and maximum loan size specific to whole loans, loan duration/term, drawdown mechanics, eligibility criteria (experience, sector, location), step-by-step process, FAQ entries, testimonials, case-study links, calls to action, H1 text, meta description. [b] states explicitly: 'The results give no pricing, fees or current rates for whole loans'. [c] returned nothing about Silver Oak Capital at all.

**Phrases verbatim (anglais)**

> [a] Whole Loans UK  (search-result title of https://www.silveroakcapital.co.uk/whole-loans/)
>
> [a] It describes a whole loan as one lender providing the entire debt requirement, combining senior and mezzanine finance, usually with one first charge over the property.
>
> [a] Silver Oak Capital works with a select group of private debt funds and specialist lenders who offer whole loans.
>
> [a] The page presents this as a single-lender alternative that avoids an intercreditor deed and a separate credit committee for each tranche.
>
> [b] Silver Oak describes a whole loan as a single facility from one lender that covers the full debt requirement, often reaching leverage that would otherwise need senior and mezzanine debt combined.
>
> [b] It says the firm works with a select group of private debt funds and specialist lenders offering them.
>
> [b] The page notes that a lender may still split the loan internally into senior and junior tranches, and that the structure avoids the need for an intercreditor deed.
>
> [b] The results give no pricing, fees or current rates for whole loans
>
> [b] (stretch-senior-development-finance page, not /whole-loans/) A related product, the page says these can reach up to 75% of GDV or 90% of loan-to-cost in one transaction.
>
> [b] (property-development-finance page) Silver Oak says it has access to a network of more than 300 lenders and aims to narrow options to three or four suitable partners for each project.
>
> [b] (homepage) The homepage cites a network of over 800 lenders and says the firm arranges debt across the UK, US, Western Europe and the Middle East.
>
> [b] (commercial-mortgage-broker page) The commercial mortgage broker page says the firm focuses on loans of £2 million to £20 million
>
> [a] (about-us page) It says the firm focuses on loans of £500K to £20m and has access to 800+ Lenders.
>
> [a] (third-party directory, lettingagenttoday / thelandsite) A third-party directory listing describes the firm as a London-based commercial mortgage broker specializing in large loans of £2-£20m.
>
> [a] The directory and the firm's own pages differ on lender count and loan size, so treat those figures as unverified.
>
> [c] The search didn't turn up anything about Silver Oak Capital's whole loan development lending or its loan-to-value policies.
>
> [seed] (/faq/ snippet) whole-loan providers often sector-agnostic: PBSA, hotels, BTR, industrial
>
> [seed] (/how-does-property-development-finance-in-scotland/) Senior development loans cover a percentage of land purchase and construction costs, typically up to 65-75% of Gross Development Value.
>
> [seed] (/how-does-property-development-finance-in-scotland/) mezzanine 'a secondary loan that sits behind senior debt, reducing the developer's equity requirement'
>
> [seed] (/property-development-finance/) access to a vast network of senior debt, mezzanine debt and equity lenders; 300+ lenders; as many as 3 or 4 potential partners per deal

**Produits et services cités**

- Whole loans: single-lender facility covering a development's entire debt requirement, combining senior and mezzanine finance [a][b]
- Placement of whole loans with a select group of private debt funds and specialist lenders [a][b]
- [seed navigation, sibling pages] Property Development Finance, Development Finance Brokers, Senior Development Finance, Stretch Senior Development Finance, Mezzanine / Junior Finance, First-Time Developer Finance

**Cas d'usage**

- Developer seeking leverage that would otherwise require combining senior and mezzanine debt from separate lenders [b]
- Avoiding an intercreditor deed between senior and mezzanine lenders [a][b]
- Avoiding a separate credit committee for each tranche of the debt stack [a]
- [seed /faq/, not this page] whole-loan providers often sector-agnostic: PBSA, hotels, BTR, industrial

**Conditions, montants, délais, frais**

- Security: usually one first charge over the property [a]
- Structure: one lender provides the entire debt requirement as a single facility; lender may split internally into senior and junior tranches [a][b]
- Leverage: 'often reaching leverage that would otherwise need senior and mezzanine debt combined' — no percentage stated for whole loans [b]
- Pricing / fees / rates: not revealed; [b] 'The results give no pricing, fees or current rates for whole loans'
- LTV / LTC / LTGDV for whole loans: not revealed; [c] found nothing on Silver Oak loan-to-value policy
- Duration / term: not revealed
- Loan size (firm-level, not page-specific): £500K to £20m (about-us) [a]; £2 million to £20 million (commercial-mortgage-broker) [b]; £2-£20m (third-party directory) [a]
- Comparative only (stretch-senior page): up to 75% of GDV or 90% of loan-to-cost in one transaction [b]

**Critères d'éligibilité**

- Not revealed in any result for /whole-loans/ (no borrower experience, sector, location or minimum equity requirement surfaced)

**Types de prêteurs**

- private debt funds [a][b]
- specialist lenders [a][b]
- described as 'a select group' [a][b]; no lender names given

**Étapes du processus**

- Not revealed for /whole-loans/ itself
- [b] (property-development-finance page) firm 'aims to narrow options to three or four suitable partners for each project'

**Géographie**

- United Kingdom (page title 'Whole Loans UK') [a][b]
- London-based broker [a]
- Firm-level: UK, US, Western Europe and the Middle East (homepage) [b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (lender-count) 800+ Lenders (about-us page per [a]; homepage 'over 800 lenders' per [b])
- (lender-count) more than 300 lenders (property-development-finance page) [b]; contradicts 800+
- (loan-size) focuses on loans of £500K to £20m (about-us page) [a]
- (loan-size) focuses on loans of £2 million to £20 million (commercial-mortgage-broker page) [b]; third-party directory: large loans of £2-£20m [a]; contradicts £500K floor
- (lender-panel) works with a select group of private debt funds and specialist lenders who offer whole loans [a][b]
- (product-benefit) whole loan avoids an intercreditor deed and a separate credit committee for each tranche [a]; avoids the need for an intercreditor deed [b]
- (product-benefit) whole loan often reaches leverage that would otherwise need senior and mezzanine debt combined [b]
- (geography) arranges debt across the UK, US, Western Europe and the Middle East (homepage) [b]
- (process) aims to narrow options to three or four suitable partners for each project (property-development-finance page) [b]
- (comparative-terms) stretch senior loans can reach up to 75% of GDV or 90% of loan-to-cost in one transaction (stretch-senior page) [b]
- (absence) No testimonials, awards, credentials, numbers or promises specific to /whole-loans/ were revealed

_Notes d'extraction : QUERIES: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk whole loans development finance'; (c) standard, '"Silver Oak Capital" whole loans development "loan to value"'. 3 run, 0 refused. SOURCE NATURE: the WebSearch tool returns a summary, not raw page text; 'verbatim' entries tagged [a]/[b]/[c] are the tool's own summary sentences paraphrasing the page and are NOT confirmed p…_

#### First Time Developer Finance UK

URL : <https://www.silveroakcapital.co.uk/first-time-developer-finance/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** First Time Developer Finance UK (search-result title; H1 and meta description not confirmed)  

**Résumé.** Silver Oak Capital's page on development finance for first-time developers (UK). Per search summaries, the page frames the first-time developer 'catch-22' (lenders want prior experience, but experience requires finance; high-street banks almost universally reject applicants with no track record of a similar build), defines the product as development finance structured for individuals or companies undertaking their first ground-up scheme or major conversion, and explains that underwriting focuses less on the borrower's personal track record and more on the assembled team (project manager, architect, main contractor) and the economic feasibility of the scheme. Examples of who it suits: experienced flippers moving into ground-up builds, and contractors who have never been the named borrower or developer. FAQ content states Silver Oak can match a first-project borrower with a lender specialising in 'First Time Developer' products provided there is a strong team. No loan sizes, LTV/LTC/LTGDV, rates, fees, durations or timescales specific to this product were revealed by any of the 3 searches.

**Sections repérées**

- **The first-time developer problem (catch-22)** — [a] 'The page describes a catch-22 where lenders want prior experience but experience requires finance. High-street banks will almost universally reject an application from a developer with no track record of a similar build.'
- **What first-time developer finance is** — [b] 'development finance specifically structured for individuals or companies undertaking their first ground-up scheme or major conversion'.
- **How the product works / underwriting approach** — [a] 'It focuses less on your personal track record and more on the team you have assembled around you and the economic feasibility of the scheme. First-time developer loans are underwritten based on the experience of the project manager, architect, and main contractor.' [b] repeats: 'the lender focuses less on your personal track record and more on the team you have assembled around you and the economic feasibility of the scheme'.
- **Who it suits** — [a] 'The page gives examples such as experienced flippers moving into ground-up builds, and contractors who have never been the named borrower or developer.'
- **FAQ: first project** — [a][b] 'if this is your first project, Silver Oak Capital can match you with a lender who specialises in "First Time Developer" products, provided you have a strong team around you.' (Search (a) attributes this to the page's FAQ; search (b) attributes it to 'The FAQ' with /faq/ also in results, so it may sit on /faq/ rather than on this page.)
- **Related content on other Silver Oak pages (NOT confirmed as on this page)** — [b] 'Another page notes that a fixed-price JCT contract in place and an independent quantity surveyor may be required for some lenders to accept a first-time developer acting as main contractor.' [b] 'One says high street banks are typically unlikely to fund first-time developers, so they will likely need to approach a specialist lender.' [b] 'A scorecard page notes that there are now several specialist lenders who can provide funding for first time developers.' (developerscorecard.silveroakcapital.co.uk) [a] 'Its blog says first-time developers are accessible to finance with the right struct…

**Phrases verbatim (anglais)**

> [a] "The page describes a catch-22 where lenders want prior experience but experience requires finance."
>
> [a] "High-street banks will almost universally reject an application from a developer with no track record of a similar build."
>
> [a] "It focuses less on your personal track record and more on the team you have assembled around you and the economic feasibility of the scheme."
>
> [a] "First-time developer loans are underwritten based on the experience of the project manager, architect, and main contractor."
>
> [a] "The page gives examples such as experienced flippers moving into ground-up builds, and contractors who have never been the named borrower or developer."
>
> [a] "if this is your first project, Silver Oak Capital can match you with a lender who specialises in 'First Time Developer' products, provided you have a strong team around you."
>
> [a] "The search did not turn up lender terms, rates, or loan limits specific to the first-time product"
>
> [b] "development finance specifically structured for individuals or companies undertaking their first ground-up scheme or major conversion"
>
> [b] "the lender focuses less on your personal track record and more on the team you have assembled around you and the economic feasibility of the scheme"
>
> [b] "a fixed-price JCT contract in place and an independent quantity surveyor may be required for some lenders to accept a first-time developer acting as main contractor" (attributed to 'another page', not this one)
>
> [b] "high street banks are typically unlikely to fund first-time developers, so they will likely need to approach a specialist lender" (other page)
>
> [b] "there are now several specialist lenders who can provide funding for first time developers" (developerscorecard subdomain)
>
> [seed] navigation: 'First-Time Developer Finance' listed under Development services alongside Property Development Finance, Development Finance Brokers, Senior, Stretch Senior, Mezzanine / Junior Finance, Whole Loans
>
> [c] no Silver Oak Capital result; search tool stated "I couldn't find any results about Silver Oak Capital's first-time developer criteria."

**Produits et services cités**

- First-time developer finance: development finance structured for a first ground-up scheme or major conversion
- Lender matching: introduction to lenders specialising in 'First Time Developer' products
- [seed] sits within the Development Finance service family (senior, stretch senior, mezzanine/junior, whole loans, development finance brokerage)

**Cas d'usage**

- First ground-up development scheme
- First major conversion
- Experienced flippers moving into ground-up builds
- Contractors who have never been the named borrower or developer

**Critères d'éligibilité**

- Strong team assembled around the borrower: experienced project manager, architect and main contractor (underwriting rests on their experience)
- Economic feasibility of the scheme
- Personal track record weighted less than team and scheme
- [other site page, b] some lenders may require a fixed-price JCT contract and an independent quantity surveyor where the first-time developer acts as main contractor

**Types de prêteurs**

- Specialist lenders offering 'First Time Developer' products
- High-street banks: described as almost universally rejecting applicants with no track record of a similar build (i.e. not the route)
- [developerscorecard subdomain, b] 'several specialist lenders' now fund first-time developers

**Étapes du processus**

- Only step revealed: assessment of team and scheme feasibility, then matching with a lender specialising in 'First Time Developer' products (no application/offer/drawdown sequence surfaced)

**Géographie**

- United Kingdom (title: 'First Time Developer Finance UK'; London focus per seed, not confirmed on this page)

**Questions fréquentes**

- **Question wording not revealed; topic: can I get development finance if this is my first project?** [a][b] 'if this is your first project, Silver Oak Capital can match you with a lender who specialises in "First Time Developer" products, provided you have a strong team around you.'

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (market assertion [a]) High-street banks will almost universally reject an application from a developer with no track record of a similar build.
- (promise / capability [a][b]) Silver Oak Capital can match you with a lender who specialises in 'First Time Developer' products, provided you have a strong team around you.
- (product mechanism [a]) First-time developer loans are underwritten based on the experience of the project manager, architect, and main contractor.
- (market assertion [b] (develop…) There are now several specialist lenders who can provide funding for first time developers.

_Notes d'extraction : SOURCES: seed.json has no snippet for this path; all page content comes from the search tool's summaries for queries (a) exact URL [extended] and (b) site:silveroakcapital.co.uk first time developer finance [extended]. Query (c) "Silver Oak Capital" first-time developer finance criteria [standard] returned no Silver Oak content (only unrelated Australian/UK material and a LinkedIn profile for Joe…_

#### Commercial Mortgages UK

URL : <https://www.silveroakcapital.co.uk/commercial-mortgages/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** The /commercial-mortgages/ page was not retrievable directly; search (a) could not fetch it, search (b) indexed it under the title 'Commercial Mortgages UK' and summarised its content, search (c) returned nothing about Silver Oak. What the results state about the page: it addresses two audiences, owner-occupiers (business owners buying the premises they trade from, gaining security of tenure, avoiding rent reviews and building a tangible balance-sheet asset) and property investors (buying commercial property to let to third-party tenants, often seeking finance that maximises leverage to amplify Return on Equity), and it states that LTVs for commercial mortgages are usually between 65% and 75% depending on the property and circumstances. Related site pages add: an 8-12 week application-to-completion timescale and a cost list (lender arrangement fee, valuation fee, legal fee, broker fee) from the FAQ; sectors covered (retail, office, logistics, care homes, student accommodation, hotels) from the home page; and conflicting loan-size (over GBP 500,000 vs GBP 2-20m) and lender-count (300 / 700+ / 800+) claims across pages. H1, meta description, rates, fees specific to this page, process steps and CTAs were not revealed.

**Sections repérées**

- **Owner-occupiers** — [b] (search-tool summary of the page) Owner-occupiers are described as business owners buying the premises they trade from. Owning the premises gives them security of tenure, avoids rent reviews, and builds a tangible asset on the company balance sheet. [seed] The site navigation labels this segment 'Commercial Mortgages (Owner-Occupiers regulated, Investors)', i.e. owner-occupier commercial mortgages are flagged as regulated.
- **Property investors** — [b] (search-tool summary of the page) Property investors are described as buyers who purchase commercial property specifically to let out to third-party tenants. The page says investors often seek commercial finance that maximises leverage to amplify their Return on Equity (ROE).
- **Loan to value** — [b] (search-tool summary of the page) LTVs for commercial mortgages are usually between 65% and 75% depending on the property and circumstances.
- **Core uses and positioning (attribution uncertain: 'its commercial page')** — [a] The search-tool summary says 'its commercial page lists borrowing, developing, refinancing and acquiring as core uses, and states that it aims for speed and transparency', and that the firm 'positions itself as an independent commercial mortgage broker for UK commercial real estate'. The summary does not say whether 'its commercial page' means /commercial-mortgages/ or /commercial-mortgage-broker/ (the latter is the URL actually listed in result (a)).
- **Sectors covered (home page, not this page)** — [a] Home page wording: 'For commercial we cover – Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels.'
- **Costs and timescales (FAQ page, not this page)** — [a] The FAQ says fees are set out at the outset, and lists common costs as the lender arrangement fee, valuation fee, legal fee and broker fee. [b] The FAQ adds that a commercial mortgage application typically takes 8 to 12 weeks from application to completion.
- **Loan size and lender network (contradictions across sources)** — [a] A third-party directory describes the firm as 'specializing in large loans of £2-£20m'; the firm's own homepage instead says it works on loans over £500,000. [a] Lender count varies: older listings mention 300 lenders, the commercial mortgage broker page cites 700+, the homepage and a 2026 award listing cite 800+. [seed] /about-us/ says 'has focused on loans between £500K to £20m'; /commercial-mortgage-broker/ says 'the firm also focuses on larger loan sizes of £2-£20 million which sets us apart from the majority of the commercial bridging loan market'.

**Phrases verbatim (anglais)**

> [b] Page title as indexed: "Commercial Mortgages UK"
>
> [b] (search-tool summary wording) "The commercial mortgages page describes them as business owners buying the premises they trade from. Owning the premises gives them security of tenure, avoids rent reviews, and builds a tangible asset on the company balance sheet."
>
> [b] (search-tool summary wording) "The same page describes them as buyers who purchase commercial property specifically to let out to third-party tenants. It says investors often seek commercial finance that maximises leverage to amplify their Return on Equity (ROE)."
>
> [b] (search-tool summary wording) "The page says LTVs for commercial mortgages are usually between 65% and 75% depending on the property and circumstances."
>
> [b] (search-tool summary wording, FAQ page) "a commercial mortgage application typically takes 8 to 12 weeks from application to completion"
>
> [b] (search-tool summary wording, FAQ page) "bridging loans as a short-term facility (up to 12-24 months) designed for active investors and business owners"
>
> [b] (search-tool summary wording, blog page) "investors looking to switch lenders when better deals arise may benefit from ERC-free products"
>
> [b] (search-tool summary wording, /international-property-mortgages/) "expert guidance for UK and overseas investors buying residential or commercial real estate"
>
> [b] (search-tool note) "The Silver Oak pages were indexed roughly 200 to 500 days ago, so current rates and terms may differ."
>
> [a] (home page) "For commercial we cover – Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels."
>
> [a] (search-tool summary wording) "The firm positions itself as an independent commercial mortgage broker for UK commercial real estate."
>
> [a] (search-tool summary wording) "Its commercial page lists borrowing, developing, refinancing and acquiring as core uses, and states that it aims for speed and transparency."
>
> [a] (search-tool summary wording, FAQ) "Its FAQ says fees are set out at the outset, and it lists common costs as the lender arrangement fee, valuation fee, legal fee and broker fee."
>
> [a] (third-party directory) "specializing in large loans of £2-£20m"
>
> [a] (search-tool summary wording) "The firm's own homepage instead says it works on loans over £500,000."
>
> [a] (search-tool summary wording) "Older listings mention 300 lenders, its commercial mortgage broker page cites 700+, and its homepage and a 2026 award listing cite 800+."
>
> [a] (search-tool summary wording) "Crunchbase lists the firm as founded in 2019, based in London, with 11–50 employees."
>
> [a] Result title: "Commercial Property Awards 2026 - Private" (awards.propertyweek.com organisation page for Silver Oak Capital)
>
> [a] Result title: "Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions" (home page title)
>
> [seed] Navigation label: "Commercial Mortgages (Owner-Occupiers regulated, Investors)"
>
> [seed] (/commercial-mortgage-broker/) "the firm also focuses on larger loan sizes of £2-£20 million which sets us apart from the majority of the commercial bridging loan market"
>
> [seed] (/faq/) "If you or a family member occupies more than 40% of the property, it becomes a regulated loan"
>
> [seed] (/types-of-borrowing/) "each lender has its own appetite for property types"
>
> [c] No Silver Oak Capital result returned; search-tool note: "The search didn't turn up any results about Silver Oak Capital's commercial mortgage lending or its loan-to-value standards."

**Produits et services cités**

- Commercial mortgages for owner-occupiers (business owners buying the premises they trade from) [b]; flagged 'regulated' in site navigation [seed]
- Commercial mortgages for property investors (commercial property let to third-party tenants) [b]
- Independent commercial mortgage broking for UK commercial real estate [a]
- Refinancing and acquisition finance for commercial property ('borrowing, developing, refinancing and acquiring' listed as core uses) [a]
- Related pages surfaced: commercial mortgage broker service (/commercial-mortgage-broker/) [a][b], international property mortgages for UK and overseas investors [b], mortgages without early redemption charges (blog) [b]

**Cas d'usage**

- Business owner buying its own trading premises to gain security of tenure, avoid rent reviews and build a tangible asset on the company balance sheet [b]
- Investor purchasing commercial property to let to third-party tenants [b]
- Investor seeking finance that maximises leverage to amplify Return on Equity (ROE) [b]
- Refinancing or acquiring commercial property [a] (attribution to this exact page uncertain)
- Investor switching lenders when better deals arise via ERC-free products (blog page, not this page) [b]

**Conditions, montants, délais, frais**

- LTV: usually between 65% and 75% depending on the property and circumstances [b, this page]
- Timescale: typically 8 to 12 weeks from application to completion [b, FAQ page]
- Loan size (contradictory): over £500,000 (homepage) [a][seed]; £500K to £20m (/about-us/) [seed]; £2-£20m (third-party directory [a]; /commercial-mortgage-broker/ [seed])
- Costs: lender arrangement fee, valuation fee, legal fee, broker fee; fees set out at the outset [a, FAQ page]
- Broker fee (seed only, not from this page): 1.00% UK commercial / 1.50% outside UK (old /types-of-borrowing/); blog: ~£1,500 application + 0.5% at offer + 0.5% at completion; Ts&Cs: client-specific fee agreement [seed]
- Rates: not revealed in any result for this page
- Duration / term length: not revealed for commercial mortgages (bridging only: up to 12-24 months [b, FAQ])
- Security: not stated in results for this page

**Critères d'éligibilité**

- Owner-occupier businesses buying the premises they trade from [b]
- Property investors letting commercial property to third-party tenants [b]
- Owner-occupier commercial mortgages flagged as regulated in site navigation [seed]; FAQ: 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan' [seed]
- UK and overseas investors served (international property mortgages page) [b]; non-resident lending needs stronger documentation, more conservative LTV and path-of-funds AML/KYC (FAQ) [seed]
- Explicit criteria (income, trading history, deposit, credit) for this page: not revealed

**Types de prêteurs**

- Not stated in results for this page
- Related: lender-network size cited as 300 (older listings), 700+ (/commercial-mortgage-broker/), 800+ (homepage, 2026 award listing) [a][seed]
- Related: 'each lender has its own appetite for property types' (/types-of-borrowing/) [seed]
- Related: /commercial-mortgage-broker/ typically narrows lenders to as many as 3 or 4 potential partners [seed]

**Étapes du processus**

- Not revealed for this page
- Related (FAQ): fees set out at the outset [a]; application to completion typically 8 to 12 weeks [b]
- Related (/commercial-mortgage-broker/): narrows lenders to as many as 3 or 4 potential partners [seed]
- Related (/introducers/): once indicative terms are provided, introducers introduce the borrower directly [seed]

**Géographie**

- United Kingdom (page title 'Commercial Mortgages UK') [b]
- London-based broker [a][seed]; a directory (mortgage118.com) lists 'Silver Oak Capital, Hackney', which differs from the seed's 91 Wimpole Street W1 office [a]
- Overseas investors buying UK real estate served via /international-property-mortgages/ [b]

**Appels à l'action**

- Not revealed for this page
- Seed contact routes: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp [seed]

**Questions fréquentes**

- **What loan-to-value is available on a commercial mortgage?** Usually between 65% and 75% depending on the property and circumstances [b, this page]
- **How long does a commercial mortgage take?** Typically 8 to 12 weeks from application to completion [b, FAQ page]
- **What costs are involved?** Fees are set out at the outset; common costs are the lender arrangement fee, valuation fee, legal fee and broker fee [a, FAQ page]
- **Why would an owner-occupier buy rather than rent?** Security of tenure, no rent reviews, a tangible asset on the company balance sheet [b, this page]
- **When is a commercial loan regulated?** 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan' [seed, FAQ page]
- **FAQ block on this page itself?** Not revealed by the results

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number/term [b] this page) LTVs for commercial mortgages are usually between 65% and 75% depending on the property and circumstances
- (timescale [b] FAQ page) Commercial mortgage application typically takes 8 to 12 weeks from application to completion
- (positioning [b] this page) Investors often seek commercial finance that maximises leverage to amplify their Return on Equity (ROE)
- (promise [a] 'its commercial p…) Aims for speed and transparency
- (positioning [a]) Independent commercial mortgage broker for UK commercial real estate
- (number [a] third-party direct…) Specializing in large loans of £2-£20m
- (number/contradiction [a][seed]) Lender network: 300 (older listings) / 700+ (/commercial-mortgage-broker/) / 800+ (homepage, 2026 award listing)
- (promise [a] FAQ page) Fees set out at the outset
- (scope [a] home page) Covers Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels
- (award listing [a]; whether sh…) Listed as an organisation at Property Week 'Commercial Property Awards 2026 - Private'
- (credential [a] Crunchbase) Founded 2019, based in London, 11-50 employees
- (none surfaced) Testimonials on this page

_Notes d'extraction : Search (a) with the exact URL did not retrieve the page ('I couldn't retrieve the exact page at that URL') and drew on related pages; search (b) listed the URL with title 'Commercial Mortgages UK' and summarised its content, but all content lines are the search tool's paraphrase, not confirmed page text, so nothing from this page can be quoted as literal website wording; search (c) returned only …_

#### Commercial Mortgage Brokers - Silver Oak Capital (search-result title [a]; also shown as 'Commercial Mortgage…

URL : <https://www.silveroakcapital.co.uk/commercial-mortgage-broker/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** NOT CONFIRMED: no result exposed the H1. Search-result titles suggest 'Commercial Mortgage Broker(s)'.  
**Meta description :** NOT CONFIRMED: no result exposed the meta description. The search tool's paraphrase of the page's opening: independent commercial mortgage broker offering 'extraordinary rates and terms' for financing commercial real estate in the UK [a].

**Résumé.** Page presenting Silver Oak Capital as an independent, London-based commercial mortgage broker for UK commercial real estate. Core uses listed as borrowing, developing, refinancing and acquiring [a]. Main selling point on the page is '700+ Lenders' [a][seed], with a commitment to keep clients informed about which lenders are approached [a] and a process that typically narrows the field to 3 or 4 potential lender partners [seed]. The page states a focus on larger loan sizes of GBP 2-20 million, 'which sets us apart from the majority of the commercial bridging loan market' [seed]. Property types covered: retail, office, logistics, care homes, student accommodation, hotels [a]. Page shows contact details: 91 Wimpole Street, London; 0207 459 4440; enquiry@silveroakcapital.co.uk [a]. The page itself could not be fetched; everything comes from search-engine summaries and the first-pass seed snippet.

**Sections repérées**

- **[reconstructed] Introduction / positioning** — Independent commercial mortgage broker offering 'extraordinary rates and terms' for financing commercial real estate in the UK [a]. London-based, specialising in large loans of GBP 2-20m [seed][a].
- **[reconstructed] Core uses: Borrow, Develop, Refinance, Acquire** — The page lists borrowing, developing, refinancing and acquiring as its core uses [a].
- **[reconstructed] Why Silver Oak Capital / 700+ Lenders** — '700+ Lenders' is the main selling point [a][seed]. The firm commits to keeping clients informed about which lenders it approaches during the process [a] and typically narrows lenders to as many as 3 or 4 potential partners [seed].
- **[reconstructed] Large loan focus** — 'the firm also focuses on larger loan sizes of £2-£20 million which sets us apart from the majority of the commercial bridging loan market' [seed].
- **[reconstructed] Commercial property types** — Retail, Office, Logistics, Care Homes, Student Accommodation, Hotels [a]; same list as the homepage sectors [seed].
- **[reconstructed] Other services** — Development finance, bridging loans, marine and aviation finance [a].
- **[reconstructed] Contact** — 91 Wimpole Street, London; 0207 459 4440; enquiry@silveroakcapital.co.uk, shown on the commercial page [a].

**Phrases verbatim (anglais)**

> [seed] "the firm also focuses on larger loan sizes of £2-£20 million which sets us apart from the majority of the commercial bridging loan market"
>
> [seed] "London-based commercial mortgage broker specializing in large loans of £2-£20m" (first-pass snippet paraphrase; repeated in [a] as "Other sources describe it as a London-based commercial mortgage broker specializing in large loans of £2-£20m")
>
> [seed] "typically narrows lenders to as many as 3 or 4 potential partners"
>
> [a] "The commercial page presents Silver Oak Capital as an independent commercial mortgage broker that offers extraordinary rates and terms for financing commercial real estate in the UK."
>
> [a] "It lists borrowing, developing, refinancing and acquiring as its core uses."
>
> [a] "The page highlights 700+ Lenders as its main selling point, and says it commits to keeping clients informed about which lenders it approaches during its process."
>
> [a] "Lender counts vary across sources: a different version of the site cites over 800 lenders, and a directory listing cites over 300 lenders."
>
> [a] "Commercial property types covered include Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels."
>
> [a] "The firm also handles development finance, bridging loans and marine and aviation finance."
>
> [a] "The firm is based at 91 Wimpole Street, London, with a listed phone number of 0207 459 4440 and enquiry@silveroakcapital.co.uk, as shown on the commercial page."
>
> [a] search-result title for this URL: "Commercial Mortgage Brokers - Silver Oak Capital"; home title: "Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions"; sibling page title: "Commercial Mortgages UK" (/commercial-mortgages/)
>
> [b] search-result title for this URL: "Commercial Mortgage Broker"
>
> [b] "most describe the firm as a commercial mortgage broker focused on larger deals"
>
> [b] "The firm says it specialises in loans over £500,000 and has access to over 800 lenders. Its lenders page says it generally focuses on transactions above £500,000 but doesn't set an upper limit."
>
> [b] "The homepage describes a network of over 800 lenders covering the UK, US, Western Europe and the Middle East. A broker page describes \"700+\" lenders, so the figures differ across pages."
>
> [b] "A case study describes a £4.5m commercial mortgage at 65% LTV on a Manchester office building, with a 7-year interest-only term." (source: /case-studies/manchester-office/, not this page)
>
> [b] "An older page lists typical broker fees for a commercial mortgage as 1.00% in the UK and 1.50% outside the UK. That page is roughly four years old by its metadata, so the figure may be out of date." (source: /types-of-borrowing/, not this page)
>
> [b] other site page titles seen: "Secure Business Loans with Expert Brokers", "Property Finance Lenders UK", "Manchester Office", "Wealth Management" (/types-of-borrowing/), "Property Finance FAQs", "Property Finance Introducers UK"
>
> [c] "Silver Oak Capital appears to be a London-based debt advisory and brokerage firm, not a direct lender. Its own site presents it as a commercial mortgage broker."
>
> [c] "One profile says the firm brokers and advises on loans to (U)HNWs through its strong relationships with private banks around the world." (profile appears to be Spear's 500 entry for Jimmy Baillie)
>
> [c] "The firm handles commercial mortgages to refinancing and bridging loans, with a specialism in loans exceeding the £2 million mark."
>
> [c] "Its Linktree lists pages such as Commercial Mortgage Broker - Silver Oak Capital."
>
> [c] UNCONFIRMED (search tool itself flagged it as possibly another firm): LinkedIn post describing "a broker network of over 800 lenders, they offer independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages"

**Produits et services cités**

- Commercial mortgage brokerage (independent broker) for UK commercial real estate [a]
- Commercial mortgages for owner-occupiers (regulated) and investors [seed navigation]
- Large commercial loans GBP 2-20 million [seed]
- Refinancing of commercial property [a][c]
- Acquisition finance for commercial property [a]
- Development finance (cross-sold on page) [a]
- Bridging loans (cross-sold on page) [a][c]
- Marine and aviation finance (cross-sold on page) [a]
- Sibling commercial pages in navigation: Commercial Mortgages, Mixed Use Property Finance, Hotel Finance [seed]

**Cas d'usage**

- Borrowing against commercial real estate [a]
- Developing commercial real estate [a]
- Refinancing commercial real estate [a]
- Acquiring commercial real estate [a]
- Sectors: retail, office, logistics, care homes, student accommodation, hotels [a][seed]
- Example (case study, other page): GBP 4.5m commercial mortgage on a Manchester office building at 65% LTV, 7-year interest-only [b]

**Conditions, montants, délais, frais**

- Loan size focus on this page: GBP 2-20 million ('larger loan sizes') [seed][a]
- Site-wide minimum elsewhere: loans/transactions over GBP 500,000, no stated upper limit (/lenders/, home) [b][seed]
- Elsewhere: 'specialism in loans exceeding the £2 million mark' [c]
- LTV: not stated on this page; case-study example 65% LTV (Manchester office) [b]
- Rates: not stated; page described as offering 'extraordinary rates and terms' (search-tool paraphrase) [a]
- Duration: not stated on this page; case-study example 7-year interest-only term [b]
- Fees: not stated on this page; older /types-of-borrowing/ page: 1.00% UK / 1.50% outside UK broker fee for a commercial mortgage [b][seed]
- Timescales: not revealed
- Security: commercial real estate in the UK (implicit) [a]

**Critères d'éligibilité**

- Not stated explicitly in results for this page.
- [seed /faq/] 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan' (relevant to owner-occupier commercial mortgages, which the navigation labels 'Owner-Occupiers regulated')
- [seed /faq/] Non-resident borrowers need stronger documentation, more conservative LTV and path-of-funds evidence (AML/KYC)
- [c] Client profile: (U)HNW borrowers (Spear's profile)

**Types de prêteurs**

- '700+ Lenders' panel highlighted on this page [a][seed]
- Private banks around the world (Spear's profile) [c]
- Not a direct lender: broker / debt adviser [c]
- Contradictory counts elsewhere: over 800 lenders (home, /faq/, Trustpilot) [a][b][seed]; over 300 lenders (directory listing, /property-development-finance/) [a][seed]; 500+ (LinkedIn) [seed]
- Home: lender network covering the UK, US, Western Europe and the Middle East [b]

**Étapes du processus**

- Enquire by form, email (enquiry@silveroakcapital.co.uk), phone (0207 459 4440) or WhatsApp [a][seed]
- Broker approaches its lender panel and 'commits to keeping clients informed about which lenders it approaches during its process' [a]
- 'typically narrows lenders to as many as 3 or 4 potential partners' [seed]
- Site-wide (/lenders/): broker typically receives commission from lenders, disclosed during the process [seed]
- Site-wide (/introducers/): once indicative terms are provided, borrower is introduced directly [seed]

**Géographie**

- United Kingdom (financing commercial real estate in the UK) [a]
- London-based; office 91 Wimpole Street, London (W1G 0EE per seed) [a][seed]
- Lender network covers UK, US, Western Europe, Middle East (home) [b]
- Fees differentiated UK vs outside UK (older page) [b][seed]
- Directory listings place the firm under London/Hackney (mortgage118) [a]

**Appels à l'action**

- Phone 0207 459 4440 (shown on the commercial page) [a]
- Email enquiry@silveroakcapital.co.uk (shown on the commercial page) [a]
- Enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent) [seed]
- WhatsApp [seed]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) 700+ Lenders (main selling point on this page)
- (number) larger loan sizes of £2-£20 million
- (promise/differentiator) 'which sets us apart from the majority of the commercial bridging loan market'
- (positioning) independent commercial mortgage broker
- (promise) 'extraordinary rates and terms' for financing commercial real estate in the UK (search-tool paraphrase)
- (promise/process) commits to keeping clients informed about which lenders it approaches
- (process) narrows lenders to as many as 3 or 4 potential partners
- (number/contradiction) over 800 lenders (home/FAQ) - contradicts 700+ on this page
- (number/contradiction) over 300 lenders (directory listing) - contradicts 700+ on this page
- (number) loans over £500,000, no upper limit (/lenders/, home)
- (number) specialism in loans exceeding the £2 million mark
- (credential) strong relationships with private banks around the world; advises (U)HNWs
- (award/credential) Jimmy Baillie listed on Spear's 500 (spears500.com adviser profile)
- (case-study) Case study: £4.5m commercial mortgage, 65% LTV, 7-year interest-only, Manchester office

_Notes d'extraction : Contradictions: lender count 700+ on this page vs 800+ (home, FAQ, Trustpilot), 500+ (LinkedIn), 300+ (directory, /property-development-finance/). Loan size: GBP 2-20m on this page vs 'over £500,000' site-wide and '£500K to £20m' on /about-us/. The seed quote oddly compares a commercial mortgage page to 'the commercial bridging loan market'. The phrase 'extraordinary rates and terms' is the searc…_

#### Mixed Use Property Finance UK

URL : <https://www.silveroakcapital.co.uk/mixed-use-property-finance/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Search-result title for the page is 'Mixed Use Property Finance UK'. The search tool's summaries describe the page as presenting Silver Oak Capital as a specialist in mixed-use finance, which the page also calls semi-commercial finance: a mortgage product designed specifically for properties that consist of both a residential element and a commercial element under a single freehold or leasehold title (e.g. shops with flats above, commercial-residential assets). Lenders assess these differently from buy-to-let loans because income comes from both commercial leases and residential tenancies. The page also covers owner-occupiers who run a business from the ground floor. No loan sizes, LTVs, rates, fees, durations, process steps, testimonials or calls to action from this specific page were surfaced. Related mixed-use content came from the site's /faq/ page (vacant commercial units, challenger banks and bridging lenders, 12-month tenant-finding period with interest-only servicing, pricing between BTL and pure commercial), the /property-development-finance/ page (mixed-use projects, 300+ lenders) and /property-portfolio-mortgages/ (portfolios can include semi-commercial units). The third query ('loan to value') returned nothing from Silver Oak on mixed-use terms.

**Sections repérées**

- **[reconstructed topic, not a confirmed page heading] Positioning: mixed-use / semi-commercial finance specialist** — Silver Oak Capital presents itself as a specialist in mixed-use finance, which it also calls semi-commercial finance. It covers secure finance for mixed-use properties, such as shops with flats and commercial-residential assets. [a]
- **[reconstructed topic] Definition of mixed-use finance** — Mixed-use finance is a mortgage product designed specifically for properties that consist of both a residential element and a commercial element under a single freehold or leasehold title. [b] Also phrased in [a] as: a mortgage product designed for properties that combine a residential element and a commercial element under a single freehold or leasehold title.
- **[reconstructed topic] How lenders assess mixed-use vs buy-to-let** — Lenders assess these differently from buy-to-let loans because income comes from both commercial leases and residential tenancies. [a]
- **[reconstructed topic] Property examples** — Semi-commercial finance for properties such as shops with flats above [b]; shops with flats and commercial-residential assets [a].
- **[reconstructed topic] Owner-occupiers** — The page also covers owner-occupiers who run a business from the ground floor. [b]
- **[related content from /faq/, NOT from this page] Vacant commercial units and pricing** — Buying with an empty commercial unit is possible but harder. High-street lenders usually want a signed lease in place, but the firm works with challenger banks and bridging lenders who may lend on projected income or allow time to find a tenant [a]; allow a period, such as 12 months, to find a tenant while only the interest is serviced [b]. These loans typically carry slightly higher rates than standard buy-to-lets, but lower than pure commercial rates. [b]
- **[related content from other site pages] Mixed-use elsewhere on the site** — /property-development-finance/: development finance for residential, commercial, or mixed-use projects; claims access to 300+ lenders [a][b][seed]. /property-portfolio-mortgages/: portfolio mortgages that can include semi-commercial units [b]. /stamp-duty-changes-in-the-uk-from-april-2025/: a 2025 article notes that the government was reviewing new rates for mixed-use properties [b].

**Phrases verbatim (anglais)**

> [a] "Silver Oak Capital presents itself as a specialist in mixed-use finance, which it also calls semi-commercial finance."
>
> [a] "It covers secure finance for mixed-use properties, such as shops with flats and commercial-residential assets."
>
> [a] "The page describes the product as a mortgage product designed for properties that combine a residential element and a commercial element under a single freehold or leasehold title."
>
> [a] "Lenders assess these differently from buy-to-let loans because income comes from both commercial leases and residential tenancies."
>
> [a] (from /faq/) "buying with an empty commercial unit is possible but harder. High-street lenders usually want a signed lease in place, but the firm works with challenger banks and bridging lenders who may lend on projected income or allow time to find a tenant."
>
> [a] (from /property-development-finance/) "claims access to 300+ lenders"
>
> [a] (from third-party directory mortgage118.com, 'Silver Oak Capital, Hackney') "specialisms as including bridging loans, buy-to-let properties, care homes, commercial mortgages, development finance, HMOs, holiday lets, and mixed-use properties"
>
> [b] "The site's dedicated mixed-use page describes the product as semi-commercial finance for properties such as shops with flats above."
>
> [b] "Mixed-use finance is a mortgage product designed specifically for properties that consist of both a residential element and a commercial element under a single freehold or leasehold title."
>
> [b] "The page also covers owner-occupiers who run a business from the ground floor."
>
> [b] (from /faq/) "these loans typically carry slightly higher rates than standard buy-to-lets, but lower than pure commercial rates"
>
> [b] (from /faq/) "Silver Oak works with challenger banks and bridging lenders who may lend on projected income or allow a period, such as 12 months, to find a tenant while only the interest is serviced."
>
> [b] "development finance for residential, commercial, or mixed-use projects, and portfolio mortgages that can include semi-commercial units"
>
> [b] (from stamp duty 2025 article) "the government was reviewing new rates for mixed-use properties"
>
> [c] "I couldn't find any mixed-use lending terms from Silver Oak Capital, so I can't say what loan-to-value it offers on mixed-use property."
>
> [c] (LinkedIn, Joe Berk, not mixed-use) "a £4,000,000 bridging loan the firm arranged to refinance a prime residential property in Kensington"; "access to a network of over 800 lenders covering bridging and development finance, commercial and buy-to-let mortgages"
>
> [seed] Navigation: Services > Commercial > "Mixed Use Property Finance" (alongside Commercial Mortgages, Commercial Mortgage Broker, Hotel Finance)
>
> [seed] (/property-development-finance/) "flexible property development finance for residential, commercial, or mixed-use projects"

**Produits et services cités**

- Mixed-use property finance (also called semi-commercial finance) [a][b]
- Mortgages for properties combining residential and commercial elements under a single freehold or leasehold title [a][b]
- Finance for owner-occupiers running a business from the ground floor [b]
- Related (other pages): development finance for mixed-use projects [a][b][seed]; portfolio mortgages including semi-commercial units [b]; bridging lenders for vacant commercial units [a][b]

**Cas d'usage**

- Shops with flats above / shop with flat [a][b]
- Commercial-residential assets [a]
- Owner-occupier running a business from the ground floor with residential element above [b]
- (FAQ) Purchase of a mixed-use property with an empty/vacant commercial unit, lending on projected income or with time to find a tenant [a][b]
- (other pages) Mixed-use development projects [a][b][seed]; semi-commercial units within a portfolio [b]

**Conditions, montants, délais, frais**

- Loan size: NOT revealed for this page
- LTV: NOT revealed for this page (query [c] found no Silver Oak mixed-use LTV; only competitor figures Hodge 65%, Cambridge & Counties 70-75%, which are NOT Silver Oak's)
- Rates: (FAQ, not this page) 'typically carry slightly higher rates than standard buy-to-lets, but lower than pure commercial rates' [b]
- Duration: NOT revealed; (FAQ) some lenders allow 'a period, such as 12 months, to find a tenant while only the interest is serviced' [b]
- Fees: NOT revealed for this page (seed firm-level fee claims only)
- Timescales: NOT revealed
- Security: property with both residential and commercial element under a single freehold or leasehold title [a][b]
- Income assessment: income from both commercial leases and residential tenancies [a]

**Critères d'éligibilité**

- Property must consist of both a residential element and a commercial element under a single freehold or leasehold title [a][b]
- Investors (income from commercial leases and residential tenancies) [a]
- Owner-occupiers who run a business from the ground floor [b]
- (FAQ) Empty commercial unit: possible but harder; high-street lenders usually want a signed lease in place [a]

**Types de prêteurs**

- High-street lenders (usually want a signed lease in place) [a] (FAQ)
- Challenger banks [a][b] (FAQ)
- Bridging lenders [a][b] (FAQ)
- (other pages) 300+ lenders on /property-development-finance/ [a][b][seed]; 'over 800 lenders' on LinkedIn/Joe Berk [c] and /faq/ [seed] -- contradiction in lender count noted in seed

**Étapes du processus**

- NOT revealed for this page by any result

**Géographie**

- UK (search-result title 'Mixed Use Property Finance UK') [a][b]
- No regional detail revealed for this page; seed: London-based firm, UK / Western Europe / Middle East / US coverage

**Appels à l'action**

- NOT revealed for this page by any result (seed firm-level: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp)

**Questions fréquentes**

- **(from /faq/, surfaced by [a][b]) Can I buy a mixed-use property with an empty commercial unit?** Possible but harder. High-street lenders usually want a signed lease in place, but the firm works with challenger banks and bridging lenders who may lend on projected income or allow a period, such as 12 months, to find a tenant while only the interest is serviced. [a][b] (question wording reconstructed; answer wording from tool summaries)
- **(from /faq/, surfaced by [b]) How are mixed-use loans priced?** These loans typically carry slightly higher rates than standard buy-to-lets, but lower than pure commercial rates. [b] (question wording reconstructed)

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning) Silver Oak Capital is a specialist in mixed-use / semi-commercial finance [a]
- (number - lender count (other …) Access to 300+ lenders (/property-development-finance/) [a][b][seed]
- (number - lender count (extern…) Network of over 800 lenders covering bridging and development finance, commercial and buy-to-let mortgages (LinkedIn post by Joe Berk) [c]
- (promise / lender access (othe…) Works with challenger banks and bridging lenders who may lend on projected income or allow a 12-month period to find a tenant with interest-only servicing (/faq/) [a][b]
- (pricing statement (other page)) Mixed-use loans typically slightly higher rates than standard BTL but lower than pure commercial (/faq/) [b]
- (external listing (location 'H…) Third-party directory mortgage118.com lists 'Silver Oak Capital, Hackney' with specialisms: bridging loans, buy-to-let, care homes, commercial mortgages, development finance, HMOs, holiday lets, mixed-use properties [a]
- (absence) No testimonials, awards, credentials, timescales or guarantees surfaced for this page

_Notes d'extraction : Seed had no snippetsFromFirstPass entry for /mixed-use-property-finance/; only the navigation placement (Services > Commercial > 'Mixed Use Property Finance') was usable. Query (c) with 'loan to value' returned zero Silver Oak mixed-use content; competitor LTV figures (Hodge 65%, Cambridge & Counties 70%/75% if residential >51%) must NOT be attributed to Silver Oak. Contradictions: lender count 3…_

#### Hotel Finance UK

URL : <https://www.silveroakcapital.co.uk/hotel-finance/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** Hotel Finance is listed under Silver Oak Capital's Commercial services. Search [b] confirmed the page exists with the listing title 'Hotel Finance UK' and revealed its core framing: hotel finance is commercial lending secured against a hotel or guest house; repayment depends on trading profit rather than tenant rent; lenders often size the maximum loan as a multiple of adjusted net profit (EBITDA); typical hotel LTVs are 60% to 70%. The rest of what the searches surfaced about hotel lending comes from other silveroakcapital.co.uk pages (FAQ, homepage, whole-loans page, Cap Ferrat case study), not from the hotel-finance page itself. The actual H1, meta description, section headings, calls to action and any fee/rate/term wording on the page were NOT revealed. Search [c] returned only unrelated third-party hotel-lending articles and nothing about Silver Oak.

**Sections repérées**

- **What hotel finance is (topic revealed by [b]; actual page heading not revealed)** — Commercial lending secured against a hotel or guest house. Repayment depends on trading profit rather than tenant rent. Lenders often determine the maximum loan amount based on a multiple of the borrower's adjusted net profit (EBITDA). [b]
- **Loan to value (topic revealed by [b]; actual page heading not revealed)** — Typical hotel LTVs are between 60% and 70%. [b] The FAQ page adds that for a closed hotel or a changed business model, where projections are used, the LTV is likely lower, around 50-60%, and the rate higher. [a][b]
- **Experience and trading history (from /faq/, not confirmed on /hotel-finance/)** — Lenders generally want prior hotel experience; a first-time buyer can still qualify if the application leans on an experienced general manager or management company. For a trading hotel, lenders typically review the last two to three years of accounts. [a][b]
- **Leasehold hotels (from /faq/, not confirmed on /hotel-finance/)** — Lenders typically want a long remaining lease, usually at least 50-60 years remaining after the mortgage term ends. [a][b]
- **Lender market context (from /case-studies/bridging-villa-cap-ferrat/ and /whole-loans/)** — The firm states that many lenders have pulled out of the hotel lending market since the pandemic and that it has a number of relationships with niche lenders that remain active. Whole-loan providers are described as comfortable funding hotels (alongside PBSA, BTR and industrial) provided exit yields and demand are proven. [a][b]
- **Firm-level framing (from homepage / about-us)** — Hotels are listed among the firm's commercial sectors (Retail, Office, Logistics, Care Homes, Student Accommodation, Hotels). The firm arranges debt across the UK, US, Western Europe and the Middle East through a network of over 800 lenders, and has focused on loans between £500K and £20m since 2019. [a][b][seed]

**Phrases verbatim (anglais)**

> [b] (search tool summary of /hotel-finance/) 'The hotel finance page describes it as commercial lending secured against a hotel or guest house.'
>
> [b] (search tool summary of /hotel-finance/) 'Repayment depends on trading profit rather than tenant rent, and the page says lenders often determine the maximum loan amount based on a multiple of your adjusted net profit (EBITDA).'
>
> [b] (search tool summary of /hotel-finance/) 'The same page puts typical hotel LTVs at between 60% and 70%.'
>
> [b] (listing title for https://www.silveroakcapital.co.uk/hotel-finance/) 'Hotel Finance UK'
>
> [a] (from /faq/) 'lenders generally want prior hotel experience. A first-time buyer can still qualify if the application leans on an experienced general manager or management company.'
>
> [a] (from /faq/) 'For a trading hotel, lenders typically review the last two to three years of accounts.'
>
> [a] (from /faq/) 'For a closed hotel or a changed business model, projections can be used, but the LTV is likely lower (around 50–60%) and the rate higher.'
>
> [a] (from /faq/) 'Lenders usually require at least 50-60 years remaining on the lease after the mortgage term ends for leasehold hotels.'
>
> [b] (from /faq/) 'for a hotel currently trading, lenders will look at the last 2-3 years of accounts. For a closed hotel or a changed business model, projections may be used, but the LTV will likely be lower (around 50-60%).'
>
> [b] (from /faq/) 'Lenders typically want a long remaining lease. Lenders usually require at least 50-60 years remaining on the lease after the mortgage term ends.'
>
> [a] (from /) 'The firm lists Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels among its commercial mortgage coverage.'
>
> [b] (from /) 'arranges debt on a wide range of real estate and luxury assets transactions across the UK, US, Western Europe and the Middle East through our network of over 800 lenders'
>
> [b] (from /whole-loans/) 'whole loan providers are comfortable funding student accommodation (PBSA), hotels, Build-to-Rent (BTR), and industrial schemes, provided the exit yields and demand are proven.'
>
> [a] (from /case-studies/bridging-villa-cap-ferrat/) 'A bridging loan of €5 million at 62.5% LTV, on a Côte d'Azur villa planned for conversion into a boutique hotel, was arranged.'
>
> [a] (from /case-studies/bridging-villa-cap-ferrat/) 'many lenders have pulled out of the hotel lending market since the pandemic, and it used niche lenders to structure the deal.'
>
> [b] (from /case-studies/bridging-villa-cap-ferrat/) 'many lenders have pulled out of the hotel lending market since the pandemic, and that it has a number of relationships with these niche lenders.'
>
> [a] (from /about-us/) 'from 2019 to the present day, Silver Oak Capital has focused on providing advice for loans between £500K to £20m.'
>
> [seed] (/faq/ first-pass snippet) 'whole-loan providers often sector-agnostic: PBSA, hotels, BTR, industrial'
>
> [seed] (home) sectors listed: 'retail, office, logistics, care homes, student accommodation, hotels'

**Produits et services cités**

- Hotel finance / hotel mortgages (commercial lending secured against a hotel or guest house) [b]
- Commercial mortgages covering Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels [a][seed]
- Bridging loans for hotel conversion projects (Cap Ferrat villa to boutique hotel case study) [a][b]
- Whole loans for hotel schemes (via /whole-loans/) [b][seed]
- Debt advisory across UK, US, Western Europe and the Middle East [b]

**Cas d'usage**

- Purchase or refinance of a trading hotel or guest house, sized on trading profit (EBITDA multiple) [b]
- Financing a closed hotel or a hotel with a changed business model, on projections, at lower LTV and higher rate [a][b]
- First-time hotel buyer relying on an experienced general manager or management company [a]
- Leasehold hotel finance where sufficient lease term remains [a][b]
- Conversion of a residential property into a boutique hotel via bridging loan (€5m, 62.5% LTV, Côte d'Azur) [a]

**Conditions, montants, délais, frais**

- LTV: typical hotel LTVs between 60% and 70% (/hotel-finance/) [b]
- LTV: around 50-60% when lending on projections for a closed hotel or changed business model (/faq/) [a][b]
- Rate: higher when lending on projections rather than trading accounts (/faq/); no numeric rates revealed [a]
- Sizing: maximum loan often determined as a multiple of adjusted net profit (EBITDA) (/hotel-finance/) [b]
- Security: loan secured against the hotel or guest house itself (/hotel-finance/) [b]
- Trading history: last two to three years of accounts for a trading hotel (/faq/) [a][b]
- Leasehold: at least 50-60 years remaining on the lease after the mortgage term ends (/faq/) [a][b]
- Firm loan range: £500K to £20m (/about-us/) [a][seed]
- Case study data point: €5 million bridging loan at 62.5% LTV for a boutique hotel conversion [a]
- Fees, durations/terms, timescales: NOT revealed for this page by any search

**Critères d'éligibilité**

- Prior hotel experience generally wanted by lenders [a]
- First-time buyers can qualify if backed by an experienced general manager or management company [a]
- Trading hotels: 2-3 years of accounts reviewed [a][b]
- Closed hotels / changed business model: projections accepted at lower LTV (around 50-60%) and higher rate [a][b]
- Leasehold hotels: at least 50-60 years of lease remaining after the mortgage term ends [a][b]

**Types de prêteurs**

- Niche lenders still active in hotel lending after many pulled out post-pandemic (firm states it has a number of relationships with them) [a][b]
- Whole-loan providers comfortable with hotels, PBSA, BTR and industrial where exit yields and demand are proven [b][seed]
- Firm-wide network described as over 800 lenders (homepage) [b][seed]; no individual lender names revealed [b]

**Étapes du processus**

- No process steps for the hotel-finance page were revealed by any search. (Seed, other pages: firm typically narrows lenders to as many as 3 or 4 potential partners per deal; commission from lenders disclosed during the process.) [seed]

**Géographie**

- UK (page title 'Hotel Finance UK') [b]
- UK, US, Western Europe and the Middle East (homepage debt-arranging footprint) [b]
- Côte d'Azur / Cap Ferrat, France (boutique hotel conversion case study) [a]

**Appels à l'action**

- No calls to action from the hotel-finance page were revealed. [seed] Firm-wide contact routes: enquiry form, direct email enquiry@silveroakcapital.co.uk, WhatsApp, phone +44 207 459 4440; office 91 Wimpole Street, London W1G 0EE.

**Questions fréquentes**

- **Do I need hotel experience to get hotel finance? (/faq/)** Lenders generally want prior hotel experience. A first-time buyer can still qualify if the application leans on an experienced general manager or management company. [a]
- **What trading history do lenders want for a hotel? (/faq/)** For a trading hotel, lenders typically review the last two to three years of accounts. For a closed hotel or a changed business model, projections can be used, but the LTV is likely lower (around 50-60%) and the rate higher. [a][b]
- **Can I finance a leasehold hotel? (/faq/)** Lenders typically want a long remaining lease; they usually require at least 50-60 years remaining on the lease after the mortgage term ends. [a][b]
- **How is a hotel loan sized? (/hotel-finance/)** Repayment depends on trading profit rather than tenant rent, and lenders often determine the maximum loan amount based on a multiple of adjusted net profit (EBITDA). Typical hotel LTVs are between 60% and 70%. [b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Typical hotel LTVs between 60% and 70% (/hotel-finance/) [b]
- (number) LTV around 50-60% for closed hotels / changed business model financed on projections (/faq/) [a][b]
- (number) At least 50-60 years remaining lease after mortgage term for leasehold hotels (/faq/) [a][b]
- (number) Last 2-3 years of accounts reviewed for trading hotels (/faq/) [a][b]
- (number) Network of over 800 lenders (homepage) [b][seed]
- (number) Loans between £500K to £20m since 2019 (/about-us/) [a][seed]
- (case-study) €5 million bridging loan at 62.5% LTV on a Côte d'Azur villa to be converted into a boutique hotel (/case-studies/bridging-villa-cap-ferrat/) [a]
- (market-statement) Many lenders have pulled out of the hotel lending market since the pandemic; the firm has a number of relationships with the remaining niche lenders (/case-studies/bridging-villa-cap-ferrat/) [a][b]
- (coverage) Hotels listed among commercial sectors covered alongside Retail, Office, Logistics, Care Homes, Student Accommodation (homepage) [a][seed]
- (coverage) Whole-loan providers comfortable funding hotels, PBSA, BTR and industrial provided exit yields and demand are proven (/whole-loans/) [b]
- (absence) No testimonials, awards, credentials, fees, rates or timescales specific to the hotel-finance page were revealed by any search

_Notes d'extraction : Search (a) with the raw URL did not return the page; the tool said it searched the company name instead and returned FAQ, homepage, contact, about-us, bridging, commercial-mortgages, Cap Ferrat case study and two third-party directories. Search (b) 'site:silveroakcapital.co.uk hotel finance lenders' was the only one to surface /hotel-finance/ (listing title 'Hotel Finance UK') and gave the three …_

#### Residential Mortgages UK

URL : <https://www.silveroakcapital.co.uk/prime-residential-mortgages/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Page harvested via 3 WebSearch calls only (direct fetch blocked). SERP title of the URL is "Residential Mortgages UK" in both [a] and [b]. What the search summaries state about this page: Silver Oak Capital says it has found/arranged mortgages for prime residential properties of GBP 1m and above since 2019; its knowledge of the Private Banking industry pairs clients with a suitable banker; the page lists fixed and variable products and a typical broker fee of 1.00%; it gives an indicative example of a GBP 7 million, five-year, interest-only loan; and it lists deals such as the Notting Hill Large Residential Mortgage and a buy-to-let mortgage with a second-charge bridging loan on a Surrey property. Firm-wide context surfaced alongside: network of over 800 lenders (older profile: 300+ in 100 countries), transactions generally above GBP 500,000, Spear's profile of founder Jimmy Baillie (debt advisory, est. 2019, UHNW secured loans GBP 2m-20m), independent whole-of-market advice, links with offshore banks for foreign investors. Contradiction: this page says GBP 1m+ while /types-of-borrowing/ says GBP 5m and above for prime residential. Not revealed: H1, meta description, LTV, rates, timescales, security wording, lender names, FAQ, CTAs of this page.

**Sections repérées**

- **Overview (heading inferred, not revealed)** — Silver Oak Capital arranges mortgages for prime residential properties of GBP 1m and above, and states it has done so since 2019. [a][b]
- **Private banking relationships (heading inferred)** — The firm's knowledge of the Private Banking industry is used to pair the client with a suitable banker. [a] Sibling page /types-of-borrowing/ adds that private bank lending policies vary by branch. [b][seed]
- **Products and fees (heading inferred)** — The page lists fixed and variable products and states a typical broker fee of 1.00%. [b] The seed's older /types-of-borrowing/ page also quotes 1.00% for prime residential. [seed]
- **Indicative example (heading inferred)** — An indicative example of a GBP 7 million, five-year, interest-only loan is given on the page. [b] Figures for rate, LTV or total cost of that example were not surfaced.
- **Related deals / case studies (heading inferred)** — The page lists deals such as the Notting Hill Large Residential Mortgage (a private bank case for a client with oil and gas income [b]) and a buy-to-let mortgage with a second-charge bridging loan on a Surrey property. [a] A separate case study describes a GBP 1.46 million, 5-year interest-only refinance of a Prime Central London property with a lender that accepted a non-standard loan purpose and combined household income. [a][b]

**Phrases verbatim (anglais)**

> [a] SERP title for the URL: "Residential Mortgages UK"
>
> [a] "The prime residential page describes finding a mortgage for a prime residential property (£1m+). The firm says it has found mortgages for prime residential properties (£1m+) since 2019."
>
> [a] "One snippet says the firm's knowledge of the Private Banking industry pairs clients with a suitable banker."
>
> [a] "The page lists deals such as a Notting Hill Large Residential Mortgage and a buy-to-let mortgage with a second-charge bridging loan on a Surrey property."
>
> [a] (homepage, not this page) "the firm handles Main home mortgages, Buy to Lets, Holiday Lets and HMO's on the residential side. It also notes that lending rates changing almost daily, so real-time rate access is a selling point."
>
> [a] (Estate Agent Today trades directory, not this page) "the firm is perfectly positioned to assist foreign investors seeking prime residential mortgages, through links with offshore banks."
>
> [a] (case study /case-studies/1-46-million-refinance-prime-central-london-property/) "a £1.46 million, 5-year interest-only facility on a Prime Central London property, arranged with a lender that accepted a non-standard loan purpose and combined household income."
>
> [b] SERP title for the URL: "Residential Mortgages UK"
>
> [b] "Silver Oak says it has arranged mortgages on prime residential properties of £1m and above since 2019. The page lists fixed and variable products and a typical broker fee of 1.00%. It also gives an indicative example of a £7 million, five-year, interest-only loan."
>
> [b] (/types-of-borrowing/, SERP title "Wealth Management") "This page describes prime residential mortgages as covering properties worth £5m and above, and it stresses that private bank lending policies vary by branch."
>
> [b] (/prime-london-mortgages/) "This page targets high-value London homes and describes lender selection, a lender-ready case summary, and negotiation and coordination with valuers and solicitors. It is aimed at high-net-worth buyers, entrepreneurs, and internationally mobile clients."
>
> [b] (case studies) "Silver Oak describes a £1.46 million, five-year interest-only refinance on a Prime Central London property, and a Notting Hill private bank case for a client with oil and gas income."
>
> [b] (homepage and /lenders/, SERP title "Property Finance Lenders UK") "The firm says it works with a network of over 800 lenders and generally focuses on transactions above £500,000."
>
> [b] "The £1m and £5m thresholds conflict across the site, so check with the firm which applies. The pages are also undated in terms of their most recent update, and the search tool only shows relative ages (roughly 127 to 1,610 days old)."
>
> [c] (Spear's adviser profile of Jimmy Baillie) "Founder Jimmy Baillie describes the firm as a debt advisory business. It was established in 2019 and specialises in advising UHNW clients on secured loans between £2 million and £20 million."
>
> [c] (Spear's) "Alongside prime residential and commercial mortgages, they also advise on raising debt for luxury assets" ; the summary adds "short-term bridging loans, and marine and aviation finance".
>
> [c] "One profile cites more than 800 lenders across the world, while an older profile cites more than 300 lenders in 100 different countries. A LinkedIn post repeats the 800-plus figure and describes the firm as offering independent, whole-of-market advice."
>
> [c] "Its deals cover the UK, Western Europe, Southern Africa and the Middle East."
>
> [c] "I found no lender names or specific prime mortgage products for Silver Oak Capital, so those would need the firm's own website or direct contact."
>
> [c] Irrelevant results discarded: Five Oaks Investment Corp. SEC filings; "Silver Oak Mortgage" (New Mexico lender, unrelated).
>
> [seed] loanSizeClaims: "£1m+" attributed to prime residential; "£5m and above" attributed to /types-of-borrowing/ prime residential.
>
> [seed] feesClaims: "1.00% UK commercial / 1.50% outside UK and 1.00% prime residential (/types-of-borrowing/, old page)".
>
> [seed] /types-of-borrowing/ snippet: "prime residential mortgages (£5m and above; policies vary by private bank branch)".
>
> [seed] homeResidentialLine: "Main home mortgages, Buy to Lets, Holiday Lets and HMO's".
>
> [seed] navigation places "Prime Residential Mortgages" under Services > Residential / Wealth, next to Prime London Mortgages, Private Bank Mortgages, Foreign National Mortgages, International Property Mortgages, Complex Offshore Structures, Buy-to-Let Mortgages, HMO Finance, Portfolio Mortgages, Probate Lending.

**Produits et services cités**

- Prime residential mortgages for properties of GBP 1m and above [a][b]
- Fixed-rate and variable-rate mortgage products [b]
- Interest-only large loans (example GBP 7m over five years) [b]
- Pairing clients with a suitable private banker [a]
- Large residential mortgages via private banks (Notting Hill case) [a][b]
- Buy-to-let mortgage combined with a second-charge bridging loan (Surrey deal listed on page) [a]
- Refinance of prime central London property, interest-only (case study) [a][b]
- Prime residential mortgages for foreign investors through links with offshore banks (directory listing) [a]
- Firm-wide: main home mortgages, buy to lets, holiday lets and HMOs (homepage) [a][seed]
- Firm-wide: commercial mortgages, luxury asset finance, short-term bridging, marine and aviation finance (Spear's) [c]

**Cas d'usage**

- Purchase of a prime residential property worth GBP 1m+ [a][b]
- Large residential mortgage in Notting Hill for a client with oil and gas income, via a private bank [a][b]
- Refinance of a Prime Central London property, GBP 1.46m, 5-year interest-only, non-standard loan purpose, combined household income [a][b]
- Buy-to-let purchase supported by a second-charge bridging loan on a Surrey property [a]
- Foreign investors seeking UK prime residential mortgages via offshore banks (directory) [a]
- High-net-worth buyers, entrepreneurs and internationally mobile clients buying high-value London homes (sibling page /prime-london-mortgages/) [b]

**Conditions, montants, délais, frais**

- Property value threshold on this page: GBP 1m and above [a][b]
- Contradicting threshold on /types-of-borrowing/: GBP 5m and above [b][seed]
- Typical broker fee: 1.00% [b] (seed: 1.00% prime residential on old /types-of-borrowing/ page) [seed]
- Indicative example: GBP 7 million, five-year term, interest-only [b]
- Rate types: fixed and variable products [b]
- Case study terms: GBP 1.46 million, 5-year, interest-only, Prime Central London [a][b]
- Firm-wide minimum: transactions generally above GBP 500,000 (/lenders/, homepage) [b][seed]
- Spear's profile: secured loans between GBP 2 million and GBP 20 million for UHNW clients [c]
- Not surfaced for this page: LTV, interest rates, arrangement timescales, security/charge wording, early repayment terms

**Critères d'éligibilité**

- Property of GBP 1m+ (this page) [a][b]
- High-net-worth / UHNW individuals (Spear's; sibling prime London page) [b][c]
- Foreign investors / non-UK buyers, via links with offshore banks (directory listing) [a]
- Clients with complex or non-standard income, e.g. oil and gas income (Notting Hill case) [b]
- Non-standard loan purpose and combined household income accepted by lender in the GBP 1.46m case [a]
- Private bank lending policies vary by branch (/types-of-borrowing/) [b][seed]
- No explicit criteria list (minimum income, assets under management, residency, age) was surfaced for this page

**Types de prêteurs**

- Private banks / private bankers (client paired with a suitable banker) [a][b]
- Offshore banks, for foreign investors (directory) [a]
- Whole-of-market network of over 800 lenders (homepage, /lenders/, LinkedIn); older Spear's profile cites 300+ lenders in 100 countries [b][c][seed]
- Lender accepting non-standard loan purpose and combined household income (case study) [a]
- No lender names revealed [c]

**Étapes du processus**

- Pair the client with a suitable private banker using knowledge of the Private Banking industry (this page) [a]
- Sibling page /prime-london-mortgages/: lender selection, preparation of a lender-ready case summary, negotiation, coordination with valuers and solicitors [b]
- No step-by-step process was surfaced for this page itself

**Géographie**

- United Kingdom (SERP title "Residential Mortgages UK") [a][b]
- London: Prime Central London, Notting Hill, Kensington (case studies) [a][b]
- Surrey (buy-to-let with second-charge bridging deal) [a]
- Foreign investors / international clients via offshore banks [a]
- Firm-wide deal coverage: UK, Western Europe, Southern Africa, Middle East (Spear's) [c]

**Appels à l'action**

- No call-to-action wording from this page was surfaced by the searches
- [seed] firm-wide contact routes: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (track-record) Has found/arranged mortgages for prime residential properties of GBP 1m+ since 2019 [a][b]
- (fee) Typical broker fee of 1.00% [b]
- (worked-example) Indicative example: GBP 7 million, five-year, interest-only loan [b]
- (product) Lists fixed and variable products [b]
- (promise) Knowledge of the Private Banking industry pairs clients with a suitable banker [a]
- (number-contradiction) Network of over 800 lenders (homepage, /lenders/, Spear's, LinkedIn) vs 300+ lenders in 100 countries (older Spear's profile) [b][c]
- (number) Generally focuses on transactions above GBP 500,000 (/lenders/) [b]
- (contradiction) Prime residential threshold: GBP 1m+ on this page vs GBP 5m and above on /types-of-borrowing/ [b][seed]
- (credential) Debt advisory business established in 2019, advising UHNW clients on secured loans GBP 2m-20m (Spear's) [c]; seed notes one page says 2018 [seed]
- (positioning) Independent, whole-of-market advice (LinkedIn) [c]
- (promise) Perfectly positioned to assist foreign investors seeking prime residential mortgages, through links with offshore banks (Estate Agent Today directory) [a]
- (selling-point) Lending rates changing almost daily; real-time rate access as selling point (homepage) [a]
- (case-study) Case study: GBP 1.46m, 5-year interest-only refinance, Prime Central London, lender accepted non-standard loan purpose and combined household income [a][b]
- (case-study) Case study: Notting Hill Large Residential Mortgage, private bank, client with oil and gas income [a][b]

_Notes d'extraction : Searches: (a) extended, exact URL; (b) extended, site:silveroakcapital.co.uk prime residential mortgages; (c) standard, "Silver Oak Capital" prime residential mortgages lenders. (c) returned mostly irrelevant Five Oaks/SEC and Silver Oak Mortgage (New Mexico) results, ignored. Verbatim entries quote the search tool's summary wording, not necessarily the page's literal sentences, except SERP title…_

#### Prime London Mortgages

URL : <https://www.silveroakcapital.co.uk/prime-london-mortgages/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Prime London Mortgages (search-result title for the page in [a] and [b]; not confirmed as the on-page H1)  
**Meta description :** Not revealed by any of the three searches.

**Résumé.** The page positions prime London mortgages as residential loans for high-value property in London's prime and super-prime markets, aimed at HNW/UHNW buyers, business owners with dividend-led income, international families, entrepreneurs, investors and globally mobile executives, including buyers who want interest-only terms to preserve liquidity. It stresses that such deals involve complex property characteristics (lease terms, building type, valuation nuance) and sophisticated borrower profiles. Silver Oak Capital's role is described in three pillars: lender selection for prime cases across specialist high-value lenders and private banks, preparing a lender-ready narrative/case summary, and negotiation (pricing and fees) plus project management with valuers and solicitors. The page has an FAQ section (one visible question: whether these mortgages take longer than standard ones), but its answers, rates, fees, LTVs and calls to action were not visible in snippets. Related site pages seen: /prime-residential-mortgages/ (indicative example: GBP 7m, 1.25% + Libor, 65% LTV, 5 years renewable, interest only, 20% AUM pledge, 0.50% lender fee), case studies (Notting Hill GBP 6.35m IO refinance at 60% LTV via private bank; Mayfair GBP 7.5m IO at 75% LTV on a GBP 10m home; GBP 1.46m PCL refinance) and a bridging-for-PCL-purchases page not in the seed.

**Sections repérées**

- **What prime London mortgages are (overview)** — [a] 'Prime London mortgages are residential loans for high-value property in London's prime and super-prime markets.' [a] 'These transactions often involve complex property characteristics (lease terms, building type, valuation nuance) and sophisticated borrower profiles (entrepreneurs, investors, globally mobile executives).'
- **Who these mortgages are for (typical borrowers)** — [a] target borrowers listed: high-net-worth buyers, business owners, international families, and 'Buyers seeking interest-only to preserve liquidity.' [b] typical borrowers: HNW and UHNW buyers, business owners with dividend-led income, international families.
- **How Silver Oak Capital helps (services)** — [a] 'Lender selection for prime cases, preparing a lender-ready narrative, and negotiation and project management.' [a] the firm sources options from specialist high-value lenders and private banks, prepares a lender-ready case summary, and negotiates pricing and fees. [b] sources lenders across specialist high-value lenders and private banks, prepares a lender-ready case summary, and handles negotiation and coordination with valuers and solicitors.
- **FAQ (section exists, content mostly not visible)** — [a] the search summary states the page has an FAQ section 'including its question about whether these mortgages take longer than standard ones'; the answer, and the page's rates and fees, 'weren't visible'.
- **Related content on other silveroakcapital.co.uk pages (not this page)** — [a] residential page (likely /prime-residential-mortgages/): 'Representative example (indicative lending terms) Loan £7 million GBP Rate 1.25% + Libor 65% Loan to Value Term 5 Years (Renewable) Interest Only 20% Assets Under Management pledge Lender Fees 0.50%.' [b] case studies: Notting Hill GBP 6.35m interest-only refinance at 60% LTV for an overseas client, placed with a private bank; Mayfair GBP 7.5m interest-only mortgage at 75% LTV on a GBP 10m home for refinance and equity release, placed with 'a London-based lender with a strong appetite for high-value Central London residential prope…

**Phrases verbatim (anglais)**

> [a] Prime London mortgages are residential loans for high-value property in London's prime and super-prime markets.
>
> [a] These transactions often involve complex property characteristics (lease terms, building type, valuation nuance) and sophisticated borrower profiles (entrepreneurs, investors, globally mobile executives).
>
> [a] Buyers seeking interest-only to preserve liquidity.
>
> [a] Lender selection for prime cases, preparing a lender-ready narrative, and negotiation and project management.
>
> [a] (search summary attributes this to 'other pages on the site', probably /prime-residential-mortgages/, not this page) Representative example (indicative lending terms) Loan £7 million GBP Rate 1.25% + Libor 65% Loan to Value Term 5 Years (Renewable) Interest Only 20% Assets Under Management pledge Lender Fees 0.50%.
>
> [b] (search summary, page positioning) residential loans for high-value property in London's prime and super-prime markets
>
> [b] (search summary, borrowers) HNW and UHNW buyers, business owners with dividend-led income, and international families
>
> [b] (search summary, services) sources lenders across specialist high-value lenders and private banks, prepares a lender-ready case summary, and handles negotiation and coordination with valuers and solicitors
>
> [b] (case study /case-studies/notting-hill-large-residential-mortgage/, reported as the firm's words) plenty of experience raising private bank mortgages on Prime London residential properties
>
> [b] (case study /case-studies/mayfair-self-employed-equity-release/) a London-based lender with a strong appetite for high-value Central London residential property
>
> [b] (case study /case-studies/1-46-million-refinance-prime-central-london-property/) The loan purpose fell outside typical lending criteria.
>
> [b] (/bridging-loans-for-prime-central-london-purchases/, search summary paraphrase) traditional mortgages are not well suited to the PCL market, given that they take several months to arrange
>
> [c] (Spear's adviser profile at spears500.com/adviser/.../jimmy-baillie; the snippet does not name the firm) alongside prime residential and commercial mortgages, they also advise on raising debt for luxury assets, short-term bridging loans, and marine and aviation finance
>
> [seed] (/types-of-borrowing/, older page) prime residential mortgages (£5m and above; policies vary by private bank branch)
>
> [seed] (firm-level) 1.00% prime residential fee (/types-of-borrowing/, old page)

**Produits et services cités**

- Prime London mortgages: residential loans for high-value property in London's prime and super-prime markets [a][b]
- Lender selection for prime cases, sourcing options from specialist high-value lenders and private banks [a][b]
- Preparing a lender-ready narrative / lender-ready case summary [a][b]
- Negotiation of pricing and fees [a]
- Project management of the transaction, including coordination with valuers and solicitors [a][b]
- Interest-only structures for buyers wanting to preserve liquidity [a]

**Cas d'usage**

- Purchase of high-value property in London's prime and super-prime markets [a]
- Interest-only borrowing to preserve liquidity [a]
- Borrowers with complex or dividend-led income (entrepreneurs, business owners, investors, globally mobile executives) [a][b]
- International families / overseas clients buying or refinancing in London [a][b]
- Properties with complex characteristics: lease terms, building type, valuation nuance [a]
- (case study, other page) Refinance of an overseas client's prime London home via a private bank, GBP 6.35m interest-only at 60% LTV [b]
- (case study, other page) Refinance and equity release on a GBP 10m Mayfair home, GBP 7.5m interest-only at 75% LTV [b]
- (case study, other page) Refinance of an unencumbered Prime Central London property with family loans and an overseas guarantor, GBP 1.46m [b]

**Conditions, montants, délais, frais**

- Interest-only available (page lists buyers seeking interest-only to preserve liquidity) [a]
- Rates and fees for this page: NOT visible in any snippet [a]
- (other page, indicative example) Loan GBP 7 million; rate 1.25% + Libor; 65% LTV; term 5 years (renewable); interest only; 20% assets-under-management pledge; lender fees 0.50% [a]
- (case study) GBP 6.35m interest-only refinance, 60% LTV, private bank, overseas client [b]
- (case study) GBP 7.5m interest-only mortgage, 75% LTV, on GBP 10m Mayfair property, refinance + equity release [b]
- (case study) GBP 1.46m refinance of unencumbered PCL property [b]
- (related bridging page) traditional mortgages take several months to arrange; bridging is faster but carries higher rates and exit / early repayment fees [b]
- [seed] firm-level: prime residential loans cited as £1m+ and, on the old /types-of-borrowing/ page, £5m and above; 1.00% prime residential broker fee on the old page

**Critères d'éligibilité**

- High-net-worth and ultra-high-net-worth buyers [a][b]
- Business owners, including those with dividend-led income [a][b]
- International families [a][b]
- Entrepreneurs, investors, globally mobile executives (sophisticated borrower profiles) [a]
- Buyers seeking interest-only to preserve liquidity [a]
- Properties with complex characteristics (lease terms, building type, valuation nuance) are within scope [a]
- No minimum loan size, minimum income, residency or LTV criteria for this page were visible in the snippets

**Types de prêteurs**

- Specialist high-value lenders [a][b]
- Private banks [a][b]
- (case study) a London-based lender with a strong appetite for high-value Central London residential property [b]
- (case study) private bank for an overseas client's prime London refinance [b]

**Étapes du processus**

- 1. Lender selection for prime cases: source options across specialist high-value lenders and private banks [a][b]
- 2. Prepare a lender-ready narrative / case summary [a][b]
- 3. Negotiate pricing and fees [a]
- 4. Project-manage the transaction, coordinating with valuers and solicitors [a][b]

**Géographie**

- London prime and super-prime markets [a][b]
- Prime Central London (PCL) [b]
- Notting Hill, Mayfair (case studies) [b]
- International families / overseas clients / overseas guarantor [a][b]
- [seed] office at 91 Wimpole Street, London W1G 0EE

**Appels à l'action**

- No call-to-action wording for this page was visible in any of the three searches
- [seed] firm-wide contact routes: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **Do prime London mortgages take longer than standard mortgages? (question paraphrased from the search summary, which says the FAQ includes 'its question about whether these mortgages take longer than …** Not visible in snippets.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning [a][b]) Prime London mortgages are residential loans for high-value property in London's prime and super-prime markets
- (lender access [a][b]) Access to specialist high-value lenders and private banks
- (service promise [a][b]) Firm prepares a lender-ready narrative / case summary and negotiates pricing and fees
- (experience / credential (case…) plenty of experience raising private bank mortgages on Prime London residential properties
- (case-study figure (Notting Hi…) GBP 6.35m interest-only refinance at 60% LTV for an overseas client, placed with a private bank
- (case-study figure (Mayfair, o…) GBP 7.5m interest-only mortgage at 75% LTV on a GBP 10m Mayfair home, refinance and equity release
- (case-study figure (other page…) GBP 1.46m refinance of an unencumbered Prime Central London property, complicated by family loans and an overseas guarantor
- (indicative terms (attributed …) Representative example: GBP 7m, 1.25% + Libor, 65% LTV, 5 years renewable, interest only, 20% AUM pledge, lender fees 0.50%
- (third-party recognition; firm…) Spear's adviser profile (Jimmy Baillie) describes a London debt advisory firm advising on prime residential and commercial mortgages, luxury-asset debt, bridging, marine and aviation finance
- (third-party listing; content …) Firm listed in Letting Agent Today trades directory and on Nextdoor (Debt Advisory, London)
- (firm-level [seed], not seen o…) Network of 800+ lenders (home/FAQ); prime residential loans £1m+ / £5m and above

_Notes d'extraction : Seed had no snippetsFromFirstPass entry for /prime-london-mortgages/. Search [a] (extended, exact URL) and [b] (extended, site: query) both surfaced the page; [c] (standard, firm name + product + 'lenders') returned only generic prime-London-mortgage pages from other brokers/lenders (Enness, Coutts, Knight Frank, etc.), which were ignored as unrelated. The 'Representative example' (GBP 7m, 1.25% …_

#### Private Bank Mortgages UK

URL : <https://www.silveroakcapital.co.uk/private-bank-mortgages/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** NOT REVEALED by search results; only the search-result title 'Private Bank Mortgages UK' [b] is known  
**Meta description :** NOT REVEALED by search results; closest candidate (search tool summary of 'the main page' [b]): 'a private bank mortgage is bespoke form of real estate finance offered by private banks to their high net worth clients'

**Résumé.** Silver Oak Capital's /private-bank-mortgages/ page (search-result title 'Private Bank Mortgages UK') presents a private bank mortgage as a bespoke form of real estate finance offered by private banks to their high net worth clients, where the existing client-bank relationship lets lenders go far beyond standing lending criteria; it is positioned for clients with complex finances, large borrowing needs or unusual ownership structures. Supporting pages (FAQ, /types-of-borrowing/, /prime-london-mortgages/) add that private banks have very flexible underwriting criteria and can make very large loans with no fixed cap, that such mortgages suit any HNWI, international or local, can be tailored regardless of loan structure, can be interest-only or capitalising, and that lending policy varies by the bank branch approving the loan. The page body itself was only partially surfaced (3 summarized sentences via query b); no rates, LTVs, fees, minimum sizes, process steps or testimonials specific to this page were revealed. Silver Oak is a broker, not a bank.

**Sections repérées**

- **What is a private bank mortgage (target page, as summarized by search [b])** — A private bank mortgage is described as a bespoke form of real estate finance offered by private banks to their high net worth clients. The existing relationship between the client and the bank lets lenders go far beyond standing lending criteria.
- **Who it suits (target page, as summarized by search [b])** — These loans fit clients with complex finances, large borrowing needs, or unusual ownership structures.
- **Related FAQ content on private bank mortgages (/faq/ [a][b])** — Private banks have very flexible underwriting criteria and can therefore make very large loans; there is no fixed cap on borrowing. Private bank mortgages are suitable for any HNWI, international or local. They can be tailored to suit the needs of the borrower regardless of the structure of the loan, and can be interest-only or capitalising.
- **Related content from other Silver Oak pages ([a][b][seed])** — /types-of-borrowing/: most private banks have different lending policies, dependent on the branch where the loan is approved; prime residential mortgages from £5m and above (seed). /prime-london-mortgages/: Silver Oak sources options from specialist high-value residential lenders and private banks. LinkedIn: the firm does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions.
- **Content NOT surfaced for this page** — No section headings, H1, meta description, rates, LTV figures, minimum/maximum loan sizes, fees, timescales, process steps, named private banks, testimonials, awards or calls to action specific to /private-bank-mortgages/ appeared in any of the 3 search results.

**Phrases verbatim (anglais)**

> [b] Private Bank Mortgages UK (search-result title for https://www.silveroakcapital.co.uk/private-bank-mortgages/)
>
> [b] 'a private bank mortgage is bespoke form of real estate finance offered by private banks to their high net worth clients' (tool summary attributing this to 'the main page', i.e. the target page)
>
> [b] 'the existing relationship lets lenders go far beyond standing lending criteria' (target page, per tool summary)
>
> [b] 'these loans fit clients with complex finances, large borrowing needs, or unusual ownership structures' (target page, per tool summary)
>
> [b] 'there is no fixed cap on borrowing' and 'private banks can lend very large sums' (/faq/, per tool summary)
>
> [b] 'these mortgages can be interest-only or capitalising' (/faq/, per tool summary)
>
> [b] 'sources options from specialist high-value residential lenders and private banks' (/prime-london-mortgages/, per tool summary)
>
> [b] 'a €5 million bridging loan on a villa near Monaco' (case study /case-studies/bridging-villa-cap-ferrat/, per tool summary)
>
> [b] 'a $40m private jet finance deal' (case study /case-studies/g650/, per tool summary)
>
> [a] 'private banks have very flexible underwriting criteria and can therefore make very large loans' (/faq/, per tool summary)
>
> [a] 'private bank mortgages are suitable for any HNWI, international or local' (/faq/, per tool summary)
>
> [a] 'private bank mortgages can be tailored to suit the needs of the borrower, regardless of the structure of the loan' (/faq/, per tool summary)
>
> [a] 'most private banks have different lending policies – dependent on the branch where your loan is approved' (/types-of-borrowing/ 'Wealth Management' page, per tool summary)
>
> [a] 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions' (LinkedIn company profile, per tool summary)
>
> [a] 'specializes in large loans of £2-£20m' (Letting Agent Today trades-directory listing, flagged as about 1,200 days old)
>
> [c] 'extensive network of more than 300 lenders in 100 different countries' (Spear's 500 adviser profile of Jimmy Baillie)
>
> [c] 'for transactions in the UK, Western Europe, Southern Africa and the Middle East' (Spear's 500 adviser profile)
>
> [c] 'advises on raising debt for luxury assets, short-term bridging loans, and marine and aviation finance, alongside prime residential and commercial mortgages' (Spear's 500 adviser profile)
>
> [c] 'independent, whole-of-market advice across bridging, development, commercial and buy-to-let mortgages' (LinkedIn profile apparently of a team member - result titled 'joe berk' - firm not named in snippet)
>
> [c] 'private banks typically require borrowers to keep assets under management (AUM) with the bank to offer the most competitive rates' (Enness Global, a COMPETITOR broker - general industry context, NOT Silver Oak content)
>
> [seed] 'prime residential mortgages (£5m and above; policies vary by private bank branch)' (/types-of-borrowing/ first-pass snippet)
>
> [seed] 'Private Bank Mortgages' is listed in site navigation under Services > Residential / Wealth, alongside Prime Residential Mortgages, Prime London Mortgages, Foreign National Mortgages, International Property Mortgages, Complex Offshore Structures

**Produits et services cités**

- Private bank mortgages (bespoke real estate finance from private banks for HNW clients) - brokered/arranged by Silver Oak Capital [b]
- Prime London / high-value residential mortgages sourced from specialist high-value residential lenders and private banks [b]
- Prime residential and commercial mortgages [c]
- Short-term bridging loans [c]
- Marine and aviation finance / debt for luxury assets [c]
- Development, commercial and buy-to-let mortgage advice (whole-of-market) [c]

**Cas d'usage**

- Clients with complex finances [b]
- Clients with large borrowing needs [b]
- Clients with unusual ownership structures [b]
- Any HNWI, international or local [a]
- Larger, more complex real estate transactions [a]
- Very large loans beyond standard lending criteria [a][b]

**Conditions, montants, délais, frais**

- Loan size: 'no fixed cap on borrowing'; private banks 'can lend very large sums' [b] / 'make very large loans' [a] (FAQ, not page-specific)
- Repayment type: 'interest-only or capitalising' [b] (FAQ)
- Structure: 'tailored to suit the needs of the borrower, regardless of the structure of the loan' [a] (FAQ)
- Firm-level loan size context: 'large loans of £2-£20m' [a] (dated third-party listing); prime residential '£5m and above' [seed] (/types-of-borrowing/)
- Rates, LTV, fees, durations, timescales, security: NOT revealed for this page

**Critères d'éligibilité**

- High net worth clients of private banks [b]
- Any HNWI, international or local [a]
- Existing relationship with the private bank is what lets lenders go beyond standing criteria [b]
- Lending policy varies by the private bank branch approving the loan [a][seed]
- Industry context only (competitor Enness Global, not Silver Oak): private banks typically require assets under management with the bank for the most competitive rates [c]

**Types de prêteurs**

- Private banks [a][b]
- Specialist high-value residential lenders [b]
- Firm-wide: network of 'more than 300 lenders in 100 different countries' [c] (Spear's); seed notes other claims of 500+/700+/800+ lenders on other pages - contradiction across sources

**Géographie**

- UK (page title 'Private Bank Mortgages UK') [b]
- International or local HNWI clients [a]
- UK, Western Europe, Southern Africa and the Middle East (firm-level, Spear's) [c]
- Lenders in 100 different countries (firm-level, Spear's) [c]
- Monaco (villa bridging case study) [b]

**Questions fréquentes**

- **How much can a private bank lend? (FAQ content as summarized by search [a][b]; exact question wording not revealed)** Private banks have very flexible underwriting criteria and can therefore make very large loans; there is no fixed cap on borrowing.
- **Who are private bank mortgages suitable for? (exact wording not revealed)** Suitable for any HNWI, international or local.
- **Can a private bank mortgage be tailored / what repayment types exist? (exact wording not revealed)** Can be tailored to suit the needs of the borrower regardless of the structure of the loan; can be interest-only or capitalising.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (product-definition) A private bank mortgage is a bespoke form of real estate finance offered by private banks to their high net worth clients [b]
- (promise/benefit) The existing relationship lets lenders go far beyond standing lending criteria [b]
- (promise/benefit (FAQ)) Private banks have very flexible underwriting criteria and can make very large loans; no fixed cap on borrowing [a][b]
- (eligibility (FAQ)) Private bank mortgages suit any HNWI, international or local [a]
- (terms (FAQ)) Mortgages can be interest-only or capitalising [b]
- (capability (/prime-london-mor…) Silver Oak sources options from specialist high-value residential lenders and private banks [b]
- (number (Spear's; contradicts …) Network of more than 300 lenders in 100 different countries [c]
- (number (dated third-party lis…) Specializes in large loans of £2-£20m [a]
- (positioning (LinkedIn)) Not a high street mortgage broker; bespoke solution for larger, more complex real estate transactions [a]
- (case study / track record) Case study: €5 million bridging loan on a villa near Monaco [b]
- (case study / track record) Case study: $40m private jet finance deal [b]
- (credential/recognition) Spear's 500 adviser profile for Jimmy Baillie exists [c]
- (absence) Testimonials, awards or credentials specific to the target page: none revealed

_Notes d'extraction : Seed had no snippetsFromFirstPass entry for /private-bank-mortgages/; only the navigation listing under Residential / Wealth applies. Query (a) did not return the target URL at all; query (b) returned it as result #1 titled 'Private Bank Mortgages UK' and the tool's summary attributed three sentences to 'the main page'. 'Verbatim' items are verbatim from the WebSearch tool's summaries, which may …_

#### Foreign National Mortgages UK

URL : <https://www.silveroakcapital.co.uk/foreign-national-mortgages/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** Foreign National Mortgages UK (search-result title; whether this is the on-page H1 or only the <title> is not confirmed)  
**Meta description :** NOT REVEALED by any of the 3 searches.

**Résumé.** Marketing/service page of the London large-loan broker Silver Oak Capital for foreign national mortgages. According to the search summaries, the page defines a foreign national mortgage as a loan supporting non-UK citizens purchasing or refinancing UK property, describes typical features (overseas income, limited/thin UK credit history, enhanced AML/KYC compliance checks), names target groups (international executives relocating to the UK, UK expatriates returning from abroad), and explains the firm's approach: placing cases with lenders whose underwriting weighs economic factors such as bank statements and asset wealth rather than relying only on UK credit scoring, and documenting source of wealth and source of funds up front. No rates, LTVs, loan sizes, fees, deposits, timescales or accepted countries for this page were surfaced by the searches.

**Sections repérées**

- **What is a Foreign National Mortgage?** — [b] 'A Foreign National mortgage supports, for example, non-UK citizens purchasing or refinancing UK property.' [a] Described as a loan for non-UK citizens buying or refinancing UK property, with overseas income, limited UK credit history and enhanced compliance checks as common features.
- **Who it is for (heading not revealed; paraphrase of [a])** — [a] The page lists groups such as international executives relocating to the UK and UK expatriates returning from abroad.
- **Credit history / underwriting approach (heading not revealed; paraphrase of [a][b])** — [a] The firm says it places applicants with lenders whose underwriting places stronger emphasis on economic factors such as bank statements and asset wealth, rather than relying only on UK credit scoring. [b] Applicants typically face thin UK credit files, and the firm places cases with lenders whose underwriting leans on bank statements and asset wealth.
- **Compliance: AML / KYC (heading not revealed; paraphrase of [a][b])** — [a] Anti-money laundering and know-your-customer checks can be heavier for international clients. [b] AML and KYC checks are usually heavier for overseas clients, so the firm documents source of wealth and source of funds up front.

**Phrases verbatim (anglais)**

> [b] "What is a Foreign National Mortgage? A Foreign National mortgage supports, for example, non-UK citizens purchasing or refinancing UK property."
>
> [a] "The page describes a foreign national mortgage as a loan for non-UK citizens buying or refinancing UK property, with overseas income, limited UK credit history, and enhanced compliance checks as common features." (search-tool summary wording, not confirmed page text)
>
> [a] "It lists groups such as international executives relocating to the UK and UK expatriates returning from abroad." (search-tool summary wording)
>
> [a] "The firm says it places applicants with lenders whose underwriting places stronger emphasis on economic factors such as bank statements and asset wealth, rather than relying only on UK credit scoring." (search-tool summary wording)
>
> [a] "The page notes that anti-money laundering and know-your-customer checks can be heavier for international clients." (search-tool summary wording)
>
> [b] "Applicants typically face thin UK credit files, and the firm says it places cases with lenders whose underwriting leans on bank statements and asset wealth" (search-tool summary wording)
>
> [b] "Anti-money-laundering and know-your-customer checks are usually heavier for overseas clients, so the firm documents source of wealth and source of funds up front" (search-tool summary wording)
>
> [a] "Its prime residential page lists a typical broker fee for residential mortgages of 1.00%." (context from /prime-residential-mortgages/, not from the target page)
>
> [a] "The firm's own profile says it does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions." (context from a firm profile, not from the target page)
>
> [b] FAQ page: "approval is often possible for people living abroad, though non-resident lending can demand more paperwork and tighter loan-to-value limits" (context from /faq/, not from the target page)
>
> [b] FAQ page: "private bank mortgages can be tailored to a borrower's needs" (context from /faq/)
>
> [b] Western Europe page: the firm "regularly acts for clients from Africa, Asia and the Middle East buying property in Europe and the UK" (context from /western-europe/)
>
> [seed] /faq/: non-resident lending needs stronger documentation, more conservative LTV, path of funds (AML/KYC).
>
> [seed] /western-europe/: 'regularly act for clients from Africa, Asia and the Middle East who are purchasing properties in Europe and the UK; popular with investors from countries with volatile currencies, such as South Africa or Turkey; frequently arranges facilities for offshore trusts and overseas owners.'
>
> [seed] firm clients include 'expats', 'foreign nationals', 'offshore trusts'; other offices Monaco, Dubai, Cape Town.

**Produits et services cités**

- Foreign national mortgages for non-UK citizens purchasing UK property [a][b]
- Foreign national mortgages for non-UK citizens refinancing UK property [a][b]
- Placement with lenders that underwrite on bank statements and asset wealth rather than UK credit score alone [a][b]
- Up-front documentation of source of wealth and source of funds for AML/KYC [b]
- Related sibling services in the same navigation group [seed]: Prime Residential Mortgages, Prime London Mortgages, Private Bank Mortgages, International Property Mortgages, Complex Offshore Structures, Buy-to-Let Mortgages, HMO Finance, Portfolio Mortgages, Probate Lending

**Cas d'usage**

- Non-UK citizen purchasing UK property [a][b]
- Non-UK citizen refinancing UK property [a][b]
- International executives relocating to the UK [a]
- UK expatriates returning from abroad [a]
- Borrowers with overseas income [a]
- Borrowers with limited / thin UK credit history [a][b]
- Non-resident borrowers living abroad (per /faq/ context) [b][seed]

**Conditions, montants, délais, frais**

- Loan size: NOT REVEALED for this page. Firm-level context only [seed]: 'over £500,000' (home, /lenders/), '£500k to £20m' (/about-us/), '£1m+' (prime residential), '£5m and above' (/types-of-borrowing/ prime residential).
- LTV: NOT REVEALED for this page. /faq/ context [b][seed]: non-resident lending can demand 'tighter loan-to-value limits' / 'more conservative LTV'.
- Rates: NOT REVEALED.
- Duration / term: NOT REVEALED.
- Fees: NOT REVEALED for this page. Context [a]: prime residential page lists 'a typical broker fee for residential mortgages of 1.00%'; [seed] /types-of-borrowing/ old page: 1.00% prime residential.
- Timescales: NOT REVEALED.
- Security: UK property being purchased or refinanced (implied by definition) [a][b]; explicit security wording NOT REVEALED.
- Minimum deposit / accepted countries: NOT REVEALED ([a] explicitly says these 'would need to be checked directly on the site').

**Critères d'éligibilité**

- Non-UK citizens buying or refinancing UK property [a][b]
- Overseas income accepted (described as a common feature) [a]
- Limited / thin UK credit history accommodated via lenders that weigh bank statements and asset wealth [a][b]
- Must satisfy enhanced AML/KYC checks; source of wealth and source of funds documented up front [a][b]
- Non-residents living abroad: 'approval is often possible' but with more paperwork and tighter LTV (from /faq/, not the target page) [b]
- No stated minimum income, deposit, nationality list or visa status in the results.

**Types de prêteurs**

- Lenders whose underwriting places stronger emphasis on economic factors (bank statements, asset wealth) rather than UK credit scoring [a][b]
- Private banks (from /faq/ and sibling page 'Private Bank Mortgages', not stated on the target page in results) [b][seed]
- Lender network size: contradictory firm-level claims [a][seed] — 300+ (a directory listing, /property-development-finance/, SlideShare, Spear's), 500+ (LinkedIn), 700+ (/commercial-mortgage-broker/, /bridging-loans-uk/), 800+ (home, /faq/, Trustpilot, Property Week). Not stated for this page in res…

**Étapes du processus**

- NOT REVEALED as a numbered process on this page. Only implied steps: (1) document source of wealth and source of funds up front [b]; (2) place the case with lenders that underwrite on bank statements / asset wealth [a][b].

**Géographie**

- United Kingdom (property location) [a][b]
- Non-UK citizens / overseas borrowers generally; no specific nationality or country list revealed for this page [a]
- Context [b][seed]: clients from Africa, Asia and the Middle East buying in Europe and the UK (/western-europe/); firm offices London, Monaco, Dubai, Cape Town [seed]

**Appels à l'action**

- NOT REVEALED for this page. Firm-level [seed]: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp.

**Questions fréquentes**

- **What is a Foreign National Mortgage?** [b] 'A Foreign National mortgage supports, for example, non-UK citizens purchasing or refinancing UK property.' (This Q/A-style heading appears to be on the target page.)
- **Can someone living abroad get approved? (from /faq/, not the target page)** [b] 'approval is often possible for people living abroad, though non-resident lending can demand more paperwork and tighter loan-to-value limits'

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (definition) Foreign national mortgage supports non-UK citizens purchasing or refinancing UK property [a][b]
- (promise/approach) Firm places applicants with lenders whose underwriting emphasises bank statements and asset wealth rather than relying only on UK credit scoring [a][b]
- (promise/approach) Firm documents source of wealth and source of funds up front [b]
- (statement) AML/KYC checks can be heavier for international / overseas clients [a][b]
- (audience) Target groups include international executives relocating to the UK and UK expatriates returning from abroad [a]
- (number (other page)) Typical broker fee for residential mortgages 1.00% (from /prime-residential-mortgages/, context only) [a]
- (number/contradiction (other p…) Lender network: 'over 300 lenders' (listing) vs 'over 800 lenders' (homepage) — contradiction noted by the search tool [a]
- (positioning (other page)) Firm 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions' (firm profile, context only) [a]
- (absence) No testimonials, awards, credentials or case studies specific to this page were surfaced in the results

_Notes d'extraction : Seed file had no snippetsFromFirstPass entry for /foreign-national-mortgages/; only navigation placement (Residential / Wealth group) and firm-level facts were usable. Search [a] explicitly states the full page was not returned and that fees, minimum deposits and accepted countries 'would need to be checked directly on the site'. Search [b] reports crawl ages of roughly 8 to 213 days for the Silv…_

#### International Property Mortgages

URL : <https://www.silveroakcapital.co.uk/international-property-mortgages/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** International Property Mortgages  

**Résumé.** Service page of Silver Oak Capital (London debt advisory) on international property mortgages: financing for the purchase or refinance of homes outside the borrower's home country. Per search summaries, the page explains what an international property mortgage is and who it suits; stresses that the process and outcome vary by country; frames the core decision as borrowing locally (in-country) versus using a bank with cross-border capabilities; targets second-home and investment buyers abroad, cross-border acquirers, borrowers refinancing overseas property and HNW families building multi-country portfolios; flags non-resident restrictions, notary involvement, different deposit rules, certification/translation delays and tighter AML checks (clear source-of-funds trail); and notes that some private banks can lend across borders for strong HNW profiles. No fees, LTVs, rates, loan sizes, timescales or process steps specific to this page were revealed by the snippets. Full page text was NOT retrieved: everything comes from search-engine snippets and the search tool's summaries.

**Sections repérées**

- **What is an international property mortgage / who it suits (heading wording not revealed)** — [a] The page 'describes what an international property mortgage is and who it suits'. [b] It 'describes financing for purchases or refinances of homes outside a borrower's home country'.
- **Country-by-country variation; local vs cross-border borrowing (heading wording not revealed)** — [a] 'The firm says the outcome varies by country'. [a] 'The right solution depends on whether borrowing should be arranged locally (in-country) or via a bank with cross-border capabilities.' [b] 'the process differs by country, so the choice between local borrowing and a cross-border bank depends on the case'.
- **Who the page targets (heading wording not revealed)** — [a] 'second-home buyers, cross-border acquirers, and borrowers refinancing overseas property'. [b] 'second-home and investment buyers abroad, cross-border acquirers, and high-net-worth families building multi-country portfolios'.
- **Key considerations / practical issues (heading wording not revealed)** — [a] 'flags restrictions on non-residents and extra anti-money-laundering checks as key considerations'. [b] 'notary involvement, different deposit rules, certification and translation delays, and tighter anti-money-laundering checks that make a clear source-of-funds trail important'.
- **Private banks and cross-border lending (heading wording not revealed)** — [b] 'It describes some private banks as able to lend across borders, particularly for strong high-net-worth profiles.'
- **Related site FAQ content surfaced alongside the page** — [a] FAQ answer: 'it depends on the country, but often yes. Some markets are welcoming to non-resident investment, whilst others are restrictive.' [b] FAQ: 'Non-resident UK lending is possible but often requires heavier documentation and a lower loan-to-value.' [seed] /faq/: non-resident lending needs stronger documentation, more conservative LTV, path of funds (AML/KYC).
- **Related sister pages surfaced by the same search** — [b] Western Europe page: 'regularly works with clients from Africa, Asia and the Middle East buying in Europe and the UK, and it lists deal sizes from €500,000 upward'. [b] Foreign National page: 'covers non-UK citizens buying or refinancing UK property, with a focus on lenders that underwrite international clients'. [b] HNW guide: 'many traditional lenders only lend to UK residents, while high-net-worth lenders can work with non-residents, offshore companies and complex structures'.

**Phrases verbatim (anglais)**

> [a] "The page is a service page from Silver Oak Capital, a London debt advisory firm. It describes what an international property mortgage is and who it suits."
>
> [a] "The firm says the outcome varies by country, and it flags restrictions on non-residents and extra anti-money-laundering checks as key considerations."
>
> [a] "The page also lists who it targets, including second-home buyers, cross-border acquirers, and borrowers refinancing overseas property."
>
> [a] "The right solution depends on whether borrowing should be arranged locally (in-country) or via a bank with cross-border capabilities."
>
> [a] FAQ (same site): "it depends on the country, but often yes. Some markets are welcoming to non-resident investment, whilst others are restrictive."
>
> [a] "the company says it works with a network of over 800 lenders across several regions, though older listings cite 300 or 500 lenders, so that figure is inconsistent across sources."
>
> [b] "their International Property Mortgages page, which describes financing for purchases or refinances of homes outside a borrower's home country."
>
> [b] "It notes that the process differs by country, so the choice between local borrowing and a cross-border bank depends on the case."
>
> [b] "Its stated audience includes second-home and investment buyers abroad, cross-border acquirers, and high-net-worth families building multi-country portfolios."
>
> [b] "The page also flags practical issues: notary involvement, different deposit rules, certification and translation delays, and tighter anti-money-laundering checks that make a clear source-of-funds trail important."
>
> [b] "It describes some private banks as able to lend across borders, particularly for strong high-net-worth profiles."
>
> [b] Western Europe page: "The firm says it regularly works with clients from Africa, Asia and the Middle East buying in Europe and the UK, and it lists deal sizes from €500,000 upward."
>
> [b] Foreign National page: "This covers non-UK citizens buying or refinancing UK property, with a focus on lenders that underwrite international clients."
>
> [b] FAQ page: "Non-resident UK lending is possible but often requires heavier documentation and a lower loan-to-value."
>
> [b] HNW guide: "many traditional lenders only lend to UK residents, while high-net-worth lenders can work with non-residents, offshore companies and complex structures."
>
> [b] "The main page is dated about 213 days ago in the search metadata" (i.e. roughly late March 2026 relative to 2026-10-29).
>
> [c] Spear's profile: "the firm works with more than 800 lenders worldwide and arranges real estate debt for deals in the UK, Western Europe, Southern Africa and the Middle East."
>
> [c] "Beyond prime residential and commercial mortgages, the firm advises on luxury asset financing, short-term bridging loans, and marine and aviation finance."
>
> [c] "his team secured its largest bridging loan, at £19.1 million, for a range of international real estate developments in 2020."
>
> [c] "The results don't name the specific lenders in Silver Oak's panel, and I didn't find its fee structure or any reviews."
>
> [seed] /western-europe/: "regularly act for clients from Africa, Asia and the Middle East who are purchasing properties in Europe and the UK; popular with investors from countries with volatile currencies, such as South Africa or Turkey; frequently arranges facilities for offshore trusts and overseas owners."
>
> [seed] /faq/: "non-resident lending needs stronger documentation, more conservative LTV, path of funds (AML/KYC)"

**Produits et services cités**

- International property mortgages: financing the purchase of a home outside the borrower's home country [a][b]
- Refinancing of overseas property [a][b]
- Arranging borrowing locally (in-country) or via a bank with cross-border capabilities [a][b]
- Access to private banks able to lend across borders for strong HNW profiles [b]
- Sister services surfaced: Foreign National Mortgages UK (non-UK citizens buying/refinancing UK property) [b]; Property Finance Western Europe [b][seed]; Complex Offshore Structures, Prime Residential Mortgages, Private Bank Mortgages [seed navigation]

**Cas d'usage**

- Second-home buyers abroad [a][b]
- Investment buyers abroad [b]
- Cross-border acquirers [a][b]
- Borrowers refinancing overseas property [a]
- High-net-worth families building multi-country property portfolios [b]
- [seed, Western Europe page] clients from Africa, Asia and the Middle East purchasing properties in Europe and the UK; investors from volatile-currency countries (South Africa, Turkey); offshore trusts and overseas owners

**Conditions, montants, délais, frais**

- No loan sizes, LTVs, rates, durations, fees or timescales specific to this page were revealed by the snippets.
- Deposit rules differ by country ('different deposit rules') [b]
- Non-resident UK lending: 'heavier documentation and a lower loan-to-value' (site FAQ) [b]; 'more conservative LTV' [seed]
- Western Europe page (sister page): 'deal sizes from €500,000 upward' [b]
- Firm-level: generally focuses on transactions upwards of £500,000 [seed /lenders/]; £500k to £20m [seed /about-us/]
- Security: not stated on this page; by nature the overseas property (not confirmed in snippets)

**Critères d'éligibilité**

- Non-residents may face restrictions depending on the country [a]; 'Some markets are welcoming to non-resident investment, whilst others are restrictive' (FAQ) [a]
- Tighter anti-money-laundering checks: a clear source-of-funds trail is important [a][b]
- Cross-border private bank lending is described as particularly available to 'strong high-net-worth profiles' [b]
- Non-resident UK lending often requires heavier documentation and a lower LTV (FAQ) [b][seed]
- Notary involvement, certification and translation requirements can cause delays [b]

**Types de prêteurs**

- Local (in-country) lenders [a][b]
- Banks with cross-border capabilities [a][b]
- Private banks able to lend across borders (for strong HNW profiles) [b]
- [b, HNW guide] 'high-net-worth lenders' that work with non-residents, offshore companies and complex structures, versus 'traditional lenders' that only lend to UK residents
- [b, Foreign National page] lenders that underwrite international clients
- No specific lender names were revealed [c]

**Étapes du processus**

- No explicit numbered process was revealed for this page.
- Implied considerations from the page [a][b]: decide between in-country borrowing and a cross-border bank; expect notary involvement; expect certification and translation steps (source of delays); prepare a clear source-of-funds trail for AML checks; expect deposit rules to differ by country.
- [seed, firm-level] enquiry via form / email / WhatsApp / phone; introducer flow: indicative terms provided then borrower introduced directly.

**Géographie**

- Property 'outside a borrower's home country' [b]; multi-country portfolios [b]
- Firm deals: UK, Western Europe, Southern Africa, Middle East [c][seed]
- Western Europe page: clients from Africa, Asia and the Middle East buying in Europe and the UK [b][seed]
- Site 'international' navigation: United Kingdom, Western Europe, Middle East, United States [seed]
- Offices: London (91 Wimpole Street), Monaco, Dubai, Cape Town [seed]

**Appels à l'action**

- No call-to-action text for this page was revealed in the snippets.
- [seed] Firm-wide contact routes: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **Question wording not shown in snippet (concerns whether a non-resident can borrow/buy in a given country) [a]** "it depends on the country, but often yes. Some markets are welcoming to non-resident investment, whilst others are restrictive." [a]
- **Can non-residents obtain UK lending? (wording inferred; from site FAQ) [b]** "Non-resident UK lending is possible but often requires heavier documentation and a lower loan-to-value." [b]; [seed] stronger documentation, more conservative LTV, path of funds (AML/KYC)

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of over 800 lenders across several regions [a]; 'more than 800 lenders worldwide' (Spear's profile, LinkedIn) [c]
- (contradiction) Older listings cite 300 or 500 lenders; figure inconsistent across sources [a] (seed also records 700+ on some pages)
- (geography) Arranges real estate debt for deals in the UK, Western Europe, Southern Africa and the Middle East (Spear's) [c]
- (number) Largest bridging loan £19.1 million 'for a range of international real estate developments in 2020' (Spear's profile of Jimmy Baillie) [c]
- (service-breadth) Advises on luxury asset financing, short-term bridging loans, marine and aviation finance beyond prime residential and commercial mortgages [c]
- (number) Western Europe page: deal sizes from €500,000 upward [b]
- (promise) Some private banks can lend across borders, particularly for strong HNW profiles [b]
- (credential) Spear's 500 listing (two spears500.com adviser profiles for Jimmy Baillie surfaced) [c][seed]
- (metadata) Page last indexed/dated about 213 days before 2026-10-29 (approx. late March 2026) [b]
- (absence) No testimonials, awards or fee details for this page appeared in any of the three results [a][b][c]

_Notes d'extraction : Queries: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk international property mortgages overseas'; (c) standard, '"Silver Oak Capital" international property mortgages lenders'. Query (c) returned mostly unrelated results (ING Luxembourg, Standard Chartered, UOB, Wise, Enness Global, Q Kapital) which were ignored; only the Spear's/LinkedIn items about Silver Oak Capital were…_

#### Complex Offshore Structures & International Finance Solution

URL : <https://www.silveroakcapital.co.uk/complex-offshore-structures/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Service page (Residential / Wealth menu) on arranging finance where the borrowing or ownership structure is atypical: multiple borrowing entities and SPVs, cross-border and offshore assets, layered debt with intercreditor arrangements, and trust-, foundation- and estate-held assets. The page states that traditional high street lenders generally prefer not to lend on such transactions, that many traditional lenders cannot get comfortable with complex offshore assets and ownership structures, and that Silver Oak Capital has a network of 'hundreds of offshore lenders who specialise in this type of lending'. It advises giving the lender a clear, simple structure chart early and says the firm has advised on trust- and estate-held assets, onshore and offshore. Search snippets only; full page text, H1, meta description, pricing, LTV and process details were not revealed. Related site content (FAQ, BVI trust refinance case study, private bank mortgages page) was surfaced and is recorded with tags.

**Sections repérées**

- **What counts as a complex structure** — [a] The page treats a finance structure as complex when it is atypical. 'Traditional high street lenders generally prefer not to lend on these types of transactions, instead favouring less risky, standard transactions.' [b] 'many traditional lenders cannot get comfortable with complex offshore assets and ownership structures'.
- **Multiple borrowing entities and SPVs** — [a] Listed as a page section/topic. No further text revealed by search results.
- **Cross-border and offshore assets** — [a] Listed as a page section/topic. No further text revealed by search results.
- **Layered debt with intercreditor arrangements** — [a] Listed as a page section/topic. No further text revealed by search results.
- **Trust, foundation and estate-held assets** — [a] For trust-held assets, the page advises giving the lender a clear, simple structure chart early. [b] The firm says it has advised on trust- and estate-held assets, onshore and offshore.
- **Lender network** — [a] The firm says it has a network of 'hundreds of offshore lenders who specialise in this type of lending'. Related: [b] FAQ: 'Silver Oak Capital has a network of over 800 lenders, both in the UK and internationally', including several that handle offshore and trust-owned assets.
- **Related site content (not on this page)** — [a][b] FAQ: a 'complex' structure is any atypical one; complex finance is sometimes more expensive, depending on the degree of complexity, the borrower type, and the risk profile of the security. [b] Private bank mortgages page: 'Charges over trusts, special purpose vehicles and companies are also common forms of security form private banks. While they are very seldom the only security a private bank will take, they are often included in the overall security package.' [b] BVI trust refinance case study: UK landlord's property held in a British Virgin Islands trust, trustees based in Guernsey;…

**Phrases verbatim (anglais)**

> [a] "Complex Offshore Structures & International Finance Solution" (page title as shown in search results)
>
> [a] "Traditional high street lenders generally prefer not to lend on these types of transactions, instead favouring less risky, standard transactions."
>
> [a] "network of hundreds of offshore lenders who specialise in this type of lending"
>
> [a] "multiple borrowing entities and SPVs, cross-border and offshore assets, layered debt with intercreditor arrangements, and trust, foundation and estate-held assets" (section topics as summarised by the search tool)
>
> [a] "clear, simple structure chart early" (advice for trust-held assets)
>
> [b] "many traditional lenders cannot get comfortable with complex offshore assets and ownership structures"
>
> [b] "trust- and estate-held assets, onshore and offshore" (advised on)
>
> [b] (FAQ page) "Silver Oak Capital has a network of over 800 lenders, both in the UK and internationally."
>
> [a] (FAQ page) "complex finance is sometimes more expensive, depending on the degree of complexity, the borrower type, and the risk profile of the security"
>
> [b] (private-bank-mortgages page) "Charges over trusts, special purpose vehicles and companies are also common forms of security form private banks. While they are very seldom the only security a private bank will take, they are often included in the overall security package."
>
> [b] (BVI trust refinance case study) "The lender also needed a good working relationship with the trustees (based in Guernsey)."
>
> [b] (BVI trust refinance case study) £5 million, 2.75% fixed for five years, interest-only over 10 years, personal guarantee; property held in a British Virgin Islands trust with trustees in Guernsey; private bank with a BVI office
>
> [c] (Spear's profile) "With an extensive network of more than 800 lenders across the world, Silver Oak arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East."
>
> [a] (LinkedIn company profile) "500+ different private banks, investment banks, specialist lenders & private debt funds in over 100 countries"
>
> [a] (Property Week Commercial Property Awards 2026 listing) "over 800 lenders"
>
> [seed] (/western-europe/) frequently arranges facilities for offshore trusts and overseas owners; regularly acts for clients from Africa, Asia and the Middle East purchasing in Europe and the UK
>
> [seed] (/faq/) non-resident lending needs stronger documentation, more conservative LTV, path of funds (AML/KYC)

**Produits et services cités**

- Finance for complex / atypical borrowing structures [a]
- Finance involving multiple borrowing entities and SPVs [a]
- Finance on cross-border and offshore assets [a][b]
- Layered debt with intercreditor arrangements [a]
- Finance on trust-, foundation- and estate-held assets, onshore and offshore [a][b]
- Access to offshore lenders specialising in this type of lending [a]
- Related: private bank mortgages with charges over trusts, SPVs and companies as part of the security package [b, other page]
- Related: refinance of property held in offshore (BVI) trust via private bank [b, case study]

**Cas d'usage**

- Borrowing where a high street lender declines because the structure is atypical [a]
- Property owned through offshore companies / ownership structures [b]
- Assets held in a trust, foundation or estate [a][b]
- Multiple SPVs or borrowing entities in one transaction [a]
- Layered senior/junior debt requiring intercreditor arrangements [a]
- Refinance of a UK buy-to-let held in a BVI trust with Guernsey trustees [b, case study]
- Overseas owners and offshore trusts purchasing in Europe and the UK [seed /western-europe/]

**Conditions, montants, délais, frais**

- No loan size, LTV, rate, duration, fee or timescale stated for this page in the search results
- Cost: complex finance 'sometimes more expensive, depending on the degree of complexity, the borrower type, and the risk profile of the security' [a, FAQ page]
- Security (related page): charges over trusts, SPVs and companies 'very seldom the only security a private bank will take' but 'often included in the overall security package' [b, private-bank-mortgages]
- Example terms (case study, not a current offer): £5 million; 2.75% fixed for five years; interest-only over 10 years; personal guarantee [b, bvi-trust-refinance]
- Documentation: lender wants a clear, simple structure chart early [a]
- Non-residents (site FAQ, seed): stronger documentation, more conservative LTV, path-of-funds / AML-KYC evidence [seed]

**Critères d'éligibilité**

- Atypical / complex structures that high street lenders will not consider [a]
- Trust-, foundation- or estate-held assets, onshore or offshore [a][b]
- Offshore ownership structures and offshore assets [b]
- Lender needs to be able to work with the trustees (case study: trustees in Guernsey) [b]
- Personal guarantee was required in the BVI trust case study [b]
- Not stated: minimum loan size, nationality/residency conditions, specific jurisdictions accepted

**Types de prêteurs**

- 'hundreds of offshore lenders who specialise in this type of lending' [a]
- Lenders within the 800+ network that handle offshore and trust-owned assets [b, FAQ]
- Private banks (incl. one with a BVI office, per case study) [b]
- Private banks, investment banks, specialist lenders and private debt funds in over 100 countries [a, LinkedIn profile]
- Explicitly excluded: traditional high street lenders ('generally prefer not to lend on these types of transactions') [a]

**Étapes du processus**

- Provide the lender with a clear, simple structure chart early (trust-held assets) [a]
- Match the borrower with a lender comfortable with the jurisdiction/structure (case study: private bank with BVI office) [b]
- Lender establishes a working relationship with the trustees (case study) [b]
- No further process steps revealed for this page

**Géographie**

- Offshore / cross-border assets generally [a][b]
- British Virgin Islands (trust) and Guernsey (trustees) [b, case study]
- UK, Western Europe, Southern Africa, Middle East [c, Spear's]
- Over 100 countries (lender network) [a, LinkedIn]
- Clients from Africa, Asia, Middle East buying in Europe/UK; offshore trusts and overseas owners [seed /western-europe/]

**Appels à l'action**

- No call to action text revealed for this page by the search results
- [seed] Site-wide contact routes: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **What is a complex structure?** [a][b] FAQ page: any structure that is atypical; the complex-offshore-structures page says high street lenders generally prefer not to lend on these transactions.
- **Is complex finance more expensive?** [a] FAQ page: sometimes, depending on the degree of complexity, the borrower type, and the risk profile of the security.
- **Can trust-owned or offshore-held property be financed?** [b] FAQ page: the 800+ lender network includes several lenders that handle offshore and trust-owned assets; the page advises a simple structure chart early.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of 'hundreds of offshore lenders who specialise in this type of lending' [a, this page]
- (number) Network of over 800 lenders, UK and international [b FAQ; c Spear's; a Property Week 2026 listing]
- (number) 500+ private banks, investment banks, specialist lenders & private debt funds in over 100 countries [a, LinkedIn]
- (credential) Has advised on trust- and estate-held assets, onshore and offshore [b]
- (market-statement) Traditional high street lenders generally prefer not to lend on these transactions [a]
- (testimonial/case-study) Case study: £5m BVI-trust refinance at 2.75% fixed 5 years, interest-only over 10 years [b]
- (award) Listed in Property Week Commercial Property Awards 2026 (organisation page) [a]
- (credential) Spear's 500 adviser profile for Jimmy Baillie [c]
- (contradiction) Contradiction: lender count stated as 'hundreds of offshore lenders' (page), 500+ (LinkedIn), over 800 (FAQ, Spear's, Property Week)

_Notes d'extraction : Seed had no snippetsFromFirstPass entry for this path; base was navigation only (Residential / Wealth menu). h1 and metaDescription left empty because search results only gave the page <title> 'Complex Offshore Structures & International Finance Solution'. Query (a) extended on the exact URL; (b) extended 'site:silveroakcapital.co.uk complex offshore structures mortgage trust'; (c) standard '"Sil…_

#### Buy-to-Let Mortgages (page <title> not revealed by search; navigation label in seed is 'Buy-to-Let Mortgages')

URL : <https://www.silveroakcapital.co.uk/buy-to-let-mortgages/>  
Confiance : low · Recherches effectuées : 3


**Résumé.** The target page /buy-to-let-mortgages/ was NOT surfaced by any of the 3 searches (exact-URL extended search, site: extended search, or the standard criteria search). Nothing on this page's own H1, meta, headings, body text, rates or product list was recovered. All buy-to-let content below comes from OTHER silveroakcapital.co.uk pages returned by the searches (/faq/, Ts-and-Cs.pdf, home page, /introducers/) plus the seed file, and from third-party listings (Property Week Commercial Property Awards 2026, mortgage118.com, LinkedIn). Recovered facts: BTL products typically max at 75% LTV (25% deposit), varying by lender, borrower profile and property type; most lenders prefer 12 months' ownership of a standard BTL before HMO lending, though some lenders accept first-time landlords with strong personal income and a clear management plan; BTL mortgages are not normally FCA-regulated except 'consumer buy-to-let' (determined by whether the borrower intends to live in the property; seed adds the 40% occupation rule); fees are set in a client-specific fee agreement; the firm positions itself as independent, whole-of-market, with a network of over 800 lenders, and lists 'Main home mortgages, Buy to Lets, Holiday Lets and HMO's' as its residential offering. Search (c) returned 19 results, none mentioning Silver Oak Capital.

**Sections repérées**

- **[NOT RECOVERED] Page's own headings and body** — No search result returned the /buy-to-let-mortgages/ page, so its H1, meta description, section headings, body copy, product list and any rates are unknown. Everything else in this record is from sibling pages and third-party listings.
- **Buy-to-let deposit and LTV (from /faq/, [a][b][seed])** — Most BTL products max out at 75% LTV, requiring a 25% deposit from the borrower. This varies by lender; lender, borrower profile and property type can push the deposit higher. HMO products: typically 75% LTV, some lenders 80% in exceptional circumstances (seed).
- **Regulation / consumer buy-to-let (from Ts&Cs and /faq/, [a][b][seed])** — Buy-to-let mortgages are not normally regulated by the FCA; some are 'consumer buy-to-let', which the firm says it will advise on / flag during the application. The major determining factor is whether the borrower intends to live in the property after the mortgage has completed. Seed adds: if the borrower or a family member occupies more than 40% of the property, it becomes a regulated loan.
- **Landlord experience / first-time landlords (from /faq/, [a][seed])** — Most lenders prefer the borrower to have owned a standard buy-to-let for at least 12 months (context: before buying an HMO). The firm works with several lenders who permit first-time landlords to buy HMOs provided strong personal income and a clear management plan.
- **Portfolio landlords (from /faq/, [seed])** — A portfolio loan can sit alongside existing individual mortgages; the premium on portfolio products has narrowed. (From seed only; not re-surfaced in this run.)
- **Fees and remuneration (from Ts&Cs, /lenders/, [a][seed])** — Fees and charges are set out in a client-specific Fee Agreement. The firm typically receives commission from lenders, disclosed during the process (seed /lenders/). No BTL-specific fee figure recovered.
- **Positioning (home, Property Week listing, [a][b][seed])** — Residential line: 'Main home mortgages, Buy to Lets, Holiday Lets and HMO's'. Independent, whole-of-market advice across buy-to-let and other lending; network of over 800 lenders (home page, FAQ, Property Week 2026 awards listing).

**Phrases verbatim (anglais)**

> [a] /faq/: "most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value"
>
> [a] /faq/: "This varies by lender however" (on the BTL deposit requirement; the lender, borrower profile and property type can push the deposit higher)
>
> [a] /faq/ (search summary paraphrase, not quoted): most lenders prefer you to have owned a standard buy-to-let for at least 12 months; the firm works with several lenders who permit first-time landlords to buy HMOs, provided the borrower has strong personal income and a clear management plan
>
> [a] Ts-and-Cs.pdf (search summary paraphrase, with one quoted phrase): buy-to-let mortgages are not normally regulated by the FCA, though some are "consumer buy-to-let" and the firm will advise if that applies
>
> [a] Ts-and-Cs.pdf: "All details surrounding fees and charges will be highlighted in the Client specific Fee Agreement."
>
> [a] Ts-and-Cs.pdf (search summary paraphrase): the firm will provide independent recommendations and arrange services for a fee
>
> [a] home page: "Main home mortgages, Buy to Lets, Holiday Lets and HMO's"
>
> [a] Property Week Commercial Property Awards 2026 listing (search summary paraphrase): provides independent, whole-of-market advice across buy-to-let and other lending, drawing on a network of over 800 lenders
>
> [b] /faq/ on consumer buy-to-let (search summary paraphrase): the major determining factor is whether the borrower intends to live in the property after the mortgage has been signed and completed
>
> [b] Ts-and-Cs.pdf (search summary paraphrase): buy-to-let mortgages are not normally regulated by the FCA, but some are "consumer buy-to-let," which it says it will flag during the application
>
> [b] /introducers/ (search summary paraphrase): the firm can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance for clients referred by introducers
>
> [b] home page (search summary paraphrase): handles Main home mortgages, Buy to Lets, Holiday Lets and HMO's on the residential side, and works with a network of over 800 lenders
>
> [c] No result mentioned Silver Oak Capital; all 19 results were other lenders/brokers (LendInvest, YBS, Charcol, MFS, Pepper Money, Nottingham, Tipton, Landbay, Commercial Trust, Bank of England). Not usable for this page.
>
> [seed] /faq/: "If you or a family member occupies more than 40% of the property, it becomes a regulated loan"
>
> [seed] /faq/: "A portfolio loan can sit alongside existing individual mortgages"
>
> [seed] /faq/: BTL products max out at 75% LTV (25% deposit); Consumer Buy-to-Let can fall under FCA rules; premium on portfolio products has narrowed; HMO max LTV typically 75%, some lenders 80% in exceptional circumstances; Article 4 direction can help valuations
>
> [seed] /faq/: non-resident lending needs stronger documentation, more conservative LTV, path of funds (AML/KYC)
>
> [seed] home: "Main home mortgages, Buy to Lets, Holiday Lets and HMO's"
>
> [seed] /introducers/: can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance
>
> [seed] /lenders/: generally focuses on transactions upwards of £500,000; works with an unrestricted number of lenders and typically receives commission from lenders, with details disclosed during the process

**Produits et services cités**

- Buy-to-let mortgages (brokered, whole-of-market)
- Holiday let mortgages (home page residential line)
- HMO finance (sibling page /hmo-finance/)
- Portfolio mortgages (seed /faq/ and navigation)
- Main home / prime residential mortgages (sibling page /prime-residential-mortgages/)
- Consumer buy-to-let identification/advice (Ts&Cs, FAQ)
- Arranging BTL mortgages for introducer-referred clients (/introducers/)

**Cas d'usage**

- Standard buy-to-let purchase or remortgage (FAQ context)
- First-time landlord buying an HMO with strong personal income and a management plan (FAQ)
- Portfolio landlord adding a portfolio loan alongside existing individual mortgages (seed FAQ)
- Holiday lets (home page line)
- Non-resident / overseas borrowers (seed FAQ: stronger documentation, more conservative LTV, AML/KYC path of funds)

**Conditions, montants, délais, frais**

- LTV: most BTL products max out at 75% LTV (25% deposit); varies by lender, borrower profile and property type, which can push the deposit higher [a][b][seed]
- HMO LTV: typically 75%, some lenders 80% in exceptional circumstances [seed]
- Experience: most lenders prefer 12 months' ownership of a standard BTL (before HMO) [a]
- Fees: client-specific Fee Agreement; commission from lenders disclosed during the process [a][seed]
- Minimum deal size (firm-wide, not BTL-specific): generally transactions upwards of £500,000 [seed /lenders/]
- Rates, loan sizes, durations, timescales and security for BTL specifically: NOT recovered

**Critères d'éligibilité**

- Deposit of at least 25% of property value for most BTL products (higher depending on lender, borrower profile, property type) [a][b][seed]
- Most lenders prefer at least 12 months' ownership of a standard buy-to-let before lending on an HMO; some lenders accept first-time landlords with strong personal income and a clear management plan [a][seed]
- Consumer buy-to-let test: whether borrower intends to live in the property after completion; occupation of more than 40% by borrower or family makes the loan regulated [b][seed]
- Non-residents: stronger documentation, more conservative LTV, path of funds (AML/KYC) [seed]

**Types de prêteurs**

- Network of over 800 lenders (home page, FAQ, Property Week 2026 listing) [a][b][seed]
- Whole-of-market / independent (Property Week listing, Ts&Cs) [a]
- Several lenders permitting first-time landlords on HMOs [a][seed]
- Unrestricted number of lenders; commission received from lenders (seed /lenders/)
- Specific BTL lender names: NOT recovered

**Étapes du processus**

- Firm advises whether a BTL falls under 'consumer buy-to-let' / flags it during the application (Ts&Cs) [a][b]
- Fees and charges highlighted in a client-specific Fee Agreement (Ts&Cs) [a]
- Independent recommendations provided and services arranged for a fee (Ts&Cs) [a]
- For introducer-referred clients: once indicative terms are provided, introducers introduce the borrower directly (seed /introducers/)
- Page-specific BTL process steps: NOT recovered

**Géographie**

- UK (buy-to-let is a UK product; home page and FAQ) [a][b]
- London (home page title 'Commercial Mortgage Broker'; mortgage118 lists Hackney, London; seed office 91 Wimpole Street W1G) [a][seed]
- Non-resident / overseas borrowers served (seed /faq/, /western-europe/)

**Appels à l'action**

- Page-specific CTAs: NOT recovered
- Seed-wide: enquiry form, direct email enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp (/contact/)

**Questions fréquentes**

- **How much deposit do I need for a buy-to-let mortgage?** Most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value. This varies by lender however; the lender, borrower profile and property type can push the deposit higher. (/faq/, [a][b][seed])
- **Can a first-time landlord buy an HMO?** Most lenders prefer you to have owned a standard buy-to-let for at least 12 months, but the firm works with several lenders who permit first-time landlords to buy HMOs provided strong personal income and a clear management plan. (/faq/, [a][seed])
- **Is a buy-to-let mortgage regulated by the FCA?** Not normally; some are 'consumer buy-to-let' and the firm will advise/flag if that applies. The major determining factor is whether the borrower intends to live in the property after the mortgage has been signed and completed. If you or a family member occupies more than 40% of the property, it becomes a regulated loan. (Ts&Cs + /faq/, [a][b][seed])
- **Can a portfolio loan sit alongside existing mortgages?** Yes, a portfolio loan can sit alongside existing individual mortgages; the premium on portfolio products has narrowed. (/faq/, [seed])
- **What are the fees?** All details surrounding fees and charges will be highlighted in the Client specific Fee Agreement. (Ts&Cs, [a])

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number (home page, /faq/, Pro…) Network of over 800 lenders
- (positioning (Property Week Co…) Independent, whole-of-market advice across buy-to-let and other lending
- (number (/faq/) [a][b][seed]) Most BTL products max out at 75% LTV / 25% deposit
- (criteria (/faq/) [a]) Most lenders prefer 12 months' ownership of a standard BTL before HMO
- (promise/capability (/faq/) [a…) Works with several lenders permitting first-time landlords on HMOs
- (promise (Ts&Cs) [a][b]) Will advise/flag whether a mortgage is consumer buy-to-let
- (award/recognition (awards.pro…) Listed in Property Week Commercial Property Awards 2026 (organisation page)
- (directory listing (third-part…) Listed on mortgage118.com broker directory under Hackney, London
- (number (seed /lenders/)) Generally focuses on transactions upwards of £500,000
- (disclosure (seed /lenders/)) Receives commission from lenders, disclosed during the process
- (NOT recovered for this page) Testimonials, named BTL lenders, BTL rates, BTL case studies

_Notes d'extraction : Search (a) and (b) both returned sibling pages but not /buy-to-let-mortgages/. Search (c) returned 19 generic UK BTL results with zero mention of Silver Oak Capital. Search (b) summary flagged its snippets as roughly 180 to 340 days old. Contradiction to note: mortgage118.com lists the firm under Hackney, London, whereas the seed records the office at 91 Wimpole Street, London W1G 0EE/0EF. The 12…_

#### HMO Finance UK

URL : <https://www.silveroakcapital.co.uk/hmo-finance/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Not revealed. The search-result title for the URL is "HMO Finance UK" [a][b]; whether this is also the on-page H1 is unconfirmed.  
**Meta description :** Not revealed by any result.

**Résumé.** Silver Oak Capital's HMO Finance UK page presents the firm as an advisor that helps landlords work through the tiers of HMO lenders. It defines HMO finance as a specific mortgage product for properties let to three or more tenants who are not from one household, splits the market into small HMOs (up to 6 bedrooms) and large / sui generis HMOs (7+ bedrooms, or properties that require planning permission for change of use), states that standard buy-to-let lenders will not touch these properties so specialist lenders who understand licensing and management intensity are needed, and says the firm arranges lenders that use investment valuations so investors can recycle cash and pull out most of their deposit. Only search-engine summaries of the page were obtainable: headings, meta description, calls to action, process, fees, rates and full body text were not revealed. The third search (standard mode, 'criteria') returned only health-maintenance-organisation results and nothing about the firm.

**Sections repérées**

- **What HMO finance is (inferred heading)** — [a] HMO finance is described as a specific mortgage product for properties let to three or more tenants who are not from one 'household'.
- **Small HMOs vs large (sui generis) HMOs (inferred heading)** — [a][b] The page splits the market into two groups: small HMOs, up to 6 bedrooms, and large HMOs (sui generis), 7+ bedrooms or properties that require planning permission for change of use.
- **Why specialist lenders are needed (inferred heading)** — [a][b] Standard buy-to-let lenders will not touch these properties, which is why specialist lenders are needed; [b] specifically specialist lenders who understand licensing and management intensity.
- **Investment valuations and recycling cash (inferred heading)** — [b] Silver Oak arranges lenders that use investment valuations, which can let investors recycle cash and pull out most of their deposit.
- **Silver Oak Capital's role (inferred heading)** — [b] The firm describes itself as an advisor that helps landlords work through the tiers of HMO lenders. [a] It presents itself as a leading advisor in HMO Finance. [a] Company pages describe it as a London debt advisory firm, not a traditional high street lender. [a][seed] The homepage residential line reads 'Main home mortgages, Buy to Lets, Holiday Lets and HMO's'.
- **HMO FAQ points (placement unconfirmed: /faq/ or an on-page FAQ block)** — [b][seed] First-time landlords: options are limited since most lenders prefer you to have owned a standard buy-to-let for at least 12 months, but the firm works with several lenders who permit first-time landlords to buy HMOs, provided you have a strong personal income and a clear management strategy. Maximum LTV: typically 75%, with some lenders stretching to 80% in exceptional circumstances, though rates increase significantly. Article 4: lenders view Article 4 HMOs as more secure because supply is capped; seed first pass adds that an Article 4 direction can help valuations.
- **Related Silver Oak pages mentioning HMOs** — [b] /conversions/ covers office-to-residential and HMO projects with development finance. [b] /property-portfolio-mortgages/ notes that specialist portfolio lenders are often comfortable with mixed portfolios containing HMOs. [seed] /faq/: 'A portfolio loan can sit alongside existing individual mortgages'; 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan'.

**Phrases verbatim (anglais)**

> [a] "a specific mortgage product for properties let to three or more tenants who are not from one 'household'"
>
> [a][b] "small HMOs, up to 6 bedrooms, and large HMOs (sui generis), 7+ bedrooms or properties that require planning permission for change of use"
>
> [a][b] "standard buy-to-let lenders will not touch these properties"
>
> [b] "specialist lenders who understand licensing and management intensity"
>
> [b] "an advisor that helps landlords work through the tiers of HMO lenders"
>
> [a] "a leading advisor in HMO Finance"
>
> [b] "arranges lenders that use investment valuations, which can let investors recycle cash and pull out most of their deposit"
>
> [b] FAQ: "most lenders prefer you to have owned a standard buy-to-let for at least 12 months"
>
> [b] FAQ: "works with several lenders who permit first-time landlords to buy HMOs, provided you have a strong personal income and a clear management strategy"
>
> [b] FAQ, maximum LTV: "typically 75%, with some lenders stretching to 80% in exceptional circumstances, though rates increase significantly"
>
> [b] FAQ: "lenders view Article 4 HMOs as more secure because supply is capped"
>
> [seed] /faq/: "HMO max LTV typically 75%, some lenders 80% in exceptional circumstances; Article 4 direction can help valuations"
>
> [seed] /faq/: "If you or a family member occupies more than 40% of the property, it becomes a regulated loan"
>
> [seed] /faq/: "some lenders allow first-time HMO buyers with strong personal income and clear management plan"
>
> [a][seed] homepage: "Main home mortgages, Buy to Lets, Holiday Lets and HMO's"
>
> [a] company pages: "a London debt advisory firm, not a traditional high street lender"
>
> [a] homepage: "over 800 lenders"
>
> [a] LinkedIn: "500+ different private banks, investment banks, specialist lenders & private debt funds"
>
> [a] thelandsite directory: "large loans of £2m – £20m" vs homepage: "loans over £500,000"
>
> [b] /conversions/: "office-to-residential and HMO projects with development finance"
>
> [b] /property-portfolio-mortgages/: "specialist portfolio lenders are often comfortable with mixed portfolios containing HMOs"
>
> [b] result freshness: Silver Oak pages "dated roughly 180–210 days ago in the results"

**Produits et services cités**

- HMO finance / HMO mortgages for small HMOs (up to 6 bedrooms) [a][b]
- HMO finance for large / sui generis HMOs (7+ bedrooms, or requiring planning permission for change of use) [a][b]
- Advisory across the tiers of HMO lenders [b]
- Arranging lenders that use investment valuations (cash recycling) [b]
- Related (other pages): buy-to-let mortgages, holiday lets, main home mortgages [a][seed]; portfolio mortgages for mixed portfolios containing HMOs [b]; conversion / development finance for office-to-residential and HMO projects [b]

**Cas d'usage**

- Buying or refinancing a small HMO (up to 6 bedrooms) [a][b]
- Buying or refinancing a large / sui generis HMO (7+ bedrooms) or a property needing planning permission for change of use [a][b]
- Recycling cash / pulling out most of the deposit through an investment valuation [b]
- First-time landlord acquiring an HMO (limited options; strong personal income and clear management strategy required) [b][seed]
- HMOs in Article 4 areas (viewed by lenders as more secure because supply is capped) [b]
- Office-to-residential or HMO conversion projects funded with development finance (via /conversions/) [b]
- Mixed property portfolios containing HMOs (via /property-portfolio-mortgages/) [b]

**Conditions, montants, délais, frais**

- Maximum LTV: typically 75%; some lenders stretch to 80% in exceptional circumstances, with rates increasing significantly [b][seed]
- Valuation basis: investment valuation available with some lenders, enabling cash recycling [b]
- Landlord experience: most lenders prefer at least 12 months owning a standard buy-to-let [b][seed]
- Loan sizes: not stated on the HMO page; firm-level claims conflict (homepage 'loans over £500,000' vs thelandsite '£2m – £20m') [a]
- Rates, fees, loan durations, timescales, security details: not revealed for this page by any result

**Critères d'éligibilité**

- Property let to three or more tenants who are not from one household [a]
- Small HMO: up to 6 bedrooms [a][b]
- Large HMO (sui generis): 7+ bedrooms, or property requiring planning permission for change of use [a][b]
- First-time landlords: limited options; several lenders accept them with a strong personal income and a clear management strategy [b][seed]
- Standard buy-to-let lenders excluded; specialist lenders required [a][b]
- Seed /faq/: if the borrower or a family member occupies more than 40% of the property, the loan becomes regulated [seed]

**Types de prêteurs**

- Specialist HMO lenders who understand licensing and management intensity [b]
- Tiers of HMO lenders (tiers not enumerated in any result) [b]
- Lenders using investment valuations [b]
- Standard buy-to-let lenders: explicitly excluded for HMOs [a][b]
- Specialist portfolio lenders comfortable with mixed portfolios containing HMOs (/property-portfolio-mortgages/) [b]
- Firm-level (LinkedIn): private banks, investment banks, specialist lenders and private debt funds [a]

**Étapes du processus**

- Not revealed for this page by any result.
- Firm-level from seed (other pages): lenders typically narrowed to as many as 3 or 4 potential partners; indicative terms provided; commission received from lenders and disclosed during the process; enquiry via form, email or WhatsApp [seed]

**Géographie**

- UK (page title 'HMO Finance UK') [a][b]
- London-based firm [a]
- No region-specific HMO content revealed

**Appels à l'action**

- Not revealed for this page by any result.
- Firm-level from seed: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), email enquiry@silveroakcapital.co.uk, phone +44 207 459 4440, WhatsApp [seed]

**Questions fréquentes**

- **Can a first-time landlord get HMO finance?** Options are limited since most lenders prefer you to have owned a standard buy-to-let for at least 12 months, but the firm works with several lenders who permit first-time landlords to buy HMOs, provided you have a strong personal income and a clear management strategy. [b][seed]
- **What is the maximum LTV on HMO finance?** Typically 75%, with some lenders stretching to 80% in exceptional circumstances, though rates increase significantly. [b][seed]
- **Does an Article 4 direction matter for HMO lending?** Lenders view Article 4 HMOs as more secure because supply is capped [b]; the seed first pass adds that an Article 4 direction can help valuations [seed].
- **What counts as an HMO for finance purposes?** A property let to three or more tenants who are not from one household; small HMOs are up to 6 bedrooms, large (sui generis) HMOs are 7+ bedrooms or need planning permission for change of use. [a][b]
- **Can an HMO sit inside a portfolio loan?** Specialist portfolio lenders are often comfortable with mixed portfolios containing HMOs [b]; a portfolio loan can sit alongside existing individual mortgages [seed].

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning) Silver Oak Capital is 'a leading advisor in HMO Finance' [a]
- (positioning) Helps landlords work through the tiers of HMO lenders [b]
- (market statement) Standard buy-to-let lenders will not touch HMO properties [a][b]
- (benefit / promise) Arranges lenders using investment valuations, letting investors recycle cash and pull out most of their deposit [b]
- (number) Maximum LTV typically 75%, up to 80% in exceptional circumstances with significantly higher rates [b][seed]
- (criteria) Most lenders prefer 12 months' ownership of a standard buy-to-let before an HMO [b][seed]
- (market statement) Lenders view Article 4 HMOs as more secure because supply is capped [b]
- (number / contradiction) Works with over 800 lenders (homepage) vs 500+ private banks, investment banks, specialist lenders and private debt funds (LinkedIn) [a] - contradiction, also vs seed 300+/700+ on other pages
- (number / contradiction) Loans over £500,000 (homepage) vs large loans of £2m – £20m (thelandsite) [a] - contradiction; minimum loan size unconfirmed
- (credential / positioning) London debt advisory firm, not a traditional high street lender [a]
- (absence) No testimonials, awards, case studies or regulatory credentials were revealed for this page by any result

_Notes d'extraction : Searches: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk hmo finance mortgage lenders'; (c) standard, '"Silver Oak Capital" HMO finance criteria' - (c) returned only US and Philippine health-maintenance-organisation regulatory documents, zero Silver Oak content. Caveats: (1) all 'verbatim' strings are the search tool's rendering of page snippets, not raw HTML; treat as near-v…_

#### Portfolio Mortgages UK

URL : <https://www.silveroakcapital.co.uk/property-portfolio-mortgages/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** Silver Oak Capital's portfolio mortgage page (search-result title 'Portfolio Mortgages UK', listed in site navigation under Residential / Wealth as 'Portfolio Mortgages') presents a portfolio mortgage as a facility that lets a landlord consolidate multiple investment properties under a single loan, secured against the aggregate value of the entire portfolio. It is open to individuals and limited companies (SPVs); any landlord with more than one property can apply, but the page says the true benefits are usually realised with four or more properties. A related FAQ passage says a property sold from the portfolio can often be replaced with a new purchase without redeeming the loan, provided value and rental income still cover the debt, and that Silver Oak can negotiate such substitution terms upfront. A related case study ('Residential Portfolio Refinance') describes a GBP 5.3m refinance of 10 London flats at 70% LTV, 2.50% five-year fixed, interest-only, structured as ten separate mortgages at the client's request rather than one portfolio facility. Firm-wide claims seen alongside: network of over 800 lenders, focus on loans over GBP 500,000. No rates, fees, LTV caps, timescales, process steps, H1 or meta description specific to this page were surfaced; search (c) returned nothing relevant.

**Sections repérées**

- **What is a portfolio mortgage (page definition)** — [a] "A portfolio mortgage allows a landlord to consolidate multiple investment properties under a single loan facility." [b] Security: "the loan is secured against the aggregate value of the entire portfolio".
- **Who can apply** — [a][b] Open to both individuals and limited companies (SPVs). [b] Any landlord with more than one property can apply. [a][b] "The true benefits of portfolio finance are usually realised by those with four or more properties."
- **Selling and substituting properties within the portfolio (FAQ passage)** — [b] If you sell a property within the portfolio, you can often replace it with a new purchase without redeeming the loan, provided value and rental income still cover the debt. The firm says it can negotiate these substitution terms upfront. Attribution ambiguous: the search summary says 'The FAQ' - this may be an on-page FAQ block or the site's /faq/ page.
- **Related case study: Residential Portfolio Refinance** — [a][b] https://www.silveroakcapital.co.uk/case-studies/residential-portfolio-refinance/ - GBP 5.3m refinance of 10 London flats at 70% LTV, 2.50% five-year fixed rate, individual interest-only mortgages. The client asked for ten separate mortgages rather than one loan, so the arrangement was not a single portfolio facility. This URL is NOT in the seed's caseStudies list.
- **Firm-wide context seen alongside** — [a][b] Network of over 800 lenders; focus on loans over GBP 500,000 (homepage, /lenders/). [seed] /faq/: a portfolio loan can sit alongside existing individual mortgages; premium on portfolio products has narrowed; BTL max LTV 75%.
- **Not revealed** — [a][b][c] No H1, meta description, pricing, rates, fees, LTV caps, loan size bands, term lengths, timescales, lender names, process steps or calls to action specific to the portfolio page were surfaced. Search (b) summary explicitly: 'The search didn't surface pricing, eligibility criteria, or current rates for portfolio mortgages'. Search (c) returned only unrelated firms (Angel Oak, Oak Capital, YBS) plus a Linktree profile.

**Phrases verbatim (anglais)**

> [a] "A portfolio mortgage allows a landlord to consolidate multiple investment properties under a single loan facility."
>
> [a][b] "The true benefits of portfolio finance are usually realised by those with four or more properties."
>
> [b] "the loan is secured against the aggregate value of the entire portfolio"
>
> [a] search summary paraphrase (not confirmed verbatim): the facility is open to both individuals and limited companies, and the real benefits usually show up at around four or more properties.
>
> [b] search summary paraphrase (not confirmed verbatim): the product is open to both individuals and limited companies (SPVs); any landlord with more than one property can apply.
>
> [b] search summary paraphrase attributed to 'the FAQ' (not confirmed verbatim): if you sell a property within the portfolio, you can often replace it with a new purchase without redeeming the loan, provided value and rental income still cover the debt; the firm says it can negotiate these substitution terms upfront.
>
> [a][b] Case study 'Residential Portfolio Refinance' (search summary paraphrase): GBP 5.3m refinance of 10 London flats at 70% LTV, with a 2.50% five-year fixed rate and individual interest-only mortgages; the client had asked for ten separate mortgages rather than one loan.
>
> [b] Homepage fragment: "specialising in loans over £500,000, arranging debt through our network of over 800 lenders"
>
> [a] Search summary: the firm says it works with a network of over 800 lenders, and it generally focuses on deals above £500,000 (sources: homepage and 'Lenders' page).
>
> [seed] /faq/: "A portfolio loan can sit alongside existing individual mortgages"
>
> [seed] /faq/: premium on portfolio products has narrowed
>
> [seed] /faq/: BTL products max out at 75% LTV (25% deposit); HMO max LTV typically 75%, some lenders 80% in exceptional circumstances
>
> [seed] /faq/: "If you or a family member occupies more than 40% of the property, it becomes a regulated loan"
>
> [seed] navigation: 'Portfolio Mortgages' listed under Residential / Wealth services alongside Buy-to-Let Mortgages and HMO Finance
>
> [c] Linktree profile (https://linktr.ee/silveroakcapital): account has been a member since July 2024; no lending information.

**Produits et services cités**

- Portfolio mortgages: consolidating multiple investment properties under a single loan facility [a][b]
- Portfolio finance for individuals and limited companies (SPVs) [a][b]
- Residential portfolio refinance (case study: 10 London flats, GBP 5.3m) [a][b]
- Negotiating property-substitution terms upfront within a portfolio facility [b]
- Firm-wide: real estate debt advisory arranging loans over GBP 500,000 via a network of over 800 lenders [a][b]

**Cas d'usage**

- Landlord consolidating several investment properties under one loan [a][b]
- Landlords with four or more properties seeking the full benefit of portfolio finance [a][b]
- Limited company / SPV landlords [a][b]
- Refinancing an existing residential portfolio (case study: GBP 5.3m, 10 London flats, 70% LTV) [a][b]
- Selling one property in the portfolio and replacing it with a new purchase without redeeming the loan [b]
- Running a portfolio loan alongside existing individual mortgages [seed /faq/]

**Conditions, montants, délais, frais**

- Security: loan secured against the aggregate value of the entire portfolio [a][b]
- Minimum portfolio: more than one property to apply; benefits realised at four or more [a][b]
- Substitution: sold property can often be replaced by a new purchase without redeeming the loan if value and rental income still cover the debt [b]
- Case study terms (deal-specific, not stated page terms): GBP 5.3m, 70% LTV, 2.50% five-year fixed, interest-only, ten separate mortgages [a][b]
- Firm-wide minimum: generally deals above GBP 500,000 [a][b]
- [seed /faq/] BTL products max out at 75% LTV (25% deposit); HMO max LTV typically 75%, some lenders 80%
- [seed /faq/] premium on portfolio products has narrowed
- Not surfaced: portfolio-specific rates, fees, max LTV, loan size band, term length, timescales [a][b][c]

**Critères d'éligibilité**

- Individuals and limited companies (SPVs) [a][b]
- Any landlord with more than one property can apply [b]
- True benefits usually realised by those with four or more properties [a][b]
- [seed /faq/] occupation of more than 40% of a property by borrower or family member makes the loan regulated
- No further criteria (income, experience, nationality, credit) surfaced [a][b][c]

**Types de prêteurs**

- Not stated for this page; firm-wide claim of a network of over 800 lenders [a][b] (contradicted elsewhere: 300+, 500+, 700+ per seed and [a])
- [seed /faq/] 'A portfolio loan can sit alongside existing individual mortgages' - implies portfolio lenders alongside standard BTL lenders

**Étapes du processus**

- Substitution terms for selling/replacing properties within the portfolio negotiated upfront by Silver Oak [b]
- No other process steps surfaced for this page [a][b][c]

**Géographie**

- UK (page title 'Portfolio Mortgages UK') [a][b]
- London (case study: 10 London flats) [a][b]

**Appels à l'action**

- No page-specific call-to-action text surfaced [a][b][c]
- [seed] firm-wide contact routes: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **If I sell a property within the portfolio, do I have to redeem the loan? [b]** You can often replace it with a new purchase without redeeming the loan, provided value and rental income still cover the debt; Silver Oak says it can negotiate these substitution terms upfront. (Source attribution ambiguous: 'the FAQ' - on-page or /faq/.)
- **Who is portfolio finance for? [a][b]** Any landlord with more than one property can apply, both individuals and limited companies (SPVs); the true benefits are usually realised by those with four or more properties.
- **Can a portfolio loan sit alongside existing individual mortgages? [seed /faq/]** "A portfolio loan can sit alongside existing individual mortgages"

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of over 800 lenders [a][b][seed] - contradicted by 500+ (LinkedIn, older profile), 700+ (/commercial-mortgage-broker/, /bridging-loans-uk/), 300+ (/property-development-finance/, Spear's)
- (number) Generally focuses on deals above GBP 500,000 / 'specialising in loans over £500,000' [a][b]
- (number) The true benefits of portfolio finance are usually realised by those with four or more properties [a][b]
- (case-study) Case study: GBP 5.3m refinance of 10 London flats at 70% LTV, 2.50% five-year fixed, individual interest-only mortgages; client asked for ten separate mortgages rather than one loan [a][b]
- (promise) Can negotiate portfolio substitution terms upfront [b]
- (credential) Silver Oak Capital added to Spear's 500 list for 2022 (case study URL seen) [a]
- (award-listing) Organisation page on Property Week Commercial Property Awards 2026 (awards.propertyweek.com/live/en/node/organisation-silver-oak-capital), cited by [a] as a 2026 award listing stating 800+ lenders
- (misc) Linktree profile member since July 2024 [c]

_Notes d'extraction : Direct fetch blocked; all content from WebSearch snippets/summaries. Contradictions: lender-network size varies (300+/500+/700+/800+ across sources; [a] itself flags 500+ on LinkedIn vs 800+ on homepage and 2026 award listing). The 'Residential Portfolio Refinance' case study is linked to the portfolio page by search relevance but describes ten separate mortgages, not a single portfolio facility …_

#### Probate Loans UK

URL : <https://www.silveroakcapital.co.uk/probate-lending/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Silver Oak Capital's probate-lending page (search-result title 'Probate Loans UK') presents probate lending as a way to obtain funds during estate administration, often to cover inheritance tax. The product is described as a lender providing finance to the heirs, secured against their future inheritance, with inheritance tax bridging loans described as the most common type; the loan is repaid after the inheritance arrives. The page also states that probate is not always required, depending on the value and class of the assets. Related detail came from the firm's /faq/ page: loans can be arranged before or after a grant of probate (post-probate is more common and likely cheaper); lenders will generally fund Corporation Tax, VAT or Inheritance Tax bills payable before probate is granted if there is a clear exit strategy; some probate loans are FCA-regulated and others are not, and the firm offers to check a client's case before engaging a lender. No fees, rates, LTV, loan sizes, durations, timescales, eligibility criteria, process steps, testimonials or calls to action for this page were revealed by any search. Search (c) returned nothing about Silver Oak Capital at all.

**Sections repérées**

- **[from /faq/, not the probate page] Timing: before or after grant of probate** — [a] FAQ: 'the loans can be arranged before or after a grant of probate'; 'post-probate lending is more common and will likely be cheaper.'
- **[from /faq/, not the probate page] Tax bills payable before probate** — [b] FAQ: 'lenders are generally happy to fund Corporation Tax, VAT, or Inheritance Tax bills payable before probate is granted, provided there is a clear exit strategy.'
- **[from /faq/, not the probate page] Regulation** — [a] FAQ: 'the regulatory position is mixed. Some loans fall under FCA oversight and others do not, and the firm offers to help a borrower check their own case before engaging a lender.' [b] FAQ: 'some loans regulated by the FCA and others falling outside of their remit. The firm offers to help clients check whether a specific case is FCA-regulated before they engage a lender.'

**Phrases verbatim (anglais)**

> [a] Search-result title for the page URL: 'Probate Loans UK'
>
> [a] 'The firm presents probate lending as a way to get funds during estate administration, often to cover inheritance tax.' (search-tool summary of the page)
>
> [a] 'Probate lending involves a lender providing finance to the heirs, secured against their future inheritance.'
>
> [a] 'The page describes inheritance tax bridging loans as the most common type. The security is the incoming inheritance.'
>
> [a] (FAQ page) 'the loans can be arranged before or after a grant of probate. The FAQ notes that post-probate lending is more common and will likely be cheaper.'
>
> [a] (FAQ page) 'the loan is repaid once the inheritance has been received.'
>
> [a] (FAQ page) 'the regulatory position is mixed. Some loans fall under FCA oversight and others do not, and the firm offers to help a borrower check their own case before engaging a lender.'
>
> [a] 'Sources disagree on the size of the panel. The firm's About Us page cites 800+ lenders, a LinkedIn profile cites 500+, and an older directory listing cites 300+. The 800+ figure is the most recent in the results.'
>
> [a] 'The results don't include the page's fees, interest rates, or eligibility criteria'
>
> [b] 'The probate page describes the product as a lender providing finance to the heirs, secured against their future inheritance. In the page's words, the loan is repaid after the inheritance arrives.'
>
> [b] (FAQ page) 'lenders are generally happy to fund Corporation Tax, VAT, or Inheritance Tax bills payable before probate is granted, provided there is a clear exit strategy.'
>
> [b] (FAQ page) 'some loans regulated by the FCA and others falling outside of their remit. The firm offers to help clients check whether a specific case is FCA-regulated before they engage a lender.'
>
> [b] (probate page) 'probate is not always required, and this generally varies depending on the value and class of the assets involved.'
>
> [b] (About Us page) 'the firm was founded in 2019 and focuses on advice for loans between £500K – £20m, secured on assets throughout the UK and abroad. Probate lending is listed as one of its special situations services.'
>
> [b] 'The search returned no specific fees, rates, or eligibility criteria for probate loans'
>
> [c] 'The search didn't return anything about Silver Oak Capital specifically. Every result was about probate lending in general, and several looked like low-quality SEO pages'
>
> [seed] Navigation lists 'Probate Lending' as the last item of the 'Residential / Wealth' services group; no snippetsFromFirstPass entry exists for /probate-lending/.

**Produits et services cités**

- Probate lending / probate loans UK (brokered; firm is a debt advisory / broker)
- Inheritance tax bridging loans (described on the page as the most common type of probate loan)
- Funding of Corporation Tax, VAT or Inheritance Tax bills payable before probate is granted, with a clear exit strategy (FAQ)
- Help checking whether a specific probate-loan case is FCA-regulated before engaging a lender (FAQ)

**Cas d'usage**

- Obtaining funds during estate administration
- Covering an inheritance tax bill (cited as the frequent purpose)
- Paying Corporation Tax, VAT or Inheritance Tax bills that fall due before probate is granted (FAQ)
- Borrowing against a future inheritance before it is received

**Conditions, montants, délais, frais**

- Security: the heirs' future / incoming inheritance ([a][b])
- Repayment: as one event once the inheritance has been received / after the inheritance arrives ([a][b])
- Timing: can be arranged before or after a grant of probate; post-probate lending is more common and will likely be cheaper (FAQ, [a])
- Exit: a clear exit strategy is required for pre-probate tax-bill funding (FAQ, [b])
- Firm-level loan range (not probate-specific): £500K – £20m (About Us, [b]); seed also records 'over £500,000' (home, /lenders/)
- NOT REVEALED for this page: minimum/maximum loan size, LTV or advance rate against inheritance, interest rates, durations, fees, timescales

**Critères d'éligibilité**

- Heirs / beneficiaries expecting an inheritance (implied by 'finance to the heirs, secured against their future inheritance')
- Probate is not always required; whether it is depends on the value and class of the assets involved (page, [b])
- Pre-probate tax-bill funding requires a clear exit strategy (FAQ, [b])
- Regulatory status depends on the case: some loans FCA-regulated, others outside FCA remit (FAQ, [a][b])
- NOT REVEALED: credit, income, residency, estate-value thresholds, executor consent requirements

**Types de prêteurs**

- Not specified for probate lending in any result
- Firm-level panel claims (contradictory): 800+ lenders (About Us per [a]; seed: home, /faq/, Trustpilot, Property Week), 500+ (LinkedIn per [a]), 300+ (older directory listing per [a]; seed: /property-development-finance/, SlideShare, Spear's), 700+ (seed: /commercial-mortgage-broker/, /bridging-loa…
- Some probate lenders operate under FCA regulation, others outside its remit (FAQ, [a][b])

**Étapes du processus**

- [reconstructed from FAQ statements, not a page-stated numbered process] 1. Establish whether probate is required (depends on value and class of assets).
- 2. Check whether the specific case is FCA-regulated; the firm offers to help with this before engaging a lender.
- 3. Arrange the loan either before or after the grant of probate (post-probate more common and likely cheaper); pre-probate tax-bill funding needs a clear exit strategy.
- 4. Loan is secured against the heirs' future inheritance.
- 5. Repay the loan once the inheritance has been received.

**Géographie**

- United Kingdom (search-result title 'Probate Loans UK')
- Firm-level: assets 'throughout the UK and abroad' (About Us, per [b])

**Appels à l'action**

- NOT REVEALED for this page by any search result
- [seed] Firm-wide contact routes: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **[question wording reconstructed] Can a probate loan be arranged before or after a grant of probate?** [a] FAQ: loans 'can be arranged before or after a grant of probate'; 'post-probate lending is more common and will likely be cheaper.'
- **[question wording reconstructed] How is a probate loan repaid?** [a] FAQ: 'the loan is repaid once the inheritance has been received.' [b] page: 'the loan is repaid after the inheritance arrives.'
- **[question wording reconstructed] Is probate lending regulated by the FCA?** [a][b] FAQ: mixed position, 'some loans regulated by the FCA and others falling outside of their remit'; the firm 'offers to help clients check whether a specific case is FCA-regulated before they engage a lender.'
- **[question wording reconstructed] Will lenders fund tax bills due before probate is granted?** [b] FAQ: 'lenders are generally happy to fund Corporation Tax, VAT, or Inheritance Tax bills payable before probate is granted, provided there is a clear exit strategy.'
- **[question wording reconstructed] Is probate always required?** [b] page: 'probate is not always required, and this generally varies depending on the value and class of the assets involved.'
- **[question wording reconstructed] What is the most common type of probate loan?** [a] page: 'inheritance tax bridging loans as the most common type. The security is the incoming inheritance.'

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (statement) Inheritance tax bridging loans are the most common type of probate loan (page, per [a])
- (definition) Probate lending is a lender providing finance to the heirs, secured against their future inheritance (page, per [a][b])
- (statement) Post-probate lending is more common and will likely be cheaper (FAQ, per [a])
- (promise) The firm offers to help a borrower check whether their case is FCA-regulated before engaging a lender (FAQ, per [a][b])
- (statement) Lenders are generally happy to fund Corporation Tax, VAT or Inheritance Tax bills payable before probate is granted, provided there is a clear exit strategy (FAQ, per [b])
- (number) 800+ lenders (About Us page, per [a])
- (number) 500+ lenders (LinkedIn profile, per [a])
- (number) 300+ lenders (older directory listing, per [a])
- (contradiction) CONTRADICTION: lender-panel size cited as 300+, 500+, 700+ (seed) and 800+ across sources
- (credential) Founded in 2019 (About Us, per [b]; seed notes one page says 2018)
- (number) Focuses on advice for loans between £500K – £20m, secured on assets throughout the UK and abroad (About Us, per [b])
- (positioning) Probate lending is listed as one of the firm's 'special situations' services (About Us, per [b]); the seed navigation files it under 'Residential / Wealth'
- (award-mention) Appears in Property Week 'Commercial Property Awards 2026' organisation listing (link title only, per [a]; content not revealed)
- (absence) No testimonials, timescales, rate figures, fee figures or LTV figures were revealed for this page

_Notes d'extraction : Direct fetching was not attempted (blocked per task; this is the 403 situation referred to in the user request). Query (a) extended on the exact URL; query (b) extended 'site:silveroakcapital.co.uk probate lending loan estate'; query (c) standard '"Silver Oak Capital" probate lending how it works' returned only generic/SEO probate-loan pages (svn.com, toky.co, njcleanenergy.com, yalelawjournal.or…_

#### Boat Finance UK

URL : <https://www.silveroakcapital.co.uk/marine-finance/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** NOT REVEALED by search results. Only the SERP/page title 'Boat Finance UK' was returned; the on-page H1 was not visible in any snippet.  
**Meta description :** NOT REVEALED by search results. Closest paraphrase from the search tool summary [a]: 'tailored financing for superyacht purchases'.

**Résumé.** The /marine-finance/ page is titled 'Boat Finance UK' in search results. According to the search tool summaries of results (a) and (b), it describes tailored financing for superyacht purchases, lists the firm's services as borrow, develop, refinance and acquire, and offers boat finance for yachts typically over 20m in length. Financed yachts are usually registered in the UK, Cayman Islands, BVI or Malta; commercial vessels are mentioned but must be enquired about directly. Two product types are named: Pre-build Payment Financing and Senior Secured Mortgage (Post-build). Sample terms cited: up to 70% LTV based on an independent valuation, 48-month term, interest-only payments. A typical broker fee of 1.00% of the loan amount is cited (attribution to this page vs the /types-of-borrowing/ page is inconsistent between results). Stated advantages: '300+ Lenders' and 'independent whole-of-market advice'. Contact details on the page: London W1 and enquiry@silveroakcapital.co.uk. No meta description, H1, FAQ, process steps, testimonials or awards were revealed for this page. Search (c) returned only unrelated marine-industry results.

**Phrases verbatim (anglais)**

> [a] Page title as indexed: "Boat Finance UK"
>
> [a] (search-tool summary wording) "It describes tailored financing for superyacht purchases and lists the firm's services as borrow, develop, refinance and acquire."
>
> [a] (search-tool summary wording) "It says the firm offers boat finance for yachts typically over 20m in length, and it covers Pre-build Payment Financing, Senior Secured Mortgage (Post-build)."
>
> [a] (search-tool summary wording) "Its stated advantages include 300+ Lenders, and it promises independent whole-of-market advice."
>
> [a] (search-tool summary wording) "The page's contact details list London's W1 area and the enquiry email address enquiry@silveroakcapital.co.uk."
>
> [b] (search-tool summary wording) "The main marine finance page says the firm typically lends on yachts over 20m, and that financed yachts are usually registered in the UK, Cayman Islands, BVI, or Malta."
>
> [b] (search-tool summary wording) "It also mentions commercial vessels, to be enquired about directly."
>
> [b] (search-tool summary wording) "Listed options are pre-build payment financing and a senior secured mortgage after the build."
>
> [b] (search-tool summary wording) "A typical broker fee is 1.00% of the loan amount." (cited by the tool to the marine-finance result; result [a] attributes the same 1.00% figure to /types-of-borrowing/)
>
> [b] (search-tool summary wording) "The sample terms include up to 70% LTV based on an independent valuation, a 48-month term, and interest-only payments."
>
> [a] RELATED PAGE /yacht-mortgages/: "defines the product as a secured loan used to buy or refinance a yacht, where the yacht is the collateral."
>
> [b] RELATED PAGE /yacht-mortgages/: "It says it works with specialist marine lenders for cross-border cases."
>
> [a] RELATED PAGE /marine-lease-finance/: "covers leasing structures in France, Italy and Malta, with terms that typically run between 5 to 15 years."
>
> [b] RELATED PAGE /marine-lease-finance/: "mainly for buyers in France, Italy, and Malta, with the firm working with French and Italian leasing banks."
>
> [a] RELATED PAGE /pre-construction-marine-finance/: "explains funding for new builds before the hull exists, since standard marine mortgages cannot be used because the asset (the boat) does not legally exist yet."
>
> [b] RELATED PAGE /pre-construction-marine-finance/: "This covers funding shipyard stage payments during a new build."
>
> [b] RELATED PAGE /superyacht-finance/: "The firm targets vessels typically over 30 metres, and these are usually held through special purpose vehicles with a personal guarantee from the owner."
>
> [b] RELATED PAGE /case-studies/heesen-yacht-finance/: "One published example describes $14m of finance at 60% LTV for a 50m Heesen yacht, with a 10-year term."
>
> [a] Caveat from the search tool: "the 'age' metadata shows some pages are 700+ days old."
>
> [seed] Navigation 'Marine' group: Marine / Boat Finance, Yacht Mortgages, Superyacht Finance, Marine Lease Finance, Pre-Construction Marine Finance.
>
> [seed] /introducers/ snippet: the firm can arrange '... marine finance, or aviation finance'.
>
> [c] No sentence about Silver Oak Capital was returned; the tool stated: "The search didn't turn up anything about Silver Oak Capital as a marine finance lender. None of the results mention the firm."

**Produits et services cités**

- Boat / marine finance for yachts typically over 20m [a][b]
- Pre-build Payment Financing [a][b]
- Senior Secured Mortgage (Post-build) [a][b]
- Commercial vessel finance (enquire directly) [b]
- Borrow / develop / refinance / acquire (firm-level service list shown on page) [a]
- Independent whole-of-market advice [a]
- Related (own pages, linked from search): Yacht Mortgages, Superyacht Finance (30m+), Marine Lease Finance (France/Italy/Malta), Pre-Construction Marine Finance [a][b]

**Cas d'usage**

- Superyacht purchase [a]
- Pre-build / shipyard stage payment funding for a new build [a][b]
- Post-build senior secured mortgage on a completed yacht [a][b]
- Refinance of a yacht (from 'refinance' in service list; explicit on /yacht-mortgages/) [a]
- Commercial vessels (enquire directly) [b]

**Conditions, montants, délais, frais**

- Vessel size: yachts typically over 20m in length [a][b]
- LTV: up to 70% based on an independent valuation (sample terms) [b]
- Term: 48 months (sample terms) [b]
- Repayment: interest-only payments (sample terms) [b]
- Broker fee: typically 1.00% of the loan amount (attribution to this page uncertain) [a][b]
- Security: senior secured mortgage on the vessel post-build; pre-build payment financing before completion [a][b]
- Registration: yachts usually registered in UK, Cayman Islands, BVI or Malta [b]
- Related page /superyacht-finance/: vessels typically over 30 metres, usually held via SPV with personal guarantee from owner [b]
- Related page /marine-lease-finance/: terms typically 5 to 15 years [a]
- Related case study (Heesen): $14m, 60% LTV, 50m yacht, 10-year term [b]
- NOT REVEALED on this page: interest rates, minimum/maximum loan size, timescales, arrangement/valuation fees, currency

**Critères d'éligibilité**

- Yachts typically over 20m in length [a][b]
- Yachts usually registered in UK, Cayman Islands, BVI or Malta [b]
- Commercial vessels considered on direct enquiry [b]
- NOT REVEALED: borrower residency, nationality, net worth, ownership structure requirements (SPV/personal guarantee appears only on /superyacht-finance/) [b]

**Types de prêteurs**

- '300+ Lenders' stated on this page (count only, no lender type named) [a]
- Specialist marine lenders for cross-border cases (from /yacht-mortgages/, related page) [b]
- French and Italian leasing banks (from /marine-lease-finance/, related page) [b]

**Géographie**

- London W1 (contact details on page) [a]
- Yacht registration jurisdictions: UK, Cayman Islands, BVI, Malta [b]
- Related page /marine-lease-finance/: France, Italy, Malta [a][b]

**Appels à l'action**

- Email enquiry@silveroakcapital.co.uk [a]
- Commercial vessels: enquire directly [b]
- NOT REVEALED: button labels, phone number placement, enquiry form on this page

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) 300+ Lenders (stated advantage on this page)
- (promise) Independent whole-of-market advice
- (criteria) Boat finance for yachts typically over 20m in length
- (number) Up to 70% LTV based on an independent valuation (sample terms)
- (number) 48-month term, interest-only payments (sample terms)
- (fee) Typical broker fee 1.00% of the loan amount (attribution ambiguous between this page and /types-of-borrowing/)
- (criteria) Financed yachts usually registered in UK, Cayman Islands, BVI or Malta
- (case-study) Related case study: $14m at 60% LTV for a 50m Heesen yacht, 10-year term (/case-studies/heesen-yacht-finance/)
- (contradiction) Contradiction with seed: this page cites 300+ lenders while /bridging-loans-uk/ and /commercial-mortgage-broker/ cite 700+ and home//faq/ cite 800+
- (absence) No testimonials, awards, credentials or FCA statements revealed for this page

_Notes d'extraction : Seed file had no snippetsFromFirstPass entry for /marine-finance/; only navigation (Marine group) and the /introducers/ mention of marine finance were usable. All page-specific content comes from the search tool's prose summaries of results (a) and (b), not raw page text, so 'verbatim' lines are summary wording except the title 'Boat Finance UK'. H1, meta description, section headings, FAQ, proce…_

#### Yacht Mortgages & Marine Finance for Luxury Vessels

URL : <https://www.silveroakcapital.co.uk/yacht-mortgages/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** NOT REVEALED by search results. The only title text surfaced is the search-result title 'Yacht Mortgages & Marine Finance for Luxury Vessels' [a][b], which is most likely the HTML <title>; the on-pag…  
**Meta description :** NOT REVEALED. No snippet gave the meta description. Closest candidate wording (summary of [a]/[b]): the page describes bespoke yacht finance for high-net-worth individuals and corporate entities, mainly for vessels in Western Europe and the Mediterranean, with lenders sourced for cross-border ownership arrangements.

**Résumé.** The /yacht-mortgages/ page is a marketing/service page of the London broker Silver Oak Capital. According to the two productive searches, it presents yacht mortgages as secured loans where the vessel itself is the collateral, aimed at high-net-worth individuals (HNWIs) and corporate entities, with a focus on cross-border ownership arrangements that mainstream banks often decline, and on Western European / Mediterranean hubs (Monaco, Cote d'Azur, Italy, Netherlands). One verbatim sentence was recovered: 'Silver Oak Capital specialises in securing our clients' bespoke, tailored yacht finance for high-net-worth individuals (HNWIs) and corporate entities.' The search summaries also pulled in related content from sibling marine pages on the same site: typical loan structure (5-7 year term, balloon near 25% of principal, leasing as the alternative), a worked example (GBP 6m facility, 70% LTV, 3.5% fixed, 60 months, 20% balloon, 6 months' interest held on deposit), a charter/'commercial registration' mortgage point, pre-construction stage-payment finance (interest-only, refinanced into a marine mortgage or lease at launch), vessels typically over 20m, UK/Cayman/BVI/Maltese registries, SPV ownership for superyachts with personal guarantee, a 1.00% typical broker fee, and the Heesen case study (USD 14m, 60% LTV, 50m yacht, 10 years). Search [c] (standard, with 'loan to value') returned only generic third-party yacht-finance articles and nothing about Silver Oak Capital. No H1, meta description, section headings, FAQ, process steps or testimonials specific to this page were revealed. Direct fetching was blocked (403 / network restriction), so everything here comes from search-engine snippets and the search tool's summaries.

**Sections repérées**

- **[related content from sibling marine pages, surfaced by the same searches] Loan structure and worked example** — 5-7 year term, balloon near 25%; leasing as alternative; example GBP 6m, 70% LTV, 3.5% fixed, 60 months, 20% balloon, six months' interest on deposit (calculator case-study page) [a][b]. Heesen case: USD 14m, 60% LTV, 50m yacht, 10 years [b].
- **[related content from sibling pages] Scope, registries, fee** — Yachts typically over 20m; registries UK/Cayman/BVI/Malta; products: pre-build payment financing and senior secured post-build mortgages; typical broker fee 1.00% of the loan amount (/marine-finance/) [a][b].
- **[related content from sibling pages] Superyacht SPV structure, leasing, pre-construction** — SPV in Isle of Man / Malta / Cayman, corporate loan secured on the boat with personal guarantee of beneficial owner (/superyacht-finance/) [b]; leasing common in France, Italy, Malta with French and Italian leasing banks (/marine-lease-finance/) [b]; shipyard stage payments funded interest-only then refinanced at launch (/pre-construction-marine-finance/) [a][b].

**Phrases verbatim (anglais)**

> [b] PAGE VERBATIM (quoted in the search summary): "Silver Oak Capital specialises in securing our clients' bespoke, tailored yacht finance for high-net-worth individuals (HNWIs) and corporate entities."
>
> [a] PAGE VERBATIM FRAGMENT: the firm sources "commercial registration" mortgages for chartering (only the two words 'commercial registration' are quoted; the sentence around them is the search tool's wording).
>
> [a] SEARCH-RESULT TITLE for the URL: "Yacht Mortgages & Marine Finance for Luxury Vessels"
>
> [a] SEARCH-TOOL SUMMARY: "The Silver Oak Capital yacht mortgage page is a marketing page for a London broker. It describes bespoke yacht finance for high-net-worth individuals and companies, mainly for vessels in Western Europe and the Mediterranean. The broker says it sources lenders for cross-border ownership arrangements, which mainstream banks often decline."
>
> [a] SEARCH-TOOL SUMMARY (attributed to /case-studies/yacht-finance-calculator/): "A yacht finance calculator page describes standard yacht mortgages as roughly 5 to 7 year loans with a balloon payment near 25% of the principal. Leasing is the other option."
>
> [a] SEARCH-TOOL SUMMARY (example deal, calculator page): "A £6 million facility at 70% loan-to-value, 3.5% fixed, over 60 months, with a 20% balloon and six months of interest held on deposit."
>
> [a] SEARCH-TOOL SUMMARY (charter use; which page is ambiguous, 'The page' follows the calculator item): "The page says standard marine mortgages may not allow chartering, and that the firm sources \"commercial registration\" mortgages for that purpose."
>
> [a] SEARCH-TOOL SUMMARY (attributed to /pre-construction-marine-finance/): "A separate page covers funding shipyard stage payments on new builds, which is typically interest-only and then refinanced into a marine mortgage or lease at launch."
>
> [a] SEARCH-TOOL SUMMARY (scope): "Marine finance is described as typically for yachts over 20m, and the firm says it works with lenders across several registers, including British, Cayman, BVI and Maltese."
>
> [a] SEARCH-TOOL SUMMARY (contact): "The site lists a London office on Wimpole Street and an enquiry email address."
>
> [b] SEARCH-TOOL SUMMARY (yacht mortgages page): "The firm describes a yacht mortgage as a secured loan where the vessel itself is collateral. It says these deals are cross-border, and it places its work across Western European hubs such as Monaco, the Côte d'Azur, Italy and the Netherlands."
>
> [b] SEARCH-TOOL SUMMARY (attributed to /marine-finance/): "The firm's marine finance page covers yachts typically over 20m in length. Financed vessels are usually registered in the UK, Cayman, BVI or Maltese registries. Listed products include pre-build payment financing and senior secured post-build mortgages. The page also cites a typical broker fee of 1.00% of the loan amount."
>
> [b] SEARCH-TOOL SUMMARY (attributed to /superyacht-finance/): "Superyachts are usually held through special purpose vehicles in jurisdictions such as the Isle of Man, Malta or the Cayman Islands. The page describes the loan as a corporate loan to that vehicle, secured on the boat and backed by a personal guarantee from the beneficial owner."
>
> [b] SEARCH-TOOL SUMMARY (attributed to /marine-lease-finance/): "The marine lease page describes leasing as common in France, Italy and Malta, and says the firm works with French and Italian leasing banks on these structures."
>
> [b] SEARCH-TOOL SUMMARY (attributed to /pre-construction-marine-finance/): "The firm says it funds shipyard stage payments during a build, since a standard mortgage cannot cover a vessel that does not yet legally exist."
>
> [b] SEARCH-TOOL SUMMARY (case studies): "One case describes a $14m loan at 60% loan-to-value for a 50m Heesen yacht over 10 years. A separate calculator example shows a £6m facility at 70% LTV, 3.5% fixed, over 60 months with a 20% balloon."
>
> [b] SEARCH-TOOL CAVEAT: "The page dates shown in the results are inconsistent, so some pages may be older versions. Rates and terms in the case studies are illustrative examples, not current offers."
>
> [c] SEARCH-TOOL STATEMENT: "The search didn't turn up anything about Silver Oak Capital. None of the results mention that firm" (query: "Silver Oak Capital" yacht mortgages "loan to value").
>
> [seed] Navigation, Marine group: "Marine / Boat Finance", "Yacht Mortgages", "Superyacht Finance", "Marine Lease Finance", "Pre-Construction Marine Finance".
>
> [seed] Introducers page: the firm can arrange "marine finance, or aviation finance" among other products.
>
> [seed] Other offices listed: "Monaco", "Dubai", "Cape Town"; head office "91 Wimpole Street, London W1G 0EE"; contact "enquiry@silveroakcapital.co.uk ; +44 207 459 4440 ; WhatsApp".

**Produits et services cités**

- Yacht mortgages (secured loan, vessel as collateral) [a][b]
- Bespoke / tailored yacht finance for HNWIs and corporate entities [b]
- Sourcing lenders for cross-border ownership arrangements [a][b]
- 'Commercial registration' mortgages for yachts intended for charter [a]
- Marine / boat finance for yachts typically over 20m (sibling page /marine-finance/) [a][b]
- Pre-build (shipyard stage payment) financing (sibling page /pre-construction-marine-finance/) [a][b]
- Senior secured post-build mortgages (listed on /marine-finance/) [b]
- Superyacht finance via SPV corporate loans with personal guarantee (sibling page /superyacht-finance/) [b]
- Marine lease finance with French and Italian leasing banks (sibling page /marine-lease-finance/) [b]
- Yacht finance calculator / worked example (case-study page) [a][b]

**Cas d'usage**

- Purchase of a luxury yacht by a high-net-worth individual [a][b]
- Purchase or financing of a yacht through a corporate entity / SPV [b]
- Cross-border ownership structures that mainstream banks often decline [a][b]
- Yachts to be used for chartering (requires 'commercial registration' mortgage) [a]
- New-build yachts: funding shipyard stage payments before the vessel legally exists, then refinancing into a mortgage or lease at launch [a][b]
- Leasing as an alternative to a mortgage, common in France, Italy and Malta [a][b]

**Conditions, montants, délais, frais**

- Typical term: roughly 5 to 7 years for a standard yacht mortgage [a] (source: yacht finance calculator page)
- Balloon payment: near 25% of the principal in the standard description [a]; 20% balloon in the worked example [a][b]
- Worked example: GBP 6 million facility, 70% loan-to-value, 3.5% fixed, 60 months, 20% balloon, six months of interest held on deposit [a][b]
- Case study: USD 14m loan, 60% loan-to-value, 50m Heesen yacht, 10 years [b] (/case-studies/heesen-yacht-finance/)
- Security: the vessel itself is collateral [b]; for superyachts, corporate loan to an SPV secured on the boat plus personal guarantee from the beneficial owner [b]
- Pre-construction finance: typically interest-only during the build, refinanced into a marine mortgage or lease at launch [a]
- Broker fee: typically 1.00% of the loan amount (stated on /marine-finance/) [b]
- Vessel size: typically over 20m in length [a][b]
- Registries: UK/British, Cayman, BVI, Maltese [a][b]
- NOT REVEALED for this page: minimum/maximum loan size, interest-rate ranges, arrangement timescales, lender fees, currency options

**Critères d'éligibilité**

- High-net-worth individuals (HNWIs) [b]
- Corporate entities / companies [a][b]
- Cross-border owners, including arrangements mainstream banks often decline [a][b]
- Vessels typically over 20m [a][b]
- Vessels registered in UK, Cayman, BVI or Maltese registries (usual) [a][b]
- Superyachts held through SPVs in Isle of Man, Malta or Cayman Islands, with beneficial owner giving a personal guarantee [b]
- NOT REVEALED: residency, nationality, income/asset tests, minimum deposit, age of vessel

**Types de prêteurs**

- Lenders across several registers (British, Cayman, BVI, Maltese) [a]
- Lenders willing to take cross-border ownership arrangements that mainstream banks often decline [a]
- Mainstream banks (contrasted as often declining) [a]
- French and Italian leasing banks (for lease structures) [b]
- NOT REVEALED: named lenders, lender count specific to marine, private banks vs specialist marine lenders

**Étapes du processus**

- NOT REVEALED for this page. Only implied sequence from sibling pages: (1) for new builds, fund shipyard stage payments (interest-only) during construction [a][b]; (2) at launch, refinance into a marine mortgage or lease [a]; (3) standard mortgage runs 5-7 years with a balloon at the end [a].

**Géographie**

- Western Europe and the Mediterranean (main focus) [a]
- Monaco [b][seed office]
- Cote d'Azur [b]
- Italy [b]
- Netherlands [b]
- France, Italy, Malta (leasing) [b]
- Registries: UK/British, Cayman Islands, BVI, Malta [a][b]
- SPV jurisdictions: Isle of Man, Malta, Cayman Islands [b]
- London (broker base, Wimpole Street) [a][seed]
- Dubai, Cape Town (other offices) [seed]

**Appels à l'action**

- NOT REVEALED for this page. Site-wide (from [a] and seed): contact via enquiry email, enquiry form, phone +44 207 459 4440, WhatsApp; London office 91 Wimpole Street.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning (page verbatim)) Silver Oak Capital specialises in securing our clients' bespoke, tailored yacht finance for high-net-worth individuals (HNWIs) and corporate entities. [b]
- (promise / differentiator) Sources lenders for cross-border ownership arrangements which mainstream banks often decline. [a][b]
- (geography) Work placed across Western European hubs: Monaco, Cote d'Azur, Italy, the Netherlands. [b]
- (definition) Yacht mortgage defined as a secured loan where the vessel itself is collateral. [b]
- (number / structure (calculato…) Standard yacht mortgages roughly 5 to 7 year loans with a balloon payment near 25% of the principal; leasing is the other option. [a]
- (number / worked example (calc…) Example: GBP 6m facility at 70% LTV, 3.5% fixed, 60 months, 20% balloon, six months of interest held on deposit. [a][b]
- (number / case study) Case study: USD 14m loan at 60% LTV for a 50m Heesen yacht over 10 years. [b]
- (product feature) Standard marine mortgages may not allow chartering; the firm sources 'commercial registration' mortgages for that purpose. [a]
- (number / scope) Marine finance typically for yachts over 20m. [a][b]
- (credential / network) Works with lenders across several registers including British, Cayman, BVI and Maltese. [a][b]
- (fee) Typical broker fee of 1.00% of the loan amount (marine finance page). [b]
- (structure (superyacht page)) Superyachts usually held via SPVs in Isle of Man, Malta or Cayman Islands; loan is a corporate loan to the SPV, secured on the boat, backed by personal guarantee from the beneficial owner. [b]
- (network (marine lease page)) Leasing common in France, Italy and Malta; firm works with French and Italian leasing banks. [b]
- (product feature (pre-construc…) Funds shipyard stage payments during a build because a standard mortgage cannot cover a vessel that does not yet legally exist; typically interest-only, refinanced into a mortgage or lease at launch. [a][b]

_Notes d'extraction : Searches: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk yacht mortgages marine finance'; (c) standard, '"Silver Oak Capital" yacht mortgages "loan to value"' -> no Silver Oak results, only generic third-party yacht-finance articles (yachtr.com, boatinternational.com, iyba.org etc.), which were disregarded as unrelated. Unrelated results ignored: Wikipedia 'Capital Yachts' [a…_

#### Superyacht Finance

URL : <https://www.silveroakcapital.co.uk/superyacht-finance/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** Search-result title of the page is 'Superyacht Finance' [a][b]. The page presents superyacht finance as a specialised form of marine lending aimed at ultra-high-net-worth individuals and family offices [b], defines superyachts as vessels over 30 metres [a], and describes the loan as a corporate loan to a holding company (SPV) that owns the vessel, secured by a mortgage on the vessel and backed by a personal guarantee from the owner / Ultimate Beneficial Owner (UBO) [a][b]. SPVs are described as typically limited companies in tax-neutral jurisdictions such as the Isle of Man, Malta or the Cayman Islands [a]. Buyers are said to commonly borrow 50-60% of the asset's value to keep liquidity for higher-yielding investments [a][b]. The firm claims direct access to over 50 lenders for yacht or business jet transactions [a]. Sibling marine pages surfaced by the same searches add: yachts typically over 20m, British/Cayman/BVI/Maltese registers, export credit for new builds, a representative example of £11m at up to 70% LTV over 48 months interest only with a 1.00% lender fee (marine finance page), and a Heesen 50m case study of $14m at 60% LTV, 10-year term, 20-year amortisation, 2.75% lender fee. Query [c] returned only third-party superyacht-finance sources with no mention of Silver Oak Capital. The page itself was not opened; everything comes from the search tool's summaries of snippets.

**Sections repérées**

- **What superyacht finance is (heading inferred, not verbatim)** — Superyacht finance is presented as a specialised form of marine lending aimed at ultra-high-net-worth individuals and family offices [b]. The page treats superyachts as vessels over 30 metres [a].
- **Ownership structure and security (heading inferred)** — Superyachts are almost exclusively owned through Special Purpose Vehicles (SPVs), typically limited companies in tax-neutral jurisdictions like the Isle of Man, Malta, or the Cayman Islands [a]. The loan is typically a corporate loan to the holding company that owns the vessel, secured by a mortgage on the vessel and backed by a personal guarantee from the owner / Ultimate Beneficial Owner (UBO) [a][b].
- **Why borrow / typical leverage (heading inferred)** — Buyers commonly borrow 50-60% of the asset's value, keeping liquidity for higher-yielding investments [a]; borrowers often borrow 50-60% of the asset's value to keep liquidity for other investments [b].
- **Lender access (heading inferred)** — The firm says it offers direct access to over 50 lenders for yacht or business jet transactions [a]. The marine finance page cites 300+ Lenders [a]; the search tool flagged these figures as inconsistent.
- **Related marine content on the site (sibling pages surfaced by the searches)** — Marine finance page (/marine-finance/, title 'Boat Finance UK'): yachts typically over 20m in length, usually registered in the British, Cayman, BVI and Maltese registers; export credit market can be used for new builds; representative example of a £11 million loan at up to 70% LTV (Independent Yacht Valuation), 48 months, interest only, 1.00% lender fee, labelled indicative [a][b]. Pre-construction marine finance (/pre-construction-marine-finance/): covers the period when standard marine mortgages cannot be used because the asset does not legally exist yet [b]. Marine lease finance (/marine-…
- **Contact (heading inferred)** — London office 91 Wimpole Street, W1G 0EE; phone +44 207 459 4440 [a]. Contact page title: 'Silver Oak Capital Speak to Experts' [a]. Seed adds enquiry@silveroakcapital.co.uk, WhatsApp and an enquiry form [seed].

**Phrases verbatim (anglais)**

> [a][b] "Superyacht Finance" (search-result title of /superyacht-finance/)
>
> [a] superyachts described as "vessels over 30 metres"
>
> [a] financing described as "a corporate loan to a holding company, secured by a mortgage on the vessel and backed by a personal guarantee from the owner"
>
> [a] "Superyachts are almost exclusively owned through Special Purpose Vehicles (SPVs), typically limited companies in tax-neutral jurisdictions like the Isle of Man, Malta, or the Cayman Islands."
>
> [a] "buyers commonly borrow 50-60% of the asset's value, keeping liquidity for higher-yielding investments"
>
> [a] "direct access to over 50 lenders for yacht or business jet transactions"
>
> [b] superyacht lending described as "a specialised form of marine lending, aimed at ultra-high-net-worth individuals and family offices"
>
> [b] loans "typically structured as corporate loans to a holding company that owns the vessel, secured by a mortgage on the vessel and backed by a personal guarantee from the Ultimate Beneficial Owner (UBO)"
>
> [b] "borrowers often borrow 50-60% of the asset's value to keep liquidity for other investments"
>
> [a] representative example (located on /marine-finance/ per [b]): "£11 million loan at up to 70% LTV (Independent Yacht Valuation), 48 months, interest only, with a 1.00% lender fee"
>
> [b] marine finance page representative example: "£11 million loan with Up to 70% LTV (Independent Yacht Valuation), a 48-month term, and interest-only payments"
>
> [a] Heesen case study (/case-studies/heesen-yacht-finance/), "Heesen 50-metre yacht": "$14 million loan at 60% LTV, a 10-year term, and a 20-year amortisation profile. Lender fee of 2.75%."
>
> [a][b] marine finance page: "yachts typically over 20m in length"
>
> [b] marine finance page: yachts "usually registered in the British, Cayman, BVI and Maltese registers"
>
> [b] marine finance page: the firm "can use the export credit market for new builds"
>
> [a] marine page cites "300+ Lenders"
>
> [b] pre-construction marine finance "covers the period when standard marine mortgages cannot be used because the asset (the boat) does not legally exist yet"
>
> [b] marine lease structures offered "especially for vessels in the Mediterranean"
>
> [b] FAQ page on charter income: "If a loan relies partly on charter earnings, the lender may take an assignment of those earnings, which gives it a right to the income only if the borrower defaults."
>
> [a] contact: London office "91 Wimpole Street, W1G 0EE", phone "+44 207 459 4440"
>
> [a] search metadata: the page is "older (about 1,600 days by the search metadata)" and the representative terms are "indicative"
>
> [a] search tool caveat: "I didn't open the pages themselves, so the figures above come from search snippets and may be out of date."
>
> [seed] Marine navigation group: "Marine / Boat Finance", "Yacht Mortgages", "Superyacht Finance", "Marine Lease Finance", "Pre-Construction Marine Finance"
>
> [seed] positioning: "International Debt Advisory l Expert Finance Solutions"
>
> [seed] introducers page: the firm can arrange "marine finance, or aviation finance"

**Produits et services cités**

- Superyacht finance: corporate loan to the SPV/holding company owning the vessel, secured by a vessel mortgage and a personal guarantee from the UBO [a][b]
- Marine / boat finance for yachts typically over 20m (/marine-finance/) [a][b][seed]
- Yacht mortgages (/yacht-mortgages/) [a][seed]
- Pre-construction marine finance for new-build yachts (/pre-construction-marine-finance/) [a][b][seed]
- Marine lease finance, especially for Mediterranean vessels (/marine-lease-finance/) [b][seed]
- Export credit market for new builds (marine finance page) [b]
- Lender access for yacht or business jet transactions (over 50 lenders) [a]

**Cas d'usage**

- Acquiring a superyacht (over 30m) through an SPV while preserving liquidity for higher-yielding investments [a][b]
- Financing a new-build yacht before the asset legally exists (pre-construction finance; export credit) [b]
- Lease structures for vessels operating in the Mediterranean [b]
- Loans partly serviced by charter income (lender may take assignment of charter earnings) [b, from /faq/]
- Large single-asset marine loans, e.g. Heesen 50m yacht at $14m [a, case study]

**Conditions, montants, délais, frais**

- Vessel size: superyachts defined as over 30 metres on the superyacht page [a]; marine finance page says yachts typically over 20m in length [a][b] (contradiction noted by the search tool)
- Leverage: buyers/borrowers commonly borrow 50-60% of the asset's value [a][b]
- Representative example (marine finance page, labelled indicative): £11 million loan, up to 70% LTV on an Independent Yacht Valuation, 48 months, interest only, 1.00% lender fee [a][b]
- Case study (Heesen 50m): $14 million loan, 60% LTV, 10-year term, 20-year amortisation profile, 2.75% lender fee [a]
- Security: mortgage on the vessel plus personal guarantee from the owner / UBO [a][b]; possible assignment of charter earnings where the loan relies partly on charter income [b, /faq/]
- Borrower structure: corporate loan to a holding company / SPV, typically a limited company in a tax-neutral jurisdiction (Isle of Man, Malta, Cayman Islands) [a]
- Flag/registration: British, Cayman, BVI and Maltese registers (marine finance page) [b]
- Not revealed by the results: interest rates, broker/arrangement fees for this page, minimum/maximum loan size for superyachts, timescales, currency options, age limits for vessels

**Critères d'éligibilité**

- Ultra-high-net-worth individuals and family offices [b]
- Vessel owned through an SPV / holding company, typically in a tax-neutral jurisdiction [a][b]
- Personal guarantee from the owner / Ultimate Beneficial Owner required [a][b]
- Vessel over 30 metres to be treated as a superyacht on this page [a]
- Not revealed: nationality/residency requirements, minimum net worth, income or charter requirements for this page

**Types de prêteurs**

- Over 50 lenders for yacht or business jet transactions [a]
- 300+ Lenders cited on the marine finance page [a] (inconsistent with the 50+ figure)
- Export credit market for new builds [b]
- No individual lenders or bank categories named in the results for this page

**Étapes du processus**

- Not revealed: the search results contain no process or step-by-step description for the superyacht page

**Géographie**

- United Kingdom / London office, 91 Wimpole Street W1G 0EE [a][seed]
- SPV jurisdictions: Isle of Man, Malta, Cayman Islands [a]
- Yacht registers: British, Cayman, BVI, Maltese (marine finance page) [b]
- Mediterranean (marine lease structures) [b]
- Seed: other offices Monaco, Dubai, Cape Town; international pages UK, Western Europe, Middle East, United States [seed]

**Appels à l'action**

- Contact page title 'Silver Oak Capital Speak to Experts' (/contact/) [a]
- Phone +44 207 459 4440 [a]
- Seed: enquiry@silveroakcapital.co.uk, WhatsApp, enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent) [seed]
- No CTA wording specific to the superyacht page was revealed

**Questions fréquentes**

- **What happens when a yacht loan relies partly on charter income? (from the site FAQ page, surfaced by [b], not confirmed to be on the superyacht page)** If a loan relies partly on charter earnings, the lender may take an assignment of those earnings, which gives it a right to the income only if the borrower defaults. [b]
- **How much of a superyacht's value do buyers typically borrow?** Buyers commonly borrow 50-60% of the asset's value, keeping liquidity for higher-yielding investments. [a][b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (definition) Superyachts are vessels over 30 metres [a]
- (definition / contradiction wi…) Yachts financed are typically over 20m in length (marine finance page) [a][b]
- (market statement) Superyachts are almost exclusively owned through SPVs, typically limited companies in tax-neutral jurisdictions like the Isle of Man, Malta, or the Cayman Islands [a]
- (number / leverage) Buyers commonly borrow 50-60% of the asset's value [a][b]
- (number / lender count) Direct access to over 50 lenders for yacht or business jet transactions [a]
- (number / lender count (incons…) 300+ Lenders (marine finance page) [a]
- (representative example) Representative example: £11 million loan, up to 70% LTV (Independent Yacht Valuation), 48 months, interest only, 1.00% lender fee, indicative [a][b]
- (case study) Heesen 50-metre yacht: $14 million loan, 60% LTV, 10-year term, 20-year amortisation profile, 2.75% lender fee [a]
- (target client) Aimed at ultra-high-net-worth individuals and family offices [b]
- (structure) Loan structured as a corporate loan to a holding company, secured by a vessel mortgage and a personal guarantee from the UBO [a][b]
- (capability) Export credit market can be used for new builds (marine finance page) [b]
- (contact) London office 91 Wimpole Street, W1G 0EE; +44 207 459 4440 [a]
- (metadata) Page is about 1,600 days old per search metadata [a]
- (positioning) International Debt Advisory l Expert Finance Solutions [seed]

_Notes d'extraction : Sources: [a] = extended search on the exact URL; [b] = extended search 'site:silveroakcapital.co.uk superyacht finance yacht'; [c] = standard search '"Silver Oak Capital" superyacht finance "loan to value"'; [seed] = seed.json (which has no snippet for this path). Query [c] returned only third-party sources (IYBA, LexisNexis, Superyacht Investor, Enness, Societe Generale, BIL, Ocean Independence,…_

#### Marine Lease Finance

URL : <https://www.silveroakcapital.co.uk/marine-lease-finance/>  
Confiance : medium-low · Recherches effectuées : 3


**Résumé.** Search snippets (not the full page) show that Silver Oak Capital's Marine Lease Finance page presents yacht leasing as a common financing route in continental Europe (France, Italy, Malta), mainly for vessels bought in the Mediterranean. The firm arranges marine lease structures and works with major French and Italian leasing banks, positioning the lease as an alternative to a traditional marine mortgage. Under a lease the bank buys the boat (rather than holding a charge over a boat the client owns); at the end of the term the lessee has an 'Option to Purchase' the vessel outright for a nominal fee, often about 1% of value. The page says leasing has historically offered significant VAT advantages and flexibility for owners navigating EU waters. Pricing, eligibility criteria, lease durations, LTV for leases and process steps are NOT revealed by the results for this page; related figures (1.00% broker fee, up to 70% LTV, 5-7 year mortgages with ~25% balloon, >20m vessels) come from OTHER Silver Oak pages surfaced alongside. Query (c) returned nothing about Silver Oak at all.

**Sections repérées**

- **What marine lease finance is (reconstructed topic, page heading not revealed)** — [a][b] Leasing is presented as a common way to finance yachts in continental Europe, mainly France, Italy and Malta. It is positioned as an alternative to a traditional marine mortgage. Unlike a mortgage, where the client owns the boat and the bank holds a charge over it, in a marine lease the bank buys the boat.
- **What Silver Oak arranges (reconstructed topic)** — [a][b] Silver Oak arranges marine lease structures and works with major French and Italian leasing banks, mainly for vessels bought in the Mediterranean.
- **End of term / Option to Purchase (reconstructed topic)** — [a][b] At the end of the lease term the lessee can exercise an 'Option to Purchase' the vessel outright for a nominal fee, often cited as about 1% of the value.
- **VAT and EU-waters angle (reconstructed topic)** — [b] The page says leasing has historically offered significant VAT advantages and flexibility for owners navigating EU waters. [a] Related FAQ content (other page): leasing for commercial use can allow VAT reclaim on running costs, but the lease contract must be drafted for 'Commercial Use' rather than 'Private Pleasure Use'.
- **Early settlement (from FAQ page, not target page)** — [a] Early settlement of a lease is more involved than with a mortgage because terminating a lease means buying the asset from the bank ahead of schedule. [b] A FAQ answer on marine leases reads 'Yes, but it requires bank permission.' (the question wording was not shown in the snippet).
- **Comparison with yacht mortgages (from other Silver Oak pages)** — [a] Yacht finance calculator case study: standard yacht mortgages typically 5 to 7 years with a balloon payment of around 25% of the original loan; leases operate similarly to car finance or hire purchase agreements. [b] Yacht mortgages page: standard loans for vessels over about 20m; a yacht mortgage is a secured loan to buy or refinance a yacht with the yacht as collateral. [b] An unspecified marine finance page: typical broker fee 1.00% of loan amount; indicative example up to 70% LTV on an independent valuation.

**Phrases verbatim (anglais)**

> [a] Search-result title for the URL: "Marine Lease Finance"
>
> [a] (tool summary) "Silver Oak presents leasing as a common way to finance yachts in continental Europe, mainly France, Italy and Malta."
>
> [a] (tool summary) "The firm arranges marine lease structures and works with major French and Italian leasing banks, positioning this as an alternative to a traditional marine mortgage."
>
> [a] (tool summary) "Under a lease, the lender buys the boat rather than holding a charge over one you already own."
>
> [a] (tool summary) "At the end of the term, the lessee can take an option to purchase the vessel for a nominal fee, often cited as about 1% of value."
>
> [b] (tool summary) "Silver Oak says it arranges marine leases and works with major French and Italian leasing banks, mainly for vessels bought in the Mediterranean."
>
> [b] (tool summary) "Unlike a mortgage where you own the boat and the bank has a charge over it, in a marine lease, the bank buys the boat."
>
> [b] (tool summary, page phrase quoted by tool) "At the end, the lessee can \"Option to Purchase\" the vessel outright for a nominal fee (often 1% of the value)."
>
> [b] (tool summary) "The page describes leasing as common in France, Italy and Malta, and says it has historically offered significant VAT advantages and flexibility for owners navigating EU waters."
>
> [a] (FAQ page, not target page) "The FAQ says leasing for commercial use can allow VAT reclaim on running costs, but the lease contract must be specifically drafted for \"Commercial Use\" rather than \"Private Pleasure Use.\""
>
> [a] (FAQ page, not target page) "It also notes that early settlement is more involved than with a mortgage, because a lease termination involves buying the asset from the bank ahead of schedule."
>
> [b] (FAQ page, not target page; question wording not shown) "On marine leases, the site says \"Yes, but it requires bank permission.\" Commercial leasing is possible and can allow you to reclaim VAT on running costs."
>
> [a] (yacht-finance-calculator case study, not target page) "standard yacht mortgages, typically 5 to 7 years with a balloon payment of around 25% of the original loan, and leases, which operate similarly to car finance or hire purchase agreements."
>
> [b] (yacht-mortgages page, not target page) "The firm also offers standard loans for vessels over about 20m. A yacht mortgage is a secured loan used to buy or refinance a yacht, where the yacht is the collateral."
>
> [b] (unspecified 'marine finance page', not target page) "One marine finance page lists typical broker fees for marine finance of 1.00% of the loan amount. Its indicative example is up to 70% LTV on an independent valuation."
>
> [a] (firm positioning, page unspecified) "Silver Oak Capital describes itself as specialising in real estate debt solutions, and does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions."
>
> [a] (tool caveat) "The results don't show lease pricing, eligibility criteria, or the regulatory status of the firm"
>
> [b] (tool caveat) "Some pages in the results are older (one is about 700 days old), so current terms should be confirmed directly with Silver Oak."
>
> [c] (tool statement) "The search didn't turn up anything specific to Silver Oak Capital"
>
> [seed] Navigation group 'Marine': "Marine / Boat Finance", "Yacht Mortgages", "Superyacht Finance", "Marine Lease Finance", "Pre-Construction Marine Finance"
>
> [seed] /introducers/: "can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance"

**Produits et services cités**

- Marine lease finance / yacht leasing arrangement (lease structures with French and Italian leasing banks) [a][b]
- Alternative to traditional marine (yacht) mortgage [a]
- Related on-site services: Marine / Boat Finance, Yacht Mortgages, Superyacht Finance, Pre-Construction Marine Finance [seed]

**Cas d'usage**

- Financing a yacht bought in the Mediterranean through a lease rather than a mortgage [b]
- Owners navigating EU waters seeking VAT advantages and flexibility (historically) [b]
- Commercial-use leasing to reclaim VAT on running costs (FAQ page; contract must be drafted for 'Commercial Use') [a][b]
- Acquiring the vessel outright at the end of the lease via Option to Purchase for a nominal fee [a][b]

**Conditions, montants, délais, frais**

- End-of-term Option to Purchase for a nominal fee, often about 1% of the vessel's value [a][b]
- Lease pricing, lease duration, deposit/LTV for leases: NOT revealed for this page [a]
- Other pages (not this one): typical marine finance broker fee 1.00% of loan amount; indicative up to 70% LTV on independent valuation [b]
- Other pages (not this one): standard yacht mortgages typically 5 to 7 years with ~25% balloon of original loan [a]
- Other pages (not this one): standard loans for vessels over about 20m [b]
- Security/ownership: under a lease the bank owns (buys) the boat; under a mortgage the client owns it and the bank holds a charge [a][b]
- Early termination of a lease requires buying the asset from the bank ahead of schedule; more involved than mortgage settlement (FAQ page) [a]; 'Yes, but it requires bank permission.' (FAQ page, question not shown) [b]

**Critères d'éligibilité**

- Not revealed by the results for this page [a]
- Implied scope: vessels bought in the Mediterranean; leasing common in France, Italy, Malta [a][b]
- VAT reclaim on running costs only if the lease is drafted for 'Commercial Use' not 'Private Pleasure Use' (FAQ page) [a]

**Types de prêteurs**

- Major French leasing banks [a][b]
- Major Italian leasing banks [a][b]

**Étapes du processus**

- Not revealed by the results. Only the structure is described: the bank buys the boat and leases it; at the end of the term the lessee can exercise an Option to Purchase for a nominal fee (~1% of value) [a][b]

**Géographie**

- Continental Europe: France, Italy, Malta (where leasing is common) [a][b]
- Mediterranean (vessels bought there) [b]
- EU waters (VAT/flexibility angle) [b]
- French and Italian leasing banks [a][b]

**Appels à l'action**

- Not revealed by the results for this page. Site-wide contact routes per seed: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp [seed]

**Questions fréquentes**

- **(FAQ page) Can a marine lease be used for commercial use / to reclaim VAT?** [a][b] Leasing for commercial use can allow VAT reclaim on running costs, but the lease contract must be specifically drafted for 'Commercial Use' rather than 'Private Pleasure Use'. Snippet [b] pairs this with the answer 'Yes, but it requires bank permission.' (exact question wording not shown).
- **(FAQ page) Can a marine lease be settled early?** [a] Early settlement is more involved than with a mortgage, because a lease termination involves buying the asset from the bank ahead of schedule.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (market-statement) Leasing is a common way to finance yachts in continental Europe, mainly France, Italy and Malta [a][b]
- (lender-relationship) Silver Oak works with major French and Italian leasing banks [a][b]
- (number) Option to Purchase at end of term for a nominal fee, often 1% of the value [a][b]
- (benefit) Leasing has historically offered significant VAT advantages and flexibility for owners navigating EU waters [b]
- (benefit) Commercial-use leases can allow VAT reclaim on running costs (FAQ page) [a][b]
- (fee) Typical marine finance broker fee 1.00% of loan amount (unspecified marine finance page, not target page) [b]
- (number) Indicative example up to 70% LTV on an independent valuation (unspecified marine finance page, not target page) [b]
- (number) Standard yacht mortgages typically 5 to 7 years with balloon of around 25% of original loan (yacht-finance-calculator case study) [a]
- (number) Standard loans for vessels over about 20m (yacht-mortgages page) [b]
- (positioning) Firm specialises in real estate debt solutions; not a high street mortgage broker; bespoke solution for larger, more complex real estate transactions [a]
- (absence) No testimonials, awards or credentials surfaced for this page [a][b][c]

_Notes d'extraction : Queries: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk marine lease finance yacht'; (c) standard, '"Silver Oak Capital" marine lease finance how it works' - (c) returned only generic shipping-lease articles (KKR, Reed Smith, etc.) and nothing about Silver Oak; ignored. H1 and meta description were not revealed; 'Marine Lease Finance' is the search-engine result title. Sectio…_

#### Pre-Construction Marine Finance

URL : <https://www.silveroakcapital.co.uk/pre-construction-marine-finance/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** NOT CONFIRMED - the search link title for the page is 'Pre-Construction Marine Finance' [a][b]; the H1 itself was not revealed  
**Meta description :** NOT REVEALED by search results

**Résumé.** Silver Oak Capital's page describes funding arranged before physical construction starts on a new-build vessel (usually a yacht or superyacht). The facility covers early costs - shipyard signing deposit, design and project-management fees, long-lead equipment ordered early, yard slot reservations - because a standard marine mortgage cannot be used while the asset does not legally exist yet. The firm says it specialises in this and provides the liquidity to fund shipyard stage payments; once the build starts the facility often rolls into stage-payment (construction) finance drawn in tranches. A separate /faq/ answer says pre-construction finance is typically interest only, with monthly interest serviced on funds drawn and capital repaid or refinanced into a mortgage on delivery. No loan sizes, rates, durations, timescales, lender counts, testimonials or CTAs for this page were revealed. Related marine pages add: export credit market for new builds, yachts typically over 20m, British/Cayman/BVI/Maltese registers, 1.00% broker fee and an old 'up to 70% LTV' indicative example (dated ~700 days old, possibly outdated).

**Sections repérées**

- **What pre-construction marine finance is (heading reconstructed, not confirmed)** — Funding arranged before physical construction starts on a new-build vessel, usually a yacht or superyacht [a]. The firm states it specialises in pre-construction marine finance and provides the liquidity to fund the shipyard stage payments during the build [b].
- **What the facility covers (heading reconstructed)** — Early costs such as the shipyard / signing deposit, design work and project-management fees, long-lead equipment ordered early, and yard slot reservations [a][b].
- **Why a standard marine mortgage cannot be used (heading reconstructed)** — Standard marine mortgages cannot be used because the asset (the boat) does not legally exist yet, so a different structure is required [a][b].
- **Transition into stage-payment / construction finance (heading reconstructed)** — Once the build starts, the pre-construction facility often rolls into stage-payment (construction) finance, where money is drawn in tranches as the build progresses [a][b].
- **Interest and repayment (from /faq/ page, not the target page)** — Pre-construction finance is typically interest only. The borrower services the monthly interest on the funds drawn, and the capital is either repaid or refinanced into a mortgage upon delivery of the vessel [a]; (b) independently confirms 'typically interest only'.
- **Context from related marine pages (not the target page)** — /marine-finance/ ('Boat Finance UK'): the firm can also use the export credit market to help fund a brand-new yacht build; boat finance for yachts typically over 20m in length; yachts financed are typically registered on the British, Cayman, BVI and Maltese registers [b]. /types-of-borrowing/ ('Wealth Management'): typical broker fee for marine finance of 1.00% of the loan amount [b]. An older marine finance page (~700 days old) lists 'Pre-build Payment Financing', 'Senior Secured Mortgage (Post-build)', a broker fee of 1.00% of the loan amount and an indicative example of up to 70% LTV, whic…

**Phrases verbatim (anglais)**

> [a] "funding arranged before physical construction starts on a new-build vessel (usually a yacht or superyacht)"
>
> [a] "The money covers early costs such as the shipyard deposit, design work, and long-lead equipment ordered early."
>
> [a] "The page says standard marine mortgages cannot be used because the asset (the boat) does not legally exist yet."
>
> [a] "Once the build starts, this pre-construction facility often rolls into stage-payment (construction) finance, where money is drawn in tranches as the build progresses."
>
> [a] "A separate FAQ page says pre-construction finance is typically interest only. You service the monthly interest on the funds drawn, and the capital is either repaid or refinanced into a mortgage upon delivery of the vessel."
>
> [a] "An older marine finance page, dated about 700 days ago, lists Pre-build Payment Financing, Senior Secured Mortgage (Post-build) and a broker fee of 1.00% of the loan amount. Its indicative example is up to 70% LTV, which may no longer reflect current terms."
>
> [b] "The firm says it specialises in pre-construction marine finance and provides the liquidity to fund the shipyard stage payments during the build."
>
> [b] "The facility typically pays early costs such as the signing deposit, design and project-management fees, long-lead equipment, and yard slot reservations. Once construction begins, it often rolls into stage-payment finance, with money drawn in tranches as the build progresses."
>
> [b] "standard marine mortgages cannot be used because the asset does not legally exist yet" (given in parentheses by the search tool, likely close to page wording)
>
> [b] "An FAQ answer says pre-construction finance is typically interest only."
>
> [b] "The marine finance page notes that the firm can also use the export credit market to help fund a brand-new yacht build."
>
> [b] "The firm says it offers boat finance for yachts typically over 20m in length. Yachts it finances are typically registered on the British, Cayman, BVI and Maltese registers."
>
> [b] "The Wealth Management page lists a typical broker fee for marine finance of 1.00% of the loan amount."
>
> [b] "A separate marine lease page describes new-build or stage-payment leasing, where the lessor funds the shipyard in stages as build milestones are reached."
>
> [b] "Some search results carry older metadata dates (one is about 1,600 days old)"
>
> [c] No Silver Oak Capital content returned; the tool stated: "I couldn't find any information about a company called 'Silver Oak Capital' in these results"
>
> [seed] navigation lists under Marine: "Marine / Boat Finance", "Yacht Mortgages", "Superyacht Finance", "Marine Lease Finance", "Pre-Construction Marine Finance"
>
> [seed] /introducers/: the firm "can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance"

**Produits et services cités**

- Pre-construction marine finance (funding before physical construction of a new-build yacht/superyacht) [a][b]
- Liquidity to fund shipyard stage payments during the build [b]
- Stage-payment (construction) finance drawn in tranches as the build progresses [a][b]
- Refinance of the facility into a (marine) mortgage upon delivery of the vessel [a, via /faq/]
- Export credit market funding for a brand-new yacht build [b, via /marine-finance/]
- Pre-build Payment Financing [a, older marine finance page]
- Senior Secured Mortgage (Post-build) [a, older marine finance page]
- Marine lease finance - new-build / stage-payment leasing where the lessor funds the shipyard in stages [b, via /marine-lease-finance/]

**Cas d'usage**

- Paying the shipyard signing deposit before construction starts [a][b]
- Funding design work and project-management fees [a][b]
- Ordering long-lead equipment early [a][b]
- Reserving a yard slot [b]
- Funding shipyard stage payments as build milestones are reached [b]
- Commissioning a new-build yacht or superyacht when a standard marine mortgage is not available because the vessel does not legally exist yet [a][b]

**Conditions, montants, délais, frais**

- Interest: typically interest only [a][b] (from /faq/ page)
- Interest serviced monthly on the funds drawn [a]
- Capital repaid or refinanced into a mortgage upon delivery of the vessel [a]
- Drawdown: in tranches as the build progresses once it rolls into stage-payment finance [a][b]
- Broker fee: 1.00% of the loan amount (older marine finance page [a] and /types-of-borrowing/ 'Wealth Management' page [b]) - may be outdated
- LTV: indicative example up to 70% LTV on an older marine finance page (~700 days old) [a] - 'may no longer reflect current terms'; no current LTV revealed
- Vessel size: boat finance typically for yachts over 20m in length [b, /marine-finance/]
- Registers: British, Cayman, BVI and Maltese [b, /marine-finance/]
- NOT REVEALED: loan sizes, interest rates, loan durations, arrangement timescales, security package for the pre-construction phase (e.g. refund guarantees / assignment of build contract), minimum deposit

**Critères d'éligibilité**

- No eligibility criteria for pre-construction finance were revealed by the search results
- Related: yachts typically over 20m in length [b, /marine-finance/]
- Related: vessels typically registered on the British, Cayman, BVI or Maltese registers [b, /marine-finance/]
- Search tool caveat [a]: 'Current rates, fees, and eligibility aren't confirmed by these results'

**Types de prêteurs**

- Not stated for this page in the search results
- Export credit market (for a brand-new yacht build) [b, /marine-finance/]
- Lessor funding the shipyard in stages (leasing alternative) [b, /marine-lease-finance/]
- No lender count was given in these results (seed records 300+/500+/700+/800+ claims on other pages, none on this page)

**Étapes du processus**

- Reconstructed from [a][b], order not confirmed as page wording:
- 1. Pre-construction facility is arranged before physical construction starts and funds early costs (signing deposit, design/project-management fees, long-lead equipment, yard slot reservation) [a][b]
- 2. Once construction begins, the facility often rolls into stage-payment (construction) finance, drawn in tranches as the build progresses [a][b]
- 3. Borrower services monthly interest on the funds drawn (interest only) [a, /faq/]
- 4. On delivery of the vessel, the capital is repaid or refinanced into a mortgage [a, /faq/]

**Géographie**

- Registers: British, Cayman, BVI, Maltese [b, /marine-finance/]
- UK (related page titled 'Boat Finance UK') [a][b]
- [seed] firm-level international coverage: United Kingdom, Western Europe, Middle East, United States - not confirmed on this page

**Appels à l'action**

- No call to action revealed by the search results for this page
- [seed] firm-wide contact routes: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **Is pre-construction marine finance interest only? (question wording reconstructed; answer from the /faq/ page per [a][b])** Pre-construction finance is typically interest only. You service the monthly interest on the funds drawn, and the capital is either repaid or refinanced into a mortgage upon delivery of the vessel. [a]
- **Why can't a standard marine mortgage be used for a new build? (question wording reconstructed)** Standard marine mortgages cannot be used because the asset does not legally exist yet, so a different structure is required. [a][b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning) The firm specialises in pre-construction marine finance [b]
- (capability) Provides the liquidity to fund the shipyard stage payments during the build [b]
- (capability) Can also use the export credit market to help fund a brand-new yacht build [b, /marine-finance/]
- (fee) Typical broker fee for marine finance of 1.00% of the loan amount [a][b, older pages]
- (ltv) Indicative example of up to 70% LTV on an older marine finance page (~700 days old), may be outdated [a]
- (eligibility) Boat finance typically for yachts over 20m in length [b, /marine-finance/]
- (eligibility) Yachts financed typically registered on the British, Cayman, BVI and Maltese registers [b, /marine-finance/]
- (terms) Pre-construction finance is typically interest only [a][b, /faq/]
- (absence) No testimonials, awards, lender counts, loan-size figures or timescales were revealed for this page

_Notes d'extraction : Direct fetch blocked; all content comes from the WebSearch tool's summaries of snippets, not from confirmed page HTML, so 'verbatim' entries are the tool's wording and may paraphrase the page. Section headings and FAQ question wordings are reconstructed. Query (c) (standard mode) returned zero Silver Oak Capital results - only generic yacht-finance industry pages and an unrelated 'Silver Oak Cell…_

#### Aviation Finance

URL : <https://www.silveroakcapital.co.uk/aviation-finance/>  
Confiance : medium · Recherches effectuées : 3

**H1 :** Aviation Finance (search-result title in [a] and [b]; H1 not directly observed)  
**Meta description :** Not revealed by any of the 3 searches.

**Résumé.** Silver Oak Capital's /aviation-finance/ page presents the firm (a London-based debt broker/adviser, not a lender) as an intermediary arranging aircraft finance. Per the search tool's summaries ([a],[b]), the page explains that most aircraft transactions are financed via two principal routes: (1) a secured loan where the borrower takes a facility from a bank secured by a mortgage over the aircraft, or (2) a lease, either an operating lease or a finance lease. It states the firm also provides finance for commercial aircraft. It lists a typical broker fee of 1.50% of the loan amount and indicative terms of up to 90% LTV, a 5-12 year term and quarterly amortising payments; a representative example shows a GBP 25 million loan at up to 90% LTV with a 30% balloon at a rate of 3.00% plus a margin (text truncated in the snippet). The page cites '300+ Lenders'. Search metadata indicates the indexed copy is ~700 days old. The page is part of an aviation cluster with sibling pages for aviation bridging loans, aviation finance & lease advisory and senior secured aircraft finance advisory, plus G650 and Falcon 900 case studies. Full page text, exact headings, FAQ and CTAs were not surfaced.

**Sections repérées**

- **Overview / how aircraft are financed (heading wording not observed)** — [a][b] Most aircraft transactions are financed through two principal means: a secured loan where the borrower incurs a facility from a bank, secured by a mortgage over the aircraft; or a lease, either an operating lease or a financing (finance) lease.
- **Commercial aircraft (heading wording not observed)** — [a] The firm says it provides finance for commercial aircraft.
- **Fees (heading wording not observed)** — [a][b] Typical broker fees for aviation finance: 1.50% of the loan amount.
- **Indicative terms / representative example (heading wording not observed)** — [b] Up to 90% LTV, 5-12 year term, quarterly amortising payments. [a] Representative example: GBP 25 million loan, up to 90% LTV, 30% balloon, rate shown as 3.00% plus a margin (snippet truncated after 'margin').
- **Lender network (heading wording not observed)** — [a] '300+ Lenders' cited in the aviation pitch.

**Phrases verbatim (anglais)**

> [a] "Most aircraft transactions are financed through two principle means – a secured loan where the borrower incurs a facility from a bank, secured by a mortgage over the aircraft."
>
> [a] "The other route is a lease, either an operating lease or a financing lease."
>
> [a] The firm also says it "provide[s] finance for commercial aircraft" (bracketed verb as rendered by the search summary).
>
> [a] "The page lists typical broker fees for aviation finance at 1.50% of the loan amount."
>
> [a] "One representative example on the page is a £25 million loan at up to 90% LTV with a 30% balloon, and the rate is shown as 3.00% plus a margin (the text cuts off there)."
>
> [a] "The firm claims 300+ Lenders in its aviation pitch."
>
> [a] "Silver Oak Capital describes itself as a London real estate debt broker."
>
> [a] "the aviation page's metadata shows it as about 701 days old"
>
> [b] "It describes two main routes, a bank loan secured by a mortgage over the aircraft or a lease, and it lists typical broker fees of 1.50% of the loan amount."
>
> [b] "It also gives indicative terms of up to 90% LTV, a 5–12 year term, and quarterly amortising payments."
>
> [b] "This page's metadata shows it was last indexed about 700 days ago, so the terms may be outdated."
>
> [b] (sibling /aviation-bridging-loans/) "Page says these are short-term, faster than traditional finance, and used to buy new or used aircraft. It notes traditional aircraft finance usually takes 4–8 weeks."
>
> [b] (sibling /aviation-finance-lease-advisory/) "Explains finance leases, where the lessor buys the aircraft and the lessee pays rent, and notes wide-body aircraft generally carry lower LTVs."
>
> [b] (sibling /senior-secured-aircraft-finance-advisory/) "Describes this as the lowest-risk form of aircraft lending, backed by a first-ranking mortgage. It notes that aircraft aged 20–25 years are harder and more expensive to finance."
>
> [b] (/faq/) "The FAQ page gives timelines of 4–8 weeks for simple deals and 8–12 weeks for complex ones."
>
> [a] (case study G650) "A separate case study describes a $40 million loan at 80% LTV, 10-year term, and a fee of 1.5%."
>
> [b] (case study G650) "A Gulfstream G650 deal was reported at $40m and 80% LTV over 10 years."
>
> [a] (case study Falcon 900) "Another describes a private jet loan at 70% LTV with a 4.45% fixed rate over 72 months."
>
> [b] (case study Falcon 900) "A Falcon 900 deal was reported at 70% LTV, a 4.45% fixed rate, and a 72-month term."
>
> [c] (Spear's adviser profile, spears500.com/adviser/22953/jimmy-baillie) "With an extensive network of more than 800 lenders across the world, Silver Oak arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East."
>
> [c] (Spear's adviser profile) the firm "advise[s] on raising debt for luxury assets, short-term bridging loans, and marine and aviation finance."
>
> [seed] navigation entry: "Aviation Finance (secured loan, operating lease, finance lease)"; sibling entries "Aviation Bridging Loans", "Senior Secured Aircraft Finance Advisory".
>
> [seed] /introducers/: the firm "can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance".

**Produits et services cités**

- Aviation finance brokerage / debt advisory (intermediary, not a lender) [a][b][c]
- Secured aircraft loans (bank facility secured by a mortgage over the aircraft) [a][b]
- Aircraft operating leases [a][seed]
- Aircraft finance leases [a][b][seed]
- Finance for commercial aircraft [a]
- Aviation bridging loans (sibling page) [b]
- Aviation finance & lease advisory (sibling page) [b]
- Senior secured aircraft finance advisory (sibling page) [a][b]

**Cas d'usage**

- Financing an aircraft purchase via a bank loan secured on the aircraft [a][b]
- Leasing an aircraft (operating or finance lease) instead of borrowing [a][b]
- Commercial aircraft finance [a]
- Private jet finance (case studies: Gulfstream G650, Falcon 900) [a][b]
- Buying new or used aircraft quickly via a bridging loan (sibling page) [b]

**Conditions, montants, délais, frais**

- Broker fee: 1.50% of the loan amount (typical, aviation) [a][b]
- LTV: up to 90% [a][b]
- Term: 5-12 years [b]
- Repayment profile: quarterly amortising payments [b]
- Representative example: GBP 25m loan, up to 90% LTV, 30% balloon, rate 3.00% plus a margin (truncated) [a]
- Security: mortgage over the aircraft (secured loan route) [a][b]; first-ranking mortgage for senior secured lending (sibling page) [b]
- Timescale: traditional aircraft finance usually takes 4-8 weeks (sibling /aviation-bridging-loans/) [b]; FAQ: 4-8 weeks simple deals, 8-12 weeks complex [b]
- Case study G650: USD 40m loan, 80% LTV, 10-year term, fee 1.5% [a][b]
- Case study Falcon 900: 70% LTV, 4.45% fixed rate, 72 months [a][b]
- Wide-body aircraft generally carry lower LTVs (sibling lease advisory page) [b]
- Aircraft aged 20-25 years are harder and more expensive to finance (sibling senior secured page) [b]

**Critères d'éligibilité**

- Not explicitly stated for /aviation-finance/ in any result.
- Indirect, from sibling pages [b]: older aircraft (20-25 years) are harder and more expensive to finance; wide-body aircraft attract lower LTVs.

**Types de prêteurs**

- Banks (secured loan route: 'a facility from a bank') [a]
- Lessors (lease route: lessor buys the aircraft, lessee pays rent) [a][b]
- Network cited as '300+ Lenders' on the aviation pitch [a]; '500+' on LinkedIn [a]; 'more than 800 lenders across the world' on Spear's profile [c]

**Étapes du processus**

- Not revealed for this page. Only timing indications: traditional aircraft finance usually 4-8 weeks [b]; FAQ 4-8 weeks simple / 8-12 weeks complex [b].

**Géographie**

- London-based firm [a]
- Spear's profile [c]: arranges debt for transactions in the UK, Western Europe, Southern Africa and the Middle East; network 'across the world'
- Case studies denominated in USD (G650) and GBP (representative example) [a][b]
- No aviation-specific jurisdiction statement observed on the page itself

**Questions fréquentes**

- **No FAQ content for /aviation-finance/ was surfaced by the searches.** Related timing from the site FAQ page [b]: 4-8 weeks for simple deals, 8-12 weeks for complex ones.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (fee) Typical broker fee for aviation finance is 1.50% of the loan amount
- (term) Up to 90% LTV available
- (term) 5-12 year loan terms
- (term) Quarterly amortising payments
- (example) Representative example: GBP 25m loan, up to 90% LTV, 30% balloon, 3.00% plus margin
- (credential/number) 300+ Lenders (aviation pitch)
- (promise/scope) Provides finance for commercial aircraft
- (case study) Case study: USD 40m loan, 80% LTV, 10-year term, 1.5% fee (G650)
- (case study) Case study: private jet loan at 70% LTV, 4.45% fixed, 72 months (Falcon 900)
- (credential/number (external, …) More than 800 lenders across the world (Spear's profile)
- (recognition) Spear's 500 adviser profile for Jimmy Baillie exists
- (caveat (search tool)) Indexed copy of the page is ~700 days old; rates/fees may be out of date

_Notes d'extraction : Searches: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk aviation finance aircraft loan'; (c) standard, '"Silver Oak Capital" aviation finance lenders'. (c) returned nothing from the page itself; only a Spear's adviser profile mentioning aviation finance, the rest unrelated (White Oak, Silver Point etc. ignored). Core facts (two financing routes, 1.50% fee, up to 90% LTV, 300…_

#### Aviation Bridging Loans

URL : <https://www.silveroakcapital.co.uk/aviation-bridging-loans/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** Aviation Bridging Loans  

**Résumé.** Silver Oak Capital's aviation bridging loans page (as surfaced only through search-engine summaries, never fetched directly) presents aircraft bridging loans as a well-established, short-term (0-24 months) and more expensive form of aircraft finance, used when a buyer needs fast funds for a time-limited opportunity such as an open-market aircraft sale, with a longer-term facility (up to 25 years) arranged afterwards. The firm states it has worked on a number of aircraft bridging loans over the years. Search results also surfaced related FAQ-style statements (LTV depends on borrower profile and aircraft; newer popular models may reach +75% LTV; bridging can refinance an existing aircraft purchase if the asset is strong and the borrower low-risk) and two non-bridging aviation case studies (Falcon 900: 70% LTV, 4.45% fixed, 72 months; G650: $40m, 80% LTV, 10 years). No aircraft bridging rates, fees, minimum loan size, calls to action, H1/meta text or process steps were revealed.

**Sections repérées**

- **Aviation Bridging Loans (page title as shown in search results; H1 not confirmed)** — Silver Oak says it has worked on a number of aircraft bridging loans over the years and describes them as a well-established form of aircraft finance. [a]
- **Why use an aircraft bridging loan (inferred section; heading not revealed)** — Bridging loans let a buyer move faster than conventional mortgage finance, suiting time-limited purchases such as open-market aircraft sales. They are used when the borrower needs fast access to funds, with a longer-term facility usually arranged afterwards. [a][b]
- **Term and cost versus long-term aircraft finance (inferred section; heading not revealed)** — Bridging loans are short-term, between 0 and 24 months, compared with long-term aircraft finance that can run up to 25 years. Aircraft bridging loans are more expensive than a longer-term aircraft mortgage, partly because of the higher lender risk. [a][b]
- **FAQ-style statements surfaced (source page ambiguous: /faq/ or an aviation page FAQ block)** — LTV depends on the borrower's profile and the aircraft; newer, more popular models are likely to secure higher LTV loans (+75%). Bridging loans can refinance existing aircraft purchases provided the underlying asset is strong and the borrower is seen as low risk. Simple senior secured aircraft finance in a familiar jurisdiction can take 4-8 weeks (not stated for bridging). [b]
- **Related aviation pages and case studies (context, not page text)** — Introducer page lists aviation bridging loans alongside senior secured aircraft finance, operating leases and finance leases; the senior secured page calls that product the lowest-risk form of aircraft finance. Case studies: Falcon 900 (70% LTV, 4.45% fixed, 72 months) and G650 ($40m, 80% LTV, 10 years), neither a bridging loan; also 'Top Aviation Firms' case-study page (content not revealed). [a][b][seed]

**Phrases verbatim (anglais)**

> [a] "Silver Oak says it has worked on a number of aircraft bridging loans over the years." (search tool summary of page text)
>
> [a] "It describes these loans as a well-established form of aircraft finance." (search tool summary of page text)
>
> [a] "Bridging loans are typically short-term and cost more. The page gives a term of between 0 and 24 months, compared with long-term aircraft finance that can run up to 25 years." (search tool summary of page text)
>
> [a] "The page says aircraft bridging loans are more expensive than longer term aircraft mortgage." (search tool summary of page text)
>
> [a] "They are usually used when a buyer needs fast funds for a time-limited opportunity, such as an open market sale, with longer-term financing arranged afterward." (search tool summary of page text)
>
> [a] "A case study for a Falcon 900 jet describes an aircraft loan at 70% LTV with a 4.45% fixed rate and 72-month term. This is a term loan, not a bridging loan." (about /case-studies/aircraft-loan-falcon-900/)
>
> [a] "A LinkedIn profile lists aviation among the firm's services, alongside development, bridging, and residential and commercial mortgages."
>
> [a] "A 2026 Commercial Property Awards listing describes the firm as offering independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance. Its lender network is given as 800+, while other listings say 300+ or 500+, so the figures vary by source."
>
> [b] "The main aviation bridging page presents these loans as a way to move faster than conventional mortgage finance, which suits time-limited purchases such as open-market aircraft sales." (search tool summary of page text)
>
> [b] "Bridging loans are generally used in aviation transactions when the borrower needs fast access to funds, with a longer-term facility usually arranged afterward." (search tool summary of page text)
>
> [b] "The firm says bridging loans last between 0 and 24 months, compared with up to 25 years for long-term finance. It also says aircraft bridging loans cost more than long-term aircraft mortgages, partly because of the higher lender risk." (search tool summary of page text)
>
> [b] "The FAQ says loan-to-value depends on the borrower's profile and the aircraft. Newer, more popular models are likely to secure higher LTV loans (+75%)." (FAQ source ambiguous: /faq/ appears in result links, but this may be an FAQ block on an aviation page)
>
> [b] "The FAQ says bridging loans can refinance existing aircraft purchases, provided the underlying asset is strong and the borrower is seen as low risk." (same FAQ source ambiguity)
>
> [b] "The introducer page lists aviation bridging loans alongside senior secured aircraft finance, operating leases and finance leases. The senior secured page describes that product as the lowest-risk form of aircraft finance."
>
> [b] "The case studies include a Falcon 900 loan at 70% LTV with a 4.45% fixed rate over 72 months, and a G650 financing of $40m at 80% LTV over 10 years. Neither is a bridging loan."
>
> [b] "The results don't include the firm's bridging rates or fees for aircraft. The FAQ also gives timelines for senior secured aircraft finance, not for bridging: for a simple transaction in a familiar jurisdiction, aircraft finance can take 4-8 weeks."
>
> [c] "The search didn't turn up anything specific to Silver Oak Capital's aviation bridging loans" (search tool statement; query returned generic bridging-loan pages)
>
> [c] "A LinkedIn post from Joe Berk's account reports that Silver Oak Capital has successfully arranged a £4,000,000 bridging loan to refinance a prime residential property in Kensington. That is a property deal, not aviation."
>
> [c] "A separate profile notes that a UK adviser with a network of over 800 lenders covers marine and aviation finance." (result link: spears500.com/adviser/22953/jimmy-baillie; the search tool said it could not clearly tie this to Silver Oak, but the seed identifies Jimmy Baillie as Silver Oak's founder)
>
> [seed] Navigation, Aviation group: "Aviation Finance (secured loan, operating lease, finance lease)", "Aviation Bridging Loans", "Senior Secured Aircraft Finance Advisory"
>
> [seed] /introducers/: "can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance"
>
> [seed] Aviation case studies listed: /case-studies/g650/, /case-studies/aircraft-loan-falcon-900/, /case-studies/top-aviation-firms/

**Produits et services cités**

- Aviation bridging loans (aircraft bridging loans) [a][b][seed]
- Senior secured aircraft finance advisory (described as the lowest-risk form of aircraft finance) [b][seed]
- Aviation finance: secured loan, operating lease, finance lease [b][seed]
- Longer-term aircraft mortgage / long-term aircraft finance up to 25 years, arranged after the bridge [a][b]
- Refinancing of existing aircraft purchases via bridging [b, FAQ]

**Cas d'usage**

- Fast access to funds for a time-limited opportunity, e.g. an open-market aircraft sale [a][b]
- Moving faster than conventional (aircraft) mortgage finance allows [b]
- Short-term bridge until a longer-term facility is arranged afterwards [a][b]
- Refinancing an existing aircraft purchase, if the underlying asset is strong and the borrower is seen as low risk [b, FAQ]

**Conditions, montants, délais, frais**

- Term: between 0 and 24 months (page wording as summarised by search tool) [a][b]
- Comparison: long-term aircraft finance can run up to 25 years [a][b]
- Cost: aircraft bridging loans are more expensive than a longer-term aircraft mortgage, partly because of higher lender risk [a][b]
- LTV: depends on the borrower's profile and the aircraft; newer, more popular models are likely to secure higher LTV loans (+75%) [b, FAQ]
- Security: the aircraft (implied by LTV and 'underlying asset' wording); no explicit security clause revealed [b]
- Rates and fees for aircraft bridging: NOT revealed by any result [b]
- Minimum / maximum loan size for aircraft bridging: NOT revealed
- Timescale: 4-8 weeks for a simple senior secured aircraft finance transaction in a familiar jurisdiction (stated for senior secured finance, NOT for bridging) [b, FAQ]
- Reference deals (non-bridging): Falcon 900 at 70% LTV, 4.45% fixed, 72 months; G650 $40m at 80% LTV over 10 years [a][b]

**Critères d'éligibilité**

- LTV offered depends on the borrower's profile and the aircraft [b, FAQ]
- Newer, more popular aircraft models are more likely to secure higher LTV (+75%) [b, FAQ]
- Refinancing via bridging requires a strong underlying asset and a borrower seen as low risk [b, FAQ]
- No stated nationality, residency, minimum net worth or minimum loan criteria revealed for this page

**Types de prêteurs**

- Not specified on this page in any result
- Firm-level claim: lender network of 800+ (Commercial Property Awards 2026 listing; Spear's adviser profile 'over 800 lenders'), versus 300+ or 500+ in other listings [a][c][seed]
- Firm-level: 'independent, whole-of-market advice' across bridging, development, commercial, buy-to-let, marine and aviation finance (awards listing) [a]

**Étapes du processus**

- Bridging loan arranged to provide fast funds for a time-limited purchase (e.g. open-market sale) [a][b]
- Longer-term facility (aircraft mortgage, up to 25 years) usually arranged afterwards to repay/replace the bridge [a][b]
- No further application, valuation, documentation or completion steps were revealed for this page

**Géographie**

- Not stated for this page in any result
- Firm-level: London, England (Nextdoor listing 'Debt Advisory - London, England') [a]
- Firm-level: UK adviser (Spear's profile) [c]
- FAQ mention of 'a familiar jurisdiction' implies aircraft finance across multiple jurisdictions [b]
- Seed: international coverage United Kingdom, Western Europe, Middle East, United States; offices London, Monaco, Dubai, Cape Town [seed]

**Appels à l'action**

- Not revealed by any result for this page
- Seed (site-wide): enquiry form, email enquiry@silveroakcapital.co.uk, phone +44 207 459 4440, WhatsApp [seed]

**Questions fréquentes**

- **What loan-to-value can be obtained on aircraft finance / bridging?** LTV depends on the borrower's profile and the aircraft; newer, more popular models are likely to secure higher LTV loans (+75%). [b] Source page ambiguous (/faq/ or an FAQ block on an aviation page).
- **Can a bridging loan refinance an existing aircraft purchase?** Yes, provided the underlying asset is strong and the borrower is seen as low risk. [b] Same source ambiguity.
- **How long does aircraft finance take?** For a simple transaction in a familiar jurisdiction, aircraft finance can take 4-8 weeks; stated for senior secured aircraft finance, not bridging. [b]
- **How do aircraft bridging loans compare with long-term aircraft finance?** Bridging: 0-24 months and more expensive (higher lender risk); long-term aircraft finance: up to 25 years. [a][b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (experience / track record [a]) Silver Oak has worked on a number of aircraft bridging loans over the years
- (product positioning [a]) Aircraft bridging loans are a well-established form of aircraft finance
- (number / term [a][b]) Bridging term 0-24 months versus up to 25 years for long-term aircraft finance
- (pricing statement [a][b]) Aircraft bridging loans cost more than long-term aircraft mortgages, partly because of higher lender risk
- (number / LTV [b, FAQ]) Newer, more popular aircraft models are likely to secure higher LTV loans (+75%)
- (timescale (not bridging) [b, …) Simple senior secured aircraft finance in a familiar jurisdiction can take 4-8 weeks
- (case study [a][b]) Falcon 900 aircraft loan: 70% LTV, 4.45% fixed rate, 72-month term (term loan, not bridging)
- (case study [b]) G650 financing: $40m at 80% LTV over 10 years (not bridging)
- (number / contradiction across…) Lender network of 800+ (Commercial Property Awards 2026 listing; Spear's adviser profile 'over 800 lenders'); other listings state 300+ or 500+
- (positioning (Commercial Prope…) Independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance
- (product positioning (senior s…) Senior secured aircraft finance is the lowest-risk form of aircraft finance
- (recognition (case-study URL s…) Silver Oak Capital added to Spear's 500 list for 2022
- (deal claim, property not avia…) Silver Oak arranged a £4,000,000 bridging loan to refinance a prime residential property in Kensington (LinkedIn post, Joe Berk)
- (awards / recognition [a]) Silver Oak Capital listed in Commercial Property Awards 2026 (awards.propertyweek.com organisation node)

_Notes d'extraction : CAVEATS: (1) All 'verbatim' entries tagged [a]/[b]/[c] are the search tool's own summary sentences, not confirmed page text; the task required quoting what the tool stated. (2) 'Aviation Bridging Loans' is the result-link title in [a] and [b]; whether it is the exact <title> or H1 is unconfirmed; meta description not revealed, so metaDescription omitted. (3) The lower bound '0 months' in '0 and 2…_

#### Aircraft Finance Advisory

URL : <https://www.silveroakcapital.co.uk/senior-secured-aircraft-finance-advisory/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Service page for Silver Oak Capital's senior secured aircraft finance advisory. Search results (a) and (b) both returned the page under the title 'Aircraft Finance Advisory' but only in truncated/summarised form. According to the search tool's summaries, the page describes senior secured aircraft finance as a loan where the borrower pledges the aircraft as first-ranking security, presents it as the lowest-risk form of aircraft finance sitting at the top of the capital stack, lists lender types (commercial banks, specialist aviation lenders, institutional lenders, private credit funds), says cost depends on aircraft age and type, borrower financial standing and how the aircraft is used, notes that older aircraft (roughly 20 to 25 years old) are harder and more expensive to finance, and lists uses as acquisitions, refinancing and debt restructuring. Related aviation pages surfaced: /aviation-finance/, /aviation-finance-lease-advisory/, /aviation-operating-lease-finance-advisory/, /case-studies/aircraft-loan-falcon-900/ (70% LTV, 4.45% fixed, 72 months, Dubai-based client) and /case-studies/top-aviation-firms/. Age-based LTV bands, 3-12 year terms and 4-12 week timelines were attributed by the search tool to 'the FAQ page', not confirmed as text of the target page. Search (c) returned no Silver Oak Capital content at all. No H1, meta description, literal page sentences, fees, process steps, testimonials or calls to action were revealed. The seed file contains no first-pass snippet for this path.

**Sections repérées**

- **What senior secured aircraft finance is (inferred from search summary [a][b])** — A loan where the borrower pledges the aircraft as first-ranking security. Presented as the lowest-risk form of aircraft finance, sitting at the top of the capital stack. Heading wording not revealed.
- **Who lends (inferred from search summary [a][b])** — Commercial banks, specialist aviation lenders, institutional lenders, and private credit funds. Heading wording not revealed.
- **What drives the cost (inferred from search summary [a])** — The aircraft's age and type, the borrower's financial standing, and how the aircraft is used. Older aircraft, roughly 20 to 25 years old, are harder and more expensive to finance. Heading wording not revealed.
- **Uses (inferred from search summary [a])** — Acquisitions, refinancing, and debt restructuring. Heading wording not revealed.

**Phrases verbatim (anglais)**

> [a] Page title as listed by the search tool: "Aircraft Finance Advisory"
>
> [a] "It describes senior secured aircraft finance as a loan where the borrower pledges the aircraft as first-ranking security, and it presents this as the lowest-risk form of aircraft finance, sitting at the top of the capital stack" (search tool summary, not literal page text)
>
> [a] "Lenders include commercial banks, specialist aviation lenders, institutional lenders, and private credit funds" (search tool summary)
>
> [a] "The page also says the cost depends on factors such as the aircraft's age and type, the borrower's financial standing, and how the aircraft is used." (search tool summary)
>
> [a] "It notes that older aircraft, roughly 20 to 25 years old, are harder and more expensive to finance" (search tool summary)
>
> [a] "Uses include acquisitions, refinancing, and debt restructuring" (search tool summary)
>
> [a] Related page /aviation-finance/: "Its aviation finance page describes secured bank loans and leases as the two main routes" (search tool summary)
>
> [a] Related page /case-studies/aircraft-loan-falcon-900/: "reports a deal at 70% loan-to-value with a 4.45% fixed rate over 72 months" (search tool summary)
>
> [a] "The site's dates and 'age' metadata are inconsistent, so the current terms shown on these pages may not be up to date." (search tool caveat)
>
> [b] "The advisory page describes senior secured lending as the lowest-risk form of aircraft finance, sitting at the top of the capital stack. Lenders include commercial banks, specialist aviation lenders, institutional lenders, and private credit funds." (search tool summary)
>
> [b] Attributed to the FAQ page, not the target page: "loan-to-value ratios depend on age, with younger aircraft (0-5 years) potentially reaching 85%, and older aircraft (12-20 years) often capped at 40-55%. Loan terms usually run three to twelve years." (search tool summary)
>
> [b] Attributed to the FAQ page, not the target page: "a simple transaction in a familiar jurisdiction could take 4-8 weeks, while complex deals may need 8-12 weeks." (search tool summary)
>
> [b] Related case study: "A Falcon 900 case study reports financing at 70% LTV with a 4.45% fixed rate over a 72-month term for a Dubai-based client." (search tool summary)
>
> [b] "The site also covers operating leases, finance leases, and aviation bridging loans." (search tool summary)
>
> [b] "The advisory page was indexed about 213 days ago, and the Falcon 900 case study about 37 days ago" (search tool metadata, relative to 2026-10-29)
>
> [c] "The search didn't turn up anything about Silver Oak Capital. None of the results mention the firm" (search tool summary; results were US Airways SEC filings, AFME paper, AIN, Aircraft Value News, White Oak/CIT - all unrelated)
>
> [seed] Navigation lists the Aviation service group as: "Aviation Finance (secured loan, operating lease, finance lease)", "Aviation Bridging Loans", "Senior Secured Aircraft Finance Advisory"
>
> [seed] /introducers/ snippet: the firm "can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance"

**Produits et services cités**

- Senior secured aircraft finance advisory (loan secured by first-ranking security over the aircraft) [a][b]
- Aircraft acquisition finance [a]
- Aircraft refinancing [a]
- Aircraft debt restructuring [a]
- Related on site: aviation finance via secured bank loans and leases [a]
- Related on site: aircraft operating lease finance (/aviation-operating-lease-finance-advisory/) [b]
- Related on site: aviation finance lease advisory (/aviation-finance-lease-advisory/) [a][b]
- Related on site: aviation bridging loans [b][seed]

**Cas d'usage**

- Aircraft acquisitions [a]
- Refinancing an existing aircraft loan [a]
- Debt restructuring [a]
- Case study context: Falcon 900 loan for a Dubai-based client at 70% LTV [a][b]

**Conditions, montants, délais, frais**

- Security: first-ranking security over the aircraft (senior, top of the capital stack) [a][b]
- Cost drivers: aircraft age and type, borrower financial standing, how the aircraft is used [a]
- Aircraft aged roughly 20-25 years: harder and more expensive to finance [a]
- Case study (Falcon 900, separate page): 70% LTV, 4.45% fixed rate, 72-month term [a][b]
- Attributed by search tool to the FAQ page (not confirmed on target page): LTV up to 85% for aircraft 0-5 years old; 40-55% cap for aircraft 12-20 years old [b]
- Attributed by search tool to the FAQ page (not confirmed on target page): loan terms usually 3 to 12 years [b]
- Attributed by search tool to the FAQ page (not confirmed on target page): timescale 4-8 weeks for a simple transaction in a familiar jurisdiction, 8-12 weeks for complex deals [b]
- Fees: not revealed by any result
- Minimum/maximum loan size: not revealed for this page (seed: firm generally focuses on transactions upwards of GBP 500,000 per /lenders/)

**Critères d'éligibilité**

- Borrower financial standing is a pricing/eligibility factor [a]
- Aircraft age and type affect availability and cost; aircraft roughly 20-25 years old are harder to finance [a]
- Aircraft usage (how the aircraft is used) is a factor [a]
- No explicit eligibility list, jurisdiction restrictions or borrower types were revealed for this page

**Types de prêteurs**

- Commercial banks [a][b]
- Specialist aviation lenders [a][b]
- Institutional lenders [a][b]
- Private credit funds [a][b]

**Géographie**

- Case study client Dubai-based (Falcon 900, separate page) [b]
- 'Familiar jurisdiction' vs complex/other jurisdictions affects timescale (attributed to FAQ page) [b]
- No geography stated for the target page itself; seed: firm covers UK, Western Europe, Middle East, United States

**Questions fréquentes**

- **What loan-to-value can be achieved on an aircraft? (attributed by search tool to the site's FAQ page, not confirmed on target page)** Depends on age: younger aircraft (0-5 years) potentially up to 85%; older aircraft (12-20 years) often capped at 40-55%. [b]
- **How long are aircraft loan terms? (attributed by search tool to the site's FAQ page)** Usually three to twelve years. [b]
- **How long does an aircraft financing take? (attributed by search tool to the site's FAQ page)** 4-8 weeks for a simple transaction in a familiar jurisdiction; 8-12 weeks for complex deals. [b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (positioning) Senior secured aircraft finance is presented as the lowest-risk form of aircraft finance, sitting at the top of the capital stack [a][b]
- (product-definition) The borrower pledges the aircraft as first-ranking security [a]
- (lender-network) Lenders include commercial banks, specialist aviation lenders, institutional lenders, and private credit funds [a][b]
- (pricing-factor) Cost depends on aircraft age and type, borrower financial standing, and how the aircraft is used [a]
- (market-statement) Older aircraft, roughly 20 to 25 years old, are harder and more expensive to finance [a]
- (use-case) Uses include acquisitions, refinancing, and debt restructuring [a]
- (case-study-number) Falcon 900 case study (separate page): 70% LTV, 4.45% fixed rate, 72-month term, Dubai-based client [a][b]
- (terms-from-related-page) LTV up to 85% (0-5 yr aircraft), 40-55% (12-20 yr aircraft); terms 3-12 years; 4-8 or 8-12 week timelines - attributed by search tool to the FAQ page [b]
- (metadata) Target page indexed about 213 days before 2026-10-29; search tool warns site date/age metadata is inconsistent [a][b]
- (absence) No lender-count figure, testimonial, award, credential or guarantee was revealed for this page

_Notes d'extraction : Seed file has no 'snippetsFromFirstPass' entry for this path; only navigation context applies. The search tool returned paraphrased summaries rather than literal snippets, so the 'verbatim' entries quote the tool's wording exactly but are NOT confirmed page sentences. H1 and meta description were not revealed (title tag appears to be 'Aircraft Finance Advisory'). Contradiction/ambiguity: search (…_

#### Lombard Loans UK

URL : <https://www.silveroakcapital.co.uk/lombard-loan-advisory/>  
Confiance : medium · Recherches effectuées : 3


**Résumé.** Service page of Silver Oak Capital (London debt advisory) describing Lombard lending: borrowing against liquid assets (bonds, equities, cash, mutual funds, ETFs) while retaining ownership of the holdings and continuing to benefit from capital appreciation, dividends and income. Search snippets reveal indicative LTV ranges by collateral type (bonds 70-90%, equities 50-70%, cash 90-100%), a statement that these loans suit short- to medium-term needs rather than long-term ones, and a claim of access to a network of hundreds of lenders including private banks. No fees, rates, loan sizes, timescales, process steps, H1 or meta description were revealed by the searches. The seed file held no snippet for this page. Page indexed title: 'Lombard Loans UK'; the search tool noted the page was last indexed ~213 days before 2026-10-29.

**Sections repérées**

- **Overview — what a Lombard loan is (heading reconstructed, not confirmed)** — Lombard lending is described as a way to borrow against liquid assets while the borrower keeps ownership of the holdings. "Lombard loans enable the borrower to access short-term liquidity while retaining ownership of their assets." Borrowers can benefit from capital appreciation, dividends and income from their assets while still accessing liquidity, without having to sell their holdings. [a][b]
- **Bonds as collateral (heading reconstructed)** — "Bonds are a common choice of collateral for Lombard loans due to their predictable cash flow. Lenders generally offer an LTV of between 70–90% on bonds" [a]
- **Equities as collateral (heading reconstructed)** — "Loan-to-value ratios on equity-backed loans are slightly lower than those on bonds, roughly between 50–70%." [a]
- **Cash as collateral (heading reconstructed)** — "Loan-to-value ratios associated with cash loans are very high, typically between 90–100%." [a]
- **Mutual funds and ETFs (heading reconstructed)** — Listed as accepted collateral; no LTV range revealed in results. [b]
- **Term suitability (heading reconstructed)** — The page says these loans suit short- to medium-term needs more than long-term ones. [a][b]
- **Lender network (heading reconstructed)** — The firm says it has access to a network of hundreds of lenders, including private banks. [a, search-tool summary]

**Phrases verbatim (anglais)**

> [a] "Bonds are a common choice of collateral for Lombard loans due to their predictable cash flow. Lenders generally offer an LTV of between 70–90% on bonds"
>
> [a] "Loan-to-value ratios on equity-backed loans are slightly lower than those on bonds, roughly between 50–70%."
>
> [a] "Loan-to-value ratios associated with cash loans are very high, typically between 90–100%."
>
> [a] "Lombard loans enable the borrower to access short-term liquidity while retaining ownership of their assets."
>
> [a] (search-tool summary, not confirmed verbatim) "The firm says it has access to a network of hundreds of lenders, including private banks."
>
> [a] (search-tool summary) "better suited to short or medium-term needs"
>
> [a] (contact page) "Silver Oak Capital is a debt advisory firm located in London, UK"; phone "+44 207 459 4440"; email "enquiry@silveroakcapital.co.uk"
>
> [b] (search-tool summary of target page) "describes Lombard lending as a way to borrow against liquid assets, with the borrower keeping ownership of the holdings. Borrowers can benefit from capital appreciation, dividends, and income from their assets while still accessing liquidity, without having to sell their holdings."
>
> [b] (search-tool summary of target page) "about 70–90% for bonds, roughly 50–70% for equities, and 90–100% for cash. Mutual funds and ETFs are also listed as collateral."
>
> [b] (search-tool summary of target page) "The page says these loans suit short- to medium-term needs more than long-term ones."
>
> [b] (from /faq/, not the target page) "Lombard loans can be secured against cash, bonds, mutual funds, ETFs, and equities. If collateral value falls, the lender can ask the borrower to top up security, or the borrower can reduce the loan-to-value ratio by partially repaying."
>
> [b] (from /single-stock-lending-advisory/, not the target page) "large-cap, liquid shares may support LTVs of up to 60%, while smaller or illiquid stocks may reach only about 20%."
>
> [b] (search-tool note) "The search results don't include a Silver Oak fee schedule or a formal eligibility checklist"
>
> [c] (LinkedIn, not the target page) "specialist debt advisory firm providing tailored funding solutions"; "recently arranged a £1,139,000 revolving credit facility for a private client"
>
> [seed] No snippet for /lombard-loan-advisory/ in seed.json; the page is listed under services group 'Securities and alternative' alongside Single Stock Lending Advisory, Crypto Bridging Advisory, Bitcoin Loans Advisory, Art Finance Advisory.

**Produits et services cités**

- Lombard loan advisory (securities-backed lending against liquid assets)
- Lending against bonds
- Lending against equities / equity portfolios
- Lending against cash deposits
- Lending against mutual funds and ETFs
- Sibling services on the site: Single Stock Lending Advisory, Jewellery / Diamond / Gemstone loans advisory (new URL seen in [b]), Crypto Bridging Advisory, Bitcoin Loans Advisory, Art Finance Advisory (seed)

**Cas d'usage**

- Access short-term liquidity without selling investment holdings [a][b]
- Retain ownership of assets and continue to benefit from capital appreciation, dividends and income while borrowing [b]
- Short- to medium-term funding needs (page says less suited to long-term needs) [a][b]

**Conditions, montants, délais, frais**

- LTV on bonds: 70–90% ("Lenders generally offer an LTV of between 70–90% on bonds") [a][b]
- LTV on equity-backed loans: roughly 50–70%, "slightly lower than those on bonds" [a][b]
- LTV on cash-backed loans: typically 90–100%, described as "very high" [a][b]
- Mutual funds and ETFs accepted as collateral; LTV for these NOT stated in results [b]
- Duration: suited to short- or medium-term needs rather than long-term [a][b]
- Security: liquid financial assets (bonds, equities, cash, mutual funds, ETFs); borrower retains ownership [a][b]
- Margin mechanics (from /faq/): if collateral value falls, lender may require top-up of security, or borrower can partially repay to reduce LTV [b]
- NOT revealed by searches: interest rates, arrangement/broker fees, minimum or maximum loan size, timescales, currencies, jurisdictions of custody
- Firm-level context from seed (not this page): generally focuses on transactions upwards of £500,000; fee structures vary by page (see seed feesClaims)

**Critères d'éligibilité**

- No formal eligibility checklist revealed by the searches [b notes this explicitly]
- Implied requirement: ownership of eligible liquid collateral (cash, bonds, mutual funds, ETFs, equities) [b, via /faq/]
- Seed context (not this page): firm serves private individuals, family offices, UHNW, expats, foreign nationals, offshore trusts

**Types de prêteurs**

- "a network of hundreds of lenders, including private banks" (search-tool summary of target page) [a]
- Seed context: site-wide lender count claims range from 300+ to 800+ depending on page; this page's wording is only 'hundreds'

**Étapes du processus**

- No process steps for Lombard loans revealed by the searches
- Only mechanic described (from /faq/): on a fall in collateral value, top up security or partially repay to restore LTV [b]

**Géographie**

- United Kingdom (page title 'Lombard Loans UK') [a][b]
- London (firm location, contact page) [a]
- Seed context: firm also lists Western Europe, Middle East, United States; offices Monaco, Dubai, Cape Town — not confirmed on this page

**Appels à l'action**

- No page-specific CTA wording revealed by searches
- Contact routes seen in [a] via /contact/: phone +44 207 459 4440; email enquiry@silveroakcapital.co.uk
- Seed: enquiry form, WhatsApp

**Questions fréquentes**

- **What can Lombard loans be secured against? (source: /faq/ page, [b])** Cash, bonds, mutual funds, ETFs, and equities.
- **What happens if the collateral value falls? (source: /faq/ page, [b])** The lender can ask the borrower to top up security, or the borrower can reduce the loan-to-value ratio by partially repaying.
- **What LTV can I expect by collateral type? (reconstructed from target-page snippets, [a][b])** Bonds 70–90%; equities roughly 50–70%; cash typically 90–100%. Mutual funds and ETFs accepted, LTV not stated.
- **Does the borrower keep ownership of the assets? (reconstructed, [a][b])** Yes: "Lombard loans enable the borrower to access short-term liquidity while retaining ownership of their assets" and the borrower continues to benefit from capital appreciation, dividends and income.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Lenders generally offer an LTV of between 70–90% on bonds
- (number) Equity-backed loan LTVs roughly between 50–70%
- (number) Cash-backed loan LTVs typically between 90–100%
- (credential) Access to a network of hundreds of lenders, including private banks (search-tool summary wording)
- (promise) Borrower retains ownership of assets and benefits from capital appreciation, dividends and income while borrowing
- (statement) Lombard loans suit short- to medium-term needs more than long-term ones
- (statement) Bonds are a common choice of collateral due to their predictable cash flow
- (credential) Silver Oak Capital is a debt advisory firm located in London, UK (contact page)
- (number) LinkedIn [c]: recently arranged a £1,139,000 revolving credit facility for a private client (not Lombard-specific)
- (absence) No testimonials, awards or case studies specific to Lombard loans surfaced in the three searches

_Notes d'extraction : Seed.json contained no snippetsFromFirstPass entry for this path. Search [a] (extended, exact URL) returned the page as result #3 titled 'Lombard Loans UK' with LTV snippets; the tool flagged the page as last indexed ~213 days before 2026-10-29 (approx. late March 2026). Search [b] (extended, site: query) confirmed the same figures and surfaced a previously unknown site URL: /jewellery-diamonds-g…_

#### Single Stock Lending UK

URL : <https://www.silveroakcapital.co.uk/single-stock-lending-advisory/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Single Stock Lending UK (search-result title as shown in [a] and [b]; may be the <title> rather than the on-page H1 - not independently confirmed)  

**Résumé.** Silver Oak Capital's single stock lending advisory page describes a loan secured against one specific equity holding (rather than a diversified portfolio) that lets the borrower raise money against a concentrated shareholding without selling the shares and while keeping ownership. Typical clients named are family offices, founders and majority shareholders who want to keep control of their stake. Structurally, shares are pledged to a third-party trustee; the borrower generally keeps voting rights (and upside) if covenants are met; loan-to-value ratios are lower and margin requirements stricter than for portfolio (Lombard) lending because of concentration risk. The page's FAQ states founders/insiders can use the product subject to insider-trading rules, pre-clearance requirements and contractual covenants, and lists risks: extra collateral may be required, shares may have to be partly sold to repay, and borrowing costs may be higher. The firm positions its network of specialist lenders as what gives clients access to this financing. No LTV percentage, rate, fee, loan size, duration or timescale was revealed for this page; no raw snippet text surfaced - all content arrived as the search tool's paraphrase.

**Sections repérées**

- **What single stock lending is (reconstructed heading)** — A loan secured against a specific / single equity holding rather than a diversified portfolio. The borrower keeps ownership of the shares and raises money against a concentrated holding without selling. [a][b]
- **Who it is for (reconstructed heading)** — Family offices, founders and majority shareholders are described as the usual clients, often wanting to keep control of their stake. [b]
- **Structure and terms (reconstructed heading)** — Shares are typically pledged to a third-party trustee. The borrower generally keeps voting rights (and upside, per [a]) provided covenants are met. Loan-to-value ratios are lower and margin requirements stricter than for portfolio-based / Lombard lending, because of concentration risk. No LTV figure is given for this page. [a][b]
- **Lender access (reconstructed heading)** — The firm's network of specialist lenders is presented as what gives clients access to this financing. [a]
- **FAQ (page has an FAQ block per [b])** — Founders and insiders can use the product but must comply with insider trading rules, pre-clearance requirements and their contractual covenants. Risks listed: borrowers may need to post extra collateral, may have to partly sell shares to repay, and may face higher borrowing costs. [b]

**Phrases verbatim (anglais)**

> [a] (search-tool summary wording, not raw page text) "the firm's network of specialist lenders is what gives clients access to financing"
>
> [a] (search-tool summary wording) "borrowers pledge shares to a third-party trustee, keep voting rights and upside, and usually face lower loan-to-value ratios and stricter margin rules than portfolio-based loans"
>
> [a] (search-tool summary wording) "a way to raise money against a concentrated holding without selling shares"
>
> [b] (search-tool summary wording) "a loan secured against one equity holding, with the borrower keeping ownership of the shares"
>
> [b] (search-tool summary wording, presented as what the page 'refers to') "a loan secured against a specific equity holding, rather than a diversified portfolio"
>
> [b] (search-tool summary wording) "Family offices, founders, and majority shareholders are the usual clients, often wanting to keep control of their stake."
>
> [b] (search-tool summary wording) "Shares are typically pledged to a third-party trustee, and the borrower generally keeps voting rights if covenants are met."
>
> [b] (search-tool summary wording) "Loan-to-value ratios are lower and margin requirements are stricter than for portfolio lending, because of concentration risk."
>
> [b] (search-tool summary wording) "A FAQ says founders and insiders can use the product, but they must comply with insider trading rules, pre-clearance requirements, and their contractual covenants."
>
> [b] (search-tool summary wording) "The FAQ notes borrowers may need to post extra collateral, may have to partly sell shares to repay, and may face higher borrowing costs."
>
> [b] (about sibling page /lombard-loan-advisory/, not this page) "Its Lombard page puts equity-backed LTVs at roughly 50-70%."
>
> [b] (about sibling page /about-us/, not this page) "The About Us page says the firm was founded in 2019, advises on loans of £500k to £20m, and cites access to 800+ lenders."
>
> [a] SERP title for the page: "Single Stock Lending UK"
>
> [seed] navigation group "Securities and alternative": "Lombard Loan Advisory", "Single Stock Lending Advisory", "Crypto Bridging Advisory", "Bitcoin Loans Advisory", "Art Finance Advisory"
>
> [seed] firm positioning: "International Debt Advisory l Expert Finance Solutions"; "one of Europe's leading large loan brokers"

**Produits et services cités**

- Single stock lending advisory - arranging loans secured against a single / concentrated equity holding [a][b]
- Related securities-backed advisory on the same site: Lombard loan advisory (/lombard-loan-advisory/, SERP title 'Lombard Loans UK') [b][seed]
- Related: IPO & pre-IPO finance advisory for growth companies (/ipo-and-pre-ipo-finance-advisory/) - URL newly discovered in [b], not in seed
- Related: crypto bridging / bitcoin loans advisory (/crypto-bridging-advisory/, SERP title 'Bitcoin Loans') [b][seed]
- Related: art finance advisory (/art-finance-advisory/) [b][seed]

**Cas d'usage**

- Raising liquidity against a concentrated shareholding without selling the shares [a][b]
- Founders / majority shareholders who want to keep control of their stake while borrowing [b]
- Family offices borrowing against a single equity position [b]
- Founders and insiders borrowing against company stock (subject to insider-trading rules, pre-clearance and covenants) [b]

**Conditions, montants, délais, frais**

- Security: shares pledged to a third-party trustee [a][b]
- Borrower generally retains voting rights (and upside per [a]) if covenants are met [a][b]
- LTV: lower than portfolio-based / Lombard lending because of concentration risk - no percentage stated for this page [a][b]
- Margin requirements: stricter than portfolio lending [a][b]
- Risk terms (FAQ): possible requirement to post additional collateral; possible partial sale of shares to repay; potentially higher borrowing costs [b]
- Cross-reference only (sibling page /lombard-loan-advisory/): equity-backed Lombard LTVs roughly 50-70% [b]
- Firm-level (sibling page /about-us/ via [b]; matches seed): loans £500k to £20m
- Not revealed for this page: interest rates, fees, loan sizes, durations, timescales, currencies, minimum share liquidity / listing requirements

**Critères d'éligibilité**

- Family offices, founders, majority shareholders named as usual clients [b]
- Founders and insiders eligible, subject to insider trading rules, pre-clearance requirements and contractual covenants [b]
- Borrower must hold a specific / single equity holding to pledge (implicit from product definition) [a][b]
- Not revealed: minimum holding value, listing/exchange requirements, residency requirements

**Types de prêteurs**

- 'Specialist lenders' - the firm's network of specialist lenders (no lender names or categories given) [a]
- Firm-level (seed / [b] about-us): claims access to 800+ lenders (seed records other pages citing 300+, 500+, 700+)

**Étapes du processus**

- Only structural step revealed: shares are pledged to a third-party trustee as security; borrower keeps voting rights while covenants are met [a][b]
- Not revealed: enquiry, term-sheet, valuation, documentation or drawdown steps for this page

**Géographie**

- UK (SERP title 'Single Stock Lending UK') [a][b]
- Firm-level (seed): London based (91 Wimpole Street, W1G 0EE); other offices Monaco, Dubai, Cape Town; international coverage UK, Western Europe, Middle East, United States
- No country-specific wording revealed for this page beyond the title

**Appels à l'action**

- [seed] firm-level contact routes: enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent), enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **Can founders and insiders use single stock lending? (question wording reconstructed; page FAQ existence stated in [b])** Yes, but they must comply with insider trading rules, pre-clearance requirements and their contractual covenants. [b]
- **What are the risks of single stock lending? (question wording reconstructed)** Borrowers may need to post extra collateral, may have to partly sell shares to repay, and may face higher borrowing costs. [b]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (capability) The firm's network of specialist lenders gives clients access to single stock financing [a]
- (product-feature) Borrower keeps ownership of the shares and generally keeps voting rights (and upside) if covenants are met [a][b]
- (product-term (qualitative, no…) Single-stock LTVs are lower and margin requirements stricter than portfolio lending, due to concentration risk [a][b]
- (eligibility) Founders and insiders can use the product subject to insider-trading rules, pre-clearance and covenants [b]
- (risk-disclosure) Risks: extra collateral, partial forced sale to repay, higher borrowing costs [b]
- (number (other page)) Sibling Lombard page: equity-backed LTVs roughly 50-70% [b]
- (number / credential (other pa…) About Us (via [b]): founded 2019; loans £500k to £20m; 800+ lenders - consistent with seed /about-us/ and seed home//faq/ lender count
- (award-listing (external)) Silver Oak Capital has an organisation entry on awards.propertyweek.com titled 'Commercial Property Awards 2026 - Private' [a] - a listing only; result does not say the firm won anything
- (absence) No testimonials, case studies, numeric figures, timescales or credentials were revealed for this specific page

_Notes d'extraction : METHOD: seed had no snippet for /single-stock-lending-advisory/; only navigation placement (group 'Securities and alternative') and firm-level facts were usable. Exactly 3 WebSearch calls run, 0 refused. (a) extended, exact URL: confirmed page exists, title 'Single Stock Lending UK', gave paraphrased content. (b) extended, site: query: gave the richest paraphrase incl. the FAQ and surfaced two si…_

#### Crypto Bridging Advisory - Bitcoin Loans

URL : <https://www.silveroakcapital.co.uk/crypto-bridging-advisory/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Silver Oak Capital's Crypto Bridging Advisory page (SERP title 'Crypto Bridging Advisory - Bitcoin Loans') presents crypto bridging as a short-term loan secured against a portfolio of cryptocurrencies, letting the borrower raise cash without selling and keep the upside. Search results state it suits high-net-worth individuals, crypto investors and businesses holding digital assets; Bitcoin and Ethereum are the most commonly accepted assets; lenders often cap LTV at 60% or lower on strong portfolios because of volatility; and the product carries lower LTVs, higher rates and stricter margin-call requirements than traditional asset-backed lending. No pricing, fees, process steps, lender names, CTAs or regulatory wording for this page surfaced. The sibling Bitcoin Loans Advisory page gives a more conservative 30-50% LTV range, which contradicts the 60% figure. All wording below comes from the search tool's summaries of snippets, not from a direct read of the page.

**Sections repérées**

- **What crypto bridging is (as described in search results)** — [a] 'short-term loans secured against cryptocurrency holdings, so the borrower can raise cash without selling the assets'. [b] 'a short-term lending solution where loans are secured against a portfolio of cryptocurrencies'. [b] 'Borrowers keep their holdings and their upside'.
- **Who it suits** — [a] 'particularly suited to high-net-worth individuals, crypto investors, and businesses holding digital assets who need short-term funding'. [b] 'the firm says the product suits high-net-worth individuals, crypto investors, and businesses holding digital assets'.
- **Accepted assets** — [a] 'Bitcoin and Ethereum are the most commonly accepted assets'.
- **Loan to value and risk** — [a] 'lenders often limit LTVs to 60% or lower on strong portfolios because of volatility'. [b] 'due to high volatility, lenders often limit LTVs to 60% or lower on strong portfolios'. [a] 'crypto bridging generally brings lower LTVs, higher rates, and stricter margin call requirements than traditional asset-backed lending'. [b] 'lower LTV ratios, higher interest rates, and stricter margin call requirements compared with traditional asset-backed lending'.
- **Sibling page: Bitcoin Loans Advisory (/bitcoin-loans-advisory/, SERP title 'Bitcoin Loans Uk') - NOT text of this page** — [a] 'puts typical LTVs at conservative (30-50%) due to Bitcoin's volatility'. [b] 'the firm sources the best Bitcoin lending products from specialist lenders'; 'facilities are generally short term, often not exceeding 12 months'; 'loans are available in USD, EUR, or GBP'; 'repayment is usually bullet-style at maturity'.
- **Site FAQ mention (/faq/) - NOT text of this page** — [b] 'crypto bridging is commonly used by founders, early investors, and HNW individuals to access liquidity while retaining ownership and upside exposure'.
- **Not revealed** — H1, meta description, pricing/interest rates, arrangement or broker fees, loan size range, loan term for crypto bridging specifically, security/custody mechanics, lender names, process steps, calls to action, testimonials, regulatory status. [a] states: 'The excerpts don't show pricing, fees, or the advisory process itself'. [b] states: 'none of them list specific crypto loan rates or the firm's regulatory status'. Search [c] returned no Silver Oak content at all.

**Phrases verbatim (anglais)**

> [a] SERP title: 'Crypto Bridging Advisory - Bitcoin Loans'
>
> [a] 'short-term loans secured against cryptocurrency holdings, so the borrower can raise cash without selling the assets'
>
> [a] 'It is particularly suited to high-net-worth individuals, crypto investors, and businesses holding digital assets who need short-term funding'
>
> [a] 'Bitcoin and Ethereum are the most commonly accepted assets'
>
> [a] 'lenders often limit LTVs to 60% or lower on strong portfolios because of volatility'
>
> [a] 'crypto bridging generally brings lower LTVs, higher rates, and stricter margin call requirements than traditional asset-backed lending'
>
> [a] (sibling /bitcoin-loans-advisory/) 'puts typical LTVs at conservative (30-50%) due to Bitcoin's volatility, so the two pages don't fully agree on LTV levels'
>
> [b] 'The advisory page describes the product as a short-term lending solution where loans are secured against a portfolio of cryptocurrencies'
>
> [b] 'Borrowers keep their holdings and their upside, and the firm says the product suits high-net-worth individuals, crypto investors, and businesses holding digital assets'
>
> [b] 'The page notes that due to high volatility, lenders often limit LTVs to 60% or lower on strong portfolios'
>
> [b] 'It also flags lower LTV ratios, higher interest rates, and stricter margin call requirements compared with traditional asset-backed lending'
>
> [b] (sibling /bitcoin-loans-advisory/) 'This page says the firm sources the best Bitcoin lending products from specialist lenders. It states that facilities are generally short term, often not exceeding 12 months, that loans are available in USD, EUR, or GBP, and that repayment is usually bullet-style at maturity'
>
> [b] (/faq/) 'The FAQ page says crypto bridging is commonly used by founders, early investors, and HNW individuals to access liquidity while retaining ownership and upside exposure'
>
> [b] 'none of them list specific crypto loan rates or the firm's regulatory status'
>
> [seed] Navigation group 'Securities and alternative': 'Lombard Loan Advisory', 'Single Stock Lending Advisory', 'Crypto Bridging Advisory', 'Bitcoin Loans Advisory', 'Art Finance Advisory'
>
> [seed] No snippetsFromFirstPass entry exists for /crypto-bridging-advisory/

**Produits et services cités**

- Crypto Bridging Advisory (short-term loans secured against a cryptocurrency portfolio) [a][b]
- Bitcoin Loans Advisory (sibling page /bitcoin-loans-advisory/) [a][b][seed]
- Sibling 'Securities and alternative' services per seed navigation: Lombard Loan Advisory, Single Stock Lending Advisory, Art Finance Advisory [seed]

**Cas d'usage**

- Raise cash without selling crypto assets [a]
- Short-term funding for HNW individuals, crypto investors and businesses holding digital assets [a][b]
- Keep holdings and upside while borrowing [b]
- Founders, early investors and HNW individuals accessing liquidity while retaining ownership and upside exposure (site FAQ, [b])

**Conditions, montants, délais, frais**

- LTV: lenders often limit LTVs to 60% or lower on strong portfolios, due to volatility [a][b]
- Relative terms: lower LTV ratios, higher interest rates, stricter margin call requirements than traditional asset-backed lending [a][b]
- Duration: short-term (no figure given on this page) [a][b]; sibling Bitcoin page: generally short term, often not exceeding 12 months [b]
- Security: a portfolio of cryptocurrencies / cryptocurrency holdings; Bitcoin and Ethereum most commonly accepted [a][b]
- Sibling Bitcoin page LTV: conservative 30-50% [a] (contradicts the 60% figure)
- Sibling Bitcoin page currencies: USD, EUR or GBP [b]
- Sibling Bitcoin page repayment: usually bullet-style at maturity [b]
- Rates, fees, minimum/maximum loan size, timescales: NOT revealed for this page [a][b]

**Critères d'éligibilité**

- High-net-worth individuals [a][b]
- Crypto investors [a][b]
- Businesses holding digital assets [a][b]
- Holders of Bitcoin and Ethereum (most commonly accepted assets) [a]
- 'Strong portfolios' referenced as the condition for LTVs up to 60% [a][b]

**Types de prêteurs**

- Not named on this page in the results; sibling Bitcoin page refers to 'specialist lenders' [b]

**Géographie**

- Not stated for this page in the results
- Sibling page SERP title 'Bitcoin Loans Uk' and loans in USD, EUR or GBP [a][b]
- Firm is London-based debt advisory [a]; seed lists UK, Western Europe, Middle East, United States [seed]

**Questions fréquentes**

- **Who commonly uses crypto bridging? (from site /faq/ page, not this page) [b]** 'commonly used by founders, early investors, and HNW individuals to access liquidity while retaining ownership and upside exposure'

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (ltv) Lenders often limit LTVs to 60% or lower on strong portfolios because of volatility [a][b]
- (risk-disclosure) Crypto bridging brings lower LTVs, higher rates and stricter margin call requirements than traditional asset-backed lending [a][b]
- (collateral) Bitcoin and Ethereum are the most commonly accepted assets [a]
- (benefit) Borrowers keep their holdings and their upside [b]
- (audience) Suited to high-net-worth individuals, crypto investors and businesses holding digital assets who need short-term funding [a][b]
- (contradiction) CONTRADICTION: sibling /bitcoin-loans-advisory/ states typical LTVs are conservative 30-50% vs this page's 60% or lower [a]
- (sibling-page-terms) Sibling page: facilities generally short term, often not exceeding 12 months; USD/EUR/GBP; bullet repayment at maturity; sourced from specialist lenders [b]
- (external-press) External (not this page): bridgingandcommercial.co.uk headline 'Silver Oak Capital completes its largest ever bridging loan of £19.1m' [a]
- (external-press) External (not this page): bridgingandcommercial.co.uk headline 'Silver Oak Capital to grow team following increased volume in £2m-20m space' [a]
- (absence) No testimonials, awards, credentials, lender counts or numeric promises surfaced for this page [a][b][c]

_Notes d'extraction : H1 and meta description not revealed; the only title seen is the SERP title 'Crypto Bridging Advisory - Bitcoin Loans'. Quoted wording is the search tool's summary phrasing and may paraphrase the page. Search (c) ('Silver Oak Capital' crypto bridging loan 'loan to value', standard mode) returned only unrelated generic crypto-lending sites (ennessglobal.com, archlending.com, etc.) and explicitly s…_

#### Bitcoin Loans Uk (SERP title shown in [a] and [b]); the search tool's summary in [a] calls the page "Bitcoin …

URL : <https://www.silveroakcapital.co.uk/bitcoin-loans-advisory/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** NOT REVEALED. Only the SERP title "Bitcoin Loans Uk" was surfaced; the tool summary refers to the page as "Bitcoin Loans Advisory".  
**Meta description :** NOT REVEALED. Closest paraphrase from [a]: a Bitcoin-backed loan is a facility where the borrower pledges Bitcoin to raise funds while keeping ownership of the coins; typically short-term bridging; LTV typically 30-50%.

**Résumé.** Silver Oak Capital's Bitcoin Loans Advisory page describes Bitcoin-backed loans: the borrower pledges Bitcoin to raise funds while keeping ownership of the coins; the facilities are typically short-term bridging loans (some lenders may offer longer terms); LTV is conservative at 30-50% because of Bitcoin's volatility; interest rates are higher than traditional asset-backed loans; the Bitcoin is typically held in third-party custody or a lender-controlled wallet; funds are advanced in fiat (USD, EUR, GBP) or occasionally stablecoins. The sister page /crypto-bridging-advisory/ quotes an LTV cap of 60% or lower and flags margin calls. No H1, meta, fees, loan sizes, process steps, FAQ or CTA text for this specific page was surfaced. Search (c) returned no Silver Oak Capital content at all.

**Phrases verbatim (anglais)**

> [a] "It describes a Bitcoin-backed loan as a facility where the borrower pledges Bitcoin to raise funds, and the borrower keeps ownership of the coins."
>
> [a] "Bitcoin loans are typically short-term bridging facilities, although some lenders may offer longer-term options."
>
> [a] "The page says loan-to-value (LTV) ratios are typically conservative (30–50%) due to Bitcoin's volatility."
>
> [a] "It also notes that funds may come in fiat currencies (USD, EUR, GBP) or, occasionally, stablecoins."
>
> [a] (crypto-bridging page) "A separate crypto bridging page on the same site gives a similar picture, with an 60% LTV cap, and it notes that stricter margin call requirements apply because of volatility. Its wording differs from the Bitcoin page, which uses 30–50%."
>
> [a] (external listings) "The firm is described as a debt advisory firm located in London, UK."
>
> [a] (external listings) "Other listings describe it as a broker that acquires loans from our 300+ Lenders."
>
> [a] "the page metadata shows the content was indexed about 213 days ago"
>
> [b] "The site describes bitcoin-backed loans as short-term bridging facilities, with the borrower keeping ownership of the coins."
>
> [b] "The bitcoin is typically held in third-party custody or a lender-controlled wallet."
>
> [b] "Loan-to-value ratios are listed at 30–50%, and the page notes higher interest rates than traditional asset-backed loans."
>
> [b] (crypto-bridging page) "It mentions that lenders often cap LTVs at 60% or lower for strong portfolios, and it flags stricter margin call requirements as a key risk."
>
> [b] (FAQ page) "It says founders, early investors, and high-net-worth individuals are the typical users of these loans."
>
> [b] (About Us page) "Silver Oak Capital was founded in 2019 by Jimmy Baillie and focuses on advice for loans between £500k and £20m."
>
> [b] "The pages are about 213 days old, so the terms may have changed."
>
> [c] "The search didn't return anything about Silver Oak Capital's bitcoin lending or its loan-to-value terms. None of the results mention the firm"
>
> [seed] navigation group "Securities and alternative": "Lombard Loan Advisory", "Single Stock Lending Advisory", "Crypto Bridging Advisory", "Bitcoin Loans Advisory", "Art Finance Advisory"
>
> [seed] "International Debt Advisory l Expert Finance Solutions"

**Produits et services cités**

- Bitcoin Loans Advisory (Bitcoin-backed loans / Bitcoin-backed bridging facilities) [a][b]
- Crypto Bridging Advisory (sister page, same product family) [a][b][seed]
- Lombard Loan Advisory [seed]
- Single Stock Lending Advisory [seed]
- Art Finance Advisory [seed]

**Cas d'usage**

- Raising funds by pledging Bitcoin without selling it; borrower keeps ownership of the coins [a][b]
- Short-term bridging liquidity secured on Bitcoin [a][b]
- Longer-term borrowing against Bitcoin with some lenders [a]
- Typical users per /faq/ (not this page): founders, early investors, high-net-worth individuals [b]

**Conditions, montants, délais, frais**

- LTV: typically conservative, 30-50%, due to Bitcoin's volatility [a][b]
- LTV on sister page /crypto-bridging-advisory/: lenders often cap at 60% or lower for strong portfolios [a][b] (contradicts 30-50%)
- Duration: typically short-term bridging facilities; some lenders may offer longer-term options [a][b]; no month figures surfaced
- Rates: higher interest rates than traditional asset-backed loans [b]; no percentage figures surfaced
- Currency of funds: fiat (USD, EUR, GBP) or occasionally stablecoins [a]
- Security: Bitcoin pledged as collateral, typically held in third-party custody or a lender-controlled wallet [b]
- Risk: stricter margin call requirements because of volatility (stated on crypto-bridging page) [a][b]
- Loan sizes: not stated for this page; firm-level claim is advice on loans between £500k and £20m (/about-us/) [b][seed]
- Fees: not surfaced for this page; firm-level fee claims only in seed
- Timescales: not surfaced

**Critères d'éligibilité**

- Not stated for this page in any result
- Per /faq/ (attributed by [b]): founders, early investors and high-net-worth individuals are the typical users of these loans

**Types de prêteurs**

- Not named on this page; wording implies multiple lenders with differing appetite ("some lenders may offer longer-term options") [a]
- Custody arrangements: third-party custodian or lender-controlled wallet [b]
- Firm-level: "300+ Lenders" per external listings [a]; seed records 300+/500+/700+/800+ claims across sources

**Étapes du processus**

- Not revealed in any result for this page

**Géographie**

- London, UK (firm location) [a][seed]
- Funds in USD, EUR, GBP implies US/Eurozone/UK borrowers or lenders [a]
- Seed firm-level markets: United Kingdom, Western Europe, Middle East, United States [seed]

**Appels à l'action**

- [seed] firm-level contact routes: enquiry form, enquiry@silveroakcapital.co.uk, +44 207 459 4440, WhatsApp

**Questions fréquentes**

- **What LTV do Bitcoin-backed loans offer?** [a][b] typically conservative, 30-50% due to Bitcoin's volatility (sister crypto-bridging page: 60% or lower). Question wording is reconstructed, not confirmed as an on-page FAQ.
- **Does the borrower keep ownership of the Bitcoin?** [a][b] yes, the borrower keeps ownership of the coins; the Bitcoin is typically held in third-party custody or a lender-controlled wallet. Question wording reconstructed.
- **In what currency are funds advanced?** [a] fiat currencies (USD, EUR, GBP) or, occasionally, stablecoins. Question wording reconstructed.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number [a][b]) LTV typically conservative at 30-50% due to Bitcoin's volatility
- (number/contradiction [a][b]) Sister page states LTV cap of 60% or lower for strong portfolios (contradiction)
- (pricing statement [b]) Higher interest rates than traditional asset-backed loans
- (product feature [a]) Funds may come in USD, EUR, GBP or occasionally stablecoins
- (product promise [a][b]) Borrower keeps ownership of the coins
- (security arrangement [b]) Bitcoin typically held in third-party custody or a lender-controlled wallet
- (firm description via external…) Debt advisory firm located in London, UK
- (firm claim via external listi…) Broker that acquires loans from 300+ Lenders
- (firm credential via /about-us…) Founded in 2019 by Jimmy Baillie; advice on loans between £500k and £20m
- (freshness note [a][b]) Page content indexed about 213 days before the search
- (absence) No testimonials, awards, or regulatory statements surfaced for this page

_Notes d'extraction : Search (a) extended on the exact URL: surfaced the page (SERP title "Bitcoin Loans Uk") plus the sister crypto-bridging page, odoo mirror, Nextdoor and syob.net listings; also unrelated Silvergate Capital SEC filings and the US firm Silver Oak Capital Partners (silveroakcp.com), both ignored. Search (b) extended site: query: surfaced the same two pages plus /faq/, /private-bank-mortgages/, /weste…_

#### Art Finance Advisory

URL : <https://www.silveroakcapital.co.uk/art-finance-advisory/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** Art Finance Advisory (search-result page title; actual H1 tag not confirmed by any snippet)  
**Meta description :** NOT REVEALED by search results.

**Résumé.** Service page of Silver Oak Capital (UK finance brokerage, 91 Wimpole Street, London W1G 0EE) presenting art-backed lending advisory: using fine art, paintings or sculptures as security to raise liquidity while the owner keeps the works. Search summaries state that lenders weigh independent valuation, rarity/provenance, condition, authenticity and liquidity/saleability; that single high-value pieces are generally preferred over portfolios of smaller items; that art supports lower loan-to-value ratios than other asset-backed lending, with an FAQ figure of typically 30% to 60% LTV depending on collection quality, value and liquidity; that lenders monitor value and may request additional security if values fall; and that borrowers can be private collectors, family offices and galleries. The page sits in the site's 'Luxury Asset Finance' navigation group alongside jewellery finance and classic car loans. No fees, rates, loan sizes, durations, lender names, process steps, case studies or testimonials for this page were revealed. Query (c) returned only unrelated industry sources (no Silver Oak content).

**Sections repérées**

- **What art finance / art-backed lending is (summary of page, not literal heading)** — [a] 'It describes art-backed lending as a way for owners to raise funds using paintings or sculptures as security while keeping ownership.' [b] 'The main page describes art-backed lending, where fine art, paintings, or sculptures are used as security to access liquidity. It is pitched as a way for owners to raise funds without giving up the works.'
- **What lenders assess (summary of page, not literal heading)** — [a] 'Lenders typically weigh the artwork's valuation, rarity and provenance, condition, authenticity, and liquidity.' [b] 'Lenders look at an independent valuation, provenance, condition, authenticity, and how easily a piece sells. The page says single high-value pieces are generally preferred over portfolios of smaller items.'
- **Loan-to-value (summary, not literal heading)** — [a] 'The snippet also notes that art usually supports lower loan-to-value ratios than other asset-backed lending.' [b] 'The FAQ says LTVs vary by collection quality, value, and liquidity, typically between 30% and 60%. If values fall, lenders monitor artwork value and may request additional security.' Note: the summary says 'The FAQ' without stating whether this is an FAQ block on the art page or the site-wide /faq/ page.
- **Who can borrow (summary, not literal heading)** — [b] 'According to the FAQ, loans are available to private collectors, family offices, and galleries.'
- **Navigation context** — [a] 'The site's navigation lists "Art Finance Advisory" under its Luxury Asset Finance services, alongside jewelry finance and classic car loans.' [b] '(listed under the Luxury Asset Finance section, alongside jewellery finance and classic car loans)'. [seed] The seed's reconstructed navigation placed Art Finance Advisory under a 'Securities and alternative' grouping together with Lombard Loan Advisory, Single Stock Lending Advisory, Crypto Bridging Advisory and Bitcoin Loans Advisory; that grouping was the first pass's own label, whereas the site's own label per [a]/[b] is 'Luxury Asset Fina…
- **Contact** — [a] 'The company's contact page gives a London number, +44 207 459 4440.' [b] 'The site lists the firm at 91 Wimpole Street, London, W1G 0EE, with phone +44 207 459 4440'.

**Phrases verbatim (anglais)**

> [a] "It is a UK art finance advisory page. It describes art-backed lending as a way for owners to raise funds using paintings or sculptures as security while keeping ownership."
>
> [a] "Lenders typically weigh the artwork's valuation, rarity and provenance, condition, authenticity, and liquidity."
>
> [a] "The snippet also notes that art usually supports lower loan-to-value ratios than other asset-backed lending."
>
> [a] "The site's navigation lists 'Art Finance Advisory' under its Luxury Asset Finance services, alongside jewelry finance and classic car loans."
>
> [a] "The company's contact page gives a London number, +44 207 459 4440."
>
> [a] "The snippets don't show the full page, so I can't confirm its fees, lender panel, or terms."
>
> [b] "The main page describes art-backed lending, where fine art, paintings, or sculptures are used as security to access liquidity. It is pitched as a way for owners to raise funds without giving up the works."
>
> [b] "Lenders look at an independent valuation, provenance, condition, authenticity, and how easily a piece sells. The page says single high-value pieces are generally preferred over portfolios of smaller items."
>
> [b] "The FAQ says LTVs vary by collection quality, value, and liquidity, typically between 30% and 60%. If values fall, lenders monitor artwork value and may request additional security."
>
> [b] "According to the FAQ, loans are available to private collectors, family offices, and galleries."
>
> [b] "The site lists the firm at 91 Wimpole Street, London, W1G 0EE, with phone +44 207 459 4440 (listed under the Luxury Asset Finance section, alongside jewellery finance and classic car loans)."
>
> [b] "The search results don't include any pricing, fees, or case studies from the art page itself."
>
> [c] "The search didn't turn up anything about Silver Oak Capital specifically, so I can't confirm its art finance business or its loan-to-value terms."
>
> [seed] Navigation entry: "Art Finance Advisory" listed under the seed grouping "Securities and alternative" (no snippet for this path in snippetsFromFirstPass).
>
> [seed] Firm contact: "enquiry@silveroakcapital.co.uk ; +44 207 459 4440 ; WhatsApp ; enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent)"

**Produits et services cités**

- Art finance advisory / art-backed lending advisory (fine art, paintings, sculptures used as security to access liquidity) [a][b]
- Sibling Luxury Asset Finance services named in navigation: jewellery finance (jewellery, diamonds, gemstones loans advisory) and classic car loans [a][b]

**Cas d'usage**

- Owners raising funds against paintings or sculptures while keeping ownership of the works [a][b]
- Accessing liquidity without selling the art [b]

**Conditions, montants, délais, frais**

- Security: fine art, paintings or sculptures pledged as collateral [a][b]
- LTV: art usually supports lower loan-to-value ratios than other asset-backed lending [a]
- LTV: typically between 30% and 60%, varying by collection quality, value and liquidity (attributed by [b] to 'the FAQ') [b]
- Monitoring: if values fall, lenders monitor artwork value and may request additional security [b]
- Collateral preference: single high-value pieces generally preferred over portfolios of smaller items [b]
- Valuation basis: independent valuation [b]
- Loan sizes, rates, fees, durations, timescales: NOT REVEALED for this page

**Critères d'éligibilité**

- Private collectors [b]
- Family offices [b]
- Galleries [b]
- Assessment criteria applied by lenders: independent valuation, rarity and provenance, condition, authenticity, liquidity / how easily a piece sells [a][b]

**Types de prêteurs**

- NOT REVEALED: results say 'lenders' generically; no lender names or lender categories (private banks, specialist art lenders, etc.) stated for this page. [a] explicitly: 'I can't confirm its fees, lender panel, or terms.'

**Étapes du processus**

- NOT REVEALED: no application / valuation / offer / completion sequence surfaced for this page.

**Géographie**

- UK ('It is a UK art finance advisory page') [a]
- London office, 91 Wimpole Street, W1G 0EE [b]
- No country-specific lending scope stated for art finance in the results

**Appels à l'action**

- NOT REVEALED on the art page itself. Site-level routes per [seed]: enquiry form, direct email enquiry@silveroakcapital.co.uk, WhatsApp, phone +44 207 459 4440; contact page title per [a]/[b]: 'Silver Oak Capital Speak to Experts'.

**Questions fréquentes**

- **What loan-to-value can be achieved on art? (question wording inferred; answer as summarised by [b])** [b] 'LTVs vary by collection quality, value, and liquidity, typically between 30% and 60%. If values fall, lenders monitor artwork value and may request additional security.'
- **Who can borrow against art? (question wording inferred; answer as summarised by [b])** [b] 'loans are available to private collectors, family offices, and galleries.'

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (promise) Art-backed lending lets owners raise funds using paintings or sculptures as security while keeping ownership [a][b]
- (number) LTVs typically between 30% and 60%, varying by collection quality, value and liquidity [b]
- (statement) Art usually supports lower loan-to-value ratios than other asset-backed lending [a]
- (statement) Single high-value pieces are generally preferred over portfolios of smaller items [b]
- (statement) Lenders monitor artwork value and may request additional security if values fall [b]
- (eligibility) Loans available to private collectors, family offices and galleries [b]
- (contact) Office: 91 Wimpole Street, London, W1G 0EE; phone +44 207 459 4440 [a][b]
- (navigation) Art Finance Advisory is grouped under 'Luxury Asset Finance' with jewellery finance and classic car loans [a][b]
- (absence) No testimonials, awards, credentials, lender counts or case studies were surfaced for this page

_Notes d'extraction : Queries: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk art finance advisory'; (c) standard, '"Silver Oak Capital" art finance "loan to value"'. (c) surfaced no Silver Oak content at all (only generic industry pages: Enness Global 30-50% LTV, Citi ~50%, momaa.org 50-70%); those third-party figures are NOT Silver Oak claims and were excluded from the fields above. Ambiguity: […_

### Cabinet, prêteurs, apporteurs, FAQ, contact

#### About Us - Jimmy Baillie

URL : <https://www.silveroakcapital.co.uk/about-us/>  
Confiance : medium-low · Recherches effectuées : 3

**H1 :** Not revealed by snippets. The page <title> seen in results [a] and [b] is 'About Us - Jimmy Baillie'; the on-page H1 is probably 'About Us' but this is not confirmed.  
**Meta description :** Not revealed by any snippet or summary.

**Résumé.** Company/founder page of Silver Oak Capital (UK real estate debt brokerage). It profiles Jimmy Baillie, Founder & Managing Director, who founded the firm in 2019 to advise on loans between GBP 500k and GBP 20m secured on UK and overseas assets; it lists the debt advisory team (Connor Dooley, Senior Associate, Debt Advisory; Joe Berk, Associate, Debt Advisory; Sophia De Stefano, Relationship Manager) with bios covering education and experience, and (per seed) a 'Types Of Properties' list and the positioning 'one of Europe's leading large loan brokers'. Full body text was NOT retrieved: search results only exposed the title, the founder sentence, the founder's education and the team roles. Third-party sources (LinkedIn, Spear's, Weebly) give a different loan range (GBP 2m-20m) and different lender counts (500+ / 800+).

**Sections repérées**

- **Jimmy Baillie - Founder & Managing Director (bio)** — [a][b][seed] Founded Silver Oak Capital in 2019; 'focussing on providing advice for loans between £500k – £20m' secured on UK and overseas assets. [b] Graduated from the University of Cape Town in 2010 with a BCom Honours Degree in Economics. [seed] Described as Managing Director; firm 'has focused on loans between £500K to £20m'. Rest of the bio (career history before 2019) not revealed.
- **Our Team (debt advisory team)** — [a] The page lists a Senior Associate in Debt Advisory, an Associate in Debt Advisory and a Relationship Manager, 'along with bios of their education and experience'. [b] Names Connor Dooley and Joe Berk. [seed] Connor Dooley = Senior Associate, Debt Advisory (also Data Protection Officer per Ts&Cs); Joe Berk = Associate, Debt Advisory; Sophia De Stefano = Relationship Manager. Content of the individual bios not revealed.
- **Types Of Properties** — [seed] A 'Types Of Properties' list exists on the page; 'student accommodation' is the only item confirmed. [seed, home page] sectors listed elsewhere on the site: retail, office, logistics, care homes, student accommodation, hotels; residential line 'Main home mortgages, Buy to Lets, Holiday Lets and HMO's'. No search result in this pass exposed the list itself.
- **Positioning / who we are** — [seed] 'one of Europe's leading large loan brokers'. [a, LinkedIn] 'specialising in real estate debt solutions'; the firm 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions'. [b, home] commercial mortgage broker and property development finance provider arranging deals for borrowers who want to borrow, develop, refinance or acquire; offices London, Monaco, Dubai, Cape Town.

**Phrases verbatim (anglais)**

> [a] 'He founded Silver Oak Capital in 2019 – focussing on providing advice for loans between £500k – £20m'
>
> [a] page <title>: 'About Us - Jimmy Baillie'
>
> [a] (search-tool summary of the page) 'names Jimmy Baillie as Managing Director and says he started the firm in 2019 to advise on loans of £500k to £20m, secured on UK and overseas assets'
>
> [a] (search-tool summary of the page) 'lists staff including a Senior Associate in Debt Advisory, an Associate in Debt Advisory, and a Relationship Manager, along with bios of their education and experience'
>
> [a] (LinkedIn company profile) 'specialising in real estate debt solutions' ; 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions' ; 'relationships with 500+ different private banks, investment banks, specialist lenders & private debt funds'
>
> [b] (search-tool summary of the page) 'Jimmy graduated from the University of Cape Town in 2010 with a BCom Honours Degree in Economics'
>
> [b] (search-tool summary of the page) 'The firm was founded in 2019 to advise on large loans. Its advice covers loans between £500K and £20m, secured on assets in the UK and abroad.'
>
> [b] (search-tool summary of the page) 'profiles Jimmy Baillie as Managing Director and founder. It also lists a debt advisory team, including Connor Dooley and Joe Berk.'
>
> [b] (home page, via summary) 'arranges debt across the UK, US, Western Europe and the Middle East. Its offices are listed as London, Monaco, Dubai and Cape Town.'
>
> [b] (home page / commercial-mortgage-broker page, via summary) 'The homepage cites over 800 lenders, while the commercial mortgage broker page cites 700+ lenders.'
>
> [b] (Ts&Cs PDF, via summary) 'Silver Oak Capital Limited, incorporated in England and Wales, with company number 08551479' ; 'does not provide regulated mortgage and insurance advice' ; 'does not handle client money' ; registered office '11 Honiton Road, London, NW6 6QE'
>
> [b] (contact details, via summary) 'head office is at 91 Wimpole Street, London, W1G 0EE, phone 0207 459 4440, email enquiry@silveroakcapital.co.uk'
>
> [c] (Spear's 500 profile, via summary) 'the debt advisory firm, which launched in 2019 and focuses on secured loans from £2 million to £20 million for ultra-high-net-worth clients'
>
> [c] (Spear's 500 profile, via summary) 'works with more than 800 lenders and arranges real estate debt mainly in the UK, Western Europe, Southern Africa and the Middle East'
>
> [c] (via summary) 'The team reportedly arranged a £19.1 million bridging loan in 2020 for international real estate developments.'
>
> [c] (LinkedIn post, via summary) 'a £4 million bridging loan to refinance a prime Kensington residential property'
>
> [seed] 'has focused on loans between £500K to £20m'
>
> [seed] 'one of Europe's leading large loan brokers'
>
> [seed] (Spear's profile) 'run from London and South Africa; advises UHNW clients on secured loans £2m–£20m; deals in UK, Western Europe, Southern Africa, Middle East; clients from UK, France, Spain, Dubai, South Africa'

**Produits et services cités**

- Debt advisory / brokerage of large secured loans (GBP 500k-20m) on UK and overseas real estate [a][b][seed]
- Real estate debt solutions for larger, more complex transactions (not a high street mortgage broker) [a, LinkedIn]
- Commercial mortgage broking [b, home]
- Property development finance [b, home]
- Bridging loans (deal examples: GBP 19.1m bridging loan 2020; GBP 4m Kensington refinance) [c]
- Advice to ultra-high-net-worth clients on secured loans [c, Spear's]

**Cas d'usage**

- Borrow, develop, refinance or acquire real estate [b, home]
- Refinance of a prime Kensington residential property (GBP 4m bridging loan) [c]
- International real estate developments (GBP 19.1m bridging loan, 2020) [c]
- Larger, more complex real estate transactions unsuited to high street brokers [a, LinkedIn]

**Conditions, montants, délais, frais**

- Loan size on this page: GBP 500k to GBP 20m [a][b][seed]
- Loan size per Spear's / old Weebly homepage / commercial-mortgage-broker page: GBP 2m to GBP 20m (contradiction) [a][c][seed]
- Security: loans secured on UK and overseas assets [a][b]
- Lender network: 500+ (LinkedIn) [a]; 700+ (commercial-mortgage-broker page) [b]; 800+ (home page, Spear's) [b][c] (contradiction)
- No LTV, interest rate, duration, fee or timescale figures revealed for this page
- Firm does not provide regulated mortgage and insurance advice and does not handle client money (Ts&Cs, not this page) [b]

**Critères d'éligibilité**

- Larger, more complex real estate transactions (bespoke rather than high street) [a, LinkedIn]
- Ultra-high-net-worth clients [c, Spear's]
- Loans from GBP 500k [a][b] (GBP 2m per Spear's [c])
- UK and overseas assets accepted as security [a][b]

**Types de prêteurs**

- Private banks [a, LinkedIn]
- Investment banks [a, LinkedIn]
- Specialist lenders [a, LinkedIn]
- Private debt funds [a, LinkedIn]

**Géographie**

- United Kingdom (London-based head office, 91 Wimpole Street) [b]
- Overseas / abroad assets [a][b]
- UK, US, Western Europe, Middle East (home page) [b]
- UK, Western Europe, Southern Africa, Middle East (Spear's) [c][seed]
- Offices: London, Monaco, Dubai, Cape Town [b]
- Run from London and South Africa (Spear's, seed)
- Clients from UK, France, Spain, Dubai, South Africa (seed)

**Appels à l'action**

- No call-to-action text revealed for this page. Site-wide contact routes (seed/[b]): enquiry form, email enquiry@silveroakcapital.co.uk, phone 0207 459 4440 / +44 207 459 4440, WhatsApp.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (founding date) Founded in 2019 by Jimmy Baillie (seed notes one page says 2018)
- (loan size) Advice for loans between GBP 500k and GBP 20m
- (scope) Loans secured on UK and overseas assets
- (credential) Jimmy Baillie: BCom Honours in Economics, University of Cape Town, 2010
- (team) Team: Senior Associate Debt Advisory (Connor Dooley), Associate Debt Advisory (Joe Berk), Relationship Manager (Sophia De Stefano)
- (positioning (seed)) 'one of Europe's leading large loan brokers'
- (lender count) Relationships with 500+ private banks, investment banks, specialist lenders and private debt funds (LinkedIn)
- (lender count (contradiction)) Over 800 lenders (home page, Spear's); 700+ (commercial-mortgage-broker page)
- (loan size (contradiction)) Secured loans GBP 2m-20m for UHNW clients (Spear's)
- (deal size) GBP 19.1m bridging loan arranged in 2020 (Spear's, self-reported)
- (deal example) GBP 4m bridging loan to refinance a prime Kensington property (LinkedIn post)
- (award/recognition) Added to Spear's 500 list for 2022
- (legal entity) Silver Oak Capital Limited, company number 08551479, England and Wales
- (regulatory disclaimer) Does not provide regulated mortgage and insurance advice; does not handle client money (Ts&Cs)

_Notes d'extraction : Searches: (a) extended, exact URL; (b) extended, 'site:silveroakcapital.co.uk about us'; (c) standard, '"Silver Oak Capital" large loan broker lenders'. Direct fetch not attempted (blocked). Contradictions: loan range GBP 500k-20m (about-us) vs GBP 2m-20m (Spear's, Weebly old homepage, commercial-mortgage-broker page); lender count 500+ (LinkedIn) vs 700+ (commercial-mortgage-broker) vs 800+ (hom…_

#### Silver Oak Capital Speak to Experts

URL : <https://www.silveroakcapital.co.uk/contact/>  
Confiance : medium · Recherches effectuées : 3


**Résumé.** Contact page of Silver Oak Capital, a London debt advisory business. Search results reveal the page <title> ('Silver Oak Capital Speak to Experts'), three enquiry routes (enquiry form, email, WhatsApp), a phone number (+44 207 459 4440), the email enquiry@silveroakcapital.co.uk, a 'WhatsApp Us Now' call to action, the office address 91 Wimpole Street, London W1G 0EE, opening hours Monday-Friday 9:00-17:00 (from the page's structured data) and a list of office locations: London, Monaco, Dubai, Cape Town. No H1, meta description, body paragraphs, FAQ or product terms were revealed. A postcode discrepancy exists (W1G 0EE on web pages vs W1G 0EF on the Odoo mirror site and in the Ts&Cs PDF complaints address). Search (c) surfaced only third-party Spear's 500 / LinkedIn material, not the page itself.

**Sections repérées**

- **Get in touch / enquiry routes (heading wording not revealed)** — Three ways to start an enquiry are stated on the page: the enquiry form, direct email (enquiry@silveroakcapital.co.uk) and WhatsApp ('WhatsApp Us Now'). The phone number +44 207 459 4440 is given as the number to call for discussing a project. Sources: [a], [b], [seed].
- **Enquiry form (fields per seed only)** — Seed records the form fields as: name, contact details, finance type, amount, country of residence, brief overview, consent. None of the three searches revealed the form labels verbatim. Source: [seed].
- **Office address** — 91 Wimpole Street, London, W1G 0EE. Postcode shown as W1G 0EF on the Odoo mirror site and in the Ts&Cs PDF complaints address; web pages consistently use W1G 0EE. Sources: [a], [b], [seed].
- **Opening hours (structured data)** — Monday to Friday, 9:00 to 17:00, per the page's structured data (schema markup), not necessarily visible body text. Source: [a].
- **Office locations** — The page lists London, Monaco, Dubai and Cape Town. Source: [a] (corroborated by [seed] otherOffices).
- **Complaints (from Ts&Cs PDF, not the contact page)** — Written complaints are addressed to the Managing Director at 91 Wimpole Street, London W1G 0EF per the Ts&Cs PDF. Source: [b].

**Phrases verbatim (anglais)**

> [a][b] Page title as indexed: "Silver Oak Capital Speak to Experts"
>
> [a] "The official contact page (index 4) lists a phone number, an email address, and a WhatsApp option. The firm is a London debt advisory business."
>
> [a] "Phone: The page gives +44 207 459 4440 for discussing a project. Directory listings show the same number in UK format, 0207 459 4440."
>
> [a] "Email: enquiry@silveroakcapital.co.uk, which the page lists directly."
>
> [a] "WhatsApp: A 'WhatsApp Us Now' option is available on the page."
>
> [a] "Address: The page gives 91 Wimpole Street, London, W1G 0EE. A different site (index 2) gives the postcode as W1G 0EF, so the final two characters may differ between sources." (index 2 = https://silveroakcapital.odoo.com/)
>
> [a] "Hours: Structured data on the page lists Monday to Friday, 9:00 to 17:00."
>
> [a] "Other offices: The page also lists London, Monaco, Dubai, and Cape Town."
>
> [a] "Some third-party directories (index 9) show a placeholder-style phone number, so I'd avoid those." (index 9 = contactout.com)
>
> [b] "The contact page says enquiries can be started through the enquiry form, by email, or via WhatsApp, and lists a 'WhatsApp Us Now' option"
>
> [b] "Email: enquiry@silveroakcapital.co.uk, listed on the contact page and on service pages such as Aviation Finance."
>
> [b] "Phone: +44 207 459 4440, given on the contact page as the number to call for discussing a project"
>
> [b] "Address: 91 Wimpole Street, London, W1G 0EE, shown on pages such as the Commercial Mortgage Broker page."
>
> [b] "Discrepancy: The Terms and Conditions PDF gives the postcode as W1G 0EF for the complaints address, and names the Managing Director as the recipient for written complaints" (https://www.silveroakcapital.co.uk/wp-content/uploads/2026/02/Ts-and-Cs.pdf)
>
> [b] "The web pages consistently use W1G 0EE"
>
> [c] "The search didn't turn up Silver Oak Capital's own website or its enquiry form. The closest result is a listing on Spear's 500, which has a form for contacting the firm's founder."
>
> [c] "Silver Oak Capital is a London debt advisory firm founded by Jimmy Baillie in 2019. It specialises in advising UHNW clients on secured loans between £2 million and £20 million." (Spear's 500 profile, third party)
>
> [c] "A separate Spear's profile says Silver Oak has an extensive network of more than 300 lenders across 100 countries and arranges real estate debt in the UK, Western Europe, Southern Africa and the Middle East. A LinkedIn result cites a different figure, saying the firm has access to an extensive network of over 800 lenders."
>
> [c] "The Spear's listing has a form. Users submit their details, and Spear's passes the enquiry directly to the adviser for a response. This is a third-party intermediary, not a direct firm contact form."
>
> [seed] "/contact/: three routes: enquiry form, direct email, WhatsApp; office 91 Wimpole Street, London W1G 0EE."
>
> [seed] firm.contact: "enquiry@silveroakcapital.co.uk ; +44 207 459 4440 ; WhatsApp ; enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent)"
>
> [seed] firm.office: "91 Wimpole Street, London W1G 0EE (also seen W1G 0EF)"; firm.otherOffices: Monaco, Dubai, Cape Town

**Produits et services cités**

- Debt advisory (the page is described as the contact page of 'a London debt advisory business') [a]
- Enquiry form asks for 'finance type' and 'amount' [seed]; no service list revealed on this page by the searches
- Third-party context only [c]: advising UHNW clients on secured loans £2m-£20m; real estate debt in UK, Western Europe, Southern Africa, Middle East (Spear's 500 profile)

**Cas d'usage**

- Discussing a project by phone (+44 207 459 4440) [a][b]
- Starting an enquiry via form, email or WhatsApp [b][seed]

**Conditions, montants, délais, frais**

- Opening hours: Monday to Friday 9:00-17:00 (structured data) [a]
- No loan sizes, LTV, rates, durations, fees, timescales or security terms are revealed for this page
- Third-party only [c]: secured loans between £2 million and £20 million (Spear's 500 profile)

**Étapes du processus**

- 1. Choose a channel: enquiry form, email enquiry@silveroakcapital.co.uk, WhatsApp ('WhatsApp Us Now') or phone +44 207 459 4440 [a][b][seed]
- 2. (Form, per seed) provide name, contact details, finance type, amount, country of residence, brief overview and consent [seed]
- Alternative third-party route [c]: Spear's 500 listing form, where 'Spear's passes the enquiry directly to the adviser for a response'

**Géographie**

- London, 91 Wimpole Street W1G 0EE [a][b][seed]
- Monaco [a][seed]
- Dubai [a][seed]
- Cape Town [a][seed]
- Third-party [c]: UK, Western Europe, Southern Africa, Middle East (Spear's 500)

**Appels à l'action**

- WhatsApp Us Now [a][b]
- Call +44 207 459 4440 to discuss a project [a][b]
- Email enquiry@silveroakcapital.co.uk [a][b]
- Submit the enquiry form [b][seed]

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (contact) Phone +44 207 459 4440 (also shown as 0207 459 4440 in directories) [a][b]
- (contact) Email enquiry@silveroakcapital.co.uk [a][b][seed]
- (cta) 'WhatsApp Us Now' option on the page [a][b]
- (contact) Address 91 Wimpole Street, London W1G 0EE [a][b][seed]
- (contradiction) Postcode contradiction: W1G 0EE (web pages) vs W1G 0EF (Odoo site, Ts&Cs PDF complaints address) [a][b]
- (number) Hours Monday-Friday 9:00-17:00 per structured data [a]
- (geography) Offices listed: London, Monaco, Dubai, Cape Town [a]
- (positioning) 'The firm is a London debt advisory business' [a]
- (process) Written complaints go to the Managing Director (Ts&Cs PDF) [b]
- (credential) Founded by Jimmy Baillie in 2019 (Spear's 500, third party) [c]
- (number) Advises UHNW clients on secured loans £2m-£20m (Spear's 500, third party) [c]
- (contradiction) 'more than 300 lenders across 100 countries' (Spear's) vs 'over 800 lenders' (LinkedIn) - conflicting [c]
- (credential) Listed on Spear's 500 (adviser profiles 22953 and 6519 for Jimmy Baillie) [c]

_Notes d'extraction : H1 and meta description were NOT revealed; only the indexed <title> 'Silver Oak Capital Speak to Experts' was seen in result titles for [a] and [b]. The opening hours come from the page's structured data (schema markup), which may not be visible text. Body copy of the contact page (intro paragraph, form labels, section headings) was not surfaced by any search; form fields are known only from the …_

#### Property Finance Introducers UK

URL : <https://www.silveroakcapital.co.uk/introducers/>  
Confiance : medium · Recherches effectuées : 3


**Résumé.** Introducer / referral-partner page of Silver Oak Capital (London commercial mortgage broker). Intermediaries can refer borrowers for commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance or aviation finance. The firm positions itself as structuring bespoke debt solutions across the UK and Western Europe (residential and commercial mortgages, bridging, development finance, complex structures, special situations). Introducers are paid 'a competitive percentage of our procurement fee upon the successful completion of the loan', with terms agreed upfront; the actual percentage is not published. Process: Silver Oak issues indicative terms; once the client agrees to proceed, the introducer puts Silver Oak in direct contact with the borrower so it can run the formal application; the introducer keeps receiving milestone updates (valuation, legals, completion) and is paid as agreed on completion. The page stresses discretion, transparency and strict non-circumvention. Contact block: enquiry@silveroakcapital.co.uk, +44 207 459 4440, 91 Wimpole Street, London W1G 0EE. H1 and meta description were not revealed by the search results.

**Sections repérées**

- **Scope / positioning (page intro)** — [a] page text: 'We specialise in structuring bespoke debt solutions across the UK and Western Europe, navigating the complexities of residential and commercial mortgages, bridging, development finance, complex structures, and special situations.' Tool summary [a] frames the page as describing 'a referral program for intermediaries' run by 'a London commercial mortgage broker'.
- **What introducers can refer (products)** — [b] page wording: products are listed as 'commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance'. Consistent with [seed] snippet: 'can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance'.
- **How introducers are paid (fee sharing)** — [a][b][seed] page wording: the firm pays 'a competitive percentage of our procurement fee upon the successful completion of the loan'. [a] 'The terms are set in advance.' [b] 'the details are agreed at the outset'; 'The specific percentage isn't given publicly, and full terms are agreed up front.' [b] tool summary: 'Silver Oak describes its introducer arrangement as fee-sharing, with a share of its procurement fee paid on completion.' Nothing in the results gives the percentage, a minimum fee, or payment timing other than completion.
- **How the process works** — [b] 'After indicative terms are issued and the client agrees to proceed, the introducer is asked to put Silver Oak in direct contact with the borrower. The introducer still receives milestone updates and is paid as agreed.' [b] 'The introducer is asked to connect Silver Oak directly with the borrower so it can run the formal application.' [a] 'regular progress updates through valuation, legals, and completion'. [seed] 'once indicative terms are provided, introducers introduce the borrower directly'.
- **Commitments to introducers** — [a] 'The page promises discretion and non-circumvention'. [b] 'The page says the programme relies on discretion, transparency and strict non-circumvention.' [b] (second paraphrase) 'Its introducer process rests on discretion, openness and a firm non-circumvention rule.'
- **Contact block** — [a] 'enquiry@silveroakcapital.co.uk, +44 207 459 4440, 91 Wimpole Street, London W1G 0EE (from the page's contact block)'. Matches [seed] firm.contact and firm.office (W1G 0EE variant).
- **Related evidence from other site pages (not the introducers page itself)** — [b] /aviation-finance/: 'The typical broker fee for aviation finance is 1.50% of the loan amount.' (tool flags it as 'a general broker benchmark, not confirmed introducer fee terms'). [b] case studies: 'Several case studies describe deals sourced through overseas introducers, including one from Monaco and one from Geneva.' /case-studies/country-estate-refinance/: 'A Monaco-based introducer approached Silver Oak for help finding a private bank to refinance debt on a large English country estate.'
- **Third-party directory context** — [a] 'Introducer Today says it arranges large loans of £2-£20m, and Crunchbase lists it as specializing in development finance and commercial mortgage services. Those listings are older, so the introducers page is the more current source.' Source: https://www.introducertoday.co.uk/trades-directory/silver-oak-capital/ (listing, not the firm's site).

**Phrases verbatim (anglais)**

> [a] (SERP title, also [b]) "Property Finance Introducers UK"
>
> [a] (page text) "We specialise in structuring bespoke debt solutions across the UK and Western Europe, navigating the complexities of residential and commercial mortgages, bridging, development finance, complex structures, and special situations."
>
> [a][b][seed] (page text) "a competitive percentage of our procurement fee upon the successful completion of the loan"
>
> [b] (page wording as listed by tool) "commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance"
>
> [a] (tool summary) "The terms are set in advance."
>
> [b] (tool summary) "the details are agreed at the outset"
>
> [b] (tool summary) "The specific percentage isn't given publicly, and full terms are agreed up front."
>
> [b] (tool summary) "After indicative terms are issued and the client agrees to proceed, the introducer is asked to put Silver Oak in direct contact with the borrower. The introducer still receives milestone updates and is paid as agreed."
>
> [b] (tool summary) "The introducer is asked to connect Silver Oak directly with the borrower so it can run the formal application."
>
> [a] (tool summary) "The page promises discretion and non-circumvention, and regular progress updates through valuation, legals, and completion."
>
> [b] (tool summary) "The page says the programme relies on discretion, transparency and strict non-circumvention."
>
> [b] (tool summary) "Its introducer process rests on discretion, openness and a firm non-circumvention rule."
>
> [a] (tool summary) "The introducers page for Silver Oak Capital, a London commercial mortgage broker, describes a referral program for intermediaries."
>
> [a] (contact block) "enquiry@silveroakcapital.co.uk, +44 207 459 4440, 91 Wimpole Street, London W1G 0EE"
>
> [b] (other page: /aviation-finance/) "The typical broker fee for aviation finance is 1.50% of the loan amount."
>
> [b] (other page: /case-studies/country-estate-refinance/) "A Monaco-based introducer approached Silver Oak for help finding a private bank to refinance debt on a large English country estate."
>
> [b] (tool summary on case studies) "Several case studies describe deals sourced through overseas introducers, including one from Monaco and one from Geneva."
>
> [a] (third party, Introducer Today) "arranges large loans of £2-£20m"
>
> [a] (third party, Crunchbase) "specializing in development finance and commercial mortgage services"
>
> [seed] "can arrange commercial mortgages, buy-to-let mortgages, bridging loans, development finance, marine finance, or aviation finance; pays 'a competitive percentage of our procurement fee upon the successful completion of the loan', details agreed upfront; once indicative terms are provided, introducers introduce the borrower directly."

**Produits et services cités**

- Commercial mortgages (referable by introducers) [b][seed]
- Buy-to-let mortgages (referable by introducers) [b][seed]
- Bridging loans (referable by introducers) [b][seed]
- Development finance (referable by introducers) [b][seed]
- Marine finance (referable by introducers) [b][seed]
- Aviation finance (referable by introducers) [b][seed]
- Residential mortgages (scope statement) [a]
- Complex structures (scope statement) [a]
- Special situations (scope statement) [a]
- Introducer / referral partnership programme with fee sharing [a][b]

**Cas d'usage**

- Intermediary (introducer) refers a borrower needing commercial, buy-to-let, bridging, development, marine or aviation finance and earns a share of the procurement fee on completion [a][b][seed]
- Overseas introducers (Monaco, Geneva) sourcing deals for the firm, e.g. a Monaco-based introducer seeking a private bank to refinance debt on a large English country estate [b, case studies]

**Conditions, montants, délais, frais**

- Introducer remuneration: 'a competitive percentage of our procurement fee' [a][b][seed]
- Payment timing: 'upon the successful completion of the loan' [a][b][seed]
- Terms: agreed upfront / set in advance; actual percentage not published [a][b]
- No loan sizes, LTV, rates, durations, security or timescales are stated on this page in the results obtained
- Other page benchmark (not introducer terms): typical broker fee for aviation finance 1.50% of the loan amount [b, /aviation-finance/]
- Third-party listing (Introducer Today): large loans of £2-£20m [a]

**Critères d'éligibilité**

- Intermediaries / introducers (described by tool summary [a] as 'a referral program for intermediaries'); no qualifying criteria, regulatory status or minimum deal size for introducers revealed in results

**Étapes du processus**

- 1. Introducer refers a borrower/enquiry to Silver Oak Capital [a][b]
- 2. Silver Oak issues indicative terms [b][seed]
- 3. Client agrees to proceed [b]
- 4. Introducer puts Silver Oak in direct contact with the borrower so it can run the formal application [b][seed]
- 5. Introducer receives regular milestone/progress updates through valuation, legals and completion [a][b]
- 6. On successful completion, introducer is paid the agreed percentage of the procurement fee [a][b][seed]

**Géographie**

- United Kingdom [a]
- Western Europe [a]
- London office: 91 Wimpole Street, London W1G 0EE [a]
- Introducers based in Monaco and Geneva mentioned in case studies [b]

**Appels à l'action**

- Contact block on page: email enquiry@silveroakcapital.co.uk, phone +44 207 459 4440, address 91 Wimpole Street, London W1G 0EE [a]
- No button/link wording (e.g. 'Become an introducer', 'Register') revealed by the results

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (promise/fee) Pays introducers 'a competitive percentage of our procurement fee upon the successful completion of the loan' [a][b][seed]
- (promise) Fee-share details agreed upfront / terms set in advance [a][b][seed]
- (promise) Discretion, transparency and strict non-circumvention [a][b]
- (promise) Regular progress updates through valuation, legals and completion [a]
- (positioning) 'We specialise in structuring bespoke debt solutions across the UK and Western Europe' [a]
- (third-party/number) Introducer Today directory: arranges large loans of £2-£20m [a]
- (third-party) Crunchbase: specializing in development finance and commercial mortgage services [a] (Crunchbase slug 'silver-oak-capital' may be ambiguous with other Silver Oak entities; tool attributed it to this firm)
- (evidence/testimonial-like) Case studies describe deals sourced through overseas introducers in Monaco and Geneva [b]
- (number/other-page) Typical broker fee for aviation finance 1.50% of the loan amount [b, /aviation-finance/, not this page]

_Notes d'extraction : SERP title for the page is 'Property Finance Introducers UK' (seen in [a] and [b] link lists); H1 and meta description were NOT revealed, so h1/metaDescription are left empty rather than invented. Only one sentence of page text was returned verbatim ([a] scope sentence) plus the fee phrase; most other content is the search tool's paraphrase of the page, tagged '(tool summary)'. The percentage of …_

#### Lenders (navigation label per seed; actual <title> not revealed by any search result)

URL : <https://www.silveroakcapital.co.uk/lenders/>  
Confiance : low · Recherches effectuées : 3

**H1 :** Not revealed. Nav label is 'Lenders' [seed]; no result returned the page's H1.  
**Meta description :** Not revealed. Search (a) for the exact URL did not return the page; search (b) with site: operator did not return it either.

**Résumé.** The /lenders/ page could not be surfaced directly: search (a) on the exact URL returned the homepage, /commercial-mortgage-broker/, /property-development-finance/, /about-us/, LinkedIn, Instagram and a Letting Agent Today directory listing but stated 'I couldn't find the exact page at that URL in the results'; search (b) (site: + lenders panel commission unrestricted) returned other site pages and the Ts&Cs PDF; search (c) returned only unrelated US 'Silver Oak' wealth-management firms. The only content specific to /lenders/ comes from the seed first-pass snippet: the firm 'generally focuses on transactions upwards of £500,000', 'works with an unrestricted number of lenders' and 'typically receives commission from lenders, with details disclosed during the process'. Indirect material gathered: lender-count claims that vary by page (300+, 500+, 700+, 800+), lender-type lists (private banks, investment banks, specialist lenders, private debt funds, debt funds), the Ts&Cs statement that the firm offers products from across the market but not deals obtainable only by going direct to a lender, and introducer-page wording on commissions, discretion, transparency and strict non-circumvention.

**Sections repérées**

- **Transaction focus [seed /lenders/]** — The firm 'generally focuses on transactions upwards of £500,000'. Consistent with the homepage claim 'over £500,000' [seed loanSizeClaims] and the about page '£500K to £20m' [seed].
- **Lender relationships / scope of market [seed /lenders/, b]** — Works with 'an unrestricted number of lenders' [seed /lenders/]. The Ts&Cs document (2026/02) says the firm 'offers products from across the market, but not deals that you can only obtain by going direct to a lender' [b]. Another site page says the firm draws on 'deep relationships with banks, specialist lenders, debt funds and private banks' [b] (source page not identified by the search summary).
- **Remuneration / commission disclosure [seed /lenders/, b]** — The firm 'typically receives commission from lenders, with details disclosed during the process' [seed /lenders/]. The introducers page describes a network that lets partners 'earn commissions through trusted referrals and flexible lending solutions' and says the process rests on 'discretion, transparency, and strict non-circumvention' [b]; the search summary noted it 'does not say whether commission is capped or restricted' and that the snippet was truncated with no fee schedule.
- **Size of lender network (contradictory across pages) [a, seed]** — Homepage: 'arranges debt on loans through our network of over 800 lenders' [a]. About page: '800+ Lenders' [a]. Commercial mortgage broker page: '700+ Lenders' [a]. Property development finance page: '300+ Lenders' [a]. LinkedIn: '500+ different private banks, investment banks, specialist lenders & private debt funds' [a]. Letting Agent Today directory (older): 'through our network of over 300 lenders' [a]. The search tool's own remark: 'The inconsistency suggests the count has changed over time, so the current figure is best confirmed directly with the firm.' [a]. Seed attributes 800+ to hom…
- **Panel valuers (valuation context, not commission) [b]** — Several site pages (post-planning land, conversions) mention lenders 'whose panel valuers' understand a particular value basis such as residual land value or local conversion demand [b]. The jewellery loans page says 'lenders typically commission an independent valuer' [b] - the word 'commission' here refers to valuations, not broker fees.

**Phrases verbatim (anglais)**

> [seed /lenders/] generally focuses on transactions upwards of £500,000
>
> [seed /lenders/] works with an unrestricted number of lenders and typically receives commission from lenders, with details disclosed during the process
>
> [a homepage] arranges debt on loans through our network of over 800 lenders
>
> [a LinkedIn] 500+ different private banks, investment banks, specialist lenders & private debt funds
>
> [a /commercial-mortgage-broker/] 700+ Lenders
>
> [a /property-development-finance/] 300+ Lenders
>
> [a /about-us/] 800+ Lenders
>
> [a Letting Agent Today directory, older] through our network of over 300 lenders
>
> [a search-tool remark] I couldn't find the exact page at that URL in the results.
>
> [b /introducers/] earn commissions through trusted referrals and flexible lending solutions
>
> [b /introducers/] discretion, transparency, and strict non-circumvention
>
> [b unspecified site page] deep relationships with banks, specialist lenders, debt funds and private banks
>
> [b Ts-and-Cs.pdf 2026/02] offers products from across the market, but not deals that you can only obtain by going direct to a lender
>
> [b /post-planning-land-acquisitions/ and /conversions/] whose panel valuers
>
> [b /jewellery-diamonds-gemstones-loans-advisory/] lenders typically commission an independent valuer
>
> [b search-tool remark] The search didn't find any page on Silver Oak Capital's site that addresses unrestricted lender panel commission.
>
> [c search-tool remark] The search didn't turn up anything about Silver Oak Capital as a lender or about lender commissions or loan fees.
>
> [seed /introducers/] a competitive percentage of our procurement fee upon the successful completion of the loan

**Produits et services cités**

- Debt advisory / brokerage arranging loans through a lender network [a, seed]
- Commercial mortgages [seed /introducers/]
- Buy-to-let mortgages [seed /introducers/]
- Bridging loans [seed /introducers/]
- Development finance [seed /introducers/]
- Marine finance [seed /introducers/]
- Aviation finance [seed /introducers/]
- Jewellery, diamonds and gemstones loans advisory [b - new URL, not in seed]

**Cas d'usage**

- No use cases specific to the /lenders/ page were revealed. Seed snippet of /lenders/ concerns transaction size, lender scope and commission disclosure only.

**Conditions, montants, délais, frais**

- Minimum focus: transactions upwards of £500,000 [seed /lenders/]
- Remuneration: commission typically received from lenders, details disclosed during the process [seed /lenders/]
- Number of lenders: unrestricted [seed /lenders/]; counts cited elsewhere 300+/500+/700+/800+ [a]
- Market scope: products from across the market, excluding direct-only lender deals [b Ts&Cs]
- Cross-reference (other pages, not /lenders/): fee claims of 1.00% UK commercial / 1.50% outside UK / 1.00% prime residential (old /types-of-borrowing/), blog ~£1,500 application + 0.5% at offer + 0.5% at completion, Ts&Cs client-specific fee agreement, introducers paid a competitive percentage of t…
- No LTV, rate, duration or timescale figures appeared in any of the three results for this page

**Critères d'éligibilité**

- Transactions generally upwards of £500,000 [seed /lenders/]
- No other eligibility criteria for the /lenders/ page were revealed

**Types de prêteurs**

- private banks [a LinkedIn; b]
- investment banks [a LinkedIn]
- specialist lenders [a LinkedIn; b]
- private debt funds / debt funds [a LinkedIn; b]
- banks [b]
- senior debt, mezzanine debt and equity lenders [seed /property-development-finance/ - cross-reference]
- whole-loan providers [seed /faq/ - cross-reference]

**Étapes du processus**

- Commission details are disclosed during the process [seed /lenders/]
- Cross-reference (not /lenders/): the firm typically narrows lenders to as many as 3 or 4 potential partners per deal [seed /commercial-mortgage-broker/, /property-development-finance/]
- Cross-reference (not /lenders/): once indicative terms are provided, introducers introduce the borrower directly [seed /introducers/]

**Géographie**

- London-based [a]
- UK-wide lender network implied; no geography specific to /lenders/ page revealed
- Cross-reference [seed]: offices London (91 Wimpole Street), Monaco, Dubai, Cape Town; markets UK, Western Europe, Middle East, United States

**Questions fréquentes**

- **No FAQ items were revealed for the /lenders/ page.** None of the three results returned question/answer content from this page.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number [seed /lenders/]) generally focuses on transactions upwards of £500,000
- (promise/positioning [seed /le…) works with an unrestricted number of lenders
- (disclosure [seed /lenders/]) typically receives commission from lenders, with details disclosed during the process
- (number [a homepage; a about p…) network of over 800 lenders
- (number [a /commercial-mortgag…) 700+ Lenders
- (number [a /property-developme…) 300+ Lenders
- (number [a LinkedIn]) 500+ different private banks, investment banks, specialist lenders & private debt funds
- (number [a Letting Agent Today…) network of over 300 lenders
- (scope disclosure [b Ts&Cs]) offers products from across the market, but not deals that you can only obtain by going direct to a lender
- (positioning [b]) deep relationships with banks, specialist lenders, debt funds and private banks
- (promise [b /introducers/]) introducers earn commissions through trusted referrals; discretion, transparency, and strict non-circumvention
- (contradiction [a, seed]) CONTRADICTION: lender count stated as 300+, 500+, 700+ and 800+ depending on page/source
- (absence) No testimonials, awards or credentials were surfaced for the /lenders/ page

_Notes d'extraction : Query (a) [extended, exact URL] did not return the /lenders/ page; its summary explicitly said the exact page was not found and instead compiled lender-count claims from other pages. Query (b) [extended, 'site:silveroakcapital.co.uk lenders panel commission unrestricted'] did not return /lenders/ either; it yielded Ts&Cs wording, introducers wording and two previously unknown URLs (/jewellery-dia…_

#### Mortgage & Development Finance Calculator UK

URL : <https://www.silveroakcapital.co.uk/lender-calculator/>  
Confiance : low · Recherches effectuées : 3


**Résumé.** Page body was not retrievable (direct fetch blocked; the URL-exact search [a] did not surface the page). Search [b] confirmed the page exists with the SERP title 'Mortgage & Development Finance Calculator UK' and summarised it as a tool for estimating borrowing capacity, loan terms and repayments for commercial and development finance deals across the UK: the user picks a project type and a loan type (seed adds loan size and term) and the tool shows how many lenders might back the project. Search [c] returned no Silver Oak Capital results at all. No form field labels, output format, lender names, rates or H1/meta text were revealed. Related leverage benchmarks surfaced from sibling pages (first-time developer 60-65% LTGDV max; stretch senior ~90% LTC cap; residential 75% LTGDV / 90% LTC) are recorded as context, not as calculator content.

**Sections repérées**

- **Purpose of the tool (seed + [b])** — Estimates borrowing capacity, loan terms and repayments for commercial and development finance deals across the UK. Positioned in the top navigation as 'Lender Calculator'; SERP title reads 'Mortgage & Development Finance Calculator UK'.
- **Inputs (seed + [b])** — Project type, loan type, loan size and term (seed). [b] confirms project type and loan type. Exact field labels, option lists and units were not revealed.
- **Output (seed + [b])** — Shows how many lenders are willing to lend / might back the particular project. Whether lender names, indicative rates or repayment figures are displayed was not revealed.
- **Loan types possibly covered ([b], ambiguous)** — Search summary mentions senior development finance, mezzanine, stretch senior and first-time developer options alongside the calculator; this may describe the calculator's loan-type dropdown or simply the sibling service pages that ranked for the query.
- **Related leverage benchmarks from sibling pages ([b])** — First-time developers: maximum 60% to 65% LTGDV, larger deposit and higher contingency (/first-time-developer-finance/). Stretch senior: typical loan-to-cost cap around 90%; residential figures 75% LTGDV and 90% LTC (/stretch-senior-development-finance/). LTV / LTC / LTGDV definitions with worked examples in the dedicated article.
- **Companion tools ([a], [b])** — Yacht Finance Calculator (case study page and a standalone /yacht-finance-calculator/ URL) for estimating yacht loan repayments and comparing terms. Development Finance Scorecard (developerscorecard.silveroakcapital.co.uk) scoring a project across five metrics in under ten minutes, with a follow-up report and optional consultation.
- **Not revealed** — H1, meta description, on-page copy, form field labels, disclaimers, CTA wording, lender list, rate assumptions, testimonials, FAQ blocks.

**Phrases verbatim (anglais)**

> [seed] tool estimating borrowing capacity, loan terms and repayments for commercial and development finance across the UK; select project type, loan type, loan size and term; shows how many lenders are willing to lend on a particular project.
>
> [b] SERP title for /lender-calculator/: "Mortgage & Development Finance Calculator UK"
>
> [b] "Its main page is a tool for estimating borrowing capacity, loan terms, and repayments for commercial and development finance deals across the UK. You pick a project type and loan type, and it shows how many lenders might back the project. It also offers senior development finance, mezzanine, stretch senior, and first-time developer options." (search-tool summary, not page text; the last sentence may refer to si…
>
> [b] "For first-time developers, one page cites a maximum of 60% to 65% LTGDV, plus a larger deposit and higher contingency." (summary of /first-time-developer-finance/, not the calculator page)
>
> [b] "A stretch senior page gives a typical loan-to-cost cap of around 90%, with the residential figures of 75% LTGDV and 90% LTC noted." (summary of /stretch-senior-development-finance/)
>
> [b] "A separate article defines loan-to-cost and loan-to-gross-development-value with worked examples, which helps when reading the calculator's outputs." (refers to /development-finance-ltv-ltc-and-ltgdv-explained-.../)
>
> [b] "A separate Development Finance Scorecard tool scores a project across five metrics in under ten minutes, with a follow-up report and an optional consultation." (refers to https://developerscorecard.silveroakcapital.co.uk/)
>
> [b] "the search results show page ages ranging from about 8 days to several years"
>
> [a] "I couldn't find the exact page at that URL in the results."
>
> [a] Yacht finance calculator case study: "a tool for estimating yacht loan repayments and comparing terms. It notes that a longer term normally means smaller monthly payments, while a shorter term means higher monthly payments." (sibling page /case-studies/yacht-finance-calculator/, not the lender calculator)
>
> [a] "The main site lists a 'Lender Calculator' link in its menu, so the page exists as part of the site's structure."
>
> [a] "The firm says it provides direct access to mortgage-only luxury asset lenders." (home page, per summary)
>
> [a] "None of the results describe what the lender calculator actually computes or what fields it asks for."
>
> [c] "I didn't find any results about Silver Oak Capital itself" (query returned only unrelated third-party development-finance pages; nothing recorded from them)

**Produits et services cités**

- Lender / development finance calculator (borrowing capacity, loan terms, repayments)
- Commercial finance
- Property development finance
- Senior development finance ([b], possibly as calculator option)
- Stretch senior development finance ([b])
- Mezzanine finance ([b])
- First-time developer finance ([b])
- Yacht finance calculator (sibling tool, [a]/[b])
- Development Finance Scorecard (sibling tool, [b])

**Cas d'usage**

- Estimating how much a developer or commercial borrower could raise for a given project (seed, [b])
- Checking how many lenders in the broker's panel would consider a given project type / loan type / size / term before applying (seed, [b])
- Estimating loan terms and repayments for commercial and development finance (seed, [b])

**Conditions, montants, délais, frais**

- Inputs: project type, loan type, loan size, term (seed; [b] confirms project type and loan type)
- Geography: UK-wide deals (seed, [b])
- First-time developer leverage: max 60-65% LTGDV, larger deposit, higher contingency (/first-time-developer-finance/ via [b], not calculator text)
- Stretch senior leverage: typical LTC cap ~90%; residential 75% LTGDV and 90% LTC (/stretch-senior-development-finance/ via [b])
- Yacht calculator principle: longer term normally means smaller monthly payments, shorter term higher monthly payments ([a], sibling page)
- No rates, fees, minimum/maximum loan sizes, durations or security requirements were revealed for the lender calculator itself

**Critères d'éligibilité**

- Not revealed for this page. Sibling-page context only: first-time developers face lower leverage (60-65% LTGDV) and need larger deposit and higher contingency ([b]).

**Types de prêteurs**

- Commercial and development finance lenders (count of willing lenders is the calculator's output; seed, [b])
- Senior development finance lenders ([b], ambiguous whether calculator option)
- Stretch senior lenders ([b])
- Mezzanine lenders ([b])
- First-time developer lenders ([b])
- Mortgage-only luxury asset lenders (home page, per [a] summary; not calculator-specific)

**Étapes du processus**

- Select project type (seed, [b])
- Select loan type (seed, [b])
- Select loan size (seed)
- Select term (seed)
- View how many lenders are willing to lend on the project (seed, [b])

**Géographie**

- United Kingdom (across the UK)
- London (article title about London resi-led development deals, [b])

**Appels à l'action**

- Not revealed for this page.
- Sibling-page CTA wording seen: 'Development Finance Brokers - Get a Instant Quote Now' (SERP title of /development-finance-brokers/, [b])
- Scorecard: follow-up report and optional consultation after scoring ([b])

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (feature (seed, [b])) Tool estimates borrowing capacity, loan terms and repayments for commercial and development finance across the UK
- (feature (seed, [b])) Shows how many lenders are willing to lend / might back a particular project
- (metadata ([b])) SERP title: Mortgage & Development Finance Calculator UK
- (number (sibling page /first-t…) First-time developers: maximum 60% to 65% LTGDV
- (number (sibling page /stretch…) Stretch senior: typical loan-to-cost cap around 90%; residential 75% LTGDV and 90% LTC
- (feature/timescale (developers…) Development Finance Scorecard scores a project across five metrics in under ten minutes, with a follow-up report and an optional consultation
- (positioning (home page, [a])) Firm provides direct access to mortgage-only luxury asset lenders
- (article title / statistic (ne…) Why 70% of London Development Finance Deals Get Rejected

_Notes d'extraction : Search (a) (extended, exact URL) did not return the target page; it returned the home page, a NW London bridge case study and the yacht finance calculator case study, plus unrelated US 'Silver Oak' entities (silveroakcp.com, Silver Oak Funding) which were ignored. Search (b) (extended, site:) returned the target page as first result with SERP title 'Mortgage & Development Finance Calculator UK' a…_

#### Property Finance FAQs

URL : <https://www.silveroakcapital.co.uk/faq/>  
Confiance : low-medium · Recherches effectuées : 3

**H1 :** NOT CONFIRMED - only the search-result title 'Property Finance FAQs' [b] was revealed; the on-page H1 was not surfaced by any result.  
**Meta description :** NOT CONFIRMED - the search tool's summary [b] says the page 'covers commercial mortgages, development finance, bridging loans, and property funding, with sections on buy-to-let, foreign national, Prime London, international, and portfolio mortgages', which may paraphrase the meta description but is not verbatim page text.

**Résumé.** The /faq/ page is titled 'Property Finance FAQs' [b]. Per the search tool's summary [b] it covers commercial mortgages, development finance, bridging loans and property funding, with sections on buy-to-let, foreign national, Prime London, international and portfolio mortgages. Only one verbatim sentence from the page was surfaced: 'Most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value.' [b]. The seed (first-pass snippet) adds paraphrased FAQ content on HMO LTV (typically 75%, some lenders 80% in exceptional circumstances), Article 4 directions helping valuations, Consumer Buy-to-Let falling under FCA rules, the 40% owner/family occupation threshold making a loan regulated, non-resident lending needing stronger documentation / more conservative LTV / path-of-funds AML-KYC evidence, portfolio loans sitting alongside existing individual mortgages, a narrowed premium on portfolio products, sector-agnostic whole-loan providers (PBSA, hotels, BTR, industrial), some lenders accepting first-time HMO buyers with strong personal income and a clear management plan, and a 'network of over 800 lenders'. Search [a] (exact URL) did not return the FAQ page at all and only returned secondhand directory/profile pages; search [c] returned nothing about Silver Oak Capital (only other UK lenders' HMO criteria, ignored). The actual question wording, number of FAQ entries, page structure, CTAs and any FAQ on commercial mortgages/development/bridging remain unrevealed.

**Sections repérées**

- **Buy-to-Let mortgages (section confirmed by [b])** — [b] verbatim: 'Most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value.' [b] summary: 'most products cap lending at 75% loan-to-value, though lenders vary'. [seed] paraphrase: Consumer Buy-to-Let can fall under FCA rules; 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan'.
- **HMO finance (section inferred from [seed] snippet; not named in [b] section list)** — [seed] paraphrase: HMO max LTV typically 75%, some lenders 80% in exceptional circumstances; an Article 4 direction can help valuations; some lenders allow first-time HMO buyers with strong personal income and a clear management plan.
- **Foreign national / international / non-resident mortgages (sections 'foreign national' and 'international' confirmed by…** — [seed] paraphrase: non-resident lending needs stronger documentation, more conservative LTV, and evidence of path of funds (AML/KYC). No verbatim text surfaced.
- **Prime London mortgages (section confirmed by [b])** — Section named in the [b] summary only; no content surfaced from any result or the seed.
- **Portfolio mortgages (section confirmed by [b])** — [seed] paraphrase: 'A portfolio loan can sit alongside existing individual mortgages'; the premium on portfolio products has narrowed.
- **Commercial mortgages / development finance / bridging loans / property funding (topics named in [b] summary)** — [b] summary says the page 'covers commercial mortgages, development finance, bridging loans, and property funding'. [seed] paraphrase possibly belonging here: whole-loan providers are often sector-agnostic (PBSA, hotels, BTR, industrial). No verbatim FAQ text on these topics surfaced.
- **Lender network (placement on page unknown)** — [seed] paraphrase: 'network of over 800 lenders'. Contradiction: other site pages cite 300+ (/property-development-finance/), 500+ (LinkedIn) and 700+ (/commercial-mortgage-broker/, /bridging-loans-uk/).

**Phrases verbatim (anglais)**

> [b] (search-result title of /faq/) "Property Finance FAQs"
>
> [b] (page text, buy-to-let answer) "Most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value."
>
> [b] (search tool summary, not page text) "It covers commercial mortgages, development finance, bridging loans, and property funding, with sections on buy-to-let, foreign national, Prime London, international, and portfolio mortgages."
>
> [b] (search tool summary, not page text) "most products cap lending at 75% loan-to-value, though lenders vary"
>
> [seed] (first-pass snippet of /faq/) "If you or a family member occupies more than 40% of the property, it becomes a regulated loan"
>
> [seed] (first-pass snippet of /faq/) "A portfolio loan can sit alongside existing individual mortgages"
>
> [seed] (first-pass snippet of /faq/, paraphrase) "HMO max LTV typically 75%, some lenders 80% in exceptional circumstances; Article 4 direction can help valuations; BTL products max out at 75% LTV (25% deposit); Consumer Buy-to-Let can fall under FCA rules"
>
> [seed] (first-pass snippet of /faq/, paraphrase) "non-resident lending needs stronger documentation, more conservative LTV, path of funds (AML/KYC)"
>
> [seed] (first-pass snippet of /faq/, paraphrase) "premium on portfolio products has narrowed; whole-loan providers often sector-agnostic: PBSA, hotels, BTR, industrial; some lenders allow first-time HMO buyers with strong personal income and clear management plan; network of over 800 lenders"
>
> [a] (secondhand directory/profile pages, NOT the FAQ page) "debt advisory firm located in London, UK"
>
> [a] (secondhand, NOT the FAQ page) "does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions"
>
> [a] (secondhand founder profile, NOT the FAQ page) "founded Silver Oak Capital in 2019 with a focus on loans between £2m and £20m"
>
> [a] (directory listing) "enquiry@silveroakcapital.co.uk" and "0207 459 4440"
>
> [b] (other site page /hotel-finance/, FAQ-style answer) "Silver Oak Capital can structure the application to rely on their experience rather than yours to satisfy the lender."
>
> [b] (other site page /superyacht-finance/, FAQ-style answer) "We can arrange separate asset finance for tenders, toys, and helicopters, or in some cases, wrap them into the main superyacht facility"
>
> [b] (other site page /post-planning-land-acquisitions/, FAQ-style answer on term) "Typically 12 to 18 months."
>
> [b] (other site page /auction-finance/, FAQ-style answer on decision in principle) "Typically within 1 to 4 hours."

**Produits et services cités**

- Commercial mortgages [b]
- Development finance [b]
- Bridging loans [b]
- Property funding [b]
- Buy-to-let mortgages [b][seed]
- HMO finance [seed]
- Foreign national mortgages [b][seed]
- Prime London mortgages [b]
- International (property) mortgages [b]
- Portfolio mortgages [b][seed]
- Non-resident lending [seed]
- Whole loans (via sector-agnostic whole-loan providers) [seed]

**Cas d'usage**

- Landlord buying a buy-to-let with a 25% deposit (75% LTV cap) [b]
- First-time HMO buyer with strong personal income and a clear management plan (accepted by some lenders) [seed]
- Non-resident / foreign national borrowing against UK property with path-of-funds evidence [seed]
- Portfolio landlord adding a portfolio loan alongside existing individual mortgages [seed]
- Owner or family member occupying more than 40% of the property (loan becomes regulated) [seed]
- Whole-loan funding for PBSA, hotels, BTR and industrial assets [seed]

**Conditions, montants, délais, frais**

- BTL: 'Most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value.' [b]; lenders vary [b]
- HMO: max LTV typically 75%; some lenders 80% in exceptional circumstances [seed]
- Non-resident lending: more conservative LTV than resident lending [seed]
- Portfolio products: the premium (pricing) has narrowed [seed] - no figure given
- No interest rates, fees, loan sizes, durations, timescales or security details for the FAQ page were revealed by [a], [b] or [c]
- Firm-level, secondhand [a]: focus on loans between £2m and £20m (contradicts home/lenders pages 'over £500,000' and about-us '£500k to £20m' per seed)

**Critères d'éligibilité**

- BTL borrower needs a 25% deposit for most products (75% LTV cap) [b]
- HMO borrowers: up to 75% LTV typically, 80% only with some lenders in exceptional circumstances [seed]
- First-time HMO buyers accepted by some lenders if they have strong personal income and a clear management plan [seed]
- Non-residents: stronger documentation, more conservative LTV, path of funds (AML/KYC) required [seed]
- If the borrower or a family member occupies more than 40% of the property, the loan becomes regulated [seed]
- Consumer Buy-to-Let can fall under FCA rules [seed]

**Types de prêteurs**

- 'network of over 800 lenders' [seed /faq/] (contradicts 300+/500+/700+ cited on other pages per seed)
- Whole-loan providers, often sector-agnostic: PBSA, hotels, BTR, industrial [seed]
- Unnamed 'some lenders' offering 80% LTV on HMO in exceptional circumstances [seed]
- Unnamed 'some lenders' accepting first-time HMO buyers [seed]
- No private banks, challenger banks or specific lender names revealed for this page

**Étapes du processus**

- No process steps revealed for the FAQ page by [a], [b] or [c]. Only process-related item: non-resident borrowers must evidence path of funds for AML/KYC [seed].

**Géographie**

- United Kingdom (BTL/HMO, FCA regulation, Article 4 directions imply England/UK) [b][seed]
- Prime London (named section) [b]
- International / foreign national / non-resident borrowers (named sections) [b][seed]
- Firm located in London, UK [a secondhand]; office 91 Wimpole Street, London W1G 0EE [seed]

**Appels à l'action**

- No calls to action from the FAQ page were revealed by [a], [b] or [c]
- Site-level contact routes per seed (not confirmed on /faq/): enquiry form, enquiry@silveroakcapital.co.uk, WhatsApp, +44 207 459 4440; [a] directory lists enquiry@silveroakcapital.co.uk and 0207 459 4440

**Questions fréquentes**

- **[topic inferred; question wording not confirmed] What is the maximum LTV on a buy-to-let mortgage?** [b] verbatim: 'Most BTL products will max out at 75% LTV, requiring a deposit from the borrower of 25% of the property's value.' Lenders vary [b].
- **[topic inferred from seed] What is the maximum LTV for HMO finance?** [seed] paraphrase: typically 75%; some lenders go to 80% in exceptional circumstances.
- **[topic inferred from seed] Does an Article 4 direction affect an HMO?** [seed] paraphrase: an Article 4 direction can help valuations.
- **[topic inferred from seed] Can a first-time buyer get HMO finance?** [seed] paraphrase: some lenders allow first-time HMO buyers with strong personal income and a clear management plan.
- **[topic inferred from seed] Is buy-to-let regulated by the FCA?** [seed] paraphrase: Consumer Buy-to-Let can fall under FCA rules; verbatim: 'If you or a family member occupies more than 40% of the property, it becomes a regulated loan'.
- **[topic inferred from seed] Can non-residents / foreign nationals borrow?** [seed] paraphrase: non-resident lending needs stronger documentation, more conservative LTV, and path of funds evidence (AML/KYC).
- **[topic inferred from seed] Can I take a portfolio loan if I already have individual mortgages?** [seed] verbatim: 'A portfolio loan can sit alongside existing individual mortgages'. Paraphrase: the premium on portfolio products has narrowed.
- **[topic inferred from seed] Which sectors do whole-loan providers fund?** [seed] paraphrase: whole-loan providers are often sector-agnostic: PBSA, hotels, BTR, industrial.
- **[topic inferred from seed] How many lenders does Silver Oak Capital work with?** [seed] paraphrase: a network of over 800 lenders.
- **[unrevealed] Any FAQ entries on commercial mortgages, development finance, bridging loans, Prime London or international mortgages** The [b] summary says these topics/sections exist on the page, but no question or answer text was surfaced.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) Network of over 800 lenders [seed /faq/]; contradiction: 300+ on /property-development-finance/, 500+ on LinkedIn, 700+ on /commercial-mortgage-broker/ and /bridging-loans-uk/ (seed)
- (term) Most BTL products max out at 75% LTV (25% deposit) [b]
- (term) HMO LTV typically 75%, some lenders 80% in exceptional circumstances [seed]
- (regulatory) Occupation of more than 40% of the property by the borrower or a family member makes the loan regulated [seed]
- (regulatory) Consumer Buy-to-Let can fall under FCA rules [seed]
- (statement) An Article 4 direction can help HMO valuations [seed]
- (market) The premium on portfolio products has narrowed [seed]
- (market) Whole-loan providers are often sector-agnostic (PBSA, hotels, BTR, industrial) [seed]
- (credential) Secondhand [a], not from FAQ page: founded in 2019 with a focus on loans between £2m and £20m; contradicts 'over £500,000' (home, /lenders/) and '£500k to £20m' (/about-us/) per seed; seed also notes one page says 2018
- (positioning) Secondhand [a], not from FAQ page: 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions'
- (absence) No testimonials, awards, named lenders or statistics were revealed for the FAQ page

_Notes d'extraction : Searches performed: (a) extended, exact URL - FAQ page not returned, only secondhand profiles and unrelated US/Indian 'Silver Oak' firms (ignored: silveroakcapital.in, silveroakmultifamily.com, silveroaksp.com, Form D Silver Oak Capital LLC, Oaktree, Silverfleet); (b) extended, 'site:silveroakcapital.co.uk faq frequently asked questions' - returned the FAQ page title, section list and one verbati…_

#### Types of Borrowing - Silver Oak Capital

URL : <https://www.silveroakcapital.co.uk/types-of-borrowing/>  
Confiance : medium · Recherches effectuées : 3

**H1 :** Not revealed by search results. Search-result title tag reads "Types of Borrowing - Silver Oak Capital" [a][b].  
**Meta description :** Not revealed by search results.

**Résumé.** Older overview page (search tool reports its cached copy is roughly 1,600 days old, i.e. circa 2022) grouping Silver Oak Capital's lending into three blocks. (1) Development finance: senior, stretched senior, mezzanine / 2nd charge and joint venture equity, typical broker fee 1% of the loan, with a worked example of a GBP 10m loan at 6.5% fixed over 18 months at 75% loan-to-GDV. (2) Bridging finance: bridge to purchase, bridge to sell, equity release, 2nd charge and refinance; typical broker fee 1%, or 1.5% for loans outside the UK; quick to arrange, no affordability assessment, interest paid as a lump sum at end of term. (3) Other: high net worth / prime residential mortgages (seed: GBP 5m and above, policies vary by private bank branch, 1.00% fee), wealth management ("We can help with your wealth management.") and marine finance for superyacht purchases. No raw page text, H1, meta description, CTA, process steps or FAQ were surfaced; everything comes from search-engine summaries plus the seed file.

**Sections repérées**

- **Development finance** — [a] Options listed: senior, stretched senior, mezzanine / 2nd charge, joint venture equity. Typical broker fee: 1% of the loan. Worked example: GBP 10 million loan, 6.5% fixed rate, 18 months, 75% loan-to-GDV. [seed] Confirms the same list (senior, stretched senior, mezzanine/second charge, joint venture equity), broker fees around 1%, worked example at 6.5% fixed. Related page /property-development-finance/ (seen in [a]) says development loans accrue interest that is rolled up and repaid on completion through sales or refinancing.
- **Bridging finance** — [a][b] Variants listed: bridge to purchase, bridge to sell, equity release, 2nd charge, refinance. [a] Typical broker fees 1%, or 1.5% for loans outside the UK. [a][b][seed] Loans are quick to arrange, need no affordability assessment, and interest is paid as a lump sum at the end of the term.
- **Prime residential / high net worth mortgages** — [a] The page mentions high net worth mortgages. [seed] Prime residential mortgages GBP 5m and above; policies vary by private bank branch; broker fee 1.00% prime residential.
- **Wealth management** — [a] The page mentions wealth management. [seed] Verbatim: "We can help with your wealth management."
- **Marine finance** — [a] The page mentions marine finance for superyacht purchases. No figures surfaced.
- **Lender appetite / asset classes (seed only)** — [seed] Retail outlets cited as an income-producing asset class; each lender has its own appetite for property types.

**Phrases verbatim (anglais)**

> [a] "The search returned the Types of Borrowing page itself, though its cached copy is about 1,600 days old, so its figures may be out of date."
>
> [a] "Development finance: The page lists senior, stretched senior, mezzanine/2nd charge, and joint venture equity options, with a typical broker fee of 1% of the loan."
>
> [a] "A worked example shows a £10 million loan at a 6.5% fixed rate over 18 months, with a 75% loan-to-GDV ratio."
>
> [a] "Bridging finance: The page lists bridge to purchase, bridge to sell, equity release, 2nd charge, and refinance options. Typical broker fees are 1%, or 1.5% for loans outside the UK."
>
> [a] "It says these loans need no affordability assessment and pay interest as a lump sum at the end of the term."
>
> [a] "Other services: The page also mentions high net worth mortgages, wealth management, and marine finance for superyacht purchases."
>
> [a] (related page /property-development-finance/) "its development loans accrue interest that is rolled up and repaid on completion, through sales or refinancing."
>
> [a] (related page /lenders/) "the firm generally focuses on transactions above £500,000."
>
> [b] "The 'Types of Borrowing' page lists bridge to purchase, bridge to sell, equity release, 2nd charge and refinance as bridging variants."
>
> [b] "It notes that bridging loans are quick to arrange and do not require any affordability assessment, with the loan interest paid as a lump sum at the end of the term."
>
> [b] "Note that the 'Types of Borrowing' page is roughly 1,600 days old, so the product list may have changed. The site's other pages are more recent."
>
> [b] (related page /faq/) "The FAQ describes releasing cash through a bridge, then refinancing onto a standard buy-to-let mortgage. It says that this is a very common use of equity release bridging, and that lenders generally fund tax bills if there is a clear exit strategy (Corporation Tax, VAT, or an Inheritance Tax bill)."
>
> [b] (related page /mezzanine-junior-finance/) "a second charge sits behind the senior lender and covers an additional 10% to 20% of the total development costs. The senior lender has to consent, and not all senior lenders allow this."
>
> [b] (related page /development-exit-loans/) "short-term bridges secured on completed developments that repay the construction lender. They can also release equity early to fund your next project."
>
> [b] (related case study, Kensington) "One Kensington deal avoided a second charge entirely. Two lenders had withdrawn over intercreditor disagreements, and the eventual solution used a first-charge bridge."
>
> [c] (silveroakcapital.odoo.com blog, not the page) "bridging loans can offer high LTVs to borrowers, allowing them to release the maximum amount of equity from the property."
>
> [c] "I couldn't find a Silver Oak Capital page that lists its types of borrowing or its bridge-to-purchase and equity release fees."
>
> [seed] "We can help with your wealth management."
>
> [seed] bridging: "quick to arrange and do not require any affordability assessment"
>
> [seed] fees: "1.00% UK commercial / 1.50% outside UK and 1.00% prime residential (/types-of-borrowing/, old page)"

**Produits et services cités**

- Development finance - senior
- Development finance - stretched senior
- Development finance - mezzanine / 2nd charge
- Development finance - joint venture equity
- Bridging finance - bridge to purchase
- Bridging finance - bridge to sell
- Bridging finance - equity release
- Bridging finance - 2nd charge
- Bridging finance - refinance
- High net worth / prime residential mortgages
- Wealth management
- Marine finance (superyacht purchases)

**Cas d'usage**

- [a][b] Bridge to purchase
- [a][b] Bridge to sell
- [a][b] Equity release
- [a][b] Second charge borrowing
- [a][b] Refinance
- [a] Superyacht purchase (marine finance)
- [a] Residential, commercial or mixed-use development (ground-up or conversion) via development finance (from related page /property-development-finance/)
- [b] (related /faq/) Release cash via a bridge then refinance onto a standard buy-to-let mortgage
- [b] (related /faq/) Fund a tax bill (Corporation Tax, VAT, Inheritance Tax) where there is a clear exit strategy
- [b] (related /development-exit-loans/) Repay construction lender on a completed development and release equity early for the next project

**Conditions, montants, délais, frais**

- [a][seed] Development finance broker fee: typically 1% of the loan
- [a] Development worked example: GBP 10 million loan, 6.5% fixed rate, 18 months, 75% loan-to-GDV
- [a] Bridging broker fee: typically 1%; 1.5% for loans outside the UK
- [a][b][seed] Bridging: no affordability assessment
- [a][b][seed] Bridging interest paid as a lump sum at the end of the term
- [seed] Prime residential mortgages: GBP 5m and above; broker fee 1.00%
- [a] (related /property-development-finance/) Development loan interest rolled up and repaid on completion via sales or refinancing
- [a] (related /lenders/) Firm generally focuses on transactions above GBP 500,000
- [b] (related /mezzanine-junior-finance/) Second charge / mezzanine covers an additional 10% to 20% of total development costs, behind the senior lender, subject to senior lender consent
- Security: bridging and development loans secured on property (bridging variants are property-backed per site context); no explicit security wording surfaced for this page

**Critères d'éligibilité**

- [a][b][seed] Bridging loans require no affordability assessment
- [seed] Prime residential: policies vary by private bank branch
- [seed] Each lender has its own appetite for property types
- [b] (related /faq/) Lenders generally fund tax bills if there is a clear exit strategy
- [b] (related /mezzanine-junior-finance/) Second charge requires senior lender consent; not all senior lenders allow it
- No explicit borrower eligibility criteria (nationality, income, credit) surfaced for this page

**Types de prêteurs**

- [a] Senior development lenders
- [a] Stretched senior lenders
- [a] Mezzanine / 2nd charge lenders
- [a] Joint venture equity providers
- [seed] Private banks (prime residential; policies vary by branch)
- [b] (related case study) First-charge bridge lenders

**Étapes du processus**

- Not revealed: no application or arrangement steps for this page appeared in any result or in the seed.

**Géographie**

- [a] UK (1% bridging fee)
- [a] Outside the UK (1.5% bridging fee)

**Appels à l'action**

- Not revealed: no call-to-action wording for this page appeared in any result or the seed.

**Questions fréquentes**

- **Not on this page: no FAQ block surfaced for /types-of-borrowing/.** The only FAQ-style content seen comes from the separate /faq/ page [b]: releasing cash through a bridge then refinancing onto a standard buy-to-let mortgage is described as a very common use of equity release bridging; lenders generally fund tax bills (Corporation Tax, VAT, Inheritance Tax) if there is a clear exit strategy.

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (fee) [a][seed] Typical broker fee 1% of the loan for development finance
- (fee) [a] Bridging broker fee typically 1%, or 1.5% for loans outside the UK
- (fee) [seed] 1.00% prime residential
- (number) [a] Worked example: GBP 10m loan, 6.5% fixed, 18 months, 75% loan-to-GDV
- (number) [seed] Prime residential mortgages GBP 5m and above
- (promise) [a][b][seed] Bridging loans are quick to arrange and do not require any affordability assessment
- (promise) [seed] "We can help with your wealth management."
- (page-age) [a][b] Search tool states the cached copy of this page is about 1,600 days old (circa 2022); figures may be out of date

_Notes d'extraction : Source quality: no raw page text was obtained; [a] and [b] are the search tool's summaries of a cached copy it describes as ~1,600 days old; [c] returned nothing from the page itself (only an odoo.com blog by the firm and unrelated generic bridging guides, all ignored except the one odoo sentence quoted). Contradictions / tensions: (1) [a] says the page mentions 'high net worth mortgages' while t…_

#### Property Finance Western Europe

URL : <https://www.silveroakcapital.co.uk/western-europe/>  
Confiance : low-medium · Recherches effectuées : 3


**Résumé.** Country/region landing page of Silver Oak Capital (title tag seen in search results: 'Property Finance Western Europe'). The only page-specific text available comes from the first-pass seed snippet and one search summary sentence: the firm regularly acts for clients from Africa, Asia and the Middle East buying property in Europe and the UK, is popular with investors from volatile-currency countries such as South Africa or Turkey, and frequently arranges facilities for offshore trusts and overseas owners, describing deal-making across multiple jurisdictions. No H1, meta description, FAQ, process steps, fees, LTV or rate figures for this page were revealed. Firm-level geography claims (UK, Western Europe, Southern Africa, Middle East; later UK, US, Western Europe, Middle East) and lender/loan-size claims (300+ lenders in 100 countries vs 800+; £2m-£20m vs over £500,000) were surfaced from the homepage, Spear's and LinkedIn, with contradictions noted.

**Sections repérées**

- **Overseas clients purchasing in Europe and the UK [seed]** — [seed] The firm 'regularly act for clients from Africa, Asia and the Middle East who are purchasing properties in Europe and the UK'; the service is 'popular with investors from countries with volatile currencies, such as South Africa or Turkey'.
- **Offshore trusts and overseas owners [seed][b]** — [seed] The firm 'frequently arranges facilities for offshore trusts and overseas owners'. [b] Search summary of the page: 'The main page says the firm frequently arranges facilities for offshore trusts and overseas owners, and it describes deal-making across multiple jurisdictions.'
- **Geographic coverage (firm-level, not page-specific) [a][c]** — [a] Current homepage: the firm 'arranges debt across the UK, US, Western Europe and the Middle East'; older listings 'name Western Europe alongside the UK, the Middle East and Southern Africa'; key locations 'London, Monaco, Dubai and Cape Town'. [c] Spear's profile: 'With an extensive network of more than 300 lenders in 100 different countries, Silver Oak arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East.' [b] About page: 'experience arranging debt in offshore jurisdictions such as France, Spain, Dubai & South Africa'. [b] Yacht mortgag…
- **Related offshore/trust pages surfaced by the same query [b]** — [b] /complex-offshore-structures/: 'network of over 800 lenders, both in the UK and internationally'; 'has advised on a number of cases involving trust- and estate-held assets, both onshore and offshore'. [b] /case-studies/bvi-trust-refinance/: 'A UK borrower's property was held in a British Virgin Islands trust, with trustees in Guernsey. The firm matched the client with a private bank that had a UK, Channel Islands, and BVI presence, and the goal was a 10-year interest-only facility.' [b] /case-studies/bridging-loan-land-with-planning/: 'an offshore trust company seeking funds for a plannin…
- **Products mentioned in third-party profiles [c]** — [c] LinkedIn (Joe Berk): 'With access to an extensive network of over 800 lenders, they offer independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance.' 'Alongside prime residential and commercial mortgages, they also advise on raising debt for luxury assets, short-term bridging loans, and marine and aviation finance.'

**Phrases verbatim (anglais)**

> [seed] regularly act for clients from Africa, Asia and the Middle East who are purchasing properties in Europe and the UK
>
> [seed] popular with investors from countries with volatile currencies, such as South Africa or Turkey
>
> [seed] frequently arranges facilities for offshore trusts and overseas owners
>
> [b] Property Finance Western Europe (search-result title of https://www.silveroakcapital.co.uk/western-europe/)
>
> [b] The main page says the firm frequently arranges facilities for offshore trusts and overseas owners, and it describes deal-making across multiple jurisdictions.
>
> [b] The firm says it has a network of over 800 lenders, both in the UK and internationally. It also states it has advised on a number of cases involving trust- and estate-held assets, both onshore and offshore. (/complex-offshore-structures/)
>
> [b] A UK borrower's property was held in a British Virgin Islands trust, with trustees in Guernsey. The firm matched the client with a private bank that had a UK, Channel Islands, and BVI presence, and the goal was a 10-year interest-only facility. (/case-studies/bvi-trust-refinance/)
>
> [b] This involved an offshore trust company seeking funds for a planning application for a 220-unit residential scheme. (/case-studies/bridging-loan-land-with-planning/)
>
> [b] The firm is active across the entire Western European market, mainly in Mediterranean hubs such as Monaco and the Cote d'Azur. (/yacht-mortgages/)
>
> [b] The firm says it has experience arranging debt in offshore jurisdictions such as France, Spain, Dubai & South Africa. (/about-us/)
>
> [a] Its current homepage says it arranges debt across the UK, US, Western Europe and the Middle East. Older listings name Western Europe alongside the UK, the Middle East and Southern Africa.
>
> [a] Older profiles describe loans of £2m to £20m, while the current homepage refers to loans over £500,000. The lender network is described as 300+ in older listings and 800+ on the current homepage.
>
> [a] The homepage lists London, Monaco, Dubai and Cape Town as key locations.
>
> [a] The firm was founded in 2019 by Jimmy Baillie.
>
> [c] With an extensive network of more than 300 lenders in 100 different countries, Silver Oak arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East. (Spear's)
>
> [c] With access to an extensive network of over 800 lenders, they offer independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance. (LinkedIn)
>
> [c] Alongside prime residential and commercial mortgages, they also advise on raising debt for luxury assets, short-term bridging loans, and marine and aviation finance. (LinkedIn)

**Produits et services cités**

- Property finance in Western Europe for overseas / international clients [seed][b]
- Facilities for offshore trusts and overseas owners [seed][b]
- Real estate debt advisory for transactions in the UK, Western Europe, Southern Africa and the Middle East [c]
- Finance for assets held in complex offshore structures (trust- and estate-held, onshore and offshore) [b, related page]
- Yacht / marine finance across the Western European market, Mediterranean hubs (Monaco, Cote d'Azur) [b, related page]
- Bridging and development finance, commercial and buy-to-let mortgages, prime residential mortgages, luxury asset, marine and aviation finance [c, firm-level]

**Cas d'usage**

- Clients from Africa, Asia and the Middle East purchasing properties in Europe and the UK [seed]
- Investors from countries with volatile currencies (e.g. South Africa, Turkey) acquiring European/UK property [seed]
- Facilities for offshore trusts and overseas owners [seed][b]
- Refinance of a UK property held in a BVI trust with Guernsey trustees via a private bank with UK, Channel Islands and BVI presence; 10-year interest-only facility sought [b, case study]
- Offshore trust company raising bridging funds for a planning application on a 220-unit residential scheme [b, case study]

**Conditions, montants, délais, frais**

- No loan size, LTV, rate, duration, fee or timescale specific to the Western Europe page was revealed [a][b][c]
- Firm-level loan size: 'loans over £500,000' (current homepage) vs '£2m to £20m' (older profiles) [a]
- Case study target structure: '10-year interest-only facility' (BVI trust refinance) [b]
- Security type implied: real estate (property purchases in Europe and the UK; trust-held property) [seed][b]

**Critères d'éligibilité**

- Clients from Africa, Asia and the Middle East buying in Europe and the UK [seed]
- Investors from volatile-currency countries such as South Africa or Turkey [seed]
- Offshore trusts and overseas owners [seed][b]
- Trust- and estate-held assets, onshore and offshore [b, /complex-offshore-structures/]

**Types de prêteurs**

- Private banks with multi-jurisdiction presence (UK, Channel Islands, BVI) [b, case study]
- Network of over 800 lenders, both in the UK and internationally [b][c]
- Network of more than 300 lenders in 100 different countries [c, Spear's, older]

**Géographie**

- Western Europe
- Europe
- United Kingdom
- France
- Spain
- Monaco
- Cote d'Azur
- Mediterranean
- Middle East
- Dubai
- Africa
- Southern Africa
- South Africa
- Cape Town

**Appels à l'action**

- No page-specific call to action revealed by the search results [a][b][c]
- [seed, site-wide] enquiry form (name, contact details, finance type, amount, country of residence, brief overview, consent); email enquiry@silveroakcapital.co.uk; +44 207 459 4440; WhatsApp

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (geography) Arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East [c, Spear's]
- (geography) Current homepage: arranges debt across the UK, US, Western Europe and the Middle East [a]
- (geography) Key locations: London, Monaco, Dubai and Cape Town [a]
- (geography) Experience arranging debt in offshore jurisdictions such as France, Spain, Dubai & South Africa [b, /about-us/]
- (geography) Active across the entire Western European market, mainly in Mediterranean hubs such as Monaco and the Cote d'Azur [b, /yacht-mortgages/]
- (number) Network of more than 300 lenders in 100 different countries [c, Spear's]
- (number) Network of over 800 lenders, both in the UK and internationally [b, /complex-offshore-structures/; c, LinkedIn]
- (contradiction) Lender count 300+ (older listings / Spear's) vs 800+ (current homepage / LinkedIn / complex offshore structures page) [a][b][c]
- (contradiction) Loan size £2m to £20m (older profiles) vs over £500,000 (current homepage) [a]
- (contradiction) Geography: older 'UK, Western Europe, Southern Africa, Middle East' vs current homepage 'UK, US, Western Europe, Middle East' (Southern Africa dropped, US added) [a][c]
- (credential) Founded in 2019 by Jimmy Baillie [a]
- (credential) Spear's 500 adviser profile exists for Jimmy Baillie (spears500.com/adviser/6519 and /22953) [c]
- (promise) Independent, whole-of-market advice [c, LinkedIn]
- (experience) Has advised on a number of cases involving trust- and estate-held assets, both onshore and offshore [b, /complex-offshore-structures/]

_Notes d'extraction : Query (a) (exact URL, extended) did not return the page; it returned the homepage and third-party listings (plus unrelated Silverfleet Capital, ignored). Query (b) (site: search, extended) returned the page with title 'Property Finance Western Europe' and a one-sentence summary consistent with the seed snippet, plus related offshore/trust pages. Query (c) (standard) returned Spear's and LinkedIn …_

### Études de cas

#### Silver Oak Capital Case Studies

URL : <https://www.silveroakcapital.co.uk/case-studies/>  
Confiance : medium · Recherches effectuées : 2

**H1 :** Client Mortgage Success Stories  

**Résumé.** Index/listing page of Silver Oak Capital's case studies, described by the search tool as a UK mortgage and lending firm's "Client Mortgage Success Stories" listing covering complex loan and mortgage deals. Deals named in the index snippet [a]: a £1m revolving credit facility for a housebuilder; a £4m bridging loan secured against a central London property; a £3.6m bridging loan on a Kensington property; a £1.46m refinance on an unencumbered residential property in Prime Central London; a £3.5m refinance; a yacht finance deal; a Manchester office financing; a purpose-built student accommodation (PBSA) lending case. The index snippet is truncated and gives no full details, outcomes or dates. Search [b] surfaced individual case-study pages with deal detail (paraphrased by the tool): £3.6m Kensington first-charge bridging facility completed within four weeks at 0.78% per month BBR-linked after two specialist lenders withdrew over intercreditor disagreements; £19m North West London bridging refinance of a partly built (c.80% complete) 25-apartment scheme at 0.75% per month, 12-month term, max 73% LTV, 15% personal guarantee; £800,000 central London bridging refinance for a Kenyan national with no UK credit profile, property originally bought at auction on a bridging loan, refinanced like-for-like onto a 5-year fixed at 4.19% and 75% LTV; Cap Ferrat villa (near Monaco) bridging of €5m at 62.5% LTV, 0.55% per month over 24 months for a repeat client who had previously used Silver Oak for a London bridging loan. A separate Cotswolds case study (/case-studies/cotsworlds-listed/) describes an £8m loan at 70% loan-to-GDV over 24 months with interest rolled up, priced at 3.95% plus Bank Base Rate with a 1% bank fee and a 1% exit fee. No meta description, FAQ, calls to action or page dates were revealed.

**Sections repérées**

- **Client Mortgage Success Stories (index listing)** — Listing of deals: £1m revolving credit facility for a housebuilder; £4m bridging loan on a central London property; £3.6m bridging loan on a Kensington property; £1.46m refinance on an unencumbered Prime Central London residential property; £3.5m refinance; a yacht finance deal; a Manchester office financing; a PBSA lending case. [a]
- **Case-study pages surfaced (titles as indexed)** — NW London Bridging Loan; £800,000 Bridging Loan Refinance; Heesen Yacht Finance; £3.6 Million Bridging Loan; Mayfair Self Employed Equity Release; Senior Housing Development in Kent; Bridging Villa Cap Ferrat; £1.46 Million Refinance; Cotsworlds Listed (sic). [a][b]

**Phrases verbatim (anglais)**

> [a] Page title as returned by the search engine: "Silver Oak Capital Case Studies"
>
> [a] Heading/strapline quoted by the search tool: "Client Mortgage Success Stories"
>
> [a] Search-tool summary of the index snippet: "A £1m revolving credit facility for a housebuilder."
>
> [a] Search-tool summary of the index snippet: "A £4m bridging loan secured against a central London property, and a separate £3.6m bridging loan on a Kensington property."
>
> [a] Search-tool summary of the index snippet: "A £1.46m refinance on an unencumbered residential property in Prime Central London."
>
> [a] Search-tool summary of the index snippet: "A £3.5m refinance, a yacht finance deal, a Manchester office financing, and a purpose-built student accommodation (PBSA) lending case."
>
> [a] Search-tool summary of the Cotswolds case study: "an £8m loan at 70% loan-to-GDV over 24 months, with interest rolled up. Its terms were 3.95% plus Bank Base Rate, a 1% bank fee and a 1% exit fee."
>
> [a] Search-tool caveat: "The snippet is truncated, so it doesn't give full details, outcomes, or dates for most cases."
>
> [b] Search-tool summary (£3.6m Kensington): "Silver Oak arranged a first-charge facility on a high-value residential property. It cleared existing debt after two specialist lenders withdrew over intercreditor disagreements. The loan was completed within four weeks, priced at 0.78% per month, BBR-linked."
>
> [b] Search-tool summary (£19m NW London): "A developer with a partly built 25-apartment scheme needed a refinance while the build was about 80% complete. The terms listed were 0.75% per month, a 12-month term, a maximum 73% LTV and a 15% personal guarantee."
>
> [b] Search-tool summary (£800,000 central London refinance): "A Kenyan national's rented central London property, originally bought at auction on a bridging loan, was refinanced on a like-for-like basis. The case notes that the borrower had no UK credit profile, which presented a problem for most lenders. The solution was a 5-year fixed rate at 4.19% with 75% LTV."
>
> [b] Search-tool summary (Cap Ferrat): "It is a villa near Monaco, but the client had previously used Silver Oak for a London bridging loan. The terms were €5 million at 62.5% LTV, 0.55% per month, over 24 months."
>
> [b] Search-tool summary (index): "The case study index page also lists a £1.46 million refinance on a Prime Central London property, which is a standard refinance rather than a bridging loan."
>
> [b] Search-tool caveat: "the age labels on the pages are inconsistent, so check the pages for current dates."

**Produits et services cités**

- Bridging loans (residential, first charge, BBR-linked)
- Bridging refinance of partly built development schemes
- Revolving credit facility for a housebuilder
- Development / land finance (loan-to-GDV based, interest rolled up)
- Senior housing development finance (Kent)
- Residential refinance / large mortgages (Prime Central London)
- Equity release (Mayfair, self-employed borrower)
- Foreign national / non-UK-credit borrower mortgages
- Commercial property finance (Manchester office)
- Purpose-built student accommodation (PBSA) lending
- Yacht finance (Heesen)
- International property bridging (Cap Ferrat villa, euro-denominated)

**Cas d'usage**

- Clearing existing debt via bridging (Kensington) [b]
- Refinancing a partly built residential development (NW London) [b]
- Refinancing an auction-purchased rental property for a foreign national (£800k) [b]
- Equity release for a self-employed borrower (Mayfair) [b]
- Revolving credit for a housebuilder [a]
- Land/development loan on loan-to-GDV basis (Cotswolds) [a]
- Senior housing development (Kent) [b]
- Office acquisition/finance (Manchester) [a]
- PBSA lending [a]
- Yacht finance (Heesen) [a][b]
- Bridging on a villa near Monaco (Cap Ferrat) [b]

**Conditions, montants, délais, frais**

- 0.78% per month, BBR-linked (£3.6m Kensington bridging) [b]
- 0.75% per month, 12-month term, max 73% LTV, 15% personal guarantee (£19m NW London bridging) [b]
- 5-year fixed at 4.19%, 75% LTV (£800k central London refinance) [b]
- 0.55% per month, 62.5% LTV, 24 months, €5m (Cap Ferrat villa) [b]
- 3.95% plus Bank Base Rate, 70% loan-to-GDV, 24 months, interest rolled up, 1% bank fee, 1% exit fee, £8m (Cotswolds) [a]
- First-charge facility (Kensington) [b]
- Like-for-like refinance (£800k) [b]

**Critères d'éligibilité**

- Borrower with no UK credit profile (Kenyan national) was financed [b]
- Foreign national landlord with rented central London property [b]
- Developer with a partly built scheme (about 80% complete) [b]
- Self-employed borrower (Mayfair equity release case title) [b]
- Non-UK security (villa near Monaco) accepted [b]
- Property originally bought at auction on a bridging loan, refinanced [b]

**Types de prêteurs**

- Specialist lenders (two withdrew on the Kensington deal) [b]
- Bank (Cotswolds loan carries a 1% bank fee and Bank Base Rate pricing) [a]
- BBR-linked bridging lender (Kensington) [b]

**Étapes du processus**

- Kensington: first-charge facility arranged to clear existing debt after two specialist lenders withdrew; completed within four weeks [b]
- £800k refinance: existing auction bridging loan refinanced like-for-like onto a 5-year fixed term product [b]
- NW London: refinance arranged mid-build at about 80% completion, 12-month term [b]

**Géographie**

- Central London
- Prime Central London
- Kensington
- North West London
- Mayfair
- Manchester
- Kent
- Cotswolds
- Cap Ferrat (near Monaco), France
- Kenya (borrower nationality)

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (deal-amount [a]) £1m revolving credit facility arranged for a housebuilder
- (deal-amount [a]) £4m bridging loan secured against a central London property
- (deal-amount [a][b]) £3.6m bridging loan on a Kensington property
- (deal-amount [a][b]) £1.46m refinance on an unencumbered residential property in Prime Central London
- (deal-amount [a]) £3.5m refinance
- (deal-terms [a]) £8m Cotswolds loan at 70% loan-to-GDV over 24 months, interest rolled up, 3.95% plus Bank Base Rate, 1% bank fee, 1% exit fee
- (timing [b]) £3.6m Kensington facility completed within four weeks
- (pricing [b]) £3.6m Kensington facility priced at 0.78% per month, BBR-linked
- (challenge/outcome [b]) £3.6m Kensington facility arranged after two specialist lenders withdrew over intercreditor disagreements
- (deal-terms [b]) £19m North West London bridging loan: 0.75% per month, 12-month term, maximum 73% LTV, 15% personal guarantee
- (deal-context [b]) £19m NW London deal: 25-apartment scheme about 80% complete at time of refinance
- (deal-terms [b]) £800,000 central London bridging refinance for a Kenyan national with no UK credit profile: 5-year fixed at 4.19%, 75% LTV
- (deal-terms [b]) Cap Ferrat villa: €5 million at 62.5% LTV, 0.55% per month, 24 months
- (repeat-business [b]) Cap Ferrat client was a repeat client who had previously used Silver Oak for a London bridging loan

_Notes d'extraction : Direct fetch blocked; everything comes from two WebSearch calls. The index page itself was only partially revealed: its title ('Silver Oak Capital Case Studies') and the quoted heading/strapline 'Client Mortgage Success Stories' plus a truncated list of deals. The search tool explicitly stated that the index snippet is truncated and does not give full details, outcomes or dates. Most deal detail …_

#### NW London Bridging Loan

URL : <https://www.silveroakcapital.co.uk/case-studies/nw-london-bridge/>  
Confiance : medium · Recherches effectuées : 2


**Résumé.** Case study of a GBP 19 million gross bridging loan (development-exit style refinance) arranged by Silver Oak Capital for a developer completing a 25-apartment luxury residential scheme in North West London. The developer had run over on the build schedule, so the scheme was only about 80% complete when the outstanding development and mezzanine (Mezz) facilities needed refinancing; the bridge was used to allow more time to market and sell the remaining units. Challenge: finding a lender willing to fund a partly finished residential scheme, which required presenting a clear exit and marketing plan backed by a strong valuation report. Terms stated on the page (per search summaries): GBP 19m gross, 0.75% per month, 12-month term, maximum 73% LTV, 15% personal guarantee. Independent trade coverage (Bridging & Commercial, dated 2 March 2020) describes it as Silver Oak Capital's largest ever bridging loan at GBP 19.1m, funded by Topland Group at 70% LTV over 12 months, including a GBP 1.2m capex facility for final finishing work. Borrower type: property developer. Lender: Topland Group (named only in trade press, not in the case-study snippets). Outcome: completed (per trade-press headline 'completes'); the case-study snippets themselves do not surface an explicit outcome sentence.

**Sections repérées**

- **The deal (background)** — A developer finishing a 25-apartment luxury residential scheme in North West London needed a refinance. The developer had run over on their build schedule and hence required a refinance whilst the scheme was only partly complete (80%). A bridging loan was required to refinance the outstanding development and Mezz facilities in order to allow more time to market and sell the remaining units. Loan sized at £19 million. Sources: [a][b].
- **The challenge** — Finding a lender willing to fund a partly finished residential scheme. Silver Oak had to present a clear exit and marketing plan, backed by a strong valuation report. Sources: [a][b].
- **Terms offered** — £19 million gross loan; 0.75% per month; 12-month term; maximum 73% LTV; 15% personal guarantee. Sources: [a][b].
- **Independent coverage (not on the page)** — Bridging & Commercial: 'Silver Oak Capital completes its largest ever bridging loan of £19.1m'; lender Topland Group; issued 2 March 2020; 70% LTV over 12 months; total £19.1m including a £1.2m capex facility for final finishing work. Source: [a]. Section heading names above are inferred groupings of snippet content, not confirmed page headings.

**Phrases verbatim (anglais)**

> [a] "NW London Bridging Loan" (search-result title of the page; also returned identically in [b])
>
> [a] "Silver Oak describes a developer finishing a 25-apartment luxury residential scheme in North West London. The developer needed a refinance while the build was about 80% complete, and the loan was sized at £19 million."
>
> [a][b] "The developer had run over on their build schedule and hence required a refinance whilst the scheme was only partly complete (80%)."
>
> [a] "Main challenge: Finding a lender willing to fund a partly finished residential scheme, which meant presenting a clear exit and marketing plan."
>
> [a] "The case study lists a 0.75% monthly rate, a 12-month term, a maximum 73% LTV, and a 15% personal guarantee."
>
> [a] "Bridging & Commercial reported that the lender was Topland Group, issued on 2 March 2020 at 70% LTV over 12 months. That report puts the total at £19.1m and includes a £1.2m capex facility for final finishing work."
>
> [a] "Silver Oak Capital completes its largest ever bridging loan of £19.1m" (title of the Bridging & Commercial article returned twice in results)
>
> [a] "The LTV figures differ between the two sources (73% on the case study, 70% in the trade press), so check the details directly if they matter. The case study page's age metadata is also unreliable, and the trade coverage is dated March 2020."
>
> [b] "A developer finishing a 25-apartment luxury residential scheme in North West London needed a refinance."
>
> [b] "The lender required a bridging loan to refinance the outstanding development and Mezz facilities in order to allow more time to market and sell the remaining units." (sic: 'The lender' as rendered by the search summary; context implies the borrower/developer)
>
> [b] "Main difficulty: Finding a lender willing to fund a partly finished residential scheme. Silver Oak also had to present a clear exit and marketing plan, backed by a strong valuation report."
>
> [b] "The page lists a £19 million gross loan at 0.75% per month over a 12-month term, with a maximum of 73% LTV and a 15% personal guarantee."
>
> [b] "The page is about 213 days old, so the terms may have changed."
>
> [b] "Silver Oak's other case studies are also relevant if you want comparisons, such as a £3.6 million Kensington bridge priced at 0.78% per month and a €5 million Cap Ferrat villa loan at 0.55% per month."

**Produits et services cités**

- Bridging loan (large loan, GBP 19m)
- Development exit finance: refinance of outstanding development and mezzanine (Mezz) facilities on a partly complete scheme
- Refinance to allow more time to market and sell remaining units

**Cas d'usage**

- Development exit bridge: refinancing outstanding development and mezzanine facilities on a partly complete (80%) residential scheme [b]
- Build-schedule overrun requiring refinance before practical completion [a][b]
- Buying time to market and sell remaining units of a luxury apartment scheme [b]

**Conditions, montants, délais, frais**

- Gross loan: £19,000,000 [a][b]
- Rate: 0.75% per month [a][b]
- Term: 12 months [a][b]
- Maximum LTV: 73% per case study [a][b]; 70% per Bridging & Commercial trade press [a]
- Security/guarantee: 15% personal guarantee [a][b]
- Trade press only: total facility £19.1m including £1.2m capex facility for final finishing work [a]
- Facility type: bridging loan refinancing outstanding development and Mezz facilities [b]

**Types de prêteurs**

- Topland Group -- named as the lender only in Bridging & Commercial trade coverage surfaced by search [a]; the case-study snippets themselves do not name the lender or lender category

**Étapes du processus**

- Identify a lender willing to fund a partly finished (80% complete) residential scheme [a][b]
- Present a clear exit and marketing plan for the remaining units [a][b]
- Support the application with a strong valuation report [b]

**Géographie**

- North West London
- London
- United Kingdom

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (loan-amount [a][b]) Gross loan of £19 million
- (rate [a][b]) Rate of 0.75% per month
- (term [a][b]) 12-month term
- (ltv [a][b]) Maximum 73% LTV (case study page)
- (guarantee [a][b]) 15% personal guarantee
- (asset [a][b]) 25-apartment luxury residential scheme in North West London
- (completion-stage [a][b]) Scheme only partly complete (80%) at time of refinance; developer had run over on build schedule
- (structure-purpose [b]) Loan refinanced outstanding development and Mezz facilities to allow more time to market and sell remaining units
- (process [a][b]) Silver Oak had to present a clear exit and marketing plan, backed by a strong valuation report
- (external-press-headline [a]) Trade press: 'Silver Oak Capital completes its largest ever bridging loan of £19.1m'
- (lender [a] (Bridging & Commer…) Trade press: lender was Topland Group
- (date [a] (Bridging & Commerci…) Trade press: issued on 2 March 2020
- (ltv [a] (Bridging & Commercia…) Trade press: 70% LTV over 12 months
- (loan-amount [a] (Bridging & C…) Trade press: total £19.1m including a £1.2m capex facility for final finishing work

_Notes d'extraction : Sources: [a] = WebSearch extended, query = exact URL; [b] = WebSearch extended, query 'site:silveroakcapital.co.uk NW London bridge case study bridging loan'. Direct page access was not attempted (blocked per task); all content is from search-tool result titles and the tool's summaries, which may paraphrase the page. Core deal facts (25 apartments, NW London, 80% complete, £19m, 0.75% pm, 12 mont…_

#### £3.6 Million Bridging Loan

URL : <https://www.silveroakcapital.co.uk/case-studies/3-6-million-bridging-loan-prime-kensington-property/>  
Confiance : medium · Recherches effectuées : 2

**H1 :** Not revealed by search snippets. The search-result title of the page is "£3.6 Million Bridging Loan" (seen identically in [a] and [b]); the slug adds "prime Kensington property".  
**Meta description :** Not revealed by search snippets.

**Résumé.** Case study of a £3.6 million bridging facility arranged by Silver Oak Capital on a high-value (prime) residential property in Kensington, London. Purpose: refinance an existing debt/loan and raise additional capital for future acquisitions/purchases. Challenge: two specialist lenders had withdrawn at the final stage over intercreditor disagreements about first and second charges, leaving the borrower under time pressure. Structure/solution: Silver Oak worked with one lender to secure a single first-charge bridging loan that repaid the existing debt and covered the full capital raise, so no second charge was needed. Pricing stated on the page: 0.78% per month, BBR-linked (Bank of England base rate). Timing: completed within four weeks. The case study page does not name the lender (search summary refers to the page's "trusted lender" wording); a trade publication (Bridging & Commercial) reported the same transaction in October 2024 as completed by Octane Capital, originated by BDM Lee Warne and introduced by broker Jimmy Baillie of Silver Oak Capital. Borrower type is not described beyond 'the borrower' (owner of a high-value Kensington home seeking refinance and capital raise). Property value, LTV, loan term and exit strategy are not revealed in the results.

**Sections repérées**

- **The deal (as summarised by search tool, [a]/[b])** — A £3.6 million bridging facility on a high-value Kensington residential property / home. Silver Oak arranged the loan to refinance an existing debt and provide extra capital for future acquisitions. [b] phrasing: the borrower needed to refinance an existing loan and raise money for future purchases.
- **The challenge** — Two specialist lenders had previously withdrawn / pulled out at the final stage due to disagreements over intercreditor terms relating to first and second charges, which left the borrower under time pressure.
- **The solution / structure** — Silver Oak worked with one lender to secure a first-charge bridging loan that repaid the existing debt and covered the full capital raise, without a second charge. The case study does not name the lender; the search summary says the page uses "trusted lender" wording.
- **Outcome / terms** — Completed within four weeks, priced at 0.78% per month, BBR-linked. [b] notes the page is about 230 days old (relative to 2026-10-29), so the terms are historical and not current quotes.
- **External corroboration (not on the Silver Oak page)** — Bridging & Commercial headline: "Octane Capital has completed £3.6m bridging loan secured against a Kensington house in four weeks." The search summary says the trade publication reported the transaction in October 2024 as completed by Octane Capital, with the loan originated by BDM Lee Warne and introduced by broker Jimmy Baillie from Silver Oak Capital. A separate Bridging & Commercial result is titled "Silver Oak Capital completes its largest ever bridging loan of £19.1m" (firm-level, different deal). A FIBA result is titled "Octane Capital completes £4m bridging loan on Kensington residen…
- **Related site-wide context surfaced by [b]** — General bridging page (/bridging-loans-uk/): bridging loans are typically issued for 12 to 24 months and are assessed mainly on property value, exit strategy and deal viability rather than income. Types-of-borrowing page: illustrative example of a £12 million loan at 0.75% per month over 12 months, with 2.00% lender fees and no exit fee. A page not in the seed surfaced: /bridging-loans-for-prime-central-london-purchases/ titled "Bridging Loans in the UK for Prime Central London Purchases".

**Phrases verbatim (anglais)**

> [a] result title: "£3.6 Million Bridging Loan"
>
> [a] "it describes a £3.6 million bridging facility on a high-value Kensington residential property"
>
> [a] "Silver Oak arranged the loan to refinance an existing debt and provide extra capital for future acquisitions."
>
> [a] "Two specialist lenders had previously withdrawn at the final stage due to disagreements over intercreditor terms relating to first and second charges, which left the borrower under time pressure."
>
> [a] "Silver Oak worked with one lender to secure a first-charge bridging loan that repaid the existing debt and covered the full capital raise, without a second charge."
>
> [a] "The loan was completed within four weeks, priced at 0.78% per month, BBR-linked."
>
> [a] "A trade publication reported the transaction in October 2024 as completed by Octane Capital, with the loan originated by BDM, Lee Warne, and introduced by broker, Jimmy Baillie from Silver Oak Capital."
>
> [a] "the Silver Oak case study does not name the lender, and the trade report identifies Octane as the lender, which is consistent with the \"trusted lender\" wording on the case study page."
>
> [a] Bridging & Commercial result title: "Octane Capital has completed £3.6m bridging loan secured against a Kensington house in four weeks."
>
> [a] Bridging & Commercial result title: "Silver Oak Capital completes its largest ever bridging loan of £19.1m"
>
> [a] FIBA result title: "Octane Capital completes £4m bridging loan on Kensington residential property - FIBA"
>
> [b] "Silver Oak Capital arranged a £3.6 million bridging facility on a high-value Kensington home."
>
> [b] "The borrower needed to refinance an existing loan and raise money for future purchases."
>
> [b] "Two specialist lenders had pulled out at the final stage over intercreditor disagreements about first and second charges."
>
> [b] "The deal was resolved with a first-charge bridging loan, so no second charge was needed."
>
> [b] "The page says it completed within four weeks at 0.78% per month, BBR-linked."
>
> [b] "The page is about 230 days old, so the terms are historical and not current quotes."
>
> [b] "The case studies index lists the same £3.6 million Kensington deal alongside a separate £4 million Kensington bridging case study."
>
> [b] "The site's general bridging page says these loans are typically issued for 12 to 24 months and are assessed mainly on property value, exit strategy and deal viability rather than income."
>
> [b] "The site's \"types of borrowing\" page gives an illustrative example of a £12 million loan at 0.75% per month over 12 months, with 2.00% lender fees and no exit fee."
>
> [b] result title: "Bridging Loans in the UK for Prime Central London Purchases" (https://www.silveroakcapital.co.uk/bridging-loans-for-prime-central-london-purchases/)
>
> [b] result titles: "Residential Mortgages UK" (/prime-residential-mortgages/), "Wealth Management" (/types-of-borrowing/), "Commercial Mortgage Broker UK" (/commercial-Mortgage-Broker/), "Bridging Loans UK" (/bridging-loans-uk/), "Silver Oak Capital - Commercial Mortgage Broker & Property Development Finance Solutions" (home), "Post Planning Land Finance UK" (/post-planning-land-acquisitions/)

**Produits et services cités**

- Bridging loan (first-charge) on prime residential property
- Refinance of existing debt via bridging
- Capital raise / equity release for future acquisitions
- Broker intermediation with specialist bridging lenders (lender sourcing after two lenders withdrew)

**Cas d'usage**

- Refinancing an existing loan/debt on a high-value Kensington home
- Raising extra capital for future property acquisitions/purchases
- Replacing a failed first-plus-second-charge structure with a single first-charge bridging loan
- Time-pressured completion after lenders withdraw late in the process

**Conditions, montants, délais, frais**

- Loan amount: £3.6 million
- Pricing: 0.78% per month, BBR-linked (Bank of England base rate linked)
- Charge: first charge only; no second charge required
- Completion: within four weeks
- Loan term, LTV, property value, fees and exit strategy: not revealed in results
- Site-wide context [b]: bridging loans typically 12 to 24 months (from /bridging-loans-uk/, not this page)

**Critères d'éligibilité**

- Not stated for this case study in the results.
- Site-wide context [b] (from /bridging-loans-uk/, not this page): bridging loans are assessed mainly on property value, exit strategy and deal viability rather than income.

**Types de prêteurs**

- Specialist bridging lenders (two withdrew at final stage over intercreditor terms)
- Unnamed single 'trusted lender' providing a first-charge bridging loan (case study wording per search summary)
- Octane Capital identified as the lender by trade press (Bridging & Commercial), not by the Silver Oak page

**Étapes du processus**

- Borrower needed to refinance an existing loan and raise money for future purchases on a high-value Kensington property (per [a]/[b]).
- Two specialist lenders withdrew at the final stage over intercreditor disagreements about first and second charges, leaving the borrower under time pressure.
- Silver Oak worked with one lender to secure a first-charge bridging loan.
- The loan repaid the existing debt and covered the full capital raise, with no second charge.
- Completed within four weeks at 0.78% per month, BBR-linked.

**Géographie**

- Kensington, London (Prime Central London)
- United Kingdom

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number/deal size) £3.6 million bridging facility arranged by Silver Oak Capital
- (asset) Secured on a high-value / prime residential property (home / house) in Kensington
- (purpose) Purpose: refinance existing debt and provide extra capital for future acquisitions
- (challenge) Two specialist lenders had withdrawn at the final stage over intercreditor terms (first and second charges)
- (structure) Structured as a single first-charge bridging loan, without a second charge, repaying existing debt and covering the full capital raise
- (pricing) Priced at 0.78% per month, BBR-linked
- (timing) Completed within four weeks
- (wording) Case study page does not name the lender; uses 'trusted lender' wording (per search summary)
- (external corroboration) Trade press (Bridging & Commercial) reported the deal in October 2024 as completed by Octane Capital, originated by BDM Lee Warne, introduced by broker Jimmy Baillie from Silver Oak Capital
- (date/freshness) Page is about 230 days old relative to 2026-10-29 (search tool note), i.e. published/updated around spring 2026, while trade press dates the deal to October 2024
- (related content) Case studies index lists a separate £4 million Kensington bridging case study
- (firm claim (external)) Bridging & Commercial headline: Silver Oak Capital completes its largest ever bridging loan of £19.1m (firm-level, different deal)
- (site-wide context) Site-wide [b]: bridging loans typically issued for 12 to 24 months; assessed on property value, exit strategy and deal viability rather than income (/bridging-loans-uk/)
- (site-wide context) Site-wide [b]: illustrative example on /types-of-borrowing/ of a £12 million loan at 0.75% per month over 12 months, 2.00% lender fees, no exit fee

_Notes d'extraction : Page confirmed to exist and both searches ([a] exact URL, [b] site: query) returned the same page as top result with consistent summaries; the deal is independently corroborated by a Bridging & Commercial trade article (Octane Capital, four weeks, £3.6m, Kensington, Jimmy Baillie as introducer). Confidence is medium rather than high because the 'verbatim' lines are the search tool's summary wordi…_

#### Bridging Loan for Land with Planning

URL : <https://www.silveroakcapital.co.uk/case-studies/bridging-loan-land-with-planning/>  
Confiance : medium · Recherches effectuées : 2

**H1 :** Bridging Loan for Land with Planning (link title as indexed; not confirmed as on-page H1)  

**Résumé.** Case study of a GBP 1.2 million bridging loan arranged by Silver Oak Capital on a development site in Glasgow. The site was valued at GBP 2 million WITHOUT planning consent (valuation by Knight Frank). The borrower was an offshore trust company that wanted to release value from its assets to fund the entire planning application for a proposed 220-unit residential scheme with ground-floor commercial space. Structure: GBP 1.2m loan, 60% LTV, 0.9% per month, 18-month term, interest rolled up. Challenges: unconsented land is hard to lend on (fewer lenders take 'planning risk') and the borrowers refused to give a personal guarantee; the deal was made possible by the borrowers' strong track record and experienced team. Lender identity/type, timing to completion and the later fate of the scheme are not revealed by the search results. Note: the page title says 'land with planning' but the body describes land valued without planning; both search summaries flag this inconsistency.

**Phrases verbatim (anglais)**

> [a] "The site was located in Glasgow and was valued at £2 million without planning (confirmed by a Knight Frank valuation report)."
>
> [a] "This particular query originated from an offshore trust company that wanted to take full advantage of their assets."
>
> [a] "They needed the funds to help pay for the entire planning application."
>
> [a] "Fortunately the borrowers were able to demonstrate a strong track record of and a team with years of experience which made all the difference."
>
> [a] "£1.2 million loan 60% Loan to Value 0.9% per month 18 Month Terms Interest Rolled Up."
>
> [a] (search-tool paraphrase of the site's bridging guide) "Silver Oak's broader bridging guide says it can source bridging finance for land with or without planning. It also notes that unconsented land has fewer lenders because most do not take so called 'planning risk'."
>
> [a] (search-tool paraphrase) "The borrower was an offshore trust company, and the funds covered planning application costs for a 220-unit residential scheme with ground-floor commercial space."
>
> [a] (search-tool paraphrase) "Finding a lender for unconsented land was hard, and the borrowers would not give a personal guarantee."
>
> [b] "They can source bridging finance for land with or without planning, and the latter is more challenging as there are fewer lenders to choose from."
>
> [b] (search-tool paraphrase) "The page describes a Glasgow site valued at £2 million without planning. The borrower, an offshore trust company, needed funds to cover a planning application for 220 residential units with ground-floor commercial space. The solution was a £1.2 million loan at 60% LTV, 0.9% per month, over 18 months with interest rolled up. The borrowers wouldn't give a personal guarantee, and their tra…
>
> [b] (search-tool paraphrase of /bridging-loans-uk/) "It says the firm secured a tailored facility for land with planning, structured around the client's exit strategy. It gives no figures."
>
> [b] (search-tool paraphrase of /case-studies/nw-london-bridge/, which carries the 'Bridging Loan Land with Planning' label in preview text) "its content is about a £19 million refinance of a partly completed 25-apartment luxury residential scheme in North West London, at 0.75% per month, 12 months, 73% LTV, with a 15% personal guarantee. It isn't a land-with-planning deal."

**Produits et services cités**

- Bridging loan secured on development land (unconsented / pre-planning)
- Land bridging finance for offshore trust / corporate borrowers
- Funding of planning application costs

**Cas d'usage**

- Raising funds against unconsented land to pay for the entire planning application
- Offshore trust company releasing value from a land asset ('take full advantage of their assets')
- Pre-planning funding for a 220-unit residential scheme with ground-floor commercial space

**Conditions, montants, délais, frais**

- Loan amount: £1.2 million [a][b]
- Loan to Value: 60% [a][b]
- Rate: 0.9% per month [a][b]
- Term: 18 months [a][b]
- Interest: rolled up [a][b]
- Personal guarantee: none given by the borrowers [a][b]
- Security: Glasgow development site valued at £2 million without planning (Knight Frank valuation report) [a][b]

**Critères d'éligibilité**

- Borrowers were able to demonstrate 'a strong track record' and 'a team with years of experience' [a]
- Offshore trust company accepted as borrower [a][b]
- Land without planning consent accepted as security (described as harder, with fewer lenders) [a][b]
- Deal proceeded without a personal guarantee [a][b]

**Types de prêteurs**

- Not named in results. Site's general bridging guidance (per [a]/[b]) says fewer lenders accept land without planning because most do not take 'planning risk'.

**Étapes du processus**

- Independent valuation: Knight Frank valuation report confirmed the £2 million unconsented value [a]
- Borrowers evidenced track record and team experience to satisfy lender on unconsented land without a personal guarantee [a]
- Facility structured at 60% LTV, 18 months, interest rolled up [a][b]
- (No further process detail, timeline or exit mechanics revealed by search results)

**Géographie**

- Glasgow, Scotland, United Kingdom (site location)
- Offshore (borrower is an offshore trust company; jurisdiction not stated)

**Chiffres, promesses, références (à ne pas reprendre sans validation)**

- (number) £1.2 million bridging loan arranged
- (number) Site valued at £2 million without planning
- (third-party) Valuation confirmed by a Knight Frank valuation report
- (number) 60% Loan to Value
- (number) 0.9% per month interest rate
- (number) 18-month term
- (structure) Interest rolled up
- (number) Planning application for 220 residential units with ground-floor commercial space
- (structure) No personal guarantee given by borrowers
- (borrower-type) Borrower: offshore trust company
- (promise) Silver Oak can source bridging finance for land with or without planning
- (market-statement) Land without planning has fewer lenders because most do not take 'planning risk'
- (caveat) Page title says 'land with planning' while body describes a site valued without planning (internal inconsistency flagged by both search summaries)
- (external-headline) Related external headline seen in results (different deal): 'Silver Oak Capital completes its largest ever bridging loan of £19.1m' (bridgingandcommercial.co.uk)

_Notes d'extraction : Direct fetch blocked; everything comes from two WebSearch 'extended' summaries, tagged [a] (exact-URL query) and [b] (site: query). Core deal facts (£1.2m, 60% LTV, 0.9% pm, 18 months, interest rolled up, Glasgow, £2m Knight Frank valuation without planning, offshore trust borrower, 220 units + ground-floor commercial, no personal guarantee, track record/experienced team) were reported consistent…_

## 5. Matrice de l'offre

Chaque ligne résume ce que la page produit dit du besoin couvert, de la clientèle et de la mécanique. Les conditions chiffrées (ratios, durées, frais) sont des repères britanniques relevés dans les extraits, parfois issus de pages voisines ou anciennes : elles servent à comprendre le produit, pas à être reprises.

### Relais et opérations à délai court (menu « Bridging »)

| Produit (page) | Besoin couvert | Clientèle | Mécanique et repères annoncés |
| --- | --- | --- | --- |
| Bridging loans UK | Acheter avant de vendre, financer des travaux, couvrir un décalage de trésorerie | Propriétaires, investisseurs, promoteurs ; accent sur Londres | Prêt court sur sûreté immobilière, 12 à 24 mois typiques, intérêts capitalisés (pas d'analyse de capacité de remboursement), remboursement en une fois par vente ou refinancement ; conditions indicatives « le jour même », approbation 5 à 14 jours |
| Auction finance | Acheter aux enchères (10 % le jour, solde sous 28 jours) | Acheteurs en salle des ventes | Relais 6 à 12 mois puis revente ou refinancement ; prêteurs acceptant la valeur en l'état avec un calendrier de travaux chiffré ; conditions indicatives en quelques heures |
| Below market value purchases | Acheter sous la valeur de marché (vente familiale, locataire en place, vendeur en difficulté) | Investisseurs professionnels, particuliers | Le prêteur spécialisé prête sur la valeur de marché et non sur le prix ; pas de règle des six mois avant refinancement ; le « motif » de la décote compte ; mise en garde contre la fraude au prêteur |
| Distressed asset finance | Reprendre un actif ou une entreprise en difficulté (saisie, vente imposée par la banque, chantier inachevé, actif sous-performant) | Repreneurs, investisseurs | Processus proche d'un financement classique mais plus rapide : « within days » dans le meilleur cas, 4 à 6 semaines en général ; base de « centaines » de prêteurs spécialisés |
| Light to heavy refurbishment | Travaux légers (cosmétiques), moyens (droits de développement permis), lourds (extension, toiture) | Investisseurs, marchands de biens | Relais couvrant le prix d'achat et typiquement 100 % des travaux, libérés par étapes après inspection ; intérêts capitalisés ; 12 à 24 mois |
| Conversions | Changement d'usage : commercial vers résidentiel, division d'une grande maison en appartements | Investisseurs, promoteurs | Prêt dimensionné sur la valeur après transformation (65-70 % de la valeur en fin de projet) ; création de baux par lot |
| Development exit loans | Refinancer un prêt de promotion arrivant à échéance sur un programme achevé ou presque | Promoteurs | 12 à 18 mois pour vendre ; remboursement au fil des ventes ; évite les pénalités de défaut et la vente bradée ; libère des fonds pour le programme suivant ; moins cher qu'un prêt de construction |
| Post planning land acquisitions | Acheter un terrain déjà autorisé (permis complet, accord de principe, droits de développement) avant le financement de construction | Promoteurs | Versement unique à l'achat (pas de tranches), 2 à 4 semaines, 6 à 12 mois (12 à 18 selon la FAQ) pour lever les conditions et refinancer en prêt de promotion ; terrain non autorisé possible auprès de prêteurs de niche |
| Probate lending | Financer les droits de succession ou des impôts exigibles pendant une succession | Héritiers | Prêt garanti par l'héritage à venir, remboursé à sa réception ; avant ou après l'ordonnance de succession ; statut réglementaire variable selon le cas |

### Promotion immobilière (menu « Development »)

| Produit (page) | Besoin couvert | Clientèle | Mécanique et repères annoncés |
| --- | --- | --- | --- |
| Property development finance / Development finance brokers | Financer un programme neuf ou une transformation, résidentiel, commercial ou mixte | Promoteurs, investisseurs | Sûreté sur le terrain, tirages selon le plan d'affaires et le calendrier de travaux, intérêts capitalisés, remboursement à l'achèvement par ventes ou refinancement ; réseau senior, mezzanine et fonds propres ; sélection resserrée à 3 ou 4 partenaires ; étapes : consultation initiale, liste de prêteurs, revue de marché, heads of terms |
| Senior development finance | Dette principale d'un programme, de la maison unique au lotissement | Promoteurs | Première hypothèque sur le site ; tranche au jour un (achat ou refinancement d'un relais), solde libéré par étapes après certification d'un géomètre de suivi ; accent sur levier, trésorerie et contrôle plutôt que sur le seul taux ; repère 65-75 % de la valeur en fin de projet |
| Stretch senior development finance | Levier supérieur avec un seul prêteur | Promoteurs | Un seul prêteur cumulant senior et mezzanine, sans accord intercréanciers ; repères 75 % de la valeur en fin de projet ou 90 % du coût ; covenants plus serrés ; taille minimale de l'ordre de 1 à 2 M£ selon la FAQ |
| Mezzanine / junior finance | Réduire l'apport du promoteur, conserver la marge plutôt que céder une part à un partenaire | Promoteurs | Second rang derrière le senior, taux supérieur ; exemple de pile 65 % senior, 10-20 % mezzanine, fonds propres résiduels |
| Whole loans | Une seule facilité couvrant tout le besoin de dette | Promoteurs | Un prêteur, une première hypothèque, découpage interne éventuel, pas d'accord intercréanciers ni de double comité ; fonds de dette privée et prêteurs spécialisés, souvent agnostiques par secteur (résidences étudiantes, hôtels, logements locatifs institutionnels, industriel) |
| First-time developer finance | Premier programme sans historique | Primo-promoteurs, rénovateurs passant au neuf, entrepreneurs du bâtiment | Souscription fondée sur l'équipe (chef de projet, architecte, entreprise générale) et la faisabilité ; levier plafonné (60-65 % de la valeur en fin de projet) ; contrat à prix fixe et métreur indépendant parfois exigés |

### Immobilier commercial et d'investissement (menu « Commercial » et résidentiel locatif)

| Produit (page) | Besoin couvert | Clientèle | Mécanique et repères annoncés |
| --- | --- | --- | --- |
| Commercial mortgages / Commercial mortgage broker | Acheter, développer, refinancer de l'immobilier commercial (commerces, bureaux, logistique, maisons de retraite, résidences étudiantes, hôtels) | Propriétaires occupants (réglementé), investisseurs | Repère 65-75 % de la valeur, 8 à 12 semaines de la demande à la signature ; frais de dossier, d'expertise, juridiques et de courtage annoncés d'emblée ; information du client sur les prêteurs sollicités ; accent sur les opérations de 2 à 20 M£ |
| Mixed use property finance | Actifs mixtes sous un même titre (commerce avec logements) | Investisseurs, occupants exploitant le rez-de-chaussée | Analyse distincte du locatif classique (revenus de baux commerciaux et de locations) ; local commercial vacant possible mais plus difficile ; prêteurs traditionnels, banques alternatives, relais |
| Hotel finance | Acheter ou refinancer un hôtel ou une maison d'hôtes | Exploitants, repreneurs | Prêt dimensionné sur le résultat d'exploitation (multiple d'EBITDA), 60-70 % de la valeur ; projections acceptées pour un hôtel fermé à levier plus faible ; expérience hôtelière attendue, ou gestionnaire expérimenté ; durée de bail résiduelle suffisante |
| Buy-to-let mortgages | Investissement locatif standard, locations saisonnières | Investisseurs particuliers et sociétés | Repère 75 % de la valeur ; douze mois de détention souvent demandés avant une colocation ; distinction « consumer buy-to-let » réglementé |
| HMO finance | Colocations de trois locataires ou plus, petites (jusqu'à 6 chambres) et grandes (7 et plus, changement d'usage) | Investisseurs | Prêteurs spécialisés comprenant licences et intensité de gestion ; valeur d'investissement permettant de « recycler » l'apport ; primo-bailleurs acceptés par certains prêteurs |
| Property portfolio mortgages | Regrouper plusieurs biens locatifs sous un prêt unique | Particuliers et sociétés, intérêt réel à partir de quatre biens | Sûreté sur la valeur globale ; substitution d'un bien vendu sans rembourser le prêt si valeur et loyers couvrent la dette ; coexistence avec des prêts individuels |

### Résidentiel de prestige et clientèle internationale (menu « Residential / Wealth »)

| Produit (page) | Besoin couvert | Clientèle | Mécanique et repères annoncés |
| --- | --- | --- | --- |
| Prime residential mortgages | Résidences de 1 M£ et plus | Clientèle fortunée, revenus complexes | Mise en relation avec un banquier privé adapté ; produits fixes et variables ; exemple indicatif de 7 M£ sur cinq ans en intérêts seuls ; honoraires typiques 1 % |
| Prime London mortgages | Immobilier « prime » et « super-prime » londonien | Entrepreneurs, dirigeants aux revenus en dividendes, familles internationales, cadres mobiles | Trois piliers : sélection du prêteur parmi banques privées et prêteurs de montants élevés, dossier narratif « lender-ready », coordination jusqu'à la signature ; intérêts seuls pour préserver la liquidité |
| Private bank mortgages | Financements sur mesure au-delà des critères standards | Clients fortunés des banques privées, structures inhabituelles | La relation client-banque permet de dépasser les grilles ; pas de plafond fixe ; intérêts seuls ou capitalisés ; politique variable selon la succursale |
| Foreign national mortgages | Non-résidents achetant ou refinançant au Royaume-Uni | Cadres internationaux, expatriés de retour | Prêteurs jugeant sur relevés et patrimoine plutôt que sur le score de crédit britannique ; origine des fonds et de la fortune documentée d'emblée ; levier plus prudent |
| International property mortgages / Western Europe | Acheter ou refinancer hors de son pays | Acheteurs de résidences secondaires, investisseurs, familles multi-pays, clients d'Afrique, d'Asie et du Moyen-Orient | Choix entre prêteur local et banque transfrontalière ; règles d'apport, notariat, restrictions aux non-résidents et contrôle de l'origine des fonds selon le pays ; opérations « from €500,000 upward » |
| Complex offshore structures | Emprunter via plusieurs entités, SPV, trusts, fondations, actifs offshore, dettes superposées | Familles, trustees, investisseurs internationaux | Les banques de détail déclinent ; « hundreds of offshore lenders » spécialisés ; organigramme clair à fournir tôt ; charges sur trusts ou SPV rarement seules sûretés |

### Actifs d'exception (menus « Marine » et « Aviation »)

| Produit (page) | Besoin couvert | Clientèle | Mécanique et repères annoncés |
| --- | --- | --- | --- |
| Marine finance / Yacht mortgages | Yachts de plus de 20 m, achat ou refinancement, structures transfrontalières | Particuliers fortunés, sociétés | Hypothèque maritime ; registres britannique, caïmanais, BVI, maltais ; 5 à 7 ans avec paiement final (ballon) ; immatriculation commerciale pour l'affrètement ; repères jusqu'à 70 % d'une expertise indépendante |
| Superyacht finance | Yachts de plus de 30 m | Très grandes fortunes, family offices | Prêt à une société de détention (SPV, juridiction neutre), hypothèque sur le navire et garantie personnelle du bénéficiaire effectif ; levier courant 50-60 % ; revenus d'affrètement cessibles |
| Marine lease finance | Alternative au prêt hypothécaire en Méditerranée (France, Italie, Malte) | Propriétaires naviguant en eaux européennes | La banque achète le navire, option d'achat finale pour environ 1 % ; avantages historiques de TVA, récupération possible en usage commercial |
| Pre-construction marine finance | Financer les coûts antérieurs à la construction (acompte au chantier, conception, équipements, créneau de cale) | Commanditaires de navires neufs | Intérêts seuls sur les fonds tirés, bascule en financement par tranches au démarrage du chantier, refinancement en hypothèque à la livraison ; crédit export possible |
| Aviation finance / Senior secured aircraft finance | Acheter, refinancer ou restructurer la dette d'un aéronef | Propriétaires d'avions privés, opérateurs | Prêt garanti par hypothèque sur l'aéronef ou crédit-bail (opérationnel ou financier) ; banques, prêteurs spécialisés, institutionnels, fonds de crédit privé ; coût selon âge, type, usage et solidité de l'emprunteur ; avions de 20-25 ans difficiles ; repères 5 à 12 ans, jusqu'à 90 %, honoraires 1,5 % |
| Aviation bridging loans | Saisir une opportunité d'achat à délai court | Acheteurs d'aéronefs | 0 à 24 mois, plus coûteux, relayé ensuite par un financement long (jusqu'à 25 ans) |

### Patrimoine et sûretés non immobilières (menu « Wealth »)

| Produit (page) | Besoin couvert | Clientèle | Mécanique et repères annoncés |
| --- | --- | --- | --- |
| Lombard loan advisory | Liquidité à court ou moyen terme sans vendre un portefeuille (obligations, actions, liquidités, fonds) | Particuliers fortunés, family offices | Propriété conservée, revenus et plus-values maintenus ; repères 70-90 % sur obligations, 50-70 % sur actions, 90-100 % sur liquidités ; banques privées |
| Single stock lending advisory | Emprunter sur une ligne concentrée sans la vendre | Fondateurs, actionnaires majoritaires, family offices | Titres nantis auprès d'un tiers, droits de vote conservés sous covenants ; levier plus faible et appels de marge plus stricts ; règles sur les initiés |
| Crypto bridging / Bitcoin loans advisory | Liquidité adossée à des actifs numériques, sans vente | Fondateurs, premiers investisseurs, entreprises détenant des actifs numériques | Relais court, conservation par un dépositaire tiers ou portefeuille contrôlé par le prêteur, fonds versés en devises ; levier 30-60 % selon la page ; taux supérieurs, appels de marge |
| Art finance advisory | Liquidité adossée à des œuvres | Collectionneurs, family offices, galeries | Critères : expertise indépendante, rareté et provenance, état, authenticité, liquidité ; pièces uniques de grande valeur préférées ; levier 30-60 % ; suivi de valeur et sûretés complémentaires possibles |

### Pages transversales

| Page | Rôle |
| --- | --- |
| Lenders | Explique l'indépendance, le nombre illimité de prêteurs, la commission versée par les prêteurs et sa communication pendant le processus |
| Introducers | Programme d'apporteurs : produits apportables, partage de la commission à la signature, remise en relation directe après conditions indicatives, points d'étape, non-contournement |
| Lender calculator / Developer scorecard | Outils d'auto-évaluation : capacité d'emprunt et nombre de prêteurs potentiels ; notation d'un projet de promotion |
| FAQ | Réponses par produit (colocation, locatif, portefeuille, hôtellerie, non-résidents, actifs mixtes, sortie de promotion, foncier, prêts sur titres et actifs numériques, succession) |
| Case studies, Blogs | Preuve par l'exemple et pédagogie (voir sections 7 et plan du site) |
| Types of borrowing | Ancienne page de synthèse (environ 2022) : promotion, relais, résidentiel de prestige, gestion de patrimoine, marine, avec exemples chiffrés et honoraires |

## 6. Processus et méthode de travail

Les sources ne décrivent pas un parcours client formalisé étape par étape sur une page dédiée ; les éléments suivants sont dispersés entre les pages produits, la page apporteurs, les conditions générales et les avis.

**Entrée en relation.** Quatre canaux : formulaire d'enquête (nom, coordonnées, type de financement, montant, pays de résidence, aperçu de l'opération, consentement), courriel, téléphone, WhatsApp. Un outil « Lender Calculator » (type de projet, type de prêt, montant, durée) indique combien de prêteurs pourraient financer un projet ; un « Development Finance Scorecard » (sous-domaine, apparemment non finalisé) promet une note sur cinq critères en moins de dix minutes, un rapport et une consultation facultative.

**Analyse et sélection.** Le cabinet se présente comme indépendant, « whole-of-market », et dit resserrer le choix « to as many as 3 or 4 potential partners » par opération (pages courtier commercial et promotion). Les prêteurs sont des banques privées, banques d'investissement, prêteurs spécialisés et fonds de dette privée. Pour la promotion, les financements sont tirés par tranches « in line with the business plan and construction schedule », intérêts capitalisés, remboursement à l'achèvement par ventes ou refinancement. Pour le relais, « no affordability assessment », intérêts réglés en une fois à l'échéance, sortie par vente ou refinancement.

**Conditions indicatives, puis dossier.** Le cabinet émet des « indicative terms » ; lorsque le client décide de poursuivre, le dossier formel est monté avec lui. La page apporteurs décrit ce passage : une fois les conditions indicatives fournies, l'apporteur met le cabinet en relation directe avec l'emprunteur pour la demande formelle.

**Suivi jusqu'à la signature.** Points d'étape mentionnés : expertise (« valuation »), juridique (« legals »), signature (« completion »). L'apporteur « receives regular milestone updates » et est payé « upon the successful completion of the loan ». Les avis tiers retiennent « clear options », un accompagnement « through each step » et une réactivité « quick to respond ».

**Documents demandés (selon les pages produits et la FAQ).** Comptes des deux ou trois derniers exercices pour un hôtel en exploitation, projections pour un hôtel fermé ; plan d'affaires et calendrier de travaux pour la promotion ; justification de l'origine des fonds et renforcement documentaire pour les non-résidents (« path of funds », AML/KYC) ; durée résiduelle de bail pour les actifs en bail à long terme ; pour un portefeuille, l'ensemble des actifs peut être financé par un prêt unique coexistant avec des prêts individuels.

**Cadre contractuel (conditions générales, février 2026).** Accord d'honoraires propre à chaque client ; produits « from across the market, but not deals that you can only obtain by going direct to a lender » ; pas de conseil réglementé en crédit immobilier ni en assurance ; pas de détention de fonds de clients ; réclamations écrites adressées au directeur général ; délégué à la protection des données nommé. Avec les apporteurs : discrétion, transparence et « strict non-circumvention », conditions convenues à l'avance.

## 7. Études de cas citées

- **Silver Oak Capital Case Studies** — Index/listing page of Silver Oak Capital's case studies, described by the search tool as a UK mortgage and lending firm's "Client Mortgage Success Stories" listing covering complex loan and mortgage deals. Deals named in the index snippet [a]: a £1m revolving credit facility for a housebuilder; a £4m bridging loan secured against a central London property; a £3.6m bridging loan on a Kensington property; a £1.46m refinance on an unencumbered residential property in Prime Central London; a £3.5m refinance; a yacht finance deal; a Manchester office financing; a purpose-built student accommodatio… (https://www.silveroakcapital.co.uk/case-studies/)
- **NW London Bridging Loan** — Case study of a GBP 19 million gross bridging loan (development-exit style refinance) arranged by Silver Oak Capital for a developer completing a 25-apartment luxury residential scheme in North West London. The developer had run over on the build schedule, so the scheme was only about 80% complete when the outstanding development and mezzanine (Mezz) facilities needed refinancing; the bridge was used to allow more time to market and sell the remaining units. Challenge: finding a lender willing to fund a partly finished residential scheme, which required presenting a clear exit and marketing p… (https://www.silveroakcapital.co.uk/case-studies/nw-london-bridge/)
- **£3.6 Million Bridging Loan** — Case study of a £3.6 million bridging facility arranged by Silver Oak Capital on a high-value (prime) residential property in Kensington, London. Purpose: refinance an existing debt/loan and raise additional capital for future acquisitions/purchases. Challenge: two specialist lenders had withdrawn at the final stage over intercreditor disagreements about first and second charges, leaving the borrower under time pressure. Structure/solution: Silver Oak worked with one lender to secure a single first-charge bridging loan that repaid the existing debt and covered the full capital raise, so no se… (https://www.silveroakcapital.co.uk/case-studies/3-6-million-bridging-loan-prime-kensington-property/)
- **Bridging Loan for Land with Planning** — Case study of a GBP 1.2 million bridging loan arranged by Silver Oak Capital on a development site in Glasgow. The site was valued at GBP 2 million WITHOUT planning consent (valuation by Knight Frank). The borrower was an offshore trust company that wanted to release value from its assets to fund the entire planning application for a proposed 220-unit residential scheme with ground-floor commercial space. Structure: GBP 1.2m loan, 60% LTV, 0.9% per month, 18-month term, interest rolled up. Challenges: unconsented land is hard to lend on (fewer lenders take 'planning risk') and the borrowers r… (https://www.silveroakcapital.co.uk/case-studies/bridging-loan-land-with-planning/)
- **/case-studies/800k-bridging-loan-refinance/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/800k-bridging-loan-refinance/)
- **/case-studies/bridging-for-a-retail-purchase-in-liverpool/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/bridging-for-a-retail-purchase-in-liverpool/)
- **/case-studies/bridging-villa-cap-ferrat/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/bridging-villa-cap-ferrat/)
- **/case-studies/finance-for-100-senior-housing-development-in-kent/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/finance-for-100-senior-housing-development-in-kent/)
- **/case-studies/manchester-office/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/manchester-office/)
- **/case-studies/pbsa/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/pbsa/)
- **/case-studies/g650/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/g650/)
- **/case-studies/heesen-yacht-finance/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/heesen-yacht-finance/)
- **/case-studies/aircraft-loan-falcon-900/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/aircraft-loan-falcon-900/)
- **/case-studies/yacht-finance-calculator/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/yacht-finance-calculator/)
- **/case-studies/top-aviation-firms/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/top-aviation-firms/)
- **/case-studies/bvi-trust-refinance/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/bvi-trust-refinance/)
- **/case-studies/1-46-million-refinance-prime-central-london-property/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/1-46-million-refinance-prime-central-london-property/)
- **/case-studies/silver-oak-capital-added-to-spears-500-list-for-2022/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/silver-oak-capital-added-to-spears-500-list-for-2022/)
- **/case-studies/miami-developer/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/miami-developer/)
- **/case-studies/purchase-and-upgrade-21-million-office-in-london/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/purchase-and-upgrade-21-million-office-in-london/)
- **/case-studies/notting-hill-large-residential-mortgage/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/notting-hill-large-residential-mortgage/)
- **/case-studies/mayfair-self-employed-equity-release/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/mayfair-self-employed-equity-release/)
- **/case-studies/country-estate-refinance/** — non extraite (https://www.silveroakcapital.co.uk/case-studies/country-estate-refinance/)

## 8. Chiffres, promesses et éléments à ne pas reprendre tels quels

Les éléments ci-dessous appartiennent à Silver Oak Capital ou sont contradictoires entre leurs propres sources. Ils ne doivent apparaître sur le site ARASTE ni comme des faits concernant ARASTE, ni comme des promesses, sans validation écrite du cabinet et, pour les mentions réglementaires, d'un conseil.

**Chiffres incohérents selon les pages et les dates**

- Nombre de prêteurs : 300+, 500+, 700+ et 800+ selon la page ou la source. Le site ARASTE ne cite aucun nombre de prêteurs (règle éditoriale existante).
- Fourchette d'opérations : « over £500,000 », « £500k to £20m », « £2m to £20m », « £1m+ », « £5m and above ». ARASTE affiche ses montants cibles seulement si `siteConfig.ticketSize.enabled` est activé après validation.
- Honoraires : environ 1 % (1,5 % hors Royaume-Uni), ou frais de dossier puis 0,5 % + 0,5 %, ou accord propre à chaque client. ARASTE renvoie aux informations légales et à un accord écrit préalable.
- Ratios et taux cités sur les pages produits (par exemple 65-75 % de la valeur en fin de projet, 60-70 % pour l'hôtellerie, 30-60 % pour les actifs numériques, exemple à 6,5 % fixe) : repères de marché datés, propres aux prêteurs britanniques ; les tests du site ARASTE interdisent tout pourcentage, ratio ou taux dans les contenus.
- Code postal du siège (W1G 0EE / W1G 0EF), année de création (2018 / 2019 / 2020 selon la source).

**Références et preuves sociales de Silver Oak**

- Études de cas chiffrées (relais de 19,1 M£, 3,6 M£ à Kensington, 4 M£, refinancement de domaine à 4,55 M£, bureaux à 21 M£, 4,5 M£ à Manchester, 10 M$ à Miami, 5 M€ à 62,5 % pour un hôtel-boutique, refinancement de 3,5 M£ pour un expatrié monégasque, etc.) : ce sont leurs opérations. ARASTE ne publie ni référence ni résultat non validé (brief initial).
- Liste Spear's 500, article Bridging & Commercial, participation aux Property Week Awards, avis 5/5 sur un annuaire : distinctions et avis propres à Silver Oak.
- Noms de prêteurs cités dans les annonces (par exemple GB Bank) : à ne pas reprendre.

**Promesses et formulations à ne pas transposer**

- « one of Europe's leading large loan brokers », « access to the largest network of lenders in the market », « fast », « instant quote » : superlatifs et promesses de rapidité, exclus par la ligne éditoriale d'ARASTE (termes interdits dans les tests de contenu).
- « no affordability assessment », « quick to arrange » : caractéristiques de produits britanniques réglementés différemment ; à reformuler, le cas échéant, comme des caractéristiques générales d'un financement de transition, sans promesse.
- « WhatsApp Us Now », « Get a Instant Quote Now » : appels à l'action incompatibles avec le ton du site.

**Périmètre réglementaire**

- Silver Oak indique ne pas fournir de conseil réglementé en crédit immobilier ni en assurance, et mentionne des prêts « regulated » pour les propriétaires occupants et le « Consumer Buy-to-Let ». ARASTE n'intervient que pour des emprunteurs professionnels et n'aborde ni le crédit à la consommation ni la résidence principale : les pages résidentielles reprises doivent conserver cette limite, et le statut d'intermédiaire dans chaque pays d'implantation reste à valider (voir `docs/AVANT-PUBLICATION.md`).
- Produits adossés à des actifs numériques, à des œuvres d'art ou à des titres : vérifier, pays par pays, que l'intermédiation est permise avant de les présenter.

**Ce qui peut être repris librement, réécrit**

- La structure de l'offre (familles de produits, cas d'usage, critères qualitatifs, pièces utiles, étapes), les questions que se posent les clients (FAQ) et la logique des pages (besoin, approche, pièces, limites), qui correspondent déjà au gabarit des pages d'expertise d'ARASTE.

### Relevé des affirmations (toutes pages)

**NOT recovered for this page**

- Testimonials, named BTL lenders, BTL rates, BTL case studies _(source : /buy-to-let-mortgages/)_

**absence**

- No testimonials, awards, credentials, lender counts or case studies were surfaced for this page _(source : /art-finance-advisory/)_
- No testimonials, awards, credentials, fees, rates or minimum loan sizes revealed for this page [a][b][c] _(source : /auction-finance/)_
- No testimonials, awards, credentials, lender-count figures, rates or fees surfaced for this page _(source : /below-market-purchases/)_
- No testimonials, awards, or regulatory statements surfaced for this page _(source : /bitcoin-loans-advisory/)_
- No testimonials, awards or credentials surfaced for this page _(source : /conversions/)_
- No testimonials, awards, credentials, lender counts or numeric promises surfaced for this page [a][b][c] _(source : /crypto-bridging-advisory/)_
- No testimonials, awards, fees, rates or timescales revealed for this page by any of the three searches _(source : /development-finance-brokers/)_
- No testimonials, awards or credentials were revealed for this page _(source : /distressed-asset-finance/)_
- No testimonials, awards, named lenders or statistics were revealed for the FAQ page _(source : /faq/)_
- No testimonials, awards, credentials or case studies specific to this page were surfaced in the results _(source : /foreign-national-mortgages/)_
- No testimonials, awards, case studies or regulatory credentials were revealed for this page by any result _(source : /hmo-finance/)_
- No testimonials, awards, credentials, fees, rates or timescales specific to the hotel-finance page were revealed by any search _(source : /hotel-finance/)_
- No testimonials, awards or fee details for this page appeared in any of the three results [a][b][c] _(source : /international-property-mortgages/)_
- No testimonials, awards or credentials were surfaced for the /lenders/ page _(source : /lenders/)_
- No testimonials, awards, credentials, rates, fees or LTV figures revealed in the excerpts for this page [a][b][c] _(source : /light-to-heavy-refurbishment/)_
- No testimonials, awards or case studies specific to Lombard loans surfaced in the three searches _(source : /lombard-loan-advisory/)_
- No testimonials, awards, credentials or FCA statements revealed for this page _(source : /marine-finance/)_
- No testimonials, awards or credentials surfaced for this page [a][b][c] _(source : /marine-lease-finance/)_
- No testimonials, awards, credentials, timescales or guarantees surfaced for this page _(source : /mixed-use-property-finance/)_
- No testimonials, awards, lender counts, loan-size figures or timescales were revealed for this page _(source : /pre-construction-marine-finance/)_
- No testimonials, star ratings or award badges were surfaced for this page _(source : /prime-residential-mortgages/)_
- Testimonials, awards or credentials specific to the target page: none revealed _(source : /private-bank-mortgages/)_
- No testimonials, timescales, rate figures, fee figures or LTV figures were revealed for this page _(source : /probate-lending/)_
- No testimonials, awards, credentials or named case studies were surfaced for this page by the searches _(source : /property-development-finance/)_
- No lender-count figure, testimonial, award, credential or guarantee was revealed for this page _(source : /senior-secured-aircraft-finance-advisory/)_
- No testimonials, case studies, numeric figures, timescales or credentials were revealed for this specific page _(source : /single-stock-lending-advisory/)_
- No testimonials, awards, credentials or case-study references for this specific page were surfaced _(source : /stretch-senior-development-finance/)_
- No testimonials, awards or credentials specific to the superyacht page appeared in the results _(source : /superyacht-finance/)_
- No testimonials, awards, credentials, numbers or promises specific to /whole-loans/ were revealed _(source : /whole-loans/)_

**absence note**

- No testimonials, awards, lender counts or completion-volume figures specific to the yacht mortgages page were surfaced by any search. _(source : /yacht-mortgages/)_

**absence-note**

- No testimonials, awards, lender-count or loan-size figures were revealed for this page _(source : /development-exit-loans/)_
- No testimonials, awards, credentials, lender counts or loan-size figures were revealed for this specific page _(source : /post-planning-land-acquisitions/)_

**advice / criteria [b]**

- The 'story' behind the discount matters to lenders _(source : /below-market-purchases/)_

**article title / statistic (new blog URL, [b])**

- Why 70% of London Development Finance Deals Get Rejected _(source : /lender-calculator/)_

**asset**

- Secured on a high-value / prime residential property (home / house) in Kensington _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**asset [a][b]**

- 25-apartment luxury residential scheme in North West London _(source : /case-studies/nw-london-bridge/)_

**audience**

- Suited to high-net-worth individuals, crypto investors and businesses holding digital assets who need short-term funding [a][b] _(source : /crypto-bridging-advisory/)_
- Target groups include international executives relocating to the UK and UK expatriates returning from abroad [a] _(source : /foreign-national-mortgages/)_

**award**

- Listed in Property Week Commercial Property Awards 2026 (organisation page) [a] _(source : /complex-offshore-structures/)_
- Spear's 500 adviser profile exists for Jimmy Baillie (spears500.com/adviser/22953 and /6519) [c]; seed records Spear's 500 list 2022 [seed] _(source : /prime-residential-mortgages/)_

**award listing [a]; whether shortlisted or won is not stated**

- Listed as an organisation at Property Week 'Commercial Property Awards 2026 - Private' _(source : /commercial-mortgages/)_

**award-listing**

- Organisation page on Property Week Commercial Property Awards 2026 (awards.propertyweek.com/live/en/node/organisation-silver-oak-capital), cited by [a] as a 2026 award listing stating 800+ lenders _(source : /property-portfolio-mortgages/)_

**award-listing (external)**

- Silver Oak Capital has an organisation entry on awards.propertyweek.com titled 'Commercial Property Awards 2026 - Private' [a] - a listing only; result does not say the firm won anything _(source : /single-stock-lending-advisory/)_

**award-mention**

- Appears in Property Week 'Commercial Property Awards 2026' organisation listing (link title only, per [a]; content not revealed) _(source : /probate-lending/)_

**award/credential**

- Jimmy Baillie listed on Spear's 500 (spears500.com adviser profile) _(source : /commercial-mortgage-broker/)_

**award/recognition**

- Added to Spear's 500 list for 2022 _(source : /about-us/)_
- Spear's 500 adviser profile for Jimmy Baillie (spears500.com) [c][seed] _(source : /)_

**award/recognition (awards.propertyweek.com) [a]**

- Listed in Property Week Commercial Property Awards 2026 (organisation page) _(source : /buy-to-let-mortgages/)_

**awards / recognition [a]**

- Silver Oak Capital listed in Commercial Property Awards 2026 (awards.propertyweek.com organisation node) _(source : /aviation-bridging-loans/)_

**benefit**

- Borrowers keep their holdings and their upside [b] _(source : /crypto-bridging-advisory/)_
- Leasing has historically offered significant VAT advantages and flexibility for owners navigating EU waters [b] _(source : /marine-lease-finance/)_
- Commercial-use leases can allow VAT reclaim on running costs (FAQ page) [a][b] _(source : /marine-lease-finance/)_
- Avoiding a second lender eliminates the Intercreditor Deed [b] _(source : /stretch-senior-development-finance/)_

**benefit / promise**

- Arranges lenders using investment valuations, letting investors recycle cash and pull out most of their deposit [b] _(source : /hmo-finance/)_

**borrower-type**

- Borrower: offshore trust company _(source : /case-studies/bridging-loan-land-with-planning/)_

**capability**

- Provides the liquidity to fund the shipyard stage payments during the build [b] _(source : /pre-construction-marine-finance/)_
- Can also use the export credit market to help fund a brand-new yacht build [b, /marine-finance/] _(source : /pre-construction-marine-finance/)_
- The firm's network of specialist lenders gives clients access to single stock financing [a] _(source : /single-stock-lending-advisory/)_
- Export credit market can be used for new builds (marine finance page) [b] _(source : /superyacht-finance/)_

**capability (/prime-london-mortgages/)**

- Silver Oak sources options from specialist high-value residential lenders and private banks [b] _(source : /private-bank-mortgages/)_

**case study**

- Case study: USD 40m loan, 80% LTV, 10-year term, 1.5% fee (G650) _(source : /aviation-finance/)_
- Case study: private jet loan at 70% LTV, 4.45% fixed, 72 months (Falcon 900) _(source : /aviation-finance/)_
- Heesen 50-metre yacht: $14 million loan, 60% LTV, 10-year term, 20-year amortisation profile, 2.75% lender fee [a] _(source : /superyacht-finance/)_

**case study (separate case-study page) [b]**

- Case study: 100-unit affordable housing scheme in Kent, GBP 45m GDV, build funding plus bridge refinance _(source : /senior-development-finance/)_

**case study / track record**

- Case study: €5 million bridging loan on a villa near Monaco [b] _(source : /private-bank-mortgages/)_
- Case study: $40m private jet finance deal [b] _(source : /private-bank-mortgages/)_

**case study [a][b]**

- Falcon 900 aircraft loan: 70% LTV, 4.45% fixed rate, 72-month term (term loan, not bridging) _(source : /aviation-bridging-loans/)_

**case study [b]**

- G650 financing: $40m at 80% LTV over 10 years (not bridging) _(source : /aviation-bridging-loans/)_

**case-study**

- £3.6 million bridging loan completed on a prime Kensington property after two specialist lenders withdrew at the final stage _(source : /bridging-loans-uk/)_
- £19 million bridging loan at 0.75% per month over 12 months for a North West London development _(source : /bridging-loans-uk/)_
- Case study: £4.5m commercial mortgage, 65% LTV, 7-year interest-only, Manchester office _(source : /commercial-mortgage-broker/)_
- €5 million bridging loan at 62.5% LTV on a Côte d'Azur villa to be converted into a boutique hotel (/case-studies/bridging-villa-cap-ferrat/) [a] _(source : /hotel-finance/)_
- Related case study: $14m at 60% LTV for a 50m Heesen yacht, 10-year term (/case-studies/heesen-yacht-finance/) _(source : /marine-finance/)_
- Case study: GBP 1.46m, 5-year interest-only refinance, Prime Central London, lender accepted non-standard loan purpose and combined household income [a][b] _(source : /prime-residential-mortgages/)_
- Case study: Notting Hill Large Residential Mortgage, private bank, client with oil and gas income [a][b] _(source : /prime-residential-mortgages/)_
- Deal listed: buy-to-let mortgage with second-charge bridging loan on a Surrey property [a] _(source : /prime-residential-mortgages/)_
- Case study: GBP 5.3m refinance of 10 London flats at 70% LTV, 2.50% five-year fixed, individual interest-only mortgages; client asked for ten separate mortgages rather than one loan [a][b] _(source : /property-portfolio-mortgages/)_

**case-study figure (Mayfair, other page) [b]**

- GBP 7.5m interest-only mortgage at 75% LTV on a GBP 10m Mayfair home, refinance and equity release _(source : /prime-london-mortgages/)_

**case-study figure (Notting Hill, other page) [b]**

- GBP 6.35m interest-only refinance at 60% LTV for an overseas client, placed with a private bank _(source : /prime-london-mortgages/)_

**case-study figure (other page) [b]**

- GBP 1.46m refinance of an unencumbered Prime Central London property, complicated by family loans and an overseas guarantor _(source : /prime-london-mortgages/)_

**case-study-figure [a][b]**

- Case study: £19 million bridging loan, 0.75% per month, 12 months, max 73% LTV, 15% personal guarantee, partly complete 25-apartment London scheme (/case-studies/nw-london-bridge/) _(source : /development-exit-loans/)_

**case-study-number**

- Falcon 900 case study (separate page): 70% LTV, 4.45% fixed rate, 72-month term, Dubai-based client [a][b] _(source : /senior-secured-aircraft-finance-advisory/)_

**caveat**

- Page title says 'land with planning' while body describes a site valued without planning (internal inconsistency flagged by both search summaries) _(source : /case-studies/bridging-loan-land-with-planning/)_
- Often includes tighter controls and covenants at higher leverage [a][b] _(source : /stretch-senior-development-finance/)_

**caveat (search tool)**

- Indexed copy of the page is ~700 days old; rates/fees may be out of date _(source : /aviation-finance/)_

**challenge**

- Two specialist lenders had withdrawn at the final stage over intercreditor terms (first and second charges) _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**challenge/outcome [b]**

- £3.6m Kensington facility arranged after two specialist lenders withdrew over intercreditor disagreements _(source : /case-studies/)_

**collateral**

- Bitcoin and Ethereum are the most commonly accepted assets [a] _(source : /crypto-bridging-advisory/)_

**comparative-terms**

- stretch senior loans can reach up to 75% of GDV or 90% of loan-to-cost in one transaction (stretch-senior page) [b] _(source : /whole-loans/)_

**completion-stage [a][b]**

- Scheme only partly complete (80%) at time of refinance; developer had run over on build schedule _(source : /case-studies/nw-london-bridge/)_

**contact**

- Office: 91 Wimpole Street, London, W1G 0EE; phone +44 207 459 4440 [a][b] _(source : /art-finance-advisory/)_
- Phone +44 207 459 4440 (also shown as 0207 459 4440 in directories) [a][b] _(source : /contact/)_
- Email enquiry@silveroakcapital.co.uk [a][b][seed] _(source : /contact/)_
- Address 91 Wimpole Street, London W1G 0EE [a][b][seed] _(source : /contact/)_
- Office: 91 Wimpole St, Marylebone, London W1G 0EF; phone +44 207 459 4440 [a]. Seed records postcode W1G 0EE on /contact/ - minor contradiction (0EE vs 0EF) _(source : /development-finance-brokers/)_
- London office 91 Wimpole Street, W1G 0EE; +44 207 459 4440 [a] _(source : /superyacht-finance/)_
- London office on Wimpole Street and an enquiry email address. [a] _(source : /yacht-mortgages/)_

**contact-contradiction**

- Office 91 Wimpole Street, Marylebone, London W1G 0EF [a] (seed: W1G 0EE) - postcode discrepancy _(source : /)_

**contradiction**

- Contradiction: lender count stated as 'hundreds of offshore lenders' (page), 500+ (LinkedIn), over 800 (FAQ, Spear's, Property Week) _(source : /complex-offshore-structures/)_
- Postcode contradiction: W1G 0EE (web pages) vs W1G 0EF (Odoo site, Ts&Cs PDF complaints address) [a][b] _(source : /contact/)_
- 'more than 300 lenders across 100 countries' (Spear's) vs 'over 800 lenders' (LinkedIn) - conflicting [c] _(source : /contact/)_
- CONTRADICTION: sibling /bitcoin-loans-advisory/ states typical LTVs are conservative 30-50% vs this page's 60% or lower [a] _(source : /crypto-bridging-advisory/)_
- CONTRADICTION: lender count varies 300+ / 500+ / 700+ / 800+ across pages and profiles; search tool flags 'verify it before relying on it' [a][b] _(source : /development-finance-brokers/)_
- Older listings cite 300 or 500 lenders; figure inconsistent across sources [a] (seed also records 700+ on some pages) _(source : /international-property-mortgages/)_
- Contradiction with seed: this page cites 300+ lenders while /bridging-loans-uk/ and /commercial-mortgage-broker/ cite 700+ and home//faq/ cite 800+ _(source : /marine-finance/)_
- Prime residential threshold: GBP 1m+ on this page vs GBP 5m and above on /types-of-borrowing/ [b][seed] _(source : /prime-residential-mortgages/)_
- CONTRADICTION: lender-panel size cited as 300+, 500+, 700+ (seed) and 800+ across sources _(source : /probate-lending/)_
- Contradiction: /types-of-borrowing/ older example 75% LTGDV / 85% LTC vs 90% LTC on this page [a] _(source : /stretch-senior-development-finance/)_
- Contradiction: Scotland article 'up to 85% of total costs' vs 90% LTC on this page [b] _(source : /stretch-senior-development-finance/)_
- Lender count 300+ (older listings / Spear's) vs 800+ (current homepage / LinkedIn / complex offshore structures page) [a][b][c] _(source : /western-europe/)_
- Loan size £2m to £20m (older profiles) vs over £500,000 (current homepage) [a] _(source : /western-europe/)_
- Geography: older 'UK, Western Europe, Southern Africa, Middle East' vs current homepage 'UK, US, Western Europe, Middle East' (Southern Africa dropped, US added) [a][c] _(source : /western-europe/)_

**contradiction [a, seed]**

- CONTRADICTION: lender count stated as 300+, 500+, 700+ and 800+ depending on page/source _(source : /lenders/)_

**coverage**

- Hotels listed among commercial sectors covered alongside Retail, Office, Logistics, Care Homes, Student Accommodation (homepage) [a][seed] _(source : /hotel-finance/)_
- Whole-loan providers comfortable funding hotels, PBSA, BTR and industrial provided exit yields and demand are proven (/whole-loans/) [b] _(source : /hotel-finance/)_

**coverage [a]**

- Covers a large share of the land purchase and most of the construction costs _(source : /senior-development-finance/)_

**credential**

- Jimmy Baillie: BCom Honours in Economics, University of Cape Town, 2010 _(source : /about-us/)_
- strong relationships with private banks around the world; advises (U)HNWs _(source : /commercial-mortgage-broker/)_
- Has advised on trust- and estate-held assets, onshore and offshore [b] _(source : /complex-offshore-structures/)_
- Spear's 500 adviser profile for Jimmy Baillie [c] _(source : /complex-offshore-structures/)_
- Founded by Jimmy Baillie in 2019 (Spear's 500, third party) [c] _(source : /contact/)_
- Listed on Spear's 500 (adviser profiles 22953 and 6519 for Jimmy Baillie) [c] _(source : /contact/)_
- Brokers and advises on loans to (U)HNWs through strong relationships with private banks around the world [c, Spear's] _(source : /development-finance-brokers/)_
- Secondhand [a], not from FAQ page: founded in 2019 with a focus on loans between £2m and £20m; contradicts 'over £500,000' (home, /lenders/) and '£500k to £20m' (/about-us/) per seed; seed also notes one page says 2018 _(source : /faq/)_
- Founded in 2019 by Jimmy Baillie, Founder & Managing Director [a][b][c] _(source : /)_
- Silver Oak Capital Ltd, company number 08551479, incorporated in England and Wales [a] _(source : /)_
- Spear's 500 listing (two spears500.com adviser profiles for Jimmy Baillie surfaced) [c][seed] _(source : /international-property-mortgages/)_
- Access to a network of hundreds of lenders, including private banks (search-tool summary wording) _(source : /lombard-loan-advisory/)_
- Silver Oak Capital is a debt advisory firm located in London, UK (contact page) _(source : /lombard-loan-advisory/)_
- Direct relationships with pension funds, hedge funds and private equity managers [a, /whole-loans/] _(source : /mezzanine-junior-finance/)_
- Debt advisory business established in 2019, advising UHNW clients on secured loans GBP 2m-20m (Spear's) [c]; seed notes one page says 2018 [seed] _(source : /prime-residential-mortgages/)_
- Founded in 2019 (About Us, per [b]; seed notes one page says 2018) _(source : /probate-lending/)_
- Silver Oak Capital added to Spear's 500 list for 2022 (case study URL seen) [a] _(source : /property-portfolio-mortgages/)_
- Founded in 2019 by Jimmy Baillie [a] _(source : /western-europe/)_
- Spear's 500 adviser profile exists for Jimmy Baillie (spears500.com/adviser/6519 and /22953) [c] _(source : /western-europe/)_

**credential (third-party profiles Crunchbase/LinkedIn) [a]**

- Company founded 2019, London, 11-50 employees _(source : /senior-development-finance/)_

**credential / network**

- Works with lenders across several registers including British, Cayman, BVI and Maltese. [a][b] _(source : /yacht-mortgages/)_

**credential / positioning**

- London debt advisory firm, not a traditional high street lender [a] _(source : /hmo-finance/)_

**credential / third-party confirmation [a]**

- LinkedIn and Crunchbase profiles confirm Silver Oak Capital is a London-based real estate debt firm _(source : /below-market-purchases/)_

**credential [a] Crunchbase**

- Founded 2019, based in London, 11-50 employees _(source : /commercial-mortgages/)_

**credential/number**

- 300+ Lenders (aviation pitch) _(source : /aviation-finance/)_

**credential/number (external, contradicts 300+)**

- More than 800 lenders across the world (Spear's profile) _(source : /aviation-finance/)_

**credential/recognition**

- Spear's 500 adviser profile for Jimmy Baillie exists [c] _(source : /private-bank-mortgages/)_

**criteria**

- Most lenders prefer 12 months' ownership of a standard buy-to-let before an HMO [b][seed] _(source : /hmo-finance/)_
- Boat finance for yachts typically over 20m in length _(source : /marine-finance/)_
- Financed yachts usually registered in UK, Cayman Islands, BVI or Malta _(source : /marine-finance/)_

**criteria (/faq/) [a]**

- Most lenders prefer 12 months' ownership of a standard BTL before HMO _(source : /buy-to-let-mortgages/)_

**cross-reference-other-case-study [b]**

- Cross-reference: £3.6 million Kensington bridge priced at 0.78% per month _(source : /case-studies/nw-london-bridge/)_
- Cross-reference: €5 million Cap Ferrat villa loan at 0.55% per month _(source : /case-studies/nw-london-bridge/)_

**cta**

- 'WhatsApp Us Now' option on the page [a][b] _(source : /contact/)_
- SERP title variant 'Get a Instant Quote Now' implies an instant-quote CTA on the page [b]; not otherwise confirmed _(source : /development-finance-brokers/)_

**date [a] (Bridging & Commercial)**

- Trade press: issued on 2 March 2020 _(source : /case-studies/nw-london-bridge/)_

**date/freshness**

- Page is about 230 days old relative to 2026-10-29 (search tool note), i.e. published/updated around spring 2026, while trade press dates the deal to October 2024 _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**deal claim, property not aviation [c]**

- Silver Oak arranged a £4,000,000 bridging loan to refinance a prime residential property in Kensington (LinkedIn post, Joe Berk) _(source : /aviation-bridging-loans/)_

**deal example**

- GBP 4m bridging loan to refinance a prime Kensington property (LinkedIn post) _(source : /about-us/)_

**deal example (not on this page)**

- 'time-sensitive £4m refinance secured against a prime residential asset in Kensington' [c, LinkedIn post] _(source : /distressed-asset-finance/)_

**deal size**

- GBP 19.1m bridging loan arranged in 2020 (Spear's, self-reported) _(source : /about-us/)_

**deal-amount [a]**

- £1m revolving credit facility arranged for a housebuilder _(source : /case-studies/)_
- £4m bridging loan secured against a central London property _(source : /case-studies/)_
- £3.5m refinance _(source : /case-studies/)_

**deal-amount [a][b]**

- £3.6m bridging loan on a Kensington property _(source : /case-studies/)_
- £1.46m refinance on an unencumbered residential property in Prime Central London _(source : /case-studies/)_

**deal-context [b]**

- £19m NW London deal: 25-apartment scheme about 80% complete at time of refinance _(source : /case-studies/)_

**deal-terms [a]**

- £8m Cotswolds loan at 70% loan-to-GDV over 24 months, interest rolled up, 3.95% plus Bank Base Rate, 1% bank fee, 1% exit fee _(source : /case-studies/)_

**deal-terms [b]**

- £19m North West London bridging loan: 0.75% per month, 12-month term, maximum 73% LTV, 15% personal guarantee _(source : /case-studies/)_
- £800,000 central London bridging refinance for a Kenyan national with no UK credit profile: 5-year fixed at 4.19%, 75% LTV _(source : /case-studies/)_
- Cap Ferrat villa: €5 million at 62.5% LTV, 0.55% per month, 24 months _(source : /case-studies/)_

**deal/testimonial-like**

- GB Bank delivered a £3.5 million refinance facility with Silver Oak Capital Debt Advisory for an expatriate client based in Monaco (LinkedIn) [c] _(source : /)_

**definition**

- Foreign national mortgage supports non-UK citizens purchasing or refinancing UK property [a][b] _(source : /foreign-national-mortgages/)_
- Light works need no building regulations or planning permission; medium works usually rely on Permitted Development Rights [a][b] _(source : /light-to-heavy-refurbishment/)_
- Probate lending is a lender providing finance to the heirs, secured against their future inheritance (page, per [a][b]) _(source : /probate-lending/)_
- Superyachts are vessels over 30 metres [a] _(source : /superyacht-finance/)_
- Yacht mortgage defined as a secured loan where the vessel itself is collateral. [b] _(source : /yacht-mortgages/)_

**definition / contradiction with 30m**

- Yachts financed are typically over 20m in length (marine finance page) [a][b] _(source : /superyacht-finance/)_

**directory listing (third-party) [a]; note possible contradiction with seed office at 91 Wimpole Street W1G**

- Listed on mortgage118.com broker directory under Hackney, London _(source : /buy-to-let-mortgages/)_

**disclosure (seed /lenders/)**

- Receives commission from lenders, disclosed during the process _(source : /buy-to-let-mortgages/)_

**disclosure [seed /lenders/]**

- typically receives commission from lenders, with details disclosed during the process _(source : /lenders/)_

**duration**

- Short-term facility, up to 12-24 months [b] _(source : /light-to-heavy-refurbishment/)_

**duration - FAQ entry [a][b]; contradicts 6-12 months**

- Typically 12 to 18 months, providing a safety buffer _(source : /post-planning-land-acquisitions/)_

**duration - page body [a][b]**

- Term of roughly 6 to 12 months to arrange build finance and discharge planning conditions _(source : /post-planning-land-acquisitions/)_

**eligibility**

- Loans available to private collectors, family offices and galleries [b] _(source : /art-finance-advisory/)_
- Boat finance typically for yachts over 20m in length [b, /marine-finance/] _(source : /pre-construction-marine-finance/)_
- Yachts financed typically registered on the British, Cayman, BVI and Maltese registers [b, /marine-finance/] _(source : /pre-construction-marine-finance/)_
- Founders and insiders can use the product subject to insider-trading rules, pre-clearance and covenants [b] _(source : /single-stock-lending-advisory/)_

**eligibility (FAQ)**

- Private bank mortgages suit any HNWI, international or local [a] _(source : /private-bank-mortgages/)_

**eligibility [a][b]**

- For a pure land bridge, experience is less critical than for development finance _(source : /post-planning-land-acquisitions/)_
- Lenders will still want to know your exit strategy _(source : /post-planning-land-acquisitions/)_

**evidence/testimonial-like**

- Case studies describe deals sourced through overseas introducers in Monaco and Geneva [b] _(source : /introducers/)_

**example**

- Representative example: GBP 25m loan, up to 90% LTV, 30% balloon, 3.00% plus margin _(source : /aviation-finance/)_

**experience**

- Has advised on a number of cases involving trust- and estate-held assets, both onshore and offshore [b, /complex-offshore-structures/] _(source : /western-europe/)_
- Regularly acts for clients from Africa, Asia and the Middle East purchasing in Europe and the UK; frequently arranges facilities for offshore trusts and overseas owners [seed] _(source : /western-europe/)_

**experience / credential (case study page, reported by search summary) [b]**

- plenty of experience raising private bank mortgages on Prime London residential properties _(source : /prime-london-mortgages/)_

**experience / track record [a]**

- Silver Oak has worked on a number of aircraft bridging loans over the years _(source : /aviation-bridging-loans/)_

**external corroboration**

- Trade press (Bridging & Commercial) reported the deal in October 2024 as completed by Octane Capital, originated by BDM Lee Warne, introduced by broker Jimmy Baillie from Silver Oak Capital _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**external listing (location 'Hackney' contradicts seed office 91 Wimpole Street W1G)**

- Third-party directory mortgage118.com lists 'Silver Oak Capital, Hackney' with specialisms: bridging loans, buy-to-let, care homes, commercial mortgages, development finance, HMOs, holiday lets, mixed-use properties [a] _(source : /mixed-use-property-finance/)_

**external-headline**

- Related external headline seen in results (different deal): 'Silver Oak Capital completes its largest ever bridging loan of £19.1m' (bridgingandcommercial.co.uk) _(source : /case-studies/bridging-loan-land-with-planning/)_

**external-press**

- External (not this page): bridgingandcommercial.co.uk headline 'Silver Oak Capital completes its largest ever bridging loan of £19.1m' [a] _(source : /crypto-bridging-advisory/)_
- External (not this page): bridgingandcommercial.co.uk headline 'Silver Oak Capital to grow team following increased volume in £2m-20m space' [a] _(source : /crypto-bridging-advisory/)_

**external-press-headline [a]**

- Trade press: 'Silver Oak Capital completes its largest ever bridging loan of £19.1m' _(source : /case-studies/nw-london-bridge/)_

**feature (seed, [b])**

- Tool estimates borrowing capacity, loan terms and repayments for commercial and development finance across the UK _(source : /lender-calculator/)_
- Shows how many lenders are willing to lend / might back a particular project _(source : /lender-calculator/)_

**feature/timescale (developerscorecard subdomain, [b])**

- Development Finance Scorecard scores a project across five metrics in under ten minutes, with a follow-up report and an optional consultation _(source : /lender-calculator/)_

**fee**

- Typical broker fee for aviation finance is 1.50% of the loan amount _(source : /aviation-finance/)_
- Broker fee 1.00% UK / 1.50% outside UK for commercial mortgage (older page, ~4 years old) _(source : /commercial-mortgage-broker/)_
- Typical broker fee 1.00% of the loan amount (attribution ambiguous between this page and /types-of-borrowing/) _(source : /marine-finance/)_
- Typical marine finance broker fee 1.00% of loan amount (unspecified marine finance page, not target page) [b] _(source : /marine-lease-finance/)_
- Typical broker fee for marine finance of 1.00% of the loan amount [a][b, older pages] _(source : /pre-construction-marine-finance/)_
- Typical broker fee of 1.00% [b] _(source : /prime-residential-mortgages/)_
- [a][seed] Typical broker fee 1% of the loan for development finance _(source : /types-of-borrowing/)_
- [a] Bridging broker fee typically 1%, or 1.5% for loans outside the UK _(source : /types-of-borrowing/)_
- [seed] 1.00% prime residential _(source : /types-of-borrowing/)_
- Typical broker fee of 1.00% of the loan amount (marine finance page). [b] _(source : /yacht-mortgages/)_

**firm claim (external)**

- Bridging & Commercial headline: Silver Oak Capital completes its largest ever bridging loan of £19.1m (firm-level, different deal) _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**firm claim via external listings [a]**

- Broker that acquires loans from 300+ Lenders _(source : /bitcoin-loans-advisory/)_

**firm credential via /about-us/ [b][seed]**

- Founded in 2019 by Jimmy Baillie; advice on loans between £500k and £20m _(source : /bitcoin-loans-advisory/)_

**firm description via external listings [a]**

- Debt advisory firm located in London, UK _(source : /bitcoin-loans-advisory/)_

**firm-fact [a]**

- Firm founded in 2019 and based in London (LinkedIn) _(source : /development-exit-loans/)_

**firm-level [seed], not seen on this page**

- Network of 800+ lenders (home/FAQ); prime residential loans £1m+ / £5m and above _(source : /prime-london-mortgages/)_

**founding date**

- Founded in 2019 by Jimmy Baillie (seed notes one page says 2018) _(source : /about-us/)_

**freshness metadata from search tool [b]**

- Pages date from roughly 4 to 7 months ago (approx. March to June 2026) _(source : /below-market-purchases/)_

**freshness note [a][b]**

- Page content indexed about 213 days before the search _(source : /bitcoin-loans-advisory/)_

**gap**

- FCA authorisation status not shown in any result (search tool flagged as unverified) _(source : /commercial-mortgage-broker/)_
- No testimonials revealed for this page _(source : /commercial-mortgage-broker/)_

**geography**

- Offices listed: London, Monaco, Dubai, Cape Town [a] _(source : /contact/)_
- Arranges real estate debt in the UK, Western Europe, Southern Africa and the Middle East [c, Spear's] _(source : /development-finance-brokers/)_
- Arranges real estate debt for deals in the UK, Western Europe, Southern Africa and the Middle East (Spear's) [c] _(source : /international-property-mortgages/)_
- Arranges debt across the UK, US, Western Europe and the Middle East [b homepage] _(source : /mezzanine-junior-finance/)_
- Arranges real estate debt for transactions in the UK, Western Europe, Southern Africa and the Middle East [c, Spear's] _(source : /western-europe/)_
- Current homepage: arranges debt across the UK, US, Western Europe and the Middle East [a] _(source : /western-europe/)_
- Key locations: London, Monaco, Dubai and Cape Town [a] _(source : /western-europe/)_
- Experience arranging debt in offshore jurisdictions such as France, Spain, Dubai & South Africa [b, /about-us/] _(source : /western-europe/)_
- Active across the entire Western European market, mainly in Mediterranean hubs such as Monaco and the Cote d'Azur [b, /yacht-mortgages/] _(source : /western-europe/)_
- arranges debt across the UK, US, Western Europe and the Middle East (homepage) [b] _(source : /whole-loans/)_
- Work placed across Western European hubs: Monaco, Cote d'Azur, Italy, the Netherlands. [b] _(source : /yacht-mortgages/)_

**guarantee [a][b]**

- 15% personal guarantee _(source : /case-studies/nw-london-bridge/)_

**indicative terms (attributed to another site page, likely /prime-residential-mortgages/) [a]**

- Representative example: GBP 7m, 1.25% + Libor, 65% LTV, 5 years renewable, interest only, 20% AUM pledge, lender fees 0.50% _(source : /prime-london-mortgages/)_

**legal caveat (from /faq/) [b]**

- Buying at any agreed price is legal; misleading a lender about the price is mortgage fraud _(source : /below-market-purchases/)_

**legal entity**

- Silver Oak Capital Limited, company number 08551479, England and Wales _(source : /about-us/)_

**lender [a] (Bridging & Commercial, not the case-study page)**

- Trade press: lender was Topland Group _(source : /case-studies/nw-london-bridge/)_

**lender access [a][b]**

- Access to specialist high-value lenders and private banks _(source : /prime-london-mortgages/)_

**lender count**

- Relationships with 500+ private banks, investment banks, specialist lenders and private debt funds (LinkedIn) _(source : /about-us/)_

**lender count (contradiction)**

- Over 800 lenders (home page, Spear's); 700+ (commercial-mortgage-broker page) _(source : /about-us/)_

**lender-access [a]**

- Access to niche pre-planning bridge lenders who will consider unconsented land if the location is strong and the planning logic is sound _(source : /post-planning-land-acquisitions/)_

**lender-count**

- Network of over 800 lenders [b, site-level; c Spear's and LinkedIn] _(source : /development-finance-brokers/)_
- 300+ lenders cited on /property-development-finance/ [a][b][seed] _(source : /development-finance-brokers/)_
- 700+ lenders cited on /commercial-mortgage-broker/ [a][seed] _(source : /development-finance-brokers/)_
- 500+ lenders cited on LinkedIn [a][seed] _(source : /development-finance-brokers/)_
- 800+ Lenders (about-us page per [a]; homepage 'over 800 lenders' per [b]) _(source : /whole-loans/)_
- more than 300 lenders (property-development-finance page) [b]; contradicts 800+ _(source : /whole-loans/)_

**lender-network**

- Lenders include commercial banks, specialist aviation lenders, institutional lenders, and private credit funds [a][b] _(source : /senior-secured-aircraft-finance-advisory/)_

**lender-panel**

- works with a select group of private debt funds and specialist lenders who offer whole loans [a][b] _(source : /whole-loans/)_

**lender-relationship**

- Silver Oak works with major French and Italian leasing banks [a][b] _(source : /marine-lease-finance/)_

**lending mechanic**

- Lenders base the loan on the post-conversion value _(source : /conversions/)_

**loan size**

- Advice for loans between GBP 500k and GBP 20m _(source : /about-us/)_

**loan size (contradiction)**

- Secured loans GBP 2m-20m for UHNW clients (Spear's) _(source : /about-us/)_

**loan-amount [a] (Bridging & Commercial)**

- Trade press: total £19.1m including a £1.2m capex facility for final finishing work _(source : /case-studies/nw-london-bridge/)_

**loan-amount [a][b]**

- Gross loan of £19 million _(source : /case-studies/nw-london-bridge/)_

**loan-size**

- Focus on larger deals, loan sizes £2-£20 million [b, firm-level]; seed also records 'over £500,000' (home, /lenders/) and '£500k to £20m' (/about-us/) _(source : /development-finance-brokers/)_
- focuses on loans of £500K to £20m (about-us page) [a] _(source : /whole-loans/)_
- focuses on loans of £2 million to £20 million (commercial-mortgage-broker page) [b]; third-party directory: large loans of £2-£20m [a]; contradicts £500K floor _(source : /whole-loans/)_

**locations**

- Offices: London (91 Wimpole Street W1G 0EE), Monaco, Dubai, Cape Town; registered office 11 Honiton Road NW6 6QE _(source : /about-us/)_

**ltv**

- Lenders often limit LTVs to 60% or lower on strong portfolios because of volatility [a][b] _(source : /crypto-bridging-advisory/)_
- First-time developers: maximum of 60% to 65% LTGDV typical [b, /first-time-developer-finance/, NOT target page] _(source : /development-finance-brokers/)_
- Senior development loans typically up to 65-75% of GDV [seed, Scotland blog, NOT target page] _(source : /development-finance-brokers/)_
- Indicative example of up to 70% LTV on an older marine finance page (~700 days old), may be outdated [a] _(source : /pre-construction-marine-finance/)_

**ltv - from /senior-development-finance/, not this page [b]**

- Senior lenders usually limit land-acquisition funding to roughly 50-60% of market value for sites with planning that still need buying _(source : /post-planning-land-acquisitions/)_

**ltv [a] (Bridging & Commercial; conflicts with 73% on case study)**

- Trade press: 70% LTV over 12 months _(source : /case-studies/nw-london-bridge/)_

**ltv [a][b]**

- Maximum 73% LTV (case study page) _(source : /case-studies/nw-london-bridge/)_

**market**

- The premium on portfolio products has narrowed [seed] _(source : /faq/)_
- Whole-loan providers are often sector-agnostic (PBSA, hotels, BTR, industrial) [seed] _(source : /faq/)_

**market assertion [a]**

- High-street banks will almost universally reject an application from a developer with no track record of a similar build. _(source : /first-time-developer-finance/)_

**market assertion [b] (developerscorecard.silveroakcapital.co.uk)**

- There are now several specialist lenders who can provide funding for first time developers. _(source : /first-time-developer-finance/)_

**market claim**

- Purchasers of distressed assets 'are often offered a substantial discount' [a] _(source : /distressed-asset-finance/)_

**market claim [a]**

- Specialist lenders fill the gap left by high-street banks _(source : /senior-development-finance/)_

**market statement**

- Standard buy-to-let lenders will not touch HMO properties [a][b] _(source : /hmo-finance/)_
- Lenders view Article 4 HMOs as more secure because supply is capped [b] _(source : /hmo-finance/)_
- Superyachts are almost exclusively owned through SPVs, typically limited companies in tax-neutral jurisdictions like the Isle of Man, Malta, or the Cayman Islands [a] _(source : /superyacht-finance/)_

**market-claim [b]**

- Default interest on an expiring construction loan can roughly double the rate _(source : /development-exit-loans/)_

**market-fact-stated-on-page**

- 10% deposit on auction day, remaining 90% within 28 days [b] _(source : /auction-finance/)_

**market-statement**

- Land without planning has fewer lenders because most do not take 'planning risk' _(source : /case-studies/bridging-loan-land-with-planning/)_
- Traditional high street lenders generally prefer not to lend on these transactions [a] _(source : /complex-offshore-structures/)_
- Many lenders have pulled out of the hotel lending market since the pandemic; the firm has a number of relationships with the remaining niche lenders (/case-studies/bridging-villa-cap-ferrat/) [a][b] _(source : /hotel-finance/)_
- Leasing is a common way to finance yachts in continental Europe, mainly France, Italy and Malta [a][b] _(source : /marine-lease-finance/)_
- Older aircraft, roughly 20 to 25 years old, are harder and more expensive to finance [a] _(source : /senior-secured-aircraft-finance-advisory/)_

**marketing promise**

- 'Fast, flexible finance solutions for turnaround and recovery situations' [a] _(source : /distressed-asset-finance/)_

**mechanism [a][b]**

- Two-part structure: day-one release plus staged drawdowns certified by a monitoring surveyor _(source : /senior-development-finance/)_

**metadata**

- Page last indexed/dated about 213 days before 2026-10-29 (approx. late March 2026) [b] _(source : /international-property-mortgages/)_
- Target page indexed about 213 days before 2026-10-29; search tool warns site date/age metadata is inconsistent [a][b] _(source : /senior-secured-aircraft-finance-advisory/)_
- Page is about 1,600 days old per search metadata [a] _(source : /superyacht-finance/)_

**metadata ([b])**

- SERP title: Mortgage & Development Finance Calculator UK _(source : /lender-calculator/)_

**metadata [b]**

- Page is about 213 days old (search tool metadata; [a] flags the page age metadata as unreliable) _(source : /case-studies/nw-london-bridge/)_

**misc**

- Linktree profile member since July 2024 [c] _(source : /property-portfolio-mortgages/)_

**navigation**

- Art Finance Advisory is grouped under 'Luxury Asset Finance' with jewellery finance and classic car loans [a][b] _(source : /art-finance-advisory/)_

**network (marine lease page)**

- Leasing common in France, Italy and Malta; firm works with French and Italian leasing banks. [b] _(source : /yacht-mortgages/)_

**none surfaced**

- Testimonials on this page _(source : /commercial-mortgages/)_

**number**

- LTVs typically between 30% and 60%, varying by collection quality, value and liquidity [b] _(source : /art-finance-advisory/)_
- Network of over 800 lenders, both in the UK and internationally [a, /faq/] _(source : /auction-finance/)_
- 700+ Lenders (this page, per seed; other pages say 300+, 500+, 800+) _(source : /bridging-loans-uk/)_
- Transactions generally upwards of £500,000 (/lenders/) _(source : /bridging-loans-uk/)_
- Focus on larger loan sizes of £2-£20 million (/commercial-mortgage-broker/) _(source : /bridging-loans-uk/)_
- Lenders offer loans from as little as £10,000, especially flexible over £2,000,000 (HNW guide) _(source : /bridging-loans-uk/)_
- £1.2 million bridging loan arranged _(source : /case-studies/bridging-loan-land-with-planning/)_
- Site valued at £2 million without planning _(source : /case-studies/bridging-loan-land-with-planning/)_
- 60% Loan to Value _(source : /case-studies/bridging-loan-land-with-planning/)_
- 0.9% per month interest rate _(source : /case-studies/bridging-loan-land-with-planning/)_
- 18-month term _(source : /case-studies/bridging-loan-land-with-planning/)_
- Planning application for 220 residential units with ground-floor commercial space _(source : /case-studies/bridging-loan-land-with-planning/)_
- 700+ Lenders (main selling point on this page) _(source : /commercial-mortgage-broker/)_
- larger loan sizes of £2-£20 million _(source : /commercial-mortgage-broker/)_
- loans over £500,000, no upper limit (/lenders/, home) _(source : /commercial-mortgage-broker/)_
- specialism in loans exceeding the £2 million mark _(source : /commercial-mortgage-broker/)_
- Network of 'hundreds of offshore lenders who specialise in this type of lending' [a, this page] _(source : /complex-offshore-structures/)_
- Network of over 800 lenders, UK and international [b FAQ; c Spear's; a Property Week 2026 listing] _(source : /complex-offshore-structures/)_
- 500+ private banks, investment banks, specialist lenders & private debt funds in over 100 countries [a, LinkedIn] _(source : /complex-offshore-structures/)_
- Hours Monday-Friday 9:00-17:00 per structured data [a] _(source : /contact/)_
- Advises UHNW clients on secured loans £2m-£20m (Spear's 500, third party) [c] _(source : /contact/)_
- Focuses on loans over £500,000 (homepage) _(source : /conversions/)_
- Arranges debt through a network of over 800 lenders (homepage) _(source : /conversions/)_
- Network of over 800 lenders [seed /faq/]; contradiction: 300+ on /property-development-finance/, 500+ on LinkedIn, 700+ on /commercial-mortgage-broker/ and /bridging-loans-uk/ (seed) _(source : /faq/)_
- Maximum LTV typically 75%, up to 80% in exceptional circumstances with significantly higher rates [b][seed] _(source : /hmo-finance/)_
- Network of over 800 lenders (homepage) [b]; 'lender panel is reported at over 800 lenders' [c] _(source : /)_
- Loans between £500k and £20m [a][b]; £2m-£20m for UHNW clients per Spear's [c] _(source : /)_
- Typical hotel LTVs between 60% and 70% (/hotel-finance/) [b] _(source : /hotel-finance/)_
- LTV around 50-60% for closed hotels / changed business model financed on projections (/faq/) [a][b] _(source : /hotel-finance/)_
- At least 50-60 years remaining lease after mortgage term for leasehold hotels (/faq/) [a][b] _(source : /hotel-finance/)_
- Last 2-3 years of accounts reviewed for trading hotels (/faq/) [a][b] _(source : /hotel-finance/)_
- Network of over 800 lenders (homepage) [b][seed] _(source : /hotel-finance/)_
- Loans between £500K to £20m since 2019 (/about-us/) [a][seed] _(source : /hotel-finance/)_
- Network of over 800 lenders across several regions [a]; 'more than 800 lenders worldwide' (Spear's profile, LinkedIn) [c] _(source : /international-property-mortgages/)_
- Largest bridging loan £19.1 million 'for a range of international real estate developments in 2020' (Spear's profile of Jimmy Baillie) [c] _(source : /international-property-mortgages/)_
- Western Europe page: deal sizes from €500,000 upward [b] _(source : /international-property-mortgages/)_
- Lenders generally offer an LTV of between 70–90% on bonds _(source : /lombard-loan-advisory/)_
- Equity-backed loan LTVs roughly between 50–70% _(source : /lombard-loan-advisory/)_
- Cash-backed loan LTVs typically between 90–100% _(source : /lombard-loan-advisory/)_
- LinkedIn [c]: recently arranged a £1,139,000 revolving credit facility for a private client (not Lombard-specific) _(source : /lombard-loan-advisory/)_
- 300+ Lenders (stated advantage on this page) _(source : /marine-finance/)_
- Up to 70% LTV based on an independent valuation (sample terms) _(source : /marine-finance/)_
- 48-month term, interest-only payments (sample terms) _(source : /marine-finance/)_
- Option to Purchase at end of term for a nominal fee, often 1% of the value [a][b] _(source : /marine-lease-finance/)_
- Indicative example up to 70% LTV on an independent valuation (unspecified marine finance page, not target page) [b] _(source : /marine-lease-finance/)_
- Standard yacht mortgages typically 5 to 7 years with balloon of around 25% of original loan (yacht-finance-calculator case study) [a] _(source : /marine-lease-finance/)_
- Standard loans for vessels over about 20m (yacht-mortgages page) [b] _(source : /marine-lease-finance/)_
- Network of over 800 lenders [b homepage][c LinkedIn]; seed shows 300+ (/property-development-finance/), 500+ (LinkedIn), 700+ (/bridging-loans-uk/) on other pages _(source : /mezzanine-junior-finance/)_
- Example capital stack ~65% senior / 10-20% mezzanine / small developer equity [b] _(source : /mezzanine-junior-finance/)_
- Stretch senior blended cost typically 8%-10% p.a. plus execution fees [b, related page] _(source : /mezzanine-junior-finance/)_
- Generally focuses on transactions above GBP 500,000 (/lenders/) [b] _(source : /prime-residential-mortgages/)_
- 800+ lenders (About Us page, per [a]) _(source : /probate-lending/)_
- 500+ lenders (LinkedIn profile, per [a]) _(source : /probate-lending/)_
- 300+ lenders (older directory listing, per [a]) _(source : /probate-lending/)_
- Focuses on advice for loans between £500K – £20m, secured on assets throughout the UK and abroad (About Us, per [b]) _(source : /probate-lending/)_
- 300+ Lenders (this page) [a][seed] _(source : /property-development-finance/)_
- generally focus on transactions upwards of £500,000 (/lenders/) [a]; specialising in loans over £500,000 (home) [b] _(source : /property-development-finance/)_
- Network of over 800 lenders [a][b][seed] - contradicted by 500+ (LinkedIn, older profile), 700+ (/commercial-mortgage-broker/, /bridging-loans-uk/), 300+ (/property-development-finance/, Spear's) _(source : /property-portfolio-mortgages/)_
- Generally focuses on deals above GBP 500,000 / 'specialising in loans over £500,000' [a][b] _(source : /property-portfolio-mortgages/)_
- The true benefits of portfolio finance are usually realised by those with four or more properties [a][b] _(source : /property-portfolio-mortgages/)_
- … et 9 autres (voir les fiches).

**number (/faq/) [a][b][seed]**

- Most BTL products max out at 75% LTV / 25% deposit _(source : /buy-to-let-mortgages/)_

**number (Scotland blog, not this page) [b][seed]**

- Standard senior loans roughly 65-75% of GDV _(source : /senior-development-finance/)_

**number (Spear's; contradicts 500+/700+/800+ figures noted in seed)**

- Network of more than 300 lenders in 100 different countries [c] _(source : /private-bank-mortgages/)_

**number (dated third-party listing)**

- Specializes in large loans of £2-£20m [a] _(source : /private-bank-mortgages/)_

**number (firm-wide; attribution to this page uncertain) [a][b]**

- Works with more than 800 lenders in the UK and abroad _(source : /senior-development-finance/)_

**number (home page, /faq/, Property Week 2026 listing) [a][b][seed]**

- Network of over 800 lenders _(source : /buy-to-let-mortgages/, /lenders/)_

**number (homepage, not this page) [a]**

- Firm specialises in loans over GBP 500,000 _(source : /senior-development-finance/)_

**number (old /types-of-borrowing/ page, ~1,600 days old) [a]**

- Indicative example GBP 10m at 6.5% fixed over 18 months, broker fee 1.00% _(source : /senior-development-finance/)_

**number (other page)**

- Typical broker fee for residential mortgages 1.00% (from /prime-residential-mortgages/, context only) [a] _(source : /foreign-national-mortgages/)_
- Sibling Lombard page: equity-backed LTVs roughly 50-70% [b] _(source : /single-stock-lending-advisory/)_

**number (seed /lenders/)**

- Generally focuses on transactions upwards of £500,000 _(source : /buy-to-let-mortgages/, /lenders/)_

**number (sibling page /first-time-developer-finance/, [b])**

- First-time developers: maximum 60% to 65% LTGDV _(source : /lender-calculator/)_

**number (sibling page /stretch-senior-development-finance/, [b])**

- Stretch senior: typical loan-to-cost cap around 90%; residential 75% LTGDV and 90% LTC _(source : /lender-calculator/)_

**number (stretch senior page, not this page) [b]**

- Stretch senior up to 75% GDV or 90% LTC with tighter covenants _(source : /senior-development-finance/)_

**number - lender count (external, contradicts 300+)**

- Network of over 800 lenders covering bridging and development finance, commercial and buy-to-let mortgages (LinkedIn post by Joe Berk) [c] _(source : /mixed-use-property-finance/)_

**number - lender count (other page)**

- Access to 300+ lenders (/property-development-finance/) [a][b][seed] _(source : /mixed-use-property-finance/)_

**number / LTGDV**

- Borrowing of up to 65-70% of gross development value on conversion projects _(source : /conversions/)_

**number / LTV [b, FAQ]**

- Newer, more popular aircraft models are likely to secure higher LTV loans (+75%) _(source : /aviation-bridging-loans/)_

**number / case study**

- Case study: USD 14m loan at 60% LTV for a 50m Heesen yacht over 10 years. [b] _(source : /yacht-mortgages/)_

**number / contradiction**

- Works with over 800 lenders (homepage) vs 500+ private banks, investment banks, specialist lenders and private debt funds (LinkedIn) [a] - contradiction, also vs seed 300+/700+ on other pages _(source : /hmo-finance/)_
- Loans over £500,000 (homepage) vs large loans of £2m – £20m (thelandsite) [a] - contradiction; minimum loan size unconfirmed _(source : /hmo-finance/)_

**number / contradiction across sources [a][c][seed]**

- Lender network of 800+ (Commercial Property Awards 2026 listing; Spear's adviser profile 'over 800 lenders'); other listings state 300+ or 500+ _(source : /aviation-bridging-loans/)_

**number / credential (other page)**

- About Us (via [b]): founded 2019; loans £500k to £20m; 800+ lenders - consistent with seed /about-us/ and seed home//faq/ lender count _(source : /single-stock-lending-advisory/)_

**number / lender count**

- 'database of hundreds of specialist lenders' [b, /faq/] _(source : /distressed-asset-finance/)_
- 'network of over 800 lenders, both in the UK and internationally' [b, page unspecified] _(source : /distressed-asset-finance/)_
- Direct access to over 50 lenders for yacht or business jet transactions [a] _(source : /superyacht-finance/)_

**number / lender count (inconsistent with 50+)**

- 300+ Lenders (marine finance page) [a] _(source : /superyacht-finance/)_

**number / leverage**

- Buyers commonly borrow 50-60% of the asset's value [a][b] _(source : /superyacht-finance/)_

**number / scope**

- Marine finance typically for yachts over 20m. [a][b] _(source : /yacht-mortgages/)_

**number / structure (calculator page)**

- Standard yacht mortgages roughly 5 to 7 year loans with a balloon payment near 25% of the principal; leasing is the other option. [a] _(source : /yacht-mortgages/)_

**number / term [a][b]**

- Bridging term 0-24 months versus up to 25 years for long-term aircraft finance _(source : /aviation-bridging-loans/)_

**number / worked example (calculator page)**

- Example: GBP 6m facility at 70% LTV, 3.5% fixed, 60 months, 20% balloon, six months of interest held on deposit. [a][b] _(source : /yacht-mortgages/)_

**number / worked-example [a][b]**

- Worked example: £200,000 value, £150,000 price, 75% LTV: £112,500 (on price) vs £150,000 (on value); £37,500 deposit gap eliminated _(source : /below-market-purchases/)_

**number [a /commercial-mortgage-broker/]**

- 700+ Lenders _(source : /lenders/)_

**number [a /property-development-finance/]**

- 300+ Lenders _(source : /lenders/)_

**number [a Letting Agent Today directory, older]**

- network of over 300 lenders _(source : /lenders/)_

**number [a LinkedIn]**

- 500+ different private banks, investment banks, specialist lenders & private debt funds _(source : /lenders/)_

**number [a] third-party directory; contradicts homepage 'over £500,000'**

- Specializing in large loans of £2-£20m _(source : /commercial-mortgages/)_

**number [a][b]**

- LTV typically conservative at 30-50% due to Bitcoin's volatility _(source : /bitcoin-loans-advisory/)_

**number — contradiction with £500,000 minimum; minimum may have changed**

- loans over £2m (older-looking cached page) [a] _(source : /property-development-finance/)_

**number — contradicts the 300+ figure on this page**

- over 800 lenders (homepage [a][b]; LinkedIn post [c]) _(source : /property-development-finance/)_

**number — sibling pages, slightly differing ranges**

- conversions lending ceiling typically 65–70% of GDV (/conversions/) [b]; senior loans typically up to 65–75% of GDV (Scotland guide) [b] _(source : /property-development-finance/)_

**number — third differing lender count**

- 500+ different private banks, investment banks, specialist lenders & private debt funds (LinkedIn profile) [a] _(source : /property-development-finance/)_

**number-contradiction**

- Over 300 lenders per Letting Agent Today trades directory listing (older, inconsistent with 800+) [a] _(source : /auction-finance/)_
- 700+ lenders (/commercial-mortgage-broker/) [a]; 500+ lenders (Instagram) [a]; 300+ lenders (another listing) [a] - contradicts 800+ _(source : /)_
- Network of over 800 lenders (homepage, /lenders/, Spear's, LinkedIn) vs 300+ lenders in 100 countries (older Spear's profile) [b][c] _(source : /prime-residential-mortgages/)_

**number/contradiction**

- over 800 lenders (home/FAQ) - contradicts 700+ on this page _(source : /commercial-mortgage-broker/)_
- over 300 lenders (directory listing) - contradicts 700+ on this page _(source : /commercial-mortgage-broker/)_

**number/contradiction (other pages)**

- Lender network: 'over 300 lenders' (listing) vs 'over 800 lenders' (homepage) — contradiction noted by the search tool [a] _(source : /foreign-national-mortgages/)_

**number/contradiction [a][b]**

- Sister page states LTV cap of 60% or lower for strong portfolios (contradiction) _(source : /bitcoin-loans-advisory/)_

**number/contradiction [a][seed]**

- Lender network: 300 (older listings) / 700+ (/commercial-mortgage-broker/) / 800+ (homepage, 2026 award listing) _(source : /commercial-mortgages/)_

**number/deal size**

- £3.6 million bridging facility arranged by Silver Oak Capital _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**number/funding**

- Can fund up to 100% of build costs, released in stages [a][b] _(source : /light-to-heavy-refurbishment/)_
- Loan covers the purchase price of a property and typically 100% of the build costs [a] _(source : /light-to-heavy-refurbishment/)_

**number/market statement**

- Most lenders will advance 100% of the build costs, released in arrears [a] _(source : /light-to-heavy-refurbishment/)_

**number/other-page**

- Typical broker fee for aviation finance 1.50% of the loan amount [b, /aviation-finance/, not this page] _(source : /introducers/)_

**number/term [b] this page**

- LTVs for commercial mortgages are usually between 65% and 75% depending on the property and circumstances _(source : /commercial-mortgages/)_

**page-age**

- [a][b] Search tool states the cached copy of this page is about 1,600 days old (circa 2022); figures may be out of date _(source : /types-of-borrowing/)_

**positioning**

- Sources rates from specialist UK bridging lenders _(source : /bridging-loans-uk/)_
- London property market is a particular strength _(source : /bridging-loans-uk/)_
- independent commercial mortgage broker _(source : /commercial-mortgage-broker/)_
- 'The firm is a London debt advisory business' [a] _(source : /contact/)_
- London-based real estate debt firm _(source : /conversions/)_
- 'As a leading development finance broker' - self-described leadership positioning [c] _(source : /development-finance-brokers/)_
- Specialist in development finance and commercial mortgage services, based in London; also covers bridging loans [a] _(source : /development-finance-brokers/)_
- 'independent, whole-of-market advice' [c, LinkedIn] _(source : /distressed-asset-finance/)_
- Secondhand [a], not from FAQ page: 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions' _(source : /faq/)_
- Silver Oak Capital is 'a leading advisor in HMO Finance' [a] _(source : /hmo-finance/)_
- Helps landlords work through the tiers of HMO lenders [b] _(source : /hmo-finance/)_
- 'We specialise in structuring bespoke debt solutions across the UK and Western Europe' [a] _(source : /introducers/)_
- Specialises in securing bespoke refurbishment finance solutions across the entire spectrum – light, medium, and heavy [a][b] _(source : /light-to-heavy-refurbishment/)_
- Firm specialises in real estate debt solutions; not a high street mortgage broker; bespoke solution for larger, more complex real estate transactions [a] _(source : /marine-lease-finance/)_
- Silver Oak Capital is a specialist in mixed-use / semi-commercial finance [a] _(source : /mixed-use-property-finance/)_
- The firm specialises in pre-construction marine finance [b] _(source : /pre-construction-marine-finance/)_
- Independent, whole-of-market advice (LinkedIn) [c] _(source : /prime-residential-mortgages/)_
- Probate lending is listed as one of the firm's 'special situations' services (About Us, per [b]); the seed navigation files it under 'Residential / Wealth' _(source : /probate-lending/)_
- Senior secured aircraft finance is presented as the lowest-risk form of aircraft finance, sitting at the top of the capital stack [a][b] _(source : /senior-secured-aircraft-finance-advisory/)_
- International Debt Advisory l Expert Finance Solutions [seed] _(source : /superyacht-finance/)_

**positioning (Commercial Property Awards 2026 listing) [a]**

- Independent, whole-of-market advice across bridging and development finance, commercial and buy-to-let mortgages, and marine and aviation finance _(source : /aviation-bridging-loans/)_

**positioning (LinkedIn)**

- Not a high street mortgage broker; bespoke solution for larger, more complex real estate transactions [a] _(source : /private-bank-mortgages/)_

**positioning (Property Week Commercial Property Awards 2026 listing) [a]**

- Independent, whole-of-market advice across buy-to-let and other lending _(source : /buy-to-let-mortgages/)_

**positioning (home page, [a])**

- Firm provides direct access to mortgage-only luxury asset lenders _(source : /lender-calculator/)_

**positioning (other page)**

- Firm 'does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions' (firm profile, context only) [a] _(source : /foreign-national-mortgages/)_

**positioning (page verbatim)**

- Silver Oak Capital specialises in securing our clients' bespoke, tailored yacht finance for high-net-worth individuals (HNWIs) and corporate entities. [b] _(source : /yacht-mortgages/)_

**positioning (seed)**

- 'one of Europe's leading large loan brokers' _(source : /about-us/)_

**positioning / promise [a]**

- The firm focuses on leverage, cash flow and control rather than the interest rate alone _(source : /senior-development-finance/)_

**positioning [a]**

- Independent commercial mortgage broker for UK commercial real estate _(source : /commercial-mortgages/)_
- Provides specialised bridging solutions tailored to post planning land acquisitions _(source : /post-planning-land-acquisitions/)_

**positioning [a][b]**

- Prime London mortgages are residential loans for high-value property in London's prime and super-prime markets _(source : /prime-london-mortgages/)_

**positioning [b]**

- deep relationships with banks, specialist lenders, debt funds and private banks _(source : /lenders/)_

**positioning [b] this page**

- Investors often seek commercial finance that maximises leverage to amplify their Return on Equity (ROE) _(source : /commercial-mortgages/)_

**press**

- Largest ever bridging loan of £19.1m (trade press, 2020) _(source : /bridging-loans-uk/)_

**pricing**

- Priced at 0.78% per month, BBR-linked _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**pricing [b]**

- £3.6m Kensington facility priced at 0.78% per month, BBR-linked _(source : /case-studies/)_

**pricing statement (other page)**

- Mixed-use loans typically slightly higher rates than standard BTL but lower than pure commercial (/faq/) [b] _(source : /mixed-use-property-finance/)_

**pricing statement [a][b]**

- Aircraft bridging loans cost more than long-term aircraft mortgages, partly because of higher lender risk _(source : /aviation-bridging-loans/)_

**pricing statement [b]**

- Higher interest rates than traditional asset-backed loans _(source : /bitcoin-loans-advisory/)_

**pricing-claim [a]**

- Development exit loan is cheaper than construction finance because construction risk has already fallen away _(source : /development-exit-loans/)_

**pricing-factor**

- Cost depends on aircraft age and type, borrower financial standing, and how the aircraft is used [a] _(source : /senior-secured-aircraft-finance-advisory/)_

**process**

- narrows lenders to as many as 3 or 4 potential partners _(source : /commercial-mortgage-broker/)_
- Written complaints go to the Managing Director (Ts&Cs PDF) [b] _(source : /contact/)_
- Process: initial consultation, shortlist of lenders, market review, formal heads of terms [a] _(source : /development-finance-brokers/)_
- Typically narrows lenders to as many as 3 or 4 potential partners per deal [seed, sibling pages] _(source : /development-finance-brokers/)_
- aims to narrow options to three or four suitable partners for each project (property-development-finance page) [b] _(source : /whole-loans/)_

**process (development finance page) [a][b][seed]**

- Lender shortlist of around three or four per deal _(source : /senior-development-finance/)_

**process [a][b]**

- Silver Oak had to present a clear exit and marketing plan, backed by a strong valuation report _(source : /case-studies/nw-london-bridge/)_

**process/promise**

- typically narrows lenders to as many as 3 or 4 potential partners per deal (this page per seed) _(source : /property-development-finance/)_

**product**

- Lists fixed and variable products [b] _(source : /prime-residential-mortgages/)_

**product feature**

- Interest is typically rolled up or retained; no monthly payments during works [a][b] _(source : /light-to-heavy-refurbishment/)_
- Standard marine mortgages may not allow chartering; the firm sources 'commercial registration' mortgages for that purpose. [a] _(source : /yacht-mortgages/)_

**product feature (pre-construction page)**

- Funds shipyard stage payments during a build because a standard mortgage cannot cover a vessel that does not yet legally exist; typically interest-only, refinanced into a mortgage or lease at launch. [a][b] _(source : /yacht-mortgages/)_

**product feature [a]**

- Funds may come in USD, EUR, GBP or occasionally stablecoins _(source : /bitcoin-loans-advisory/)_

**product mechanism [a]**

- First-time developer loans are underwritten based on the experience of the project manager, architect, and main contractor. _(source : /first-time-developer-finance/)_

**product positioning (senior secured page) [b]**

- Senior secured aircraft finance is the lowest-risk form of aircraft finance _(source : /aviation-bridging-loans/)_

**product positioning [a]**

- Aircraft bridging loans are a well-established form of aircraft finance _(source : /aviation-bridging-loans/)_

**product promise [a][b]**

- Borrower keeps ownership of the coins _(source : /bitcoin-loans-advisory/)_

**product-benefit**

- whole loan avoids an intercreditor deed and a separate credit committee for each tranche [a]; avoids the need for an intercreditor deed [b] _(source : /whole-loans/)_
- whole loan often reaches leverage that would otherwise need senior and mezzanine debt combined [b] _(source : /whole-loans/)_

**product-definition**

- A private bank mortgage is a bespoke form of real estate finance offered by private banks to their high net worth clients [b] _(source : /private-bank-mortgages/)_
- The borrower pledges the aircraft as first-ranking security [a] _(source : /senior-secured-aircraft-finance-advisory/)_

**product-definition [a]**

- Senior development finance is the main funding source for large construction projects, from a single bespoke build to a multi-unit housing scheme _(source : /senior-development-finance/)_

**product-feature**

- Borrower keeps ownership of the shares and generally keeps voting rights (and upside) if covenants are met [a][b] _(source : /single-stock-lending-advisory/)_

**product-feature [b]**

- Bridging lenders don't apply the six-month refinance restriction that mainstream mortgage lenders do _(source : /below-market-purchases/)_

**product-positioning [a][b]**

- A specialist BMV lender can lend against the higher open market valuation whereas a high-street bank lends against the lower purchase price _(source : /below-market-purchases/)_

**product-scope [a]**

- Offers bridging finance for land that already has planning consent, such as full permission, outline permission, or permitted development rights _(source : /post-planning-land-acquisitions/)_

**product-term**

- Auction finance gives 6 to 12 months to refinance or sell [a][b] _(source : /auction-finance/)_

**product-term (qualitative, no figure)**

- Single-stock LTVs are lower and margin requirements stricter than portfolio lending, due to concentration risk [a][b] _(source : /single-stock-lending-advisory/)_

**product-term [a][b]**

- Gives developers roughly 12 to 18 months to sell _(source : /development-exit-loans/)_

**promise**

- Art-backed lending lets owners raise funds using paintings or sculptures as security while keeping ownership [a][b] _(source : /art-finance-advisory/)_
- Rapid completions across the UK and London property market _(source : /bridging-loans-uk/)_
- No affordability check needed (interest rolled up) _(source : /bridging-loans-uk/)_
- Silver Oak can source bridging finance for land with or without planning _(source : /case-studies/bridging-loan-land-with-planning/)_
- 'extraordinary rates and terms' for financing commercial real estate in the UK (search-tool paraphrase) _(source : /commercial-mortgage-broker/)_
- Loan can cover most construction costs _(source : /conversions/)_
- Independent, whole-of-market advice; 'access to the largest network of lenders in the market' [a] _(source : /)_
- Some private banks can lend across borders, particularly for strong HNW profiles [b] _(source : /international-property-mortgages/)_
- Fee-share details agreed upfront / terms set in advance [a][b][seed] _(source : /introducers/)_
- Discretion, transparency and strict non-circumvention [a][b] _(source : /introducers/)_
- Regular progress updates through valuation, legals and completion [a] _(source : /introducers/)_
- Borrower retains ownership of assets and benefits from capital appreciation, dividends and income while borrowing _(source : /lombard-loan-advisory/)_
- Independent whole-of-market advice _(source : /marine-finance/)_
- Whole loan can cut legal costs: two sets of lawyers instead of three [a, /whole-loans/] _(source : /mezzanine-junior-finance/)_
- Knowledge of the Private Banking industry pairs clients with a suitable banker [a] _(source : /prime-residential-mortgages/)_
- Perfectly positioned to assist foreign investors seeking prime residential mortgages, through links with offshore banks (Estate Agent Today directory) [a] _(source : /prime-residential-mortgages/)_
- The firm offers to help a borrower check whether their case is FCA-regulated before engaging a lender (FAQ, per [a][b]) _(source : /probate-lending/)_
- independent, whole-of-market advice (LinkedIn post) [c]; whole-of-market advice via a large lender panel (this page per [b]) _(source : /property-development-finance/)_
- Can negotiate portfolio substitution terms upfront [b] _(source : /property-portfolio-mortgages/)_
- Stretches higher than a standard senior development loan [a] _(source : /stretch-senior-development-finance/)_
- [a][b][seed] Bridging loans are quick to arrange and do not require any affordability assessment _(source : /types-of-borrowing/)_
- [seed] "We can help with your wealth management." _(source : /types-of-borrowing/)_
- Independent, whole-of-market advice [c, LinkedIn] _(source : /western-europe/)_

**promise (Ts&Cs) [a][b]**

- Will advise/flag whether a mortgage is consumer buy-to-let _(source : /buy-to-let-mortgages/)_

**promise / capability [a][b]**

- Silver Oak Capital can match you with a lender who specialises in 'First Time Developer' products, provided you have a strong team around you. _(source : /first-time-developer-finance/)_

**promise / differentiator**

- Sources lenders for cross-border ownership arrangements which mainstream banks often decline. [a][b] _(source : /yacht-mortgages/)_

**promise / lender access (other page)**

- Works with challenger banks and bridging lenders who may lend on projected income or allow a 12-month period to find a tenant with interest-only servicing (/faq/) [a][b] _(source : /mixed-use-property-finance/)_

**promise [a] 'its commercial page' (attribution uncertain)**

- Aims for speed and transparency _(source : /commercial-mortgages/)_

**promise [a] FAQ page**

- Fees set out at the outset _(source : /commercial-mortgages/)_

**promise [b /introducers/]**

- introducers earn commissions through trusted referrals; discretion, transparency, and strict non-circumvention _(source : /lenders/)_

**promise-timescale**

- Indicative terms usually within 1 to 4 hours [a, /faq/] _(source : /auction-finance/)_
- Solid indication of terms by lunchtime if auction lot number and details sent in the morning [b, /faq/] _(source : /auction-finance/)_
- Bridging loans across the UK, including London, can complete in as little as 5–14 days, subject to lender approval [b, /bridging-loans-uk/] _(source : /auction-finance/)_

**promise/approach**

- Firm places applicants with lenders whose underwriting emphasises bank statements and asset wealth rather than relying only on UK credit scoring [a][b] _(source : /foreign-national-mortgages/)_
- Firm documents source of wealth and source of funds up front [b] _(source : /foreign-national-mortgages/)_

**promise/benefit**

- The existing relationship lets lenders go far beyond standing lending criteria [b] _(source : /private-bank-mortgages/)_

**promise/benefit (FAQ)**

- Private banks have very flexible underwriting criteria and can make very large loans; no fixed cap on borrowing [a][b] _(source : /private-bank-mortgages/)_

**promise/capability (/faq/) [a][seed]**

- Works with several lenders permitting first-time landlords on HMOs _(source : /buy-to-let-mortgages/)_

**promise/differentiator**

- 'which sets us apart from the majority of the commercial bridging loan market' _(source : /commercial-mortgage-broker/)_

**promise/fee**

- Pays introducers 'a competitive percentage of our procurement fee upon the successful completion of the loan' [a][b][seed] _(source : /introducers/)_

**promise/positioning [seed /lenders/]**

- works with an unrestricted number of lenders _(source : /lenders/)_

**promise/process**

- commits to keeping clients informed about which lenders it approaches _(source : /commercial-mortgage-broker/)_

**promise/scope**

- Provides finance for commercial aircraft _(source : /aviation-finance/)_

**promise/speed**

- Light refurbishment loans typically quick to arrange with light monitoring [b] (tool paraphrase) _(source : /light-to-heavy-refurbishment/)_

**promise/superlative**

- we have access to the largest network of lenders in the market (this page) [a] _(source : /property-development-finance/)_

**purpose**

- Purpose: refinance existing debt and provide extra capital for future acquisitions _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**rate [a][b]**

- Rate of 0.75% per month _(source : /case-studies/nw-london-bridge/)_

**recognition**

- Spear's 500 adviser profile for Jimmy Baillie exists _(source : /aviation-finance/)_

**recognition (case-study URL surfaced) [b][seed]**

- Silver Oak Capital added to Spear's 500 list for 2022 _(source : /aviation-bridging-loans/)_

**regulatory**

- Occupation of more than 40% of the property by the borrower or a family member makes the loan regulated [seed] _(source : /faq/)_
- Consumer Buy-to-Let can fall under FCA rules [seed] _(source : /faq/)_

**regulatory disclaimer**

- Does not provide regulated mortgage and insurance advice; does not handle client money (Ts&Cs) _(source : /about-us/)_

**related content**

- Case studies index lists a separate £4 million Kensington bridging case study _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**repeat-business [b]**

- Cap Ferrat client was a repeat client who had previously used Silver Oak for a London bridging loan _(source : /case-studies/)_

**representative example**

- Representative example: £11 million loan, up to 70% LTV (Independent Yacht Valuation), 48 months, interest only, 1.00% lender fee, indicative [a][b] _(source : /superyacht-finance/)_

**risk-disclosure**

- Crypto bridging brings lower LTVs, higher rates and stricter margin call requirements than traditional asset-backed lending [a][b] _(source : /crypto-bridging-advisory/)_
- Risks: extra collateral, partial forced sale to repay, higher borrowing costs [b] _(source : /single-stock-lending-advisory/)_

**scope**

- Loans secured on UK and overseas assets _(source : /about-us/)_
- Sectors: Retail, Office, Logistics, Care Homes, Student Accommodation, Hotels _(source : /commercial-mortgage-broker/)_
- Covers both property and businesses [a] _(source : /distressed-asset-finance/)_
- 'comprehensive range of first charge & second charge financial facilities from across the market' [a, Ts&Cs] _(source : /distressed-asset-finance/)_
- Arranges debt across the UK, US, Western Europe and the Middle East [b] _(source : /)_
- Clients from UK, France, Spain, Dubai and South Africa [c]; debt arranged in France, Spain, Dubai and South Africa [b] _(source : /)_

**scope [a] home page**

- Covers Retail, Office, Logistics, Care Homes, Student Accommodation and Hotels _(source : /commercial-mortgages/)_

**scope disclosure [b Ts&Cs]**

- offers products from across the market, but not deals that you can only obtain by going direct to a lender _(source : /lenders/)_

**security [a][b]**

- First-charge loan secured on the development site _(source : /senior-development-finance/)_

**security arrangement [b]**

- Bitcoin typically held in third-party custody or a lender-controlled wallet _(source : /bitcoin-loans-advisory/)_

**selling-point**

- Lending rates changing almost daily; real-time rate access as selling point (homepage) [a] _(source : /prime-residential-mortgages/)_

**service claim (unverified wording)**

- The firm handles the legal work of creating new leases for each unit (as summarised by the search tool; possibly a paraphrase) _(source : /conversions/)_

**service promise [a][b]**

- Firm prepares a lender-ready narrative / case summary and negotiates pricing and fees _(source : /prime-london-mortgages/)_

**service scope**

- offers senior debt, mezzanine and equity finance, plus bridging loans (home) [b] _(source : /property-development-finance/)_

**service-breadth**

- Advises on luxury asset financing, short-term bridging loans, marine and aviation finance beyond prime residential and commercial mortgages [c] _(source : /international-property-mortgages/)_

**sibling-page-terms**

- Sibling page: facilities generally short term, often not exceeding 12 months; USD/EUR/GBP; bullet repayment at maturity; sourced from specialist lenders [b] _(source : /crypto-bridging-advisory/)_

**site-faq-statement [b]**

- Development loans usually run 18 to 24 months; exit bridge gives a further 12 months at a lower rate (/faq/) _(source : /development-exit-loans/)_

**site-wide context**

- Site-wide [b]: bridging loans typically issued for 12 to 24 months; assessed on property value, exit strategy and deal viability rather than income (/bridging-loans-uk/) _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_
- Site-wide [b]: illustrative example on /types-of-borrowing/ of a £12 million loan at 0.75% per month over 12 months, 2.00% lender fees, no exit fee _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**speed promise (search summary attributes to Silver Oak pages generally) [b]**

- Lending on open market value, with bridging funds arranged in days _(source : /below-market-purchases/)_

**statement**

- Art usually supports lower loan-to-value ratios than other asset-backed lending [a] _(source : /art-finance-advisory/)_
- Single high-value pieces are generally preferred over portfolios of smaller items [b] _(source : /art-finance-advisory/)_
- Lenders monitor artwork value and may request additional security if values fall [b] _(source : /art-finance-advisory/)_
- An Article 4 direction can help HMO valuations [seed] _(source : /faq/)_
- AML/KYC checks can be heavier for international / overseas clients [a][b] _(source : /foreign-national-mortgages/)_
- Lombard loans suit short- to medium-term needs more than long-term ones _(source : /lombard-loan-advisory/)_
- Bonds are a common choice of collateral due to their predictable cash flow _(source : /lombard-loan-advisory/)_
- Inheritance tax bridging loans are the most common type of probate loan (page, per [a]) _(source : /probate-lending/)_
- Post-probate lending is more common and will likely be cheaper (FAQ, per [a]) _(source : /probate-lending/)_
- Lenders are generally happy to fund Corporation Tax, VAT or Inheritance Tax bills payable before probate is granted, provided there is a clear exit strategy (FAQ, per [b]) _(source : /probate-lending/)_

**statistic**

- Sibling blog title: 'Why 70% of London Development Finance Deals Get Rejected' (URL /why-lenders-reject-70-of-london-resi-led-development-deals/) [b] - headline figure only, body not seen _(source : /development-finance-brokers/)_

**structure**

- Structured as a single first-charge bridging loan, without a second charge, repaying existing debt and covering the full capital raise _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_
- Interest rolled up _(source : /case-studies/bridging-loan-land-with-planning/)_
- No personal guarantee given by borrowers _(source : /case-studies/bridging-loan-land-with-planning/)_
- Combines senior debt and mezzanine finance into one single facility from one lender [a][b] _(source : /stretch-senior-development-finance/)_
- Loan structured as a corporate loan to a holding company, secured by a vessel mortgage and a personal guarantee from the UBO [a][b] _(source : /superyacht-finance/)_

**structure (superyacht page)**

- Superyachts usually held via SPVs in Isle of Man, Malta or Cayman Islands; loan is a corporate loan to the SPV, secured on the boat, backed by personal guarantee from the beneficial owner. [b] _(source : /yacht-mortgages/)_

**structure [a][b]**

- Loan is a single lump sum used purely to complete the purchase, unlike development finance _(source : /post-planning-land-acquisitions/)_

**structure-purpose [b]**

- Loan refinanced outstanding development and Mezz facilities to allow more time to market and sell remaining units _(source : /case-studies/nw-london-bridge/)_

**target client**

- Aimed at ultra-high-net-worth individuals and family offices [b] _(source : /superyacht-finance/)_

**team**

- Team: Senior Associate Debt Advisory (Connor Dooley), Associate Debt Advisory (Joe Berk), Relationship Manager (Sophia De Stefano) _(source : /about-us/)_

**term**

- Up to 90% LTV available _(source : /aviation-finance/)_
- 5-12 year loan terms _(source : /aviation-finance/)_
- Quarterly amortising payments _(source : /aviation-finance/)_
- Most BTL products max out at 75% LTV (25% deposit) [b] _(source : /faq/)_
- HMO LTV typically 75%, some lenders 80% in exceptional circumstances [seed] _(source : /faq/)_

**term [a][b]**

- 12-month term _(source : /case-studies/nw-london-bridge/)_

**terms**

- Pre-construction finance is typically interest only [a][b, /faq/] _(source : /pre-construction-marine-finance/)_

**terms (FAQ)**

- Mortgages can be interest-only or capitalising [b] _(source : /private-bank-mortgages/)_

**terms-from-related-page**

- LTV up to 85% (0-5 yr aircraft), 40-55% (12-20 yr aircraft); terms 3-12 years; 4-8 or 8-12 week timelines - attributed by search tool to the FAQ page [b] _(source : /senior-secured-aircraft-finance-advisory/)_

**testimonial/case-study**

- Case study: £5m BVI-trust refinance at 2.75% fixed 5 years, interest-only over 10 years [b] _(source : /complex-offshore-structures/)_

**third-party**

- Valuation confirmed by a Knight Frank valuation report _(source : /case-studies/bridging-loan-land-with-planning/)_
- Crunchbase: specializing in development finance and commercial mortgage services [a] (Crunchbase slug 'silver-oak-capital' may be ambiguous with other Silver Oak entities; tool attributed it to this firm) _(source : /introducers/)_

**third-party listing; content not shown [a]**

- Firm listed in Letting Agent Today trades directory and on Nextdoor (Debt Advisory, London) _(source : /prime-london-mortgages/)_

**third-party recognition; firm not named in snippet, attribution to Silver Oak Capital unconfirmed [c]**

- Spear's adviser profile (Jimmy Baillie) describes a London debt advisory firm advising on prime residential and commercial mortgages, luxury-asset debt, bridging, marine and aviation finance _(source : /prime-london-mortgages/)_

**third-party/number**

- Introducer Today directory: arranges large loans of £2-£20m [a] _(source : /introducers/)_

**timescale**

- Approvals in 5-14 days _(source : /bridging-loans-uk/)_
- Same-day indicative terms _(source : /bridging-loans-uk/)_
- Generally allow 4-6 weeks to arrange [a][b] _(source : /distressed-asset-finance/)_

**timescale (not bridging) [b, FAQ]**

- Simple senior secured aircraft finance in a familiar jurisdiction can take 4-8 weeks _(source : /aviation-bridging-loans/)_

**timescale [a][b]**

- Land can be bought in about 2 to 4 weeks _(source : /post-planning-land-acquisitions/)_

**timescale [b] FAQ page**

- Commercial mortgage application typically takes 8 to 12 weeks from application to completion _(source : /commercial-mortgages/)_

**timescale promise**

- Finance for distressed assets 'can be arranged within days' for the right asset and borrower [a][b] _(source : /distressed-asset-finance/)_

**timing**

- Completed within four weeks _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**timing [b]**

- £3.6m Kensington facility completed within four weeks _(source : /case-studies/)_

**track-record**

- £4 million bridging loan arranged on a Kensington residential property [c, LinkedIn post by Joe Berk]; seed case-study URL says '3-6-million-bridging-loan-prime-kensington-property' (£3.6m) - possible contradiction or different deal _(source : /mezzanine-junior-finance/)_
- Has found/arranged mortgages for prime residential properties of GBP 1m+ since 2019 [a][b] _(source : /prime-residential-mortgages/)_

**use-case**

- Uses include acquisitions, refinancing, and debt restructuring [a] _(source : /senior-secured-aircraft-finance-advisory/)_

**wording**

- Case study page does not name the lender; uses 'trusted lender' wording (per search summary) _(source : /case-studies/3-6-million-bridging-loan-prime-kensington-property/)_

**worked-example**

- Indicative example: GBP 7 million, five-year, interest-only loan [b] _(source : /prime-residential-mortgages/)_

### Faits relevés dans les sources tierces

- CLIENT TYPES (third party): Property Week Commercial Property Awards 2026 organisation listing describes Silver Oak Capital as a specialist debt advisory firm serving property investors, developers and high net worth individuals. _(source : Property Week - Commercial Property Awards 2026 organisation page (via WebSearc…, https://awards.propertyweek.com/live/en/node/organisation-silver-oak-capital ; confiance high)_ — « specialist debt advisory firm providing tailored funding solutions for property investors, developers, and high net worth individuals »
- CLIENT TYPES - FOREIGN INVESTORS (third party): Letting Agent Today trades-directory listing positions the firm as helping foreign investors obtain prime residential or long-term commercial mortgages. _(source : Letting Agent Today trades directory (via WebSearch summary, query 1), https://www.lettingagenttoday.co.uk/trades-directory/silver-oak-capital/ ; confiance high)_ — « perfectly positioned to assist foreign investors looking to secure a prime residential mortgage or a long term commercial mortgage »
- CLIENT TYPES - EXPATS: No source surfaced that targets expatriates as a separate client category (search summary explicitly noted this). Foreign nationals / international clients are mentioned; 'expats' as a label is not. _(source : WebSearch summary, query 1 (negative finding) ; confiance medium)_ — « I found no source that specifically targets expatriates as a separate category. »
- POSITIONING: Described as a London-based debt advisory and mortgage broker that is not a high-street mortgage broker but offers bespoke solutions for larger, more complex real estate transactions. _(source : WebSearch summary, query 1 (attribution mixed: 'its own materials and third-par…, https://silveroakcapital.odoo.com/ ; confiance medium)_ — « does not operate as a high street mortgage broker but offers a bespoke solution for larger, more complex real estate transactions »
- LOAN RANGE (current): focuses on loans of GBP 500k to GBP 20m secured on assets throughout the UK and abroad; current site says it specialises in loans over GBP 500,000. _(source : WebSearch summaries, queries 1 and 7 (attribution mixed, partly OWN-SITE), https://www.silveroakcapital.co.uk/ ; confiance medium)_ — « focuses on loans of £500k – £20m, secured on assets throughout the UK and abroad »
- LOAN RANGE (older third-party listings): commercial mortgage broker focused on large loans of GBP 2m to GBP 20m, offering tailored commercial finance, lender relationships and expert funding advice. CONTRADICTION with the GBP 500k floor on the current site - older listings appear to reflect an earlier positioning. _(source : Third-party directory listings (mortgage118 / GoSimples / syob) via WebSearch s…, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance medium)_ — « London-based commercial mortgage broker focused on large loans of £2m to £20m, with access to tailored commercial finance, lender relationships and expert funding advice »
- CLIENT TYPES (OWN-SITE, via summary): 'who we act for' list = High-Net-Worth and Ultra-High-Net-Worth Individuals; Property Developers and Investor Groups; Family Offices and Trustees; International Clients with UK Assets. _(source : OWN-SITE (silveroakcapital.co.uk, Complex Offshore Structures page) as cited by…, https://www.silveroakcapital.co.uk/complex-offshore-structures/ ; confiance medium)_ — « High-Net-Worth and Ultra-High-Net-Worth Individuals, Property Developers and Investor Groups, Family Offices and Trustees, International Clients with UK Assets »
- PRODUCTS FOR DEVELOPERS/INVESTORS (OWN-SITE, via summary): has assisted property developers and investors in sourcing both short-term bridging loans and long-term whole loans. _(source : OWN-SITE (silveroakcapital.co.uk) as cited by WebSearch summary, query 1, https://www.silveroakcapital.co.uk/ ; confiance medium)_ — « assisted property developers and investors in sourcing both short term bridging loans and long term whole loans »
- OFFSHORE / TRUST EXPERIENCE: the firm has experience with offshore and trust-owned assets; founder's notes mention offshore debt work in France, Spain, Dubai and South Africa. _(source : WebSearch summary, query 1 (source page not specified - possibly odoo/weebly sa…, https://silveroakcapital.odoo.com/ ; confiance low)_ — « offshore debt work in France, Spain, Dubai & South Africa »
- OTHER ASSET CLASSES: besides development and bridging finance, the firm covers yacht or business jet transactions. _(source : WebSearch summary, query 1 (attribution not specified) ; confiance medium)_ — « yacht or business jet transactions »
- LENDER NETWORK (2021, third party): a 2021 trade article says the firm was founded by Jimmy Baillie and works with a network of more than 300 lenders. _(source : The Landsite - 'Silver Oak Capital in the News' (2021) via WebSearch summary, q…, https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance high)_ — « a network of more than 300 lenders »
- LENDER NETWORK - CONTRADICTION: lender count varies across sources: 'over 300 lenders' (older directory listing / 2021 article), '700+ lenders' (website per query-5 summary) and 'over 800 lenders' (current site per query-1 summary). Figures are dated differently; do not cite a single number without checking the live site. _(source : WebSearch summaries, queries 1 and 5, https://www.silveroakcapital.co.uk/ ; confiance medium)_ — « The lender count varies across sources, from over 300 lenders in an older directory listing to over 800 lenders on its current site. »
- REVIEWS (third party): mortgage118.com broker listing shows a 5/5 rating from 9 reviews; reviews are unverified and cover bridging and buy-to-let deals. _(source : mortgage118.com broker listing via WebSearch summary, query 5, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance high)_ — « 5/5 rating from 9 reviews »
- PROCESS AS DESCRIBED BY A CLIENT (third party review): one reviewer says the firm presented clear options and guided them through each step of the process. _(source : mortgage118.com review via WebSearch summary, query 5, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance high)_ — « presented clear options and guided me through each step of the process »
- RESPONSIVENESS AS DESCRIBED BY A CLIENT (third party review): another reviewer says the firm was always quick to respond to questions. _(source : mortgage118.com review via WebSearch summary, query 5, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance high)_ — « always quick to respond to any questions we had »
- REVIEWS - NEGATIVE FINDING: no Trustpilot or Google review pages for Silver Oak Capital surfaced; no source describes the full enquiry-to-completion timeline or steps in detail. _(source : WebSearch summary, query 5 ; confiance high)_ — « The results don't include Trustpilot or Google review pages, and nothing describes the enquiry-to-completion process in detail. »
- FEES AND SPEED - NEGATIVE FINDING: no third-party (or own-site) result surfaced stating Silver Oak Capital's fees, fee structure or typical completion timescales. Only generic UK bridging-market context was returned (e.g. one UK guide: average completion 55 days from enquiry to money out, well-prepared case 2-3 weeks) - this is NOT about Silver Oak Capital. _(source : WebSearch summary, query 3 ; confiance high)_ — « I found no results from silveroakcapital.co.uk or any page about Silver Oak Capital, so I can't report its fees or completion times. »
- INTRODUCER / PARTNER PROGRAMME - NEGATIVE FINDING: no third-party result mentions a Silver Oak Capital introducer or partner programme, its commission terms, or whether it works with UK brokers. Results were about unrelated firms (White Oak UK 'introduce' scheme, V Loans, FX/CFD introducing-broker programmes) - all unrelated to Silver Oak Capital. _(source : WebSearch summary, query 2 ; confiance high)_ — « I couldn't find anything about a Silver Oak Capital introducer or partner programme in these results. None of the results mention the firm »
- LENDER CALCULATOR / DEVELOPER SCORECARD - NEGATIVE FINDING: no result mentions a Silver Oak Capital calculator or developer scorecard tool. The only comparable item was Oblix Capital's (a different lender) development finance quick-quote calculator - unrelated. _(source : WebSearch summary, query 4 ; confiance high)_ — « The search didn't turn up any Silver Oak Capital calculator or developer scorecard tool. None of the results mention one. »
- SOCIAL: a LinkedIn post uses the hashtag #silveroakcapital alongside bridging finance and UK property investment topics; the result URL is a personal LinkedIn profile (uk.linkedin.com/in/joe-berk), which appeared in both queries 3 and 4. Relationship of this person to the firm is not stated in the snippet. _(source : WebSearch summary, query 4; result link in queries 3 and 4, https://uk.linkedin.com/in/joe-berk ; confiance low)_ — « #silveroakcapital appears in that post »
- SOCIAL: a LinkedIn company page exists for Silver Oak Capital (uk.linkedin.com/company/silver-oak-capital). Content not visible in snippet. _(source : WebSearch result link, query 1, https://uk.linkedin.com/company/silver-oak-capital ; confiance high)_
- PEOPLE / HISTORY (third party): Jimmy Baillie is listed as Managing Director; The Landsite's 2021 article says the firm was started by Jimmy Baillie 'in August last year' (implying 2020). Another page says he founded it in 2019. CONTRADICTION on founding year - search summary advises treating 2019 as unverified. _(source : The Landsite article (2021) + unspecified page, via WebSearch summary, query 7, https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance medium)_ — « in August last year »
- DIRECTORY LISTING: The Landsite lists Silver Oak Capital under professional services (listing id 720). _(source : The Landsite professional-services directory (result link, query 7), https://www.thelandsite.co.uk/professional-services/720-silver-oak-capital ; confiance high)_
- SERVICES AS DESCRIBED BY A THIRD PARTY: one directory source describes the firm as providing commercial mortgage brokerage, property development finance, bridging loans and development finance solutions. _(source : Unspecified directory source via WebSearch summary, query 7 (likely The Landsit…, https://www.thelandsite.co.uk/professional-services/720-silver-oak-capital ; confiance medium)_ — « expert commercial mortgage brokerage services, property development finance, bridging loans, and development finance solutions »
- DIRECTORY LISTINGS: GoSimples UK Business Listing Directory lists 'Silver Oak Capital - Debt Advisory' under Financial Advisors, London; syob.net lists 'Silver Oak Capital - Debit Advisory' [sic]. Both are directory entries; content beyond titles not visible. _(source : WebSearch result links, queries 1 and 5, https://www.gosimples.com/listing/england/london-151/financial-advisors/silver-oak-capital-debit-advisory ; confiance high)_ — « Silver Oak Capital - Debt Advisory »
- SATELLITE SITES: two secondary web presences titled 'Silver Oak Capital - Real Estate & Finance Professionals' exist on Odoo (silveroakcapital.odoo.com) and Weebly (silveroakcapital.weebly.com). Content not visible beyond titles. _(source : WebSearch result links, queries 1 and 7, https://silveroakcapital.weebly.com/ ; confiance high)_ — « Silver Oak Capital - Real Estate & Finance Professionals »
- LOCATION - CONTRADICTION/NOTE: mortgage118 files the broker under 'Hackney' (London), whereas the firm's T&Cs give 91 Wimpole St, London W1G 0EF (Marylebone) and the site's contact details list a Marylebone office. Likely an older or secondary address on the directory. _(source : mortgage118 listing title (query 5) vs OWN-SITE T&Cs PDF cited in query 7 summa…, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance medium)_ — « Silver Oak Capital, Hackney »
- LEGAL ENTITY (OWN-SITE T&Cs, Feb 2026, via summary): Silver Oak Capital Ltd, 91 Wimpole St, London, W1G 0EF, company number 08551479. _(source : OWN-SITE T&Cs PDF (wp-content/uploads/2026/02/Ts-and-Cs.pdf) as cited by WebSea…, https://www.silveroakcapital.co.uk/wp-content/uploads/2026/02/Ts-and-Cs.pdf ; confiance high)_ — « Silver Oak Capital Ltd – 91 Wimpole St, London, W1G 0EF »
- REGULATORY SCOPE (OWN-SITE T&Cs, via summary): the terms state that SOC does not provide regulated mortgage and insurance advice. Relevant to how the firm frames its process (unregulated/commercial debt advisory rather than regulated mortgage advice). _(source : OWN-SITE T&Cs PDF as cited by WebSearch summary, query 7, https://www.silveroakcapital.co.uk/wp-content/uploads/2026/02/Ts-and-Cs.pdf ; confiance high)_ — « SOC does not provide regulated mortgage and insurance advice »
- REGULATORY STATUS (third party directory): a directory page lists the FCA registered name as 'Silver Oak Capital' but shows status 'Not confirmed'. Search summary advises checking the FCA register directly. _(source : Directory page (likely mortgage118) via WebSearch summary, query 7, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance medium)_ — « Not confirmed »
- PRIME RESIDENTIAL (OWN-SITE, via summary): site says it has found mortgages for prime residential properties (GBP 1m+) since 2019. _(source : OWN-SITE prime-residential-mortgages page as cited by WebSearch summary, query 5, https://www.silveroakcapital.co.uk/prime-residential-mortgages/ ; confiance medium)_
- FAMILY OFFICES / TRUSTS / OFFSHORE (third party) - NEGATIVE FINDING: query 6 returned no third-party page discussing Silver Oak Capital's work with family offices, trusts or offshore structures; results were about Investec, Burges Salmon, IQ-EQ, Clifton PF etc. (unrelated). Two Spear's 500 adviser pages for 'Jimmy Baillie' (ids 6519 and 22953) did appear in the result list, but their content and … _(source : WebSearch summary + result links, query 6, https://spears500.com/adviser/22953/jimmy-baillie ; confiance low)_ — « The search didn't turn up anything about "Silver Oak Capital" specifically. »
- UNRELATED ENTITIES EXCLUDED (do not attribute to Silver Oak Capital UK): 'Oak Capital' (BrokerChooser safety page), 'Silver Oak Securities' (US broker-dealer; Secatty complaints page), 'Silver Point Capital' (PitchBook), 'White Oak UK' (introducer scheme), 'OakNorth Bank', 'Oblix Capital' (calculator), 'Silverfleet Capital', 'Montello'. _(source : WebSearch result lists, queries 2, 4, 5, 7 ; confiance high)_
- Companies House number 08551479: NO record surfaced in search results. Registered name, incorporation date, officers and registered office could NOT be confirmed via WebSearch. Needs a direct lookup on find-and-update.company-information.service.gov.uk/company/08551479. _(source : WebSearch summary, query 1 ; confiance high (negative resu…)_ — « I couldn't find a Companies House record for company number 08551479 in these results, so I can't confirm its name, status, or registered address. »
- Companies House 'Silver Oak' hits returned by the search are DIFFERENT companies and must be ignored: SILVER OAK (ASTON 1) LIMITED 03912902, SILVER OAK (ASTON 2) LIMITED 03912918, SILVER OAK (REDDITCH) LIMITED 03545770, SILVER OAK (WIMBLEDON) LIMITED 03670551, SILVER OAK (HARLEY) LIMITED 03662661, SILVER OAK ENTERPRISES LIMITED 04334039, SILVER COAST CAPITAL (UK) LIMITED 10058904, SILVEROAK PRIVA… _(source : Result titles, query 1, https://find-and-update.company-information.service.gov.uk/company/04334039 ; confiance high (different com…)_
- Jimmy Baillie is the founder and managing director of Silver Oak Capital, described as a debt advisory firm. _(source : Spear's 500 adviser profile (two profile IDs: 6519 and 22953), https://spears500.com/adviser/22953/jimmy-baillie ; confiance high)_ — « Jimmy Baillie is the founder and managing director of debt advisory firm Silver Oak Capital. »
- Silver Oak Capital was founded / set up in 2019. _(source : Spear's 500 profile 6519; Bridging & Commercial 2019 trade article says the fir…, https://spears500.com/adviser/6519/jimmy-baillie ; confiance high)_ — « The firm was set up in 2019 and advises wealthy clients on secured loans, mainly in the £2 million to £20 million range. »
- Target loan size - CONTRADICTION between sources: Spear's cites £2m to £20m; the firm's own profile (per search summary) describes £500k to £20m; a directory listing describes 'large loans of £2-£20m'. _(source : Spear's 500 profile vs firm's own profile (as reported in WebSearch summary, qu…, https://spears500.com/adviser/6519/jimmy-baillie ; confiance medium (contradicti…)_ — « The firm's own profile describes loans from £500k to £20m, while a Spear's listing cites £2m to £20m. »
- Lender network - CONTRADICTION: Spear's profile says more than 800 lenders; an older article says 300+. Geographic reach per Spear's: UK, Western Europe, Southern Africa and the Middle East. _(source : Spear's 500 profile 22953; older article (unnamed in summary, likely 2019 trade…, https://spears500.com/adviser/22953/jimmy-baillie ; confiance medium (contradicti…)_ — « Silver Oak says it works with a network of more than 800 lenders and arranges real estate debt in the UK, Western Europe, Southern Africa and the Middle East. »
- Services attributed to the firm: residential and commercial mortgages, bridging loans, marine and aviation finance. _(source : WebSearch summary, query 2 (mix of Spear's, own About Us page, aggregators), https://spears500.com/adviser/22953/jimmy-baillie ; confiance medium)_ — « Its services include residential and commercial mortgages, bridging loans, and marine and aviation finance. »
- Jimmy Baillie's prior career: worked for several London real estate debt brokers before founding Silver Oak; earlier roles reportedly at Knight Frank, Enness Private Office and Arc & Co. Reported motivation: a gap in specialist advice for loans above £2m. _(source : WebSearch summary, query 2 (Spear's profile + own About Us page + aggregators R…, https://spears500.com/adviser/22953/jimmy-baillie ; confiance medium (summary not…)_ — « Earlier roles included Knight Frank, Enness Private Office, and Arc & Co. He reportedly decided to start his own business after seeing a gap in specialist advice for loans above £2m. »
- Jimmy Baillie education: University of Cape Town, B.Com Honours in Economics (around 2010). One aggregator profile also lists Nelson Mandela University; dates conflict between sources. _(source : Aggregator profiles (RocketReach / ContactOut / AeroLeads / Crunchbase) as repo…, https://rocketreach.co/jimmy-baillie-email_49807510 ; confiance low-medium (aggrega…)_ — « He studied at the University of Cape Town, where he earned a B.Com. Honours in Economics around 2010. One profile lists a further degree from Nelson Mandela University, but the dates in the sources conflict. »
- Crunchbase has a person profile titled 'Jimmy Baillie - Wealth Management @ Wilton Group'. Unclear whether this is a past role or a different person; not corroborated elsewhere. _(source : Result title, query 2, https://www.crunchbase.com/person/jimmy-baillie ; confiance low (title only, un…)_ — « Jimmy Baillie - Wealth Management @ Wilton Group - Crunchbase Person Profile »
- Spear's 500: Jimmy Baillie / Silver Oak Capital included in the Spear's 500 Debt Advisory index for 2022/2023. The firm also published its own case-study page 'Silver Oak Capital added to Spear's 500 list for 2022'. Baillie appears under two separate Spear's adviser profile IDs (6519 and 22953); reason for duplication not stated. Specific rank position in Spear's property index NOT confirmed. _(source : Spear's 500 (spears500.com) + firm's own case-study URL (own site, flagged), https://spears500.com/adviser/6519/jimmy-baillie ; confiance high (listing exist…)_ — « He was included in Spear's 500 Debt Advisory index for 2022/2023. »
- Spear's profile personal note: Jimmy Baillie described as a keen amateur cyclist and snowboarder. _(source : Spear's 500 profile, https://spears500.com/adviser/22953/jimmy-baillie ; confiance medium)_ — « A Spear's profile says he is a keen amateur cyclist and snowboarder. »
- Connor Dooley and Joe Berk are members of Silver Oak Capital's debt advisory team; they represented the firm at MIPIM 2026 in Cannes (9-13 March 2026). _(source : LinkedIn posts (self-reported) via WebSearch summary, query 3, https://uk.linkedin.com/in/joe-berk ; confiance medium (LinkedIn, s…)_ — « Connor Dooley and Joe Berk will be representing our debt advisory team at MIPIM from the 9th to the 13th of March. »
- Connor Dooley is credited (LinkedIn) with arranging a £4,000,000 bridging loan to refinance a prime residential property in Kensington. _(source : LinkedIn post via WebSearch summary, queries 1 and 3, https://uk.linkedin.com/in/joe-berk ; confiance medium (LinkedIn, s…)_ — « Silver Oak Capital has successfully arranged a £4,000,000 bridging loan to refinance a prime residential property in Kensington. »
- Joe Berk has a LinkedIn profile (uk.linkedin.com/in/joe-berk) tied to Silver Oak Capital; it describes the firm as a specialist debt advisory firm providing tailored funding solutions. No job title for him surfaced in the snippets. _(source : LinkedIn profile via WebSearch summary, query 1, https://uk.linkedin.com/in/joe-berk ; confiance medium)_ — « specialist debt advisory firm providing tailored funding solutions »
- Sophia De Stefano: NO third-party source found in a name-targeted search. The only mention is the firm's own About Us page (as reported by the search summary), which names her as a relationship manager. _(source : WebSearch summary, query 3 (negative) and query 7 (own-site About Us page, flag…, https://www.silveroakcapital.co.uk/about-us/ ; confiance medium (own-site on…)_ — « The firm's About Us page lists him as Managing Director and also names a relationship manager, Sophia De Stefano. »
- Headcount: the company's LinkedIn page lists 11-50 employees and a London headquarters. The firm's About Us page names Jimmy Baillie as Managing Director. A Bridging & Commercial trade article is titled 'Silver Oak Capital to grow team following increased volume in £2m-20m space'. _(source : LinkedIn company page + Bridging & Commercial, via WebSearch summary, query 7, https://uk.linkedin.com/company/silver-oak-capital ; confiance medium (LinkedIn si…)_ — « The company's LinkedIn page lists 11-50 employees and a London headquarters. »
- FCA status: NO FCA Financial Services Register entry for 'Silver Oak Capital' surfaced in search results; status (authorised / appointed representative / exempt) is UNCONFIRMED. No FRN found. Needs direct check on register.fca.org.uk. _(source : WebSearch summary, query 4 ; confiance high (negative resu…)_ — « I found no FCA Financial Services Register entry for "Silver Oak Capital" itself, so its status is unconfirmed. »
- A third-party directory (Unbiased.co.uk mortgage-adviser profile for Silver Oak Capital) states the firm is FCA registered. This is a directory claim, not the register itself. _(source : Unbiased.co.uk profile, https://www.unbiased.co.uk/profile/mortgage-adviser/silver-oak-capital-702017 ; confiance low-medium (unverif…)_ — « An Unbiased.co.uk mortgage-adviser profile for "Silver Oak Capital" states the firm is FCA registered. »
- No FCA scam/clone warning naming Silver Oak Capital was found. FCA warnings in results concern OTHER firms (Loan Oak clone, Silver Capital Management LLC, Sliverleaf/Silver Leaf Capital Group, Evergreen Oak Capital, Silverhouse Finance, Silvergrove Capital Group) and are unrelated. _(source : WebSearch summary and result titles, query 4, https://www.fca.org.uk/news/warnings/evergreen-oak-capital ; confiance medium)_ — « The results include warnings about other "Silver" and "Oak" named firms, but none about Silver Oak Capital. »
- 'Silver Oak Financial Solutions' (Unbiased listing 728403, established by Ben Warren in 2017) is a SEPARATE business with no evident link to Silver Oak Capital - ignore. _(source : Unbiased.co.uk, via WebSearch summary query 4, https://www.unbiased.co.uk/profile/financial-adviser/silver-oak-financial-solutions-728403 ; confiance high (distinct enti…)_ — « Silver Oak Financial Solutions, is a separate business that was established by Ben Warren in 2017. »
- Trade memberships (NACFB / FIBA / ASTL): NO source found stating Silver Oak Capital is a member of any of the three. Search returned only unrelated US entities (Silver Oak Securities, Jackson, Tennessee; Silver Oak Leasing Inc, California). _(source : WebSearch summary, query 5 ; confiance high (negative resu…)_ — « The search didn't turn up any source that says Silver Oak Capital is a member of NACFB, FIBA, or ASTL. »
- Office location - possible CONTRADICTION: the firm's own site (per summary) says the office is in Marylebone, London; a broker directory lists 'Silver Oak Capital, Hackney' (mortgage118.com). May reflect an older or registered address vs. trading address. _(source : Own site (as reported in WebSearch summary, query 7) vs mortgage118.com directo…, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance low-medium (contrad…)_ — « The company's own site describes it as a debt advisory firm located in London, UK, and its office is in Marylebone. »
- Third-party pages that reference Silver Oak Capital and could be used for cross-checking: Bridging & Commercial article; The Landsite 'Silver Oak Capital in the News'; Letting Agent Today trades directory; mortgage118 broker directory; RocketReach, ContactOut and AeroLeads company/staff profiles; an Odoo-hosted page 'Silver Oak Capital - Real Estate & Finance Professionals' (silveroakcapital.odoo… _(source : Result titles/URLs, queries 2 and 7, https://bridgingandcommercial.co.uk/silver-oak-capital-to-grow-team-following-increased-volume-in-pound-2m-20m-space ; confiance high (pages exist);…)_
- Unrelated entities surfaced and to be IGNORED: Silver Oak Securities (US broker-dealer, Jackson TN), Silver Oak Services Partners LLC (US private equity), SilverOak Financial Group Ltd (Houston), Silverfleet Capital, Excellion Capital, Silver Lake. _(source : Result titles, queries 3, 5, 7 ; confiance high)_
- Bridging & Commercial published an article titled 'Silver Oak Capital completes its largest ever bridging loan of £19.1m'. _(source : Bridging & Commercial (bridgingandcommercial.co.uk) - result title, https://bridgingandcommercial.co.uk/article/15803/silver-oak-capital-completes-its-largest-ever-bridging-loan-of-pound191m ; confiance high)_ — « Silver Oak Capital completes its largest ever bridging loan of £19.1m »
- Alternate URL for the same Bridging & Commercial £19.1m article. _(source : Bridging & Commercial - result title, https://bridgingandcommercial.co.uk/silver-oak-capital-completes-its-largest-ever-bridging-loan-of-pound-19-1m ; confiance high)_ — « Silver Oak Capital completes its largest ever bridging loan of £19.1m »
- In an exclusive interview with Bridging & Commercial, Jimmy Baillie said Silver Oak Capital was positioning itself as specialists in the large loan market. _(source : Bridging & Commercial £19.1m article - search tool summary, https://bridgingandcommercial.co.uk/article/15803/silver-oak-capital-completes-its-largest-ever-bridging-loan-of-pound191m ; confiance medium-high (quoted…)_ — « specialists in the large loan market »
- In the same Bridging & Commercial piece, Baillie credited the £19.1m deal's timing to the UK general election, saying that after the December election many people in the UK property market breathed a sigh of relief. _(source : Bridging & Commercial £19.1m article - search tool summary (paraphrase, not con…, https://bridgingandcommercial.co.uk/article/15803/silver-oak-capital-completes-its-largest-ever-bridging-loan-of-pound191m ; confiance medium (paraphrased…)_
- Jimmy Baillie has a Spear's 500 adviser profile in the Debt Advisory index. _(source : Spear's 500 (spears500.com) - result title, https://spears500.com/adviser/22953/jimmy-baillie ; confiance high)_ — « Jimmy Baillie - Spear's 500 Adviser Profile - Debt Advisory Index »
- A second Spear's 500 profile URL exists for Jimmy Baillie (adviser id 6519). _(source : Spear's 500 - result URL, https://spears500.com/adviser/6519/jimmy-baillie ; confiance high (URL surfaced;…)_
- Jimmy Baillie is the founder and managing director of debt advisory firm Silver Oak Capital, which was established in 2019 and specialises in advising UHNW clients on secured loans between £2 million and £20 million. _(source : Business/adviser profile (most likely Spear's 500) - search tool summary, https://spears500.com/adviser/22953/jimmy-baillie ; confiance medium-high (summar…)_
- Spear's adviser profile lists Jimmy Baillie as founder and managing director, in debt advisory. _(source : Spear's 500 - search tool summary (query 2), https://spears500.com/adviser/22953/jimmy-baillie ; confiance high)_
- David Bell published a LinkedIn video post titled 'Get to Know Jimmy Baillie: Debt Financing Options, UK Real Estate Outlook…' - a conversation covering debt options, the outlook for UK real estate, refinancing or reviewing debt arrangements, why clients sometimes opt for high bridge rates, and family office tips. The post lists Baillie as affiliated with Spear's 500 and Silver Oak Capital. _(source : LinkedIn post by David Bell - result title + search tool summary, https://za.linkedin.com/posts/dtbell_get-to-know-jimmy-baillie-debt-financing-activity-7062704278661931008-Mpg9 ; confiance medium-high (title …)_ — « Get to Know Jimmy Baillie: Debt Financing Options, UK Real Estate Outlook… »
- thelandsite.co.uk published an article titled 'Silver Oak Capital in the News' (profile dated June 2021 per search summary). _(source : thelandsite.co.uk - result title + summary, https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance high)_ — « Silver Oak Capital in the News »
- In the 2021 thelandsite profile, founder Jimmy Baillie described the firm's main markets as London, Monaco, Dubai and Cape Town. _(source : thelandsite.co.uk - search tool summary, https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance medium-high)_
- The 2021 thelandsite article mentions a panel of more than 300 lenders (vs 700+ / 800+ claimed on the firm's current site). _(source : thelandsite.co.uk - search tool summary, https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance medium-high (contra…)_
- A 2021 company piece says Baillie launched the firm after working at several brokerages, having held consultancy, associate and advisory roles at Knight Frank, Enness and Arc & Co, which he said prepared him to start his own company. _(source : '2021 company piece' per search tool summary (most likely the thelandsite 'in t…, https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance medium (career fact…)_
- Letting Agent Today lists Silver Oak Capital in its trades directory as a London-based commercial mortgage broker specialising in large loans of £2-£20m. _(source : Letting Agent Today trades directory - result + search tool summary, https://www.lettingagenttoday.co.uk/trades-directory/silver-oak-capital/ ; confiance high)_
- Snippet: 'The brokerage focuses on arranging development finance and bridging loans along with residential and commercial mortgages in the UK and western Europe.' _(source : Third-party listing snippet (LinkedIn company page or directory; exact page not…, https://uk.linkedin.com/company/silver-oak-capital ; confiance medium (verbatim sn…)_ — « The brokerage focuses on arranging development finance and bridging loans along with residential and commercial mortgages in the UK and western Europe. »
- Snippet: 'The firm was founded in 2019 to advise on loans between £500k and £20m, secured on assets in the UK and abroad.' _(source : Snippet returned in query 4 (likely own site / LinkedIn; attribution not confir…, https://uk.linkedin.com/company/silver-oak-capital ; confiance medium)_ — « The firm was founded in 2019 to advise on loans between £500k and £20m, secured on assets in the UK and abroad. »
- Team: Jimmy Baillie listed as Managing Director; Sophia De Stefano listed as Relationship Manager. _(source : Search tool summary (query 4), likely from LinkedIn company page / thelandsite, https://uk.linkedin.com/company/silver-oak-capital ; confiance medium)_
- Office address: 91 Wimpole Street, Marylebone, London W1G 0EF. _(source : Search tool summary (query 4), https://www.thelandsite.co.uk/articles/silver-oak-capital-in-the-news ; confiance medium-high)_
- Mortgage118 directory lists Silver Oak Capital (under Hackney, London) as an unverified broker with a 5/5 rating from 9 reviews. _(source : Mortgage118 broker directory, https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance medium-high (small …)_
- Trustpilot has a review page for silveroakcapital.co.uk describing the firm as a London mortgage broker: 'Silver Oak Capital specialises in real estate debt solutions.' _(source : Trustpilot UK, https://uk.trustpilot.com/review/silveroakcapital.co.uk ; confiance high)_ — « Silver Oak Capital specialises in real estate debt solutions. »
- Silver Oak Capital has a Linktree page pointing to its development finance, bridging loans and commercial mortgage broker pages. _(source : Linktree, https://linktr.ee/silveroakcapital ; confiance high)_
- An Odoo-hosted microsite exists titled 'Silver Oak Capital - Real Estate & Finance Professionals'. _(source : silveroakcapital.odoo.com - result title, https://silveroakcapital.odoo.com/ ; confiance high (title only))_ — « Silver Oak Capital - Real Estate & Finance Professionals »
- A Slideshare deck titled 'Property Development Finance in Uk, London' is associated with Silver Oak Capital. _(source : Slideshare - result title, https://www.slideshare.net/slideshow/property-development-finance-in-uk-london/282306113 ; confiance medium (surfaced fo…)_ — « Property Development Finance in Uk, London »
- LinkedIn company page exists: 'Silver Oak Capital'. Jimmy Baillie personal LinkedIn: 'Jimmy Baillie - Silver Oak Capital'. _(source : LinkedIn - result titles, https://uk.linkedin.com/company/silver-oak-capital ; confiance high)_
- Jimmy Baillie personal LinkedIn profile URL. _(source : LinkedIn - result, https://www.linkedin.com/in/jimmy-baillie-00833a50/ ; confiance high)_ — « Jimmy Baillie - Silver Oak Capital »
- Deal announcement (LinkedIn post): 'Silver Oak Capital has successfully arranged a £4,000,000 bridging loan to refinance a prime residential property in Kensington.' The post credits senior associate Connor Dooley: 'Another deal completed, driven by Connor Dooley's excellent work.' _(source : LinkedIn post surfaced via profile of 'joe berk' (uk.linkedin.com/in/joe-berk) …, https://uk.linkedin.com/in/joe-berk ; confiance medium-high (verbat…)_ — « Silver Oak Capital has successfully arranged a £4,000,000 bridging loan to refinance a prime residential property in Kensington. | Another deal completed, driven by Connor Dooley's excellent work. »
- Connor Dooley is described as a Silver Oak Capital senior associate. _(source : LinkedIn post - search tool summary, https://uk.linkedin.com/in/joe-berk ; confiance medium)_
- Staff/company directories list Silver Oak Capital: ContactOut 'Company Profile & Staff Directory' and RocketReach profile. _(source : ContactOut; RocketReach - result titles, https://contactout.com/company/Silver-Oak-Capital-17115 ; confiance high (existence onl…)_
- OWN-SITE (out of focus, for cross-reference with the £19.1m B&C article): NW London bridge case study - developer with a partly finished luxury residential scheme in North West London, ~80% complete, build overrun forced refinance; bridging loan of £19 million; terms 0.75% per month, 12-month term, max 73% LTV, 15% personal guarantee. _(source : silveroakcapital.co.uk case study (own site) - search tool summary, https://www.silveroakcapital.co.uk/case-studies/nw-london-bridge/ ; confiance medium-high (own-si…)_ — « A bridging loan of £19million GBP was required. »
- OWN-SITE (out of focus): £3.6 million bridging loan on a prime Kensington residential property, placed with a first-charge lender after two other specialist lenders withdrew over intercreditor terms; completed within four weeks; priced at 0.78% per month, BBR-linked. _(source : silveroakcapital.co.uk case study (own site) - search tool summary, https://www.silveroakcapital.co.uk/case-studies/3-6-million-bridging-loan-prime-kensington-property/ ; confiance medium-high (own-si…)_
- OWN-SITE (out of focus): £4.55 million country estate refinance at 65% LTV, 2.89% variable, 5-year term, full interest only, 0.50% bank fee. _(source : silveroakcapital.co.uk case study (own site) - search tool summary, https://www.silveroakcapital.co.uk/case-studies/country-estate-refinance/ ; confiance medium-high (own-si…)_
- OWN-SITE (out of focus): £21 million central London office purchase & upgrade financed at 68% LTV, 4.75% fixed, three-year interest-only. _(source : silveroakcapital.co.uk case study (own site) - search tool summary, https://www.silveroakcapital.co.uk/case-studies/purchase-and-upgrade-21-million-office-in-london/ ; confiance medium-high (own-si…)_
- OWN-SITE (out of focus): £4.5 million Manchester office mortgage at 65% LTV, 3.00% + Bank Base Rate, 7 years. _(source : silveroakcapital.co.uk case study (own site) - search tool summary, https://www.silveroakcapital.co.uk/case-studies/manchester-office/ ; confiance medium-high (own-si…)_
- OWN-SITE (out of focus): $10 million Miami waterfront purchase loan arranged at 70% LTV ('Miami Developer' case study). _(source : silveroakcapital.co.uk case study (own site) - search tool summary, https://www.silveroakcapital.co.uk/case-studies/miami-developer/ ; confiance medium-high (own-si…)_
- OWN-SITE (out of focus): further case-study titles surfaced - '£1.46 Million Refinance' (prime central London property), 'Residential Portfolio Refinance'; a £1 million revolving credit facility for a housebuilder was mentioned but page content was truncated (unconfirmed). _(source : silveroakcapital.co.uk case studies index (own site) - result titles + summary, https://www.silveroakcapital.co.uk/case-studies/ ; confiance medium (titles only))_
- A LinkedIn company page for Silver Oak Capital exists (surfaced in searches 4, 5 and 7; the LinkedIn-targeted search 1 did not return it). _(source : LinkedIn company page (search result listing), https://uk.linkedin.com/company/silver-oak-capital ; confiance high)_
- LinkedIn company page states the firm has relationships with 500+ lenders of several kinds. _(source : LinkedIn company page (via search summary), https://uk.linkedin.com/company/silver-oak-capital ; confiance high)_ — « 500+ different private banks, investment banks, specialist lenders & private debt funds »
- LinkedIn company page lists operating locations as UK, Western Europe, Middle East, South & West Africa. _(source : LinkedIn company page (via search summary), https://uk.linkedin.com/company/silver-oak-capital ; confiance high)_ — « Locations - UK / Western Europe / Middle East / South & West Africa »
- LinkedIn specialties list includes Monaco (no physical Monaco office is stated in any result). _(source : LinkedIn company page (via search summary, paraphrased), https://uk.linkedin.com/company/silver-oak-capital ; confiance medium)_
- Positioning: the firm says it is not a high-street mortgage broker and instead handles larger, more complex real estate transactions. _(source : LinkedIn company page (search 5 attributes this to LinkedIn; search 4 attribute…, https://uk.linkedin.com/company/silver-oak-capital ; confiance medium)_ — « does not operate as a high street mortgage broker »
- Positioning wording: offers a bespoke solution for larger, more complex deals. _(source : LinkedIn company page / firm self-description (via search summary), https://uk.linkedin.com/company/silver-oak-capital ; confiance medium)_ — « bespoke solution for larger, more complex real estate transactions »
- Trustpilot profile for silveroakcapital.co.uk exists but has no reviews: 0.0 rating, zero reviews in the last 12 months. _(source : Trustpilot UK (via search summary), https://uk.trustpilot.com/review/silveroakcapital.co.uk ; confiance high)_ — « This company hasn't received any reviews yet. »
- Trustpilot profile description fragment lists mortgages, marine & aviation finance and a locations line naming UK / Western Europe / Middle East / South Africa. _(source : Trustpilot UK company description (fragment quoted in search summary), https://uk.trustpilot.com/review/silveroakcapital.co.uk ; confiance high)_ — « Mortgages -Marine & Aviation Finance -Locations - UK / Western Europe / Middle East / South Africa »
- No Instagram profile for Silver Oak Capital surfaced in search (absence in results, not proof of non-existence). _(source : WebSearch result set (search 3) ; confiance high)_
- Linktree page exists at linktr.ee/silveroakcapital with a two-part tagline describing the firm as an independent London mortgage broker and a development finance broker. _(source : Linktree (via search summary), https://linktr.ee/silveroakcapital ; confiance high)_ — « Independent Mortgage Broker in London, UK • Trusted Development Finance Broker for Property Projects »
- Linktree lists the firm as a commercial mortgage broker, development finance broker and London-based independent mortgage broker. _(source : Linktree (via search summary, paraphrased), https://linktr.ee/silveroakcapital ; confiance medium)_
- Linktree link titles include bridging-finance and bridging-loan articles. _(source : Linktree (via search summary), https://linktr.ee/silveroakcapital ; confiance high)_ — « Mortgage Bridging Finance in London; Get Cash Fast with Bridging Loans UK - Silver Oak Capital; Trusted Development Finance Broker for Property Projects »
- Linktree links to a Medium article dated December 2025. _(source : Linktree (via search summary), https://linktr.ee/silveroakcapital ; confiance medium)_
- SlideShare deck uploaded by Silver Oak Capital: 'Property Development Finance in Uk, London'. _(source : SlideShare (search result title), https://www.slideshare.net/slideshow/property-development-finance-in-uk-london/282306113 ; confiance high)_
- SlideShare deck uploaded by Silver Oak Capital: 'Silver Oak Capital Bridging Loans UK Fast Track Your Property Goals'. _(source : SlideShare (search result title), https://www.slideshare.net/slideshow/silver-oak-capital-bridging-loans-uk-fast-track-your-property-goals/284124074 ; confiance high)_
- SlideShare deck self-description of services: commercial mortgage brokerage, property development finance, bridging loans, development finance. _(source : SlideShare deck (via search summary), https://www.slideshare.net/slideshow/property-development-finance-in-uk-london/282306113 ; confiance high)_ — « Silver Oak Capital provides expert commercial mortgage brokerage services, property development finance, bridging loans, and development finance solutions. »
- SlideShare deck selling point: access to 300+ lenders for whole-of-market advice. _(source : SlideShare deck (via search summary), https://www.slideshare.net/slideshow/property-development-finance-in-uk-london/282306113 ; confiance high)_ — « access to 300+ lenders for whole-of-market advice »
- Further SlideShare deck titles attributed to Silver Oak Capital (not opened, no URLs returned): 'Development Finance Brokers in United Kingdom', 'Property Bridging Loans in United Kingdom', and a 'Why Choose' pitch. _(source : SlideShare (via search summary) ; confiance medium)_
- Odoo-hosted mirror site exists; page title 'Silver Oak Capital - Real Estate & Finance Professionals'. _(source : silveroakcapital.odoo.com (search result title), https://silveroakcapital.odoo.com/ ; confiance high)_
- Odoo site self-description (development finance variant). _(source : silveroakcapital.odoo.com (via search summary), https://silveroakcapital.odoo.com/ ; confiance high)_ — « Our debt advisory firm specializes in providing tailored property development finance solutions »
- Odoo site self-description (bridging variant, second snippet). _(source : silveroakcapital.odoo.com (via search summary), https://silveroakcapital.odoo.com/ ; confiance high)_ — « debt advisory firm specializes in providing tailored property bridging loans »
- Odoo site presents the firm as a London debt advisory firm offering short-term bridging finance and property development finance brokerage, lists mortgage bridging loans among services, and shows a London W1G 0EF address. _(source : silveroakcapital.odoo.com (via search summary), https://silveroakcapital.odoo.com/ ; confiance medium)_ — « London W1G 0EF, UK »
- Weebly-hosted mirror site exists; page title 'Silver Oak Capital - Real Estate & Finance Professionals - Home'. _(source : silveroakcapital.weebly.com (search result title), https://silveroakcapital.weebly.com/ ; confiance high)_
- Weebly site focuses on development finance and property bridging and states the firm works with over 300 lenders on loans over £2m. _(source : silveroakcapital.weebly.com (via search summary, paraphrased), https://silveroakcapital.weebly.com/ ; confiance medium)_
- Nextdoor business page exists, titled 'Silver Oak Capital - Debt Advisory - London, England' (URL slug spells 'debit-advisory'). _(source : Nextdoor UK (search result title), https://nextdoor.co.uk/pages/silver-oak-capital-debit-advisory-london-england/ ; confiance high)_
- Nextdoor self-description calls the firm a wealth management business supporting CEOs in the UK. _(source : Nextdoor UK (via search summary), https://nextdoor.co.uk/pages/silver-oak-capital-debit-advisory-london-england/ ; confiance high)_ — « wealth management business that has supported CEO'S in the UK for a good couple of years »
- Nextdoor lists the address as 91 Wimpole Street, W1G 0EF (Marylebone, London). _(source : Nextdoor UK (via search summary), https://nextdoor.co.uk/pages/silver-oak-capital-debit-advisory-london-england/ ; confiance high)_ — « 91 Wimpole Street, W1G 0EF »
- Nextdoor lists a loan-size focus of £2m to £20m across six finance areas. _(source : Nextdoor UK (via search summary), https://nextdoor.co.uk/pages/silver-oak-capital-debit-advisory-london-england/ ; confiance high)_ — « finance of £2m to £20m across property development, bridging, prime residential, commercial, marine and aviation finance »
- GoSimples directory listing exists, titled 'Silver Oak Capital - Debt Advisory - GoSimples UK Business Listing Directory'; same Wimpole Street address and phone number as Nextdoor. _(source : GoSimples UK (search result title + summary), https://www.gosimples.com/listing/england/london-151/financial-advisors/silver-oak-capital-debit-advisory ; confiance high)_
- GoSimples self-description: real estate finance professionals specialising in £2m–£20m loans. _(source : GoSimples UK (via search summary), https://www.gosimples.com/listing/england/london-151/financial-advisors/silver-oak-capital-debit-advisory ; confiance high)_ — « Real Estate Finance professionals, specialising in loans of £2m – £20m »
- GoSimples states it checked the listing's phone number; last-checked date shown as 19 May 2026. _(source : GoSimples UK (via search summary), https://www.gosimples.com/listing/england/london-151/financial-advisors/silver-oak-capital-debit-advisory ; confiance medium)_ — « Go Simples carried out the following checks on its data »
- Nextdoor and GoSimples descriptive text is nearly identical, so they likely derive from one submission rather than being independent confirmations. _(source : Search summary observation (search 6) ; confiance medium)_
- mortgage118 listing files the firm as a mortgage broker based in Hackney with postcode W1G 0EF. _(source : mortgage118 (via search summary), https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance high)_ — « mortgage broker based in Hackney, W1G 0EF »
- mortgage118 specialisms line: Bridging, Buy-to-Let, Care Homes and 6 other areas. _(source : mortgage118 (via search summary), https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance high)_ — « specialising in Bridging, Buy-to-Let, Care Homes and 6 other areas »
- mortgage118 shows a 5/5 rating from 9 reviews, marked unverified; one review describes help arranging a bridging loan on a Central London property. _(source : mortgage118 (via search summary), https://mortgage118.com/brokers/england/london/hackney/silver-oak-capital ; confiance high)_ — « Rated 5/5 from 9 reviews »
- No SYOB listing for Silver Oak Capital surfaced in search. _(source : WebSearch result set (search 6) ; confiance high)_
- Bridging & Commercial article (circa 2020): Silver Oak Capital completed its largest ever bridging loan of £19.1m. _(source : bridgingandcommercial.co.uk (search result title), https://bridgingandcommercial.co.uk/silver-oak-capital-completes-its-largest-ever-bridging-loan-of-pound-19-1m ; confiance high)_ — « Silver Oak Capital completes its largest ever bridging loan of £19.1m »
- Bridging & Commercial article: firm to grow team after increased volume in the £2m-20m space. _(source : bridgingandcommercial.co.uk (search result title), https://bridgingandcommercial.co.uk/silver-oak-capital-to-grow-team-following-increased-volume-in-pound-2m-20m-space ; confiance high)_ — « Silver Oak Capital to grow team following increased volume in £2m-20m space »
- 2020 trade coverage describes a network of more than 300 lenders, loans between £2m and £20m, and coverage of the UK, western Europe, the Middle East and southern Africa; describes the firm as specialists in the large loan market. _(source : bridgingandcommercial.co.uk (via search summary), https://bridgingandcommercial.co.uk/silver-oak-capital-completes-its-largest-ever-bridging-loan-of-pound-19-1m ; confiance medium)_ — « specialists in the large loan market »
- Jimmy Baillie is managing director and founded Silver Oak Capital in 2019; a founder profile states he graduated from the University of Cape Town in 2010 (profile source not identified by the search summary). _(source : Search summary (search 7), source page unspecified ; confiance medium)_
- Spear's 500 adviser profile pages exist for Jimmy Baillie (two URLs); no content was extracted from snippets. _(source : Spear's 500 (search result listing), https://spears500.com/adviser/22953/jimmy-baillie ; confiance medium)_
- Second Spear's 500 adviser URL for Jimmy Baillie. _(source : Spear's 500 (search result listing), https://www.spears500.com/adviser/6519/jimmy-baillie ; confiance medium)_
- A LinkedIn profile for 'Joe Berk' (debt advisor, real estate debt structuring across UK and Europe, bridging and development finance) appeared in results, but the snippet does not name Silver Oak Capital; connection unconfirmed. _(source : LinkedIn personal profile (via search summary), https://uk.linkedin.com/in/joe-berk ; confiance low)_
- Offshore deal experience is stated as France, Spain, Dubai & South Africa (attributed to 'the firm'; search summary did not say which page). _(source : Firm self-description, page unspecified (search 7 summary) ; confiance low)_ — « France, Spain, Dubai & South Africa »
- No search result confirms physical offices in Monaco, Dubai or Cape Town: Monaco appears only as a LinkedIn specialty, Dubai only as offshore deal experience, Cape Town only as the founder's university; London (W1G 0EF) is the only address given. _(source : Cross-source observation (searches 1-7) ; confiance medium)_
- Services list attributed to the firm: development finance, residential and commercial mortgages and bridging loans, private banking mortgages and complex/special situation lending (page unspecified by summary). _(source : Firm self-description, page unspecified (search 7 summary) ; confiance low)_ — « development finance, residential and commercial mortgages and bridging loans, private banking mortgages and complex/special situation lending »
- OWN-SITE CROSS-REFERENCE (outside focus): silveroakcapital.co.uk cites a network of over 800 lenders and a focus on loans over £500,000; its lenders page says it generally focuses on deals above £500,000; a NW London case study quotes 'Rate 0.75% per month Term 12 Months Max 73% LTV 15% Personal Guarantee'; the 'approvals in 5–14 days' claim appears only in the firm's own marketing copy. _(source : silveroakcapital.co.uk (via search summaries 5 and 7), https://www.silveroakcapital.co.uk/ ; confiance medium)_
- CONTRADICTION - lender count: 300+ (SlideShare deck, Weebly mirror, 2020 trade press) vs 500+ (LinkedIn) vs over 800 (current own site). Older mirrors/press likely outdated. _(source : Cross-source comparison (searches 4, 5, 7) ; confiance high)_
- CONTRADICTION - loan size: £2m–£20m (Weebly, Nextdoor, GoSimples, 2020 press) vs over £500,000 (current own site). _(source : Cross-source comparison (searches 5, 6, 7) ; confiance high)_
- CONTRADICTION - location: Nextdoor and GoSimples give 91 Wimpole Street (Marylebone); mortgage118 files the firm under Hackney, yet all share postcode W1G 0EF. _(source : Cross-source comparison (search 6) ; confiance high)_
- CONTRADICTION - self-description: 'wealth management business' (Nextdoor) vs 'Real Estate Finance professionals' (GoSimples) vs 'mortgage broker' (mortgage118) vs 'debt advisory firm' (Odoo) vs 'Independent Mortgage Broker' (Linktree). _(source : Cross-source comparison (searches 1, 3, 5, 6) ; confiance high)_
- CONTRADICTION (minor) - Africa coverage wording: 'South Africa' (Trustpilot) vs 'South & West Africa' (LinkedIn) vs 'southern Africa' (2020 press). _(source : Cross-source comparison (searches 2, 7) ; confiance medium)_

## 9. Ce que Silver Oak couvre et que le site ARASTE ne couvre pas encore

**État du site ARASTE.** Six expertises (financement relais, financements complexes, refinancement, acquisition immobilière, promotion immobilière, dette privée), une page Partenaires pour les apporteurs et conseils indépendants, six repères pédagogiques, une fiche d'opération en quatre étapes, quatre implantations (Andorre, Londres, Monaco, Émirats arabes unis). Le gabarit d'une page d'expertise (besoin, approche, pièces utiles, limites, questions fréquentes) correspond déjà à la structure des pages produits de Silver Oak : la reprise consiste à élargir l'offre, pas à changer de forme.

**Ce que Silver Oak couvre et que le site ARASTE ne nomme pas encore.**

| Famille Silver Oak | Produits | Correspondance ARASTE proposée |
| --- | --- | --- |
| Relais : enchères, achat sous valeur de marché, actifs en difficulté, rénovation et transformation, sortie de promotion, foncier avec permis, succession | 8 pages | Sous-expertises de la famille « Financement relais » (hub existant) : *Financement d'acquisitions aux enchères*, *Acquisitions sous la valeur de marché*, *Actifs en difficulté*, *Rénovation lourde et transformation*, *Sortie de promotion*, *Foncier avec autorisation d'urbanisme*, *Financement successoral* |
| Promotion : senior, senior étendu, mezzanine, whole loan, primo-promoteur | 5 pages | Sous-expertises de « Promotion immobilière » : *Dette senior et senior étendue*, *Mezzanine et dette junior*, *Financement unitranche*, *Premier programme* |
| Commercial et locatif : commercial, mixte, hôtellerie, locatif, colocations, portefeuilles | 6 pages | Famille « Investissement immobilier » (hub : acquisition immobilière) : *Immobilier commercial et mixte*, *Hôtellerie*, *Portefeuilles locatifs*, *Résidences partagées et colocations* |
| International et structures : non-résidents, international, structures offshore | 3 pages | Sous-expertises de « Financements complexes » : *Emprunteurs non résidents*, *Immobilier à l'international*, *Structures de détention internationales* |
| Résidentiel de prestige : prime, prime Londres, banque privée | 3 pages | Nouvelle famille « Résidentiel de prestige » (une page hub), à cadrer sur l'investissement et les structures de détention : ARASTE n'intervient ni en crédit à la consommation ni pour une résidence principale |
| Marine et aviation | 8 pages | Nouvelle famille « Actifs d'exception » : *Yachts et superyachts* (achat, construction, crédit-bail), *Aviation privée* (achat, relais, dette senior) |
| Patrimoine : lombard, titres concentrés, actifs numériques, art | 5 pages | Sous-expertises de « Dette privée et patrimoine » : *Crédit lombard et prêts sur titres*, *Actifs numériques*, *Œuvres d'art et collections* ; à conditionner à la validation réglementaire pays par pays |
| Refinancement : dégagement de fonds propres, second rang | sous-rubriques | Sous-expertises de « Refinancement » : *Dégagement de fonds propres sur actif détenu*, *Dette de second rang* |
| Prêteurs, apporteurs | 2 pages | Page Partenaires existante : y ajouter la logique « conditions indicatives puis mise en relation directe », les points d'étape et l'engagement de non-contournement, et une page « Prêteurs » expliquant l'indépendance et le mode de rémunération, sans nombre de prêteurs |
| Outils : calculateur, scorecard | 2 outils | Non repris en l'état (affichent des chiffres et des nombres de prêteurs) ; la fiche d'opération en quatre étapes joue déjà le rôle de qualification |
| FAQ transversale, études de cas, blog | 1 + 23 + 34 pages | La FAQ par expertise existe ; les repères peuvent être étendus (enchères, sortie de promotion, colocations, non-résidents, yachts, aviation) ; pas d'études de cas sans opérations validées d'ARASTE |

Soit huit familles et vingt-six expertises nouvelles (26 pages françaises et 26 anglaises), détaillées avec clés, adresses et sources dans `docs/references/silver-oak/architecture.json` lorsque la décision de périmètre sera prise.

**Décisions à prendre avant la rédaction.**

1. Périmètre réel d'ARASTE : chaque famille ci-dessus doit correspondre à une activité que le cabinet exerce ou exercera via ses partenaires ; une expertise non exercée se désactive individuellement dans la configuration, mais il est préférable de ne pas la rédiger.
2. Clientèle privée : Silver Oak sert des particuliers (résidence principale, locatif de particulier, succession) sous régime réglementé britannique. Le brief ARASTE exclut le crédit à la consommation et la résidence principale ; les pages résidentielles et successorales doivent être réécrites pour des structures et des investisseurs, ou écartées.
3. Chiffres : aucune donnée chiffrée de Silver Oak ne passe dans les pages ARASTE ; les ordres de grandeur, le cas échéant, seront ceux du cabinet, validés.
4. Pays : les pages internationales doivent partir des implantations d'ARASTE (Andorre, Londres, Monaco, Émirats) et non des marchés de Silver Oak (Royaume-Uni, Europe de l'Ouest, Moyen-Orient, États-Unis, Afrique australe).

## 10. Ce qui reste à récupérer

**Limites de la récolte.** Aucune page n'a été lue en entier : les fiches reposent sur les fragments indexés. Manquent donc, pour la plupart des pages, le titre principal exact (H1), la méta-description, les intertitres, le texte des boutons et les formulaires. Les pages « Lenders », « Western Europe », « Buy-to-Let Mortgages » et « Lender Calculator » n'ont pas été remontées par les moteurs et ne sont connues que par des pages voisines.

**Pages signalées mais jamais vues.** Pages « Middle East », « United States », « United Kingdom » du menu international ; pages « Holiday Lets », « Main home mortgages », « Bridge to Purchase », « Bridge to Sell », « Equity Release », « Second Charge » (sous-rubriques de « Types of Borrowing ») ; page équipe détaillée, carrières, politique de confidentialité, politique de cookies ; détail des entrées du « Lender Calculator » et du « Developer Scorecard » ; catégories et derniers articles du blog (un article « Why 70% of London Development Finance Deals Get Rejected » et un article Medium de décembre 2025 ont été aperçus sans être extraits).

**Vérifications à faire directement.** Registre des sociétés (numéro 08551479 : nom exact, date, dirigeants, siège), registre de la FCA (statut, numéro, éventuel représentant désigné), adhésions professionnelles, existence de bureaux hors Londres, honoraires en vigueur.

**Comment obtenir le reste.**

1. Autoriser l'hôte `www.silveroakcapital.co.uk` dans les paramètres réseau de l'environnement de travail (niveau d'accès plus large, ou domaine ajouté à la liste autorisée) : une extraction complète et exacte de chaque page devient alors possible en une passe.
2. Ou fournir une exportation du site (WordPress : outil d'exportation XML, ou copie du dossier `wp-content/uploads` et des pages) ; le script d'assemblage pourra être adapté pour lire ces fichiers.
3. Ou coller le texte des pages jugées prioritaires (produits et FAQ) dans la conversation.

Les passes suivantes (études de cas, articles, pages manquantes) complètent `raw/` ; relancer `python3 -I docs/references/silver-oak/assemble.py` régénère ce document.

Pages recensées mais non extraites (aucune recherche dédiée n'a encore pu être effectuée) :

- <https://www.silveroakcapital.co.uk/case-studies/800k-bridging-loan-refinance/>
- <https://www.silveroakcapital.co.uk/case-studies/bridging-for-a-retail-purchase-in-liverpool/>
- <https://www.silveroakcapital.co.uk/case-studies/bridging-villa-cap-ferrat/>
- <https://www.silveroakcapital.co.uk/case-studies/finance-for-100-senior-housing-development-in-kent/>
- <https://www.silveroakcapital.co.uk/case-studies/manchester-office/>
- <https://www.silveroakcapital.co.uk/case-studies/pbsa/>
- <https://www.silveroakcapital.co.uk/case-studies/g650/>
- <https://www.silveroakcapital.co.uk/case-studies/heesen-yacht-finance/>
- <https://www.silveroakcapital.co.uk/case-studies/aircraft-loan-falcon-900/>
- <https://www.silveroakcapital.co.uk/case-studies/yacht-finance-calculator/>
- <https://www.silveroakcapital.co.uk/case-studies/top-aviation-firms/>
- <https://www.silveroakcapital.co.uk/case-studies/bvi-trust-refinance/>
- <https://www.silveroakcapital.co.uk/case-studies/1-46-million-refinance-prime-central-london-property/>
- <https://www.silveroakcapital.co.uk/case-studies/silver-oak-capital-added-to-spears-500-list-for-2022/>
- <https://www.silveroakcapital.co.uk/case-studies/miami-developer/>
- <https://www.silveroakcapital.co.uk/case-studies/purchase-and-upgrade-21-million-office-in-london/>
- <https://www.silveroakcapital.co.uk/case-studies/notting-hill-large-residential-mortgage/>
- <https://www.silveroakcapital.co.uk/case-studies/mayfair-self-employed-equity-release/>
- <https://www.silveroakcapital.co.uk/case-studies/country-estate-refinance/>
- <https://www.silveroakcapital.co.uk/blogs/>
- <https://www.silveroakcapital.co.uk/common-uses-for-property-bridging-loans-in-the-uk/>
- <https://www.silveroakcapital.co.uk/how-does-a-bridge-loan-work-for-developers/>
- <https://www.silveroakcapital.co.uk/regulating-bridging-loans-through-fca-rules/>
- <https://www.silveroakcapital.co.uk/what-are-bridging-loans-and-how-do-they-work/>
- <https://www.silveroakcapital.co.uk/how-to-use-a-bridging-loan-when-youre-stuck-in-a-property-chain/>
- <https://www.silveroakcapital.co.uk/property-bridging-finance-for-uk-high-net-worth-individuals/>
- <https://www.silveroakcapital.co.uk/how-does-a-bridging-loan-work/>
- <https://www.silveroakcapital.co.uk/why-are-property-bridging-loans-popular-in-the-uk/>
- <https://www.silveroakcapital.co.uk/importance-of-bridging-loans-for-property-development/>
- <https://www.silveroakcapital.co.uk/different-types-of-interest-options-with-bridging-loans/>
- <https://www.silveroakcapital.co.uk/what-is-smart-financing-innovative-funding-options-for-todays-investors/>
- <https://www.silveroakcapital.co.uk/how-can-offshore-borrowers-secure-fast-uk-property-development-finance-and-bridging-loans/>
- <https://www.silveroakcapital.co.uk/your-trusted-local-finance-brokers-for-smart-lending-solutions/>
- <https://www.silveroakcapital.co.uk/different-ways-to-add-value-to-the-property-before-selling/>
- <https://www.silveroakcapital.co.uk/development-finance-ltv-ltc-and-ltgdv-explained-how-lenders-decide-what-you-can-borrow/>
- <https://www.silveroakcapital.co.uk/development-finance-requirements-in-the-uk-explained/>
- <https://www.silveroakcapital.co.uk/top-mistakes-to-avoid-when-applying-for-property-development-lending/>
- <https://www.silveroakcapital.co.uk/how-does-property-development-finance-in-scotland/>
- <https://www.silveroakcapital.co.uk/how-does-property-development-finance-work-a-step-by-step-guide/>
- <https://www.silveroakcapital.co.uk/different-ways-to-finance-new-build-homes-in-the-uk/>
- <https://www.silveroakcapital.co.uk/understanding-short-term-property-funding-for-uk-real-estate/>
- <https://www.silveroakcapital.co.uk/what-you-need-to-know-about-high-net-worth-property-funding-in-the-uk/>
- <https://www.silveroakcapital.co.uk/impact-of-inflation-and-interest-rates-on-uk-commercial-property/>
- <https://www.silveroakcapital.co.uk/find-the-perfect-mortgage-with-a-specialist-broker/>
- <https://www.silveroakcapital.co.uk/secure-the-best-business-loan-with-expert-brokerage-services/>
- <https://www.silveroakcapital.co.uk/how-do-the-rates-for-commercial-mortgages-differ-from-residential-mortgages/>
- <https://www.silveroakcapital.co.uk/different-ways-to-grow-and-develop-property-value/>
- <https://www.silveroakcapital.co.uk/which-mortgage-company-is-right-for-you/>
- <https://www.silveroakcapital.co.uk/how-do-shared-ownership-mortgage-broker-work/>
- <https://www.silveroakcapital.co.uk/how-much-does-a-bridging-loan-cost/>
- <https://www.silveroakcapital.co.uk/selecting-the-ideal-property-finance-specialist-for-successful-developments/>
- <https://www.silveroakcapital.co.uk/stamp-duty-changes-in-the-uk-from-april-2025/>
- <https://www.silveroakcapital.co.uk/how-london-property-investment-advisors-help-maximise-roi/>
