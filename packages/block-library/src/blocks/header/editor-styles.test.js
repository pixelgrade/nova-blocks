const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

test( 'the editor keeps Header rows in authored order at narrow canvas widths', () => {
	const source = fs.readFileSync( path.join( __dirname, 'editor-styles.scss' ), 'utf8' );

	assert.match(
		source,
		/\.nb-header__inner-container\s*>\s*\.nb-header-row--primary\[class\]\s*\{[^}]*order:\s*0;/s
	);
} );
