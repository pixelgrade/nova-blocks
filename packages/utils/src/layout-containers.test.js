const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const fs = require( 'node:fs' );
const path = require( 'node:path' );

// Task 5.1: THE single Nova layout-grid container list has one source of truth
// (packages/utils/src/layout-containers.js). bin/generate-layout-containers.js
// emits the SCSS half (_layout-containers.generated.scss). This test pins the
// two halves EQUAL so they can never drift again (the failure this replaces:
// the napkin-recorded `.wp-site-blocks` vs `[id="main"]` divergence).

const SRC_JS = path.join( __dirname, 'layout-containers.js' );
const SRC_SCSS = path.resolve( __dirname, '../../base-styles/_layout-containers.generated.scss' );
const BREAK_ALIGN = path.join( __dirname, 'break-align.js' );

// Extract the JS array members (single-quoted selectors; one contains a `]`, so
// anchor on the closing `];`).
function jsContainers() {
	const source = fs.readFileSync( SRC_JS, 'utf8' );
	const block = source.match( /LAYOUT_GRID_CONTAINERS\s*=\s*\[([\s\S]*?)\];/ );
	assert.ok( block, 'LAYOUT_GRID_CONTAINERS array not found in layout-containers.js' );
	return ( block[ 1 ].match( /'([^']*)'/g ) || [] ).map( ( m ) => m.slice( 1, -1 ) );
}

// Extract the generated SCSS list from `$nb-layout-grid-parents: '…';`.
function scssContainers() {
	const source = fs.readFileSync( SRC_SCSS, 'utf8' );
	const decl = source.match( /\$nb-layout-grid-parents:\s*'([^']*)'\s*;/ );
	assert.ok( decl, '$nb-layout-grid-parents declaration not found in the generated SCSS' );
	return decl[ 1 ].split( ',' ).map( ( s ) => s.trim() ).filter( Boolean );
}

test( 'the JS and generated-SCSS layout-container lists are identical (no drift)', () => {
	const js = jsContainers();
	const scss = scssContainers();

	assert.ok( js.length >= 11, 'expected the full container union in the JS source' );
	assert.deepEqual(
		scss,
		js,
		'The generated SCSS list is out of sync with layout-containers.js — run `node bin/generate-layout-containers.js` (it runs automatically in build:packages).'
	);
} );

test( 'break-align.js consumes the shared list, not an inline one', () => {
	const source = fs.readFileSync( BREAK_ALIGN, 'utf8' );
	assert.match(
		source,
		/import\s*\{\s*LAYOUT_GRID_CONTAINERS\s*\}\s*from\s*["']\.\/layout-containers["']/,
		'break-align.js must import LAYOUT_GRID_CONTAINERS from ./layout-containers'
	);
	// The old inline drift member must be gone from the JS consumer.
	assert.ok(
		! /['"]\.wp-site-blocks['"]/.test( source ),
		'break-align.js still references the dropped `.wp-site-blocks` — the inline list was not removed'
	);
} );

test( 'the reconciliation kept the authoritative members and dropped the dead one', () => {
	const js = jsContainers();
	// Dropped: `.wp-site-blocks` (wrapped template parts, never aligned children).
	assert.ok( ! js.includes( '.wp-site-blocks' ), '`.wp-site-blocks` should be dropped' );
	// Present: the frontend root the drop replaced, plus the core roots.
	for ( const member of [ '[id="main"]', '.wp-block-post-content', '.nb-sidecar', '.nb-sidecar-area--content', '.wp-block-query', '.nb-supernova' ] ) {
		assert.ok( js.includes( member ), `expected canonical member ${ member }` );
	}
	// A Group is a pass-through, NOT a track-declaring root — never in this list.
	assert.ok( ! js.includes( '.wp-block-group' ), '`.wp-block-group` must not be in the root union (it is a subgrid pass-through, handled in group/style.scss)' );
} );
