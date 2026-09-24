jest.mock( '@novablocks/utils', () => ( {
	below: () => true,
	addClass: ( element, className ) => {
		if ( element ) {
			element.classList.add( ...className.split( ' ' ).filter( Boolean ) );
		}
	},
	removeClass: ( element, className ) => {
		if ( element ) {
			element.classList.remove( ...className.split( ' ' ).filter( Boolean ) );
		}
	},
	hasClass: ( element, className ) => !! element && element.classList.contains( className ),
	debounce: ( callback ) => callback,
	onScrollRAF: jest.fn(),
	toggleClass: ( element, className, force ) => {
		if ( element ) {
			element.classList.toggle( className, force );
		}
	},
} ) );

jest.mock( './header-colors', () => {
	return jest.fn().mockImplementation( ( element ) => ( {
		element,
		toggleColors: jest.fn(),
	} ) );
} );

import HeaderMobile from './header-mobile';
import { findLargestFittingSize } from './fit-text';

// A minimal IntersectionObserver the tests can drive.
class FakeIntersectionObserver {
	constructor( callback, options ) {
		this.callback = callback;
		this.options = options;
		this.observed = [];
		FakeIntersectionObserver.last = this;
	}

	observe( element ) {
		this.observed.push( element );
	}

	disconnect() {
		this.observed = [];
	}

	fire( isIntersecting ) {
		this.callback( this.observed.map( target => ( { target, isIntersecting } ) ) );
	}
}

const renderHeader = ( placement ) => {
	document.body.innerHTML = `
		<input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox">
		<button class="c-menu-toggle" type="button" data-menu-toggle-checkbox="nova-menu-toggle" aria-expanded="false">Menu</button>
		<header class="nb-header nb-header--main sm-palette-1 sm-variation-1" style="--nb-header-logo-height-setting: 30; --nb-mobile-header-logo-height-setting: 24"
			${ placement ? `data-mobile-brand-placement="${ placement }"` : '' }>
			<div class="nb-header__inner-container">
				<div class="nb-header-row nb-header-row--primary nb-header-background sm-palette-1 sm-variation-12" id="row-1">
					<div class="nb-header-row__inner-container">
						<div class="nb-site-identity c-branding" id="brand">
							<p class="wp-block-site-title has-fit-text" style="font-size: 96px" data-wp-interactive="core/fit-text" data-wp-init---core-fit-text="core/fit-text::callbacks.init"><a href="/" rel="home">IRIS</a></p>
							<p class="wp-block-site-tagline">Kindergarten</p>
						</div>
						<nav class="nb-navigation"><ul class="menu"><li id="menu-item-1"><a href="/about">About</a></li></ul></nav>
						<nav class="wp-block-navigation"><ul><li><a href="/x">X</a></li></ul></nav>
					</div>
				</div>
				<div class="nb-header-row nb-header-row--secondary" id="row-2">
					<nav class="nb-navigation"><ul class="menu"><li><a href="/contact">Contact</a></li></ul></nav>
				</div>
			</div>
		</header>
		<main id="main"></main>
	`;

	const element = document.querySelector( '.nb-header' );
	const parent = {
		element,
		rows: [ ...element.querySelectorAll( '.nb-header-row' ) ].map( row => ( { element: row } ) ),
		allowsTransparency: true,
		colorsElement: element,
	};

	return new HeaderMobile( parent );
};

describe( 'HeaderMobile brand placement', () => {
	const realIO = window.IntersectionObserver;

	beforeEach( () => {
		window.IntersectionObserver = FakeIntersectionObserver;
		FakeIntersectionObserver.last = null;
	} );

	afterEach( () => {
		window.IntersectionObserver = realIO;
		document.body.innerHTML = '';
		document.body.removeAttribute( 'style' );
	} );

	it( 'keeps today\'s bar branding by default (no attribute) and adds no masthead', () => {
		const header = renderHeader( null );

		expect( document.querySelector( '.nb-header__mobile-masthead' ) ).toBeNull();
		expect( header.element.querySelector( '.nb-header__mobile-brand' ) ).not.toBeNull();
		expect( header.brandPlacement ).toBe( 'bar' );
		expect( FakeIntersectionObserver.last ).toBeNull();
	} );

	it( 'treats an unknown value as the default', () => {
		const header = renderHeader( 'sideways' );

		expect( header.brandPlacement ).toBe( 'bar' );
		expect( document.querySelector( '.nb-header__mobile-masthead' ) ).toBeNull();
	} );

	describe( 'below the bar', () => {
		it( 'moves the branding row, at full size, into a masthead right after the bar', () => {
			const header = renderHeader( 'below' );
			const masthead = document.querySelector( '.nb-header__mobile-masthead' );

			expect( masthead ).not.toBeNull();
			expect( header.element.nextElementSibling ).toBe( masthead );
			expect( header.element.querySelector( '.nb-header__mobile-brand' ) ).toBeNull();

			// The masthead carries the branding row's Color Signal (a dark masthead band stays dark);
			// the clone sheds its own palette classes so transparency can be toggled on the wrapper.
			const row = masthead.querySelector( '.nb-header-row' );
			expect( masthead.classList.contains( 'sm-variation-12' ) ).toBe( true );
			expect( [ ...row.classList ].some( name => name.startsWith( 'sm-' ) ) ).toBe( false );
			expect( row.querySelector( '.wp-block-site-title' ).textContent ).toBe( 'IRIS' );
			expect( row.querySelector( '.wp-block-site-tagline' ).textContent ).toBe( 'Kindergarten' );
		} );

		it( 'leaves navigation to the drawer and never duplicates ids', () => {
			renderHeader( 'below' );
			const masthead = document.querySelector( '.nb-header__mobile-masthead' );

			expect( masthead.querySelector( '.nb-navigation, .wp-block-navigation' ) ).toBeNull();
			expect( masthead.querySelectorAll( '[id]' ) ).toHaveLength( 0 );
			expect( document.querySelectorAll( '#brand' ) ).toHaveLength( 1 );
			expect( document.querySelector( '.nb-header--main .nb-navigation' ) ).not.toBeNull();
		} );

		it( 'hands fit-text to Nova (no inert Interactivity directives, no stale desktop size)', () => {
			renderHeader( 'below' );
			const title = document.querySelector( '.nb-header__mobile-masthead .wp-block-site-title' );

			expect( [ ...title.attributes ].some( attribute => attribute.name.startsWith( 'data-wp-' ) ) ).toBe( false );
			expect( title.style.fontSize ).not.toBe( '96px' );
			expect( title.classList.contains( 'nb-fit-text' ) ).toBe( true );
		} );

		it( 'carries the Header sizing variables so the row keeps its design size', () => {
			renderHeader( 'below' );
			const masthead = document.querySelector( '.nb-header__mobile-masthead' );

			expect( masthead.style.getPropertyValue( '--nb-header-logo-height-setting' ).trim() ).toBe( '30' );
			expect( masthead.classList.contains( 'nb-header--transparent' ) ).toBe( true );
		} );

		it( 'counts the masthead in the height the page reserves, but not in the sticky offset', () => {
			const header = renderHeader( 'below' );
			const masthead = document.querySelector( '.nb-header__mobile-masthead' );

			header.element.getBoundingClientRect = () => ( { top: 0, height: 60, width: 390 } );
			masthead.getBoundingClientRect = () => ( { top: 60, height: 140, width: 390 } );
			header.onResize();

			expect( header.getHeight() ).toBe( 200 );
			expect( header.getStickyHeight() ).toBe( 60 );
		} );

		it( 'takes the masthead out of focus and the accessibility tree while the menu drawer covers it', () => {
			const header = renderHeader( 'below' );
			const masthead = document.querySelector( '.nb-header__mobile-masthead' );

			header.onToggleChange( { target: { checked: true } } );
			expect( masthead.inert ).toBe( true );

			header.onToggleChange( { target: { checked: false } } );
			expect( masthead.inert ).toBe( false );
		} );

		it( 'does not fold: no observer and no compact brand in the bar', () => {
			renderHeader( 'below' );

			expect( FakeIntersectionObserver.last ).toBeNull();
		} );
	} );

	describe( 'below the bar, folding into it', () => {
		it( 'keeps a compact brand in the bar, hidden while the masthead is in view', () => {
			const header = renderHeader( 'below-fold' );

			expect( header.element.querySelector( '.nb-header__mobile-brand' ) ).not.toBeNull();
			expect( header.element.classList.contains( 'nb-header--brand-folded' ) ).toBe( false );
			expect( header.element.classList.contains( 'nb-header--brand-foldable' ) ).toBe( true );
		} );

		it( 'keeps the brand link a single tab stop: the compact copy is a hidden visual duplicate', () => {
			const header = renderHeader( 'below-fold' );
			const compact = header.element.querySelector( '.nb-header__mobile-brand' );

			expect( compact.getAttribute( 'aria-hidden' ) ).toBe( 'true' );
			expect( [ ...compact.querySelectorAll( 'a' ) ].every( link => link.getAttribute( 'tabindex' ) === '-1' ) ).toBe( true );
			expect( document.querySelector( '.nb-header__mobile-masthead a[href="/"]' ).hasAttribute( 'tabindex' ) ).toBe( false );
		} );

		it( 'shows the compact brand once the masthead scrolls under the bar, and hides it again on the way back', () => {
			const header = renderHeader( 'below-fold' );
			const observer = FakeIntersectionObserver.last;

			expect( observer.observed ).toEqual( [ document.querySelector( '.nb-header__mobile-masthead' ) ] );

			observer.fire( false );
			expect( header.element.classList.contains( 'nb-header--brand-folded' ) ).toBe( true );

			observer.fire( true );
			expect( header.element.classList.contains( 'nb-header--brand-folded' ) ).toBe( false );
		} );

		it( 'watches the masthead against the area below the sticky bar', () => {
			const header = renderHeader( 'below-fold' );

			header.element.getBoundingClientRect = () => ( { top: 0, height: 64, width: 390 } );
			header.onResize();

			expect( FakeIntersectionObserver.last.options.rootMargin ).toBe( '-64px 0px 0px 0px' );
		} );
	} );
} );

describe( 'fit-text search', () => {
	it( 'finds the largest size that fits, like core\'s binary search', () => {
		expect( findLargestFittingSize( size => size <= 57, 0, 2400 ) ).toBe( 57 );
		expect( findLargestFittingSize( () => true, 0, 300 ) ).toBe( 300 );
		expect( findLargestFittingSize( () => false, 0, 300 ) ).toBe( 0 );
	} );
} );
