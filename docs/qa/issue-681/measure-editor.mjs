// Issue #681 block editor measurement: the same QA post in the post editor.
//
// Usage: node measure-editor.mjs <site-url> <post-id> <user> <password> [label] [--shots <dir>]
// Measures, inside the editor canvas iframe, the image, figure and caption
// widths of the QA post's images (classes qa-*) at canvas widths 1440 and 1024
// (Chromium and Firefox). Prints JSON.
import { chromium, firefox } from 'playwright';

const [ site, postId, user, pass, label = 'editor' ] = process.argv.slice( 2 ).filter( arg => ! arg.startsWith( '--' ) );
const shotsIndex = process.argv.indexOf( '--shots' );
const shots = shotsIndex > -1 ? process.argv[ shotsIndex + 1 ] : null;

const probe = () => {
	const round = n => Math.round( n * 10 ) / 10;
	const box = el => {
		if ( ! el ) {
			return null;
		}
		const r = el.getBoundingClientRect();
		return { x: round( r.left ), w: round( r.width ) };
	};
	const out = { overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, items: {} };
	for ( const name of [ 'qa-full-column', 'qa-resized-420', 'qa-resized-190', 'qa-no-caption', 'qa-left' ] ) {
		const figure = document.querySelector( `figure.${ name }` );
		out.items[ name ] = {
			figure: box( figure ),
			img: box( figure?.querySelector( 'img' ) ),
			caption: box( figure?.querySelector( ':scope > figcaption' ) ),
		};
	}
	const gallery = document.querySelector( 'figure.qa-gallery' );
	out.items[ 'qa-gallery' ] = {
		figure: box( gallery ),
		items: [ ...gallery.querySelectorAll( ':scope > .wp-block-image' ) ].map( item => ( { img: box( item.querySelector( 'img' ) ), caption: box( item.querySelector( 'figcaption' ) ) } ) ),
	};
	return out;
};

const results = {};
for ( const [ name, engine ] of [ [ 'chromium', chromium ], [ 'firefox', firefox ] ] ) {
	const browser = await engine.launch();
	const context = await browser.newContext( { viewport: { width: 1440, height: 1000 } } );
	const page = await context.newPage();
	await page.goto( `${ site }/wp-login.php`, { waitUntil: 'domcontentloaded' } );
	await page.fill( '#user_login', user );
	await page.fill( '#user_pass', pass );
	await Promise.all( [ page.waitForNavigation( { waitUntil: 'domcontentloaded' } ), page.click( '#wp-submit' ) ] );
	results[ name ] = {};
	for ( const width of [ 1440, 1024 ] ) {
		await page.setViewportSize( { width, height: 1000 } );
		await page.goto( `${ site }/wp-admin/post.php?post=${ postId }&action=edit`, { waitUntil: 'domcontentloaded' } );
		const canvas = page.frameLocator( 'iframe[name="editor-canvas"]' );
		await canvas.locator( 'figure.qa-resized-190 img' ).waitFor( { timeout: 60000 } );
		const frame = page.frame( { name: 'editor-canvas' } );
		await frame.waitForFunction( () => [ ...document.images ].every( img => img.complete ), null, { timeout: 30000 } );
		await page.waitForTimeout( 1000 );
		results[ name ][ width ] = await frame.evaluate( probe );
		if ( shots ) {
			await frame.evaluate( () => document.querySelector( 'figure.qa-resized-420' ).scrollIntoView( { block: 'start' } ) );
			await page.waitForTimeout( 300 );
			await page.screenshot( { path: `${ shots }/${ label }-${ name }-${ width }.png` } );
		}
	}
	await browser.close();
}
console.log( JSON.stringify( { label, results }, null, 1 ) );
