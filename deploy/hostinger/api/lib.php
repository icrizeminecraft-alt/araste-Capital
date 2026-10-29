<?php
/**
 * ARASTE CAPITAL — relais PHP du formulaire « Présenter une opération »
 * pour un hébergement statique (Hostinger, LiteSpeed/Apache + PHP).
 *
 * Reproduit les protections de la route Node (src/app/api/contact/route.ts) :
 * jeton signé, pot de miel silencieux, limitation de débit, idempotence,
 * validation stricte, aucun journal du contenu. Envoi par mail() en texte et
 * HTML, dans la langue de la demande, avec les libellés du site (labels.json
 * généré à la construction). Le PDF de la fiche n'est produit que par le
 * déploiement Node.
 */

declare(strict_types=1);

const ARASTE_BODY_LIMIT = 24 * 1024;
const ARASTE_TOKEN_MIN_AGE_MS = 3000;
const ARASTE_TOKEN_MAX_AGE_MS = 24 * 60 * 60 * 1000;
const ARASTE_RATE_MAX = 5;
const ARASTE_RATE_WINDOW_S = 600;
const ARASTE_IDEMPOTENCY_TTL_S = 600;

/** Configuration : api/config.php (copie renseignée de config.example.php). */
function araste_config(): array
{
    static $config = null;
    if ($config !== null) {
        return $config;
    }
    $defaults = ['to' => '', 'from' => '', 'secret' => '', 'subjectPrefix' => '[ARASTE CAPITAL]'];
    $file = __DIR__ . '/config.php';
    if (is_file($file)) {
        $loaded = include $file;
        if (is_array($loaded)) {
            $defaults = array_merge($defaults, $loaded);
        }
    }
    $config = $defaults;
    return $config;
}

function araste_json(int $status, array $payload, array $headers = []): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    header('X-Content-Type-Options: nosniff');
    foreach ($headers as $name => $value) {
        header($name . ': ' . $value);
    }
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function araste_error(int $status, string $code, array $extra = [], array $headers = []): void
{
    araste_json($status, array_merge(['status' => 'error', 'code' => $code], $extra), $headers);
}

/** Même origine uniquement : le navigateur déclare la provenance de la requête. */
function araste_require_same_origin(): void
{
    $fetchSite = $_SERVER['HTTP_SEC_FETCH_SITE'] ?? '';
    if ($fetchSite !== '' && $fetchSite !== 'same-origin' && $fetchSite !== 'none') {
        araste_error(403, 'forbidden');
    }
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    if ($origin !== '') {
        $host = parse_url($origin, PHP_URL_HOST);
        $self = strtolower((string) preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
        if (!is_string($host) || strtolower($host) !== $self) {
            araste_error(403, 'forbidden');
        }
    }
}

/** Secret de signature : configuré, sinon dérivé du serveur (suffisant pour une seule instance). */
function araste_secret(): string
{
    $configured = (string) (araste_config()['secret'] ?? '');
    if (strlen($configured) >= 32) {
        return $configured;
    }
    $file = araste_data_dir() . '/secret.txt';
    if (is_file($file)) {
        $stored = trim((string) file_get_contents($file));
        if (strlen($stored) >= 32) {
            return $stored;
        }
    }
    $generated = bin2hex(random_bytes(32));
    @file_put_contents($file, $generated, LOCK_EX);
    return $generated;
}

function araste_data_dir(): string
{
    $dir = __DIR__ . '/_data';
    if (!is_dir($dir)) {
        @mkdir($dir, 0750, true);
        @file_put_contents($dir . '/.htaccess', "Require all denied\n");
        @file_put_contents($dir . '/index.html', '');
    }
    return $dir;
}

/** Jeton « <horodatage ms>.<HMAC-SHA256 hex> », identique à celui de la route Node. */
function araste_create_token(): string
{
    $ts = (string) (int) floor(microtime(true) * 1000);
    return $ts . '.' . hash_hmac('sha256', $ts, araste_secret());
}

function araste_verify_token(string $token): string
{
    $parts = explode('.', $token);
    if (count($parts) !== 2 || !preg_match('/^\d{1,16}$/', $parts[0]) || !preg_match('/^[0-9a-f]{64}$/', $parts[1])) {
        return 'malformed';
    }
    $expected = hash_hmac('sha256', $parts[0], araste_secret());
    if (!hash_equals($expected, $parts[1])) {
        return 'signature';
    }
    $age = (int) floor(microtime(true) * 1000) - (int) $parts[0];
    if ($age < ARASTE_TOKEN_MIN_AGE_MS) {
        return 'too-fast';
    }
    if ($age > ARASTE_TOKEN_MAX_AGE_MS) {
        return 'expired';
    }
    return 'ok';
}

/** Empreinte salée de l'adresse : l'adresse elle-même n'est jamais écrite. */
function araste_client_key(): string
{
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    return hash('sha256', $ip . '|' . araste_secret());
}

/** Fenêtre glissante par fichier : au plus ARASTE_RATE_MAX envois par fenêtre. */
function araste_rate_limited(string $key): int
{
    $file = araste_data_dir() . '/rl_' . substr($key, 0, 40) . '.json';
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            $hits = array_values(array_filter($decoded, fn($t) => is_int($t) && $t > $now - ARASTE_RATE_WINDOW_S));
        }
    }
    if (count($hits) >= ARASTE_RATE_MAX) {
        return max(1, min($hits) + ARASTE_RATE_WINDOW_S - $now);
    }
    $hits[] = $now;
    @file_put_contents($file, json_encode($hits), LOCK_EX);
    araste_gc();
    return 0;
}

/** Clé d'idempotence : un même envoi n'est traité qu'une fois par fenêtre. Retourne le chemin à libérer en cas d'échec. */
function araste_claim_idempotency(string $key, string $idempotencyKey): ?string
{
    $file = araste_data_dir() . '/idem_' . substr(hash('sha256', $key . '|' . $idempotencyKey), 0, 40);
    if (is_file($file) && filemtime($file) > time() - ARASTE_IDEMPOTENCY_TTL_S) {
        return null;
    }
    @file_put_contents($file, (string) time(), LOCK_EX);
    return $file;
}

/** Nettoyage occasionnel des fichiers expirés. */
function araste_gc(): void
{
    if (random_int(1, 25) !== 1) {
        return;
    }
    $cutoff = time() - max(ARASTE_RATE_WINDOW_S, ARASTE_IDEMPOTENCY_TTL_S);
    foreach (glob(araste_data_dir() . '/{rl_,idem_}*', GLOB_BRACE) ?: [] as $file) {
        if (@filemtime($file) < $cutoff) {
            @unlink($file);
        }
    }
}

function araste_labels(): array
{
    static $labels = null;
    if ($labels === null) {
        $decoded = json_decode((string) @file_get_contents(__DIR__ . '/labels.json'), true);
        $labels = is_array($decoded) ? $decoded : [];
    }
    return $labels;
}

/** Caractères de contrôle neutralisés (anti-injection d'en-têtes), espaces normalisés. */
function araste_line(string $value): string
{
    return trim((string) preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value));
}

function araste_multiline(string $value): string
{
    return trim((string) preg_replace('/[^\P{Cc}\n]+/u', ' ', $value));
}

/**
 * Validation des champs : mêmes règles que src/lib/contact/schema.ts.
 * Retourne [champs nettoyés, erreurs par champ].
 */
function araste_validate(array $input, array $enums, array $limits): array
{
    $errors = [];
    $out = [];
    $str = fn(string $k): string => is_string($input[$k] ?? null) ? $input[$k] : '';
    $required = function (string $k, string $v) use (&$errors): void {
        if ($v === '') {
            $errors[$k] = 'required';
        }
    };
    $text = function (string $k, int $max, bool $req) use (&$errors, &$out, $str, $required) {
        $v = araste_line($str($k));
        if ($req) {
            $required($k, $v);
        }
        if ($v !== '' && mb_strlen($v) > $max) {
            $errors[$k] = 'tooLong';
        }
        $out[$k] = $v;
    };
    $numeric = function (string $k, bool $req) use (&$errors, &$out, $str, $required, $limits) {
        $v = araste_line($str($k));
        if ($req) {
            $required($k, $v);
        }
        if ($v !== '' && mb_strlen($v) > $limits['amount']) {
            $errors[$k] = 'tooLong';
        } elseif ($v !== '' && !preg_match("/^\d[\d\s.,'’]*$/u", $v)) {
            $errors[$k] = 'amount';
        }
        $out[$k] = $v;
    };
    $enum = function (string $k, array $allowed, bool $req) use (&$errors, &$out, $str) {
        $v = $str($k);
        if ($v === '' && $req) {
            $errors[$k] = 'required';
        } elseif ($v !== '' && !in_array($v, $allowed, true)) {
            $errors[$k] = 'required';
        }
        $out[$k] = $v;
    };
    $multi = function (string $k, int $min, int $max, bool $req) use (&$errors, &$out, $str) {
        $v = araste_multiline($str($k));
        if ($req && $v === '') {
            $errors[$k] = 'required';
        } elseif ($v !== '' && mb_strlen($v) < $min) {
            $errors[$k] = 'tooShort';
        } elseif (mb_strlen($v) > $max) {
            $errors[$k] = 'tooLong';
        }
        $out[$k] = $v;
    };

    // Étape 1 : l'opération
    $enum('financingType', $enums['financingTypes'], true);
    $enum('purpose', $enums['purposes'], true);
    $numeric('amount', true);
    $enum('currency', $enums['currencies'], true);
    $text('country', $limits['country'], true);
    $enum('timeline', $enums['timelines'], true);
    $multi('description', $limits['descriptionMin'], $limits['description'], true);
    // Étape 2 : l'actif
    $enum('assetType', $enums['assetTypes'], true);
    $text('assetLocation', $limits['short'], true);
    $numeric('assetValue', false);
    $enum('valueBasis', $enums['valueBases'], false);
    $numeric('annualIncome', false);
    $enum('assetStatus', $enums['assetStatuses'], false);
    // Étape 3 : structure et sortie
    $enum('borrowerType', $enums['borrowerTypes'], true);
    $text('borrowerCountry', $limits['country'], true);
    $numeric('equity', false);
    $numeric('existingDebt', false);
    $text('existingDebtMaturity', $limits['short'], false);
    $multi('securityOffered', 0, $limits['medium'], false);
    $enum('exitType', $enums['exitTypes'], true);
    $text('exitTiming', $limits['short'], false);
    // Étape 4 : vous
    $enum('role', $enums['roles'], true);
    $text('name', $limits['name'], true);
    $text('company', $limits['company'], true);
    $email = araste_line($str('email'));
    if ($email === '') {
        $errors['email'] = 'required';
    } elseif (mb_strlen($email) > $limits['email'] || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'email';
    }
    $out['email'] = $email;
    $phone = araste_line($str('phone'));
    if ($phone !== '' && (mb_strlen($phone) > $limits['phone'] || !preg_match('/^\+?[0-9][0-9 ().-]{5,}$/', $phone))) {
        $errors['phone'] = 'phone';
    }
    $out['phone'] = $phone;
    $enum('channel', $enums['channels'], true);
    if (($out['channel'] ?? '') === 'phone' && $phone === '' && !isset($errors['phone'])) {
        $errors['phone'] = 'phoneRequired';
    }
    $multi('notes', 0, $limits['medium'], false);

    return [$out, $errors];
}

/** Fiche en sections, avec les libellés du site dans la langue demandée. */
function araste_sheet(array $fields, string $locale): array
{
    $labels = araste_labels();
    $l = $labels[$locale] ?? $labels['fr'] ?? [];
    $f = $l['fields'] ?? [];
    $label = fn(string $k): string => (string) ($f[$k]['label'] ?? $k);
    $option = function (string $k, string $v) use ($f): string {
        if ($v === '') {
            return '';
        }
        return (string) ($f[$k]['options'][$v] ?? $v);
    };
    $money = fn(string $v): string => $v === '' ? '' : $v . ' ' . ($fields['currency'] ?? '');
    $financing = $fields['financingType'] === 'other'
        ? (string) ($f['financingType']['other'] ?? 'other')
        : (string) (($l['financing'][$fields['financingType']] ?? $fields['financingType']));
    $steps = $l['steps'] ?? ['1', '2', '3', '4'];
    $sections = [
        [$steps[0] ?? '', [
            [$label('financingType'), $financing],
            [$label('purpose'), $option('purpose', $fields['purpose'])],
            [$label('amount'), $money($fields['amount'])],
            [$label('country'), $fields['country']],
            [$label('timeline'), $option('timeline', $fields['timeline'])],
            [$label('description'), $fields['description']],
        ]],
        [$steps[1] ?? '', [
            [$label('assetType'), $option('assetType', $fields['assetType'])],
            [$label('assetLocation'), $fields['assetLocation']],
            [$label('assetValue'), $money($fields['assetValue'])],
            [$label('valueBasis'), $option('valueBasis', $fields['valueBasis'])],
            [$label('annualIncome'), $money($fields['annualIncome'])],
            [$label('assetStatus'), $option('assetStatus', $fields['assetStatus'])],
        ]],
        [$steps[2] ?? '', [
            [$label('borrowerType'), $option('borrowerType', $fields['borrowerType'])],
            [$label('borrowerCountry'), $fields['borrowerCountry']],
            [$label('equity'), $money($fields['equity'])],
            [$label('existingDebt'), $money($fields['existingDebt'])],
            [$label('existingDebtMaturity'), $fields['existingDebtMaturity']],
            [$label('securityOffered'), $fields['securityOffered']],
            [$label('exitType'), $option('exitType', $fields['exitType'])],
            [$label('exitTiming'), $fields['exitTiming']],
        ]],
        [$steps[3] ?? '', [
            [$label('role'), $option('role', $fields['role'])],
            [$label('name'), $fields['name']],
            [$label('company'), $fields['company']],
            [$label('email'), $fields['email']],
            [$label('phone'), $fields['phone']],
            [$label('channel'), $option('channel', $fields['channel'])],
            [$label('notes'), $fields['notes']],
        ]],
    ];
    $received = gmdate('Y-m-d H:i');
    return [
        'title' => (string) ($l['sheet']['title'] ?? 'Fiche d\'opération'),
        'reference' => (string) ($l['sheet']['reference'] ?? 'Fiche') . ' ' . $received . ' UTC',
        'subtitle' => implode(' · ', array_filter([$financing, $money($fields['amount']), $fields['country'], $option('role', $fields['role'])])),
        'footer' => (string) ($l['sheet']['footer'] ?? ''),
        'sections' => $sections,
    ];
}

function araste_render_text(array $sheet): string
{
    $lines = [$sheet['title'], $sheet['reference'], $sheet['subtitle'], ''];
    foreach ($sheet['sections'] as $i => [$title, $rows]) {
        $lines[] = sprintf('%02d. %s', $i + 1, $title);
        foreach ($rows as [$label, $value]) {
            $lines[] = '  ' . $label . ' : ' . ($value === '' ? '—' : $value);
        }
        $lines[] = '';
    }
    $lines[] = $sheet['footer'];
    return implode("\n", $lines);
}

function araste_render_html(array $sheet, string $locale): string
{
    $e = fn(string $s): string => htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $html = '<!doctype html><html lang="' . $e($locale) . '"><body style="margin:0;background:#fbfbfc;padding:24px">'
        . '<div style="max-width:680px;margin:0 auto;background:#ffffff;border-top:3px solid #0b1730;padding:28px 32px;font-family:Georgia,serif;color:#0b1730">'
        . '<p style="margin:0;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8a6d3b">ARASTE CAPITAL</p>'
        . '<h1 style="margin:8px 0 4px;font-size:26px;font-weight:500">' . $e($sheet['title']) . '</h1>'
        . '<p style="margin:0 0 4px;font-size:14px;color:#55605b">' . $e($sheet['reference']) . '</p>'
        . '<p style="margin:0 0 20px;font-size:15px">' . $e($sheet['subtitle']) . '</p>';
    foreach ($sheet['sections'] as $i => [$title, $rows]) {
        $html .= '<h2 style="margin:22px 0 8px;font-size:17px;font-weight:500;border-bottom:1px solid #c9a86a;padding-bottom:6px">'
            . sprintf('%02d · %s', $i + 1, $e($title)) . '</h2><table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">';
        foreach ($rows as [$label, $value]) {
            $html .= '<tr><td style="width:42%;padding:6px 8px 6px 0;color:#55605b;vertical-align:top;border-bottom:1px solid #e6e1d6">' . $e($label)
                . '</td><td style="padding:6px 0;vertical-align:top;border-bottom:1px solid #e6e1d6;white-space:pre-line">' . ($value === '' ? '—' : $e($value)) . '</td></tr>';
        }
        $html .= '</table>';
    }
    $html .= '<p style="margin:24px 0 0;font-size:12px;color:#55605b">' . $e($sheet['footer']) . '</p></div></body></html>';
    return $html;
}

/** Envoi par mail() en multipart/alternative (texte + HTML). */
function araste_send(array $fields, string $locale, array $sheet): bool
{
    $config = araste_config();
    $to = araste_line((string) $config['to']);
    $from = araste_line((string) $config['from']);
    if ($to === '' || !filter_var($to, FILTER_VALIDATE_EMAIL) || $from === '' || !filter_var($from, FILTER_VALIDATE_EMAIL)) {
        return false;
    }
    $subject = araste_line((string) $config['subjectPrefix'] . ' ' . $sheet['title'] . ' — ' . $sheet['subtitle']);
    $encodedSubject = '=?UTF-8?B?' . base64_encode(mb_substr($subject, 0, 180)) . '?=';
    $boundary = 'araste-' . bin2hex(random_bytes(12));
    $replyName = (string) preg_replace('/[^\p{L}\p{N} .\'-]/u', '', $fields['name']);
    $headers = [
        'From: ARASTE CAPITAL <' . $from . '>',
        'Reply-To: =?UTF-8?B?' . base64_encode($replyName) . '?= <' . $fields['email'] . '>',
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
        'X-Mailer: araste-static-relay',
    ];
    $text = araste_render_text($sheet);
    $html = araste_render_html($sheet, $locale);
    $body = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text))
        . "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html))
        . "--$boundary--\r\n";
    return @mail($to, $encodedSubject, $body, implode("\r\n", $headers), '-f' . $from);
}
