/**
 * Corpus parity contract — the real bootstrap against a real WordPress install.
 *
 * Skipped unless a site is pointed at, because it loads that site's own WP dist bundles and its own
 * installed nova-blocks build (which is the whole point — a bundled snapshot would drift):
 *
 *   PIXELGRADE_HARNESS_TEST_ABSPATH=/path/to/site/ \
 *   PIXELGRADE_HARNESS_TEST_PLUGIN_DIR=/path/to/site/wp-content/plugins/nova-blocks \
 *   npm test
 *
 * The two fixtures are a deliberate pair drawn from the lab corpus:
 *
 * - `merz-part-footer.html` — the cleanest matched pair in the corpus (contract §5 P3-b). One
 *   invalid `core/heading` recovers, and the result is byte-identical to `merz-part-footer.
 *   canonical.html`, a file a real browser editor session produced weeks earlier. That is the
 *   end-to-end proof that the headless pass equals the editor pass.
 * - `nb610-atelier-part-footer.html` — the honest exit-2 case. It starts with ZERO invalid blocks
 *   and ends with two invalid `core/paragraph`s after the recovery pass: nova-blocks#610,
 *   cross-checked in a real editor with identical before/after lists. A harness that "fixed" this
 *   would be lying, and `canonicalize` must exit 2 on it rather than loop.
 *
 * A third trio was added after the about-athletics post-mortem (2026-09-01) — the same three
 * paragraphs in the three states the corruption moved through, lifted verbatim from that run's
 * post 5 (revisions 108 and 112, and the scripted repair):
 *
 * - `athletics-paragraphs.authored.html` — the LANDMINE. Every block parses valid; the document is
 *   not a serialization fixed point. This is the shape `blocks validate` used to certify as clean
 *   over 229 blocks while 2,032 characters of body copy sat one editor save from deletion.
 * - `athletics-paragraphs.double-wrapped.html` — the DETONATION, as revision 112 stored it.
 * - `athletics-paragraphs.repaired.html` — the repaired form: valid AND a fixed point.
 */

'use strict';

const test = require( 'node:test' );
const assert = require( 'node:assert' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const { execFileSync } = require( 'node:child_process' );

const ABSPATH = process.env.PIXELGRADE_HARNESS_TEST_ABSPATH || '';
const PLUGIN_DIR = process.env.PIXELGRADE_HARNESS_TEST_PLUGIN_DIR || '';
const CORPUS = path.join( __dirname, 'corpus' );

// This is the ONLY suite in the package that touches a real block registry, so a default `npm test`
// green means "the plumbing is right", never "the claims about @wordpress/blocks are right". The
// empirical facts this whole lane rests on — that core/paragraph deprecation #6 really does swallow
// the element, that `wp.blocks.validateBlock` exists in the shipped bundle and returns false for
// those blocks, that the model-level nested-<p> count really does invert on the round trip — are
// asserted HERE and nowhere else. Skipping it silently would let a regression in any of them pass
// CI, so the skip reason says what is going unchecked rather than just how to opt in.
const skip = ! ABSPATH || ! PLUGIN_DIR
	? 'NOT RUN: the real-registry parity contract (nova-blocks#610, deprecation-#6 swallow, valid-via-deprecation detection) is unverified in this run. Point PIXELGRADE_HARNESS_TEST_ABSPATH and PIXELGRADE_HARNESS_TEST_PLUGIN_DIR at a provisioned site to run it.'
	: false;

/**
 * The two settings blobs PHP hands the harness. WP-CLI is not assumed here; when the site carries
 * pre-dumped blobs (PIXELGRADE_HARNESS_TEST_SSD / _NB_SETTINGS) they are used, otherwise the test
 * asks WordPress for them through `wp eval` if a `wp` is reachable, and finally falls back to `{}`
 * — which the loader tolerates but which changes the expected results, so that case is asserted
 * away rather than silently accepted.
 */
const readSettings = () => {
	const ssdPath = process.env.PIXELGRADE_HARNESS_TEST_SSD || '';
	const nbsPath = process.env.PIXELGRADE_HARNESS_TEST_NB_SETTINGS || '';

	if ( ssdPath && nbsPath ) {
		return {
			server_block_settings: JSON.parse( fs.readFileSync( ssdPath, 'utf8' ) ),
			novablocks_editor_settings: JSON.parse( fs.readFileSync( nbsPath, 'utf8' ) ),
		};
	}

	const wpEval = code => JSON.parse(
		execFileSync(
			process.env.PIXELGRADE_HARNESS_TEST_WP || 'wp',
			[ `--path=${ ABSPATH }`, 'eval', code ],
			{ encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }
		)
	);

	return {
		server_block_settings: wpEval( 'echo wp_json_encode(get_block_editor_server_block_settings());' ),
		novablocks_editor_settings: wpEval( 'echo wp_json_encode(novablocks_get_block_editor_settings());' ),
	};
};

const runHarness = ( mode, documents, settings ) => {
	const out = execFileSync(
		process.execPath,
		[ path.join( __dirname, '..', 'bin', 'harness.cjs' ) ],
		{
			input: JSON.stringify( {
				mode,
				site_bundles_meta: { abspath: ABSPATH, plugin_dir: PLUGIN_DIR },
				...settings,
				documents,
			} ),
			encoding: 'utf8',
			maxBuffer: 256 * 1024 * 1024,
			stdio: [ 'pipe', 'pipe', 'ignore' ],
		}
	);

	return JSON.parse( out );
};

test( 'corpus parity against the site\'s own bundles', { skip }, async t => {
	const settings = readSettings();

	assert.ok(
		Object.keys( settings.server_block_settings ).length > 50,
		'server-side block definitions must be present — without them attribute sets and their ORDER drift (spike F1)'
	);
	assert.ok(
		settings.novablocks_editor_settings && settings.novablocks_editor_settings.separator,
		'novablocks editor settings must carry separator.markup — core/separator\'s save() reads it (spike F3)'
	);

	const documents = [
		{ id: 'merz', content: fs.readFileSync( path.join( CORPUS, 'merz-part-footer.html' ), 'utf8' ) },
		{ id: 'nb610', content: fs.readFileSync( path.join( CORPUS, 'nb610-atelier-part-footer.html' ), 'utf8' ) },
	];

	const response = runHarness( 'canonicalize', documents, settings );
	assert.strictEqual( response.ok, true, response.error || '' );

	const byId = Object.fromEntries( response.documents.map( d => [ d.id, d ] ) );

	await t.test( 'the bootstrap loaded the real editor surface, not a partial registry', () => {
		const report = response.bootstrap;

		assert.deepStrictEqual( report.core_bundles_failed, [], 'every WP core bundle must load' );
		assert.deepStrictEqual( report.nb_packages_failed, [], 'every Nova Blocks package bundle must load' );
		// There is no fallback field to check any more: a bundle that fails to load now aborts the
		// bootstrap outright, so simply GETTING a report proves every bundle loaded.
		assert.strictEqual( report.novablocks_settings_hydrated, true );
		assert.ok( report.registered_novablocks_block_types >= 30, `expected 30+ novablocks/* block types, got ${ report.registered_novablocks_block_types }` );
	} );

	await t.test( 'P3-b part-footer: one invalid heading recovers to the browser-produced baseline', () => {
		const merz = byId.merz;
		const baseline = fs.readFileSync( path.join( CORPUS, 'merz-part-footer.canonical.html' ), 'utf8' );

		assert.strictEqual( merz.invalid.length, 1 );
		assert.strictEqual( merz.invalid[ 0 ].block_name, 'core/heading' );
		assert.strictEqual( merz.converged, true );
		assert.strictEqual( merz.inner_text_preserved, true );
		assert.strictEqual( merz.inner_text_before_sha1, merz.inner_text_after_sha1 );
		assert.strictEqual( merz.nested_paragraphs_after, 0 );
		assert.strictEqual(
			merz.canonical_content.replace( /\s+$/, '' ),
			baseline.replace( /\s+$/, '' ),
			'the headless pass must reproduce the editor session\'s own output'
		);
	} );

	await t.test( 'nova-blocks#610: a non-converging document is reported honestly, not "fixed"', () => {
		const probe = byId.nb610;

		assert.strictEqual( probe.invalid.length, 0, 'this document starts out entirely valid' );
		assert.strictEqual( probe.converged, false, 'and does not converge — that is the upstream bug, reproduced' );
		assert.ok( probe.invalid_after_same_session.length > 0 );
		assert.ok(
			probe.invalid_after_same_session.every( entry => 'core/paragraph' === entry.block_name ),
			'the #610 class is core/paragraph'
		);
		assert.strictEqual( probe.inner_text_preserved, true, 'even a non-converging pass must not lose text' );
		assert.strictEqual( probe.inner_text_before_sha1, probe.inner_text_after_sha1 );
	} );

	await t.test( 'about-athletics: the fixed-point post-condition catches what invalid:0 certified', () => {
		const read = name => fs.readFileSync( path.join( CORPUS, `athletics-paragraphs.${ name }.html` ), 'utf8' );

		const seen = runHarness(
			'validate',
			[
				{ id: 'authored', content: read( 'authored' ) },
				{ id: 'doubled', content: read( 'double-wrapped' ) },
				{ id: 'repaired', content: read( 'repaired' ) },
			],
			settings
		);
		const v = Object.fromEntries( seen.documents.map( d => [ d.id, d ] ) );

		// THE LANDMINE. Zero invalid blocks — the old verdict, reproduced exactly — and the
		// document is not a fixed point, with every paragraph valid only through core/paragraph
		// deprecation #6 (whose selector-less `content` swallows the entire <p> element).
		assert.strictEqual( v.authored.invalid.length, 0, 'the authored shape parses entirely valid — this is what said 0' );
		assert.strictEqual( v.authored.canonical, false, 'and it is NOT a serialization fixed point' );
		assert.ok( v.authored.not_canonical_blocks.length > 0, 'the blocks at risk are named' );
		assert.ok(
			v.authored.not_canonical_blocks.every(
				entry => 'core/paragraph' === entry.block_name && 'valid_via_deprecation' === entry.reason_code
			),
			'and named for the right reason'
		);

		// THE DETONATION: after one editor save the same paragraphs no longer parse at all.
		assert.ok( v.doubled.invalid.length > 0, 'the double-wrapped form is openly invalid' );

		// THE REPAIR: valid AND canonical. Both signals, which is the standard a migrated page
		// has to clear before a run may be called done.
		assert.strictEqual( v.repaired.invalid.length, 0 );
		assert.strictEqual( v.repaired.canonical, true );
		assert.deepStrictEqual( v.repaired.not_canonical_blocks, [] );
	} );

	await t.test( 'about-athletics: the nested-<p> gate must read the MARKUP, not the model', () => {
		const read = name => fs.readFileSync( path.join( CORPUS, `athletics-paragraphs.${ name }.html` ), 'utf8' );

		const pass = runHarness(
			'canonicalize',
			[ { id: 'authored', content: read( 'authored' ) }, { id: 'doubled', content: read( 'double-wrapped' ) } ],
			settings
		);
		const c = Object.fromEntries( pass.documents.map( d => [ d.id, d ] ) );

		// This is the near-miss, in numbers. Canonicalizing the authored shape preserves the
		// visible text, and the MODEL-level nested-<p> count goes 3 -> 0, which reads as a repair.
		// The markup count goes 0 -> 3: the pass would WRITE the double-wrap. A gate gated on the
		// model alone would have let this through.
		assert.strictEqual( c.authored.inner_text_preserved, true, 'the text survives, so the text gate does not fire' );
		assert.ok(
			c.authored.nested_paragraphs_after < c.authored.nested_paragraphs_before,
			'and the MODEL count falls, which reads as an improvement'
		);
		assert.strictEqual( c.authored.nested_paragraph_markup_before, 0 );
		assert.ok( c.authored.nested_paragraph_markup_after > 0, 'while the bytes gain a nested <p> — the finding' );

		// The reverse direction still reads as the repair it is: removing a nested <p> must not
		// be reported as introducing one.
		assert.ok( c.doubled.nested_paragraph_markup_before > 0 );
		assert.strictEqual( c.doubled.nested_paragraph_markup_after, 0 );
		// And recovering the detonated form is where the text is genuinely destroyed, which the
		// text gate catches on its own.
		assert.strictEqual( c.doubled.inner_text_preserved, false );
		assert.ok( c.doubled.inner_text_after_length < c.doubled.inner_text_before_length );
	} );

	await t.test( 'a validate pass over the produced markup agrees with the canonicalize pass', () => {
		const verify = runHarness(
			'validate',
			response.documents.map( d => ( { id: d.id, content: d.canonical_content } ) ),
			settings
		);

		const verified = Object.fromEntries( verify.documents.map( d => [ d.id, d ] ) );

		assert.strictEqual( verified.merz.invalid.length, 0 );
		assert.strictEqual(
			verified.nb610.invalid.length,
			byId.nb610.invalid_after_same_session.length,
			'a fresh process must reach the same verdict as the same-session re-parse'
		);
	} );
} );
