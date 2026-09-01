/**
 * Pixelgrade agent harness — editor-equivalent bootstrap.
 *
 * Loads the SITE'S OWN `wp-includes/js/dist/*` bundles and the SITE'S OWN installed
 * `nova-blocks/build/*` bundles into a jsdom window, so the block types, filters and save
 * functions in play are the exact bytes the block editor executes on that site. Nothing is
 * npm-installed from `@wordpress/*` and nothing about Nova Blocks is reimplemented here: the
 * repo builds against `@wordpress/blocks` 11.5.1 while lab sites run WordPress 7.1, so pinning
 * npm versions would guarantee drift (W4 spike §2).
 *
 * Two blobs that PHP already computes are required for parity, and the loader refuses to
 * pretend otherwise:
 *
 *   1. `get_block_editor_server_block_settings()` — Nova Blocks' `block.json` files declare an
 *      empty `attributes: {}` and PHP merges the real set (and, load-bearingly, its ORDER, which
 *      is the JSON key order inside the block comment) via
 *      `novablocks_merge_attributes_from_array()`. Registering from `block.json` alone silently
 *      reorders and drops comment attributes (spike F1).
 *   2. `novablocks_get_block_editor_settings()` — `core/separator`'s Nova Blocks save() reads
 *      `select('novablocks').getSettings().separator.markup`. Serialization is therefore NOT a
 *      pure function of (blockType, attributes, innerBlocks); without the store the block
 *      serializes an empty <div> and then parses invalid (spike F3).
 *
 * Two ordering rules are equally load-bearing:
 *
 *   - WP core bundles are ordered from WP's OWN manifest (`wp-includes/assets/
 *     script-loader-packages.php`), never by hand (spike §2.2).
 *   - Nova Blocks per-block bundles load BEFORE `registerCoreBlocks()`, because
 *     `novablocks/supernova` rewrites `core/query` through a `Number.MAX_SAFE_INTEGER`
 *     `blocks.registerBlockType` filter (spike F2).
 *
 * Scripts are evaluated with CLASSIC SCRIPT semantics through `vm.runInContext()`, not
 * `window.eval()`: WP/esbuild bundles rely on a top-level `var Foo = …` becoming a global, which
 * a strict-mode eval does not produce (spike §2.2). This single detail took the spike's bootstrap
 * from 11 failed bundles to zero.
 */

'use strict';

const fs = require( 'fs' );
const path = require( 'path' );
const vm = require( 'vm' );

/**
 * WP script handles whose file lives outside the packages manifest, plus the handles that are
 * deliberately shimmed rather than loaded (`null` = skip).
 */
const VENDOR_FILES = {
	react: 'vendor/react.js',
	'react-dom': 'vendor/react-dom.js',
	'react-jsx-runtime': 'vendor/react-jsx-runtime.js',
	lodash: 'vendor/lodash.js',
	moment: 'vendor/moment.js',
	'wp-polyfill': null,
	jquery: null,
	'jquery-core': null,
	'wp-hooks': 'hooks.js',
	'wp-i18n': 'i18n.js',
	'wp-dom-ready': 'dom-ready.js',
};

/**
 * Vendor handles carry no dependency list in the packages manifest, so their edges are declared
 * here. Missing the react-jsx-runtime → react edge is what made hand-ordering fail in the spike.
 */
const VENDOR_DEPS = {
	'react-jsx-runtime': [ 'react' ],
	'react-dom': [ 'react' ],
};

/** The block-editor page's script roots, reduced to what the serialization path needs. */
const ROOT_HANDLES = [ 'wp-blocks', 'wp-block-editor', 'wp-block-library', 'wp-editor', 'wp-format-library' ];

/**
 * Nova Blocks package bundles, in dependency order. `core` must precede `collection` etc., and
 * every one of them must precede the per-block bundles.
 */
const NB_PACKAGE_ORDER = [
	'easings',
	'utils',
	'icons',
	'block-editor',
	'color-signal',
	'core',
	'collection',
	'shape-modeling',
	'media-composition',
	'scrolling-effect',
	'tools',
];

/**
 * Post-bootstrap assertions. The spike flagged "WP dist load order is inferred" as a medium risk
 * whose mitigation is to fail loudly rather than silently degrade: a WordPress release that
 * repackages vendor scripts must break the harness with a named error, never quietly produce
 * non-canonical markup.
 */
const REQUIRED_WP_GLOBALS = [ 'blocks', 'blockEditor', 'blockLibrary', 'data', 'element', 'hooks' ];
const MIN_REGISTERED_BLOCK_TYPES = 60;

/**
 * Install the browser APIs the WP bundles touch at module scope. Nine small stubs; none of them
 * touches block logic (spike §2.1).
 *
 * @param {object} win jsdom window.
 */
function installShims( win ) {
	win.matchMedia = win.matchMedia || ( query => ( {
		matches: false,
		media: query,
		onchange: null,
		addListener() {},
		removeListener() {},
		addEventListener() {},
		removeEventListener() {},
		dispatchEvent() {
			return false;
		},
	} ) );

	win.requestIdleCallback = win.requestIdleCallback || ( cb => win.setTimeout( () => cb( { didTimeout: false, timeRemaining: () => 50 } ), 0 ) );
	win.cancelIdleCallback = win.cancelIdleCallback || ( id => win.clearTimeout( id ) );
	win.scrollTo = win.scrollTo || ( () => {} );

	win.ResizeObserver = win.ResizeObserver || class {
		observe() {}
		unobserve() {}
		disconnect() {}
	};

	win.IntersectionObserver = win.IntersectionObserver || class {
		observe() {}
		unobserve() {}
		disconnect() {}
		takeRecords() {
			return [];
		}
	};

	win.DOMRect = win.DOMRect || class {
		constructor( x = 0, y = 0, w = 0, h = 0 ) {
			Object.assign( this, { x, y, width: w, height: h, top: y, left: x, right: x + w, bottom: y + h } );
		}
	};

	if ( ! win.Element.prototype.scrollIntoView ) {
		win.Element.prototype.scrollIntoView = () => {};
	}

	if ( ! win.HTMLCanvasElement.prototype.getContext ) {
		win.HTMLCanvasElement.prototype.getContext = () => null;
	}

	// The harness is offline by construction: nothing on the save path fetches, and a bundle that
	// tried to would be a finding, not something to satisfy.
	win.fetch = win.fetch || ( () => Promise.reject( new Error( 'no network in the agent harness' ) ) );

	// Only `collection` / `media-composition` reference jQuery, both off the save path.
	win.jQuery = win.$ = Object.assign(
		function () {
			return {
				on() {
					return this;
				},
				off() {
					return this;
				},
				each() {
					return this;
				},
				length: 0,
			};
		},
		{
			fn: {},
			extend: Object.assign,
			each() {},
			ajax() {
				return {
					done() {
						return this;
					},
					fail() {
						return this;
					},
				};
			},
		}
	);
}

/**
 * Install the inline globals wp-admin normally prints before the editor bundles run.
 *
 * @param {object} win     jsdom window.
 * @param {string} siteUrl Site URL, used only to shape the REST root these globals carry.
 */
function installInlineGlobals( win, siteUrl ) {
	win.wp = {};
	win._wpDateSettings = {
		l10n: { locale: 'en_US', months: [], monthsShort: [], weekdays: [], weekdaysShort: [], meridiem: {}, relative: {}, startOfWeek: 1 },
		formats: { time: 'g:i a', date: 'F j, Y', datetime: 'F j, Y g:i a', datetimeAbbreviated: 'M j, Y g:i a' },
		timezone: { offset: 0, string: 'UTC', abbr: 'UTC' },
	};
	win.wpApiSettings = { root: `${ siteUrl.replace( /\/$/, '' ) }/wp-json/`, nonce: 'x', versionString: 'wp/v2/' };
	win.userSettings = { uid: '1' };
	win._wpUtilSettings = { ajax: { url: '/wp-admin/admin-ajax.php' } };
}

/**
 * Parse WP's own packages manifest into `{ handle: { file, deps } }`.
 *
 * @param {string} manifestPath Absolute path to `wp-includes/assets/script-loader-packages.php`.
 *
 * @return {object} Handle map.
 */
function readPackagesManifest( manifestPath ) {
	const src = fs.readFileSync( manifestPath, 'utf8' );
	const manifest = {};
	const re = /'([\w.-]+\.js)'\s*=>\s*array\(\s*'dependencies'\s*=>\s*array\(([^)]*)\)/g;
	let match;

	while ( ( match = re.exec( src ) ) ) {
		const file = match[ 1 ];
		const deps = ( match[ 2 ].match( /'([^']+)'/g ) || [] ).map( s => s.slice( 1, -1 ) );
		manifest[ 'wp-' + file.replace( /\.js$/, '' ) ] = { file, deps };
	}

	return manifest;
}

/**
 * Boot an editor-equivalent jsdom window.
 *
 * @param {object} options                          Bootstrap inputs.
 * @param {string} options.abspath                  The site's ABSPATH (holds `wp-includes/`).
 * @param {string} options.pluginDir                The INSTALLED nova-blocks plugin directory
 *                                                   (holds `build/`). Never a bundled snapshot —
 *                                                   version skew between the CLI and the site's
 *                                                   plugin is exactly what this avoids.
 * @param {object} options.serverBlockSettings      `get_block_editor_server_block_settings()`.
 * @param {object} options.novablocksEditorSettings `novablocks_get_block_editor_settings()`.
 * @param {string} [options.siteUrl]                Site URL for the inline globals.
 * @param {boolean} [options.verbose]               Surface in-page console output.
 *
 * @return {object} `{ win, wp, report }`.
 */
function bootstrap( options ) {
	const { JSDOM } = require( 'jsdom' );

	const abspath = options.abspath;
	const pluginDir = options.pluginDir;
	const siteUrl = options.siteUrl || 'http://localhost';
	const dist = path.join( abspath, 'wp-includes/js/dist' );
	const manifestPath = path.join( abspath, 'wp-includes/assets/script-loader-packages.php' );

	if ( ! fs.existsSync( dist ) ) {
		throw new Error( `No WordPress script bundles at ${ dist } — is "abspath" a WordPress root?` );
	}
	if ( ! fs.existsSync( manifestPath ) ) {
		throw new Error( `No script-loader packages manifest at ${ manifestPath }.` );
	}
	if ( ! fs.existsSync( path.join( pluginDir, 'build' ) ) ) {
		throw new Error( `No Nova Blocks build output at ${ path.join( pluginDir, 'build' ) } — the installed plugin is unbuilt.` );
	}

	const notes = [];
	const note = ( ...parts ) => {
		notes.push( parts.join( ' ' ) );
		if ( options.verbose ) {
			process.stderr.write( `[harness] ${ parts.join( ' ' ) }\n` );
		}
	};

	const dom = new JSDOM( '<!doctype html><html><head></head><body><div id="root"></div></body></html>', {
		url: `${ siteUrl.replace( /\/$/, '' ) }/wp-admin/post.php`,
		pretendToBeVisual: true,
		runScripts: 'dangerously',
	} );
	const win = dom.window;

	installShims( win );
	installInlineGlobals( win, siteUrl );

	// Silence in-page console (WP block-validation logs are extremely chatty and are DATA here,
	// not diagnostics — the validity verdicts are read off the parse result, not off the log).
	if ( ! options.verbose ) {
		const noop = () => {};
		win.console = {
			log: noop, info: noop, warn: noop, error: noop, debug: noop, trace: noop,
			group: noop, groupEnd: noop, groupCollapsed: noop, table: noop, dir: noop,
			assert: noop, time: noop, timeEnd: noop, count: noop,
		};
	}

	const vmctx = dom.getInternalVMContext();
	const loadScript = ( file, label ) => {
		try {
			vm.runInContext( fs.readFileSync( file, 'utf8' ), vmctx, { filename: file } );
			return true;
		} catch ( error ) {
			note( 'LOAD FAIL', label || file, '::', String( error.message ).split( '\n' )[ 0 ] );
			return false;
		}
	};

	// ---------------------------------------------------------------- WP core bundles
	const manifest = readPackagesManifest( manifestPath );
	const coreLoaded = [];
	const coreFailed = [];
	const seen = new Set();

	const loadHandle = handle => {
		if ( seen.has( handle ) ) {
			return;
		}
		seen.add( handle );

		const entry = manifest[ handle ];
		const deps = VENDOR_DEPS[ handle ] || ( entry ? entry.deps : [] );
		deps.forEach( loadHandle );

		let file = entry ? entry.file : undefined;
		if ( undefined !== VENDOR_FILES[ handle ] ) {
			file = VENDOR_FILES[ handle ];
		}
		if ( null === file ) {
			return; // polyfill / jquery: shimmed above.
		}
		if ( ! file ) {
			note( 'unknown handle', handle );
			return;
		}

		const bundle = path.join( dist, file );
		if ( ! fs.existsSync( bundle ) ) {
			note( 'MISSING bundle', file );
			return;
		}

		( loadScript( bundle, 'wp/' + file ) ? coreLoaded : coreFailed ).push( handle );
	};

	loadScript( path.join( dist, 'vendor/lodash.js' ), 'vendor/lodash' );
	// WP's script-loader appends `window.lodash = _.noConflict();` to the `lodash` handle; the raw
	// vendor file only sets `_`. Without this, `novablocks/announcement-bar` throws (spike F4).
	try {
		vm.runInContext( 'window.lodash = window._.noConflict();', vmctx );
	} catch ( error ) {
		note( 'lodash noConflict shim failed', error.message );
	}

	ROOT_HANDLES.forEach( loadHandle );
	note( 'core bundles failed:', coreFailed.join( ',' ) || 'none' );

	if ( ! win.wp || ! win.wp.blocks ) {
		throw new Error( `WordPress block bundles did not initialize (wp.blocks missing). Failed handles: ${ coreFailed.join( ',' ) || 'none' }.` );
	}

	// -------------------------------------- server-side block definitions (attributes + ORDER)
	let serverDefinitionCount = 0;
	if ( options.serverBlockSettings && win.wp.blocks.unstable__bootstrapServerSideBlockDefinitions ) {
		win.wp.blocks.unstable__bootstrapServerSideBlockDefinitions( options.serverBlockSettings );
		serverDefinitionCount = Object.keys( options.serverBlockSettings ).length;
		note( 'bootstrapped', serverDefinitionCount, 'server-side block definitions' );
	}

	// ------------------------------------------------------- Nova Blocks package bundles
	const nbLoaded = [];
	const nbFailed = [];
	for ( const pkg of NB_PACKAGE_ORDER ) {
		const bundle = path.join( pluginDir, 'build', pkg, 'index.js' );
		if ( ! fs.existsSync( bundle ) ) {
			nbFailed.push( pkg + ' (no build)' );
			continue;
		}
		( loadScript( bundle, 'nb/' + pkg ) ? nbLoaded : nbFailed ).push( pkg );
	}

	// -------------------------------- Nova Blocks editor settings (the impure-save dependency)
	let novablocksSettingsHydrated = false;
	if ( options.novablocksEditorSettings && win.wp.novaBlocks && win.wp.novaBlocks.initialize ) {
		try {
			win.wp.novaBlocks.settings = options.novablocksEditorSettings;
			win.wp.novaBlocks.initialize( options.novablocksEditorSettings );
			novablocksSettingsHydrated = true;
		} catch ( error ) {
			note( 'novablocks settings FAILED', String( error.message ).split( '\n' )[ 0 ] );
		}
	}

	// ------------------------------------------ Nova Blocks per-block bundles (BEFORE core)
	const nbBlockResults = [];
	const nbBlockDir = path.join( pluginDir, 'build/block-library/blocks' );
	if ( fs.existsSync( nbBlockDir ) ) {
		for ( const name of fs.readdirSync( nbBlockDir ).sort() ) {
			const dir = path.join( nbBlockDir, name );
			const metaPath = path.join( dir, 'block.json' );
			const scriptPath = path.join( dir, 'index.js' );
			const hasMetadata = fs.existsSync( metaPath );
			const meta = hasMetadata ? JSON.parse( fs.readFileSync( metaPath, 'utf8' ) ) : null;
			const blockName = meta ? meta.name : `novablocks/${ name }`;

			if ( meta ) {
				try {
					win.wp.blocks.unstable__bootstrapServerSideBlockDefinitions( { [ meta.name ]: meta } );
				} catch ( error ) {
					// Bootstrapping is additive; a rejected metadata merge is reported through the
					// registration outcome below, not swallowed silently.
					note( 'ssd merge failed for', meta.name, '::', String( error.message ).split( '\n' )[ 0 ] );
				}
			}

			let ok = false;
			let err = null;

			if ( ! fs.existsSync( scriptPath ) ) {
				err = 'no editor bundle (build/block-library/blocks/<name>/index.js missing)';
			} else {
				try {
					vm.runInContext( fs.readFileSync( scriptPath, 'utf8' ), vmctx, { filename: scriptPath } );
					ok = !! win.wp.blocks.getBlockType( blockName );
					if ( ! ok ) {
						err = 'the bundle evaluated but registered no block type';
					}
				} catch ( error ) {
					err = String( error.message ).split( '\n' )[ 0 ];
				}
			}

			// There is deliberately NO metadata fallback here. Registering a block from its
			// `block.json` with a stub save function would convert "this bundle failed to
			// load" into "every stored instance of this block is invalid", and — in canonicalize
			// mode — into "every stored instance is rebuilt through the stub and serialized
			// empty". A block with no visible text (an image, a spacer, a media block) would be
			// DESTROYED silently, because the innerText gate has no text to miss. The loader's own
			// philosophy applies: fail loudly rather than serialize against a partial registry.
			nbBlockResults.push( { name, blockName, hasMetadata, ok, err } );
		}
	}

	// ----------------------------------------------------------------- core blocks (LAST)
	try {
		if ( win.wp.blockLibrary && win.wp.blockLibrary.registerCoreBlocks ) {
			win.wp.blockLibrary.registerCoreBlocks();
		}
	} catch ( error ) {
		note( 'registerCoreBlocks FAIL', String( error.message ).split( '\n' )[ 0 ] );
	}

	// ------------------------------------------------------------------------- assertions
	const missingGlobals = REQUIRED_WP_GLOBALS.filter( key => ! win.wp[ key ] );
	if ( missingGlobals.length ) {
		throw new Error( `Bootstrap incomplete: wp.${ missingGlobals.join( ', wp.' ) } missing. Failed bundles: ${ coreFailed.concat( nbFailed ).join( ', ' ) || 'none' }.` );
	}

	const registered = win.wp.blocks.getBlockTypes().map( block => block.name );
	if ( registered.length < MIN_REGISTERED_BLOCK_TYPES ) {
		throw new Error( `Bootstrap incomplete: only ${ registered.length } block types registered (floor ${ MIN_REGISTERED_BLOCK_TYPES }). Refusing to serialize against a partial registry.` );
	}

	const novablocksRegistered = registered.filter( name => name.startsWith( 'novablocks/' ) ).length;

	// Any bundle that did not load is a DEGRADED bootstrap, not a warning to note and continue
	// past. The registry would then be missing a real `save()` — silently changing what "canonical"
	// means for every document containing that block.
	const degraded = []
		.concat( coreFailed.map( handle => `wp core bundle "${ handle }"` ) )
		.concat( nbFailed.map( pkg => `nova-blocks package "${ pkg }"` ) )
		.concat( nbBlockResults.filter( r => ! r.ok ).map( r => `${ r.blockName } (${ r.err })` ) );

	if ( degraded.length ) {
		const error = new Error( `Harness degraded — ${ degraded.length } editor bundle(s) failed to load: ${ degraded.join( '; ' ) }. Refusing to validate or serialize against an incomplete block registry.` );
		error.harnessDegraded = degraded;
		throw error;
	}

	return {
		win,
		wp: win.wp,
		dom,
		notes,
		report: {
			abspath,
			plugin_dir: pluginDir,
			core_bundles_loaded: coreLoaded.length,
			core_bundles_failed: coreFailed,
			nb_packages_loaded: nbLoaded,
			nb_packages_failed: nbFailed,
			server_block_definitions: serverDefinitionCount,
			novablocks_settings_hydrated: novablocksSettingsHydrated,
			nb_block_bundles: nbBlockResults.length,
			registered_block_types: registered.length,
			registered_novablocks_block_types: novablocksRegistered,
		},
	};
}

module.exports = {
	bootstrap,
	readPackagesManifest,
	installShims,
	NB_PACKAGE_ORDER,
	ROOT_HANDLES,
	VENDOR_FILES,
	VENDOR_DEPS,
	REQUIRED_WP_GLOBALS,
	MIN_REGISTERED_BLOCK_TYPES,
};
