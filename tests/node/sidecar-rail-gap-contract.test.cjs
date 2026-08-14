const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );
const test = require( 'node:test' );

const layoutSource = fs.readFileSync(
	path.resolve( __dirname, '../../packages/core/src/scss/_layout.scss' ),
	'utf8'
);

test( 'Sidecar derives its gutter from the Style Manager rail-gap token with the legacy fallback', () => {
	assert.match(
		layoutSource,
		/--nb-sidecar-gap:\s*calc\(var\(--nb-spacing\)\s*\*\s*var\(--sm-rail-gap,\s*2\)\);/
	);
	assert.doesNotMatch(
		layoutSource,
		/--nb-sidecar-gap:\s*calc\(var\(--nb-spacing\)\s*\*\s*2\);/
	);
} );
