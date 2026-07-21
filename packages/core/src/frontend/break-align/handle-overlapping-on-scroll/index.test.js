/**
 * Sticky rail overlap (Task 3.5): IntersectionObserver-driven fade instead
 * of the per-frame RAF scroll loop.
 */

jest.mock( '@wordpress/dom-ready', () => ( cb ) => cb() );

jest.mock( '@novablocks/utils', () => ( {
	debounce: ( fn ) => fn,
	matches: ( el, selector ) => el.matches( selector ),
	doOverlap: ( el1, el2 ) => {
		const a = el1.getBoundingClientRect();
		const b = el2.getBoundingClientRect();
		return ! ( b.bottom <= a.top || b.top >= a.bottom || b.right <= a.left || b.left >= a.right );
	},
} ) );

jest.mock( '../dom-change-subscription', () => ( {
	subscribeToDomChanges: jest.fn( () => () => {} ),
} ) );

import { getOverlappingSets, toggleOverlappingClassname, handleOverlappingOnScroll } from './index';
import { subscribeToDomChanges } from '../dom-change-subscription';

const setRect = ( el, rect ) => {
	el.getBoundingClientRect = () => ( { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0, ...rect } );
};

const buildStickySidecar = () => {
	document.body.innerHTML = '';
	const sidecar = document.createElement( 'div' );
	sidecar.className = 'nb-sidecar nb-sidecar--sidebar-right nb-sidecar--sticky-sidebar';
	const content = document.createElement( 'div' );
	content.className = 'nb-sidecar-area nb-sidecar-area--content';
	const rail = document.createElement( 'div' );
	rail.className = 'nb-sidecar-area nb-sidecar-area--sidebar';

	const wide = document.createElement( 'figure' );
	wide.className = 'wp-block-image alignwide';
	setRect( wide, { top: 400, bottom: 700, left: 0, right: 1200 } );
	content.appendChild( wide );

	const railNote = document.createElement( 'p' );
	rail.appendChild( railNote );
	const sticky = document.createElement( 'div' );
	sticky.className = 'wp-block-group';
	setRect( sticky, { top: 100, bottom: 300, left: 900, right: 1100 } );
	rail.appendChild( sticky );

	sidecar.appendChild( content );
	sidecar.appendChild( rail );
	document.body.appendChild( sidecar );

	return { sidecar, content, rail, sticky, wide };
};

describe( 'overlap set collection', () => {
	it( 'pairs the sticky last rail item with the sidecar aligned blocks, excluding rail children', () => {
		const { sticky, wide } = buildStickySidecar();

		const sets = getOverlappingSets();

		expect( sets.length ).toBe( 1 );
		expect( sets[ 0 ][ 0 ] ).toBe( sticky );
		expect( sets[ 0 ][ 1 ] ).toEqual( [ wide ] );
	} );
} );

describe( 'overlap class application', () => {
	it( 'adds the hidden class on overlap and removes it when clear', () => {
		const { sticky, wide } = buildStickySidecar();
		const sets = getOverlappingSets();

		// Overlapping vertical bands + shared horizontal range.
		setRect( wide, { top: 150, bottom: 450, left: 0, right: 1200 } );
		toggleOverlappingClassname( sets );
		expect( sticky.classList.contains( 'novablocks-hidden-block' ) ).toBe( true );

		setRect( wide, { top: 400, bottom: 700, left: 0, right: 1200 } );
		toggleOverlappingClassname( sets );
		expect( sticky.classList.contains( 'novablocks-hidden-block' ) ).toBe( false );
	} );
} );

describe( 'IntersectionObserver wiring (replaces the RAF loop)', () => {
	let ioInstances;

	beforeEach( () => {
		ioInstances = [];
		window.IntersectionObserver = class {
			constructor( callback, options ) {
				this.callback = callback;
				this.options = options;
				this.targets = [];
				ioInstances.push( this );
			}
			observe( target ) { this.targets.push( target ); }
			disconnect() { this.targets = []; }
		};
		subscribeToDomChanges.mockClear();
	} );

	it( 'observes sticky and blocks, re-evaluates on intersection events, and re-collects on DOM change', () => {
		const { sticky, wide } = buildStickySidecar();

		handleOverlappingOnScroll();

		const observed = ioInstances.flatMap( ( io ) => io.targets );
		expect( observed ).toContain( sticky );
		expect( observed ).toContain( wide );

		// Simulate scroll bringing the wide block under the sticky item,
		// delivered as an intersection event — no RAF loop involved.
		setRect( wide, { top: 150, bottom: 450, left: 0, right: 1200 } );
		ioInstances.forEach( ( io ) => io.callback( [], io ) );
		expect( sticky.classList.contains( 'novablocks-hidden-block' ) ).toBe( true );

		setRect( wide, { top: 400, bottom: 700, left: 0, right: 1200 } );
		ioInstances.forEach( ( io ) => io.callback( [], io ) );
		expect( sticky.classList.contains( 'novablocks-hidden-block' ) ).toBe( false );

		// The module reuses the shared delegated observer — no second
		// MutationObserver of its own.
		expect( subscribeToDomChanges ).toHaveBeenCalledTimes( 1 );
	} );
} );
