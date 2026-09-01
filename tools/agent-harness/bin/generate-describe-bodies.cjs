#!/usr/bin/env node
/**
 * One-time generator for lib/cli/blocks-describe-body-templates.json.
 *
 * Reads the same editor-bootstrap inputs as the canonicalizer plus a curated `blocks` array from
 * stdin, then writes JSON to stdout. The caller owns redirecting that output through the repo's
 * normal generated-artifact workflow; the plugin never invokes this at runtime.
 */

'use strict';

const fs = require( 'node:fs' );

let context;
try {
	const request = JSON.parse( fs.readFileSync( 0, 'utf8' ) );
	const meta = request.site_bundles_meta || {};
	if ( ! meta.abspath || ! meta.plugin_dir || ! Array.isArray( request.blocks ) ) {
		throw new Error( 'request needs site_bundles_meta.abspath, site_bundles_meta.plugin_dir, and blocks[]' );
	}

	context = require( '../lib/loader.cjs' ).bootstrap( {
		abspath: meta.abspath,
		pluginDir: meta.plugin_dir,
		siteUrl: meta.site_url,
		serverBlockSettings: request.server_block_settings,
		novablocksEditorSettings: request.novablocks_editor_settings,
		verbose: !! process.env.PIXELGRADE_HARNESS_VERBOSE,
	} );

	const blocks = require( '../lib/describe-bodies.cjs' ).describeBodies( context, request.blocks );
	const output = JSON.stringify( {
		schema_version: 1,
		generated_by: '@pixelgrade/agent-harness',
		generator: 'tools/agent-harness/bin/generate-describe-bodies.cjs',
		blocks,
	}, null, 2 ) + '\n';

	// The real editor bundles schedule timers/observers. As with harness.cjs, exit only after stdout
	// flushes instead of letting those browser tasks hold the one-shot generator open.
	process.stdout.write( output, () => process.exit( 0 ) );
} catch ( error ) {
	if ( context && context.win ) {
		context.win.close();
	}
	process.stderr.write( `${ String( error && error.message || error ).split( '\n' )[ 0 ] }\n` );
	process.exit( 1 );
}
