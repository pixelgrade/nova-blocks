const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );
const selectorParser = require( 'postcss-selector-parser' );

// Aligned pull-outs stack below the desktop layout (GitHub #664).
//
// Below `lap` (1024px) the layout grid collapses to one reading column: the
// rail tracks `ws`-`gs` / `ge`-`we` are `auto`, sized by whatever sits in
// them. The break placement (a broken alignleft on `ws / gs` with the next
// block starting at `cs`, and the mirror for alignright) therefore let the
// image take its own width out of a phone-width column and squeezed the next
// paragraph into the rest — 0px beside a full-width image, ~99px beside a
// 300px one. Below `lap` an aligned block sits on its own row at its side
// and the following text keeps the whole column. This pins that contract on
// the compiled engine sources (same compile path as the shipped stylesheet).

const REPO_ROOT = path.resolve( __dirname, '../../../..' );
const SASS_OPTIONS = {
	loadPaths: [ path.join( REPO_ROOT, 'packages/base-styles' ), path.join( REPO_ROOT, 'packages/core/src' ) ],
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
};

const layoutSheet = postcss.parse( sass.compileString( "@import 'mixins';\n@import 'scss/layout';\n", SASS_OPTIONS ).css );

const ABOVE_LAP = 'only screen and (min-width: 1024px)';
const BELOW_LAP = 'not screen and (min-width: 1024px)';

const mediaOf = node => {
	const media = [];
	for ( let parent = node.parent; parent; parent = parent.parent ) {
		if ( parent.type === 'atrule' && parent.name === 'media' ) {
			media.push( parent.params );
		}
	}
	return media;
};

const decl = ( rule, prop ) => rule.nodes.find( node => node.type === 'decl' && node.prop === prop );

// Selectors Level 4 specificity: :is()/:not()/:has() take their most specific
// argument, :where() counts zero.
const compare = ( a, b ) => a[ 0 ] - b[ 0 ] || a[ 1 ] - b[ 1 ] || a[ 2 ] - b[ 2 ];
const specificityOf = complexSelector => {
	const total = [ 0, 0, 0 ];
	const add = s => s.forEach( ( v, i ) => { total[ i ] += v; } );
	const max = list => list.reduce( ( best, s ) => ( compare( s, best ) > 0 ? s : best ), [ 0, 0, 0 ] );

	complexSelector.each( node => {
		if ( node.type === 'id' ) {
			add( [ 1, 0, 0 ] );
		} else if ( node.type === 'class' || node.type === 'attribute' ) {
			add( [ 0, 1, 0 ] );
		} else if ( node.type === 'tag' ) {
			add( [ 0, 0, 1 ] );
		} else if ( node.type === 'pseudo' ) {
			const name = node.value.toLowerCase();
			if ( name === ':where' ) {
				return;
			}
			if ( [ ':is', ':not', ':has', ':matches' ].includes( name ) ) {
				add( max( node.nodes.map( specificityOf ) ) );
			} else {
				add( [ 0, 1, 0 ] );
			}
		}
	} );

	return total;
};
const selectorsOf = rule => {
	const list = [];
	selectorParser( root => root.each( sel => list.push( sel ) ) ).processSync( rule.selector );
	return list;
};
const minSpecificity = rule => selectorsOf( rule ).map( specificityOf ).reduce( ( a, b ) => ( compare( a, b ) <= 0 ? a : b ) );
const maxSpecificity = rule => selectorsOf( rule ).map( specificityOf ).reduce( ( a, b ) => ( compare( a, b ) >= 0 ? a : b ) );

// A rule that places a BROKEN pull-out (or the block after it): the selector
// requires a break class, not merely excludes one (`:not(.break-align-*)` is
// the nonbreakable desktop layer).
const BROKEN = /:is\([^)]*(\.break-align-(left|right)|\.nb-break-always)/;
const PLACEMENT_PROPS = [ 'grid-column', 'grid-column-start', 'grid-column-end', 'grid-row-end' ];

test( 'break placement of aligned pull-outs applies only on the desktop grid (>= lap)', () => {
	const placements = [];
	const leaked = [];

	layoutSheet.walkRules( rule => {
		if ( ! BROKEN.test( rule.selector ) ) {
			return;
		}
		PLACEMENT_PROPS.forEach( prop => {
			if ( ! decl( rule, prop ) ) {
				return;
			}
			const entry = `${ rule.selector } { ${ prop } }`;
			placements.push( entry );
			if ( ! mediaOf( rule ).includes( ABOVE_LAP ) ) {
				leaked.push( entry );
			}
		} );
	} );

	assert.ok( placements.length >= 6, 'expected the left/right break placement rules and their sibling adjustments' );
	assert.deepEqual( leaked, [], 'break placement rules that also apply below lap (they squeeze the next block beside the image)' );
} );

const belowLapRules = () => {
	const rules = [];
	layoutSheet.walkRules( rule => {
		if ( mediaOf( rule ).includes( BELOW_LAP ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};

test( 'below lap an aligned block drops the row span break-align writes inline', () => {
	const sides = { left: false, right: false };

	belowLapRules().forEach( rule => {
		const rowEnd = decl( rule, 'grid-row-end' );
		if ( ! rowEnd || rowEnd.value !== 'auto' || ! rowEnd.important ) {
			return;
		}
		assert.doesNotMatch( rule.selector, BROKEN, 'the reset must not depend on a break class (the inline span can outlive it)' );
		if ( /\.alignleft/.test( rule.selector ) && /\[data-align="?left"?\]/.test( rule.selector ) ) {
			sides.left = true;
		}
		if ( /\.alignright/.test( rule.selector ) && /\[data-align="?right"?\]/.test( rule.selector ) ) {
			sides.right = true;
		}
	} );

	assert.deepEqual( sides, { left: true, right: true }, 'grid-row-end: auto !important for alignleft and alignright children below lap' );
} );

test( 'below lap an aligned image keeps its side of the column instead of centring', () => {
	const centre = [];
	layoutSheet.walkRules( rule => {
		const alignItems = decl( rule, 'align-items' );
		if ( alignItems && alignItems.value === 'center' && / > \.wp-block-image$/.test( rule.selector ) && ! mediaOf( rule ).length ) {
			centre.push( rule );
		}
	} );
	assert.equal( centre.length, 1, 'the engine centres unaligned images in the column' );

	const expected = { left: 'flex-start', right: 'flex-end' };

	Object.entries( expected ).forEach( ( [ side, value ] ) => {
		const rules = belowLapRules().filter( rule => {
			const alignItems = decl( rule, 'align-items' );
			return alignItems && alignItems.value === value
				&& rule.selector.includes( '.wp-block-image' )
				&& rule.selector.includes( `.align${ side }` );
		} );

		assert.equal( rules.length, 1, `one below-lap rule puts an align${ side } image at ${ value }` );
		assert.ok(
			compare( minSpecificity( rules[ 0 ] ), maxSpecificity( centre[ 0 ] ) ) > 0,
			`the align${ side } rule must outrank the engine's centring rule regardless of source order`
		);
	} );
} );
