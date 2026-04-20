const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const masonryLayoutSource = fs.readFileSync(
	path.join( __dirname, 'index.js' ),
	'utf8'
);

test( 'editor masonry layout keeps multiple columns via an explicit grid wrapper', () => {
	assert.match( masonryLayoutSource, /const normalizedColumns = Math\.max\( parseInt\( columns, 10 \) \|\| 1, 1 \);/ );
	assert.match( masonryLayoutSource, /const editorLayoutStyle = \{/ );
	assert.match( masonryLayoutSource, /display:\s*'grid'/ );
	assert.match( masonryLayoutSource, /gridTemplateColumns:\s*`repeat\(\$\{ normalizedColumns \}, minmax\(0, 1fr\)\)`/ );
	assert.match( masonryLayoutSource, /columnGap:\s*'var\(--nb-grid-spacing\)'/ );
	assert.doesNotMatch( masonryLayoutSource, /gap:\s*'var\(--nb-grid-spacing\)'/ );
} );
