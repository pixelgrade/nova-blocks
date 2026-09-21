const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const script = fs.readFileSync( path.resolve( __dirname, 'index.js' ), 'utf8' );

test( 'editorial heroes opt into active-slide height while ordinary carousels keep their current behaviour', () => {
	assert.match( script, /adaptiveHeight:\s*\$block\.hasClass\(\s*'is-style-editorial-hero'\s*\)/ );
} );
