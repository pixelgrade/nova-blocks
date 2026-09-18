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
 * - `nb610-atelier-part-footer.html` — issue #610's real colored paragraphs. They
 *   must migrate without swallowing the paragraph wrapper, preserve their text, and reach a
 *   valid serialization fixed point. Previously a second rebuild deleted their body copy.
 *
 * The athletics trio retains the actual authored, double-wrapped, and repaired paragraphs from
 * the 2026-09-01 post-mortem. Authored content now migrates safely; already corrupted content
 * must still be reported honestly when its recovery would lose text.
 */

'use strict';

const test = require( 'node:test' );
const assert = require( 'node:assert' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const { execFileSync } = require( 'node:child_process' );
const { JSDOM } = require( 'jsdom' );

const ABSPATH = process.env.PIXELGRADE_HARNESS_TEST_ABSPATH || '';
const PLUGIN_DIR = process.env.PIXELGRADE_HARNESS_TEST_PLUGIN_DIR || '';
const CORPUS = path.join( __dirname, 'corpus' );

const paragraphSemantics = content => {
	const dom = new JSDOM( content );
	try {
		return Array.from( dom.window.document.querySelectorAll( 'p' ), paragraph => ( {
			content: paragraph.innerHTML,
			classes: Array.from( paragraph.classList ).filter( name => name !== 'has-normal-font-size' ).sort(),
			style: Array.from( paragraph.style ).map( name => [ name, paragraph.style.getPropertyValue( name ) ] ).sort(),
			anchor: paragraph.getAttribute( 'id' ),
			direction: paragraph.getAttribute( 'dir' ),
		} ) );
	} finally {
		dom.window.close();
	}
};

// This is the ONLY suite in the package that touches a real block registry, so a default `npm test`
// green means "the plumbing is right", never "the claims about @wordpress/blocks are right". The
// empirical facts about historical paragraph migration and markup safety are asserted HERE.
// A plumbing-only pass cannot establish compatibility with the site's actual WordPress bundles.
const skip = ! ABSPATH || ! PLUGIN_DIR
	? 'NOT RUN: real-registry paragraph migration and corruption detection are unverified. Point PIXELGRADE_HARNESS_TEST_ABSPATH and PIXELGRADE_HARNESS_TEST_PLUGIN_DIR at a provisioned site.'
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

	const paragraphFixtures = JSON.parse( fs.readFileSync( path.join( CORPUS, 'paragraph-compatibility.json' ), 'utf8' ) );
	const documents = [
		{ id: 'merz', content: fs.readFileSync( path.join( CORPUS, 'merz-part-footer.html' ), 'utf8' ) },
		{ id: 'nb610', content: fs.readFileSync( path.join( CORPUS, 'nb610-atelier-part-footer.html' ), 'utf8' ) },
		...paragraphFixtures,
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

	await t.test( 'nova-blocks#610: colored footer paragraphs converge without nesting or text loss', () => {
		const probe = byId.nb610;

		assert.strictEqual( probe.invalid.length, 0, 'this document starts out entirely valid' );
		assert.strictEqual( probe.converged, true );
		assert.deepStrictEqual( probe.invalid_after_same_session, [] );
		assert.strictEqual( probe.nested_paragraph_markup_before, 0 );
		assert.strictEqual( probe.nested_paragraph_markup_after, 0 );
		assert.strictEqual( probe.inner_text_preserved, true, 'migration must preserve all paragraph text' );
		assert.strictEqual( probe.inner_text_before_sha1, probe.inner_text_after_sha1 );
		assert.deepStrictEqual( paragraphSemantics( probe.canonical_content ), paragraphSemantics( documents[ 1 ].content ) );
	} );

	for ( const fixture of paragraphFixtures ) {
		await t.test( `paragraph compatibility: ${ fixture.id }`, () => {
			const result = byId[ fixture.id ];
			assert.deepStrictEqual( result.invalid, [] );
			assert.strictEqual( result.converged, true );
			assert.deepStrictEqual( result.invalid_after_same_session, [] );
			assert.strictEqual( result.inner_text_preserved, true );
			assert.strictEqual( result.nested_paragraph_markup_after, 0 );
			assert.deepStrictEqual( paragraphSemantics( result.canonical_content ), paragraphSemantics( fixture.content ) );
		} );
	}

	await t.test( 'about-athletics: safe migration and already corrupted paragraphs remain distinguishable', () => {
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

		// Historical markup remains non-canonical until its safe font-size migration is saved.
		assert.strictEqual( v.authored.invalid.length, 0 );
		assert.strictEqual( v.authored.canonical, false );
		assert.strictEqual( v.authored.not_canonical_blocks.length, 3, 'all historical paragraphs are identified for migration' );
		assert.ok( v.authored.not_canonical_blocks.every(
			entry => entry.block_name === 'core/paragraph' && entry.reason_code === 'valid_via_deprecation'
		) );

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

		assert.strictEqual( c.authored.inner_text_preserved, true );
		assert.strictEqual( c.authored.converged, true );
		assert.deepStrictEqual( c.authored.invalid_after_same_session, [] );
		assert.strictEqual( c.authored.nested_paragraphs_before, 0 );
		assert.strictEqual( c.authored.nested_paragraphs_after, 0 );
		assert.strictEqual( c.authored.nested_paragraph_markup_before, 0 );
		assert.strictEqual( c.authored.nested_paragraph_markup_after, 0 );
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
		for ( const fixture of paragraphFixtures ) {
			assert.deepStrictEqual( verified[ fixture.id ].invalid, [] );
			assert.strictEqual( verified[ fixture.id ].canonical, true, `${ fixture.id } must remain a fixed point in a fresh process` );
		}
	} );
} );
