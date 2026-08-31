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

const skip = ! ABSPATH || ! PLUGIN_DIR
	? 'set PIXELGRADE_HARNESS_TEST_ABSPATH and PIXELGRADE_HARNESS_TEST_PLUGIN_DIR to run the corpus parity contract'
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
