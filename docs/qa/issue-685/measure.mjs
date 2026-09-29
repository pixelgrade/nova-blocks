// Issue #685 browser measurement: Firefox 115 ESR vs Firefox current vs Chromium.
//
// Usage: node measure.mjs <base-url> <label> [--shots <dir>] [--only ff115|firefox|chromium]
// Needs `playwright-core` (PLAYWRIGHT_CORE_PATH or the pixelsite conformance
// tools) and Firefox 115 ESR + geckodriver in ~/tools/ff115 (W3C WebDriver).
// Writes measurements/<label>.json: for each engine and width (1440, 450) and
// page (single with a right rail, page, archive, home), the rects the issue's
// acceptance checks name, the divider rule, the hovered dropcap line, the
// captioned 190 px image, horizontal overflow and console errors.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice( 2 );
const flag = name => ( args.includes( name ) ? args[ args.indexOf( name ) + 1 ] : null );
const [ BASE, LABEL ] = args.filter( ( a, i ) => ! a.startsWith( '--' ) && ! [ '--shots', '--only' ].includes( args[ i - 1 ] ) );
const SHOTS = flag( '--shots' );
const ONLY = flag( '--only' );
const HOME = process.env.HOME;
const HERE = path.dirname( new URL( import.meta.url ).pathname );
const require = createRequire( process.env.PLAYWRIGHT_CORE_PATH || `${ HOME }/Developer/pixelsite/pattern-language/tools/conformance/package.json` );
const pw = require( 'playwright-core' );

const PAGES = {
	single: '/2026/09/29/developing-report-number-5-on-relations/',
	page: '/contact-mikey/',
	archive: '/category/observations/',
	home: '/',
};
const WIDTHS = [ 1440, 450 ];

// Runs in the page; returns a JSON string.
const PROBE = `
const box = el => { if ( ! el ) return null; const r = el.getBoundingClientRect(); return { x: Math.round( r.left * 10 ) / 10, w: Math.round( r.width * 10 ) / 10 }; };
const q = s => document.querySelector( s );
const out = { vw: innerWidth, overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth, bodyInset: document.body.classList.contains( 'nb-content-inset-explicit' ) };
out.title = box( q( 'h1' ) );
out.firstP = box( q( '.wp-block-post-content > p' ) );
const sc = q( '.nb-sidecar--has-rule' );
if ( sc ) {
	const rail = sc.querySelector( ':scope > .nb-sidecar-area--sidebar-right' );
	const before = getComputedStyle( sc, '::before' );
	out.rail = box( rail );
	out.railFirst = box( rail && rail.firstElementChild );
	out.divider = { right: ! before.backgroundImage.trim().endsWith( 'none' ), image: before.backgroundImage.slice( 0, 90 ), position: before.backgroundPosition };
	out.sidecarClass = sc.className.replace( /\\s+/g, ' ' );
}
const cap = q( '.qa-resized-190' );
if ( cap ) out.caption190 = { figure: box( cap ), img: box( cap.querySelector( 'img' ) ), caption: box( cap.querySelector( 'figcaption' ) ) };
const fullCol = q( '.qa-full-column' );
if ( fullCol ) out.captionFull = { figure: box( fullCol ), caption: box( fullCol.querySelector( 'figcaption' ) ) };
const noCap = q( '.qa-no-caption' );
if ( noCap ) out.noCaption = { figure: box( noCap ), img: box( noCap.querySelector( 'img' ) ) };
out.archiveQuery = box( q( '.wp-block-query' ) );
out.sections = [ ...document.querySelectorAll( '.wp-block-post-content > .wp-block-group.alignwide' ) ].map( g => ( { group: box( g ), heading: box( g.querySelector( 'h2' ) ), wideImage: box( g.querySelector( '.qa-section-wide-image' ) ), cards: box( g.querySelector( '.nb-supernova' ) ), maxWidth: getComputedStyle( g ).maxWidth } ) );
out.pageWide = box( q( '.qa-wide' ) );
return JSON.stringify( out );
`;

const HOVER_TARGET = `
const it = [ ...document.querySelectorAll( '.nb-supernova-item' ) ].find( i => i.querySelector( '.nb-supernova-item__dropcap-line--top' ) );
if ( ! it ) return 'null';
it.scrollIntoView( { block: 'center' } ); it.id = 'qa-hover';
const r = it.querySelector( '.nb-supernova-item__media-wrapper' ).getBoundingClientRect();
return JSON.stringify( { x: Math.round( r.left + r.width / 2 ), y: Math.round( r.top + r.height / 2 ) } );
`;
const HOVER_READ = `
const it = document.getElementById( 'qa-hover' ); const l = it.querySelector( '.nb-supernova-item__dropcap-line--top' ); const r = l.getBoundingClientRect();
return JSON.stringify( { hover: it.matches( ':hover' ), transform: getComputedStyle( l ).transform, w: Math.round( r.width ), h: Math.round( r.height ) } );
`;

const results = {};
const record = ( engine, key, value ) => {
	( results[ engine ] ||= {} )[ key ] = value;
};
const sleep = ms => new Promise( r => setTimeout( r, ms ) );
if ( SHOTS ) {
	mkdirSync( SHOTS, { recursive: true } );
}

async function runPlaywright( engine ) {
	const browser = await ( engine === 'firefox' ? pw.firefox : pw.chromium ).launch();
	record( engine, 'version', browser.version() );
	for ( const width of WIDTHS ) {
		for ( const [ name, url ] of Object.entries( PAGES ) ) {
			const page = await browser.newPage( { viewport: { width, height: 1000 } } );
			// Playwright's Firefox cannot reach the CDN the Nova velocity script
			// loads from (a blocking head script), so serve it through Node.
			await page.route( 'https://cdnjs.cloudflare.com/**', async route => {
				const response = await fetch( route.request().url() );
				await route.fulfill( { status: response.status, body: Buffer.from( await response.arrayBuffer() ), contentType: 'application/javascript' } );
			} );
			const errors = [];
			page.on( 'console', m => m.type() === 'error' && errors.push( m.text().slice( 0, 200 ) ) );
			page.on( 'pageerror', e => errors.push( 'pageerror: ' + e.message.slice( 0, 200 ) ) );
			await page.goto( BASE + url, { waitUntil: 'domcontentloaded' } ).catch( () => {} );
			await sleep( 3000 );
			const m = JSON.parse( await page.evaluate( s => new Function( s )(), PROBE ) );
			m.console = errors;
			if ( SHOTS ) {
				await page.screenshot( { path: `${ SHOTS }/${ engine }-${ name }-${ width }.png`, fullPage: true } );
			}
			if ( name === 'home' && width === 1440 ) {
				const t = JSON.parse( await page.evaluate( s => new Function( s )(), HOVER_TARGET ) );
				if ( t ) {
					await page.mouse.move( t.x, t.y );
					await sleep( 1500 );
					m.dropcapHover = JSON.parse( await page.evaluate( s => new Function( s )(), HOVER_READ ) );
					if ( SHOTS ) {
						await page.screenshot( { path: `${ SHOTS }/${ engine }-hover-1440.png` } );
					}
				}
			}
			record( engine, `${ name }@${ width }`, m );
			await page.close();
		}
	}
	await browser.close();
}

async function runFirefox115() {
	const port = 4480 + Math.floor( Math.random() * 100 );
	let log = '';
	const driver = spawn( `${ HOME }/tools/ff115/geckodriver`, [ '--port', String( port ) ] );
	driver.stdout.on( 'data', d => ( log += d ) );
	driver.stderr.on( 'data', d => ( log += d ) );
	await sleep( 1500 );
	const api = async ( method, p, body ) => ( await ( await fetch( `http://127.0.0.1:${ port }${ p }`, { method, headers: { 'content-type': 'application/json' }, body: body ? JSON.stringify( body ) : undefined } ) ).json() ).value;
	try {
		const session = await api( 'POST', '/session', { capabilities: { alwaysMatch: { browserName: 'firefox', 'moz:firefoxOptions': { binary: `${ HOME }/tools/ff115/Firefox.app/Contents/MacOS/firefox`, args: [ '-headless' ], prefs: { 'devtools.console.stdout.content': true } } } } } );
		const S = `/session/${ session.sessionId }`;
		record( 'ff115', 'version', session.capabilities.browserVersion );
		const ev = script => api( 'POST', `${ S }/execute/sync`, { script, args: [] } );
		for ( const width of WIDTHS ) {
			await api( 'POST', `${ S }/window/rect`, { width, height: 1000 } );
			for ( const [ name, url ] of Object.entries( PAGES ) ) {
				log = '';
				await api( 'POST', `${ S }/url`, { url: BASE + url } );
				await sleep( 3000 );
				const m = JSON.parse( await ev( PROBE ) );
				m.console = log.split( '\n' ).filter( l => /JavaScript error|console\.error|TypeError|SyntaxError|ReferenceError/.test( l ) ).map( l => l.slice( 0, 200 ) );
				if ( SHOTS ) {
					writeFileSync( `${ SHOTS }/ff115-${ name }-${ width }.png`, Buffer.from( await api( 'GET', `${ S }/moz/screenshot/full` ), 'base64' ) );
				}
				if ( name === 'home' && width === 1440 ) {
					const t = JSON.parse( await ev( HOVER_TARGET ) );
					if ( t ) {
						await sleep( 400 );
						await api( 'POST', `${ S }/actions`, { actions: [ { type: 'pointer', id: 'mouse', parameters: { pointerType: 'mouse' }, actions: [ { type: 'pointerMove', duration: 0, x: t.x, y: t.y, origin: 'viewport' }, { type: 'pause', duration: 1500 } ] } ] } );
						m.dropcapHover = JSON.parse( await ev( HOVER_READ ) );
						if ( SHOTS ) {
							writeFileSync( `${ SHOTS }/ff115-hover-1440.png`, Buffer.from( await api( 'GET', `${ S }/screenshot` ), 'base64' ) );
						}
						await api( 'DELETE', `${ S }/actions` );
					}
				}
				record( 'ff115', `${ name }@${ width }`, m );
			}
		}
		await api( 'DELETE', S );
	} finally {
		driver.kill();
	}
}

for ( const engine of [ 'ff115', 'firefox', 'chromium' ] ) {
	if ( ONLY && ONLY !== engine ) {
		continue;
	}
	await ( engine === 'ff115' ? runFirefox115() : runPlaywright( engine ) );
	console.error( `${ LABEL }: ${ engine } done` );
}

mkdirSync( `${ HERE }/measurements`, { recursive: true } );
writeFileSync( `${ HERE }/measurements/${ LABEL }.json`, JSON.stringify( results, null, 1 ) );
console.log( JSON.stringify( results ).length, 'bytes' );
