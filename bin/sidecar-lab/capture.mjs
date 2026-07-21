#!/usr/bin/env node
/**
 * sidecar-lab capture harness — Sidecar Subgrid Modernization, Task 1.3.
 *
 * Probes + screenshots every fixture page of the sidecar-lab Studio site
 * (see fixtures-manifest.json) across four viewports, and diffs two runs.
 *
 *   node bin/sidecar-lab/capture.mjs --run <label> [--force] [--no-js]
 *   node bin/sidecar-lab/capture.mjs --diff <labelA> <labelB>
 *
 * --no-js (Task 3.2): disables page script execution via CDP
 * Emulation.setScriptExecutionDisabled BEFORE navigation, so probes measure
 * the pure SSR + CSS layout (server-known rail-absence classes and the
 * :has() empty-rail layer) with the JS break-measurement layer absent. The
 * settlement protocol skips its break-class polling (there is nothing to
 * settle) and records settlement.noJs / meta.noJs. Driver-initiated
 * page.evaluate still runs — only page scripts are disabled — BUT page
 * timers and requestAnimationFrame never fire in that state (microtasks
 * do), so all sleep()-based settlement moves to the driver side and the
 * probe awaits only engine/microtask-resolved promises. Diffs between a
 * --no-js run and a JS run of the SAME engine are for analysis only — never
 * gate on them (break classes and JS-driven placements legitimately differ).
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
 * Diff annotations: .ai/sidecar-lab/expected-changes.md (override with the
 * SIDECAR_LAB_EXPECTED env var) — one difference per line:
 *
 *   <slug> <viewport> [<kind>] <reason>
 *
 * kind ∈ gtc | rects | breaks | all (absent = all). `*` wildcards allowed
 * for slug or viewport. `#` comments and `-` list bullets tolerated — do
 * NOT bullet lines with `*`: a leading `* ` is parsed as a wildcard slug.
 * Element-set and display changes have no dedicated kind; only a kind-less
 * (all) annotation suppresses them. Unparseable lines emit a warning;
 * annotations that matched nothing are listed after the diff (warning, not
 * a failure). Missing file = no annotations.
 *
 * --diff loads the fixtures manifest and FAILS (exit 1) unless both runs
 * are complete — pages x viewports captures present and a meta.json with
 * zero failures — AND every differing capture is fully annotated. An empty
 * or partial run dir can never diff clean.
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
const EXPECTED_PATH = process.env.SIDECAR_LAB_EXPECTED || path.join( LAB_DIR, 'expected-changes.md' );

const VIEWPORTS = [ 375, 1024, 1440, 2000 ];
const VIEWPORT_HEIGHT = 1200;
const SCREENSHOT_MAX_HEIGHT = 16000; // stay under Chromium's 16384px texture cap
const EVAL_TIMEOUT_MS = 90000; // playwriter --timeout per capture
const PROC_TIMEOUT_MS = 120000; // execFileSync hard cap per capture
const RECT_TOLERANCE_PX = 1; // diff threshold on each compared rect field
// top/height are recorded in probes but deliberately NOT compared
// (decision 2026-07-21): fresh runs vs baseline showed vertical-only
// jitter above the 1px gate on tall pages at the 2000px viewport —
// sub-tolerance drifts on individual figures accumulate down the page
// into 1.5-1.8px top/height deltas. Horizontal fields were 68/68 stable
// in every run pair. See README "Vertical geometry" for the evidence.
const RECT_FIELDS = [ 'left', 'right', 'width' ];
const GTC_TOLERANCE_PX = 0.5; // per-track tolerance for gridTemplateColumns
const ANNOTATION_KINDS = [ 'gtc', 'rects', 'breaks', 'all' ];
const MAX_CONSECUTIVE_FAILURES = 3; // fast-abort threshold for --run

/* ------------------------------------------------------------------ *
 * In-page probe. Serialized with .toString() and executed as the ONLY
 * page.evaluate of a capture. Pure browser code — no outer-scope refs.
 * ------------------------------------------------------------------ */
async function novaProbe( noJs ) {
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
		noJs: !! noJs,
		fontsTimedOut: false,
		imagesTimedOut: false,
		imagesTotal: 0,
		imagesIncomplete: 0,
	};

	// NO-JS MODE: with Emulation.setScriptExecutionDisabled, page TIMERS and
	// requestAnimationFrame never fire (only microtasks run), so every
	// sleep()-based wait below would hang the evaluate. The driver performs
	// the scroll-through and image polling BEFORE this evaluate (see
	// buildCaptureCode); here we only await the engine-resolved fonts
	// promise and record image counts.
	if ( noJs ) {
		await document.fonts.ready;
		const imgsNoJs = Array.prototype.slice.call( document.images );
		settlement.imagesTotal = imgsNoJs.length;
		settlement.imagesIncomplete = imgsNoJs.filter( ( img ) => ! ( img.complete && img.naturalWidth > 0 ) ).length;
		settlement.imagesTimedOut = settlement.imagesIncomplete > 0;
	} else {

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

	}

	// 4. Break-class settlement: the engine adds break-align-left/right via
	// debounced JS after domReady. Poll the page-wide inventory until two
	// consecutive samples 300ms apart are identical (cap 5s, flag on cap).
	// In --no-js mode there is no script to settle — skip the polling
	// entirely (the inventory is still collected below; it should be empty).
	const breakInventory = () => Array.prototype.map.call(
		document.querySelectorAll( '.break-align-left, .break-align-right' ),
		( el ) => pathOf( el )
			+ '|' + ( el.classList.contains( 'break-align-left' ) ? 'L' : '' )
			+ ( el.classList.contains( 'break-align-right' ) ? 'R' : '' )
	).sort();
	if ( noJs ) {
		settlement.settled = true;
		settlement.settleMs = 0;
	} else {
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
	}

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

function buildCaptureCode( fixture, width, jsonPath, pngPath, noJs = false ) {
	return [
		'if (!state.page || state.page.isClosed()) { state.page = await context.newPage(); }',
		'const page = state.page;',
		// --no-js: disable page script execution BEFORE navigation via CDP.
		// Driver page.evaluate calls (the probe below) still execute — the
		// emulation flag only suppresses page-initiated scripts. The CDP
		// session is re-created whenever the page object changed (fresh page
		// or a session reset between retries).
		...( noJs ? [
			'if (!state.cdp || state.cdpFor !== page) { state.cdp = await context.newCDPSession(page); state.cdpFor = page; }',
			"await state.cdp.send('Emulation.setScriptExecutionDisabled', { value: true });",
		] : [] ),
		`await page.setViewportSize({ width: ${ width }, height: ${ VIEWPORT_HEIGHT } });`,
		`const resp = await page.goto(${ JSON.stringify( fixture.url ) }, { waitUntil: 'load', timeout: 30000 });`,
		// A 404 template (or any error page) must never probe "successfully".
		`if (!resp || resp.status() >= 400) { throw new Error('HTTP ' + (resp ? resp.status() : 'no response') + ' for ' + ${ JSON.stringify( fixture.url ) }); }`,
		// Driver-side settlement for --no-js: page timers/rAF do not fire with
		// scripts disabled, so the scroll-through (native lazy images) and the
		// bounded image-completeness poll run from the driver; the probe
		// evaluate afterwards awaits only microtask-resolved promises.
		...( noJs ? [
			'const docH = await page.evaluate(() => Math.max(document.documentElement.scrollHeight - window.innerHeight, 0));',
			`for (let y = 0; y <= docH; y += ${ VIEWPORT_HEIGHT }) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(60); }`,
			'await page.evaluate(() => window.scrollTo(0, 0));',
			'await page.waitForTimeout(150);',
			'for (let i = 0; i < 40; i++) { const pending = await page.evaluate(() => Array.prototype.filter.call(document.images, (img) => !(img.complete && img.naturalWidth > 0)).length); if (!pending) break; await page.waitForTimeout(200); }',
		] : [] ),
		`const payload = await page.evaluate(${ novaProbe.toString() }, ${ noJs ? 'true' : 'false' });`,
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
		// rAF never fires with scripts disabled — use a driver wait instead.
		...( noJs ? [
			"await page.evaluate(() => Promise.all(Array.prototype.map.call(document.images, (img) => img.decode ? img.decode().catch(() => {}) : null)));",
			'await page.waitForTimeout(150);',
		] : [
			"await page.evaluate(() => Promise.all(Array.prototype.map.call(document.images, (img) => img.decode ? img.decode().catch(() => {}) : null)).then(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))));",
		] ),
		`await page.screenshot({ path: ${ JSON.stringify( pngPath ) }, fullPage: payload.screenshotClamped, scale: 'css' });`,
		`require('fs').writeFileSync(${ JSON.stringify( jsonPath ) }, JSON.stringify(payload, null, 2) + '\\n');`,
		"console.log('NBCAP ok settled=' + payload.settlement.settled + ' settleMs=' + payload.settlement.settleMs + ' elements=' + payload.elements.length + ' breaks=' + payload.breakClasses.length);",
	].join( '\n' );
}

/* ------------------------------------------------------------------ *
 * --run
 * ------------------------------------------------------------------ */

// Run labels become path segments under RUNS_DIR — never accept separators
// or traversal, and keep the charset boring so labels stay portable.
function assertSafeLabel( label ) {
	if ( ! label || ! /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test( label ) || label.includes( '..' ) ) {
		console.error( `Invalid run label "${ label }" — letters, digits, ".", "_", "-" only (no path separators, no "..").` );
		process.exit( 1 );
	}
}

function cmdRun( label, { force, noJs } ) {
	if ( ! label || label.startsWith( '--' ) ) {
		usage( 'Missing run label.' );
	}
	assertSafeLabel( label );
	const manifest = JSON.parse( fs.readFileSync( MANIFEST_PATH, 'utf8' ) );
	const runDir = path.join( RUNS_DIR, label );
	if ( fs.existsSync( runDir ) && fs.readdirSync( runDir ).length > 0 ) {
		if ( ! force ) {
			console.error( `Run "${ label }" already exists at ${ runDir } — pass --force to overwrite.` );
			process.exit( 1 );
		}
		// Stale files from a previous run would poison meta.json aggregation
		// and diffs — --force always recaptures into an empty dir.
		fs.rmSync( runDir, { recursive: true, force: true } );
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
	console.log( `Run "${ label }": ${ manifest.length } pages x ${ VIEWPORTS.length } viewports on headless session ${ sessionId }${ noJs ? ' [NO-JS: page scripts disabled]' : '' }` );

	const deleteSession = () => {
		try {
			playwriter( [ 'session', 'delete', sessionId ] );
		} catch ( err ) {
			console.warn( `Could not delete playwriter session ${ sessionId }: ${ err.message }` );
		}
	};
	// Ctrl+C must not leak the headless session. Best-effort: the handler
	// runs as soon as the current execFileSync capture returns.
	const onSigint = () => {
		console.error( '\nSIGINT — deleting playwriter session before exit.' );
		deleteSession();
		process.exit( 130 );
	};
	process.on( 'SIGINT', onSigint );

	const failures = [];
	let captures = 0;
	let consecutiveFailures = 0;
	let aborted = false;
	try {
		outer: for ( const fixture of manifest ) {
			for ( const width of VIEWPORTS ) {
				const base = `${ fixture.slug }.${ width }`;
				const jsonPath = path.join( runDir, base + '.json' );
				const pngPath = path.join( runDir, base + '.png' );
				const code = buildCaptureCode( fixture, width, jsonPath, pngPath, noJs );
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
						if ( process.env.SIDECAR_LAB_DEBUG ) {
							console.error( 'FULL ERROR:', err.message, '\nSTDERR:', String( err.stderr || '' ).slice( 0, 2000 ), '\nSTDOUT:', String( err.stdout || '' ).slice( 0, 2000 ) );
						}
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
					consecutiveFailures = 0;
				} else {
					failures.push( { capture: base, error: String( lastError && lastError.message ).split( '\n' )[ 0 ] } );
					console.error( `  ${ base }  FAILED: ${ String( lastError && lastError.message ).split( '\n' )[ 0 ] }` );
					consecutiveFailures++;
					if ( consecutiveFailures >= MAX_CONSECUTIVE_FAILURES ) {
						// The environment is down, not one flaky page — abort
						// instead of grinding through the rest of the matrix.
						aborted = true;
						console.error( `Aborting run after ${ consecutiveFailures } consecutive capture failures — fix the environment and recapture with --force.` );
						break outer;
					}
				}
			}
		}
	} finally {
		process.removeListener( 'SIGINT', onSigint );
		deleteSession();
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
		noJs: !! noJs,
		date: new Date().toISOString(),
		pages: manifest.length,
		viewports: VIEWPORTS,
		viewportHeight: VIEWPORT_HEIGHT,
		captures,
		elementsTotal,
		settlementTimeouts,
		imageTimeouts,
		failures,
		aborted,
	};
	fs.writeFileSync( path.join( runDir, 'meta.json' ), JSON.stringify( meta, null, 2 ) + '\n' );
	console.log( `\nRun "${ label }" ${ aborted ? 'ABORTED' : 'complete' }: ${ captures }/${ manifest.length * VIEWPORTS.length } captures, ${ elementsTotal } probed elements, ${ settlementTimeouts.length } settlement timeouts, ${ failures.length } failures.` );
	console.log( `Meta: ${ path.join( runDir, 'meta.json' ) }` );
	process.exit( failures.length || aborted ? 1 : 0 );
}

/* ------------------------------------------------------------------ *
 * --diff
 * ------------------------------------------------------------------ */

// Line grammar: `<slug> <viewport> [<kind>] <reason>`, kind ∈
// ANNOTATION_KINDS (absent = all). Strip ONLY `-` markdown bullets — a
// leading `* ` is the wildcard-slug syntax, not a bullet. Every non-comment
// line that fails to parse gets a visible warning instead of vanishing.
function loadAnnotations() {
	if ( ! fs.existsSync( EXPECTED_PATH ) ) {
		return [];
	}
	const annotations = [];
	const warn = ( lineNo, raw, why ) => console.warn(
		`WARNING: ${ path.basename( EXPECTED_PATH ) }:${ lineNo } unparseable annotation (${ why }; expected "<slug> <viewport> [<kind>] <reason>"): ${ raw.trim() }`
	);
	fs.readFileSync( EXPECTED_PATH, 'utf8' ).split( '\n' ).forEach( ( raw, idx ) => {
		const line = raw.replace( /^\s*-\s+/, '' ).trim();
		if ( ! line || line.startsWith( '#' ) ) {
			return;
		}
		const tokens = line.split( /\s+/ );
		const [ slug, viewport ] = tokens;
		let kind = 'all';
		let reasonTokens = tokens.slice( 2 );
		if ( reasonTokens.length && ANNOTATION_KINDS.includes( reasonTokens[ 0 ] ) ) {
			kind = reasonTokens[ 0 ];
			reasonTokens = reasonTokens.slice( 1 );
		}
		if ( ! slug || ! viewport || ! reasonTokens.length ) {
			warn( idx + 1, raw, 'missing field' );
			return;
		}
		if ( viewport !== '*' && ! /^\d+$/.test( viewport ) ) {
			warn( idx + 1, raw, `viewport "${ viewport }" is not a number or *` );
			return;
		}
		annotations.push( {
			slug,
			viewport,
			kind,
			reason: reasonTokens.join( ' ' ),
			line: idx + 1,
			matched: 0,
			suppressedKinds: new Set(),
		} );
	} );
	return annotations;
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

// Every diff carries a kind so annotations can be scoped: 'breaks', 'gtc',
// 'rects', or 'structure' (element-set/display changes — suppressible only
// by a kind-less annotation, i.e. kind 'all').
function comparePage( a, b ) {
	const diffs = [];
	const push = ( kind, message ) => diffs.push( { kind, message } );

	const breaks = setDiff( a.breakClasses, b.breakClasses );
	for ( const x of breaks.removed ) {
		push( 'breaks', `break-class removed: ${ x }` );
	}
	for ( const x of breaks.added ) {
		push( 'breaks', `break-class added: ${ x }` );
	}

	const key = ( el ) => `${ el.role }|${ el.path }`;
	const mapA = new Map( a.elements.map( ( el ) => [ key( el ), el ] ) );
	const mapB = new Map( b.elements.map( ( el ) => [ key( el ), el ] ) );
	for ( const k of mapA.keys() ) {
		if ( ! mapB.has( k ) ) {
			push( 'structure', `element missing in B: ${ k }` );
		}
	}
	for ( const k of mapB.keys() ) {
		if ( ! mapA.has( k ) ) {
			push( 'structure', `element only in B: ${ k }` );
		}
	}
	for ( const [ k, elA ] of mapA ) {
		const elB = mapB.get( k );
		if ( ! elB ) {
			continue;
		}
		if ( elA.display !== elB.display ) {
			push( 'structure', `display changed (${ k }): ${ elA.display } -> ${ elB.display }` );
		}
		if ( ! gtcEqual( elA.gridTemplateColumns, elB.gridTemplateColumns ) ) {
			push( 'gtc', `gridTemplateColumns changed (${ k }):\n      A: ${ elA.gridTemplateColumns }\n      B: ${ elB.gridTemplateColumns }` );
		}
		const exceeded = RECT_FIELDS
			.map( ( f ) => ( { f, da: elA.rect[ f ], db: elB.rect[ f ], delta: Math.round( ( elB.rect[ f ] - elA.rect[ f ] ) * 10 ) / 10 } ) )
			.filter( ( x ) => Math.abs( x.delta ) > RECT_TOLERANCE_PX );
		if ( exceeded.length ) {
			push( 'rects', `rect changed (${ k }): ` + exceeded.map( ( x ) => `${ x.f } ${ x.da } -> ${ x.db } (d=${ x.delta }px)` ).join( ', ' ) );
		}
	}
	return diffs;
}

function cmdDiff( labelA, labelB ) {
	if ( ! labelA || ! labelB ) {
		usage( '--diff needs two run labels.' );
	}
	assertSafeLabel( labelA );
	assertSafeLabel( labelB );
	const dirA = path.join( RUNS_DIR, labelA );
	const dirB = path.join( RUNS_DIR, labelB );
	for ( const [ label, dir ] of [ [ labelA, dirA ], [ labelB, dirB ] ] ) {
		if ( ! fs.existsSync( dir ) ) {
			console.error( `Run "${ label }" not found at ${ dir }` );
			process.exit( 1 );
		}
	}

	// Completeness gate — an empty or partial run dir must never diff
	// clean. Both runs must cover the full manifest x viewport matrix and
	// carry a meta.json with zero failures.
	const manifest = JSON.parse( fs.readFileSync( MANIFEST_PATH, 'utf8' ) );
	const expectedCaptures = manifest.flatMap( ( fixture ) => VIEWPORTS.map( ( width ) => `${ fixture.slug }.${ width }` ) );
	const completenessErrors = [];
	for ( const [ label, dir ] of [ [ labelA, dirA ], [ labelB, dirB ] ] ) {
		const missing = expectedCaptures.filter( ( c ) => ! fs.existsSync( path.join( dir, c + '.json' ) ) );
		if ( missing.length ) {
			const present = expectedCaptures.length - missing.length;
			completenessErrors.push( `run "${ label }" is incomplete: ${ present }/${ expectedCaptures.length } manifest captures present (missing: ${ missing.slice( 0, 5 ).join( ', ' ) }${ missing.length > 5 ? `, … ${ missing.length - 5 } more` : '' })` );
		}
		const metaPath = path.join( dir, 'meta.json' );
		if ( ! fs.existsSync( metaPath ) ) {
			completenessErrors.push( `run "${ label }" has no meta.json — not a completed run` );
		} else {
			const meta = JSON.parse( fs.readFileSync( metaPath, 'utf8' ) );
			if ( Array.isArray( meta.failures ) && meta.failures.length ) {
				completenessErrors.push( `run "${ label }" meta.json lists ${ meta.failures.length } capture failure(s): ${ meta.failures.map( ( f ) => f.capture ).join( ', ' ) }` );
			}
			if ( meta.aborted ) {
				completenessErrors.push( `run "${ label }" was aborted before completing` );
			}
		}
	}

	const listJson = ( dir ) => fs.readdirSync( dir ).filter( ( f ) => f.endsWith( '.json' ) && f !== 'meta.json' );
	const files = Array.from( new Set( [ ...listJson( dirA ), ...listJson( dirB ) ] ) ).sort();
	const annotations = loadAnnotations();

	console.log( `sidecar-lab capture diff: ${ labelA } -> ${ labelB }` );
	console.log( `  A: ${ dirA }` );
	console.log( `  B: ${ dirB }` );
	console.log( `  ${ files.length } captures, ${ annotations.length } annotation(s) loaded\n` );

	if ( completenessErrors.length ) {
		console.log( 'COMPLETENESS FAILURE (diff exits 1 regardless of annotations):' );
		for ( const e of completenessErrors ) {
			console.log( `   ${ e }` );
		}
		console.log( '' );
	}

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
			diffs = [ { kind: 'structure', message: `capture missing in run "${ inA ? labelB : labelA }"` } ];
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
		// Per-diff suppression: an annotation covers a diff only when its
		// kind matches (or it is kind-less = all). One capture can carry
		// several annotations of different kinds.
		const applicable = annotations.filter( ( a ) =>
			( a.slug === slug || a.slug === '*' )
			&& ( a.viewport === String( viewport ) || a.viewport === '*' )
		);
		const suppressed = [];
		const unsuppressed = [];
		for ( const d of diffs ) {
			const ann = applicable.find( ( a ) => a.kind === 'all' || a.kind === d.kind );
			if ( ann ) {
				ann.matched++;
				ann.suppressedKinds.add( d.kind );
				suppressed.push( { d, ann } );
			} else {
				unsuppressed.push( d );
			}
		}
		if ( unsuppressed.length ) {
			unannotated++;
		} else {
			annotated++;
		}
		console.log( `== ${ slug } @ ${ viewport } ==  ${ unsuppressed.length ? '[UNANNOTATED]' : '[annotated]' }` );
		for ( const { d, ann } of suppressed ) {
			console.log( `   [suppressed:${ ann.kind } "${ ann.reason }"] ${ d.message }` );
		}
		for ( const d of unsuppressed ) {
			console.log( `   UNANNOTATED [${ d.kind }] ${ d.message }` );
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

	const used = annotations.filter( ( a ) => a.matched > 0 );
	if ( used.length ) {
		console.log( 'Annotations that suppressed differences (kind scope shown):' );
		for ( const a of used ) {
			console.log( `   ${ a.slug } ${ a.viewport } [${ a.kind }] "${ a.reason }" -> ${ a.matched } diff(s), kinds suppressed: ${ Array.from( a.suppressedKinds ).join( ', ' ) }` );
		}
		console.log( '' );
	}
	const stale = annotations.filter( ( a ) => a.matched === 0 );
	if ( stale.length ) {
		console.log( 'WARNING: stale annotations — matched no difference in this diff (prune or fix them):' );
		for ( const a of stale ) {
			console.log( `   ${ path.basename( EXPECTED_PATH ) }:${ a.line }  ${ a.slug } ${ a.viewport } [${ a.kind }] ${ a.reason }` );
		}
		console.log( '' );
	}

	const fail = unannotated > 0 || completenessErrors.length > 0;
	console.log( `Summary: ${ compared } compared, ${ differing } with differences (${ annotated } fully annotated, ${ unannotated } UNANNOTATED), ${ completenessErrors.length } completeness error(s) -> ${ fail ? 'FAIL' : 'OK' }` );
	process.exit( fail ? 1 : 0 );
}

/* ------------------------------------------------------------------ */

function usage( message ) {
	if ( message ) {
		console.error( message + '\n' );
	}
	console.error( 'Usage:' );
	console.error( '  node bin/sidecar-lab/capture.mjs --run <label> [--force] [--no-js]' );
	console.error( '  node bin/sidecar-lab/capture.mjs --diff <labelA> <labelB>' );
	process.exit( 1 );
}

const argv = process.argv.slice( 2 );
if ( argv[ 0 ] === '--run' ) {
	cmdRun( argv[ 1 ], { force: argv.includes( '--force' ), noJs: argv.includes( '--no-js' ) } );
} else if ( argv[ 0 ] === '--diff' ) {
	cmdDiff( argv[ 1 ], argv[ 2 ] );
} else {
	usage( argv.length ? `Unknown command: ${ argv[ 0 ] }` : null );
}
