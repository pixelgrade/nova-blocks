// Issue #681 browser measurement: caption width vs image width.
//
// Usage: node measure.mjs <post-url> [label] [--shots <dir>]
// Needs `playwright` resolvable from the working directory. Prints JSON: for
// each engine (chromium, firefox) and width (1440/1024/768/390), the image,
// figure and caption rects of the QA post's images (classes qa-*) and the
// document's horizontal overflow. With --shots, saves a full-page PNG per
// engine and width.
import { chromium, firefox } from 'playwright';

const [ url, label = 'run' ] = process.argv.slice( 2 ).filter( arg => ! arg.startsWith( '--' ) );
const shotsIndex = process.argv.indexOf( '--shots' );
const shots = shotsIndex > -1 ? process.argv[ shotsIndex + 1 ] : null;
const WIDTHS = [ 1440, 1024, 768, 390 ];

const probe = () => {
	const round = n => Math.round( n * 10 ) / 10;
	const box = el => {
		if ( ! el ) {
			return null;
		}
		const r = el.getBoundingClientRect();
		return { x: round( r.left ), w: round( r.width ) };
	};
	const content = document.querySelector( '.wp-block-post-content' );
	const out = {
		column: box( content?.querySelector( ':scope > p' ) ),
		overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
		items: {},
	};
	for ( const name of [ 'qa-full-column', 'qa-resized-420', 'qa-resized-190', 'qa-no-caption', 'qa-left' ] ) {
		const figure = document.querySelector( `.${ name }` );
		const caption = figure?.querySelector( ':scope > figcaption' );
		out.items[ name ] = {
			figure: box( figure ),
			img: box( figure?.querySelector( 'img' ) ),
			caption: box( caption ),
			captionAlign: caption ? getComputedStyle( caption ).textAlign : null,
		};
	}
	const gallery = document.querySelector( '.qa-gallery' );
	out.items[ 'qa-gallery' ] = {
		figure: box( gallery ),
		items: [ ...gallery.querySelectorAll( ':scope > .wp-block-image' ) ].map( item => ( {
			img: box( item.querySelector( 'img' ) ),
			caption: box( item.querySelector( 'figcaption' ) ),
		} ) ),
		caption: box( gallery.querySelector( ':scope > figcaption' ) ),
	};
	return out;
};

const results = {};
for ( const [ name, engine ] of [ [ 'chromium', chromium ], [ 'firefox', firefox ] ] ) {
	const browser = await engine.launch();
	results[ name ] = {};
	for ( const width of WIDTHS ) {
		const page = await browser.newPage( { viewport: { width, height: 900 } } );
		await page.goto( url, { waitUntil: 'domcontentloaded' } );
		// 'load' can wait on long-lived requests, and a lazy image offscreen never
		// loads: make every image eager and wait for images and fonts.
		await page.evaluate( () => {
			document.querySelectorAll( 'img[loading=lazy]' ).forEach( img => { img.loading = 'eager'; } );
		} );
		await page.waitForFunction( () => [ ...document.images ].every( img => img.complete ), null, { timeout: 30000 } );
		await page.evaluate( () => document.fonts.ready );
		await page.waitForTimeout( 500 );
		results[ name ][ width ] = await page.evaluate( probe );
		if ( shots ) {
			await page.screenshot( { path: `${ shots }/${ label }-${ name }-${ width }.png`, fullPage: true } );
		}
		await page.close();
	}
	await browser.close();
}
console.log( JSON.stringify( { label, url, results }, null, 1 ) );
