const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );
const selectorParser = require( 'postcss-selector-parser' );

// Template-level pass-throughs keep their own tracks in the Site Editor (GitHub #667).
//
// A pass-through (a rail-less Sidecar, a Query, a Supernova, Post Content, a
// Sidecar content area) takes `grid-template-columns: subgrid` only when its
// parent is a Nova layout grid. `subgrid` on the child of a parent that is not
// a grid computes to `none`, so the child loses every named line.
//
// The Site Editor root carries `.is-root-container`, which is in the layout
// grid union, and `.wp-site-blocks`, like the front-end body wrapper. The
// editor adds `.is-root-container{display:flow-root}` in a style element after
// every stylesheet, at the same weight as the union's `display: grid`, so that
// root is never a grid. A rail-less Sidecar placed directly in an archive or
// page template then subgridded a block box: no tracks, its content area on an
// implicit column, shifted right and running to the canvas edge. On the front
// end the same Sidecar sits in `.wp-site-blocks`, which is outside the union,
// and declares its own tracks. The subgrid scope therefore excludes the
// `.wp-site-blocks` root, through `:where()` so no front-end weight changes.
//
// These tests match the compiled subgrid selectors against the element
// shapes each context renders.

const REPO_ROOT = path.resolve( __dirname, '../../../..' );
const SASS_OPTIONS = {
	loadPaths: [ path.join( REPO_ROOT, 'packages/base-styles' ), path.join( REPO_ROOT, 'packages/core/src' ) ],
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
};

const layoutSheet = postcss.parse( sass.compileString( "@import 'mixins';\n@import 'scss/layout';\n", SASS_OPTIONS ).css );

// Every engine rule that hands a pass-through its parent's tracks.
const subgridRules = [];
layoutSheet.walkRules( rule => {
	if ( rule.nodes.some( node => node.type === 'decl' && node.prop === 'grid-template-columns' && node.value === 'subgrid' ) ) {
		subgridRules.push( rule );
	}
} );

const selectorsOf = rule => {
	const list = [];
	selectorParser( root => root.each( sel => list.push( sel ) ) ).processSync( rule.selector );
	return list;
};

// A minimal selector matcher for the shapes the engine emits: compound
// selectors of classes and attributes, `:is()` / `:where()` / `:not()` with
// selector lists, joined by child or descendant combinators.
const el = ( classes, parent = null, attrs = {} ) => ( { classes: new Set( classes.split( /\s+/ ).filter( Boolean ) ), attrs, parent } );

const splitCompounds = selector => {
	const parts = [ { nodes: [], combinator: null } ];
	selector.each( node => {
		if ( node.type === 'combinator' ) {
			parts.push( { nodes: [], combinator: node.value.trim() === '>' ? '>' : ' ' } );
		} else {
			parts[ parts.length - 1 ].nodes.push( node );
		}
	} );
	return parts;
};

const matchesList = ( pseudo, element ) => pseudo.nodes.some( sel => matchesSelector( sel, element ) );

const matchesSimple = ( node, element ) => {
	switch ( node.type ) {
		case 'class':
			return element.classes.has( node.value );
		case 'attribute':
			return node.value === undefined ? node.attribute in element.attrs : element.attrs[ node.attribute ] === node.value;
		case 'universal':
			return true;
		case 'pseudo': {
			const name = node.value.toLowerCase();
			if ( name === ':is' || name === ':where' ) {
				return matchesList( node, element );
			}
			if ( name === ':not' ) {
				return ! matchesList( node, element );
			}
			throw new Error( `unsupported pseudo-class ${ name }` );
		}
		default:
			throw new Error( `unsupported selector node ${ node.type }` );
	}
};

const matchesSelector = ( selector, element ) => {
	const parts = splitCompounds( selector );
	const matchFrom = ( index, candidate ) => {
		if ( ! candidate || ! parts[ index ].nodes.every( node => matchesSimple( node, candidate ) ) ) {
			return false;
		}
		if ( index === 0 ) {
			return true;
		}
		if ( parts[ index ].combinator === '>' ) {
			return matchFrom( index - 1, candidate.parent );
		}
		for ( let ancestor = candidate.parent; ancestor; ancestor = ancestor.parent ) {
			if ( matchFrom( index - 1, ancestor ) ) {
				return true;
			}
		}
		return false;
	};
	return matchFrom( parts.length - 1, element );
};

const takesSubgrid = element => subgridRules.some( rule => selectorsOf( rule ).some( sel => matchesSelector( sel, element ) ) );

// Selectors Level 4 specificity: :is()/:not() take their most specific
// argument, :where() counts zero.
const compare = ( a, b ) => a[ 0 ] - b[ 0 ] || a[ 1 ] - b[ 1 ] || a[ 2 ] - b[ 2 ];
const specificityOf = complexSelector => {
	const total = [ 0, 0, 0 ];
	const add = s => s.forEach( ( v, i ) => { total[ i ] += v; } );
	const max = list => list.reduce( ( best, s ) => ( compare( s, best ) > 0 ? s : best ), [ 0, 0, 0 ] );
	complexSelector.each( node => {
		if ( node.type === 'class' || node.type === 'attribute' ) {
			add( [ 0, 1, 0 ] );
		} else if ( node.type === 'id' ) {
			add( [ 1, 0, 0 ] );
		} else if ( node.type === 'tag' ) {
			add( [ 0, 0, 1 ] );
		} else if ( node.type === 'pseudo' ) {
			const name = node.value.toLowerCase();
			if ( name === ':where' ) {
				return;
			}
			add( [ ':is', ':not', ':has' ].includes( name ) ? max( node.nodes.map( specificityOf ) ) : [ 0, 1, 0 ] );
		}
	} );
	return total;
};

const PASSTHROUGHS = {
	'rail-less Sidecar': 'wp-block nb-sidecar nb-sidecar--sidebar-none nb-sidecar--no-left-rail nb-sidecar--no-right-rail',
	Query: 'wp-block wp-block-query',
	Supernova: 'wp-block nb-supernova',
	'Post Content': 'wp-block wp-block-post-content',
	'Sidecar content area': 'wp-block nb-sidecar-area nb-sidecar-area--content',
};

// The Site Editor (and a template-locked Post Editor) root: core's
// visual-editor makes it `display: flow-root`.
const siteEditorRoot = el( 'is-root-container is-desktop-preview wp-site-blocks block-editor-block-list__layout' );
// The post-only Post Editor root doubles as Post Content, which Nova keeps a
// grid in the editor (`.editor-styles-wrapper .wp-block-post-content`).
const postEditorRoot = el( 'is-root-container is-desktop-preview wp-block-post-content is-layout-constrained block-editor-block-list__layout' );

test( 'the engine emits subgrid overrides to check', () => {
	assert.ok( subgridRules.length > 0, 'expected at least one grid-template-columns: subgrid rule in the layout sheet' );
} );

test( 'a pass-through placed directly in the Site Editor root keeps its own tracks (#667)', () => {
	for ( const [ label, classes ] of Object.entries( PASSTHROUGHS ) ) {
		assert.equal(
			takesSubgrid( el( classes, siteEditorRoot ) ),
			false,
			`${ label } in the flow-root Site Editor root must not subgrid a block box`
		);
	}
} );

test( 'the front-end twin is unchanged: a pass-through in .wp-site-blocks keeps its own tracks', () => {
	const frontEndRoot = el( 'wp-site-blocks' );
	for ( const [ label, classes ] of Object.entries( PASSTHROUGHS ) ) {
		assert.equal( takesSubgrid( el( classes, frontEndRoot ) ), false, `${ label } in .wp-site-blocks` );
	}
} );

test( 'pass-throughs inside a real Nova layout grid still subgrid', () => {
	const sidecar = el( 'nb-sidecar nb-sidecar--no-left-rail nb-sidecar--no-right-rail', siteEditorRoot );
	const area = el( 'nb-sidecar-area nb-sidecar-area--content', sidecar );
	assert.equal( takesSubgrid( area ), true, 'content area of a Sidecar' );
	assert.equal( takesSubgrid( el( 'wp-block-query', area ) ), true, 'Query in a content area' );
	assert.equal( takesSubgrid( el( 'wp-block-post-content', area ) ), true, 'Post Content in a content area' );
	assert.equal( takesSubgrid( el( 'nb-supernova', el( 'wp-block-query', area ) ) ), true, 'Supernova in a Query' );

	for ( const [ label, classes ] of Object.entries( PASSTHROUGHS ) ) {
		if ( label !== 'Post Content' ) {
			assert.equal( takesSubgrid( el( classes, postEditorRoot ) ), true, `${ label } in the post-only Post Editor root` );
		}
	}

	const frontEndPostContent = el( 'wp-block-post-content', el( 'nb-sidecar-area--content', el( 'nb-sidecar', el( 'wp-site-blocks' ) ) ) );
	assert.equal( takesSubgrid( el( 'nb-sidecar nb-sidecar--no-left-rail nb-sidecar--no-right-rail', frontEndPostContent ) ), true, 'rail-less Sidecar in front-end Post Content' );
} );

test( 'the exclusion adds no weight, so the front-end cascade keeps its pre-#667 specificity', () => {
	for ( const rule of subgridRules ) {
		for ( const sel of selectorsOf( rule ) ) {
			// `:is(<union>) > :is(<pass-throughs>)`: one union class plus the
			// two-class rail-less Sidecar compound.
			assert.deepEqual( specificityOf( sel ), [ 0, 3, 0 ], `specificity of "${ sel.toString().trim() }"` );
		}
	}
} );
