const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const source = fs.readFileSync( path.join( __dirname, 'inspector-controls.js' ), 'utf8' );
const attributes = require( '../attributes.json' );

const getRangeControl = label => {
	const controls = source.match( /<RangeControl\b[\s\S]*?\/>/g ) || [];
	const control = controls.find( item => item.includes( `'${ label }'` ) );
	assert.ok( control, `The Header inspector exposes ${ label }.` );
	return control;
};

const getNumberProp = ( control, prop ) => {
	const match = control.match( new RegExp( `${ prop }=\\{\\s*(\\d+)\\s*\\}` ) );
	assert.ok( match, `The control declares a numeric ${ prop }.` );
	return Number( match[ 1 ] );
};

test( 'desktop Logo Height allows an authored 400px image while preserving its minimum and step', () => {
	const control = getRangeControl( 'Logo Height' );
	assert.equal( getNumberProp( control, 'max' ), 400 );
	assert.equal( getNumberProp( control, 'min' ), 20 );
	assert.equal( getNumberProp( control, 'step' ), 1 );
} );

test( 'Mobile Logo Height allows an authored 200px image while preserving its minimum and step', () => {
	const control = getRangeControl( 'Mobile Logo Height' );
	assert.equal( getNumberProp( control, 'max' ), 200 );
	assert.equal( getNumberProp( control, 'min' ), 14 );
	assert.equal( getNumberProp( control, 'step' ), 1 );
} );

test( 'untouched Headers retain the existing desktop and mobile logo heights', () => {
	assert.deepEqual( attributes.logoHeight, { type: 'number', default: 30 } );
	assert.deepEqual( attributes.mobileLogoHeight, { type: 'number', default: 24 } );
} );
