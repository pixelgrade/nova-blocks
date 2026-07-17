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

test( 'declares semantic rule controls for the Rule Above style', () => {
	const attributes = JSON.parse( read( 'attributes.json' ) );
	const controls = read( 'inspector-controls.js' );

	assert.deepEqual( attributes.ruleWeight, { type: 'number', default: 1 } );
	assert.deepEqual( attributes.ruleStrength, { type: 'string', default: 'subtle' } );
	assert.match( controls, /is-style-rule-above/ );
	assert.match( controls, /<RuleControls/ );
} );

test( 'draws the rule with shared design-system rule tokens', () => {
	const source = read( 'style.scss' );

	assert.match( source, /\.nb-header-row\.is-style-rule-above[\s\S]*\.nb-header-row__inner-container/ );
	assert.match( source, /&:before/ );
	assert.match( source, /background:\s*var\(--nb-header-row-rule-color,\s*var\(--nb-rule-color\)\)/ );
	assert.match( source, /block-size:\s*var\(--nb-header-row-rule-weight,\s*var\(--nb-rule-weight\)\)/ );
	assert.doesNotMatch( source, /opacity:\s*0\.2/ );
	assert.match( source, /pointer-events:\s*none/ );
} );
