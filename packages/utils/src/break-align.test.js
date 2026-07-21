/**
 * Break-align measurement module tests.
 *
 * Task 3.3 covers the per-block control skip predicate; Task 3.4 extends
 * this file with the batched-measurement rewrite tests (jsdom caveats per
 * napkin: stub getComputedStyle, use style.removeProperty).
 */

// The utils barrel initializes matchMedia-based media queries at import time,
// which jsdom does not provide — mock the pieces break-align consumes.
jest.mock( './index', () => ( {
	addClass: ( el, classes ) => classes.split( /\s+/ ).forEach( ( c ) => el.classList.add( c ) ),
	removeClass: ( el, classes ) => classes.split( /\s+/ ).forEach( ( c ) => el.classList.remove( c ) ),
	matches: ( el, selector ) => el.matches( selector ),
} ) );

import { shouldMeasureBreakClasses, maybeAddBreakClassesToElement } from './break-align';

const makeBlock = ( className ) => {
	const el = document.createElement( 'figure' );
	el.className = className;
	return el;
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

		// No parent, no sidecar context — measurement would normally still
		// evaluate siblings; the skip must exit before ANY of that.
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
