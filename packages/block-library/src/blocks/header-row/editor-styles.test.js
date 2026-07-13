const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

test( 'navigation column attributes override the core Navigation editor flex layout', () => {
	const source = fs.readFileSync( path.join( __dirname, 'editor-styles.scss' ), 'utf8' );

	assert.match(
		source,
		/\.nb-header-row--nav-columns-2[\s\S]*\.wp-block-navigation__container\[class\][\s\S]*display:\s*grid\s*!important;/
	);
} );
