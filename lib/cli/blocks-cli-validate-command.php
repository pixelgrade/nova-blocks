<?php
/**
 * `wp pixelgrade blocks validate <post-id>…` — editor-equivalent block validation, headless.
 *
 * Contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.11) §1.4: capability `edit_posts`, reports
 * `data.invalid[]` as `{post_id, index, block_name, reason_code, reason}`, exit **0 when zero
 * invalid** and **2 when any invalid**.
 *
 * Two hardening decisions worth stating, both from the W4 security review:
 *
 * - **A per-post `edit_post` gate.** §1.4 lists only the `edit_posts` floor for this verb, which is
 *   enough while the caller is a shell. It is not enough once W7 exposes this as an MCP ability
 *   where the acting user is genuinely restricted: without a per-post check, an agent confined to a
 *   contributor could aim `validate` at any id, other users' private posts and pending drafts
 *   included. The gate is strictly narrower than the contract's floor, so it cannot make the
 *   command more permissive than §1.4 allows.
 * - **Reasons quote no content.** The validator's own messages interpolate literal chunks of the
 *   stored markup; those substitutions are redacted in the harness, so a reason carries the failure
 *   shape (`reason_code`) and the block's identity, never its text.
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
 * `invalid_params` — a bad id, an unknown post, or a `--post-type` mismatch. `harness_degraded` —
 * an editor bundle failed to load, so the block registry is incomplete and no verdict would be
 * trustworthy. `harness_timeout` — the harness exceeded its wall-clock budget and was terminated.
 * `permission_denied` — see EXIT CODES.
 *
 * ## WARNINGS
 *
 * `preset_detected` — §3.8 pass-through. `third_party_editor_scripts` — another plugin or theme
 * adds block-editor assets the harness does not load, so a `blocks.*` filter of theirs could make
 * the real editor disagree with this verdict.
 *
 * ## EXIT CODES
 *
 * 0 zero invalid · 2 any invalid · 1 harness_unavailable / harness_degraded / harness_timeout /
 * invalid_params / harness_failed · 3 permission_denied
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

	novablocks_cli_emit_core_result(
		novablocks_agent_blocks_validate_core(
			[
				'post_ids'  => (array) $args,
				'post_type' => (string) novablocks_cli_flag( $assoc_args, 'post-type', '' ),
				'all_parts' => novablocks_cli_bool_flag( $assoc_args, 'all-parts' ),
			]
		),
		$assoc_args
	);
}

/**
 * The whole of `blocks validate`, as a surface-agnostic core: target resolution (with the per-post
 * `edit_post` gate), the harness probe and invocation, and the per-post record assembly. The
 * WP-CLI callback above and `pixelgrade/validate-post` (`lib/abilities/blocks-abilities.php`) both
 * call THIS (W7 / SHARED-SPEC §4).
 *
 * Two properties this core carries for BOTH surfaces:
 *
 * - **Per-post `edit_post` on a read** (security review F4, ratified as §1.4 v0.3.12). §1.4's floor
 *   is `edit_posts`, which is enough while the caller is a shell. It is not enough once this is an
 *   MCP ability where the acting user is genuinely restricted: without the per-post check, an agent
 *   confined to a contributor could aim `validate` at any id, other users' private posts and
 *   pending drafts included. The gate is strictly narrower than the contract's floor.
 * - **No content excerpts** (§1.4 v0.3.12, contract-wide). A record carries `post_id`, `index`,
 *   `block_name` and a `reason_code`; the validator's own messages, which interpolate literal
 *   chunks of the stored markup, are redacted inside the harness. An MCP-exposed ability is exactly
 *   where that matters, and the redaction is upstream of this assembly, so neither surface can
 *   leak by forgetting.
 *
 * @param array $params `{ post_ids: int[], post_type?: ?string, all_parts?: bool, targets?: array,
 *                        surface?: string }`. `targets` short-circuits resolution when the caller
 *                       already resolved (the CLI does not; `canonicalize` does, to count posts
 *                       for its confirmation). `surface` — `'cli'` (default) or `'ability'` — is
 *                       forwarded only to the `harness_unavailable` wording (security review LOW-2
 *                       item 2): the machine `code`/`data.reason` are identical either way.
 *
 * @return array `{ exit, code, summary, data, warnings }`.
 */
function novablocks_agent_blocks_validate_core( array $params ): array {
	$surface = isset( $params['surface'] ) ? (string) $params['surface'] : 'cli';

	$targets = isset( $params['targets'] ) && is_array( $params['targets'] )
		? $params['targets']
		: novablocks_agent_blocks_resolve_targets( $params );

	if ( is_wp_error( $targets ) ) {
		return novablocks_agent_blocks_error_result( $targets );
	}

	$probe = novablocks_cli_harness_probe();

	if ( empty( $probe['available'] ) ) {
		return novablocks_cli_harness_unavailable_result( $probe, '', $surface );
	}

	$response = novablocks_cli_harness_invoke( 'validate', novablocks_cli_harness_documents( $targets ), $surface );

	if ( is_wp_error( $response ) ) {
		return novablocks_agent_blocks_error_result( $response );
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
					'post_id'     => $post_id,
					'index'       => (int) ( $entry['index'] ?? -1 ),
					'block_name'  => (string) ( $entry['block_name'] ?? '' ),
					'reason_code' => (string) ( $entry['reason_code'] ?? 'block_validation_failed' ),
					'reason'      => (string) ( $entry['reason'] ?? '' ),
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

	$warnings = array_merge(
		novablocks_cli_preset_warnings( $targets ),
		novablocks_cli_third_party_editor_warnings()
	);

	$data = [
		'posts'   => $posts,
		'invalid' => $invalid,
		'harness' => $response['bootstrap'] ?? new stdClass(),
	];

	if ( empty( $invalid ) ) {
		return [
			'exit'     => 0,
			'code'     => 'ok',
			'summary'  => sprintf(
				/* translators: %d: number of posts checked. */
				_n( '%d post checked: zero invalid blocks.', '%d posts checked: zero invalid blocks.', count( $posts ), '__plugin_txtd' ),
				count( $posts )
			),
			'data'     => $data,
			'warnings' => $warnings,
		];
	}

	return [
		// Contract §2: `ok` is bound to the exit code, not the outcome — findings the caller must
		// inspect are exit 2 and `ok:true`. Invalid blocks are a finding, not a command failure.
		'exit'     => 2,
		'code'     => 'invalid_blocks',
		'summary'  => sprintf(
			/* translators: 1: number of invalid blocks, 2: number of posts checked. */
			__( '%1$d invalid block(s) across %2$d post(s). See data.invalid[].', '__plugin_txtd' ),
			count( $invalid ),
			count( $posts )
		),
		'data'     => $data,
		'warnings' => $warnings,
	];
}
