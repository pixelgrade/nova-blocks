const test = require( 'node:test' );
const assert = require( 'node:assert/strict' );
const path = require( 'node:path' );
const postcss = require( 'postcss' );
const sass = require( 'sass' );

// Content Inset — the Style Manager Layout board contract (GitHub #655).
//
// Compiles the REAL engine sources and checks two things:
//   1. Compat: every Content Inset rule lives inside the opt-in style query
//      `@container style(--sm-content-inset-explicit: 1)`, which Style Manager
//      emits only once a Content Inset is saved — so the ungated cascade (the
//      one every existing site renders) is untouched.
//   2. The track math: evaluating the compiled declarations reproduces the
//      board's formula — cs = (ws | gs) + inset, ce = (we | ge) - inset, the
//      rail gap as the minimum beside a rail, cc on the container midline.

const REPO_ROOT = path.resolve( __dirname, '../../../..' );
const SASS_OPTIONS = {
	silenceDeprecations: [ 'import', 'global-builtin', 'slash-div', 'color-functions', 'abs-percent' ],
};
const SIGNAL = 'style(--sm-content-inset-explicit: 1)';

const compile = ( entry, loadPaths ) => postcss.parse(
	sass.compileString( entry, { ...SASS_OPTIONS, loadPaths } ).css
);

const layoutSheet = compile( "@import 'mixins';\n@import 'scss/layout';\n", [
	path.join( REPO_ROOT, 'packages/base-styles' ),
	path.join( REPO_ROOT, 'packages/core/src' ),
] );

const sidecarSheet = compile( "@import 'mixins';\n@import 'style';\n", [
	path.join( REPO_ROOT, 'packages/base-styles' ),
	path.join( REPO_ROOT, 'packages/block-library/src/blocks/sidecar' ),
] );

const insideSignal = node => {
	for ( let parent = node.parent; parent; parent = parent.parent ) {
		if ( parent.type === 'atrule' && parent.name === 'container' && parent.params === SIGNAL ) {
			return true;
		}
	}
	return false;
};

const INSET_VARS = /--nb-content-inset(-effective)?(?![\w-])|--nb-inset-rail-/;

test( 'every Content Inset rule sits behind the Style Manager opt-in signal', () => {
	const gated = [];
	const leaked = [];

	layoutSheet.walkDecls( decl => {
		if ( INSET_VARS.test( decl.prop ) || INSET_VARS.test( decl.value ) ) {
			( insideSignal( decl ) ? gated : leaked ).push( `${ decl.parent.selector } { ${ decl.prop } }` );
		}
	} );

	assert.ok( gated.length > 0, 'expected the gated Content Inset rules in _layout.scss' );
	assert.deepEqual( leaked, [], 'Content Inset declarations outside the opt-in style query' );
} );

test( 'the only rules inside the signal are the inset overrides (no ungated var is redefined outside it)', () => {
	const gatedProps = new Set();
	layoutSheet.walkAtRules( 'container', rule => {
		if ( rule.params === SIGNAL ) {
			rule.walkDecls( decl => gatedProps.add( decl.prop ) );
		}
	} );

	assert.deepEqual( [ ...gatedProps ].sort(), [
		'--nb-content-inset',
		'--nb-content-inset-effective',
		'--nb-inset-rail-left',
		'--nb-inset-rail-right',
		'--nb-layout-rail-left',
		'--nb-layout-rail-right',
		'--nb-sidecar-content-left',
		'--nb-sidecar-content-right',
		'--nb-sidecar-content-width',
		'--nb-sidecar-sidebar-left-gap',
		'--nb-sidecar-sidebar-right-gap',
	] );
} );

test( 'header/footer template parts, Query, Supernova and card grids keep their grid under the signal', () => {
	layoutSheet.walkAtRules( 'container', rule => {
		if ( rule.params !== SIGNAL ) {
			return;
		}
		rule.walkRules( r => {
			for ( const excluded of [ '.wp-block-template-part', '.wp-block-query', '.nb-supernova', '.nb-content-layout-grid' ] ) {
				assert.ok( ! r.selector.includes( excluded ), `${ excluded } must not take the inset (${ r.selector })` );
			}
		} );
	} );
} );

test( 'a railed Sidecar content area puts default blocks on cs-ce only under the signal', () => {
	const alias = [];
	sidecarSheet.walkRules( rule => {
		if ( ! rule.selector.includes( '> .nb-sidecar-area--content' ) ) {
			return;
		}
		const start = rule.nodes.find( n => n.type === 'decl' && n.prop === '--block-content-start' );
		if ( start ) {
			alias.push( { selector: rule.selector, value: start.value, gated: insideSignal( rule ) } );
		}
	} );

	const railed = '.nb-sidecar:not(.nb-sidecar--no-left-rail.nb-sidecar--no-right-rail) > .nb-sidecar-area--content';
	const legacy = alias.find( a => a.selector === railed && ! a.gated );
	const gated = alias.find( a => a.selector === railed && a.gated );

	assert.equal( legacy?.value, 'var(--block-wide-start)', 'ungated alias must stay byte-identical' );
	assert.equal( gated?.value, 'cs', 'opted-in content area must use the reading column' );
	assert.ok(
		alias.indexOf( gated ) > alias.indexOf( legacy ),
		'the gated alias must come after the legacy one (same specificity, source order wins)'
	);
} );

// ---------------------------------------------------------------------------
// Track math: evaluate the compiled gated declarations for concrete inputs.
// ---------------------------------------------------------------------------

const gatedDeclarations = ( () => {
	const map = {};
	layoutSheet.walkAtRules( 'container', rule => {
		if ( rule.params !== SIGNAL ) {
			return;
		}
		rule.walkRules( r => {
			if ( r.selector.includes( '.nb-sidecar-area--content' ) ) {
				r.walkDecls( d => {
					map[ d.prop ] = d.value;
				} );
			}
		} );
	} );
	return map;
} )();

// Minimal CSS math evaluator: var() substitution from a scope, then calc /
// clamp / min / max with px lengths treated as plain numbers.
const evaluate = ( prop, scope ) => {
	const resolve = ( value, depth = 0 ) => {
		assert.ok( depth < 20, 'var() cycle' );
		return value.replace( /var\((--[\w-]+)(?:,\s*([^()]*))?\)/g, ( _, name, fallback ) => {
			if ( name in scope ) {
				return `(${ scope[ name ] })`;
			}
			if ( name in gatedDeclarations ) {
				return `(${ resolve( gatedDeclarations[ name ], depth + 1 ) })`;
			}
			assert.ok( undefined !== fallback, `unresolved ${ name }` );
			return `(${ fallback })`;
		} );
	};

	let expr = resolve( gatedDeclarations[ prop ] );
	// Nested var() inside fallbacks/expressions may need several passes.
	for ( let i = 0; i < 5 && expr.includes( 'var(' ); i++ ) {
		expr = resolve( expr );
	}
	const js = expr
		.replace( /(\d*\.?\d+)px/g, '$1' )
		.replace( /\bcalc\(/g, '(' )
		.replace( /\bclamp\(/g, '__clamp(' )
		.replace( /\bmax\(/g, 'Math.max(' )
		.replace( /\bmin\(/g, 'Math.min(' );
	// CSS clamp(): MIN wins over MAX.
	const __clamp = ( lo, v, hi ) => Math.max( lo, Math.min( v, hi ) );
	// eslint-disable-next-line no-new-func
	return new Function( '__clamp', `return (${ js });` )( __clamp );
};

// Lines relative to ws, from the gated template
// [ws] rail-left [frs] 1fr [gs] gap-left [cs] content-left [gcs] g/2 [cc] g/2
// [gce] content-right [ce] gap-right [ge] 1fr [fre] rail-right [we]
const lines = scope => {
	const railL = evaluate( '--nb-layout-rail-left', scope );
	const railR = evaluate( '--nb-layout-rail-right', scope );
	const gapL = evaluate( '--nb-sidecar-sidebar-left-gap', scope );
	const gapR = evaluate( '--nb-sidecar-sidebar-right-gap', scope );
	const cl = evaluate( '--nb-sidecar-content-left', scope );
	const cr = evaluate( '--nb-sidecar-content-right', scope );
	const g = scope[ '--nb-sidecar-gap' ];
	const container = scope[ '--nb-actual-container-width' ];
	const fixed = railL + gapL + cl + g + cr + gapR + railR;
	assert.ok( cl >= 0 && cr >= 0, `content halves must be non-negative (${ cl }, ${ cr })` );
	assert.ok( fixed <= container + 1e-6, `tracks overflow the container (${ fixed } > ${ container })` );
	const fr = ( container - fixed ) / 2;
	const gs = railL + fr;
	const cs = gs + gapL;
	const cc = cs + cl + g / 2;
	const ce = cc + g / 2 + cr;
	const ge = ce + gapR;
	return { cs, cc, ce, ge, gs, we: container };
};

const scopeFor = ( { container, inset, railLeft, railRight, gap = 48 } ) => ( {
	'--nb-actual-container-width': container,
	'--nb-sidecar-gap': gap,
	'--nb-content-inset-setting': inset,
	'--theme-body-final-font-size': 16,
	...( undefined !== railLeft ? { '--nb-inset-rail-left': railLeft } : {} ),
	...( undefined !== railRight ? { '--nb-inset-rail-right': railRight } : {} ),
} );

const close = ( actual, expected, label ) =>
	assert.ok( Math.abs( actual - expected ) < 0.01, `${ label }: expected ${ expected }, got ${ actual }` );

for ( const inset of [ 100, 180, 230, 300 ] ) {
	test( `board formula, one right rail, inset ${ inset }`, () => {
		const container = 1200;
		const rail = 288;
		const l = lines( scopeFor( { container, inset, railRight: rail } ) );
		close( l.cs, inset, 'cs = ws + inset' );
		close( l.ge, container - rail, 'ge = rail inner edge (rail width unchanged)' );
		close( l.ce, container - rail - Math.max( inset, 48 ), 'ce = ge - max(inset, gap)' );
		close( l.ce - l.cs, container - rail - inset - Math.max( inset, 48 ), 'reading = container - rail - 2 x inset' );
		close( l.cc, ( l.cs + l.ce ) / 2, 'cc centres the reading column' );
	} );
}

test( 'board formula, one left rail, mirrored', () => {
	const l = lines( scopeFor( { container: 1200, inset: 230, railLeft: 288 } ) );
	close( l.gs, 288, 'gs = left rail inner edge' );
	close( l.cs, 288 + 230, 'cs = gs + inset' );
	close( l.ce, 1200 - 230, 'ce = we - inset' );
} );

test( 'both rails narrow both sides', () => {
	const l = lines( scopeFor( { container: 1400, inset: 150, railLeft: 250, railRight: 300 } ) );
	close( l.cs, 250 + 150, 'cs' );
	close( l.ce, 1400 - 300 - 150, 'ce' );
} );

test( 'rail-less reading page: the Centered example, reading = container - 2 x inset', () => {
	const l = lines( scopeFor( { container: 1200, inset: 230 } ) );
	close( l.cs, 230, 'cs' );
	close( l.ce, 970, 'ce' );
	close( l.ce - l.cs, 1200 - 460, 'reading' );
} );

test( 'the rail gap is the minimum beside a rail when the inset is smaller', () => {
	const l = lines( scopeFor( { container: 1200, inset: 20, railRight: 288, gap: 64 } ) );
	close( l.ge - l.ce, 64, 'rail gap wins beside the rail' );
	close( l.cs, 20, 'the free side still takes the inset' );
} );

test( 'an oversized inset is capped so no content track goes negative', () => {
	// 1024 viewport: a small container, a large rail, the maximum inset.
	const l = lines( scopeFor( { container: 944, inset: 300, railRight: 400 } ) );
	assert.ok( l.ce - l.cs >= 0, 'reading width stays non-negative' );
	assert.ok( l.ce - l.cs >= 3 * 48 - 0.01, 'reading keeps at least three rail gaps' );
} );
