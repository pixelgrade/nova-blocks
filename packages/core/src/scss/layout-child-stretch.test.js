const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );
const selectorParser = require( 'postcss-selector-parser' );

// Layout grid children fill their track (GitHub #660).
//
// WordPress's constrained layout gives every default child of Post Content
// `margin-inline: auto !important`. On a Nova layout grid a grid item with
// auto inline margins is sized to fit its content unless its width is set, so
// the engine's `width: 100%` stretch is what makes a child take its track. Any
// block rule that resets the width to `auto` with more weight shrinks the
// child: Nova's own separator reset did, and a Simple or Blank separator in
// Post Content rendered 0px wide. This pins the cascade relationship on the
// compiled sources (same compile path as the shipped core stylesheet).

const REPO_ROOT = path.resolve( __dirname, '../../../..' );
const SASS_OPTIONS = {
	loadPaths: [ path.join( REPO_ROOT, 'packages/base-styles' ), path.join( REPO_ROOT, 'packages/core/src' ) ],
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
};

const compile = entry => postcss.parse( sass.compileString( entry, SASS_OPTIONS ).css );

// Selectors Level 4 specificity: :is()/:not()/:has() take their most specific
// argument, :where() counts zero.
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
			} else if ( name.startsWith( '::' ) ) {
				add( [ 0, 0, 1 ] );
			} else {
				add( [ 0, 1, 0 ] );
			}
		}
	} );

	return total;
};

const compare = ( a, b ) => a[ 0 ] - b[ 0 ] || a[ 1 ] - b[ 1 ] || a[ 2 ] - b[ 2 ];

const selectorsOf = rule => {
	const list = [];
	selectorParser( root => root.each( sel => list.push( sel ) ) ).processSync( rule.selector );
	return list;
};

const insideAtRule = rule => {
	for ( let parent = rule.parent; parent; parent = parent.parent ) {
		if ( parent.type === 'atrule' ) {
			return true;
		}
	}
	return false;
};

const decl = ( rule, prop ) => rule.nodes.find( node => node.type === 'decl' && node.prop === prop );

const layoutSheet = compile( "@import 'mixins';\n@import 'scss/layout';\n" );
const separatorSheet = compile( "@import 'mixins';\n@import 'blocks/core/separator/style';\n" );

// The unconditional engine rules that stretch a direct child of the layout
// container union (`:is(<union>) > ...`) — the frontend path, not the editor
// `.editor-styles-wrapper` twin and not a breakpoint override.
const UNION_CHILD = /^:is\(\.is-root-container,[^)]*\.wp-block-post-content[^)]*\)(?::where\(:not\(header\)\))? > /;
const engineChildRules = prop => {
	const rules = [];
	layoutSheet.walkRules( rule => {
		if ( ! insideAtRule( rule ) && UNION_CHILD.test( rule.selector ) && decl( rule, prop ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};

const maxSpecificity = rule => selectorsOf( rule ).map( specificityOf ).reduce( ( a, b ) => ( compare( a, b ) >= 0 ? a : b ) );

// Nova's separator width reset and core's own default-style rule
// (wp-includes/blocks/separator/theme.css: `width: 100px`) share this selector.
const separatorWidthRules = () => {
	const rules = [];
	separatorSheet.walkRules( rule => {
		if ( rule.selector.includes( '.wp-block-separator' ) && decl( rule, 'width' ) ) {
			rules.push( rule );
		}
	} );
	return rules;
};

const stretchRules = () => engineChildRules( 'width' ).filter( rule => decl( rule, 'width' ).value === '100%' );

// The lifted (#660) stretch: the heavier of the two.
const liftedStretch = () => stretchRules().reduce( ( best, rule ) => ( ! best || compare( maxSpecificity( rule ), maxSpecificity( best ) ) > 0 ? rule : best ), null );

test( 'the engine stretches every direct layout-grid child to its track', () => {
	const stretch = stretchRules();
	assert.equal( stretch.length, 2, 'the 2.6.6 stretch for every child, and its lifted twin (#660) for all but the header (#670)' );
	for ( const rule of stretch ) {
		assert.match( rule.selector, /> \*?:not\(\.block-list-appender/, 'the block-list appender keeps its own width' );
	}

	const base = stretch.find( rule => rule !== liftedStretch() );
	assert.deepEqual( maxSpecificity( base ), [ 0, 2, 0 ], 'the 2.6.6 stretch keeps its weight, so theme header pins still beat it' );
	assert.match( base.selector, /> \*:not\(\.block-list-appender\)$/, 'the 2.6.6 stretch reaches every child, the header included' );
} );

test( 'the stretch outranks block width resets, so separators in Post Content fill the track (#660)', () => {
	const stretch = liftedStretch();
	const resets = separatorWidthRules();

	assert.ok( resets.length > 0, 'expected the separator width reset in the separator stylesheet' );
	assert.equal( decl( resets[ 0 ], 'width' ).value, 'auto' );

	for ( const reset of resets ) {
		assert.ok(
			compare( maxSpecificity( stretch ), maxSpecificity( reset ) ) > 0,
			`the engine stretch (${ maxSpecificity( stretch ) }) must beat "${ reset.selector }" (${ maxSpecificity( reset ) }) regardless of source order`
		);
	}

	// Core's default-style separator rule has the same weight as Nova's reset.
	const coreDefault = selectorParser().astSync( '.wp-block-separator:not(.is-style-wide):not(.is-style-dots)' ).first;
	assert.ok( compare( maxSpecificity( stretch ), specificityOf( coreDefault ) ) > 0, 'the stretch beats core\'s 100px separator default too' );
} );

test( 'only width is lifted: authored measures still cap default children through max-width', () => {
	const maxWidthNone = engineChildRules( 'max-width' );
	assert.ok( maxWidthNone.length > 0, 'the engine still clears the constrained-layout max-width' );

	const measure = compile( "@import 'mixins';\n@import 'blocks/core/post-content/style';\n" ).nodes.find( node =>
		node.type === 'rule' && node.selector.includes( 'nb-post-content--measure' ) && decl( node, 'max-width' )
	);
	assert.ok( measure, 'the Post Content measure rule exists' );

	for ( const rule of maxWidthNone ) {
		assert.ok(
			compare( maxSpecificity( measure ), maxSpecificity( rule ) ) > 0,
			`the Post Content measure must keep beating the engine max-width reset "${ rule.selector }"`
		);
	}
} );
