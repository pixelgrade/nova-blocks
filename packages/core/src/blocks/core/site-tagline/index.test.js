const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

test( 'registers a currentColor-based Ruled Label style for core/site-tagline', () => {
	const indexSource = fs.readFileSync( path.join( __dirname, 'index.js' ), 'utf8' );
	const styleSource = fs.readFileSync( path.join( __dirname, '_style.scss' ), 'utf8' );

	assert.match( indexSource, /registerBlockStyle\( 'core\/site-tagline',[\s\S]*name: 'ruled-label'/ );
	assert.match( styleSource, /\.wp-block-site-tagline\.is-style-ruled-label/ );
	assert.match( styleSource, /&:before,[\s\S]*&:after/ );
	assert.match( styleSource, /background:\s*currentColor/ );
	assert.match( styleSource, /flex:\s*1 1 auto/ );
} );
