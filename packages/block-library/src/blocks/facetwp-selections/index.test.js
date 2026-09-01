const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const read = file => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

test( 'Selections can become a live filter summary without changing its default output', () => {
	const attributes = JSON.parse( read( 'attributes.json' ) );
	const editor = read( 'edit.js' );
	const renderer = read( 'init.php' );

	assert.deepEqual( attributes.showCounts, { type: 'boolean', default: false } );
	assert.deepEqual( attributes.resetFacet, { type: 'string', default: '' } );
	assert.match( editor, /Show result count/ );
	assert.match( editor, /currentFacet\.type === 'reset'/ );
	assert.match( renderer, /\[facetwp counts="true"\]/ );
	assert.match( renderer, /role="status"/ );
	assert.match( renderer, /aria-live="polite"/ );
	assert.match( renderer, /\$active_reset_facet\['type'\]\s*!==\s*'reset'/ );
	assert.match( renderer, /\[facetwp facet="/ );
} );

test( 'Selections expose author-defined singular and plural result nouns', () => {
	const attributes = JSON.parse( read( 'attributes.json' ) );
	const editor = read( 'edit.js' );
	const renderer = read( 'init.php' );

	assert.deepEqual( attributes.resultLabelSingular, { type: 'string', default: '' } );
	assert.deepEqual( attributes.resultLabelPlural, { type: 'string', default: '' } );
	assert.match( editor, /Singular result label/ );
	assert.match( editor, /Plural result label/ );
	assert.match( renderer, /data-result-label-singular/ );
	assert.match( renderer, /data-result-label-plural/ );
	assert.match( renderer, /__\( 'result', '__plugin_txtd' \)/ );
	assert.match( renderer, /__\( 'results', '__plugin_txtd' \)/ );
} );
