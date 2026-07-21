#!/usr/bin/env node
/**
 * sidecar-lab capture harness — Sidecar Subgrid Modernization, Task 1.3.
 *
 * Probes + screenshots every fixture page of the sidecar-lab Studio site
 * (see fixtures-manifest.json) across four viewports, and diffs two runs.
 *
 *   node bin/sidecar-lab/capture.mjs --run <label> [--force]
 *   node bin/sidecar-lab/capture.mjs --diff <labelA> <labelB>
 *
 * Requirements: Node 22, the `playwriter` CLI on PATH (headless Chrome
 * installed via `playwriter browser install`), and the fixture site up at
 * the URLs recorded in .ai/sidecar-lab/fixtures-manifest.json.
 *
 * Design notes (why it is built this way):
 * - Shells out to the playwriter CLI with execFileSync (argv array, no
 *   shell), one invocation per page x viewport, on ONE reused headless
 *   session/page. `--timeout 90000` lifts the CLI's 10s default so the
 *   in-page settlement protocol can run to completion.
 * - The playwriter eval sandbox scopes `require('fs')` writes to the
 *   session's CWD subtree, so the session is created with the repo root as
 *   CWD and the driver writes the probe JSON straight to
 *   .ai/sidecar-lab/runs/<label>/ (console output may truncate long
 *   strings; files do not). `page.screenshot({ path })` is not scoped.
 * - ALL DOM reads for a page happen in ONE page.evaluate (novaProbe below),
 *   including the settlement protocol, so no state can shift between reads.
 * - The Anima LT page template wraps post content in its own
 *   sidebarPosition:none sidecar, so the FIRST .nb-sidecar on every page is
 *   the template's. Probes therefore enumerate ALL matches with a stable
 *   structural path (tag:childIndex chain from <body>) and never assume the
 *   first match is the fixture.
 *
 * Outputs (private overlay, never committed):
 *   .ai/sidecar-lab/runs/<label>/<slug>.<viewport>.json  probe data
 *   .ai/sidecar-lab/runs/<label>/<slug>.<viewport>.png   full-page shot
 *   .ai/sidecar-lab/runs/<label>/meta.json               run-level stats
 *
 * Diff annotations: .ai/sidecar-lab/expected-changes.md — one difference
 * per line: `<slug> <viewport> <reason>` (`*` wildcards allowed for slug or
 * viewport; `#` comments and list bullets tolerated). Missing file = no
 * annotations. --diff exits 0 only when every differing page/viewport is
 * annotated.
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const REPO_ROOT = path.resolve( __dirname, '..', '..' );
const LAB_DIR = path.join( REPO_ROOT, '.ai', 'sidecar-lab' );
const RUNS_DIR = path.join( LAB_DIR, 'runs' );
const MANIFEST_PATH = process.env.SIDECAR_LAB_MANIFEST || path.join( LAB_DIR, 'fixtures-manifest.json' );
const EXPECTED_PATH = path.join( LAB_DIR, 'expected-changes.md' );

const VIEWPORTS = [ 375, 1024, 1440, 2000 ];
const VIEWPORT_HEIGHT = 1200;
const SCREENSHOT_MAX_HEIGHT = 16000; // stay under Chromium's 16384px texture cap
const EVAL_TIMEOUT_MS = 90000; // playwriter --timeout per capture
const PROC_TIMEOUT_MS = 120000; // execFileSync hard cap per capture
const RECT_TOLERANCE_PX = 1; // diff threshold on left/right/width
const GTC_TOLERANCE_PX = 0.5; // per-track tolerance for gridTemplateColumns

/* ------------------------------------------------------------------ *
 * In-page probe. Serialized with .toString() and executed as the ONLY
 * page.evaluate of a capture. Pure browser code — no outer-scope refs.
 * ------------------------------------------------------------------ */
async function novaProbe() {
	const SETTLE_POLL_MS = 300;
	const SETTLE_CAP_MS = 5000;
	const FONTS_CAP_MS = 5000;
	const IMAGES_CAP_MS = 8000;

	const sleep = ( ms ) => new Promise( ( r ) => setTimeout( r, ms ) );
	const round1 = ( v ) => Math.round( v * 10 ) / 10;

	// Stable structural path: tag:childIndex chain from <body> down to the
	// element. Never positional-first — the Anima LT template contributes
	// its own leading .nb-sidecar on every page.
	const pathOf = ( el ) => {
		const segs = [];
		let node = el;
		while ( node && node !== document.documentElement && node.parentElement ) {
			segs.unshift( node.tagName.toLowerCase() + ':' + Array.prototype.indexOf.call( node.parentElement.children, node ) );
			node = node.parentElement;
		}
		return segs.join( '>' );
	};

	const settlement = {
		settled: false,
		settleMs: null,
		fontsTimedOut: false,
		imagesTimedOut: false,
		imagesTotal: 0,
		imagesIncomplete: 0,
	};

	// 1. Webfonts — break-align re-measures after fonts settle.
	await Promise.race( [
		document.fonts.ready,
		sleep( FONTS_CAP_MS ).then( () => { settlement.fontsTimedOut = true; } ),
	] );

	// 2. Scroll through the document to trigger loading="lazy" images
	// (below-the-fold lazy images never complete otherwise), then return
	// to the top so every rect is measured from scrollTop 0.
	const step = Math.max( 200, window.innerHeight );
	const maxY = () => Math.max( document.documentElement.scrollHeight - window.innerHeight, 0 );
	for ( let y = 0; y <= maxY(); y += step ) {
		window.scrollTo( 0, y );
		await sleep( 40 );
	}
	window.scrollTo( 0, 0 );
	await sleep( 100 );

	// 3. Every image complete (bounded).
	const imgs = Array.prototype.slice.call( document.images );
	settlement.imagesTotal = imgs.length;
	const pending = imgs.filter( ( img ) => ! ( img.complete && img.naturalWidth > 0 ) );
	const imagesLoaded = Promise.all( pending.map( ( img ) => new Promise( ( res ) => {
		img.addEventListener( 'load', res, { once: true } );
		img.addEventListener( 'error', res, { once: true } );
	} ) ) );
	await Promise.race( [
		imagesLoaded,
		sleep( IMAGES_CAP_MS ).then( () => { settlement.imagesTimedOut = true; } ),
	] );
	settlement.imagesIncomplete = imgs.filter( ( img ) => ! ( img.complete && img.naturalWidth > 0 ) ).length;

	// 4. Break-class settlement: the engine adds break-align-left/right via
	// debounced JS after domReady. Poll the page-wide inventory until two
	// consecutive samples 300ms apart are identical (cap 5s, flag on cap).
	const breakInventory = () => Array.prototype.map.call(
		document.querySelectorAll( '.break-align-left, .break-align-right' ),
		( el ) => pathOf( el )
			+ '|' + ( el.classList.contains( 'break-align-left' ) ? 'L' : '' )
			+ ( el.classList.contains( 'break-align-right' ) ? 'R' : '' )
	).sort();
	const settleStart = performance.now();
	let prevSample = JSON.stringify( breakInventory() );
	while ( performance.now() - settleStart < SETTLE_CAP_MS ) {
		await sleep( SETTLE_POLL_MS );
		const sample = JSON.stringify( breakInventory() );
		if ( sample === prevSample ) {
			settlement.settled = true;
			break;
		}
		prevSample = sample;
	}
	settlement.settleMs = Math.round( performance.now() - settleStart );

	// 5. Probe — every sidecar, every sidecar area, every aligned block.
	window.scrollTo( 0, 0 );
	const collect = ( selector, role ) => Array.prototype.map.call( document.querySelectorAll( selector ), ( el ) => {
		const cs = getComputedStyle( el );
		const isGrid = cs.display === 'grid' || cs.display === 'inline-grid';
		const rect = el.getBoundingClientRect();
		const structuralPath = pathOf( el );
		return {
			role,
			path: structuralPath,
			depth: structuralPath.split( '>' ).length,
			className: el.getAttribute( 'class' ) || '',
			display: cs.display,
			gridTemplateColumns: isGrid ? cs.gridTemplateColumns : null,
			parentDisplay: el.parentElement ? getComputedStyle( el.parentElement ).display : null,
			rect: {
				left: round1( rect.left ),
				right: round1( rect.right ),
				width: round1( rect.width ),
				top: round1( rect.top ),
				height: round1( rect.height ),
			},
		};
	} );
	const elements = [].concat(
		collect( '.nb-sidecar', 'sidecar' ),
		collect( '.nb-sidecar-area', 'sidecar-area' ),
		collect( '.alignwide, .alignfull, .alignleft, .alignright', 'aligned' ),
	);

	return {
		title: document.title,
		settlement,
		breakClasses: breakInventory(),
		elements,
	};
}

/* ------------------------------------------------------------------ *
 * playwriter plumbing
 * ------------------------------------------------------------------ */

function playwriter( args, opts = {} ) {
	return execFileSync( 'playwriter', args, {
		encoding: 'utf8',
		cwd: REPO_ROOT,
		timeout: opts.timeout || 60000,
		stdio: [ 'ignore', 'pipe', 'pipe' ],
	} );
}

function buildCaptureCode( fixture, width, jsonPath, pngPath ) {
	return [
		'if (!state.page || state.page.isClosed()) { state.page = await context.newPage(); }',
		'const page = state.page;',
		`await page.setViewportSize({ width: ${ width }, height: ${ VIEWPORT_HEIGHT } });`,
		`await page.goto(${ JSON.stringify( fixture.url ) }, { waitUntil: 'load', timeout: 30000 });`,
		`const payload = await page.evaluate(${ novaProbe.toString() });`,
		`payload.slug = ${ JSON.stringify( fixture.slug ) };`,
		`payload.url = ${ JSON.stringify( fixture.url ) };`,
		`payload.viewport = ${ width };`,
		`payload.viewportHeight = ${ VIEWPORT_HEIGHT };`,
		'payload.capturedAt = new Date().toISOString();',
		// Full-page screenshot WITHOUT fullPage:true — Chromium's
		// captureBeyondViewport discards decoded image data for offscreen
		// images and paints them blank. Instead grow the viewport to the
		// document height (the probe payload is already collected; the
		// width — the only input to sidecar layout — never changes), force
		// decode + two paint frames, and take a plain viewport screenshot.
		// Pages taller than the texture cap fall back to fullPage:true and
		// are flagged via payload.screenshotClamped.
		'const docHeight = await page.evaluate(() => Math.ceil(document.documentElement.scrollHeight));',
		`const shotHeight = Math.min(docHeight, ${ SCREENSHOT_MAX_HEIGHT });`,
		`payload.screenshotClamped = docHeight > ${ SCREENSHOT_MAX_HEIGHT };`,
		`await page.setViewportSize({ width: ${ width }, height: shotHeight });`,
		"await page.evaluate(() => Promise.all(Array.prototype.map.call(document.images, (img) => img.decode ? img.decode().catch(() => {}) : null)).then(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))));",
		`await page.screenshot({ path: ${ JSON.stringify( pngPath ) }, fullPage: payload.screenshotClamped, scale: 'css' });`,
		`require('fs').writeFileSync(${ JSON.stringify( jsonPath ) }, JSON.stringify(payload, null, 2) + '\\n');`,
		"console.log('NBCAP ok settled=' + payload.settlement.settled + ' settleMs=' + payload.settlement.settleMs + ' elements=' + payload.elements.length + ' breaks=' + payload.breakClasses.length);",
	].join( '\n' );
}

/* ------------------------------------------------------------------ *
 * --run
 * ------------------------------------------------------------------ */

function cmdRun( label, { force } ) {
	if ( ! label || label.startsWith( '--' ) ) {
		usage( 'Missing run label.' );
	}
	const manifest = JSON.parse( fs.readFileSync( MANIFEST_PATH, 'utf8' ) );
	const runDir = path.join( RUNS_DIR, label );
	if ( fs.existsSync( runDir ) && fs.readdirSync( runDir ).length > 0 && ! force ) {
		console.error( `Run "${ label }" already exists at ${ runDir } — pass --force to overwrite.` );
		process.exit( 1 );
	}
	fs.mkdirSync( runDir, { recursive: true } );

	// Warm the relay with ONE sequential command before anything else
	// (napkin: concurrent first startups can race on 127.0.0.1:19988).
	playwriter( [ 'session', 'list' ] );
	const created = playwriter( [ 'session', 'new', '--browser', 'headless' ] );
	const sessionId = ( created.match( /Session (\S+) created/ ) || [] )[ 1 ];
	if ( ! sessionId ) {
		console.error( 'Could not parse playwriter session id from:\n' + created );
		process.exit( 1 );
	}
	console.log( `Run "${ label }": ${ manifest.length } pages x ${ VIEWPORTS.length } viewports on headless session ${ sessionId }` );

	const failures = [];
	let captures = 0;
	try {
		for ( const fixture of manifest ) {
			for ( const width of VIEWPORTS ) {
				const base = `${ fixture.slug }.${ width }`;
				const jsonPath = path.join( runDir, base + '.json' );
				const pngPath = path.join( runDir, base + '.png' );
				const code = buildCaptureCode( fixture, width, jsonPath, pngPath );
				let ok = false;
				let lastError = null;
				for ( let attempt = 1; attempt <= 2 && ! ok; attempt++ ) {
					try {
						const out = playwriter(
							[ '-s', sessionId, '--timeout', String( EVAL_TIMEOUT_MS ), '-e', code ],
							{ timeout: PROC_TIMEOUT_MS }
						);
						if ( ! out.includes( 'NBCAP ok' ) || ! fs.existsSync( jsonPath ) ) {
							throw new Error( 'capture did not produce its probe JSON:\n' + out );
						}
						const status = ( out.match( /NBCAP ok.*$/m ) || [ '' ] )[ 0 ];
						console.log( `  ${ base }  ${ status.replace( 'NBCAP ok ', '' ) }` );
						ok = true;
					} catch ( err ) {
						lastError = err;
						if ( attempt === 1 ) {
							console.warn( `  ${ base }  attempt 1 failed (${ String( err.message ).split( '\n' )[ 0 ] }) — resetting session and retrying` );
							try {
								playwriter( [ 'session', 'reset', sessionId ] );
							} catch ( resetErr ) { /* retry will surface the real failure */ }
						}
					}
				}
				if ( ok ) {
					captures++;
				} else {
					failures.push( { capture: base, error: String( lastError && lastError.message ).split( '\n' )[ 0 ] } );
					console.error( `  ${ base }  FAILED: ${ String( lastError && lastError.message ).split( '\n' )[ 0 ] }` );
				}
			}
		}
	} finally {
		try {
			playwriter( [ 'session', 'delete', sessionId ] );
		} catch ( err ) {
			console.warn( `Could not delete playwriter session ${ sessionId }: ${ err.message }` );
		}
	}

	// Run-level meta from the persisted probes.
	const settlementTimeouts = [];
	const imageTimeouts = [];
	let elementsTotal = 0;
	for ( const file of fs.readdirSync( runDir ).filter( ( f ) => f.endsWith( '.json' ) && f !== 'meta.json' ).sort() ) {
		const data = JSON.parse( fs.readFileSync( path.join( runDir, file ), 'utf8' ) );
		elementsTotal += data.elements.length;
		if ( ! data.settlement.settled ) {
			settlementTimeouts.push( file.replace( /\.json$/, '' ) );
		}
		if ( data.settlement.imagesTimedOut ) {
			imageTimeouts.push( file.replace( /\.json$/, '' ) );
		}
	}
	const meta = {
		label,
		engine: label,
		date: new Date().toISOString(),
		pages: manifest.length,
		viewports: VIEWPORTS,
		viewportHeight: VIEWPORT_HEIGHT,
		captures,
		elementsTotal,
		settlementTimeouts,
		imageTimeouts,
		failures,
	};
	fs.writeFileSync( path.join( runDir, 'meta.json' ), JSON.stringify( meta, null, 2 ) + '\n' );
	console.log( `\nRun "${ label }" complete: ${ captures }/${ manifest.length * VIEWPORTS.length } captures, ${ elementsTotal } probed elements, ${ settlementTimeouts.length } settlement timeouts, ${ failures.length } failures.` );
	console.log( `Meta: ${ path.join( runDir, 'meta.json' ) }` );
	process.exit( failures.length ? 1 : 0 );
}

/* ------------------------------------------------------------------ *
 * --diff
 * ------------------------------------------------------------------ */

function loadAnnotations() {
	if ( ! fs.existsSync( EXPECTED_PATH ) ) {
		return [];
	}
	return fs.readFileSync( EXPECTED_PATH, 'utf8' ).split( '\n' )
		.map( ( line ) => line.replace( /^[-*]\s+/, '' ).trim() )
		.filter( ( line ) => line && ! line.startsWith( '#' ) )
		.map( ( line ) => {
			const m = line.match( /^(\S+)\s+(\S+)\s+(.+)$/ );
			return m ? { slug: m[ 1 ], viewport: m[ 2 ], reason: m[ 3 ] } : null;
		} )
		.filter( Boolean );
}

function findAnnotation( annotations, slug, viewport ) {
	return annotations.find( ( a ) =>
		( a.slug === slug || a.slug === '*' )
		&& ( a.viewport === String( viewport ) || a.viewport === '*' )
	);
}

function gtcEqual( a, b ) {
	if ( a === b ) {
		return true;
	}
	if ( a === null || b === null ) {
		return false;
	}
	const ta = a.split( /\s+/ );
	const tb = b.split( /\s+/ );
	if ( ta.length !== tb.length ) {
		return false;
	}
	return ta.every( ( tok, i ) => {
		const ma = tok.match( /^(-?\d+(?:\.\d+)?)px$/ );
		const mb = tb[ i ].match( /^(-?\d+(?:\.\d+)?)px$/ );
		if ( ma && mb ) {
			return Math.abs( parseFloat( ma[ 1 ] ) - parseFloat( mb[ 1 ] ) ) <= GTC_TOLERANCE_PX;
		}
		return tok === tb[ i ];
	} );
}

function setDiff( a, b ) {
	const sa = new Set( a );
	const sb = new Set( b );
	return {
		removed: a.filter( ( x ) => ! sb.has( x ) ),
		added: b.filter( ( x ) => ! sa.has( x ) ),
	};
}

function comparePage( a, b ) {
	const diffs = [];

	const breaks = setDiff( a.breakClasses, b.breakClasses );
	for ( const x of breaks.removed ) {
		diffs.push( `break-class removed: ${ x }` );
	}
	for ( const x of breaks.added ) {
		diffs.push( `break-class added: ${ x }` );
	}

	const key = ( el ) => `${ el.role }|${ el.path }`;
	const mapA = new Map( a.elements.map( ( el ) => [ key( el ), el ] ) );
	const mapB = new Map( b.elements.map( ( el ) => [ key( el ), el ] ) );
	for ( const k of mapA.keys() ) {
		if ( ! mapB.has( k ) ) {
			diffs.push( `element missing in B: ${ k }` );
		}
	}
	for ( const k of mapB.keys() ) {
		if ( ! mapA.has( k ) ) {
			diffs.push( `element only in B: ${ k }` );
		}
	}
	for ( const [ k, elA ] of mapA ) {
		const elB = mapB.get( k );
		if ( ! elB ) {
			continue;
		}
		if ( elA.display !== elB.display ) {
			diffs.push( `display changed (${ k }): ${ elA.display } -> ${ elB.display }` );
		}
		if ( ! gtcEqual( elA.gridTemplateColumns, elB.gridTemplateColumns ) ) {
			diffs.push( `gridTemplateColumns changed (${ k }):\n      A: ${ elA.gridTemplateColumns }\n      B: ${ elB.gridTemplateColumns }` );
		}
		const rectFields = [ 'left', 'right', 'width' ];
		const exceeded = rectFields
			.map( ( f ) => ( { f, da: elA.rect[ f ], db: elB.rect[ f ], delta: Math.round( ( elB.rect[ f ] - elA.rect[ f ] ) * 10 ) / 10 } ) )
			.filter( ( x ) => Math.abs( x.delta ) > RECT_TOLERANCE_PX );
		if ( exceeded.length ) {
			diffs.push( `rect changed (${ k }): ` + exceeded.map( ( x ) => `${ x.f } ${ x.da } -> ${ x.db } (d=${ x.delta }px)` ).join( ', ' ) );
		}
	}
	return diffs;
}

function cmdDiff( labelA, labelB ) {
	if ( ! labelA || ! labelB ) {
		usage( '--diff needs two run labels.' );
	}
	const dirA = path.join( RUNS_DIR, labelA );
	const dirB = path.join( RUNS_DIR, labelB );
	for ( const [ label, dir ] of [ [ labelA, dirA ], [ labelB, dirB ] ] ) {
		if ( ! fs.existsSync( dir ) ) {
			console.error( `Run "${ label }" not found at ${ dir }` );
			process.exit( 1 );
		}
	}
	const listJson = ( dir ) => fs.readdirSync( dir ).filter( ( f ) => f.endsWith( '.json' ) && f !== 'meta.json' );
	const files = Array.from( new Set( [ ...listJson( dirA ), ...listJson( dirB ) ] ) ).sort();
	const annotations = loadAnnotations();

	console.log( `sidecar-lab capture diff: ${ labelA } -> ${ labelB }` );
	console.log( `  A: ${ dirA }` );
	console.log( `  B: ${ dirB }` );
	console.log( `  ${ files.length } captures, ${ annotations.length } annotation(s) loaded\n` );

	let compared = 0;
	let differing = 0;
	let annotated = 0;
	let unannotated = 0;
	const settlementWarnings = [];

	for ( const file of files ) {
		const capture = file.replace( /\.json$/, '' );
		const m = capture.match( /^(.*)\.(\d+)$/ );
		const slug = m ? m[ 1 ] : capture;
		const viewport = m ? m[ 2 ] : '?';
		const inA = fs.existsSync( path.join( dirA, file ) );
		const inB = fs.existsSync( path.join( dirB, file ) );
		let diffs;
		if ( ! inA || ! inB ) {
			diffs = [ `capture missing in run "${ inA ? labelB : labelA }"` ];
		} else {
			const a = JSON.parse( fs.readFileSync( path.join( dirA, file ), 'utf8' ) );
			const b = JSON.parse( fs.readFileSync( path.join( dirB, file ), 'utf8' ) );
			if ( ! a.settlement.settled || ! b.settlement.settled ) {
				settlementWarnings.push( `${ capture } (A settled=${ a.settlement.settled }, B settled=${ b.settlement.settled })` );
			}
			diffs = comparePage( a, b );
		}
		compared++;
		if ( ! diffs.length ) {
			continue;
		}
		differing++;
		const annotation = findAnnotation( annotations, slug, viewport );
		if ( annotation ) {
			annotated++;
		} else {
			unannotated++;
		}
		console.log( `== ${ slug } @ ${ viewport } ==  ${ annotation ? `[annotated: ${ annotation.reason }]` : '[UNANNOTATED]' }` );
		for ( const d of diffs ) {
			console.log( `   ${ d }` );
		}
		console.log( '' );
	}

	if ( settlementWarnings.length ) {
		console.log( 'WARNING: captures with settlement timeouts (probe may be unstable):' );
		for ( const w of settlementWarnings ) {
			console.log( `   ${ w }` );
		}
		console.log( '' );
	}

	console.log( `Summary: ${ compared } compared, ${ differing } with differences (${ annotated } annotated, ${ unannotated } UNANNOTATED) -> ${ unannotated ? 'FAIL' : 'OK' }` );
	process.exit( unannotated ? 1 : 0 );
}

/* ------------------------------------------------------------------ */

function usage( message ) {
	if ( message ) {
		console.error( message + '\n' );
	}
	console.error( 'Usage:' );
	console.error( '  node bin/sidecar-lab/capture.mjs --run <label> [--force]' );
	console.error( '  node bin/sidecar-lab/capture.mjs --diff <labelA> <labelB>' );
	process.exit( 1 );
}

const argv = process.argv.slice( 2 );
if ( argv[ 0 ] === '--run' ) {
	cmdRun( argv[ 1 ], { force: argv.includes( '--force' ) } );
} else if ( argv[ 0 ] === '--diff' ) {
	cmdDiff( argv[ 1 ], argv[ 2 ] );
} else {
	usage( argv.length ? `Unknown command: ${ argv[ 0 ] }` : null );
}
