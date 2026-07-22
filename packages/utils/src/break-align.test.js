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
	shouldSkipForCssCoveredRails,
	getAdjacentSidebarBlocks,
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

/**
 * Builds a THREE-area sidecar (left rail, content, right rail) with resolved
 * per-side rail classes — the Task 4.1 block model. `position` is deliberately
 * `none` by default: a three-area sidecar cannot express both rails through a
 * single `sidebarPosition`, so the side must come from each rail's own class.
 */
const makeThreeAreaSidecar = ( { leftChildren = 0, rightChildren = 0, position = 'none' } = {} ) => {
	const sidecar = document.createElement( 'div' );
	sidecar.className = `nb-sidecar nb-sidecar--sidebar-${ position } nb-content-layout-grid`;

	const leftRail = document.createElement( 'div' );
	leftRail.className = 'nb-sidecar-area nb-sidecar-area--sidebar nb-sidecar-area--sidebar-left';
	leftRail.appendChild( document.createTextNode( '\n' ) );

	const content = document.createElement( 'div' );
	content.className = 'nb-sidecar-area nb-sidecar-area--content nb-content-layout-grid';

	const rightRail = document.createElement( 'div' );
	rightRail.className = 'nb-sidecar-area nb-sidecar-area--sidebar nb-sidecar-area--sidebar-right';
	rightRail.appendChild( document.createTextNode( '\n' ) );

	const fill = ( rail, count, x ) => {
		for ( let i = 0; i < count; i++ ) {
			const p = document.createElement( 'p' );
			setRect( p, { top: i * 100, bottom: i * 100 + 90, left: x, right: x + 200, width: 200, height: 90 } );
			rail.appendChild( p );
		}
	};
	fill( leftRail, leftChildren, 0 );
	fill( rightRail, rightChildren, 900 );

	sidecar.appendChild( leftRail );
	sidecar.appendChild( content );
	sidecar.appendChild( rightRail );
	document.body.appendChild( sidecar );
	return { sidecar, leftRail, content, rightRail };
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
		const { content } = makeSidecar( { railChildren: 1 } );
		const always = makeBlock( 'wp-block-image alignwide nb-break-always' );
		const never = makeBlock( 'wp-block-image alignwide nb-break-never' );

		setRect( always, { top: 500, bottom: 600, left: 0, right: 800, width: 800, height: 100 } );
		setRect( never, { top: 700, bottom: 800, left: 0, right: 800, width: 800, height: 100 } );
		content.appendChild( always );
		content.appendChild( never );

		measureBreakClassesPass( [ always, never ], { skipCssCoveredRails: false } );

		expect( always.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( always.classList.contains( 'break-align-right' ) ).toBe( false );
		expect( never.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( never.classList.contains( 'break-align-right' ) ).toBe( false );
	} );

	// Wrap-wins (Task 4b.2): a text-wrap pull-out owns its own geometry (a float
	// inside a .nb-flow-segment on the frontend), so measurement must treat it as
	// DECIDED and never add break-align-* grid classes to it.
	it( 'skips text-wrap pull-out blocks (nb-wrap-around / nb-wrap-extend)', () => {
		expect( shouldMeasureBreakClasses( makeBlock( 'wp-block-image alignright nb-wrap-around' ) ) ).toBe( false );
		expect( shouldMeasureBreakClasses( makeBlock( 'wp-block-image alignleft nb-wrap-extend' ) ) ).toBe( false );
	} );

	it( 'never adds measured break classes to a wrap pull-out (wrap wins over measurement)', () => {
		const { content } = makeSidecar( { railChildren: 1 } );
		const wrap = makeBlock( 'wp-block-image alignright nb-wrap-around' );

		setRect( wrap, { top: 500, bottom: 700, left: 0, right: 800, width: 800, height: 200 } );
		content.appendChild( wrap );

		measureBreakClassesPass( [ wrap ], { skipCssCoveredRails: false } );

		expect( wrap.classList.contains( 'break-align-left' ) ).toBe( false );
		expect( wrap.classList.contains( 'break-align-right' ) ).toBe( false );
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

	// Task 4.1 per-rail carry-over: an empty first rail beside an occupied
	// second rail must NOT falsely skip (the old first-child check did).
	it( 'does NOT skip when an empty left rail sits beside an occupied right rail (three-area)', () => {
		const { content } = makeThreeAreaSidecar( { leftChildren: 0, rightChildren: 2 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		expect( shouldSkipForCssCoveredRails( wide ) ).toBe( false );
	} );

	it( 'skips when BOTH rails of a three-area sidecar are element-empty', () => {
		const { content } = makeThreeAreaSidecar( { leftChildren: 0, rightChildren: 0 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		expect( shouldSkipForCssCoveredRails( wide ) ).toBe( true );
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

describe( 'per-rail obstacle collection (Task 4.1)', () => {
	it( 'labels obstacles by each rail\'s own resolved side, not the sidecar position', () => {
		const { content, rightRail } = makeThreeAreaSidecar( { leftChildren: 1, rightChildren: 1, position: 'none' } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		const obstacles = getAdjacentSidebarBlocks( wide );

		// Both rails contribute, each labeled by its OWN class — even though
		// the sidecar carries no position class (a three-area sidecar cannot
		// encode both rails through a single sidebarPosition).
		expect( obstacles.map( o => o.side ).sort() ).toEqual( [ 'left', 'right' ] );
		expect( obstacles.find( o => o.element === rightRail.firstElementChild ).side ).toBe( 'right' );
	} );

	it( 'collects obstacles from BOTH rails (a single-rail read would miss the second)', () => {
		const { content } = makeThreeAreaSidecar( { leftChildren: 2, rightChildren: 3 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		const obstacles = getAdjacentSidebarBlocks( wide );
		expect( obstacles.length ).toBe( 5 );
		expect( obstacles.filter( o => o.side === 'left' ).length ).toBe( 2 );
		expect( obstacles.filter( o => o.side === 'right' ).length ).toBe( 3 );
	} );

	it( 'still derives the side from the sidecar position for a legacy generic-only rail', () => {
		const { content } = makeSidecar( { position: 'left', railChildren: 1 } );
		const wide = makeBlock( 'wp-block-image alignwide' );
		content.appendChild( wide );

		const obstacles = getAdjacentSidebarBlocks( wide );
		expect( obstacles.length ).toBe( 1 );
		expect( obstacles[ 0 ].side ).toBe( 'left' );
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

describe( 'seed+verify pass shape (Task 3.4 review pinning)', () => {
	/**
	 * Setup shared by both shape tests: a right sidecar whose block always
	 * has its LEFT side blocked by an alignleft sibling (so a grant can only
	 * ever be one-sided — the applied state {R} is distinguishable from the
	 * temp-extended state {L,R}), and whose right-rail obstacle reports a
	 * DIFFERENT box depending on the world it is read in:
	 * - extended world (block carries BOTH temp classes): far away;
	 * - settled world: colliding with the block's extended span.
	 */
	const makeShapeFixture = () => {
		const { content, rail } = makeSidecar( { position: 'right', railChildren: 0 } );

		const block = makeBlock( 'wp-block-image alignwide' );
		setRect( block, { top: 0, bottom: 100, left: 0, right: 1200, width: 1200, height: 100 } );
		content.appendChild( block );

		const leftSibling = makeBlock( 'wp-block-image alignleft' );
		setRect( leftSibling, { top: 0, bottom: 100, left: 0, right: 300, width: 300, height: 100 } );
		content.appendChild( leftSibling );

		const railChild = document.createElement( 'p' );
		const railReads = [];
		railChild.getBoundingClientRect = () => {
			const extendedWorld = block.classList.contains( 'break-align-left' )
				&& block.classList.contains( 'break-align-right' );
			railReads.push( extendedWorld ? 'extended' : 'settled' );
			return extendedWorld
				? { top: 5000, bottom: 5100, left: 900, right: 1100, width: 200, height: 100 }
				: { top: 20, bottom: 120, left: 900, right: 1100, width: 200, height: 100 };
		};
		rail.appendChild( railChild );

		return { block, railReads };
	};

	it( 'measures obstacles in the temp-extended world on pass 1 and the settled world on pass 2', () => {
		const { block, railReads } = makeShapeFixture();

		runBreakAlignment( { skipCssCoveredRails: false, collect: () => [ block ] } );

		// Pass 1 (seed): the rail obstacle was read while the block carried
		// BOTH temp classes; pass 2 (verify): read before any temp write,
		// with only the applied one-sided grant present. Swapping the pass
		// contexts inverts this sequence.
		expect( railReads ).toEqual( [ 'extended', 'settled' ] );
	} );

	it( 'verify trims a seed grant that collides in the settled world', () => {
		const { block } = makeShapeFixture();

		const passes = runBreakAlignment( { skipCssCoveredRails: false, collect: () => [ block ] } );

		// Seed grants R (obstacle far away in the extended world -> changed),
		// verify reads the settled world, finds the collision and trims it.
		// With swapped contexts the cold pass already sees the collision,
		// withholds, nothing changes, and only ONE pass runs.
		expect( passes ).toBe( 2 );
		expect( block.classList.contains( 'break-align-right' ) ).toBe( false );
		expect( block.classList.contains( 'break-align-left' ) ).toBe( false );
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
