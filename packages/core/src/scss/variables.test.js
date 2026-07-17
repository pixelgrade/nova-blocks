const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

test( 'bridges shared rule mechanics to Style Manager divider roles', () => {
	const source = fs.readFileSync( path.join( __dirname, '_variables.scss' ), 'utf8' );

	assert.match( source, /--nb-rule-weight:\s*1px/ );
	assert.match(
		source,
		/--nb-rule-color:\s*var\(--sm-current-divider-color,\s*color-mix\(in srgb,\s*currentColor 20%,\s*transparent\)\)/
	);
	assert.match(
		source,
		/--nb-rule-strong-color:\s*var\(--sm-current-divider-strong-color,\s*color-mix\(in srgb,\s*currentColor 45%,\s*transparent\)\)/
	);
} );
