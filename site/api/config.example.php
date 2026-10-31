<?php
/**
 * ARASTE CAPITAL — configuration du relais PHP du formulaire (Hostinger).
 *
 * 1. Copier ce fichier en `config.php` dans le même dossier (public_html/api/).
 * 2. Renseigner les valeurs ci-dessous.
 * 3. Ne jamais publier ce fichier ailleurs : il est protégé par le `.htaccess`
 *    du dossier api/ (accès web refusé).
 */
return [
    // Boîte qui reçoit les fiches d'opération (la vôtre).
    'to' => '',

    // Adresse d'expédition : une boîte e-mail créée sur le domaine chez
    // Hostinger (ex. site@votre-domaine.com), sinon les messages partent en
    // indésirables ou sont refusés.
    'from' => '',

    // Secret de signature du jeton anti-automatisation, 32 caractères minimum
    // (ex. résultat de `openssl rand -hex 32`). Si vide, un secret est généré
    // et conservé dans api/_data/secret.txt.
    'secret' => '',

    // Préfixe de l'objet des messages reçus.
    'subjectPrefix' => '[ARASTE CAPITAL]',

    // Accusé de réception envoyé au demandeur depuis l'adresse `from`
    // (texte fixe, sans reprise de sa saisie). Mettre false pour le désactiver.
    'acknowledge' => true,
];
