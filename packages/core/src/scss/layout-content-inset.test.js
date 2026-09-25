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

// Minimal CSS math evaluator: var() substitution (balanced, nested fallbacks)
// from a scope, then calc / clamp / min / max with px lengths treated as plain
// numbers and `vw` resolved against the scope's `--vw` viewport width.
const substituteVars = ( value, lookup, depth = 0 ) => {
	assert.ok( depth < 20, 'var() cycle' );
	let out = '';
	let i = 0;
	while ( i < value.length ) {
		const at = value.indexOf( 'var(', i );
		if ( at === -1 ) {
			out += value.slice( i );
			break;
		}
		out += value.slice( i, at );
		let level = 0;
		let comma = -1;
		let j = at + 3;
		for ( ; j < value.length; j++ ) {
			const c = value[ j ];
			if ( c === '(' ) {
				level++;
			} else if ( c === ')' ) {
				level--;
				if ( level === 0 ) {
					break;
				}
			} else if ( c === ',' && level === 1 && comma === -1 ) {
				comma = j;
			}
		}
		const name = value.slice( at + 4, comma === -1 ? j : comma ).trim();
		const fallback = comma === -1 ? undefined : value.slice( comma + 1, j ).trim();
		const hit = lookup( name );
		if ( undefined !== hit ) {
			out += `(${ substituteVars( String( hit ), lookup, depth + 1 ) })`;
		} else {
			assert.ok( undefined !== fallback, `unresolved ${ name }` );
			out += `(${ substituteVars( fallback, lookup, depth + 1 ) })`;
		}
		i = j + 1;
	}
	return out;
};

const toNumber = ( expr, vw ) => {
	const js = expr
		.replace( /(\d*\.?\d+)vw/g, ( _, n ) => String( parseFloat( n ) * vw / 100 ) )
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

const evaluateIn = ( declarations, prop, scope ) => {
	const lookup = name => {
		if ( name in scope ) {
			return scope[ name ];
		}
		return declarations[ name ];
	};
	return toNumber( substituteVars( declarations[ prop ], lookup ), scope[ '--vw' ] ?? 1440 );
};

const evaluate = ( prop, scope ) => evaluateIn( gatedDeclarations, prop, scope );

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

const scopeFor = ( { container, inset, railLeft, railRight, gap = 48, vw = 1440, fontSize = 16 } ) => ( {
	'--vw': vw,
	'--nb-actual-container-width': container,
	'--nb-sidecar-gap': gap,
	'--nb-content-inset-setting': inset,
	'--theme-body-final-font-size': fontSize,
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

// ---------------------------------------------------------------------------
// Decision 1 (#655 follow-up): the inset scales down on narrow screens.
// ---------------------------------------------------------------------------

const insetAt = ( { inset, vw, fontSize } ) => evaluate( '--nb-content-inset', scopeFor( { container: 1200, inset, vw, fontSize } ) );

for ( const fontSize of [ 15, 16, 17, 19.5 ] ) {
	test( `from 1280px up the inset is exactly the full font-relative inset (font ${ fontSize }px)`, () => {
		for ( const vw of [ 1280, 1281, 1440, 1920, 2560 ] ) {
			for ( const inset of [ 100, 230, 300 ] ) {
				close( insetAt( { inset, vw, fontSize } ), inset * fontSize / 16, `inset ${ inset } at ${ vw }` );
			}
		}
	} );
}

test( 'below 1280px the inset follows the viewport ramp, half the setting at 1024px', () => {
	close( insetAt( { inset: 230, vw: 1024, fontSize: 15 } ), 115, '230 at 1024' );
	close( insetAt( { inset: 300, vw: 1024, fontSize: 15 } ), 150, '300 at 1024' );
	close( insetAt( { inset: 300, vw: 1152, fontSize: 15 } ), 300 * 384 / 512, '300 at 1152' );
	// With a 15px body the ramp meets the full inset at 1248px and is continuous.
	close( insetAt( { inset: 230, vw: 1248, fontSize: 15 } ), 230 * 15 / 16, 'meets the full inset at 1248' );
	close( insetAt( { inset: 230, vw: 1279, fontSize: 15 } ), 230 * 15 / 16, 'full inset just below 1280' );
} );

test( 'the ramp is monotonic and continuous from 1024 to 1280 (15/16px body)', () => {
	for ( const fontSize of [ 15, 16 ] ) {
		let previous = -Infinity;
		for ( let vw = 1024; vw <= 1300; vw++ ) {
			const value = insetAt( { inset: 300, vw, fontSize } );
			assert.ok( value >= previous - 1e-9, `non-decreasing at ${ vw }` );
			assert.ok( previous === -Infinity || value - previous < 1, `no jump at ${ vw } (${ previous } -> ${ value })` );
			previous = value;
		}
	}
} );

test( '1024px keeps a usable reading column (lab geometry: 968.9 container, 15px body, 215.6 Small rail, 55.1 gap)', () => {
	const base = { container: 968.9, gap: 55.1, vw: 1024, fontSize: 15 };
	const read = scope => {
		const l = lines( scopeFor( { ...base, ...scope } ) );
		return l.ce - l.cs;
	};
	// One rail, the maximum inset: was a 165px column (the cap) before scaling.
	assert.ok( read( { inset: 300, railRight: 215.6 } ) > 450, 'right rail, inset 300' );
	// Both rails, the default inset: collapsed to the cap before scaling.
	const both = read( { inset: 230, railLeft: 215.6, railRight: 215.6 } );
	assert.ok( both > 3 * 55.1 + 100, `both rails, inset 230 stays above the cap (${ both })` );
	// Rail-less reading page keeps a measure narrower than the container.
	close( read( { inset: 230 } ), 968.9 - 2 * 115, 'rail-less, inset 230' );
} );

test( 'the minimum-column cap still backs the ramp up', () => {
	const l = lines( scopeFor( { container: 968.9, gap: 55.1, vw: 1024, fontSize: 15, inset: 300, railLeft: 300, railRight: 300 } ) );
	close( evaluate( '--nb-content-inset-effective', scopeFor( { container: 968.9, gap: 55.1, vw: 1024, fontSize: 15, inset: 300, railLeft: 300, railRight: 300 } ) ), ( 968.9 - 600 ) / 2 - 1.5 * 55.1, 'capped below the 150px ramp' );
	assert.ok( l.ce - l.cs >= 3 * 55.1 - 0.01, 'reading keeps at least three rail gaps' );
} );

// ---------------------------------------------------------------------------
// Decision 2: the Small rail no longer follows Content Inset.
// ---------------------------------------------------------------------------

const rootDeclarations = ( () => {
	const map = {};
	layoutSheet.walkRules( rule => {
		if ( rule.selector === ':root' && ! insideSignal( rule ) ) {
			rule.walkDecls( d => {
				if ( d.parent === rule ) {
					map[ d.prop ] = d.value;
				}
			} );
		}
	} );
	return map;
} )();

const smallRail = scope => evaluateIn( rootDeclarations, '--nb-sidecar-sidebar-small-width', { '--theme-body-final-font-size': 16, ...scope } );

test( 'the Small rail width is font-relative and reads its own token, not Content Inset', () => {
	const decl = rootDeclarations[ '--nb-sidecar-sidebar-small-width' ];
	assert.match( decl, /var\(--sm-rail-small, var\(--nb-rail-small-setting\)\)/ );
	assert.doesNotMatch( decl, /--nb-content-inset-setting/ );
} );

test( 'no Content Inset saved: the Small rail is byte-for-byte the old coupled value', () => {
	// Style Manager prints its registered default (230); without Style Manager
	// Anima/Nova fall back to 288. The old width was inset x font / 16.
	for ( const inset of [ 230, 288 ] ) {
		for ( const fontSize of [ 15, 16, 19.5 ] ) {
			close(
				smallRail( { '--nb-content-inset-setting': inset, '--theme-body-final-font-size': fontSize } ),
				inset * fontSize / 16,
				`unsaved inset ${ inset }, font ${ fontSize }`
			);
		}
	}
} );

test( 'a saved Content Inset no longer moves the Small rail (Style Manager default 230)', () => {
	for ( const inset of [ 100, 150, 230, 300 ] ) {
		close(
			smallRail( { '--nb-content-inset-setting': inset, '--sm-content-inset-explicit': 1, '--theme-body-final-font-size': 15 } ),
			230 * 15 / 16,
			`saved inset ${ inset }`
		);
	}
} );

test( 'a rail scale still wins over the Small default', () => {
	close( smallRail( { '--nb-content-inset-setting': 150, '--sm-content-inset-explicit': 1, '--sm-rail-small': 260 } ), 260, 'saved inset' );
	close( smallRail( { '--nb-content-inset-setting': 230, '--sm-rail-small': 260 } ), 260, 'unsaved inset' );
} );

// ---------------------------------------------------------------------------
// Decision 3: beside a rail, wide blocks stop at the (inset-narrowed) `ce`.
// ---------------------------------------------------------------------------

test( 'beside a right rail wide/full end at ce, and nothing in the signal moves them to the rail gap', () => {
	const ends = [];
	sidecarSheet.walkRules( rule => {
		if ( rule.selector !== '.nb-sidecar:not(.nb-sidecar--no-right-rail) > .nb-sidecar-area--content' ) {
			return;
		}
		rule.walkDecls( d => {
			if ( d.prop === '--block-wide-end' || d.prop === '--block-full-end' ) {
				ends.push( { prop: d.prop, value: d.value, gated: insideSignal( d ) } );
			}
		} );
	} );
	assert.deepEqual( ends.map( e => `${ e.prop }: ${ e.value }` ).sort(), [ '--block-full-end: ce', '--block-wide-end: ce' ] );
	assert.ok( ends.every( e => ! e.gated ), 'the rail-bounded wide span is the shared (ungated) rule' );

	const gatedWide = [];
	sidecarSheet.walkAtRules( 'container', rule => {
		if ( rule.params === SIGNAL ) {
			rule.walkDecls( /^--block-(wide|full)-(start|end)$/, d => gatedWide.push( d.prop ) );
		}
	} );
	assert.deepEqual( gatedWide, [], 'the signal must not redefine the wide/full lines' );

	// With the inset saved, `ce` is the reading column's end: ge - max(gap, inset).
	const l = lines( scopeFor( { container: 1125, inset: 230, railRight: 215.6, gap: 64, fontSize: 15 } ) );
	close( l.ge - l.ce, 230 * 15 / 16, 'wide stops one inset short of the rail' );
} );
