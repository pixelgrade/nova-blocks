/**
 * Harness protocol + pure-logic contract.
 *
 * Runs with no WordPress install: the block-tree logic is exercised against a stubbed `wp` and the
 * stdin/stdout protocol against the real `bin/harness.cjs` process. The site-dependent parity
 * proof lives in `corpus.test.cjs`.
 */

'use strict';

const test = require( 'node:test' );
const assert = require( 'node:assert' );
const path = require( 'node:path' );
const { spawnSync } = require( 'node:child_process' );
const { JSDOM } = require( 'jsdom' );

const lib = require( '../lib/canonicalize.cjs' );
const loader = require( '../lib/loader.cjs' );

const ENTRY = path.join( __dirname, '..', 'bin', 'harness.cjs' );

/**
 * The protocol this harness speaks, read off the entry point rather than restated here. Hard-coding
 * it in the tests means a bump breaks four assertions that have nothing to say about the bump.
 */
const PROTOCOL = Number( require( 'node:fs' ).readFileSync( ENTRY, 'utf8' ).match( /PROTOCOL_VERSION = (\d+)/ )[ 1 ] );

/** Run the harness with a request on stdin and return `{ code, response }`. */
const run = ( request, args = [] ) => {
	const proc = spawnSync( process.execPath, [ ENTRY, ...args ], {
		input: 'string' === typeof request ? request : JSON.stringify( request ),
		encoding: 'utf8',
	} );

	let response = null;
	try {
		response = JSON.parse( proc.stdout );
	} catch ( error ) {
		response = { parseError: error.message, raw: proc.stdout };
	}

	return { code: proc.status, response, stderr: proc.stderr };
};

// ---------------------------------------------------------------------------- block-tree logic

test( 'flatten walks depth-first, so an index is stable and addressable', () => {
	const tree = [
		{ name: 'a', innerBlocks: [ { name: 'a1', innerBlocks: [] }, { name: 'a2', innerBlocks: [] } ] },
		{ name: 'b', innerBlocks: [] },
	];

	assert.deepStrictEqual( lib.flatten( tree ).map( b => b.name ), [ 'a', 'a1', 'a2', 'b' ] );
} );

test( 'collectInvalid reports index, block name and a reason for every invalid block', () => {
	// `log` is a logger FUNCTION and the message template is args[0] — the shape
	// @wordpress/blocks actually records. Stringifying `log` would leak the logger's source.
	const tree = [
		{ name: 'core/group', isValid: true, innerBlocks: [
			{ name: 'core/heading', isValid: false, validationIssues: [ { log: ( ...a ) => a, args: [ 'Expected tag name `%s`, instead saw `%s`.', 'h2', 'h3' ] } ], innerBlocks: [] },
		] },
		{ name: 'core/paragraph', isValid: false, innerBlocks: [] },
	];

	const invalid = lib.collectInvalid( tree );

	assert.strictEqual( invalid.length, 2 );
	assert.deepStrictEqual(
		invalid[ 0 ],
		{
			index: 1,
			block_name: 'core/heading',
			reason_code: 'tag_name_mismatch',
			reason: 'Expected tag name `…`, instead saw `…`.',
		}
	);
	assert.strictEqual( invalid[ 1 ].index, 2 );
	assert.strictEqual( invalid[ 1 ].block_name, 'core/paragraph' );
	assert.strictEqual( invalid[ 1 ].reason_code, 'block_validation_failed' );
	assert.match( invalid[ 1 ].reason, /validation failed/ );
} );

test( 'invalidReason survives a malformed validationIssues entry rather than throwing', () => {
	assert.match( lib.invalidReason( { name: 'core/x', validationIssues: [ {} ] } ).message, /validation failed/ );
	assert.match( lib.invalidReason( { name: 'core/x', validationIssues: 'nonsense' } ).message, /validation failed/ );
	assert.strictEqual( lib.invalidReason( { name: 'core/missing' } ).code, 'unregistered_block' );
} );

test( 'a reason NEVER quotes the stored content — every substitution is redacted', () => {
	const secret = 'CONFIDENTIAL-DRAFT-TEXT';
	const reason = lib.invalidReason( {
		name: 'core/heading',
		validationIssues: [ { log: () => {}, args: [ 'Expected attribute `%s` of value `%s`, saw `%s`.', 'class', secret, 'other' ] } ],
	} );

	assert.strictEqual( reason.code, 'attribute_value_mismatch' );
	assert.strictEqual( reason.message, 'Expected attribute `…` of value `…`, saw `…`.' );
	assert.ok( ! reason.message.includes( secret ), 'stored content must never reach a reason string' );
	assert.ok( ! reason.message.includes( 'class' ), 'not even attribute names — a %s is a %s' );
} );

test( 'reason codes are stable machine tokens per failure mode', () => {
	const codeFor = template => lib.invalidReason( { name: 'core/x', validationIssues: [ { log: () => {}, args: [ template ] } ] } ).code;

	assert.strictEqual( codeFor( 'Expected token of type `%s` (%o), instead saw `%s` (%o).' ), 'token_mismatch' );
	assert.strictEqual( codeFor( 'Expected tag name `%s`, instead saw `%s`.' ), 'tag_name_mismatch' );
	assert.strictEqual( codeFor( 'Encountered unexpected attribute `%s`.' ), 'unexpected_attribute' );
	assert.strictEqual( codeFor( 'Expected attributes %o, instead saw %o.' ), 'attribute_set_mismatch' );
	assert.strictEqual( codeFor( 'Expected end of content, instead saw %o.' ), 'unexpected_trailing_content' );
	assert.strictEqual( codeFor( 'Expected child order of %o, instead saw %o.' ), 'child_order_mismatch' );
	assert.strictEqual( codeFor( 'Something entirely new happened.' ), 'block_validation_failed' );
} );

test( 'invalidReason never stringifies the logger function itself', () => {
	const reason = lib.invalidReason( {
		name: 'core/x',
		validationIssues: [ { log: ( message, ...args ) => console.error( message, ...args ), args: [ 'concrete message' ] } ],
	} );

	assert.strictEqual( reason.message, 'concrete message' );
	assert.ok( ! reason.message.includes( '=>' ), 'the logger source must never leak into the reason' );
} );

test( 'invalidReason reports the FIRST issue — the specific one, not the generic trailing dump', () => {
	const reason = lib.invalidReason( {
		name: 'core/heading',
		validationIssues: [
			{ log: () => {}, args: [ 'Expected attribute `%s` of value `%s`, saw `%s`.', 'class', 'a b', 'a' ] },
			{ log: () => {}, args: [ 'Block validation failed for `%s` (%o).', 'core/heading', {} ] },
		],
	} );

	assert.strictEqual( reason.code, 'attribute_value_mismatch' );
	assert.ok( ! reason.message.includes( 'a b' ) );
} );

test( 'recover rebuilds only invalid blocks, and still walks a valid parent for invalid children', () => {
	const created = [];
	const wp = {
		blocks: {
			createBlock: ( name, attributes, innerBlocks ) => {
				created.push( name );
				return { name, attributes, innerBlocks, rebuilt: true };
			},
		},
	};

	const tree = [
		{ name: 'core/group', isValid: true, attributes: {}, innerBlocks: [
			{ name: 'core/heading', isValid: false, attributes: { level: 2 }, innerBlocks: [] },
			{ name: 'core/paragraph', isValid: true, attributes: {}, innerBlocks: [] },
		] },
		{ name: 'core/columns', isValid: false, attributes: {}, innerBlocks: [
			{ name: 'core/column', isValid: true, attributes: {}, innerBlocks: [] },
		] },
	];

	const recovered = lib.recover( wp, tree );

	// The group is untouched; its invalid child is rebuilt; the invalid columns block is rebuilt
	// together with its (valid) child, because createBlock owns the whole subtree it regenerates.
	assert.strictEqual( recovered[ 0 ].rebuilt, undefined );
	assert.strictEqual( recovered[ 0 ].innerBlocks[ 0 ].rebuilt, true );
	assert.strictEqual( recovered[ 0 ].innerBlocks[ 1 ].rebuilt, undefined );
	assert.strictEqual( recovered[ 1 ].rebuilt, true );
	assert.deepStrictEqual( created, [ 'core/heading', 'core/column', 'core/columns' ] );
} );

test( 'innerText strips block delimiters and markup and collapses whitespace', () => {
	const win = new JSDOM( '<!doctype html><body></body>' ).window;
	const content = '<!-- wp:paragraph -->\n<p>Hello   <strong>there</strong>\n world</p>\n<!-- /wp:paragraph -->';

	assert.strictEqual( lib.innerText( win, content ), 'Hello there world' );
	assert.strictEqual( lib.innerText( win, null ), '' );
} );

test( 'innerText is insensitive to reflowed indentation between delimiters (that is not a text change)', () => {
	const win = new JSDOM( '<!doctype html><body></body>' ).window;
	const authored = '<!-- wp:group --><div class="wp-block-group"><!-- wp:paragraph --><p>A</p><!-- /wp:paragraph --></div><!-- /wp:group -->';
	const serialized = '<!-- wp:group -->\n<div class="wp-block-group">\n\t<!-- wp:paragraph -->\n\t<p>A</p>\n\t<!-- /wp:paragraph -->\n</div>\n<!-- /wp:group -->';

	assert.strictEqual( lib.innerText( win, authored ), lib.innerText( win, serialized ) );
} );

test( 'innerText does not read block-delimiter reflow as two words becoming one (about-athletics)', () => {
	const win = new JSDOM( '<!doctype html><body></body>' ).window;
	// Hand-authored and CLI-written markup runs blocks together with no whitespace between them.
	// Serialization puts a blank line between delimiters. If delimiters are stripped to NOTHING,
	// the first reads as `WorkAbout` and the second as `Work About` — a digest mismatch on every
	// document written outside the editor, which is the false positive that made `content_altered`
	// look dismissible in the field.
	const authored = '<!-- wp:paragraph --><p>Work</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>About</p><!-- /wp:paragraph -->';
	const serialized = '<!-- wp:paragraph -->\n<p>Work</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>About</p>\n<!-- /wp:paragraph -->';

	assert.strictEqual( lib.innerText( win, authored ), 'Work About' );
	assert.strictEqual( lib.innerText( win, authored ), lib.innerText( win, serialized ) );
} );

test( 'innerText still catches a genuine loss — the false-positive fix is not a loosening', () => {
	const win = new JSDOM( '<!doctype html><body></body>' ).window;
	const before = '<!-- wp:paragraph --><p>Work</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>About</p><!-- /wp:paragraph -->';
	const after = '<!-- wp:paragraph -->\n<p></p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>About</p>\n<!-- /wp:paragraph -->';

	assert.notStrictEqual( lib.innerText( win, before ), lib.innerText( win, after ) );
	assert.strictEqual( lib.innerText( win, after ), 'About' );
} );

test( 'countNestedParagraphMarkup counts the double-wrap in the BYTES, where the damage is visible', () => {
	// The model-level count measures a paragraph whose `content` attribute carries a <p>. That is
	// the shape BEFORE the round trip; the moment nova-blocks#610 lands, the double-wrapped markup
	// re-parses to `content: ""` and the model count falls to ZERO. A gate reading the model alone
	// therefore sees 112 -> 0 and calls a detonation an improvement.
	const doubled = '<!-- wp:paragraph -->\n<p class="has-text-color has-normal-font-size"><p class="has-text-color wp-block-paragraph">About us</p></p>\n<!-- /wp:paragraph -->';
	const single = '<!-- wp:paragraph -->\n<p class="has-text-color has-normal-font-size">About us</p>\n<!-- /wp:paragraph -->';

	assert.strictEqual( lib.countNestedParagraphMarkup( doubled ), 1 );
	assert.strictEqual( lib.countNestedParagraphMarkup( single ), 0 );
	assert.strictEqual( lib.countNestedParagraphMarkup( '' ), 0 );
	assert.strictEqual( lib.countNestedParagraphMarkup( null ), 0 );

	// DEPTH. A consuming pattern eats the inner `<p>`'s bracket and cannot restart inside it, so
	// `<p><p><p>` counts 1 — and since the gate compares `after > before`, a page that already
	// carries one level of the mangling and gains a second reads 1 -> 1 and passes. That is the
	// re-run-on-an-already-corrupted-page case, i.e. exactly when this matters most.
	assert.strictEqual( lib.countNestedParagraphMarkup( '<p><p><p>x</p></p></p>' ), 2 );
	assert.strictEqual( lib.countNestedParagraphMarkup( '<p><p><p><p>x</p></p></p></p>' ), 3 );

	// CONTENT BEFORE THE INNER OPENING is the same defect with a word in front of it.
	assert.strictEqual( lib.countNestedParagraphMarkup( '<p class="a">foo <p>bar</p></p>' ), 1 );

	// CASE. Hand-authored markup is not guaranteed lowercase.
	assert.strictEqual( lib.countNestedParagraphMarkup( '<P><P>x</P></P>' ), 1 );

	// And ordinary SIBLINGS must never match, however many there are — that is what the `</p>`
	// guard inside the lookahead is for.
	assert.strictEqual( lib.countNestedParagraphMarkup( '<p>a</p>\n\n<p>b</p>' ), 0 );
	assert.strictEqual( lib.countNestedParagraphMarkup( '<p>a</p><p>b</p><p>c</p>' ), 0 );
	// And the model-level counter reads that same detonated markup as zero, which is the whole
	// point of measuring both.
	assert.strictEqual( lib.countNestedParagraphs( [ { name: 'core/paragraph', attributes: { content: '' }, innerBlocks: [] } ] ), 0 );
} );

test( 'collectValidViaDeprecation names blocks that parse valid ONLY against a deprecated save', () => {
	const blocks = [
		{ name: 'core/paragraph', isValid: true, innerBlocks: [] },   // valid via deprecation #6
		{ name: 'core/heading', isValid: true, innerBlocks: [] },     // genuinely canonical
		{ name: 'core/group', isValid: false, innerBlocks: [] },      // already reported as invalid
		{ name: 'core/button', isValid: true, innerBlocks: [] },      // save() throws — unjudgeable
	];

	const wp = {
		blocks: {
			validateBlock: block => {
				if ( 'core/button' === block.name ) {
					throw new Error( 'save() exploded' );
				}
				return [ 'core/heading' === block.name, [] ];
			},
		},
	};

	assert.deepStrictEqual( lib.collectValidViaDeprecation( wp, blocks ), [
		{ index: 0, block_name: 'core/paragraph', reason_code: 'valid_via_deprecation' },
	] );

	// An older bundle without validateBlock reports nothing rather than guessing; the
	// document-level fixed-point check still stands on its own.
	assert.deepStrictEqual( lib.collectValidViaDeprecation( { blocks: {} }, blocks ), [] );
} );

test( 'validate mode answers the fixed-point question, and answers it separately from validity', () => {
	// The rev-108 shape: every block parses valid, and re-serializing produces different bytes.
	// This is exactly what `invalid: 0` used to certify as clean.
	const content = '<!-- wp:paragraph --><p class="has-text-color wp-block-paragraph">About us</p><!-- /wp:paragraph -->';
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: true, attributes: { content: 'About us' }, innerBlocks: [] } ],
		serialize: () => '<!-- wp:paragraph -->\n<p class="has-text-color has-normal-font-size">About us</p>\n<!-- /wp:paragraph -->',
	} );
	context.wp.blocks.validateBlock = () => [ false, [] ];

	const result = lib.processDocument( context, { id: 108, content }, 'validate' );

	assert.strictEqual( result.invalid.length, 0, 'the old signal says clean' );
	assert.strictEqual( result.converged, true, 'and so does the old convergence flag' );
	assert.strictEqual( result.canonical, false, 'the new one does not' );
	assert.deepStrictEqual( result.not_canonical_blocks, [
		{ index: 0, block_name: 'core/paragraph', reason_code: 'valid_via_deprecation' },
	] );
	assert.strictEqual( result.canonical_content, undefined, 'validate mode still never produces content' );
} );

test( 'validate mode reports a true fixed point as canonical, with no block list', () => {
	const content = '<!-- wp:paragraph -->\n<p class="has-normal-font-size">About us</p>\n<!-- /wp:paragraph -->';
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: true, attributes: { content: 'About us' }, innerBlocks: [] } ],
		serialize: () => content,
	} );
	context.wp.blocks.validateBlock = () => [ true, [] ];

	const result = lib.processDocument( context, { id: 5, content }, 'validate' );

	assert.strictEqual( result.canonical, true );
	assert.deepStrictEqual( result.not_canonical_blocks, [] );
} );

test( 'validate mode does not manufacture a finding from a trailing newline or from classic content', () => {
	// Two noise classes the check would otherwise fire on constantly. A trailing newline is the
	// default shape of anything written by `wp post create --post_content="$( cat file.html )"`,
	// by REST, or by a migration script; and a post with no block markup has no serialization to
	// be a fixed point of. A gate that cries on both is a gate people learn to pass with a flag.
	const canonical = '<!-- wp:paragraph -->\n<p>a</p>\n<!-- /wp:paragraph -->';
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: true, attributes: { content: 'a' }, innerBlocks: [] } ],
		serialize: () => canonical,
	} );
	context.wp.blocks.validateBlock = () => [ true, [] ];

	assert.strictEqual(
		lib.processDocument( context, { id: 1, content: canonical + '\n' }, 'validate' ).canonical,
		true,
		'a trailing newline is not a finding'
	);

	// Classic content: `has_blocks` is false, so the question is not asked at all.
	const classic = lib.processDocument( context, { id: 2, content: '<p>just some html</p>\n' }, 'validate' );
	assert.strictEqual( classic.canonical, null, 'a post with no block markup is NOT MEASURED, not "clean"' );
	assert.deepStrictEqual( classic.not_canonical_blocks, [] );

	// Internal reflow is still caught — the exclusion is outer whitespace only.
	const reflowed = lib.processDocument( context, { id: 3, content: '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' }, 'validate' );
	assert.strictEqual( reflowed.canonical, false, 'whitespace BETWEEN delimiters is a real difference' );
} );

test( 'validate mode reports canonical:null when serialization throws — never a guessed verdict', () => {
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: true, attributes: {}, innerBlocks: [] } ],
		serialize: () => {
			throw new Error( 'save() exploded' );
		},
	} );

	const result = lib.processDocument( context, { id: 5, content: '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->' }, 'validate' );

	assert.strictEqual( result.canonical, null );
	assert.match( result.canonical_error, /exploded/ );
} );

test( 'canonicalize mode carries the markup-level nested-<p> counts alongside the model ones', () => {
	let call = 0;
	const doubled = '<!-- wp:paragraph -->\n<p class="a"><p class="b">hello</p></p>\n<!-- /wp:paragraph -->';
	const context = stubContext( {
		parse: () => {
			call += 1;
			// Before: a swallowed paragraph — the whole element sits in `content`.
			// After: the double-wrap has landed, the text is orphaned, `content` is empty.
			return 1 === call
				? [ { name: 'core/paragraph', isValid: true, attributes: { content: '<p class="b">hello</p>' }, innerBlocks: [] } ]
				: [ { name: 'core/paragraph', isValid: false, attributes: { content: '' }, innerBlocks: [] } ];
		},
		serialize: () => doubled,
	} );

	const result = lib.processDocument(
		context,
		{ id: 78, content: '<!-- wp:paragraph --><p class="b">hello</p><!-- /wp:paragraph -->' },
		'canonicalize'
	);

	// The model counts go 1 -> 0, which reads as a repair. The markup counts go 0 -> 1, which is
	// the truth: the pass would WRITE a nested <p>. Both are reported; the PHP gate reads the
	// markup pair.
	assert.strictEqual( result.nested_paragraphs_before, 1 );
	assert.strictEqual( result.nested_paragraphs_after, 0 );
	assert.strictEqual( result.nested_paragraph_markup_before, 0 );
	assert.strictEqual( result.nested_paragraph_markup_after, 1 );
} );

test( 'countNestedParagraphs counts paragraphs whose stored content itself carries a <p', () => {
	const tree = [
		{ name: 'core/paragraph', attributes: { content: 'plain' }, innerBlocks: [] },
		{ name: 'core/paragraph', attributes: { content: 'a <p>nested</p> one' }, innerBlocks: [] },
		{ name: 'core/heading', attributes: { content: '<p>not a paragraph block</p>' }, innerBlocks: [] },
		{ name: 'core/paragraph', attributes: {}, innerBlocks: [] },
	];

	assert.strictEqual( lib.countNestedParagraphs( tree ), 1 );
} );

// ------------------------------------------------------------------------- processDocument

/** A stubbed `wp` whose parse/serialize round-trip is deterministic and inspectable. */
const stubContext = ( { parse, serialize, createBlock } ) => {
	const win = new JSDOM( '<!doctype html><body></body>' ).window;
	return {
		win,
		wp: {
			blocks: {
				parse,
				serialize,
				createBlock: createBlock || ( ( name, attributes, innerBlocks ) => ( { name, attributes, innerBlocks, isValid: true } ) ),
			},
		},
	};
};

test( 'validate mode reports invalid blocks and never produces canonical content', () => {
	const context = stubContext( {
		parse: () => [ { name: 'core/heading', isValid: false, attributes: {}, innerBlocks: [] } ],
		serialize: () => {
			throw new Error( 'serialize must not run in validate mode' );
		},
	} );

	const result = lib.processDocument( context, { id: 7, content: '<!-- wp:heading --><h2>x</h2><!-- /wp:heading -->' }, 'validate' );

	assert.strictEqual( result.id, 7 );
	assert.strictEqual( result.invalid.length, 1 );
	assert.strictEqual( result.converged, false );
	assert.strictEqual( result.canonical_content, undefined );
} );

test( 'canonicalize mode reports the same-session re-parse, the text check and the nested-<p> counts', () => {
	let call = 0;
	const context = stubContext( {
		parse: () => {
			call += 1;
			// First parse: one invalid paragraph carrying a nested <p>. Re-parse: clean.
			return 1 === call
				? [ { name: 'core/paragraph', isValid: false, attributes: { content: 'a <p>b</p>' }, innerBlocks: [] } ]
				: [ { name: 'core/paragraph', isValid: true, attributes: { content: 'a b' }, innerBlocks: [] } ];
		},
		serialize: () => '<!-- wp:paragraph --><p>a b</p><!-- /wp:paragraph -->',
	} );

	const result = lib.processDocument(
		context,
		{ id: 9, content: '<!-- wp:paragraph --><p>a <p>b</p></p><!-- /wp:paragraph -->' },
		'canonicalize'
	);

	assert.strictEqual( result.invalid.length, 1 );
	assert.strictEqual( result.converged, true );
	assert.strictEqual( result.changed, true );
	assert.strictEqual( result.nested_paragraphs_before, 1 );
	assert.strictEqual( result.nested_paragraphs_after, 0 );
	assert.strictEqual( result.inner_text_preserved, true );
	// The digests are what a multi-pass caller compares (first pass's `before` against the last
	// pass's `after`), so they must be present and must agree with the boolean on a single pass.
	assert.strictEqual( result.inner_text_before_sha1, result.inner_text_after_sha1 );
	assert.match( result.inner_text_before_sha1, /^[0-9a-f]{40}$/ );
	assert.strictEqual( result.inner_text_before, undefined, 'the raw text is never shipped back' );
	assert.ok( result.canonical_content.includes( 'a b' ) );
} );

test( 'canonicalize marks an unchanged document as such — a canonical post canonicalizes to itself', () => {
	const content = '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->';
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: true, attributes: { content: 'a' }, innerBlocks: [] } ],
		serialize: () => content,
	} );

	const result = lib.processDocument( context, { id: 3, content }, 'canonicalize' );

	assert.strictEqual( result.changed, false );
	assert.strictEqual( result.converged, true );
	assert.strictEqual( result.invalid.length, 0 );
} );

test( 'a document that does not converge reports converged:false — the caller must not retry it', () => {
	let call = 0;
	const context = stubContext( {
		parse: () => {
			call += 1;
			// nova-blocks#610 shape: valid before the pass, invalid after it.
			return 1 === call
				? [ { name: 'core/paragraph', isValid: true, attributes: { content: 'x' }, innerBlocks: [] } ]
				: [ { name: 'core/paragraph', isValid: false, attributes: { content: 'x' }, innerBlocks: [] } ];
		},
		serialize: () => '<!-- wp:paragraph --><p>x</p><!-- /wp:paragraph -->',
	} );

	const result = lib.processDocument( context, { id: 4, content: '<!-- wp:paragraph --><p>x</p><!-- /wp:paragraph -->' }, 'canonicalize' );

	assert.strictEqual( result.invalid.length, 0, 'nothing was invalid to begin with' );
	assert.strictEqual( result.converged, false );
	assert.strictEqual( result.invalid_after_same_session.length, 1 );
} );

test( 'a parse failure is reported as a per-document error, not thrown out of the run', () => {
	const context = stubContext( {
		parse: () => {
			throw new Error( 'boom' );
		},
		serialize: () => '',
	} );

	const result = lib.processDocument( context, { id: 5, content: 'x' }, 'validate' );

	assert.match( result.error, /parse failed: boom/ );
	assert.strictEqual( result.converged, false );
} );

// -------------------------------------------------------------------------------- protocol

test( '--selftest proves the runtime resolves, and is what the PHP availability probe reads', () => {
	const { code, response } = run( '', [ '--selftest' ] );

	assert.strictEqual( code, 0 );
	assert.strictEqual( response.ok, true );
	assert.strictEqual( response.selftest, true );
	assert.strictEqual( response.protocol, PROTOCOL );
} );

test( 'an empty request fails with a parsable envelope and exit 1, never a stack trace', () => {
	const { code, response } = run( '' );

	assert.strictEqual( code, 1 );
	assert.strictEqual( response.ok, false );
	assert.match( response.error, /empty request/ );
	assert.deepStrictEqual( response.documents, [] );
} );

test( 'malformed JSON on stdin fails with a parsable envelope', () => {
	const { code, response } = run( '{not json' );

	assert.strictEqual( code, 1 );
	assert.strictEqual( response.ok, false );
	assert.match( response.error, /could not parse the request/ );
} );

test( 'an unknown mode is rejected before any bootstrap work', () => {
	const { code, response } = run( { mode: 'destroy', site_bundles_meta: { abspath: '/x', plugin_dir: '/y' }, documents: [] } );

	assert.strictEqual( code, 1 );
	assert.match( response.error, /unknown mode "destroy"/ );
} );

test( 'incomplete site_bundles_meta is rejected with a message naming what is required', () => {
	const { code, response } = run( { mode: 'validate', site_bundles_meta: { abspath: '/x' }, documents: [] } );

	assert.strictEqual( code, 1 );
	assert.match( response.error, /abspath.*plugin_dir|plugin_dir/ );
} );

test( 'a non-array documents field is rejected', () => {
	const { code, response } = run( { mode: 'validate', site_bundles_meta: { abspath: '/x', plugin_dir: '/y' }, documents: 'nope' } );

	assert.strictEqual( code, 1 );
	assert.match( response.error, /"documents" must be an array/ );
} );

test( 'a bad abspath fails as a bootstrap error, not as a silent empty result set', () => {
	const { code, response } = run( {
		mode: 'validate',
		site_bundles_meta: { abspath: '/definitely/not/a/wordpress/root/', plugin_dir: '/nope' },
		documents: [ { id: 1, content: '' } ],
	} );

	assert.strictEqual( code, 1 );
	assert.strictEqual( response.ok, false );
	assert.match( response.error, /bootstrap failed/ );
	assert.deepStrictEqual( response.documents, [] );
} );

// ------------------------------------------------------------------------ loader invariants

test( 'the WP packages manifest parser reproduces handle names and dependency edges', () => {
	const fs = require( 'node:fs' );
	const os = require( 'node:os' );
	const tmp = path.join( fs.mkdtempSync( path.join( os.tmpdir(), 'nb-harness-' ) ), 'script-loader-packages.php' );

	fs.writeFileSync(
		tmp,
		`<?php return array('blocks.js' => array('dependencies' => array('wp-autop', 'wp-hooks'), 'version' => 'x'),\n` +
		`'block-editor.js' => array('dependencies' => array('wp-blocks'), 'version' => 'y'),);\n`
	);

	const manifest = loader.readPackagesManifest( tmp );

	assert.deepStrictEqual( manifest[ 'wp-blocks' ].deps, [ 'wp-autop', 'wp-hooks' ] );
	assert.strictEqual( manifest[ 'wp-blocks' ].file, 'blocks.js' );
	assert.deepStrictEqual( manifest[ 'wp-block-editor' ].deps, [ 'wp-blocks' ] );
} );

test( 'Nova Blocks package load order keeps core before every package that depends on it', () => {
	const order = loader.NB_PACKAGE_ORDER;

	assert.ok( order.indexOf( 'core' ) < order.indexOf( 'collection' ) );
	assert.ok( order.indexOf( 'block-editor' ) < order.indexOf( 'core' ) );
	assert.ok( order.indexOf( 'color-signal' ) < order.indexOf( 'core' ) );
} );

test( 'react-jsx-runtime declares its react edge — the vendor edge hand-ordering missed', () => {
	assert.deepStrictEqual( loader.VENDOR_DEPS[ 'react-jsx-runtime' ], [ 'react' ] );
	assert.deepStrictEqual( loader.VENDOR_DEPS[ 'react-dom' ], [ 'react' ] );
	assert.strictEqual( loader.VENDOR_FILES[ 'wp-polyfill' ], null, 'wp-polyfill is shimmed, not loaded' );
} );

test( 'the installed shims cover every browser API the WP bundles touch at module scope', () => {
	const win = new JSDOM( '<!doctype html><body></body>', { pretendToBeVisual: true } ).window;
	loader.installShims( win );

	assert.strictEqual( typeof win.matchMedia, 'function' );
	assert.strictEqual( typeof win.requestIdleCallback, 'function' );
	assert.strictEqual( typeof win.cancelIdleCallback, 'function' );
	assert.strictEqual( typeof win.ResizeObserver, 'function' );
	assert.strictEqual( typeof win.IntersectionObserver, 'function' );
	assert.strictEqual( typeof win.DOMRect, 'function' );
	assert.strictEqual( typeof win.Element.prototype.scrollIntoView, 'function' );
	assert.strictEqual( typeof win.fetch, 'function' );
	assert.strictEqual( typeof win.jQuery, 'function' );
	assert.strictEqual( false, win.matchMedia( '(min-width: 100px)' ).matches );
} );

test( 'inner-text digests differ exactly when the visible text does', () => {
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: false, attributes: { content: 'kept' }, innerBlocks: [] } ],
		serialize: () => '<!-- wp:paragraph --><p>dropped</p><!-- /wp:paragraph -->',
	} );

	const result = lib.processDocument(
		context,
		{ id: 1, content: '<!-- wp:paragraph --><p>kept</p><!-- /wp:paragraph -->' },
		'canonicalize'
	);

	assert.strictEqual( result.inner_text_preserved, false );
	assert.notStrictEqual( result.inner_text_before_sha1, result.inner_text_after_sha1 );
} );

test( 'sha1 is stable and content-addressed, so digests from different passes are comparable', () => {
	assert.strictEqual( lib.sha1( 'abc' ), lib.sha1( 'abc' ) );
	assert.notStrictEqual( lib.sha1( 'abc' ), lib.sha1( 'abd' ) );
	assert.strictEqual( lib.sha1( 'abc' ).length, 40 );
} );

// -------------------------------------------------------------------- text-loss attribution

// A stub context whose serialize() renders a block's own attributes — enough to exercise the
// attribution logic without a WordPress install.
const textContext = () => ( {
	win: new JSDOM( '<!doctype html><body></body>' ).window,
	wp: {
		blocks: {
			serialize: blocks => blocks.map( b => `<p>${ ( b.attributes && b.attributes.content ) || '' }</p>` ).join( '' ),
		},
	},
} );

test( 'blockTextLength measures what a block RENDERS, children excluded', () => {
	const context = textContext();

	assert.strictEqual( lib.blockTextLength( context, { name: 'core/paragraph', attributes: { content: 'abc' } } ), 3 );
	assert.strictEqual( lib.blockTextLength( context, { name: 'core/paragraph', attributes: { content: '<em>hi</em>' } } ), 2, 'markup is stripped' );
	assert.strictEqual( lib.blockTextLength( context, { name: 'core/spacer', attributes: {} } ), 0 );
	assert.strictEqual( lib.blockTextLength( context, {} ), 0, 'a nameless entry measures nothing rather than throwing' );

	// Children are excluded so one loss is not attributed to every ancestor.
	const parent = { name: 'core/group', attributes: { content: 'ab' }, innerBlocks: [ { name: 'core/paragraph', attributes: { content: 'childtext' } } ] };
	assert.strictEqual( lib.blockTextLength( context, parent ), 2 );
} );

test( 'blockTextLength survives a save() that throws', () => {
	const context = { win: new JSDOM( '<!doctype html><body></body>' ).window, wp: { blocks: { serialize: () => {
		throw new Error( 'save exploded' );
	} } } };

	assert.strictEqual( lib.blockTextLength( context, { name: 'core/x', attributes: {} } ), 0 );
} );

test( 'lostTextByBlock names the blocks that shrank, and only those', () => {
	const context = textContext();
	const before = [
		{ name: 'core/heading', attributes: { content: 'Title' }, innerBlocks: [] },
		{ name: 'core/paragraph', attributes: { content: 'a long paragraph' }, innerBlocks: [] },
	];
	const after = [
		{ name: 'core/heading', attributes: { content: 'Title' }, innerBlocks: [] },
		{ name: 'core/paragraph', attributes: { content: '' }, innerBlocks: [] },
	];

	assert.deepStrictEqual(
		lib.lostTextByBlock( context, before, after ),
		[ { index: 1, name: 'core/paragraph', lost_length: 16 } ]
	);
	assert.deepStrictEqual( lib.lostTextByBlock( context, before, before ), [], 'no loss, nothing named' );
} );

test( 'lostTextByBlock treats a block that vanished entirely as fully lost', () => {
	const context = textContext();
	const before = [ { name: 'core/paragraph', attributes: { content: 'gone' }, innerBlocks: [] } ];

	assert.deepStrictEqual(
		lib.lostTextByBlock( context, before, [] ),
		[ { index: 0, name: 'core/paragraph', lost_length: 4 } ]
	);
} );

test( 'canonicalize reports innerText LENGTHS and the losing blocks when text goes missing', () => {
	// The nova-blocks#610 shape, modelled honestly: the REBUILD is what drops the content, so
	// createBlock returns the block without it, and everything downstream follows from that.
	const context = stubContext( {
		// Input-sensitive, so the re-parse of the serialized output sees the emptied block — the
		// document-level digests and the per-block walk must both be reading the SAME two trees.
		parse: content => [ {
			name: 'core/paragraph',
			isValid: ! content.includes( 'kept text' ),
			attributes: { content: content.includes( 'kept text' ) ? 'kept text' : '' },
			innerBlocks: [],
		} ],
		createBlock: name => ( { name, attributes: { content: '' }, innerBlocks: [], isValid: true } ),
		serialize: blocks => blocks
			.map( b => `<!-- wp:paragraph --><p>${ ( b.attributes && b.attributes.content ) || '' }</p><!-- /wp:paragraph -->` )
			.join( '' ),
	} );

	const result = lib.processDocument( context, { id: 1, content: '<!-- wp:paragraph --><p>kept text</p><!-- /wp:paragraph -->' }, 'canonicalize' );

	assert.strictEqual( result.inner_text_preserved, false );
	assert.strictEqual( result.inner_text_before_length, 9 );
	assert.strictEqual( result.inner_text_after_length, 0 );
	assert.deepStrictEqual( result.lost_blocks, [ { index: 0, name: 'core/paragraph', lost_length: 9 } ] );
} );

test( 'the per-block walk is skipped entirely when nothing was lost', () => {
	const content = '<!-- wp:paragraph --><p>a</p><!-- /wp:paragraph -->';
	const context = stubContext( {
		parse: () => [ { name: 'core/paragraph', isValid: true, attributes: { content: 'a' }, innerBlocks: [] } ],
		serialize: () => content,
	} );

	assert.deepStrictEqual( lib.processDocument( context, { id: 1, content }, 'canonicalize' ).lost_blocks, [] );
} );

// -------------------------------------------------------------------------- protocol handshake

test( 'a protocol mismatch is refused before any bootstrap work', () => {
	const { code, response } = run( {
		protocol: 999,
		mode: 'validate',
		site_bundles_meta: { abspath: '/x', plugin_dir: '/y' },
		documents: [],
	} );

	assert.strictEqual( code, 1 );
	assert.strictEqual( response.ok, false );
	assert.strictEqual( response.code, 'protocol_mismatch' );
	assert.strictEqual( response.harness_protocol, PROTOCOL );
	assert.strictEqual( response.requested_protocol, 999 );
} );

test( 'a matching protocol passes the handshake and proceeds to the real work', () => {
	// Reaches the bootstrap and fails THERE (bad abspath), which is the proof it got past the gate.
	const { response } = run( {
		protocol: PROTOCOL,
		mode: 'validate',
		site_bundles_meta: { abspath: '/definitely/not/a/wordpress/root/', plugin_dir: '/nope' },
		documents: [],
	} );

	assert.notStrictEqual( response.code, 'protocol_mismatch' );
	assert.match( response.error, /bootstrap failed/ );
} );

test( 'every response echoes the protocol so the caller can always check it', () => {
	assert.strictEqual( run( '', [ '--selftest' ] ).response.protocol, PROTOCOL );
	assert.strictEqual( run( '' ).response.protocol, PROTOCOL );
	assert.strictEqual( run( '{bad' ).response.protocol, PROTOCOL );
} );

test( 'the harness exits promptly rather than relying on the event loop to drain', () => {
	// A jsdom timer scheduled by an editor bundle must not be able to hold the pipes open after the
	// answer is written — that is the wedge the PHP-side deadline exists to survive, and this is the
	// belt to its braces.
	const started = Date.now();
	const { code } = run( '', [ '--selftest' ] );

	assert.strictEqual( code, 0 );
	assert.ok( Date.now() - started < 10000, 'the process must not linger after responding' );
} );

// ------------------------------------------------------------------ fail-closed bootstrap

test( 'the loader exposes no metadata-fallback path — a failed bundle can never become a stub save', () => {
	const source = require( 'node:fs' ).readFileSync( require( 'node:path' ).join( __dirname, '..', 'lib', 'loader.cjs' ), 'utf8' );

	assert.ok(
		! /save:\s*\(\)\s*=>\s*null/.test( source ),
		'registering a failed block with a stub save() would silently serialize every instance of it EMPTY — a text-free block (image, spacer) would be destroyed with the innerText gate none the wiser'
	);
	assert.ok( /harnessDegraded/.test( source ), 'a failed bundle must raise a degraded-bootstrap error instead' );
} );
