<?php
/** Jeton anti-automatisation, émis au chargement de la page de contact (même origine). */
declare(strict_types=1);
require __DIR__ . '/lib.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'GET') {
    araste_error(405, 'method-not-allowed', [], ['Allow' => 'GET']);
}
araste_require_same_origin();
araste_json(200, ['token' => araste_create_token()]);
