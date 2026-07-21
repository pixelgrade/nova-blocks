/**
 * Break-align measurement module tests (Tasks 3.3 + 3.4).
 *
 * jsdom caveats (napkin Test Harness #1): clear inline styles with
 * style.removeProperty, stub window.getComputedStyle instead of trusting
 * jsdom's computed values, and mock per-element getBoundingClientRect.
 */

// The utils barrel initializes matchMedia-based media queries at import time,
// which jsdom does not provide — mock the pieces break-align consumes.
jest.mock( './index', () => ( {
	addClass: ( el, classes ) => classes.split( /\s+/ ).forEach( ( c ) => el.classList.add( c ) ),
	removeClass: ( el, classes ) => classes.split( /\s+/ ).forEach( ( c ) => el.classList.remove( c ) ),
	matches: ( el, selector ) => el.matches( selector ),
} ) );

import {
	shouldMeasureBreakClasses,
	maybeAddBreakClassesToElement,
	shouldSkipForCssCoveredRails,
	computePulloutRowSpan,
	measureBreakClassesPass,
	runBreakAlignment,
	cleanupBreakClasses,
} from './break-align';

const ZERO_MARGINS = { marginTop: '0px', marginBottom: '0px', marginLeft: '0px', marginRight: '0px' };

// Every element gets a controllable rect; getComputedStyle is stubbed to
// zero margins (jsdom's computed values are unreliable for style math).
const setRect = ( el, rect ) => {
	el.getBoundingClientRect = () => ( {
		top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0,
		...rect,
	} );
};

let getComputedStyleSpy;

beforeEach( () => {
	getComputedStyleSpy = jest.spyOn( window, 'getComputedStyle' ).mockImplementation( () => ZERO_MARGINS );
	document.body.innerHTML = '';
} );

afterEach( () => {
	getComputedStyleSpy.mockRestore();
} );

const makeBlock = ( className ) => {
	const el = document.createElement( 'figure' );
	el.className = className;
	setRect( el, {} );
	return el;
};

/**
 * Builds a positioned sidecar with a content area and a rail.
 */
const makeSidecar = ( { position = 'right', railChildren = 0 } = {} ) => {
	const sidecar = document.createElement( 'div' );
	sidecar.className = `nb-sidecar nb-sidecar--sidebar-${ position } nb-content-layout-grid`;
	const content = document.createElement( 'div' );
	content.className = 'nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid';
	const rail = document.createElement( 'div' );
	rail.className = 'nb-sidecar-area nb-sidecar-area--sidebar';
	rail.appendChild( document.createTextNode( '\n' ) ); // serialized whitespace
	for ( let i = 0; i < railChildren; i++ ) {
		const p = document.createElement( 'p' );
		setRect( p, { top: i * 100, bottom: i * 100 + 90, left: 900, right: 1100, width: 200, height: 90 } );
		rail.appendChild( p );
	}
	sidecar.appendChild( content );
	sidecar.appendChild( rail );
	document.body.appendChild( sidecar );
	return { sidecar, content, rail };
};

describe( 'sidecar break control skip predicate', () => {
	it( 'measures ordinary aligned blocks (auto)', () => {
		expect( shouldMeasureBreakClasses( makeBlock( 'wp-block-image alignwide' ) ) ).toBe( true );
	} );

	it( 'skips blocks pinned by the per-block control', () => {
		expect( shouldMeasureBreakClasses( makeBlock( 'wp-block-image alignwide nb-break-always' ) ) ).toBe( false );
		expect( shouldMeasureBreakClasses( makeBlock( 'wp-block-image alignleft nb-break-never' ) ) ).toBe( false );
	} );

	it( 'never adds measured break classes to always/never blocks', () => {
		const always = makeBlock( 'wp-block-image alignwide nb-break-always' );
		const never = makeBlock( 'wp-block-image alignwide nb-break-never' );

		document.body.appendChild( always );
		document.body.appendChild( never );

		maybeAddBreakClassesToElement( always );
		maybeAddBreakClassesToElement( never );

		expect( always.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( always.classList.contains( 'break-align-right' ) ).toBe( false );
		expect( never.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( never.classList.contains( 'break-align-right' ) ).toBe( false );

		always.remove();
		never.remove();
	} );
} );

describe( 'frontend :has()-covered-rail skip (Task 3.4)', () => {
	it( 'skips wide/full blocks when every ancestor rail is absent or element-empty', () => {
		const { content } = makeSidecar( { railChildren: 0 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		expect( shouldSkipForCssCoveredRails( wide ) ).toBe( true );
	} );

	it( 'does NOT skip when a rail has element children (the CSS layer does not cover it)', () => {
		const { content } = makeSidecar( { railChildren: 2 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		expect( shouldSkipForCssCoveredRails( wide ) ).toBe( false );
	} );

	it( 'does NOT skip when a nested chain has one covered and one occupied rail', () => {
		const outer = makeSidecar( { position: 'left', railChildren: 1 } );
		const inner = document.createElement( 'div' );
		inner.className = 'nb-sidecar nb-sidecar--sidebar-right nb-content-layout-grid';
		const innerContent = document.createElement( 'div' );
		innerContent.className = 'nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid';
		const innerRail = document.createElement( 'div' );
		innerRail.className = 'nb-sidecar-area nb-sidecar-area--sidebar';
		inner.appendChild( innerContent );
		inner.appendChild( innerRail );
		outer.content.appendChild( inner );

		const wide = makeBlock( 'wp-block-image alignwide' );
		innerContent.appendChild( wide );

		expect( shouldSkipForCssCoveredRails( wide ) ).toBe( false );
	} );

	it( 'never skips pull-outs — layers 1/2 do not reproduce their placement', () => {
		const { content } = makeSidecar( { railChildren: 0 } );
		const pullout = makeBlock( 'wp-block-image alignleft' );
		content.appendChild( pullout );

		expect( shouldSkipForCssCoveredRails( pullout ) ).toBe( false );
	} );

	it( 'is honored by the engine only when the frontend option is on', () => {
		const { content } = makeSidecar( { railChildren: 0 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		setRect( wide, { top: 0, bottom: 100, left: 0, right: 800, width: 800, height: 100 } );
		content.appendChild( wide );

		measureBreakClassesPass( [ wide ], { skipCssCoveredRails: true } );
		expect( wide.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( wide.classList.contains( 'break-align-right' ) ).toBe( false );

		measureBreakClassesPass( [ wide ], { skipCssCoveredRails: false } );
		expect( wide.classList.contains( 'break-align-left' ) ).toBe( true );
		expect( wide.classList.contains( 'break-align-right' ) ).toBe( true );
	} );
} );

describe( 'batched read-then-write measurement (Task 3.4)', () => {
	it( 'reads in two batched phases (current, then all-extended) with no interleaved writes', () => {
		const { content } = makeSidecar( { railChildren: 1 } );
		const events = [];

		const instrument = ( el, label ) => {
			el.getBoundingClientRect = () => {
				events.push( `read:${ label }:temp=${ el.classList.contains( 'break-align-left' ) && el.classList.contains( 'break-align-right' ) }` );
				return { top: 500, bottom: 600, left: 0, right: 800, width: 800, height: 100 };
			};
		};

		const blockA = makeBlock( 'wp-block-image alignwide' );
		const blockB = makeBlock( 'wp-block-image alignwide' );
		instrument( blockA, 'A' );
		instrument( blockB, 'B' );
		content.appendChild( blockA );
		content.appendChild( blockB );

		measureBreakClassesPass( [ blockA, blockB ], { skipCssCoveredRails: false } );

		const measuredReads = events.filter( ( e ) => /^read:[AB]:/.test( e ) );
		// Each measured block is read exactly twice: once in the CURRENT
		// state (obstacle/context positions) and once in the ALL-extended
		// state (its own extended box) — two layout flushes per pass instead
		// of the old per-element toggle-measure-toggle thrash.
		expect( measuredReads ).toEqual( [
			'read:A:temp=false',
			'read:B:temp=false',
			'read:A:temp=true',
			'read:B:temp=true',
		] );
	} );

	it( 'reports whether any class changed (the fixpoint signal)', () => {
		const { content } = makeSidecar( { railChildren: 1 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		// Far below the rail content (rail child band 0..90) — no overlap.
		setRect( wide, { top: 500, bottom: 600, left: 0, right: 800, width: 800, height: 100 } );
		content.appendChild( wide );

		expect( measureBreakClassesPass( [ wide ], { skipCssCoveredRails: false } ) ).toBe( true );
		// Second pass computes the same result -> stable.
		expect( measureBreakClassesPass( [ wide ], { skipCssCoveredRails: false } ) ).toBe( false );
	} );

	it( 'runBreakAlignment runs a second fixpoint pass only when the first changed something', () => {
		const { content } = makeSidecar( { railChildren: 1 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		setRect( wide, { top: 500, bottom: 600, left: 0, right: 800, width: 800, height: 100 } );
		content.appendChild( wide );

		expect( runBreakAlignment( { skipCssCoveredRails: false, collect: () => [ wide ] } ) ).toBe( 2 );
		// Already stable -> a single pass, never a third.
		expect( runBreakAlignment( { skipCssCoveredRails: false, collect: () => [ wide ] } ) ).toBe( 1 );
	} );

	it( 'withholds exactly the side whose rail content vertically overlaps', () => {
		const { content } = makeSidecar( { railChildren: 1 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		// Overlaps the right-rail child band (0..90, x 900..1100) once extended.
		setRect( wide, { top: 20, bottom: 120, left: 0, right: 1200, width: 1200, height: 100 } );
		content.appendChild( wide );

		measureBreakClassesPass( [ wide ], { skipCssCoveredRails: false } );

		expect( wide.classList.contains( 'break-align-right' ) ).toBe( false );
		expect( wide.classList.contains( 'break-align-left' ) ).toBe( true );
	} );
} );

describe( 'honest pull-out row span (Task 3.4, replaces span 5)', () => {
	it( 'spans one row per vertically-overlapped following sibling', () => {
		const pulloutBox = { top: 0, bottom: 300 };
		const siblingBoxes = [
			{ top: 0, bottom: 80 },
			{ top: 80, bottom: 260 },
			{ top: 260, bottom: 290 },
			{ top: 310, bottom: 400 }, // below the pull-out — not spanned
		];
		expect( computePulloutRowSpan( pulloutBox, siblingBoxes ) ).toBe( 4 ); // self + 3
	} );

	it( 'never spans less than one row', () => {
		expect( computePulloutRowSpan( { top: 0, bottom: 10 }, [] ) ).toBe( 1 );
	} );

	it( 'writes the span inline on broken pull-outs and clears it on cleanup', () => {
		const { content } = makeSidecar( { position: 'right', railChildren: 0 } );
		const pullout = makeBlock( 'wp-block-image alignleft' );
		setRect( pullout, { top: 0, bottom: 200, left: 0, right: 300, width: 300, height: 200 } );
		const para = document.createElement( 'p' );
		setRect( para, { top: 0, bottom: 150, left: 320, right: 800, width: 480, height: 150 } );
		const after = document.createElement( 'p' );
		setRect( after, { top: 210, bottom: 300, left: 320, right: 800, width: 480, height: 90 } );
		content.appendChild( pullout );
		content.appendChild( para );
		content.appendChild( after );

		measureBreakClassesPass( [ pullout ], { skipCssCoveredRails: false } );

		expect( pullout.classList.contains( 'break-align-left' ) ).toBe( true );
		expect( pullout.style.getPropertyValue( 'grid-row-end' ) ).toBe( 'span 2' );

		cleanupBreakClasses();
		expect( pullout.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( pullout.style.getPropertyValue( 'grid-row-end' ) ).toBe( '' );
	} );
} );
