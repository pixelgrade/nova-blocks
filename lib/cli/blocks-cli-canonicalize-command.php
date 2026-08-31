<?php
/**
 * `wp pixelgrade blocks canonicalize <post-id>…` — rewrite stored markup to what the editor would
 * save, and PROVE it by a fresh re-parse.
 *
 * Contract (`docs/plans/agentic-stack/CONTRACT.md` v0.3.10) §1.4: capability `edit_posts` PLUS a
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
 * pre-write gate). NOTE: this token is not in the contract's closed §2 code list and is flagged in
 * the W4 report for orchestrator ratification — the alternative was exiting 0 after destroying
 * text, which §5 P3 (c) forbids. `harness_unavailable` — the agent-tools package, a Node binary, or
 * (`--via-editor`) the lab-only browser harness is absent. `confirmation_required` — a real write
 * under `--format=json|yaml` without `--yes`. `invalid_params` / `permission_denied` — see EXIT
 * CODES.
 *
 * ## WARNINGS
 *
 * `not_yet_stable` — the post parses with zero invalid blocks but does not yet re-serialize to
 * itself, so a further run will still rewrite it. Canonicalization is not always a one-pass fixed
 * point: WordPress promotes a class present in the saved markup but absent from the generated save
 * output into an explicit `className` attribute on the next parse. Measured on the P3-a fixture,
 * 67,341 B authored -> 64,661 -> 65,067 -> 65,067 (stable at pass 3). Exit stays 0 — validity is
 * what §1.4 gates on. `inner_text_changed` / `nested_paragraph_introduced` — the §5 P3 rule (c)
 * guards. `preset_detected` — §3.8 pass-through. `write_failed` — a post could not be rewritten.
 *
 * ## EXIT CODES
 *
 * 0 `invalid_after == 0` and nothing refused · 2 some posts still invalid / did not converge / were
 * refused to protect their text · 1
 * harness_unavailable / confirmation_required / invalid_params / harness_failed / write_failed ·
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

	$probe = novablocks_cli_harness_probe();

	if ( empty( $probe['available'] ) ) {
		novablocks_cli_harness_unavailable( $probe, $assoc_args );

		return;
	}

	// ------------------------------------------------------------------ pass 1: canonicalize
	$response = novablocks_cli_harness_invoke( 'canonicalize', novablocks_cli_harness_documents( $targets ) );

	if ( is_wp_error( $response ) ) {
		novablocks_cli_emit_wp_error( $response, $assoc_args );

		return;
	}

	$first = novablocks_cli_index_harness_documents( $response );

	// ---------------------------------------------------------------------------- the write
	$updated   = [];
	$unchanged = [];
	$failures  = [];
	$refused   = [];

	foreach ( $targets as $target ) {
		$post_id = (int) $target['post_id'];
		$result  = $first[ $post_id ] ?? null;

		if ( ! is_array( $result ) || ! isset( $result['canonical_content'] ) ) {
			$failures[ $post_id ] = isset( $result['error'] ) ? (string) $result['error'] : __( 'the harness returned no canonical content', '__plugin_txtd' );
			$unchanged[]          = $post_id;
			continue;
		}

		// §5 P3 rule (c) is a PRE-WRITE gate, not a post-mortem. Reporting "we destroyed 106
		// characters of your visible text" after the write is honest but useless — the content is
		// already gone and the command has no way to put it back. So a canonicalization that would
		// lose text, or introduce a nested <p>, is refused: the post is left exactly as it was and
		// the run exits 2 with the post named.
		//
		// This is not hypothetical. Recovering a paragraph that nova-blocks#610 has double-wrapped
		// (`<p …><p …>text</p></p>`, which parses VALID with the whole inner <p> captured as the
		// content attribute) drops the inner content on rebuild. Measured on the P3-b about-merz
		// fixture: two press-mention links, 106 characters of body text, silently removed.
		if ( ! novablocks_cli_canonicalization_is_text_safe( $result ) ) {
			$refused[]   = $post_id;
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

		$saved = wp_update_post(
			[
				'ID'           => $post_id,
				'post_content' => $canonical,
			],
			true
		);

		if ( is_wp_error( $saved ) ) {
			$failures[ $post_id ] = (string) $saved->get_error_message();
			$unchanged[]          = $post_id;
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
			$result  = $first[ $post_id ] ?? null;
			$content = is_array( $result ) && isset( $result['canonical_content'] )
				? (string) $result['canonical_content']
				: (string) $target['content'];
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

	// Pass 2 runs in `canonicalize` mode rather than `validate` mode. It writes nothing — the mode
	// only decides what the harness COMPUTES — and it buys a second fact for free: whether the
	// stored content re-serializes to itself. That matters because canonicalization is not always
	// a one-pass fixed point. WordPress's own `fixCustomClassname` promotes a class present in the
	// saved markup but absent from the generated save output into an explicit `className`
	// attribute, so a first pass can emit valid markup whose re-parse captures new attributes and
	// serializes 400 bytes longer. Measured on the P3-a fixture: 67,341 authored → 64,661 →
	// 65,067 → 65,067 (fixed point at pass 3). The editor does exactly the same thing across two
	// save sessions. Exit codes stay governed by `invalid_after` per §1.4; instability is a
	// warning, because a document that parses clean IS canonical in the sense the contract gates
	// on — it is just not yet byte-stable.
	$verify = novablocks_cli_harness_invoke( 'canonicalize', $verify_documents );

	if ( is_wp_error( $verify ) ) {
		novablocks_cli_emit_wp_error( $verify, $assoc_args );

		return;
	}

	$second = novablocks_cli_index_harness_documents( $verify );

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
		$text_ok       = (bool) ( $one['inner_text_preserved'] ?? true );
		$converged     = empty( $after );

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

		// Byte-stability of what is now stored: pass 2 re-serialized it and reports whether that
		// differed. Only meaningful when the document parses clean — a non-converging document is
		// reported through `converged`, and calling it "unstable" as well would double-count one
		// finding.
		$stable = ! array_key_exists( 'changed', $two ) || ! $two['changed'];
		if ( $converged && ! $stable ) {
			$not_stable[] = $post_id;
		}

		$posts[] = [
			'post_id'                  => $post_id,
			'post_type'                => (string) $target['post_type'],
			'origin'                   => (string) $target['origin'],
			'block_count'              => (int) ( $one['block_count'] ?? 0 ),
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

	$warnings = novablocks_cli_preset_warnings( $targets );

	if ( ! empty( $refused ) ) {
		$warnings[] = [
			'code'     => 'content_altered',
			'message'  => sprintf(
				/* translators: %s: comma-separated post ids. */
				__( 'Refused to rewrite post(s) %s: the canonical serialization would have changed their visible text or introduced a nested <p>. They are untouched and still need attention — usually a paragraph that nova-blocks#610 has double-wrapped, which an editor session must repair by hand.', '__plugin_txtd' ),
				implode( ', ', $refused )
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
				/* translators: %s: comma-separated post ids. */
				__( 'Post(s) %s now parse with zero invalid blocks but do not yet re-serialize to themselves — WordPress promotes classes found in the saved markup into explicit className attributes on the next parse. Run canonicalize once more to reach the byte-stable fixed point. This is not an error and the content is already valid.', '__plugin_txtd' ),
				implode( ', ', $not_stable )
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
		'refused'        => array_values( $refused ),
		'harness'        => $verify['bootstrap'] ?? new stdClass(),
	];

	if ( ! empty( $invalid_after ) ) {
		novablocks_cli_emit(
			// Exit 2 with `ok:true`: the machinery completed, and remaining invalid blocks are a
			// finding the caller must inspect. Bug nova-blocks#610 lands here honestly.
			true,
			'invalid_blocks',
			sprintf(
				/* translators: 1: invalid block count after the write, 2: post count, 3: invalid count before. */
				__( '%1$d invalid block(s) remain across %2$d post(s) after canonicalization (was %3$d). See data.invalid_after[] — these documents do not converge; do not re-run expecting a different result.', '__plugin_txtd' ),
				count( $invalid_after ),
				count( $not_converged ),
				count( $invalid_before )
			),
			$data,
			$warnings,
			2,
			[],
			$assoc_args
		);

		return;
	}

	if ( ! empty( $refused ) ) {
		// Reached only when every refused post happens to parse clean anyway — the usual case
		// lands in the `invalid_after` branch above, because a post whose rewrite was refused is
		// re-read unchanged and is still invalid. Exit 2 either way: §2 defines exit 2 as
		// "completed with findings the caller must inspect", and "we declined to rewrite your
		// content" is exactly that.
		novablocks_cli_emit(
			true,
			'content_altered',
			sprintf(
				/* translators: %d: number of refused posts. */
				_n( '%d post was left untouched because canonicalizing it would have changed its visible text. See data.refused[].', '%d posts were left untouched because canonicalizing them would have changed their visible text. See data.refused[].', count( $refused ), '__plugin_txtd' ),
				count( $refused )
			),
			$data,
			$warnings,
			2,
			[],
			$assoc_args
		);

		return;
	}

	if ( empty( $updated ) ) {
		novablocks_cli_emit(
			true,
			'noop',
			sprintf(
				/* translators: %d: number of posts checked. */
				_n( '%d post already canonical: nothing written, zero invalid on a fresh re-parse.', '%d posts already canonical: nothing written, zero invalid on a fresh re-parse.', count( $posts ), '__plugin_txtd' ),
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
		true,
		'ok',
		sprintf(
			$dry_run
				/* translators: 1: number of posts that would change, 2: total posts. */
				? __( '%1$d of %2$d post(s) would be rewritten (--dry-run: nothing was written). Zero invalid blocks predicted.', '__plugin_txtd' )
				/* translators: 1: number of posts rewritten, 2: total posts. */
				: __( '%1$d of %2$d post(s) rewritten. Fresh re-parse: zero invalid blocks.', '__plugin_txtd' ),
			count( $updated ),
			count( $posts )
		),
		$data,
		$warnings,
		0,
		[],
		$assoc_args
	);
}

/**
 * Whether a canonicalization may be written back, per §5 P3 rule (c).
 *
 * Two conditions, both computed by the harness on the pass that produced the content: the visible
 * text is unchanged, and no nested `<p>` appeared inside a paragraph. Removing a nested `<p>` is
 * the repair, not a finding, so only an INCREASE counts.
 *
 * A harness result missing these keys is treated as safe — the fields are always present on a
 * successful canonicalize pass, and refusing every write on a schema surprise would turn a
 * reporting gap into data loss of a different kind.
 *
 * @param array $result One harness document result from the canonicalize pass.
 *
 * @return bool
 */
function novablocks_cli_canonicalization_is_text_safe( array $result ): bool {
	if ( array_key_exists( 'inner_text_preserved', $result ) && ! $result['inner_text_preserved'] ) {
		return false;
	}

	$before = (int) ( $result['nested_paragraphs_before'] ?? 0 );
	$after  = (int) ( $result['nested_paragraphs_after'] ?? 0 );

	return $after <= $before;
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
