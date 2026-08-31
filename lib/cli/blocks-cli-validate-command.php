<?php
/**
 * `wp pixelgrade blocks validate <post-id>…` — editor-equivalent block validation, headless.
 *
 * Contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.10) §1.4: capability `edit_posts`, reports
 * `data.invalid[]` as `{post_id, index, block_name, reason}`, exit **0 when zero invalid** and
 * **2 when any invalid**.
 *
 * The point of the command is §3.9: `wp post create/update` bypasses Nova's REST Plus guard by
 * design and produces markup that renders but may parse invalid, so "it looks right on the front
 * end" is not evidence. This is the check that turns that into a fact, in about a second, with no
 * browser, no login and no running web server.
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
 * Validate the blocks in one or more posts against an editor-equivalent parse.
 *
 * ## OPTIONS
 *
 * <post-id>...
 * : One or more post ids. Any post type — pages, posts, `wp_template`, `wp_template_part`.
 *
 * [--post-type=<type>]
 * : Assert that every given id is of this post type. An id whose type differs is `invalid_params`
 * (exit 1) rather than a silently-skipped entry — a set the flag does not describe is a caller
 * mistake worth surfacing, not a filter to apply.
 *
 * [--all-parts]
 * : Also walk the site's database-resident `wp_template` / `wp_template_part` posts for the active
 * theme. The recurring failure this guards is a missed footer part (§1.4).
 *
 * [--format=<format>]
 * : Output format. Default: table.
 * ---
 * default: table
 * options:
 *   - table
 *   - json
 *   - yaml
 * ---
 *
 * ## CODES
 *
 * `ok` — every parsed block is valid. `invalid_blocks` — at least one block parses invalid (exit
 * 2; the findings are in `data.invalid[]`, this is NOT an error). `harness_unavailable` — the
 * agent-tools package or a Node binary is missing; the summary names the install step.
 * `invalid_params` — a bad id, an unknown post, or a `--post-type` mismatch. `permission_denied` —
 * see EXIT CODES.
 *
 * ## EXIT CODES
 *
 * 0 zero invalid · 2 any invalid · 1 harness_unavailable / invalid_params / harness_failed ·
 * 3 permission_denied
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks validate 12 --format=json --user=admin
 *     wp pixelgrade blocks validate 12 --all-parts --format=json --user=admin | jq '.data.invalid'
 *
 * @when after_wp_load
 *
 * @param array $args       Positional arguments: post ids.
 * @param array $assoc_args Associative arguments.
 */
function novablocks_cli_blocks_validate( $args, $assoc_args ) {
	novablocks_cli_require_capability( 'edit_posts', $assoc_args );

	$targets = novablocks_cli_resolve_target_posts( (array) $args, (array) $assoc_args );

	if ( is_wp_error( $targets ) ) {
		novablocks_cli_emit_wp_error( $targets, $assoc_args );

		return;
	}

	$probe = novablocks_cli_harness_probe();

	if ( empty( $probe['available'] ) ) {
		novablocks_cli_harness_unavailable( $probe, $assoc_args );

		return;
	}

	$response = novablocks_cli_harness_invoke( 'validate', novablocks_cli_harness_documents( $targets ) );

	if ( is_wp_error( $response ) ) {
		novablocks_cli_emit_wp_error( $response, $assoc_args );

		return;
	}

	$by_id   = novablocks_cli_index_harness_documents( $response );
	$invalid = [];
	$posts   = [];

	foreach ( $targets as $target ) {
		$post_id = (int) $target['post_id'];
		$result  = $by_id[ $post_id ] ?? null;

		$post_invalid = [];
		if ( is_array( $result ) && is_array( $result['invalid'] ?? null ) ) {
			foreach ( $result['invalid'] as $entry ) {
				$record = [
					'post_id'    => $post_id,
					'index'      => (int) ( $entry['index'] ?? -1 ),
					'block_name' => (string) ( $entry['block_name'] ?? '' ),
					'reason'     => (string) ( $entry['reason'] ?? '' ),
				];
				$post_invalid[] = $record;
				$invalid[]      = $record;
			}
		}

		$posts[] = [
			'post_id'     => $post_id,
			'post_type'   => (string) $target['post_type'],
			'origin'      => (string) $target['origin'],
			'block_count' => (int) ( $result['block_count'] ?? 0 ),
			'invalid'     => count( $post_invalid ),
			'error'       => isset( $result['error'] ) ? (string) $result['error'] : null,
		];
	}

	$warnings = novablocks_cli_preset_warnings( $targets );

	$data = [
		'posts'   => $posts,
		'invalid' => $invalid,
		'harness' => $response['bootstrap'] ?? new stdClass(),
	];

	if ( empty( $invalid ) ) {
		novablocks_cli_emit(
			true,
			'ok',
			sprintf(
				/* translators: %d: number of posts checked. */
				_n( '%d post checked: zero invalid blocks.', '%d posts checked: zero invalid blocks.', count( $posts ), '__plugin_txtd' ),
				count( $posts )
			),
			$data,
			$warnings,
			0,
			[],
			$assoc_args
		);

		return;
	}

	novablocks_cli_emit(
		// Contract §2: `ok` is bound to the exit code, not the outcome — findings the caller must
		// inspect are exit 2 and `ok:true`. Invalid blocks are a finding, not a command failure.
		true,
		'invalid_blocks',
		sprintf(
			/* translators: 1: number of invalid blocks, 2: number of posts checked. */
			__( '%1$d invalid block(s) across %2$d post(s). See data.invalid[].', '__plugin_txtd' ),
			count( $invalid ),
			count( $posts )
		),
		$data,
		$warnings,
		2,
		[],
		$assoc_args
	);
}

/**
 * Shape target records into the harness's `documents` array.
 *
 * @param array $targets Target records.
 *
 * @return array Documents.
 */
function novablocks_cli_harness_documents( array $targets ): array {
	$documents = [];

	foreach ( $targets as $target ) {
		$documents[] = [
			'id'      => (int) $target['post_id'],
			'content' => (string) $target['content'],
		];
	}

	return $documents;
}

/**
 * Index a harness response's documents by id.
 *
 * @param array $response Harness response.
 *
 * @return array `[ id => document ]`.
 */
function novablocks_cli_index_harness_documents( array $response ): array {
	$by_id = [];

	foreach ( (array) ( $response['documents'] ?? [] ) as $document ) {
		if ( isset( $document['id'] ) ) {
			$by_id[ (int) $document['id'] ] = $document;
		}
	}

	return $by_id;
}

/**
 * Build the §3.8 `preset_detected` warnings for a target set.
 *
 * @param array $targets Target records.
 *
 * @return array Warnings.
 */
function novablocks_cli_preset_warnings( array $targets ): array {
	$presets = novablocks_cli_detect_presets( $targets );

	if ( empty( $presets ) ) {
		return [];
	}

	$tokens = [];
	foreach ( $presets as $hits ) {
		$tokens = array_merge( $tokens, $hits );
	}

	return [
		[
			'code'       => 'preset_detected',
			'message'    => sprintf(
				/* translators: 1: comma-separated post ids, 2: comma-separated attribute/class tokens. */
				__( 'theme.json preset residue found in post(s) %1$s (%2$s). Passed through unchanged — this command never rewrites presets (§3.8) — but Pixelgrade surfaces are Color Signal, not presets.', '__plugin_txtd' ),
				implode( ', ', array_keys( $presets ) ),
				implode( ', ', array_values( array_unique( $tokens ) ) )
			),
			'post_ids'   => array_map( 'intval', array_keys( $presets ) ),
			'attributes' => array_values( array_unique( $tokens ) ),
		],
	];
}

/**
 * Map a WP_Error from the shared resolution/invocation helpers onto the §2 envelope.
 *
 * `permission_denied` keeps exit 3 (§2's permission row); everything else is exit 1.
 *
 * @param WP_Error $error      The error.
 * @param array    $assoc_args The command's assoc_args (for --format).
 */
function novablocks_cli_emit_wp_error( WP_Error $error, array $assoc_args ): void {
	$code = $error->get_error_code();
	$exit = 'permission_denied' === $code ? 3 : 1;

	novablocks_cli_emit(
		false,
		(string) $code,
		(string) $error->get_error_message(),
		[ 'error_code' => (string) $code ],
		[],
		$exit,
		[],
		$assoc_args
	);
}
