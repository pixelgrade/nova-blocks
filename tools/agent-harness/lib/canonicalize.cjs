/**
 * Pixelgrade agent harness — parse / validate / recover / serialize for one document.
 *
 * This is the headless equivalent of the browser pass that
 * `~/.claude/skills/gene-migration/scripts/canonicalize.cjs` performs in a real editor: rebuild
 * every invalid block from its parsed attributes and inner blocks, then serialize. The recovery is
 * lossless for statics whose content lives in attributes or in children — which is what
 * `@wordpress/blocks` already guarantees, since `parse()` extracts attributes from the block
 * comment and from the saved markup through the block type's own `attributes` sources before it
 * ever compares the regenerated save output.
 *
 * Deliberately NOT here: any retry loop. Some hand-authored markup legitimately does not converge
 * (a `core/paragraph` that was valid before the pass parses invalid after it — nova-blocks#610,
 * cross-checked in the real editor with identical before/after invalid lists and byte-identical
 * serialization). Those documents report `converged: false` and the command exits 2 honestly; it
 * never re-runs the pass hoping for a different answer.
 */

'use strict';

const crypto = require( 'node:crypto' );

/**
 * Digest a string. Used for the innerText comparison, which is done by digest so a multi-pass
 * caller can compare the FIRST pass's "before" against the LAST pass's "after" without the full
 * visible text of every document travelling back through the pipe on every pass.
 *
 * @param {string} value Value.
 *
 * @return {string} Hex sha1.
 */
function sha1( value ) {
	return crypto.createHash( 'sha1' ).update( String( value ), 'utf8' ).digest( 'hex' );
}

/**
 * Flatten a parsed block tree depth-first, the same order the editor's own block list uses, so an
 * `index` in a report is stable and addressable.
 *
 * @param {Array} blocks Parsed blocks.
 * @param {Array} out    Accumulator.
 *
 * @return {Array} Flat block list.
 */
function flatten( blocks, out = [] ) {
	for ( const block of blocks || [] ) {
		out.push( block );
		flatten( block.innerBlocks || [], out );
	}
	return out;
}

const REASON_MAX = 300;

/**
 * Stable machine tokens for the block-validation failure modes `@wordpress/blocks` reports, keyed
 * by a distinctive fragment of its message template. The template — never the substituted values —
 * is what gets classified.
 */
const REASON_CODES = [
	[ /expected token of type/i, 'token_mismatch' ],
	[ /expected tag name/i, 'tag_name_mismatch' ],
	[ /unexpected attribute/i, 'unexpected_attribute' ],
	[ /expected attribute /i, 'attribute_value_mismatch' ],
	[ /expected attributes/i, 'attribute_set_mismatch' ],
	[ /expected end of content/i, 'unexpected_trailing_content' ],
	[ /instead saw end of content/i, 'truncated_content' ],
	[ /child order/i, 'child_order_mismatch' ],
];

/**
 * Summarize why a block failed validation — **without quoting any of its content**.
 *
 * `@wordpress/blocks` records each issue as `{ log, args }` where **`log` is a logger FUNCTION**
 * and the human message template is `args[0]`, with `args[1…]` as its substitutions. Stringifying
 * `log` yields the logger's source text, which is what a naive reading produces — so the template
 * is deliberately read off `args[0]`.
 *
 * Those substitutions are literal chunks of the stored markup: attribute values, class strings, the
 * generated and stored HTML. They are deliberately **redacted to `…`**. `validate` runs at the
 * `edit_posts` floor and W7 will expose it as an MCP ability, so a reason must never become a way
 * to read fragments of a post back out; the template plus a stable `code` says what went wrong
 * without saying what the content is.
 *
 * The FIRST issue is the specific one; the last is always the generic "Block validation failed for
 * `%s` (%o)…" dump carrying the entire block type object.
 *
 * @param {object} block A parsed block with `isValid === false`.
 *
 * @return {{code: string, message: string}} Redacted reason.
 */
function invalidReason( block ) {
	const issues = block.validationIssues;

	if ( Array.isArray( issues ) && issues.length ) {
		const args = Array.isArray( issues[ 0 ] && issues[ 0 ].args ) ? issues[ 0 ].args : [];
		const template = 'string' === typeof args[ 0 ] ? args[ 0 ] : '';

		if ( template ) {
			const message = template
				.replace( /%[sdoOjif]/g, '…' )
				.replace( /\s+/g, ' ' )
				.trim();

			if ( message ) {
				const match = REASON_CODES.find( ( [ pattern ] ) => pattern.test( template ) );

				return {
					code: match ? match[ 1 ] : 'block_validation_failed',
					message: message.length > REASON_MAX ? message.slice( 0, REASON_MAX ) + '…' : message,
				};
			}
		}
	}

	if ( block.name === 'core/missing' ) {
		return { code: 'unregistered_block', message: 'block type not registered on this site' };
	}

	return {
		code: 'block_validation_failed',
		message: 'block validation failed (regenerated save output differs from the stored markup)',
	};
}

/**
 * Report every invalid block in a parsed tree.
 *
 * @param {Array} blocks Parsed blocks.
 *
 * @return {Array} `[{ index, block_name, reason }]`.
 */
function collectInvalid( blocks ) {
	const flat = flatten( blocks );
	const invalid = [];

	flat.forEach( ( block, index ) => {
		if ( false === block.isValid ) {
			const reason = invalidReason( block );

			invalid.push( {
				index,
				block_name: String( block.name || 'unknown' ),
				reason_code: reason.code,
				reason: reason.message,
			} );
		}
	} );

	return invalid;
}

/**
 * Rebuild a block (and its subtree) from its parsed attributes and inner blocks.
 *
 * @param {object} wp    The window's `wp` namespace.
 * @param {object} block Parsed block.
 *
 * @return {object} A freshly created block.
 */
function rebuild( wp, block ) {
	return wp.blocks.createBlock(
		block.name,
		block.attributes,
		( block.innerBlocks || [] ).map( inner => rebuild( wp, inner ) )
	);
}

/**
 * Recover a parsed tree: every invalid block is rebuilt; valid blocks are left alone but their
 * children are still walked (an invalid child inside a valid parent is the common case).
 *
 * @param {object} wp     The window's `wp` namespace.
 * @param {Array}  blocks Parsed blocks.
 *
 * @return {Array} Recovered blocks.
 */
function recover( wp, blocks ) {
	return ( blocks || [] ).map( block => (
		false === block.isValid
			? rebuild( wp, block )
			: { ...block, innerBlocks: recover( wp, block.innerBlocks || [] ) }
	) );
}

/**
 * The visible text of a document, with block delimiters and markup removed.
 *
 * This is the §5 P3 rule (c) "innerText unchanged" check — the George test's text-preservation
 * half. Whitespace is collapsed because serialization legitimately reflows indentation between
 * block delimiters; a change in *words* is the finding, a change in *spacing* is not.
 *
 * @param {object} win     jsdom window.
 * @param {string} content Block markup.
 *
 * @return {string} Normalized text.
 */
function innerText( win, content ) {
	const host = win.document.createElement( 'div' );
	// Replace block comment delimiters with a SPACE — not with nothing. They are comments, so
	// `textContent` ignores them either way, but a document whose blocks are written with no
	// whitespace between them (`…</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>…`, which is
	// what hand-authored and CLI-written markup looks like) would otherwise read as `WorkAbout`
	// before the pass and `Work About` after it, purely because serialization puts a blank line
	// between delimiters. That is a change in SPACING, not in words, and the whole point of this
	// function is that only a change in words is a finding. Collapsing whitespace afterwards makes
	// the substitution free for documents that were already reflowed.
	//
	// This is not a loosening of the gate: text that is genuinely dropped is still dropped, and the
	// digests still differ. It removes a false positive that fired on every document written
	// outside the editor — the one that made `content_altered` look dismissible in the field.
	host.innerHTML = String( content || '' ).replace( /<!--[\s\S]*?-->/g, ' ' );

	return String( host.textContent || '' ).replace( /\s+/g, ' ' ).trim();
}

/**
 * The visible-text length one block RENDERS on its own, children excluded.
 *
 * Deliberately measured by serializing the block with an empty `innerBlocks` and reading the text
 * out of the result, rather than by summing its string attributes. Measuring attributes looked
 * equivalent and is not: the nova-blocks#610 loss keeps the text sitting in the `content` attribute
 * on both sides and drops it at SAVE time, so an attribute-based walk reported no per-block change
 * on a document that had visibly lost 106 characters. What matters is what the block emits.
 *
 * Children are excluded so a parent does not double-count its descendants' text, which would
 * attribute one loss to every ancestor.
 *
 * @param {object} context Bootstrapped harness (`{ win, wp }`).
 * @param {object} block   A parsed block.
 *
 * @return {number} Visible-text length.
 */
function blockTextLength( context, block ) {
	if ( ! block || ! block.name ) {
		return 0;
	}

	try {
		return innerText(
			context.win,
			context.wp.blocks.serialize( [ { ...block, innerBlocks: [] } ] )
		).length;
	} catch ( error ) {
		// A block whose save() throws contributes no measurable text; that is a finding for the
		// validity report, not a reason to abandon the whole attribution.
		return 0;
	}
}

/**
 * Attribute a text loss to individual blocks by walking two trees in parallel.
 *
 * Recovery preserves tree shape — `createBlock( name, attributes, innerBlocks )` regenerates a
 * block with the same name and the same children — so the depth-first index of a block is stable
 * across the pass, and a positional walk is a faithful comparison rather than a heuristic. Where
 * the shapes DO diverge (a block genuinely disappeared), the trailing entries are reported as
 * fully lost, which is the honest reading.
 *
 * @param {object} context Bootstrapped harness (`{ win, wp }`).
 * @param {Array}  before Parsed tree before the pass.
 * @param {Array}  after  Parsed tree after the pass.
 *
 * @return {Array} `[{ index, name, lost_length }]`, only for blocks that lost text.
 */
function lostTextByBlock( context, before, after ) {
	const flatBefore = flatten( before );
	const flatAfter = flatten( after );
	const lost = [];

	flatBefore.forEach( ( block, index ) => {
		const lengthBefore = blockTextLength( context, block );
		const counterpart = flatAfter[ index ];
		const lengthAfter = counterpart && counterpart.name === block.name
			? blockTextLength( context, counterpart )
			: 0;

		if ( lengthAfter < lengthBefore ) {
			lost.push( {
				index,
				name: String( block.name || 'unknown' ),
				lost_length: lengthBefore - lengthAfter,
			} );
		}
	} );

	return lost;
}

/**
 * Count paragraphs whose stored content itself contains a `<p` tag — the recurring mangling the
 * contract's §5 P3 rule (c) forbids introducing.
 *
 * @param {Array} blocks Parsed blocks.
 *
 * @return {number} Count.
 */
function countNestedParagraphs( blocks ) {
	return flatten( blocks ).filter(
		block => 'core/paragraph' === block.name && /<p[\s>]/.test( String( block.attributes && block.attributes.content || '' ) )
	).length;
}

/**
 * Count `<p …><p` pairs in MARKUP.
 *
 * `countNestedParagraphs()` above measures the block MODEL — a paragraph whose `content` attribute
 * carries a `<p`. That is the shape a swallowed paragraph has BEFORE the round trip, and it is
 * exactly the wrong side of the transition to gate on: the moment nova-blocks#610 actually lands,
 * the double-wrapped markup re-parses to `content: ""` and the model-level count drops to ZERO. A
 * gate comparing model counts therefore reads the detonation as an improvement (112 → 0) and lets
 * the write through. On the about-athletics run only the innerText digest stood between the
 * canonicalizer and 2,032 characters of body copy, and it stood there by accident.
 *
 * So the nested-`<p>` half of §5 P3 rule (c) is measured where the damage is visible: in the bytes
 * that would be written.
 *
 * Three things the pattern has to get right, each of which a simpler one gets wrong:
 *
 * - It is a **lookahead**, so a match does not consume the inner `<p>`'s bracket. A consuming
 *   pattern cannot start the next match inside what it just ate, so `<p><p><p>x` counts 1 instead
 *   of 2 — and since the gate compares `after > before`, a document that already carries one level
 *   of the mangling and gains a second reads 1 → 1 and passes. That is the re-run-on-an-
 *   already-corrupted-page case, which is exactly when the gate is most needed.
 * - The inner lookahead allows **content between the two openings**, as long as no `</p>` closes
 *   the outer one first. `<p class="a">foo <p>bar</p></p>` is the same defect with a word in front
 *   of it. The `(?!<\/p>)` guard is what keeps two ordinary SIBLING paragraphs
 *   (`<p>a</p>\n\n<p>b</p>`) from matching.
 * - It is case-insensitive. Hand-authored markup is not guaranteed lowercase.
 *
 * Known and accepted: a `>` inside an attribute VALUE (`<p title="a>b">`) ends the tag early for
 * this pattern. Serialized output never produces one — `serializeAttributes()` escapes `<`/`>` and
 * attribute values are entity-encoded — so the residue is a hand-authored edge that costs a missed
 * count, never a false alarm.
 *
 * @param {string} content Block markup.
 *
 * @return {number} Count of nested `<p>` openings.
 */
function countNestedParagraphMarkup( content ) {
	return ( String( content || '' ).match( /<p(?:\s[^>]*)?>(?=(?:(?!<\/p>)[\s\S])*?<p[\s>])/gi ) || [] ).length;
}

/**
 * Report the blocks that parse VALID but only against a deprecated version of their save.
 *
 * This is the failure class the whole about-athletics corruption hid inside. `parse()` walks a
 * block type's deprecations and reports `isValid: true` as soon as any of them matches, so a
 * document can be 100% "valid" and still be a different document the next time the editor saves
 * it. `core/paragraph`'s deprecation #6 is the sharp case: its `content` attribute is declared
 * `{ source: 'html' }` with NO `selector`, so the whole stored `<p>` element becomes the content
 * value and the deprecated save matches anything. The block reports valid while holding an entire
 * element as its text, and one editor save re-wraps it into `<p …><p …>text</p></p>`.
 *
 * `validateBlock()` compares against the CURRENT save only, so `isValid && ! validateBlock()` is
 * precisely "valid via deprecation".
 *
 * @param {object} wp     The window's `wp` namespace.
 * @param {Array}  blocks Parsed blocks.
 *
 * @return {Array} `[{ index, block_name, reason_code }]`.
 */
function collectValidViaDeprecation( wp, blocks ) {
	if ( 'function' !== typeof ( wp.blocks && wp.blocks.validateBlock ) ) {
		return [];
	}

	const found = [];

	flatten( blocks ).forEach( ( block, index ) => {
		if ( true !== block.isValid ) {
			return;
		}

		let currentSaveMatches;
		try {
			const verdict = wp.blocks.validateBlock( block );
			currentSaveMatches = Array.isArray( verdict ) ? verdict[ 0 ] : !! verdict;
		} catch ( error ) {
			// A block type whose save() throws cannot be judged either way; the document-level
			// fixed-point check still covers it.
			return;
		}

		if ( true !== currentSaveMatches ) {
			found.push( {
				index,
				block_name: String( block.name || 'unknown' ),
				reason_code: 'valid_via_deprecation',
			} );
		}
	} );

	return found;
}

/**
 * Process one document.
 *
 * @param {object} context          Bootstrapped harness (`{ win, wp }`).
 * @param {object} document         `{ id, content }`.
 * @param {string} mode             `validate` or `canonicalize`.
 *
 * @return {object} Per-document result.
 */
function processDocument( context, document, mode ) {
	const { win, wp } = context;
	const id = document.id;
	const content = String( document.content == null ? '' : document.content );

	const result = {
		id,
		invalid: [],
		converged: true,
		block_count: 0,
		has_blocks: /<!--\s+wp:/.test( content ),
	};

	let parsed;
	try {
		parsed = wp.blocks.parse( content );
	} catch ( error ) {
		return {
			...result,
			error: `parse failed: ${ String( error.message ).split( '\n' )[ 0 ] }`,
			converged: false,
		};
	}

	result.block_count = flatten( parsed ).length;
	result.invalid = collectInvalid( parsed );

	if ( 'validate' === mode ) {
		result.converged = 0 === result.invalid.length;

		// The fixed-point post-condition. Per-block validity answers "does this parse?"; it does
		// NOT answer "is this what the editor would store?", because `parse()` accepts a block
		// that only matches a DEPRECATED save. `serialize( parse( content ) ) === content` answers
		// the second question in one comparison, and it is the check that would have caught the
		// about-athletics page while it still had 112 clean-looking paragraphs: `invalid: 0` said
		// nothing, this said "the next save rewrites 288 KB of this document".
		//
		// No recovery is applied here — recovery is `canonicalize`'s job and would mask exactly
		// what is being measured. The serialization is a pure re-emission of what parse produced.
		//
		// TWO EXCLUSIONS, both about keeping the finding worth reading:
		//
		// - A document with NO block markup (classic content, an empty post) has no serialization
		//   to be a fixed point of. `parse()` wraps it in a `core/freeform`, re-serializing shifts
		//   whitespace, and the verdict would be an exit-2 finding about a post that has nothing to
		//   do with blocks. Not measured, reported as `null`.
		// - **Outer whitespace only.** A trailing newline is the default shape of anything written
		//   by `wp post create --post_content="$( cat file.html )"`, by REST, or by a migration
		//   script, and it makes an otherwise perfect document differ by one byte. Comparing the
		//   trimmed forms drops that class entirely while changing nothing about internal
		//   whitespace, which is where real reflow lives. A gate that cries on every CLI-written
		//   post is a gate people learn to pass with a flag.
		if ( ! result.has_blocks ) {
			result.canonical = null;
			result.not_canonical_blocks = [];

			return result;
		}

		try {
			result.canonical = wp.blocks.serialize( parsed ).trim() === content.trim();
		} catch ( error ) {
			// A save() that throws is a finding of its own, but it is not a fixed-point verdict.
			// Report the document as canonical-unknown rather than asserting either answer.
			result.canonical = null;
			result.canonical_error = String( error.message ).split( '\n' )[ 0 ];
		}

		result.not_canonical_blocks = false === result.canonical ? collectValidViaDeprecation( wp, parsed ) : [];

		return result;
	}

	// ------------------------------------------------------------------ canonicalize
	let serialized;
	try {
		serialized = wp.blocks.serialize( recover( wp, parsed ) );
	} catch ( error ) {
		return {
			...result,
			error: `serialize failed: ${ String( error.message ).split( '\n' )[ 0 ] }`,
			converged: false,
		};
	}

	// Same-session re-parse. This is a fast convergence signal only — the contract's proof is the
	// SECOND harness invocation PHP runs against what it actually read back from the database
	// (§3.9: "a same-session zero proves nothing").
	const reparsed = wp.blocks.parse( serialized );
	const invalidAfter = collectInvalid( reparsed );

	const textBefore = innerText( win, content );
	const textAfter = innerText( win, serialized );

	result.canonical_content = serialized;
	result.changed = serialized !== content;
	result.invalid_after_same_session = invalidAfter;
	result.converged = 0 === invalidAfter.length;
	result.nested_paragraphs_before = countNestedParagraphs( parsed );
	result.nested_paragraphs_after = countNestedParagraphs( reparsed );
	// The same guard measured in the bytes rather than in the model — see
	// `countNestedParagraphMarkup()` for why the model-level pair alone reads a detonation as an
	// improvement and lets it through.
	result.nested_paragraph_markup_before = countNestedParagraphMarkup( content );
	result.nested_paragraph_markup_after = countNestedParagraphMarkup( serialized );
	// Digests gate, lengths report. The caller compares pass 1's `before` digest against the LAST
	// pass's `after` digest to decide whether to write; shipping the full visible text of every
	// document back on every pass would grow the response without adding information. The lengths
	// are what the contract's `data.refused[]` payload needs, and they are two integers.
	result.inner_text_before_sha1 = sha1( textBefore );
	result.inner_text_after_sha1 = sha1( textAfter );
	result.inner_text_before_length = textBefore.length;
	result.inner_text_after_length = textAfter.length;
	result.inner_text_preserved = textBefore === textAfter;

	// The per-block attribution is only computed on a pass that actually lost text — it is a second
	// walk of both trees, and there is nothing to attribute when nothing was lost.
	result.lost_blocks = result.inner_text_preserved ? [] : lostTextByBlock( context, parsed, reparsed );

	return result;
}

module.exports = {
	sha1,
	flatten,
	collectInvalid,
	invalidReason,
	rebuild,
	recover,
	innerText,
	blockTextLength,
	lostTextByBlock,
	countNestedParagraphs,
	countNestedParagraphMarkup,
	collectValidViaDeprecation,
	processDocument,
};
