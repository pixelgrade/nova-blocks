const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const read = ( file ) => fs.readFileSync( path.join( __dirname, file ), 'utf8' );

test( 'allows the semantic Site Identity alongside existing logo choices', () => {
	const source = read( 'edit.js' );

	assert.match(
		source,
		/const ALLOWED_BLOCKS = \[[\s\S]*'core\/site-logo'[\s\S]*'novablocks\/logo'[\s\S]*'novablocks\/site-identity'[\s\S]*'novablocks\/navigation'[\s\S]*\]/
	);
} );
test( 'registers a reusable Rule Above block style', () => {
	const source = read( 'index.js' );

	assert.match( source, /registerBlockStyle/ );
	assert.match( source, /registerBlockStyle\( BLOCK_NAME,[\s\S]*name: 'rule-above'/ );
} );

test( 'draws the rule with inherited contextual color', () => {
	const source = read( 'style.scss' );

	assert.match( source, /\.nb-header-row\.is-style-rule-above[\s\S]*\.nb-header-row__inner-container/ );
	assert.match( source, /&:before/ );
	assert.match( source, /background:\s*currentColor/ );
	assert.match( source, /block-size:\s*1px/ );
	assert.match( source, /pointer-events:\s*none/ );
} );
