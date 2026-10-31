<?php
/**
 * Réception de la fiche d'opération (hébergement statique).
 * Réponses identiques à la route Node : {status: "sent" | "demo"} ou
 * {status: "error", code, fields?}. Le contenu n'est jamais journalisé.
 */
declare(strict_types=1);
require __DIR__ . '/lib.php';

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method !== 'POST') {
    araste_error(405, 'method-not-allowed', [], ['Allow' => 'POST']);
}
araste_require_same_origin();

$contentType = $_SERVER['CONTENT_TYPE'] ?? ($_SERVER['HTTP_CONTENT_TYPE'] ?? '');
if (stripos($contentType, 'application/json') === false) {
    araste_error(415, 'unsupported');
}
$declared = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($declared > ARASTE_BODY_LIMIT) {
    araste_error(413, 'too-large');
}
$raw = file_get_contents('php://input', false, null, 0, ARASTE_BODY_LIMIT + 1);
if ($raw === false) {
    araste_error(400, 'invalid');
}
if (strlen($raw) > ARASTE_BODY_LIMIT) {
    araste_error(413, 'too-large');
}
$input = json_decode($raw, true);
if (!is_array($input)) {
    araste_error(400, 'invalid');
}

$labels = araste_labels();
$enums = $labels['enums'] ?? [];
$limits = $labels['limits'] ?? [];
if ($enums === [] || $limits === []) {
    // labels.json absent : le relais n'est pas installé correctement.
    araste_error(500, 'server');
}

$locale = in_array($input['locale'] ?? '', ['fr', 'en'], true) ? $input['locale'] : null;
$token = is_string($input['token'] ?? null) ? $input['token'] : '';
$idempotencyKey = is_string($input['idempotencyKey'] ?? null) ? $input['idempotencyKey'] : '';
$website = is_string($input['website'] ?? null) ? $input['website'] : '';
if ($locale === null || !preg_match('/^[A-Za-z0-9_-]{8,64}$/', $idempotencyKey)) {
    araste_error(400, 'invalid');
}
if ($token === '') {
    araste_error(400, 'token');
}

// Deux entrées : le premier échange (kind: "brief") et la fiche d'opération.
$brief = ($input['kind'] ?? null) === 'brief';
[$fields, $errors] = $brief ? araste_validate_brief($input, $limits) : araste_validate($input, $enums, $limits);
if ($errors !== []) {
    araste_error(400, 'invalid', ['fields' => $errors]);
}

// Pot de miel rempli : réponse neutre, rien n'est envoyé ni compté.
if (trim($website) !== '') {
    araste_json(200, ['status' => 'demo']);
}

if (araste_verify_token($token) !== 'ok') {
    araste_error(400, 'token');
}

$key = araste_client_key();
$retry = araste_rate_limited($key);
if ($retry > 0) {
    araste_error(429, 'rate-limited', [], ['Retry-After' => (string) $retry]);
}
$claim = araste_claim_idempotency($key, $idempotencyKey);
if ($claim === null) {
    araste_error(409, 'duplicate');
}

$config = araste_config();
if (trim((string) $config['to']) === '') {
    // Relais non configuré : le formulaire l'annonce, aucun faux succès.
    araste_json(200, ['status' => 'demo']);
}

$sheet = $brief ? araste_brief_sheet($fields, $locale) : araste_sheet($fields, $locale);
if (!araste_send($fields, $locale, $sheet)) {
    @unlink($claim);
    error_log('[araste-contact] mail() a échoué (aucun contenu journalisé)');
    araste_error(502, 'provider');
}
// Accusé de réception au demandeur, après l'envoi au cabinet ; non bloquant.
araste_send_acknowledgement($fields, $locale);
araste_json(200, ['status' => 'sent']);
