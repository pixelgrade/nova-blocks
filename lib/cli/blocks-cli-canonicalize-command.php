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
 * DAMAGED their content: destroyed visible text (`inner_text_lost`), written a nested `<p>` that
 * orphans a paragraph's text on the next parse (`nested_paragraph_introduced`), or the §5 P3 (c)
 * gate could not answer (`gate_unavailable`, failing closed) — exit 2.
 * `content_diverged` — one or more posts were LEFT UNTOUCHED because the pass, while losing NO
 * text, is still not text-identical: an entity re-encoded, words that read differently
 * (`inner_text_altered`) — exit 2. Both are BLOCKING and neither writes anything. When both
 * classes are present in one run, the envelope's `code` is the severe one and
 * `data.refused[].reason_code` is per post.
 * `not_yet_stable` — a post was still changing after the pass budget and never reached a
 * byte-stable fixed point (exit 2).
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
 * `content_diverged` / `inner_text_changed` / `nested_paragraph_introduced` — the §5 P3 rule (c)
 * guards. `preset_detected` — §3.8 pass-through. `write_failed` — a post could not be rewritten.
 * `third_party_editor_scripts` — another plugin or theme adds block-editor assets the harness does
 * not load, so a `blocks.*` filter of theirs could make the real editor serialize differently.
 * **That detector only sees unconditional registrations** (see its docblock in
 * `blocks-cli-harness.php`); its silence is not evidence that no third party is involved.
 *
 * `data.refused[]` carries `{post_id, reason_code, lost_length, blocks:[{index, name}]}` — the
 * affected blocks and the would-be-lost character count, as §1.4's F-W4-2 ruling pins, plus the
 * closed-vocabulary reason the rewrite was declined: `inner_text_lost` (characters destroyed),
 * `nested_paragraph_introduced` (the pre-detonation state — text still intact, one save from
 * losing it), `gate_unavailable` (the digests were missing; fail closed), and
 * `inner_text_altered` (text differs with no net loss). The first three are `content_altered`;
 * only the last is `content_diverged`.
 *
 * **A refusal is never a false positive.** `lost_length: 0` means "nothing destroyed YET" — read
 * `reason_code`, not the zero. On the about-athletics run a `content_altered` with
 * `lost_length: 0, blocks: []` was dismissed as known noise; it was an accurate advance warning of
 * the corruption that landed hours later and put 2,032 characters of body copy one keystroke from
 * deletion. `wp pixelgrade blocks validate`'s `not_canonical` warning is the cheaper tripwire for
 * the same condition.
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
		// `inner_text_preserved` reports the TEXT, not the verdict. Reading it off `text_safe`
		// meant a post refused purely for a nested <p> — where the text is provably intact, digests
		// equal, lengths equal — was published as `inner_text_preserved: false` and rendered
		// `text_ok NO`. That is the same conflation of the two branches that the codes above exist
		// to end, surviving one field over. The verdict has its own field: `refusal_reason`.
		$refusal_reason = $one['refusal_reason'] ?? null;
		$text_ok        = null === $refusal_reason
			|| ! in_array( $refusal_reason, [ 'inner_text_lost', 'inner_text_altered', 'gate_unavailable' ], true );
		$converged      = empty( $after );
		// Byte-stability comes from the iteration loop: the document reached a pass whose output
		// equalled its input, within the bound. A refused document is not "unstable" — its
		// iteration was cut short deliberately — so it is reported through `refused` alone rather
		// than double-counted.
		$stable = ! empty( $one['stable'] ) || ! $text_ok;

		if ( ! $converged ) {
			$not_converged[] = $post_id;
		}
		// Both guards read the SINGLE authority — the reason the gate itself returned. Restating
		// the nested-<p> conditions inline here meant two copies of one predicate, the second of
		// which would silently disagree the moment the gate's branch order changed.
		//
		// `inner_text_changed` is scoped to the branches it names, rather than firing on every
		// refusal including the nested-<p> one. The two warnings no longer overlap, which is half
		// of why a reader could not tell them apart.
		if ( ! $text_ok ) {
			$text_changed[] = $post_id;
		}
		// §5 P3 rule (c): the guard is against INTRODUCING a nested <p>. Removing one — which the
		// recovery pass legitimately does — is the fix, not a finding. Measured on the MARKUP as
		// well as the model: see `novablocks_cli_canonicalization_refusal_reason()` for why the
		// model count alone reads a detonation as an improvement.
		if ( 'nested_paragraph_introduced' === $refusal_reason ) {
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
			'refusal_reason'           => $refusal_reason,
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
			// The reason a rewrite was declined, from the closed vocabulary in
			// `novablocks_cli_canonicalization_refusal_reason()`. This is the field that makes a
			// `lost_length: 0` legible: without it, a refusal that would have re-encoded an entity
			// and a refusal that would have deleted 2,000 characters of body copy arrive under one
			// code with the same zero.
			'reason_code' => (string) ( $entry['refusal_reason'] ?? 'gate_unavailable' ),
			'lost_length' => max( 0, (int) ( $entry['inner_text_before_length'] ?? 0 ) - (int) ( $entry['inner_text_after_length'] ?? 0 ) ),
			'blocks'      => $blocks,
		];
	}

	// Split the refusals by the code they belong under, so each warning speaks about one class.
	$refused_altered  = [];
	$refused_diverged = [];
	foreach ( $refused_records as $record ) {
		if ( 'content_altered' === novablocks_cli_refusal_code( $record['reason_code'] ) ) {
			$refused_altered[] = $record;
		} else {
			$refused_diverged[] = $record;
		}
	}

	$warnings = array_merge(
		novablocks_cli_preset_warnings( $targets ),
		novablocks_cli_third_party_editor_warnings()
	);

	if ( ! empty( $refused_altered ) ) {
		$warnings[] = [
			'code'     => 'content_altered',
			'message'  => sprintf(
				/* translators: 1: comma-separated post ids, 2: comma-separated reason codes, 3: total characters that would have been lost. */
				__( 'Refused to rewrite post(s) %1$s (%2$s): the canonical serialization would have damaged their content — %3$d character(s) of visible text dropped outright, and/or a nested <p> written that orphans a paragraph\'s text on the very next parse. They are untouched and still need attention: repair the STORED MARKUP (never "Attempt Block Recovery", which is what writes the empty paragraphs). This warning is BLOCKING and is never a false positive — on a nested_paragraph_introduced record the text is still intact and lost_length is 0, which means "nothing destroyed YET", not "nothing to see". See data.refused[].', '__plugin_txtd' ),
				implode( ', ', array_column( $refused_altered, 'post_id' ) ),
				implode( ', ', array_unique( array_column( $refused_altered, 'reason_code' ) ) ),
				array_sum( array_column( $refused_altered, 'lost_length' ) )
			),
			'post_ids' => array_column( $refused_altered, 'post_id' ),
		];
	}

	if ( ! empty( $refused_diverged ) ) {
		$warnings[] = [
			'code'     => 'content_diverged',
			'message'  => sprintf(
				/* translators: %s: comma-separated post ids. */
				__( 'Refused to rewrite post(s) %s: no text would be lost, but the pass is not text-identical — an entity re-encoded, or words that read differently after the rewrite. Canonicalization that cannot be certified word-for-word is not written. Blocking, and worth reading rather than re-running. See data.refused[].', '__plugin_txtd' ),
				implode( ', ', array_column( $refused_diverged, 'post_id' ) )
			),
			'post_ids' => array_column( $refused_diverged, 'post_id' ),
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
		//
		// When both classes are present the SEVERE code wins: an envelope that says
		// `content_diverged` while one of its posts is losing body copy would be the same
		// under-reporting this split exists to end.
		$severe = ! empty( $refused_altered );

		return [
			'exit'     => 2,
			'code'     => $severe ? 'content_altered' : 'content_diverged',
			'summary'  => $severe
				? sprintf(
					/* translators: 1: number of posts, 2: comma-separated reason codes, 3: characters that would be lost. */
					__( '%1$d post(s) were left untouched because canonicalizing them would have damaged their content (%2$s; %3$d character(s) of visible text dropped). See data.refused[] — each record carries a reason_code.', '__plugin_txtd' ),
					count( $refused_altered ),
					implode( ', ', array_unique( array_column( $refused_altered, 'reason_code' ) ) ),
					array_sum( array_column( $refused_altered, 'lost_length' ) )
				)
				: sprintf(
					/* translators: %d: number of refused posts. */
					_n( '%d post was left untouched: the pass loses no text but is not text-identical, so it was not certified. See data.refused[].', '%d posts were left untouched: the passes lose no text but are not text-identical, so they were not certified. See data.refused[].', count( $refused_diverged ), '__plugin_txtd' ),
					count( $refused_diverged )
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
			'refusal_reason'           => null,
			'invalid'                  => [],
			'block_count'              => 0,
			'nested_paragraphs_before' => 0,
			'nested_paragraphs_after'  => 0,
			'nested_markup_before'     => 0,
			'nested_markup_after'      => 0,
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
				$state[ $post_id ]['nested_markup_before']     = (int) ( $result['nested_paragraph_markup_before'] ?? 0 );
				$state[ $post_id ]['inner_text_before_sha1']   = $result['inner_text_before_sha1'] ?? null;
				$state[ $post_id ]['inner_text_before_length'] = (int) ( $result['inner_text_before_length'] ?? 0 );
			}

			$state[ $post_id ]['nested_paragraphs_after'] = (int) ( $result['nested_paragraphs_after'] ?? 0 );
			$state[ $post_id ]['nested_markup_after']     = (int) ( $result['nested_paragraph_markup_after'] ?? 0 );
			$state[ $post_id ]['inner_text_after_sha1']   = $result['inner_text_after_sha1'] ?? null;
			$state[ $post_id ]['inner_text_after_length'] = (int) ( $result['inner_text_after_length'] ?? 0 );

			if ( is_array( $result['lost_blocks'] ?? null ) && ! empty( $result['lost_blocks'] ) ) {
				$state[ $post_id ]['lost_blocks'] = $result['lost_blocks'];
			}

			$canonical = (string) $result['canonical_content'];

			// The cumulative §5 P3 (c) gate: original text vs text after this pass, and nested-<p>
			// count against the ORIGINAL count (removing one is the repair, not a finding).
			$refusal = novablocks_cli_canonicalization_refusal_reason( $state[ $post_id ] );

			if ( null !== $refusal ) {
				$state[ $post_id ]['text_safe']      = false;
				$state[ $post_id ]['refusal_reason'] = $refusal;
				$state[ $post_id ]['active']         = false;
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
 * WHY the CUMULATIVE canonicalization so far may not be written back, per §5 P3 rule (c) — or
 * `null` when it may.
 *
 * This used to be a boolean, and the boolean is what made the guard dismissible in the field. Its
 * two branches — "the visible text changed" and "a nested `<p>` appeared" — both surfaced as one
 * `content_altered` code with a `lost_length` that is clamped at 0, so an operator who saw
 * `content_altered` with `lost_length: 0, blocks: []` had nothing in the envelope to distinguish
 * "this rewrite deletes your body copy" from "this rewrite re-encodes an entity". On the
 * about-athletics run that ambiguity was read as a known false positive, the warning was dismissed,
 * and the corruption it was warning about landed a few hours later. So the branches now carry
 * distinct machine tokens and the codes above them are distinct too.
 *
 * The returned vocabulary is CLOSED:
 *
 * - `inner_text_lost` — the visible text is SHORTER after the pass. Characters were destroyed.
 *   This is the nova-blocks#610 signature and the reason the gate exists.
 * - `inner_text_altered` — the visible text differs without net loss: an entity decoded, words
 *   reordered, a block's text re-emitted differently. Nothing was destroyed, and the rewrite is
 *   still refused — canonicalization must be text-IDENTICAL, and a pass whose output the command
 *   cannot certify is not one it should write.
 * - `nested_paragraph_introduced` — the text survives and the pass would introduce a nested `<p>`.
 * - `gate_unavailable` — the digests are missing, so the gate cannot answer. FAIL CLOSED.
 *
 * The nested check reads the MARKUP counts (`nested_markup_*`), not the model counts. The model
 * count is the number of paragraphs whose `content` ATTRIBUTE holds a `<p`, which is the shape a
 * swallowed paragraph has BEFORE the round trip: when the double-wrap actually lands, the re-parse
 * orphans the text, `content` becomes `""`, and the model count falls to zero. Gating on the model
 * alone therefore reads a detonation as an improvement. The model counts are still carried and
 * still reported — they are in the protocol and they say something true about the input — but the
 * gate is on the bytes. **A harness that predates the markup counts cannot answer this at all**
 * (both fields absent, so `0 > 0` is false and the check silently reverts to the model-only
 * comparison), and the digest branch does NOT cover that case: measured on the about-athletics
 * authored fixture, the digests are equal and the lengths are equal while the markup goes 0 → 3.
 * That is why `NOVABLOCKS_CLI_HARNESS_PROTOCOL` was bumped to 2 rather than left tolerant — version
 * skew is refused up front instead of quietly downgrading the gate.
 *
 * **On `lost_length`.** It is a delta between two visible-text strings that have been
 * whitespace-collapsed and had their block delimiters replaced by a space, not a count of deleted
 * characters. Splitting one block into two adds a separator, so a pass can add length while losing
 * a word; a `lost_length` of 0 therefore means "no NET shortening", never "nothing changed". The
 * digest, not the length, is what decides whether the text moved — the length only ranks how bad it
 * was. Both branches refuse the write either way.
 *
 * @param array $entry Accumulated per-post iteration state.
 *
 * @return string|null One of the four reason codes above, or null when the write may proceed.
 */
function novablocks_cli_canonicalization_refusal_reason( array $entry ): ?string {
	$before = $entry['inner_text_before_sha1'] ?? null;
	$after  = $entry['inner_text_after_sha1'] ?? null;

	// FAIL CLOSED — a gate that cannot answer must not answer "safe".
	if ( null === $before || null === $after ) {
		return 'gate_unavailable';
	}

	if ( $before !== $after ) {
		return (int) $entry['inner_text_after_length'] < (int) $entry['inner_text_before_length']
			? 'inner_text_lost'
			: 'inner_text_altered';
	}

	// Removing a nested `<p>` is the repair, not a finding, so only an INCREASE counts.
	if ( (int) ( $entry['nested_markup_after'] ?? 0 ) > (int) ( $entry['nested_markup_before'] ?? 0 ) ) {
		return 'nested_paragraph_introduced';
	}

	if ( (int) $entry['nested_paragraphs_after'] > (int) $entry['nested_paragraphs_before'] ) {
		return 'nested_paragraph_introduced';
	}

	return null;
}

/**
 * Map a refusal reason to the envelope `code` it belongs under.
 *
 * Two codes, both exit 2, both leaving the post byte-identical — the split is about what the
 * operator must do next, which is the only thing a `code` is for:
 *
 * - `content_altered` — the rewrite would harm the CONTENT: it destroys visible text now
 *   (`inner_text_lost`), or it writes a nested `<p>` that destroys it on the next parse
 *   (`nested_paragraph_introduced`), or the gate could not answer (`gate_unavailable`). The post
 *   needs a repair of its stored markup before anything else touches it.
 * - `content_diverged` — the rewrite would change the visible text without losing any of it: an
 *   entity re-encoded, words reordered. Equally blocking and equally unwritten, but the finding is
 *   a divergence to inspect rather than damage to recover from.
 *
 * **`nested_paragraph_introduced` is on the SEVERE side, and this is the correction that matters.**
 * It looked like the mild branch — the text is preserved, `lost_length` is 0 — and that appearance
 * is exactly the trap: a document about to be double-wrapped is one save away from
 * `inner_text_lost`, because the nested `<p>` re-parses to `content: ""`. Measured on the
 * about-athletics fixture: `inner_text_preserved: true`, lengths 426 → 426, digests equal, and the
 * only thing that fires is the markup counter going 0 → 3. Routing THAT document to a code that
 * says "loses nothing" would rebuild the misreading this whole split exists to prevent.
 *
 * An UNKNOWN token lands on `content_altered`. In a gate whose stated discipline is "a gate that
 * cannot answer must not answer safe", vocabulary drift must not default to the mild code.
 *
 * @param string $reason One of `novablocks_cli_canonicalization_refusal_reason()`'s tokens.
 *
 * @return string `content_altered` or `content_diverged`.
 */
function novablocks_cli_refusal_code( string $reason ): string {
	return 'inner_text_altered' === $reason ? 'content_diverged' : 'content_altered';
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
