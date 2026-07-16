const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const read = ( relativePath ) => fs.readFileSync( path.join( __dirname, relativePath ), 'utf8' );

test( 'extends only core/site-title with native Fit Text and a durable width', () => {
	const source = read( 'index.js' );

	assert.match( source, /export const extendSiteTitleSettings/ );
	assert.match( source, /name !== 'core\/site-title'/ );
	assert.match( source, /typography:[\s\S]*fitText: true/ );
	assert.match( source, /fitText:[\s\S]*type: 'boolean'/ );
	assert.match( source, /fitTextWidth:[\s\S]*type: 'number'[\s\S]*default: 395/ );
	assert.match( source, /registerBlockStyle\( 'core\/site-title',[\s\S]*name: 'wordmark'/ );
} );

test( 'registers the editor controls and wrapper integrations', () => {
	const source = read( 'index.js' );

	assert.match( source, /editor\.BlockEdit[\s\S]*withSiteTitleControls/ );
	assert.match( source, /editor\.BlockListBlock[\s\S]*withSiteTitleWrapper/ );
} );

test( 'shows Wordmark Width only for a fitted Site Title', () => {
	const source = read( 'with-site-title-controls.js' );

	assert.match( source, /name !== 'core\/site-title' \|\| ! fitText/ );
	assert.match( source, /useSelect/ );
	assert.match( source, /getBlockRootClientId/ );
	assert.match( source, /novablocks\/site-identity/ );
	assert.match( source, /isInsideSiteIdentity/ );
	assert.match( source, /<InspectorControls group="dimensions">/ );
	assert.match( source, /<ToolsPanelItem/ );
	assert.match( source, /isShownByDefault/ );
	assert.match( source, /onDeselect=\{ \(\) => setAttributes\( \{ fitTextWidth: 395 \} \) \}/ );
	assert.match( source, /<RangeControl/ );
	assert.match( source, /Wordmark Width/ );
	assert.match( source, /min=\{ 80 \}/ );
	assert.match( source, /max=\{ 800 \}/ );
	assert.match( source, /setAttributes\( \{ fitTextWidth: value \} \)/ );
} );

test( 'wraps the fitted Site Title in a dedicated flex measurement container', () => {
	const source = read( 'with-site-title-wrapper.js' );

	assert.match( source, /name !== 'core\/site-title' \|\| ! fitText/ );
	assert.match( source, /className="nb-site-title-fit-container"/ );
	assert.match( source, /'--nb-site-title-fit-width': `\$\{ normalizedWidth \}px`/ );
	assert.match( source, /<BlockListBlock \{ \.\.\.props \} \/>/ );
	assert.match( source, /Math\.min\( 800, Math\.max\( 80/ );
} );

test( 'constrains fitted wordmarks with a flex measurement container and consumes semantic Site Title tokens', () => {
	const source = read( '_style.scss' );

	assert.match( source, /:where\(\.wp-block-site-title\)/ );
	assert.match( source, /font-family:\s*var\(--theme-site-title-font-family\)/ );
	assert.match( source, /letter-spacing:\s*var\(--theme-site-title-letter-spacing\)/ );
	assert.match( source, /:is\(\.wp-block-site-title, \.specificity\.x2\.x3\.x4\)[\s\S]*--current-font-family:\s*var\(--theme-site-title-font-family\)/ );
	assert.match( source, /\.nb-site-title-fit-container[\s\S]*display:\s*flex/ );
	assert.match( source, /\.nb-site-title-fit-container[\s\S]*inline-size:\s*min\(100%, var\(--nb-site-title-fit-width, 395px\)\)/ );
	assert.match( source, /&\.has-fit-text/ );
	assert.match( source, /&\.has-fit-text[\s\S]*inline-size:\s*100%/ );
	assert.match( source, /&\.is-style-wordmark/ );
} );

test( 'keeps linked Site Title typography on the element resized by Fit Text', () => {
	const source = read( '_style.scss' );

	assert.match( source, /&\.has-fit-text[\s\S]*:where\(a\)[\s\S]*font:\s*inherit/ );
	assert.match( source, /&\.has-fit-text[\s\S]*:where\(a\)[\s\S]*letter-spacing:\s*inherit/ );
	assert.match( source, /&\.has-fit-text[\s\S]*:where\(a\)[\s\S]*white-space:\s*inherit\s*!important/ );
} );
