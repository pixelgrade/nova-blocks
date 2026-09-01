const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );

const filterEdit = fs.readFileSync( path.join( __dirname, 'edit.js' ), 'utf8' );
const pagerEdit = fs.readFileSync( path.join( __dirname, '../facetwp-pager/edit.js' ), 'utf8' );
const filterMetadata = JSON.parse( fs.readFileSync( path.join( __dirname, 'block.json' ), 'utf8' ) );
const pagerMetadata = JSON.parse( fs.readFileSync( path.join( __dirname, '../facetwp-pager/block.json' ), 'utf8' ) );
const pagerRenderer = fs.readFileSync( path.join( __dirname, '../facetwp-pager/init.php' ), 'utf8' );

test( 'FacetWP Filter provides an administrator-only unavailable placeholder', () => {
	assert.match( filterEdit, /useSettings/ );
	assert.match( filterEdit, /facetwp_available/ );
	assert.match( filterEdit, /facetwp_setup_url/ );
	assert.match( filterEdit, /Advanced Filtering is unavailable/ );
	assert.match( filterEdit, /Open Site Setup/ );
	assert.doesNotMatch( filterEdit, /FacetWP is not active/ );
	assert.doesNotMatch( filterMetadata.description, /FacetWP/ );
} );

test( 'standalone FacetWP Pager provides the same unavailable guidance', () => {
	assert.match( pagerEdit, /facetwp_available/ );
	assert.match( pagerEdit, /facetwp_setup_url/ );
	assert.match( pagerEdit, /Advanced Filtering is unavailable/ );
	assert.match( pagerEdit, /Open Site Setup/ );
	assert.doesNotMatch( pagerEdit, /FacetWP (?:is not active|Pagination|Pager|templates)/ );
	assert.doesNotMatch( `${ pagerMetadata.title } ${ pagerMetadata.description }`, /FacetWP/ );
	assert.doesNotMatch( pagerRenderer, /FacetWP pagination/ );
} );
