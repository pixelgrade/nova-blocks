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

const renderHeader = ( menuItems = '' ) => {
	document.body.innerHTML = `
		<input class="c-menu-toggle__checkbox" id="nova-menu-toggle" type="checkbox">
		<button class="c-menu-toggle" type="button" data-menu-toggle-checkbox="nova-menu-toggle" aria-expanded="false">
			<span class="screen-reader-text">Menu</span>
		</button>
		<header class="nb-header nb-header--main">
			<div class="nb-header__inner-container">
				<div class="nb-header-row">
					<div class="c-branding"><a class="site-title" href="/">Iris</a></div>
					<nav class="nb-navigation">
						<ul class="menu">
							<li id="menu-item-1" class="menu-item"><a href="/about">About</a></li>
							${ menuItems }
						</ul>
					</nav>
				</div>
			</div>
		</header>
	`;

	const element = document.querySelector( '.nb-header' );
	const parent = {
		element,
		rows: [ { element: element.querySelector( '.nb-header-row' ) } ],
		allowsTransparency: false,
		colorsElement: element,
	};

	return new HeaderMobile( parent );
};

const telCta = `<li id="menu-item-9" class="menu-item is-cta-button"><a id="cta-link" href="tel:+40700000000">Call us</a></li>`;
const cart = `<li class="menu-item menu-item--cart"><a href="/cart">Cart</a></li>`;

describe( 'HeaderMobile navigation CTA', () => {
	afterEach( () => {
		document.body.innerHTML = '';
		document.body.removeAttribute( 'style' );
	} );

	it( 'leaves the mobile bar unchanged when the navigation has no CTA item', () => {
		const header = renderHeader( cart );

		expect( header.element.querySelector( '.nb-header__mobile-actions' ) ).toBeNull();
		expect( header.element.querySelector( '.nb-header__mobile-cta' ) ).toBeNull();
		expect( header.element.classList.contains( 'nb-header--has-mobile-cta' ) ).toBe( false );
		expect( header.element.lastElementChild.classList.contains( 'menu-item--cart' ) ).toBe( true );
		expect( header.element.style.getPropertyValue( '--nb-header-mobile-actions-width' ) ).toBe( '' );
	} );

	it( 'shows a tel: CTA in the mobile bar with an accessible name and a phone icon', () => {
		const header = renderHeader( telCta );
		const cta = header.element.querySelector( '.nb-header__mobile-actions .nb-header__mobile-cta' );
		const link = cta?.querySelector( 'a' );

		expect( header.element.classList.contains( 'nb-header--has-mobile-cta' ) ).toBe( true );
		expect( link.getAttribute( 'href' ) ).toBe( 'tel:+40700000000' );
		expect( link.getAttribute( 'aria-label' ) ).toBe( 'Call us' );
		expect( link.querySelector( '.nb-header__mobile-cta-label' ).textContent ).toBe( 'Call us' );
		expect( link.querySelector( 'svg' ).getAttribute( 'aria-hidden' ) ).toBe( 'true' );
		expect( cta.classList.contains( 'nb-header__mobile-cta--has-icon' ) ).toBe( true );
	} );

	it( 'does not duplicate ids and keeps the drawer item in place', () => {
		const header = renderHeader( telCta );

		expect( header.element.querySelectorAll( '[id]' ) ).toHaveLength( 0 );
		expect( document.querySelectorAll( '#menu-item-9' ) ).toHaveLength( 1 );
		expect( document.querySelectorAll( '#cta-link' ) ).toHaveLength( 1 );
		expect( document.querySelector( '.nb-header--main .is-cta-button a' ).getAttribute( 'href' ) ).toBe( 'tel:+40700000000' );
	} );

	it( 'keeps a text label without an icon for non-tel CTAs and preserves an existing accessible name', () => {
		const header = renderHeader( `<li class="menu-item is-cta-button"><a href="/book" aria-label="Book a visit">Book a visit to our garden</a></li>` );
		const cta = header.element.querySelector( '.nb-header__mobile-cta' );
		const link = cta.querySelector( 'a' );

		expect( cta.classList.contains( 'nb-header__mobile-cta--has-icon' ) ).toBe( false );
		expect( link.querySelector( 'svg' ) ).toBeNull();
		expect( link.getAttribute( 'aria-label' ) ).toBe( 'Book a visit' );
		expect( link.getAttribute( 'title' ) ).toBe( 'Book a visit to our garden' );
	} );

	it( 'groups the CTA before the cart so they cannot overlap', () => {
		const header = renderHeader( telCta + cart );
		const actions = header.element.querySelector( '.nb-header__mobile-actions' );

		expect( Array.from( actions.children ).map( child => child.classList.contains( 'nb-header__mobile-cta' ) ? 'cta' : 'cart' ) )
			.toEqual( [ 'cta', 'cart' ] );
		expect( header.element.querySelectorAll( '.menu-item--cart' ) ).toHaveLength( 1 );
	} );

	it( 'only promotes the first top-level CTA and ignores CTAs without a link', () => {
		const header = renderHeader( `<li class="menu-item is-cta-button"><span>Nope</span></li>` );

		expect( header.element.querySelector( '.nb-header__mobile-cta' ) ).toBeNull();
	} );

	it( 'publishes the actions width so the centered brand can reserve room for it', () => {
		const header = renderHeader( telCta );
		const actions = header.element.querySelector( '.nb-header__mobile-actions' );

		actions.getBoundingClientRect = () => ( { width: 112 } );
		header.onResize();

		expect( header.element.style.getPropertyValue( '--nb-header-mobile-actions-width' ) ).toBe( '112px' );
	} );

	describe( 'fitting the CTA next to the brand', () => {
		const realGetComputedStyle = window.getComputedStyle;

		afterEach( () => {
			window.getComputedStyle = realGetComputedStyle;
		} );

		// Lay out a bar of `barWidth` (20px side padding) with a brand of
		// `brandWidth`; the CTA link is `labelWidth` wide, or 44px icon-only.
		const layOut = ( header, { barWidth, brandWidth, labelWidth } ) => {
			const bar = header.element;
			const cta = bar.querySelector( '.nb-header__mobile-cta' );
			const link = cta.querySelector( 'a' );
			const linkWidth = () => {
				if ( cta.classList.contains( 'nb-header__mobile-cta--hidden' ) ) {
					return 0;
				}
				if ( cta.classList.contains( 'nb-header__mobile-cta--icon-only' ) ) {
					return 44;
				}
				const maxWidth = parseFloat( bar.style.getPropertyValue( '--nb-header-mobile-cta-max-width' ) );
				return Number.isNaN( maxWidth ) ? labelWidth : Math.min( labelWidth, maxWidth );
			};

			Object.defineProperty( bar, 'clientWidth', { configurable: true, value: barWidth } );
			window.getComputedStyle = ( element ) => ( {
				getPropertyValue: ( property ) => element === bar && property.startsWith( 'padding-' ) ? '20px' : '',
			} );
			bar.querySelector( '.nb-header__mobile-brand' ).getBoundingClientRect = () => ( { width: brandWidth } );
			link.getBoundingClientRect = () => ( { width: linkWidth() } );
			header.mobileActions.getBoundingClientRect = () => ( { width: linkWidth() } );

			header.onResize();

			return { bar, cta };
		};

		it( 'keeps the tel: label when it fits beside the brand', () => {
			const { bar, cta } = layOut( renderHeader( telCta ), { barWidth: 430, brandWidth: 120, labelWidth: 110 } );

			expect( cta.classList.contains( 'nb-header__mobile-cta--icon-only' ) ).toBe( false );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-actions-width' ) ).toBe( '110px' );
			expect( bar.classList.contains( 'nb-header--measuring-mobile-cta' ) ).toBe( false );
		} );

		it( 'drops a crowding tel: CTA to its icon before the brand has to wrap', () => {
			const { bar, cta } = layOut( renderHeader( telCta ), { barWidth: 390, brandWidth: 150, labelWidth: 123 } );

			expect( cta.classList.contains( 'nb-header__mobile-cta--icon-only' ) ).toBe( true );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-cta-max-width' ) ).toBe( '' );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-actions-width' ) ).toBe( '44px' );
		} );

		it( 'restores the label when the bar grows again', () => {
			const header = renderHeader( telCta );

			layOut( header, { barWidth: 390, brandWidth: 150, labelWidth: 123 } );
			const { cta } = layOut( header, { barWidth: 600, brandWidth: 150, labelWidth: 123 } );

			expect( cta.classList.contains( 'nb-header__mobile-cta--icon-only' ) ).toBe( false );
		} );

		it( 'truncates a crowding text CTA to the room beside the brand', () => {
			const { bar, cta } = layOut(
				renderHeader( `<li class="menu-item is-cta-button"><a href="/book">Book a visit to our garden</a></li>` ),
				{ barWidth: 430, brandWidth: 150, labelWidth: 200 }
			);

			// Room per side: (390 - 150) / 2 - 12 = 108px.
			expect( cta.classList.contains( 'nb-header__mobile-cta--icon-only' ) ).toBe( false );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-cta-max-width' ) ).toBe( '108px' );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-actions-width' ) ).toBe( '108px' );
		} );

		it( 'fits against the positioned bar, not its in-flow width while HeaderBase measures', () => {
			const header = renderHeader( `<li class="menu-item is-cta-button"><a href="/visit">Visit</a></li>` );
			const bar = header.element;

			// Positioned (absolute/fixed) the bar spans the viewport; in flow,
			// while its position is cleared, it sits inside padded ancestors.
			const { cta } = layOut( header, { barWidth: 390, brandWidth: 128, labelWidth: 78 } );
			Object.defineProperty( bar, 'clientWidth', {
				configurable: true,
				get: () => bar.style.position ? 390 : 330,
			} );
			header.onResize();

			// Positioned room: (350 - 128) / 2 - 12 = 99px; in flow only 69px.
			expect( cta.classList.contains( 'nb-header__mobile-cta--hidden' ) ).toBe( false );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-cta-max-width' ) ).toBe( '' );
		} );

		it( 'leaves a text CTA to the drawer when truncation would leave a few letters', () => {
			const header = renderHeader( `<li class="menu-item is-cta-button"><a href="/book">Book a visit to our garden</a></li>` );
			const { bar, cta } = layOut( header, { barWidth: 390, brandWidth: 200, labelWidth: 200 } );

			// Room per side: (350 - 200) / 2 - 12 = 63px < 96px readable minimum.
			expect( cta.classList.contains( 'nb-header__mobile-cta--hidden' ) ).toBe( true );
			expect( bar.style.getPropertyValue( '--nb-header-mobile-cta-max-width' ) ).toBe( '' );
			expect( document.querySelector( '.nb-header--main .is-cta-button a' ) ).not.toBeNull();

			// Room returns on a wider bar.
			layOut( header, { barWidth: 700, brandWidth: 200, labelWidth: 200 } );
			expect( cta.classList.contains( 'nb-header__mobile-cta--hidden' ) ).toBe( false );
		} );
	} );
} );
