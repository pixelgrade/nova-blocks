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

/** Per-argument cap, so one `%o` of a whole block type cannot swamp the reason line. */
const REASON_ARG_MAX = 160;
const REASON_MAX = 500;

/**
 * Render one `validationIssues` argument for interpolation.
 *
 * @param {*} value Argument value.
 *
 * @return {string} Short string form.
 */
function reasonArg( value ) {
	if ( undefined === value ) {
		return '?';
	}

	let text;
	if ( 'string' === typeof value ) {
		text = value;
	} else {
		try {
			text = JSON.stringify( value );
		} catch ( error ) {
			text = String( value );
		}
	}

	text = String( text ).replace( /\s+/g, ' ' );

	return text.length > REASON_ARG_MAX ? text.slice( 0, REASON_ARG_MAX ) + '…' : text;
}

/**
 * Summarize why a block failed validation, in one line.
 *
 * `@wordpress/blocks` records each issue as `{ log, args }` where **`log` is a logger FUNCTION**
 * and the human message template is `args[0]`, with `args[1…]` as its substitutions. Stringifying
 * `log` yields the logger's source text, which is what a naive reading produces — so the template
 * is deliberately read off `args[0]`.
 *
 * The FIRST issue is the specific one ("Expected attribute `class` of value X, saw Y"); the last is
 * always the generic "Block validation failed for `%s` (%o)…" dump that carries the entire block
 * type object. Reporting the first is what makes the reason actionable.
 *
 * @param {object} block A parsed block with `isValid === false`.
 *
 * @return {string} Reason.
 */
function invalidReason( block ) {
	const issues = block.validationIssues;

	if ( Array.isArray( issues ) && issues.length ) {
		const args = Array.isArray( issues[ 0 ] && issues[ 0 ].args ) ? issues[ 0 ].args : [];
		const template = 'string' === typeof args[ 0 ] ? args[ 0 ] : '';

		if ( template ) {
			let index = 1;
			const text = template
				.replace( /%[sdoOjif]/g, () => reasonArg( args[ index++ ] ) )
				.replace( /\s+/g, ' ' )
				.trim();

			if ( text ) {
				return text.length > REASON_MAX ? text.slice( 0, REASON_MAX ) + '…' : text;
			}
		}
	}

	if ( block.name === 'core/missing' ) {
		return 'block type not registered on this site';
	}

	return 'block validation failed (regenerated save output differs from the stored markup)';
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
			invalid.push( {
				index,
				block_name: String( block.name || 'unknown' ),
				reason: invalidReason( block ),
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
	// Strip block comment delimiters first: they are comments, so `textContent` ignores them
	// anyway, but removing them keeps the parse cheap and the intent explicit.
	host.innerHTML = String( content || '' ).replace( /<!--[\s\S]*?-->/g, '' );

	return String( host.textContent || '' ).replace( /\s+/g, ' ' ).trim();
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
	// Digests, not the text itself: the caller compares pass 1's `before` against the LAST pass's
	// `after` to gate the cumulative rewrite, and shipping the full visible text of every document
	// back through the pipe on every pass would grow the response without adding information.
	result.inner_text_before_sha1 = sha1( textBefore );
	result.inner_text_after_sha1 = sha1( textAfter );
	result.inner_text_preserved = textBefore === textAfter;

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
	countNestedParagraphs,
	processDocument,
};
