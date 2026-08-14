const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );

const filterEdit = fs.readFileSync( path.join( __dirname, 'edit.js' ), 'utf8' );
const pagerEdit = fs.readFileSync( path.join( __dirname, '../facetwp-pager/edit.js' ), 'utf8' );

test( 'FacetWP Filter provides an administrator-only unavailable placeholder', () => {
	assert.match( filterEdit, /useSettings/ );
	assert.match( filterEdit, /facetwp_available/ );
	assert.match( filterEdit, /facetwp_setup_url/ );
	assert.match( filterEdit, /Advanced Filtering is unavailable/ );
	assert.match( filterEdit, /Open Site Setup/ );
} );

test( 'standalone FacetWP Pager provides the same unavailable guidance', () => {
	assert.match( pagerEdit, /facetwp_available/ );
	assert.match( pagerEdit, /facetwp_setup_url/ );
	assert.match( pagerEdit, /Advanced Filtering is unavailable/ );
	assert.match( pagerEdit, /Open Site Setup/ );
} );
