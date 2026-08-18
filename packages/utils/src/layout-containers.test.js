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
const LAYOUT_SCSS = path.resolve( __dirname, '../../core/src/scss/_layout.scss' );
const GROUP_SCSS = path.resolve( __dirname, '../../core/src/blocks/core/group/style.scss' );

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
	return scssList( '$nb-layout-grid-parents' );
}

function jsPassThroughs() {
	const source = fs.readFileSync( SRC_JS, 'utf8' );
	const block = source.match( /LAYOUT_PASSTHROUGH_CONTAINERS\s*=\s*\[([\s\S]*?)\];/ );
	assert.ok( block, 'LAYOUT_PASSTHROUGH_CONTAINERS array not found in layout-containers.js' );
	return ( block[ 1 ].match( /'([^']*)'/g ) || [] ).map( ( m ) => m.slice( 1, -1 ) );
}

function scssList( name ) {
	const source = fs.readFileSync( SRC_SCSS, 'utf8' );
	const decl = source.match( new RegExp( '\\' + name + ":\\s*'([^']*)'\\s*;" ) );
	assert.ok( decl, name + ' declaration not found in the generated SCSS' );
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

// The PASS-THROUGH subset has the same drift hazard as the root union, and one
// more consumer: `core/group/style.scss` must repeat the subgrid override for
// children of a qualified Group pass-through, because a Group is deliberately
// not a member of the root union and so is never matched by
// `nb-layout-subgrid-override`'s `:is($nb-layout-grid-parents) > &` scope.

test( 'the JS and generated-SCSS pass-through lists are identical (no drift)', () => {
	const js = jsPassThroughs();
	const scss = scssList( '$nb-layout-passthrough-containers' );

	assert.ok( js.length >= 4, 'expected the full pass-through subset in the JS source' );
	assert.deepEqual(
		scss,
		js,
		'The generated SCSS pass-through list is out of sync with layout-containers.js — run `node bin/generate-layout-containers.js` (it runs automatically in build:packages).'
	);
} );

test( 'the pass-through subset only contains track-neutral containers', () => {
	const js = jsPassThroughs();
	const roots = jsContainers();

	// A rail-less Sidecar qualifies through BOTH rail-absence classes; a bare
	// `.nb-sidecar` (which may own rail budgets) must stay track-declaring.
	assert.ok(
		js.includes( '.nb-sidecar--no-left-rail.nb-sidecar--no-right-rail' ),
		'a rail-less Sidecar must pass through'
	);
	assert.ok( ! js.includes( '.nb-sidecar' ), '`.nb-sidecar` must stay track-declaring' );

	// Every other member is also a root-union member (a pass-through declares
	// the fallback grid from that union and only overrides the modern half).
	for ( const member of js ) {
		if ( member === '.nb-sidecar--no-left-rail.nb-sidecar--no-right-rail' ) {
			continue;
		}
		assert.ok(
			roots.includes( member ),
			`pass-through ${ member } must also be a member of the root union`
		);
	}
} );

test( 'both SCSS subgrid-override sites consume the shared pass-through list', () => {
	const layout = fs.readFileSync( LAYOUT_SCSS, 'utf8' );
	const group = fs.readFileSync( GROUP_SCSS, 'utf8' );

	assert.match(
		layout,
		/:is\(#\{\$nb-layout-passthrough-containers\}\)\s*\{\s*\n\s*@include nb-layout-subgrid-override;/,
		'_layout.scss must apply the subgrid override to the shared generated list, not an inline copy'
	);
	assert.match(
		group,
		/> :is\(#\{\$nb-layout-passthrough-containers\}\)/,
		'core/group/style.scss must reuse the shared generated list for its child pass-through'
	);
} );
