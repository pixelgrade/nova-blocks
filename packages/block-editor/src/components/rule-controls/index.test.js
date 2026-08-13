const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

test( 'offers token-preserving rule weight and strength controls', () => {
	const source = fs.readFileSync( path.join( __dirname, 'index.js' ), 'utf8' );

	assert.match( source, /<RangeControl/ );
	assert.match( source, /Rule Weight/ );
	assert.match( source, /min=\{ 1 \}/ );
	assert.match( source, /max=\{ 4 \}/ );
	assert.doesNotMatch( source, /__next40pxDefaultSize/ );
	assert.match( source, /<RadioControl/ );
	assert.match( source, /Rule Strength/ );
	assert.match( source, /Subtle[\s\S]*value: 'subtle'/ );
	assert.match( source, /Strong[\s\S]*value: 'strong'/ );
	assert.match( source, /Solid[\s\S]*value: 'solid'/ );
	assert.match( source, /useRegistry/ );
	assert.match( source, /clientId/ );
	assert.match( source, /preserveBlockSelectionWhileApplying/ );
} );
