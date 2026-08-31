<?php
/**
 * Shared response envelope + house invariants for the `wp pixelgrade blocks` CLI subtree.
 *
 * Implements the agentic-stack contract's (`docs/plans/agentic-stack/CONTRACT.md` v0.3.5) §2 JSON
 * envelope (ok/code/summary/data/warnings/retryable) and the §3.0 "resolve the user first, never
 * auto-elevate" rule. Every `wp pixelgrade blocks …` command in this subtree is read-only
 * (§1.4/§4), so `persisted`/`unchanged`/`stripped` are never emitted here — those envelope keys
 * are writes-only per §2.
 *
 * @since   2.6.0
 * @license GPL-2.0-or-later
 * @package NovaBlocks
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Read an associative argument.
 *
 * @param array  $assoc_args Associative arguments.
 * @param string $key        Key.
 * @param mixed  $default    Fallback.
 *
 * @return mixed
 */
function novablocks_cli_flag( array $assoc_args, string $key, $default = null ) {
	return \WP_CLI\Utils\get_flag_value( $assoc_args, $key, $default );
}

/**
 * Read a boolean associative argument (a bare `--flag` arrives as `true`).
 *
 * @param array  $assoc_args Associative arguments.
 * @param string $key        Key.
 *
 * @return bool
 */
function novablocks_cli_bool_flag( array $assoc_args, string $key ): bool {
	$value = novablocks_cli_flag( $assoc_args, $key, false );

	return ! in_array( $value, [ false, null, 'false', '0', 0 ], true );
}

/**
 * Resolve the output format. Default `table`, unconditionally — no TTY detection
 * (contract §1 preamble).
 *
 * @param array $assoc_args Associative arguments.
 *
 * @return string
 */
function novablocks_cli_format( array $assoc_args ): string {
	$format = novablocks_cli_flag( $assoc_args, 'format', 'table' );
	$format = is_string( $format ) ? strtolower( $format ) : 'table';

	return in_array( $format, [ 'table', 'json', 'yaml' ], true ) ? $format : 'table';
}

/**
 * Contract §3.0 — resolve the current user's capability FIRST, before any other command work,
 * and never auto-elevate. WP-CLI runs as no user unless `--user` is passed, so an unresolved user
 * must never be treated as "everything is allowed" — it halts with exit 3, naming the required
 * capability and suggesting `--user=<admin>`.
 *
 * Every command in this subtree needs `edit_posts` (contract §4's Nova Blocks row); there is no
 * `flush-cache`-style exemption here, unlike Style Manager's §3.0 carve-out.
 *
 * @param string $capability Required WordPress capability.
 * @param array  $assoc_args The command's assoc_args (for --format on the halt envelope).
 */
function novablocks_cli_require_capability( string $capability, array $assoc_args = [] ): void {
	$user_id = (int) get_current_user_id();

	if ( $user_id <= 0 ) {
		novablocks_cli_emit(
			false,
			'permission_denied',
			sprintf(
				/* translators: %s: the WordPress capability the command requires. */
				__( 'No user resolved. This command needs the "%s" capability — re-run with --user=<admin>.', '__plugin_txtd' ),
				$capability
			),
			[ 'capability' => $capability ],
			[],
			3,
			[],
			$assoc_args
		);

		return; // Unreachable: emit() always halts. Kept for static-analysis clarity.
	}

	if ( ! current_user_can( $capability ) ) {
		novablocks_cli_emit(
			false,
			'permission_denied',
			sprintf(
				/* translators: 1: user id, 2: capability name. */
				__( 'User %1$d lacks the "%2$s" capability this command needs — re-run with --user=<admin>.', '__plugin_txtd' ),
				$user_id,
				$capability
			),
			[
				'capability' => $capability,
				'user_id'    => $user_id,
			],
			[],
			3,
			[],
			$assoc_args
		);
	}
}

/**
 * Build, print, and halt on the contract §2 envelope.
 *
 * `ok` is bound to the exit code, not to the outcome: `ok:true` maps to exit 0 or 2 (never used by
 * this read-only subtree today — both commands are 0/1/3), `ok:false` maps to exit 1 or 3. `code`
 * is never translated; `summary` and `warnings[].message` are.
 *
 * @param bool     $ok         Whether the command's machinery completed.
 * @param string   $code       Stable machine token (never translated).
 * @param string   $summary    One translated human line.
 * @param array    $data       Command payload.
 * @param array    $warnings   Envelope warnings, each at least `{code, message}`.
 * @param int|null $exit_code  0/1/3 per contract §2 (this subtree never emits 2). Defaults to 0
 *                             (ok) / 1 (!ok).
 * @param array    $extra      Optional extra top-level keys — only `retryable` (bool) applies to
 *                              this read-only subtree; emitted only when present.
 * @param array    $assoc_args The command's assoc_args (read here only for --format).
 */
function novablocks_cli_emit( bool $ok, string $code, string $summary, array $data = [], array $warnings = [], ?int $exit_code = null, array $extra = [], array $assoc_args = [] ): void {
	if ( null === $exit_code ) {
		$exit_code = $ok ? 0 : 1;
	}

	$envelope = [
		'ok'       => $ok,
		'code'     => $code,
		'summary'  => $summary,
		// An empty PHP array json-encodes as `[]`; the contract's `data` is an object. Force
		// `{}` on the empty case so `--format=json` output always matches the pinned shape.
		'data'     => empty( $data ) ? new stdClass() : $data,
		'warnings' => array_values( $warnings ),
	];

	if ( array_key_exists( 'retryable', $extra ) ) {
		$envelope['retryable'] = (bool) $extra['retryable'];
	}

	$format = novablocks_cli_format( $assoc_args );

	if ( in_array( $format, [ 'json', 'yaml' ], true ) ) {
		// STDOUT under --format=json/yaml is ONLY the envelope (contract §2) — no success/
		// warning chatter mixed in, so `wp … --format=json | jq` always works.
		\WP_CLI::print_value( $envelope, [ 'format' => $format ] );
	} else {
		novablocks_cli_render_table( $envelope );
	}

	\WP_CLI::halt( $exit_code );
}

/**
 * Human-readable rendering for the default `table` format: the same envelope fields printed as
 * WP_CLI::success/warning/log lines plus command-specific tables, with the identical exit code
 * (contract §2).
 *
 * @param array $envelope The built envelope (as passed to print_value() in JSON/YAML mode).
 */
function novablocks_cli_render_table( array $envelope ): void {
	foreach ( $envelope['warnings'] as $warning ) {
		if ( is_array( $warning ) && isset( $warning['message'] ) ) {
			$message = $warning['message'];
		} elseif ( is_string( $warning ) ) {
			$message = $warning;
		} else {
			$message = wp_json_encode( $warning );
		}

		\WP_CLI::warning( (string) $message );
	}

	$data = $envelope['data'] instanceof stdClass ? [] : $envelope['data'];

	if ( ! empty( $data['blocks'] ) && is_array( $data['blocks'] ) ) {
		novablocks_cli_render_blocks_table( $data['blocks'] );
	} elseif ( ! empty( $data['patterns'] ) && is_array( $data['patterns'] ) ) {
		novablocks_cli_render_patterns_table( $data['patterns'] );
	}

	if ( ! empty( $envelope['retryable'] ) ) {
		\WP_CLI::log( 'retryable: true' );
	}

	if ( $envelope['ok'] ) {
		\WP_CLI::success( (string) $envelope['summary'] );
	} else {
		// WP_CLI::error() always exits 1 itself; halt() (called right after this) is what
		// actually sets the exit code (which may be 1 or 3), so a plain warning line is used
		// here instead.
		\WP_CLI::warning( sprintf( '[%s] %s', (string) $envelope['code'], (string) $envelope['summary'] ) );
	}
}

/**
 * Render `data.blocks` as a table. Full attribute/supports schemas (--attributes/--supports) are
 * JSON-shaped and deliberately not flattened into the table — use --format=json for those.
 *
 * @param array $blocks Block records.
 */
function novablocks_cli_render_blocks_table( array $blocks ): void {
	$rows = [];
	foreach ( $blocks as $block ) {
		$rows[] = [
			'name'                => novablocks_cli_sanitize_table_string( $block['name'] ?? '' ),
			'title'               => novablocks_cli_sanitize_table_string( $block['title'] ?? '' ),
			'api_version'         => novablocks_cli_sanitize_table_string( $block['api_version'] ?? '' ),
			'has_render_callback' => ! empty( $block['has_render_callback'] ) ? 'yes' : 'no',
			'attribute_count'     => novablocks_cli_sanitize_table_string( $block['attribute_count'] ?? 0 ),
		];
	}

	novablocks_cli_render_rows( $rows, [ 'name', 'title', 'api_version', 'has_render_callback', 'attribute_count' ] );
}

/**
 * Render `data.patterns` as a table.
 *
 * Cloud-sourced titles/categories are cleared of control characters (M3) before reaching
 * WP-CLI's table formatter — see `novablocks_cli_sanitize_table_string()`. JSON/YAML mode needs
 * no such treatment: `WP_CLI::print_value()` JSON-encodes control characters harmlessly.
 *
 * @param array $patterns Pattern records.
 */
function novablocks_cli_render_patterns_table( array $patterns ): void {
	$rows = [];
	foreach ( $patterns as $pattern ) {
		$categories = implode( ',', array_map( 'strval', (array) ( $pattern['categories'] ?? [] ) ) );

		$rows[] = [
			'name'       => novablocks_cli_sanitize_table_string( $pattern['name'] ?? '' ),
			'title'      => novablocks_cli_sanitize_table_string( $pattern['title'] ?? '' ),
			'source'     => novablocks_cli_sanitize_table_string( $pattern['source'] ?? '' ),
			'tier'       => null === ( $pattern['tier'] ?? null ) ? '' : novablocks_cli_sanitize_table_string( $pattern['tier'] ),
			'categories' => novablocks_cli_sanitize_table_string( $categories ),
		];
	}

	novablocks_cli_render_rows( $rows, [ 'name', 'title', 'source', 'tier', 'categories' ] );
}

/**
 * Strip C0 control characters and DEL (`\x00`-`\x1F`, `\x7F` — ANSI escapes like `\x1b` included)
 * from a value before it reaches the terminal in table mode (M3). These byte values never appear
 * inside a multi-byte UTF-8 sequence (continuation/lead bytes are all `\x80`+), so a plain
 * byte-wise strip is UTF-8-safe without needing a unicode regex mode. JSON/YAML mode needs no
 * equivalent treatment: `WP_CLI::print_value()` JSON-encodes control characters harmlessly, and
 * STDOUT under those formats carries only the envelope.
 *
 * @param mixed $value Value to sanitize (cast to string first).
 *
 * @return string
 */
function novablocks_cli_sanitize_table_string( $value ): string {
	$value    = (string) $value;
	$stripped = preg_replace( '/[\x00-\x1F\x7F]/', '', $value );

	return null === $stripped ? $value : $stripped;
}

/**
 * Render rows through WP-CLI's table formatter when it is available.
 *
 * @param array    $rows Rows.
 * @param string[] $keys Column keys.
 */
function novablocks_cli_render_rows( array $rows, array $keys ): void {
	if ( empty( $rows ) ) {
		return;
	}

	if ( function_exists( '\WP_CLI\Utils\format_items' ) ) {
		\WP_CLI\Utils\format_items( 'table', $rows, $keys );

		return;
	}

	foreach ( $rows as $row ) {
		$parts = [];
		foreach ( $keys as $key ) {
			$parts[] = (string) ( $row[ $key ] ?? '' );
		}
		\WP_CLI::log( implode( "\t", $parts ) );
	}
}
