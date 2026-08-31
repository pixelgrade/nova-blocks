<?php
/**
 * `wp pixelgrade blocks canonicalize <post-id>…` — rewrite stored markup to what the editor would
 * save, and PROVE it by a fresh re-parse.
 *
 * Contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.11) §1.4: capability `edit_posts` PLUS a
 * per-post `edit_post`; destructive, so `--yes` (§3.6); a **mandatory** re-parse after the write
 * reporting `data.invalid_before` / `invalid_after` and an `innerText` diff per post; exit **0 only
 * when `invalid_after == 0`**, **2 when some posts are still invalid**.
 *
 * Two design points worth stating because they are what makes the proof real:
 *
 * 1. **The re-parse is a SECOND harness invocation over what was actually read back from the
 *    database.** The first invocation's same-session re-parse is a convenience signal only. §3.9
 *    is explicit that "a same-session zero proves nothing" — so the authoritative `invalid_after`
 *    comes from a fresh process, bootstrapped again, parsing the bytes `get_post()` returns after
 *    the write.
 * 2. **Non-converging documents exit 2 and are never retried.** Some hand-authored markup
 *    legitimately does not converge (nova-blocks#610: a `core/paragraph` that was valid before the
 *    pass parses invalid after it — cross-checked in the real editor with identical before/after
 *    invalid lists). Looping until it "works" would either never terminate or mangle the document.
 * 3. **A write is proven by reading it back, byte for byte.** Validity is not integrity: a kses
 *    strip or a `content_save_pre` filter can mutate content and still leave it parseable.
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
 * Rewrite stored block markup to its canonical, editor-equivalent serialization.
 *
 * ## OPTIONS
 *
 * <post-id>...
 * : One or more post ids. Any post type — pages, posts, `wp_template`, `wp_template_part`.
 *
 * [--post-type=<type>]
 * : Assert that every given id is of this post type (see `blocks validate`).
 *
 * [--all-parts]
 * : Also canonicalize the site's database-resident `wp_template` / `wp_template_part` posts for the
 * active theme. §1.4 requires covering the page AND its chrome, "because the recurring failure is
 * a missed footer part".
 *
 * [--dry-run]
 * : Report the predicted result without writing. Never prompts and never requires `--yes` (§3.6),
 * and follows the same exit-2-on-findings rule as a real run.
 *
 * [--via-editor]
 * : Reserved for the headless-Chrome fallback. That harness is lab-only and deliberately NOT
 * shipped (§3.11), so this flag fails with `harness_unavailable`.
 *
 * [--yes]
 * : Required for a real write under `--format=json|yaml` (§3.6). Under `--format=table` an
 * interactive confirmation is accepted instead.
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
 * `ok` — every touched post re-parses with zero invalid blocks. `noop` — nothing needed changing
 * and the fresh re-parse is clean (idempotent second run). `invalid_blocks` — at least one post
 * still parses invalid after the write, or a document did not converge (exit 2).
 * `content_altered` — one or more posts were LEFT UNTOUCHED because canonicalizing them would have
 * changed their visible text or introduced a nested `<p>` (exit 2; §5 P3 rule (c) enforced as a
 * cumulative pre-write gate). `not_yet_stable` — a post was still changing after the pass budget
 * and never reached a byte-stable fixed point (exit 2).
 * `write_mutated` — the save path changed the content between `wp_update_post()` and
 * `get_post()`: kses stripping markup the acting user may not author, a `content_save_pre` filter,
 * or a slashing bug. The stored bytes are neither the original nor the canonical form, so this is
 * an ERROR (exit 1), not a finding. `harness_degraded` — an editor bundle failed to load, so the
 * block registry is incomplete; nothing is written. `harness_timeout` — the harness exceeded its
 * wall-clock budget and was terminated; nothing is written. `harness_unavailable` — the agent-tools
 * package, a Node binary, a protocol-version match, or (`--via-editor`) the lab-only browser
 * harness is absent. `confirmation_required` — a real write under `--format=json|yaml` without
 * `--yes`. `invalid_params` / `permission_denied` — see EXIT CODES.
 *
 * ## WARNINGS
 *
 * `not_yet_stable` — accompanies the code of the same name. `content_altered` /
 * `inner_text_changed` / `nested_paragraph_introduced` — the §5 P3 rule (c) guards.
 * `preset_detected` — §3.8 pass-through. `write_failed` — a post could not be rewritten.
 * `third_party_editor_scripts` — another plugin or theme adds block-editor assets the harness does
 * not load, so a `blocks.*` filter of theirs could make the real editor serialize differently.
 *
 * `data.refused[]` carries `{post_id, lost_length, blocks:[{index, name}]}` — the affected blocks
 * and the would-be-lost character count, as §1.4's F-W4-2 ruling pins.
 *
 * **Nothing is written for a post that is refused or never stabilizes.** Both leave the stored
 * content byte-identical, so an envelope that says "inspect this" leaves something intact to
 * inspect. `--dry-run` predicts those cases the same way.
 *
 * Every entry in `data.posts[]` carries `passes` — how many canonicalization passes that document
 * needed — so the multi-pass fact stays visible even when the run exits 0.
 *
 * ## EXIT CODES
 *
 * 0 `invalid_after == 0`, every post byte-stable, nothing refused · 2 some posts still invalid /
 * refused to protect their text / never stabilized · 1 write_mutated / harness_unavailable /
 * harness_degraded / harness_timeout / confirmation_required / invalid_params / harness_failed ·
 * 3 permission_denied
 *
 * ## EXAMPLES
 *
 *     wp pixelgrade blocks canonicalize 12 --all-parts --yes --format=json --user=admin
 *     wp pixelgrade blocks canonicalize 12 --dry-run --format=json --user=admin
 *
 * @when after_wp_load
 *
 * @param array $args       Positional arguments: post ids.
 * @param array $assoc_args Associative arguments.
 */
function novablocks_cli_blocks_canonicalize( $args, $assoc_args ) {
	novablocks_cli_require_capability( 'edit_posts', $assoc_args );

	$dry_run = novablocks_cli_bool_flag( $assoc_args, 'dry-run' );

	// Resolve targets FIRST, so a caller with a typo'd id learns that before being asked to
	// confirm a destructive write, and so the per-post `edit_post` gate runs over the resolved set
	// (--all-parts additions included) rather than only over the ids the caller typed.
	$targets = novablocks_cli_resolve_target_posts( (array) $args, (array) $assoc_args, 'edit_post' );

	if ( is_wp_error( $targets ) ) {
		novablocks_cli_emit_wp_error( $targets, $assoc_args );

		return;
	}

	if ( novablocks_cli_bool_flag( $assoc_args, 'via-editor' ) ) {
		novablocks_cli_emit(
			false,
			'harness_unavailable',
			__( '--via-editor needs the headless-Chrome editor harness, which is lab-only and deliberately not shipped with the plugin (contract §3.11). Use the default Node harness, or run the browser pass from the lab (gene-migration scripts/canonicalize.cjs).', '__plugin_txtd' ),
			[ 'reason' => 'via_editor_lab_only' ],
			[],
			1,
			[],
			$assoc_args
		);

		return;
	}

	if ( ! $dry_run && ! novablocks_cli_confirm_destructive( $assoc_args, count( $targets ) ) ) {
		return;
	}

	novablocks_cli_emit_core_result(
		novablocks_agent_blocks_canonicalize_core(
			[
				'targets' => $targets,
				'dry_run' => $dry_run,
			]
		),
		$assoc_args
	);
}

/**
 * The whole of `blocks canonicalize` from the harness probe onward, as a surface-agnostic core:
 * the bounded fixed-point iteration, the pre-write refusal gates, **the write itself** —
 * `wp_update_post()` + `wp_slash()` + the mandatory post-write byte-identity read-back — the fresh
 * §3.9 re-parse, and the exit mapping. The WP-CLI callback above and
 * `pixelgrade/canonicalize-post` (`lib/abilities/blocks-abilities.php`) both call THIS.
 *
 * Extracting the WRITE, not just the reporting around it, is the whole point (W7 / SHARED-SPEC §4):
 * a second copy of a hundred lines that mutate `post_content` is where the ability and the command
 * would quietly stop agreeing about refusals, `write_mutated`, and what is left on disk.
 *
 * What deliberately stays OUTSIDE this core, because it is a surface concern and not a rule about
 * content: §3.6's confirmation (the CLI's `--yes`/`WP_CLI::confirm()`, the ability's `confirm:
 * true`), `--format`, and `--via-editor`'s lab-only refusal — that flag has no ability equivalent
 * at all, since a headless-Chrome fallback must not be reachable from an MCP client (§3.11).
 *
 * @param array $params `{ post_ids: int[], post_type?: ?string, all_parts?: bool, dry_run?: bool,
 *                        targets?: array, surface?: string }`. `targets` short-circuits resolution
 *                        for a caller that already resolved (the CLI does, to count posts for its
 *                        confirmation prompt) — the resolution, cap gate included, is the same
 *                        helper either way. `surface` — `'cli'` (default) or `'ability'` — is
 *                        forwarded only to the `harness_unavailable` wording (security review
 *                        LOW-2 item 2): the machine `code`/`data.reason` are identical either way.
 *
 * @return array `{ exit, code, summary, data, warnings }`.
 */
function novablocks_agent_blocks_canonicalize_core( array $params ): array {
	$dry_run = ! empty( $params['dry_run'] );
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

	// --------------------------------------------- iterate to the fixed point (bounded, §1.4)
	$iteration = novablocks_cli_canonicalize_to_fixed_point( $targets, $surface );

	if ( is_wp_error( $iteration ) ) {
		return novablocks_agent_blocks_error_result( $iteration );
	}

	$first = $iteration['posts'];

	// ---------------------------------------------------------------------------- the write
	$updated   = [];
	$unchanged = [];
	$failures  = [];
	$refused   = [];
	$mutated   = [];

	foreach ( $targets as $target ) {
		$post_id = (int) $target['post_id'];
		$result  = $first[ $post_id ] ?? null;

		if ( ! is_array( $result ) || ! isset( $result['canonical_content'] ) ) {
			$failures[ $post_id ] = isset( $result['error'] ) ? (string) $result['error'] : __( 'the harness returned no canonical content', '__plugin_txtd' );
			$unchanged[]          = $post_id;
			continue;
		}

		// §5 P3 rule (c) is a PRE-WRITE gate, not a post-mortem, and it is applied to the
		// CUMULATIVE result — the original stored text against the text after the last pass —
		// never pass-by-pass. Reporting "we destroyed 106 characters of your visible text" after
		// the write is honest but useless: the content is already gone and the command has no way
		// to put it back. So a canonicalization that would lose text, or introduce a nested <p>,
		// is refused outright: the post is left exactly as it was and the run exits 2.
		//
		// This is not hypothetical, and it is precisely why the check must be cumulative. Pass 1
		// on the P3-b about-merz fixture preserves the text; pass 2, rebuilding the paragraph that
		// nova-blocks#610 has double-wrapped (`<p …><p …>text</p></p>`, which parses VALID with
		// the whole inner <p> captured as the content attribute), drops the inner content — two
		// press-mention links, 106 characters of body text. A per-pass check passes both passes
		// individually and still loses the text.
		if ( ! $result['text_safe'] ) {
			$refused[]   = $post_id;
			$unchanged[] = $post_id;
			continue;
		}

		// A document that never reached a fixed point within the budget gets NOTHING written.
		// Writing its last intermediate would leave the post in a state that is neither what the
		// author wrote nor canonical, while the envelope tells the operator to go and inspect it —
		// inspect what, exactly? The same discipline `content_altered` already applies: when the
		// command cannot finish the job, it leaves the evidence intact.
		if ( ! $result['stable'] ) {
			$unchanged[] = $post_id;
			continue;
		}

		$canonical = (string) $result['canonical_content'];

		// §3.5 / idempotence: write ONLY when the bytes actually differ. A canonical post
		// canonicalizes to itself, and rewriting it anyway would churn post_modified and the
		// revision history for no change.
		if ( $canonical === (string) $target['content'] ) {
			$unchanged[] = $post_id;
			continue;
		}

		if ( $dry_run ) {
			$updated[] = $post_id;
			continue;
		}

		// `wp_update_post()` expects SLASHED data — `wp_insert_post()` runs `wp_unslash()` before the
		// DB write — so an unslashed string silently loses every literal backslash on the way to
		// disk. Canonical block markup is full of them by construction: `serializeAttributes()`
		// escapes `--` as `--`, `<` as `<`, `&` as `&` inside every block
		// comment. The house's own mandated inline form, `var(--sm-current-*-color)` (§3.8), hits
		// that path. Without this call the canonicalizer corrupts precisely the content it exists
		// to protect — and the corruption is invisible to every gate above, because it happens
		// inside the write.
		$saved = wp_update_post(
			[
				'ID'           => $post_id,
				'post_content' => wp_slash( $canonical ),
			],
			true
		);

		if ( is_wp_error( $saved ) ) {
			$failures[ $post_id ] = (string) $saved->get_error_message();
			$unchanged[]          = $post_id;
			continue;
		}

		// Read the post back and compare BYTES against what was handed to `wp_update_post()`, in
		// its pre-slash form. The §3.9 re-parse proves validity, which is not the same thing: a
		// save-path mutation that leaves the markup parseable — kses stripping an attribute for a
		// user without `unfiltered_html`, a security plugin's `content_save_pre`, or a slashing
		// bug landing inside HTML text — would sail through it and exit 0 with content that
		// matches neither the original nor the canonical form. One comparison catches all three.
		clean_post_cache( $post_id );
		$stored = get_post( $post_id );
		$stored = $stored instanceof WP_Post ? (string) $stored->post_content : '';

		if ( $stored !== $canonical ) {
			$mutated[ $post_id ] = strlen( $stored ) - strlen( $canonical );
			continue;
		}

		$updated[] = $post_id;
	}

	// -------------------------------------------------- pass 2: the fresh re-parse (§3.9 proof)
	// Deliberately a second process over what get_post() returns NOW — not the string just handed
	// to wp_update_post(). Filters on `content_save_pre`, kses, or a slashing bug would all be
	// invisible to a same-session check and are exactly what this catches.
	$verify_documents = [];

	foreach ( $targets as $target ) {
		$post_id = (int) $target['post_id'];

		if ( $dry_run ) {
			// Predict what a real run would LEAVE ON DISK, which for a refused or never-stable
			// document is the original bytes — not the intermediate the loop happened to reach.
			// Feeding the intermediate here made `--dry-run` report a different `code` and a
			// different `invalid_after` than the real run on exactly the flagship #610 fixture,
			// which is the opposite of "reports the predicted diff" (§3.6).
			$result  = $first[ $post_id ] ?? null;
			$written = is_array( $result ) && isset( $result['canonical_content'] )
				&& ! empty( $result['text_safe'] ) && ! empty( $result['stable'] );
			$content = $written ? (string) $result['canonical_content'] : (string) $target['content'];
		} else {
			// Bypass any object-cache copy of the pre-write post.
			clean_post_cache( $post_id );
			$fresh   = get_post( $post_id );
			$content = $fresh instanceof WP_Post ? (string) $fresh->post_content : '';
		}

		$verify_documents[] = [
			'id'      => $post_id,
			'content' => $content,
		];
	}

	// The verification pass runs in `validate` mode: byte-stability was already established by the
	// iteration loop above, so all that is left to prove here is the §3.9 claim — zero invalid on a
	// FRESH parse of what the database actually holds.
	$verify = novablocks_cli_harness_invoke( 'validate', $verify_documents, $surface );

	if ( is_wp_error( $verify ) ) {
		return novablocks_agent_blocks_error_result( $verify );
	}

	$second = novablocks_cli_index_harness_documents( $verify );

	// A mutated write is an ERROR, not a finding: the database now holds something neither the
	// author nor this command chose, and every downstream number would describe a document that no
	// longer exists. Exit 1, name the posts and the byte delta, and stop.
	if ( ! empty( $mutated ) ) {
		$deltas = [];
		foreach ( $mutated as $post_id => $delta ) {
			$deltas[] = sprintf( '%d (%+d bytes)', $post_id, $delta );
		}

		return [
			'exit'     => 1,
			'code'     => 'write_mutated',
			'summary'  => sprintf(
				/* translators: %s: comma-separated "post id (+/-N bytes)" pairs. */
				__( 'The save path changed the content on the way to the database for post(s) %s — what was stored is not what canonicalization produced. Likely causes: kses stripping markup the acting user may not author, a content_save_pre filter, or a slashing bug. Inspect before re-running.', '__plugin_txtd' ),
				implode( ', ', $deltas )
			),
			'data'     => [
				'mutated' => array_map(
					static function ( $post_id, $delta ) {
						return [
							'post_id'    => (int) $post_id,
							'byte_delta' => (int) $delta,
						];
					},
					array_keys( $mutated ),
					array_values( $mutated )
				),
				'updated' => array_values( $updated ),
			],
			'warnings' => [],
		];
	}

	// ------------------------------------------------------------------------ the report
	$posts           = [];
	$invalid_before  = [];
	$invalid_after   = [];
	$not_converged   = [];
	$text_changed    = [];
	$nested_p_added  = [];
	$not_stable      = [];

	foreach ( $targets as $target ) {
		$post_id = (int) $target['post_id'];
		$one     = $first[ $post_id ] ?? [];
		$two     = $second[ $post_id ] ?? [];

		$before = is_array( $one['invalid'] ?? null ) ? $one['invalid'] : [];
		$after  = is_array( $two['invalid'] ?? null ) ? $two['invalid'] : [];

		foreach ( $before as $entry ) {
			$invalid_before[] = array_merge( [ 'post_id' => $post_id ], $entry );
		}
		foreach ( $after as $entry ) {
			$invalid_after[] = array_merge( [ 'post_id' => $post_id ], $entry );
		}

		$nested_before = (int) ( $one['nested_paragraphs_before'] ?? 0 );
		$nested_after  = (int) ( $one['nested_paragraphs_after'] ?? 0 );
		$text_ok       = ! empty( $one['text_safe'] );
		$converged     = empty( $after );
		// Byte-stability comes from the iteration loop: the document reached a pass whose output
		// equalled its input, within the bound. A refused document is not "unstable" — its
		// iteration was cut short deliberately — so it is reported through `refused` alone rather
		// than double-counted.
		$stable = ! empty( $one['stable'] ) || ! $text_ok;

		if ( ! $converged ) {
			$not_converged[] = $post_id;
		}
		if ( ! $text_ok ) {
			$text_changed[] = $post_id;
		}
		// §5 P3 rule (c): the guard is against INTRODUCING a nested <p>. Removing one — which the
		// recovery pass legitimately does — is the fix, not a finding.
		if ( $nested_after > $nested_before ) {
			$nested_p_added[] = $post_id;
		}
		if ( ! $stable ) {
			$not_stable[] = $post_id;
		}

		$posts[] = [
			'post_id'                  => $post_id,
			'post_type'                => (string) $target['post_type'],
			'origin'                   => (string) $target['origin'],
			'block_count'              => (int) ( $one['block_count'] ?? 0 ),
			'passes'                   => (int) ( $one['passes'] ?? 0 ),
			'changed'                  => in_array( $post_id, $updated, true ),
			'invalid_before'           => count( $before ),
			'invalid_after'            => count( $after ),
			'converged'                => $converged,
			'stable'                   => $stable,
			'inner_text_preserved'     => $text_ok,
			'nested_paragraphs_before' => $nested_before,
			'nested_paragraphs_after'  => $nested_after,
			'error'                    => $failures[ $post_id ] ?? null,
		];
	}

	// Contract §1.4 (F-W4-2, ratified in v0.3.11): a refused post is named "with the affected blocks
	// and the would-be-lost text length". A bare id list would say a rewrite was declined without
	// saying what it would have cost — which is the one thing an operator needs to judge it.
	$refused_records = [];
	foreach ( $refused as $post_id ) {
		$entry  = $first[ $post_id ] ?? [];
		$blocks = [];

		foreach ( (array) ( $entry['lost_blocks'] ?? [] ) as $lost ) {
			$blocks[] = [
				'index' => (int) ( $lost['index'] ?? -1 ),
				'name'  => (string) ( $lost['name'] ?? '' ),
			];
		}

		$refused_records[] = [
			'post_id'     => (int) $post_id,
			'lost_length' => max( 0, (int) ( $entry['inner_text_before_length'] ?? 0 ) - (int) ( $entry['inner_text_after_length'] ?? 0 ) ),
			'blocks'      => $blocks,
		];
	}

	$warnings = array_merge(
		novablocks_cli_preset_warnings( $targets ),
		novablocks_cli_third_party_editor_warnings()
	);

	if ( ! empty( $refused ) ) {
		$warnings[] = [
			'code'     => 'content_altered',
			'message'  => sprintf(
				/* translators: 1: comma-separated post ids, 2: total characters that would have been lost. */
				__( 'Refused to rewrite post(s) %1$s: the canonical serialization would have dropped %2$d character(s) of visible text or introduced a nested <p>. They are untouched and still need attention — usually a paragraph that nova-blocks#610 has double-wrapped, which an editor session must repair by hand. See data.refused[] for the affected blocks.', '__plugin_txtd' ),
				implode( ', ', $refused ),
				array_sum( array_column( $refused_records, 'lost_length' ) )
			),
			'post_ids' => $refused,
		];
	}

	if ( ! empty( $text_changed ) ) {
		$warnings[] = [
			'code'     => 'inner_text_changed',
			'message'  => sprintf(
				/* translators: %s: comma-separated post ids. */
				__( 'Visible text differs on post(s) %s. Canonicalization must be text-preserving — inspect before trusting this run.', '__plugin_txtd' ),
				implode( ', ', $text_changed )
			),
			'post_ids' => $text_changed,
		];
	}

	if ( ! empty( $not_stable ) ) {
		$warnings[] = [
			'code'     => 'not_yet_stable',
			'message'  => sprintf(
				/* translators: 1: comma-separated post ids, 2: the pass budget. */
				__( 'Post(s) %1$s were still changing after %2$d canonicalization passes and never reached a byte-stable fixed point. A document still moving at that point is oscillating, not converging slowly — inspect it rather than re-running.', '__plugin_txtd' ),
				implode( ', ', $not_stable ),
				NOVABLOCKS_CLI_MAX_CANONICALIZE_PASSES
			),
			'post_ids' => $not_stable,
		];
	}

	if ( ! empty( $nested_p_added ) ) {
		$warnings[] = [
			'code'     => 'nested_paragraph_introduced',
			'message'  => sprintf(
				/* translators: %s: comma-separated post ids. */
				__( 'A nested <p> appeared inside a paragraph on post(s) %s — the recurring mangling.', '__plugin_txtd' ),
				implode( ', ', $nested_p_added )
			),
			'post_ids' => $nested_p_added,
		];
	}

	foreach ( $failures as $post_id => $message ) {
		$warnings[] = [
			'code'     => 'write_failed',
			'message'  => sprintf(
				/* translators: 1: post id, 2: the underlying error. */
				__( 'Post %1$d was not rewritten: %2$s', '__plugin_txtd' ),
				$post_id,
				$message
			),
			'post_ids' => [ (int) $post_id ],
		];
	}

	$data = [
		'dry_run'        => $dry_run,
		'posts'          => $posts,
		'updated'        => array_values( $updated ),
		'unchanged'      => array_values( array_unique( $unchanged ) ),
		'invalid_before' => $invalid_before,
		'invalid_after'  => $invalid_after,
		'not_converged'  => $not_converged,
		'not_yet_stable' => $not_stable,
		'refused'        => $refused_records,
		'harness'        => $verify['bootstrap'] ?? new stdClass(),
	];

	if ( ! empty( $invalid_after ) ) {
		return [
			// Exit 2 with `ok:true`: the machinery completed, and remaining invalid blocks are a
			// finding the caller must inspect. Bug nova-blocks#610 lands here honestly.
			'exit'     => 2,
			'code'     => 'invalid_blocks',
			'summary'  => sprintf(
				/* translators: 1: invalid block count after the write, 2: post count, 3: invalid count before. */
				__( '%1$d invalid block(s) remain across %2$d post(s) after canonicalization (was %3$d). See data.invalid_after[] — these documents do not converge; do not re-run expecting a different result.', '__plugin_txtd' ),
				count( $invalid_after ),
				count( $not_converged ),
				count( $invalid_before )
			),
			'data'     => $data,
			'warnings' => $warnings,
		];
	}

	if ( ! empty( $refused ) ) {
		// Reached only when every refused post happens to parse clean anyway — the usual case
		// lands in the `invalid_after` branch above, because a post whose rewrite was refused is
		// re-read unchanged and is still invalid. Exit 2 either way: §2 defines exit 2 as
		// "completed with findings the caller must inspect", and "we declined to rewrite your
		// content" is exactly that.
		return [
			'exit'     => 2,
			'code'     => 'content_altered',
			'summary'  => sprintf(
				/* translators: %d: number of refused posts. */
				_n( '%d post was left untouched because canonicalizing it would have changed its visible text. See data.refused[].', '%d posts were left untouched because canonicalizing them would have changed their visible text. See data.refused[].', count( $refused ), '__plugin_txtd' ),
				count( $refused )
			),
			'data'     => $data,
			'warnings' => $warnings,
		];
	}

	if ( ! empty( $not_stable ) ) {
		return [
			'exit'     => 2,
			'code'     => 'not_yet_stable',
			'summary'  => sprintf(
				/* translators: 1: number of unstable posts, 2: the pass budget. */
				__( '%1$d post(s) never reached a byte-stable fixed point within %2$d passes. See data.not_yet_stable[].', '__plugin_txtd' ),
				count( $not_stable ),
				NOVABLOCKS_CLI_MAX_CANONICALIZE_PASSES
			),
			'data'     => $data,
			'warnings' => $warnings,
		];
	}

	if ( empty( $updated ) ) {
		return [
			'exit'     => 0,
			'code'     => 'noop',
			'summary'  => sprintf(
				/* translators: %d: number of posts checked. */
				_n( '%d post already canonical: nothing written, zero invalid on a fresh re-parse.', '%d posts already canonical: nothing written, zero invalid on a fresh re-parse.', count( $posts ), '__plugin_txtd' ),
				count( $posts )
			),
			'data'     => $data,
			'warnings' => $warnings,
		];
	}

	return [
		'exit'     => 0,
		'code'     => 'ok',
		'summary'  => sprintf(
			$dry_run
				/* translators: 1: number of posts that would change, 2: total posts. */
				? __( '%1$d of %2$d post(s) would be rewritten (--dry-run: nothing was written). Zero invalid blocks predicted.', '__plugin_txtd' )
				/* translators: 1: number of posts rewritten, 2: total posts. */
				: __( '%1$d of %2$d post(s) rewritten. Fresh re-parse: zero invalid blocks.', '__plugin_txtd' ),
			count( $updated ),
			count( $posts )
		),
		'data'     => $data,
		'warnings' => $warnings,
	];
}

/**
 * How many canonicalization passes one invocation may run before giving up (contract §1.4, as
 * amended v0.3.11). Three is not arbitrary: the observed worst case in the lab corpus reaches its
 * fixed point on the third pass (P3-a, 67,341 B authored → 64,661 → 65,067 → 65,067), and a
 * document still moving after that is not converging slowly, it is oscillating.
 */
const NOVABLOCKS_CLI_MAX_CANONICALIZE_PASSES = 3;

/**
 * Iterate every target to its byte-stable fixed point, in memory, writing nothing.
 *
 * Each pass is a **fresh harness invocation** whose input is the previous pass's output. A document
 * leaves the working set as soon as a pass returns output identical to its input — that is the
 * fixed point — or as soon as its CUMULATIVE text check fails, since continuing to iterate a
 * document whose text is already lost only wastes passes on a result that will be refused anyway.
 *
 * Why this belongs inside one invocation rather than being an operator's job: canonicalization is
 * not a one-pass fixed point. WordPress's own `fixCustomClassname` promotes a class present in the
 * saved markup but absent from the generated save output into an explicit `className` attribute on
 * the next parse, so pass 1 can emit perfectly valid markup that pass 2 still rewrites. Exiting 0
 * after pass 1 would tell an agent "done" about a document the very next `canonicalize` in its
 * pipeline would change again.
 *
 * @param array  $targets Target records (`post_id`, `content`, …).
 * @param string $surface `'cli'` (default) or `'ability'` — forwarded to `novablocks_cli_harness_invoke()`
 *                         so a mid-loop protocol-mismatch error is worded per surface (security
 *                         review LOW-2 item 2).
 *
 * @return array|WP_Error `{ posts: [ post_id => result ], passes_run: int }`, or WP_Error.
 */
function novablocks_cli_canonicalize_to_fixed_point( array $targets, string $surface = 'cli' ) {
	$state = [];

	foreach ( $targets as $target ) {
		$post_id = (int) $target['post_id'];

		$state[ $post_id ] = [
			'content'                  => (string) $target['content'],
			'passes'                   => 0,
			'stable'                   => false,
			'active'                   => true,
			'text_safe'                => true,
			'invalid'                  => [],
			'block_count'              => 0,
			'nested_paragraphs_before' => 0,
			'nested_paragraphs_after'  => 0,
			'inner_text_before_sha1'   => null,
			'inner_text_after_sha1'    => null,
			'inner_text_before_length' => 0,
			'inner_text_after_length'  => 0,
			'lost_blocks'              => [],
			'error'                    => null,
		];
	}

	$passes_run = 0;

	for ( $pass = 1; $pass <= NOVABLOCKS_CLI_MAX_CANONICALIZE_PASSES; $pass++ ) {
		$documents = [];

		foreach ( $state as $post_id => $entry ) {
			if ( $entry['active'] ) {
				$documents[] = [
					'id'      => $post_id,
					'content' => $entry['content'],
				];
			}
		}

		if ( empty( $documents ) ) {
			break;
		}

		$response = novablocks_cli_harness_invoke( 'canonicalize', $documents, $surface );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$passes_run++;
		$results = novablocks_cli_index_harness_documents( $response );

		foreach ( $documents as $document ) {
			$post_id = (int) $document['id'];
			$result  = $results[ $post_id ] ?? null;

			$state[ $post_id ]['passes']++;

			if ( ! is_array( $result ) || ! isset( $result['canonical_content'] ) ) {
				$state[ $post_id ]['error']  = isset( $result['error'] )
					? (string) $result['error']
					: __( 'the harness returned no canonical content', '__plugin_txtd' );
				$state[ $post_id ]['active'] = false;
				continue;
			}

			// Facts about the ORIGINAL document come from the first pass only; the cumulative
			// "after" facts are overwritten by each subsequent pass.
			if ( 1 === $state[ $post_id ]['passes'] ) {
				$state[ $post_id ]['invalid']                  = is_array( $result['invalid'] ?? null ) ? $result['invalid'] : [];
				$state[ $post_id ]['block_count']              = (int) ( $result['block_count'] ?? 0 );
				$state[ $post_id ]['nested_paragraphs_before'] = (int) ( $result['nested_paragraphs_before'] ?? 0 );
				$state[ $post_id ]['inner_text_before_sha1']   = $result['inner_text_before_sha1'] ?? null;
				$state[ $post_id ]['inner_text_before_length'] = (int) ( $result['inner_text_before_length'] ?? 0 );
			}

			$state[ $post_id ]['nested_paragraphs_after'] = (int) ( $result['nested_paragraphs_after'] ?? 0 );
			$state[ $post_id ]['inner_text_after_sha1']   = $result['inner_text_after_sha1'] ?? null;
			$state[ $post_id ]['inner_text_after_length'] = (int) ( $result['inner_text_after_length'] ?? 0 );

			if ( is_array( $result['lost_blocks'] ?? null ) && ! empty( $result['lost_blocks'] ) ) {
				$state[ $post_id ]['lost_blocks'] = $result['lost_blocks'];
			}

			$canonical = (string) $result['canonical_content'];

			// The cumulative §5 P3 (c) gate: original text vs text after this pass, and nested-<p>
			// count against the ORIGINAL count (removing one is the repair, not a finding).
			$text_safe = novablocks_cli_canonicalization_is_text_safe( $state[ $post_id ] );

			if ( ! $text_safe ) {
				$state[ $post_id ]['text_safe'] = false;
				$state[ $post_id ]['active']    = false;
				// The content is NOT advanced: `canonical_content` reports what the refused pass
				// would have produced, but the post keeps whatever the last safe pass held.
				$state[ $post_id ]['canonical_content'] = $state[ $post_id ]['content'];
				continue;
			}

			if ( $canonical === $state[ $post_id ]['content'] ) {
				$state[ $post_id ]['stable'] = true;
				$state[ $post_id ]['active'] = false;
			}

			$state[ $post_id ]['content'] = $canonical;
		}
	}

	$posts = [];

	foreach ( $state as $post_id => $entry ) {
		$entry['canonical_content'] = $entry['canonical_content'] ?? $entry['content'];
		unset( $entry['active'] );
		$posts[ $post_id ] = $entry;
	}

	return [
		'posts'      => $posts,
		'passes_run' => $passes_run,
	];
}

/**
 * Whether the CUMULATIVE canonicalization so far may be written back, per §5 P3 rule (c).
 *
 * Two conditions: the visible text of the original document still matches the text after the latest
 * pass (compared by digest), and no nested `<p>` has appeared inside a paragraph relative to the
 * ORIGINAL count. Removing a nested `<p>` is the repair, not a finding, so only an increase counts.
 *
 * FAIL CLOSED: a missing digest returns false, refusing the write. The fields are always present on
 * a successful canonicalize pass with the protocol handshake in place, so this should be unreachable
 * in practice — but for a separately-installed package, version skew is a routine failure mode, and a
 * gate that cannot answer must not answer "safe".
 *
 * @param array $entry Accumulated per-post iteration state.
 *
 * @return bool
 */
function novablocks_cli_canonicalization_is_text_safe( array $entry ): bool {
	$before = $entry['inner_text_before_sha1'] ?? null;
	$after  = $entry['inner_text_after_sha1'] ?? null;

	// FAIL CLOSED — see the docblock above; a missing digest refuses the write.
	if ( null === $before || null === $after ) {
		return false;
	}

	if ( $before !== $after ) {
		return false;
	}

	return (int) $entry['nested_paragraphs_after'] <= (int) $entry['nested_paragraphs_before'];
}

/**
 * Apply contract §3.6's destructive-command gate.
 *
 * Confirmation is bound to the OUTPUT FORMAT, not to TTY detection: under `--format=json|yaml` a
 * prompt would corrupt the machine contract, so `--yes` is strictly required and its absence emits
 * `confirmation_required`, exit 1, with STDOUT still envelope-only. Under `--format=table` an
 * interactive `WP_CLI::confirm()` is accepted in its place.
 *
 * @param array $assoc_args The command's assoc_args.
 * @param int   $count      Number of posts about to be rewritten.
 *
 * @return bool True when the write may proceed. (On refusal this emits and halts.)
 */
function novablocks_cli_confirm_destructive( array $assoc_args, int $count ): bool {
	if ( novablocks_cli_bool_flag( $assoc_args, 'yes' ) ) {
		return true;
	}

	$format = novablocks_cli_format( $assoc_args );

	if ( 'table' !== $format ) {
		novablocks_cli_emit(
			false,
			'confirmation_required',
			sprintf(
				/* translators: %d: number of posts. */
				__( 'canonicalize rewrites stored post content on %d post(s) and is destructive (§3.6). Under --format=json|yaml, pass --yes.', '__plugin_txtd' ),
				$count
			),
			[ 'posts' => $count ],
			[],
			1,
			[],
			$assoc_args
		);

		return false;
	}

	\WP_CLI::confirm(
		sprintf(
			/* translators: %d: number of posts. */
			__( 'Rewrite stored block markup on %d post(s)?', '__plugin_txtd' ),
			$count
		),
		$assoc_args
	);

	return true;
}
