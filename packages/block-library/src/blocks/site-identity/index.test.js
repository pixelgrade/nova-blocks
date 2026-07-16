const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const read = ( file ) => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

test( 'defines a Header Row Site Identity with one shared width', () => {
	const metadata = JSON.parse( read( 'block.json' ) );

	assert.equal( metadata.name, 'novablocks/site-identity' );
	assert.deepEqual( metadata.parent, [ 'novablocks/header-row' ] );
	assert.deepEqual( metadata.attributes.identityWidth, {
		type: 'number',
		default: 395,
	} );
	assert.equal( metadata.supports.html, false );
} );

test( 'uses only semantic Site Title and Site Tagline children', () => {
	const source = read( 'edit.js' );

	assert.match( source, /const ALLOWED_BLOCKS = \[ 'core\/site-title', 'core\/site-tagline' \]/ );
	assert.match( source, /core\/site-title[\s\S]*is-style-wordmark[\s\S]*level: 0[\s\S]*fitText: true/ );
	assert.match( source, /core\/site-tagline[\s\S]*is-style-ruled-label/ );
	assert.match( source, /<InspectorControls group="dimensions">[\s\S]*<ToolsPanelItem/ );
	assert.match( source, /onDeselect=\{ \(\) => setAttributes\( \{ identityWidth: 395 \} \) \}/ );
	assert.match( source, /label=\{ __\( 'Identity Width'/ );
	assert.match( source, /min=\{ 80 \}/ );
	assert.match( source, /max=\{ 800 \}/ );
} );

test( 'saves the branding hook, width variable, and constrained inner container', () => {
	const saveSource = read( 'save.js' );
	const styleSource = read( 'style.scss' );
	const dimensionsSource = read( 'dimensions.js' );

	assert.match( saveSource, /nb-site-identity c-branding/ );
	assert.match( saveSource, /getIdentityWidthStyle\( identityWidth \)/ );
	assert.match( dimensionsSource, /'--nb-site-identity-width'/ );
	assert.match( saveSource, /nb-site-identity__inner/ );
	assert.match( saveSource, /<InnerBlocks\.Content/ );
	assert.match( styleSource, /inline-size:\s*min\(100%, var\(--nb-site-identity-width, 395px\)\)/ );
	assert.match( styleSource, /> \.nb-site-title-fit-container[\s\S]*inline-size:\s*100%/ );
	assert.match( styleSource, /\.nb-header--mobile \.nb-site-identity[\s\S]*max-inline-size:\s*calc\(100% - 7rem\)/ );
	assert.match( styleSource, /\.nb-header--mobile[\s\S]*\.wp-block-site-tagline[\s\S]*display:\s*none/ );
	assert.match( styleSource, /--nb-mobile-header-logo-height-setting/ );
} );

test( 'keeps Site Identity enabled for every Nova-compatible header', () => {
	const themeSupports = fs.readFileSync(
		path.join( __dirname, '..', '..', '..', '..', '..', 'lib', 'theme-supports.php' ),
		'utf8'
	);

	assert.match( themeSupports, /'site-identity'\s*=>\s*\[[\s\S]*?'name'\s*=>\s*'site-identity'[\s\S]*?'enabled'\s*=>\s*true/ );
} );
