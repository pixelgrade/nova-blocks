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
	assert.strictEqual( response.protocol, 1 );
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
	assert.strictEqual( response.harness_protocol, 1 );
	assert.strictEqual( response.requested_protocol, 999 );
} );

test( 'a matching protocol passes the handshake and proceeds to the real work', () => {
	// Reaches the bootstrap and fails THERE (bad abspath), which is the proof it got past the gate.
	const { response } = run( {
		protocol: 1,
		mode: 'validate',
		site_bundles_meta: { abspath: '/definitely/not/a/wordpress/root/', plugin_dir: '/nope' },
		documents: [],
	} );

	assert.notStrictEqual( response.code, 'protocol_mismatch' );
	assert.match( response.error, /bootstrap failed/ );
} );

test( 'every response echoes the protocol so the caller can always check it', () => {
	assert.strictEqual( run( '', [ '--selftest' ] ).response.protocol, 1 );
	assert.strictEqual( run( '' ).response.protocol, 1 );
	assert.strictEqual( run( '{bad' ).response.protocol, 1 );
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
