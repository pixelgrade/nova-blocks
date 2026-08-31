#!/usr/bin/env node
/**
 * Pixelgrade agent harness — stdin/stdout entry point.
 *
 * PHP (`wp pixelgrade blocks validate|canonicalize`) writes ONE JSON request on stdin and reads
 * ONE JSON response on stdout. Nothing else is ever written to stdout: diagnostics go to stderr,
 * so the PHP side can parse stdout unconditionally.
 *
 * Request:
 *   {
 *     "protocol": 1,                       // refused unless it matches this harness
 *     "mode": "validate" | "canonicalize",
 *     "site_bundles_meta": { "abspath": "…", "plugin_dir": "…", "site_url": "…" },
 *     "server_block_settings":    { … },   // get_block_editor_server_block_settings()
 *     "novablocks_editor_settings": { … }, // novablocks_get_block_editor_settings()
 *     "documents": [ { "id": 12, "content": "<!-- wp:… -->" } ]
 *   }
 *
 * Response:
 *   {
 *     "ok": true,
 *     "protocol": 1,
 *     "bootstrap": { … },                  // what actually loaded, for the envelope's data
 *     "documents": [ {
 *       "id": 12,
 *       "invalid": [ { "index": 3, "block_name": "core/heading", "reason": "…" } ],
 *       "canonical_content": "…",          // canonicalize mode only
 *       "converged": true
 *     } ]
 *   }
 *
 * A failure that prevents any work returns `{ "ok": false, "error": "…" }` with exit 1 — never a
 * bare stack trace on stdout, and never a partial document list presented as a complete one.
 */

'use strict';

const PROTOCOL_VERSION = 1;

/**
 * Read all of stdin.
 *
 * @return {Promise<string>} Raw request.
 */
function readStdin() {
	return new Promise( ( resolve, reject ) => {
		let buffer = '';
		process.stdin.setEncoding( 'utf8' );
		process.stdin.on( 'data', chunk => {
			buffer += chunk;
		} );
		process.stdin.on( 'end', () => resolve( buffer ) );
		process.stdin.on( 'error', reject );
	} );
}

/**
 * Emit the response and exit — hard.
 *
 * Setting `process.exitCode` and letting the event loop drain is not safe here. The loader runs the
 * real editor bundles inside a `pretendToBeVisual` jsdom window, and any `setInterval` / rAF chain
 * one of them scheduled keeps the process alive AFTER the answer is written: the pipes never reach
 * EOF and the PHP side blocks with the response already sitting in its buffer. So the jsdom window
 * is closed (which cancels its timers) and the process is exited from the write callback, which is
 * what guarantees the bytes are flushed first.
 *
 * @param {object} payload  Response body.
 * @param {number} exitCode Process exit code.
 */
function respond( payload, exitCode ) {
	if ( openWindow ) {
		try {
			openWindow.close();
		} catch ( error ) {
			// A window that refuses to close must not stop the response from being delivered.
		}
		openWindow = null;
	}

	process.stdout.write( JSON.stringify( payload ), () => process.exit( exitCode ) );
}

/** The jsdom window to tear down before exiting, once one exists. */
let openWindow = null;

/**
 * Emit a fatal response.
 *
 * @param {string} message Error message.
 * @param {string} [code]  Machine token the PHP side branches on.
 * @param {object} [extra] Extra top-level keys.
 */
function fail( message, code = 'harness_failed', extra = {} ) {
	respond( { ok: false, protocol: PROTOCOL_VERSION, code, error: message, documents: [], ...extra }, 1 );
}

async function main() {
	// `--selftest` proves the package is installed and its runtime resolves, without needing a
	// site. The PHP side's availability probe uses it, so a broken/partial `npm ci` is reported as
	// `harness_unavailable` with a real reason rather than surfacing later as a parse failure.
	if ( process.argv.includes( '--selftest' ) ) {
		try {
			const { JSDOM } = require( 'jsdom' );
			const dom = new JSDOM( '<!doctype html><p>ok</p>' );
			if ( 'ok' !== dom.window.document.querySelector( 'p' ).textContent ) {
				throw new Error( 'jsdom did not parse a trivial document' );
			}
			respond( { ok: true, protocol: PROTOCOL_VERSION, selftest: true, node: process.version }, 0 );
		} catch ( error ) {
			fail( `runtime not installed: ${ String( error.message ).split( '\n' )[ 0 ] }` );
		}
		return;
	}

	let request;
	try {
		const raw = await readStdin();
		if ( ! raw.trim() ) {
			fail( 'empty request on stdin' );
			return;
		}
		request = JSON.parse( raw );
	} catch ( error ) {
		fail( `could not parse the request: ${ String( error.message ).split( '\n' )[ 0 ] }` );
		return;
	}

	// Protocol handshake. The harness is a SEPARATELY installed package (Gate-1), so plugin/harness
	// version skew is this architecture's routine failure mode, not an exotic one. Both sides
	// declare the protocol they speak and a mismatch is refused up front, rather than surfacing
	// later as missing fields that a fail-open reader would treat as "nothing to report".
	if ( undefined !== request.protocol && request.protocol !== PROTOCOL_VERSION ) {
		fail(
			`protocol mismatch: the plugin speaks protocol ${ request.protocol }, this harness speaks ${ PROTOCOL_VERSION }`,
			'protocol_mismatch',
			{ harness_protocol: PROTOCOL_VERSION, requested_protocol: request.protocol }
		);
		return;
	}

	const mode = request.mode;
	if ( 'validate' !== mode && 'canonicalize' !== mode ) {
		fail( `unknown mode "${ String( mode ) }" (expected "validate" or "canonicalize")` );
		return;
	}

	const meta = request.site_bundles_meta || {};
	if ( ! meta.abspath || ! meta.plugin_dir ) {
		fail( 'site_bundles_meta must carry both "abspath" and "plugin_dir"' );
		return;
	}

	const documents = Array.isArray( request.documents ) ? request.documents : null;
	if ( ! documents ) {
		fail( '"documents" must be an array' );
		return;
	}

	let context;
	try {
		context = require( '../lib/loader.cjs' ).bootstrap( {
			abspath: meta.abspath,
			pluginDir: meta.plugin_dir,
			siteUrl: meta.site_url,
			serverBlockSettings: request.server_block_settings,
			novablocksEditorSettings: request.novablocks_editor_settings,
			verbose: !! process.env.PIXELGRADE_HARNESS_VERBOSE,
		} );
	} catch ( error ) {
		if ( Array.isArray( error.harnessDegraded ) ) {
			// A bundle that did not load means the block registry is incomplete, so "canonical" no
			// longer means what it should. Both modes abort; neither degrades quietly.
			fail(
				String( error.message ).split( '\n' )[ 0 ],
				'harness_degraded',
				{ degraded_bundles: error.harnessDegraded }
			);
			return;
		}

		fail( `bootstrap failed: ${ String( error.message ).split( '\n' )[ 0 ] }` );
		return;
	}

	openWindow = context.win;

	const { processDocument } = require( '../lib/canonicalize.cjs' );
	const results = [];

	for ( const document of documents ) {
		try {
			results.push( processDocument( context, document, mode ) );
		} catch ( error ) {
			results.push( {
				id: document && document.id,
				invalid: [],
				converged: false,
				error: String( error.message ).split( '\n' )[ 0 ],
			} );
		}
	}

	respond(
		{
			ok: true,
			protocol: PROTOCOL_VERSION,
			code: 'ok',
			mode,
			bootstrap: context.report,
			documents: results,
		},
		0
	);
}

main().catch( error => {
	fail( String( ( error && error.message ) || error ).split( '\n' )[ 0 ] );
} );
