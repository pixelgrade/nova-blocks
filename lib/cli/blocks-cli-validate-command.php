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
 * `ok` — every parsed block is valid AND every document is a serialization fixed point.
 * `invalid_blocks` — at least one block parses invalid (exit 2; the findings are in
 * `data.invalid[]`, this is NOT an error). `not_canonical` — every block parses valid but at least
 * one document is not a fixed point: `serialize( parse( content ) ) !== content`, so the next
 * editor save rewrites it (exit 2; findings in `data.not_canonical[]`). `harness_unavailable` — the
 * agent-tools package or a Node binary is missing; the summary names the install step.
 * `invalid_params` — a bad id, an unknown post, or a `--post-type` mismatch. `harness_degraded` —
 * an editor bundle failed to load, so the block registry is incomplete and no verdict would be
 * trustworthy. `harness_timeout` — the harness exceeded its wall-clock budget and was terminated.
 * `permission_denied` — see EXIT CODES.
 *
 * ## WARNINGS
 *
 * `preset_detected` — §3.8 pass-through. `not_canonical` — accompanies the code of the same name,
 * and is ALSO emitted alongside `invalid_blocks` when both are true. `third_party_editor_scripts` —
 * another plugin or theme adds block-editor assets the harness does not load, so a `blocks.*`
 * filter of theirs could make the real editor disagree with this verdict. **That detector only
 * sees unconditional registrations** — see its docblock in `blocks-cli-harness.php`; its silence is
 * not evidence that no third party is involved.
 *
 * ## THE FIXED-POINT POST-CONDITION
 *
 * Per-block validity is necessary and not sufficient, and the gap between the two is where the
 * about-athletics corruption lived. `parse()` walks a block type's deprecations and reports
 * `isValid: true` the moment ANY of them matches. `core/paragraph` deprecation #6 declares its
 * `content` attribute as `{ source: 'html' }` with **no `selector`**, so the whole stored `<p>`
 * element becomes the attribute value and that deprecated save matches anything. A paragraph
 * missing `has-normal-font-size` — which Nova Blocks' `fontSize` default makes mandatory on this
 * stack — therefore reports **valid** while holding an entire element as its text. One editor save
 * later it is `<p …><p …>text</p></p>`, the re-parse orphans the copy, and "Attempt Block Recovery"
 * writes empty paragraphs. On the page this happened to, `validate` said `0 invalid` over 229
 * blocks while 2,032 characters of body copy were one keystroke from deletion.
 *
 * So after per-block validity this command asks the cheap, decisive question:
 * **`serialize( parse( content ) ) === content`**. On that page's pre-corruption revision the
 * answer was already no. `data.not_canonical[]` names the blocks that parse valid only against a
 * deprecated save (`reason_code: valid_via_deprecation`) — the dangerous class — and, when a
 * document merely re-emits different bytes with no such block, one document-level record
 * (`index: -1`, `reason_code: not_a_fixed_point`).
 *
 * `data.posts[].canonical` is a TRI-STATE — `true`, `false`, or `null` for "not measured" (a
 * harness predating the check, or one whose serialization threw); in table mode it renders
 * `yes` / `NO` / `?`. Only an explicit `false` is a finding. `null` is never collapsed to `true`:
 * reporting an unmeasured document as canonical would repeat, one field over, the quiet over-claim
 * this whole post-condition exists to end.
 *
 * ## EXIT CODES
 *
 * 0 zero invalid and every document canonical · 2 any invalid, or any document not a fixed point ·
 * 1 harness_unavailable / harness_degraded / harness_timeout / invalid_params / harness_failed ·
 * 3 permission_denied
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks validate 12 --format=json --user=admin
 *     wp pixelgrade blocks validate 12 --all-parts --format=json --user=admin | jq '.data.invalid'
 *     wp pixelgrade blocks validate 12 --format=json --user=admin | jq '.data.not_canonical'
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

	$by_id         = novablocks_cli_index_harness_documents( $response );
	$invalid       = [];
	$not_canonical = [];
	$posts         = [];

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

		// The fixed-point post-condition. `canonical` is a TRI-STATE and stays one all the way
		// through the envelope: `true` (the document re-serializes to itself), `false` (it does
		// not), `null` (not measured — either a harness that predates the field, or one whose
		// serialization threw). It is deliberately NOT collapsed to a boolean: reporting an
		// unmeasured document as `canonical: true` would be the same shape of quiet over-claim
		// that `invalid: 0` made when it certified a page holding 112 swallowed paragraphs.
		//
		// Only an explicit `false` raises the finding. A `null` says so and raises nothing: it is
		// not evidence of a problem, and manufacturing one from an absent measurement would train
		// operators to ignore the code.
		$canonical = is_array( $result ) && array_key_exists( 'canonical', $result ) && null !== $result['canonical']
			? (bool) $result['canonical']
			: null;

		if ( false === $canonical ) {
			$blocks = is_array( $result['not_canonical_blocks'] ?? null ) ? $result['not_canonical_blocks'] : [];

			if ( empty( $blocks ) ) {
				// The document re-emits different bytes without any block being valid-via-
				// deprecation — attribute defaults being materialised, delimiter reflow, the
				// `--` escaping `serializeAttributes()` applies. Still a finding (the
				// next save rewrites the post), but there is no block to point at, so the record
				// is document-level and says so rather than inventing an index.
				$blocks = [ [ 'index' => -1, 'block_name' => '', 'reason_code' => 'not_a_fixed_point' ] ];
			}

			foreach ( $blocks as $entry ) {
				$not_canonical[] = [
					'post_id'     => $post_id,
					'index'       => (int) ( $entry['index'] ?? -1 ),
					'block_name'  => (string) ( $entry['block_name'] ?? '' ),
					'reason_code' => (string) ( $entry['reason_code'] ?? 'not_a_fixed_point' ),
				];
			}
		}

		$posts[] = [
			'post_id'     => $post_id,
			'post_type'   => (string) $target['post_type'],
			'origin'      => (string) $target['origin'],
			'block_count' => (int) ( $result['block_count'] ?? 0 ),
			'invalid'     => count( $post_invalid ),
			'canonical'   => $canonical,
			// Present only when the harness TRIED to answer the fixed-point question and its
			// serialization threw. Without it an operator sees `canonical: ?` with no way to learn
			// why, which is a worse kind of silence than not measuring at all.
			'canonical_error' => isset( $result['canonical_error'] ) ? (string) $result['canonical_error'] : null,
			'error'       => isset( $result['error'] ) ? (string) $result['error'] : null,
		];
	}

	$warnings = array_merge(
		novablocks_cli_preset_warnings( $targets ),
		novablocks_cli_third_party_editor_warnings()
	);

	$not_canonical_posts = array_values( array_unique( array_column( $not_canonical, 'post_id' ) ) );

	if ( ! empty( $not_canonical_posts ) ) {
		$deprecated = array_values(
			array_filter(
				$not_canonical,
				static function ( $entry ) {
					return 'valid_via_deprecation' === $entry['reason_code'];
				}
			)
		);

		$warnings[] = [
			'code'     => 'not_canonical',
			'message'  => sprintf(
				/* translators: 1: comma-separated post ids, 2: number of blocks that are valid only via a deprecation. */
				__( 'Post(s) %1$s are valid but NOT canonical: serialize(parse(content)) differs from the stored markup, so the next editor save rewrites them. %2$d block(s) parse valid only against a DEPRECATED save — content that reaches the editor through a deprecation can be reinterpreted on the way back out (a core/paragraph missing has-normal-font-size is swallowed whole by deprecation #6 and re-saved double-wrapped). Treat this as blocking, not cosmetic. See data.not_canonical[].', '__plugin_txtd' ),
				implode( ', ', $not_canonical_posts ),
				count( $deprecated )
			),
			'post_ids' => $not_canonical_posts,
		];
	}

	$data = [
		'posts'         => $posts,
		'invalid'       => $invalid,
		'not_canonical' => $not_canonical,
		'harness'       => $response['bootstrap'] ?? new stdClass(),
	];

	if ( empty( $invalid ) && empty( $not_canonical ) ) {
		// The fixed-point half of this sentence is only claimed for the posts it was actually
		// measured on. A run against an older harness, or over classic non-block content, comes
		// back all-`null`; asserting "every one is a serialization fixed point" there would be the
		// same over-claim `invalid: 0` made when it certified a page holding 112 swallowed
		// paragraphs — one field over, in prose this time.
		$unmeasured = count(
			array_filter(
				$posts,
				static function ( $post ) {
					return null === $post['canonical'];
				}
			)
		);

		if ( $unmeasured === count( $posts ) ) {
			$summary = sprintf(
				/* translators: %d: number of posts checked. */
				_n( '%d post checked: zero invalid blocks. The serialization fixed point was NOT measured (no block markup, or a harness that predates the check).', '%d posts checked: zero invalid blocks. The serialization fixed point was NOT measured on any of them (no block markup, or a harness that predates the check).', count( $posts ), '__plugin_txtd' ),
				count( $posts )
			);
		} elseif ( $unmeasured > 0 ) {
			$summary = sprintf(
				/* translators: 1: number of posts checked, 2: number whose fixed point was not measured. */
				__( '%1$d posts checked: zero invalid blocks, and every measured one is a serialization fixed point (%2$d not measured).', '__plugin_txtd' ),
				count( $posts ),
				$unmeasured
			);
		} else {
			$summary = sprintf(
				/* translators: %d: number of posts checked. */
				_n( '%d post checked: zero invalid blocks, and it is a serialization fixed point.', '%d posts checked: zero invalid blocks, and every one is a serialization fixed point.', count( $posts ), '__plugin_txtd' ),
				count( $posts )
			);
		}

		return [
			'exit'     => 0,
			'code'     => 'ok',
			'summary'  => $summary,
			'data'     => $data,
			'warnings' => $warnings,
		];
	}

	if ( empty( $invalid ) ) {
		// Every block parses valid and the document still is not what the editor would store. This
		// is the case `invalid: 0` used to certify as clean, and the one worth its own code: an
		// agent branching on `code` must be able to tell "your markup is broken" from "your markup
		// is a time bomb" without reading prose.
		return [
			'exit'     => 2,
			'code'     => 'not_canonical',
			'summary'  => sprintf(
				/* translators: 1: number of posts that are not fixed points, 2: number of posts checked. */
				__( '%1$d of %2$d post(s) parse valid but are NOT a serialization fixed point — the next editor save will rewrite them. See data.not_canonical[].', '__plugin_txtd' ),
				count( $not_canonical_posts ),
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
