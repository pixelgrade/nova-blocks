const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

const masonryLayoutSource = fs.readFileSync(
	path.join( __dirname, 'index.js' ),
	'utf8'
);

test( 'editor masonry layout keeps multiple columns via an explicit grid wrapper', () => {
	assert.match( masonryLayoutSource, /const authoredColumns = Math\.max\( parseInt\( columns, 10 \) \|\| 1, 1 \);/ );
	assert.match( masonryLayoutSource, /const editorLayoutStyle = \{/ );
	assert.match( masonryLayoutSource, /display:\s*'grid'/ );
	assert.match( masonryLayoutSource, /gridTemplateColumns:\s*`repeat\(\$\{ normalizedColumns \}, minmax\(0, 1fr\)\)`/ );
	assert.match( masonryLayoutSource, /columnGap:\s*'var\(--nb-grid-spacing\)'/ );
	assert.doesNotMatch( masonryLayoutSource, /gap:\s*'var\(--nb-grid-spacing\)'/ );
} );

test( 'editor masonry layout mirrors the frontend fit-based responsive columns', () => {
	// Same engine function as the frontend (dual-runtime parity).
	assert.match( masonryLayoutSource, /calculateFitColumnCount/ );
	assert.match( masonryLayoutSource, /columnsFitMinWidth/ );
	// Fit mode measures the real container width and column gap.
	assert.match( masonryLayoutSource, /ResizeObserver/ );
	assert.match( masonryLayoutSource, /gap:\s*Number\.parseFloat\( styles\.columnGap \) \|\| 0,?/ );
} );

test( 'editor masonry layout exposes column parity classes for column-aware theme styling', () => {
	assert.match( masonryLayoutSource, /nb-collection__layout-column--col-\$\{ index \}/ );
	assert.match( masonryLayoutSource, /nb-collection__layout-column--col-\$\{ index % 2 === 0 \? 'even' : 'odd' \}/ );
} );
