const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const styleSource = fs.readFileSync(
	path.join( __dirname, '_style.scss' ),
	'utf8'
);

test( 'parametric grid internals use row spacing for vertical rhythm while keeping the base horizontal gap', () => {
	assert.match(
		styleSource,
		/\.nb-grid\s*\{[\s\S]*?column-gap:\s*var\(--nb-grid-spacing\);[\s\S]*?row-gap:\s*var\(--nb-grid-row-spacing\);/
	);
	assert.match(
		styleSource,
		/\.nb-grid__area \+ \.nb-grid__area,\s*\.nb-grid__area > \* \+ \*\s*\{[\s\S]*?margin-top:\s*var\(--nb-grid-row-spacing\);/
	);
	assert.match(
		styleSource,
		/\.nb-grid__column:first-child &:first-child:last-child\s*\{[\s\S]*?top:\s*var\(--nb-grid-row-spacing\);/
	);
} );
