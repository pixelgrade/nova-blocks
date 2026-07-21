jest.mock( '@novablocks/utils', () => ( {
	above: () => true,
	below: () => false,
	matches: ( element, selector ) => !! element && element.matches( selector ),
	addClass: ( element, className ) => {
		if ( element ) {
			element.classList.add( ...className.split( ' ' ).filter( Boolean ) );
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

jest.mock( './header-mobile', () => {
	return jest.fn().mockImplementation( () => ( {
		getHeight: () => 0,
	} ) );
} );

jest.mock( './header-sticky', () => jest.fn() );

jest.mock( './initialize-reading-bar', () => ( {
	initializeReadingBar: jest.fn(),
} ) );

describe( 'Header frontend initialization', () => {
	beforeEach( () => {
		document.body.innerHTML = '';
		document.documentElement.style.cssText = '';
	} );

	it( 'marks the header ready when the adjacent main element is empty', () => {
		document.body.innerHTML = `
			<header class="nb-header" data-layout="logo-left">
				<div class="nb-header__inner-container">
					<div class="nb-header-row" data-is-primary="true"></div>
				</div>
			</header>
			<main class="wp-block-group"></main>
		`;

		const Header = require( './index' ).default;
		const header = document.querySelector( '.nb-header' );
		const main = document.querySelector( 'main' );

		expect( () => new Header( header ) ).not.toThrow();
		expect( header.classList.contains( 'nb-header--ready' ) ).toBe( true );
		expect( main.classList.contains( 'nb-header-neighbour' ) ).toBe( true );
	} );

	it( 're-measures the header and neighbour padding after webfonts settle', async () => {
		document.body.innerHTML = `
			<header class="nb-header" data-layout="logo-left">
				<div class="nb-header__inner-container">
					<div class="nb-header-row" data-is-primary="true"></div>
				</div>
			</header>
			<main class="wp-block-group"></main>
		`;

		let resolveFontsReady;
		Object.defineProperty( document, 'fonts', {
			configurable: true,
			value: { ready: new Promise( ( resolve ) => { resolveFontsReady = resolve; } ) },
		} );

		const Header = require( './index' ).default;
		const header = document.querySelector( '.nb-header' );
		const main = document.querySelector( 'main' );

		// jsdom returns '' for unresolved computed values and serves stale
		// values after inline styles are cleared; resolve from inline styles
		// so the padding carry math sees real, current px values.
		const realGetComputedStyle = window.getComputedStyle;
		window.getComputedStyle = ( element ) => ( {
			getPropertyValue: ( property ) => element.style.getPropertyValue( property ) || '0px',
		} );

		let headerHeight = 300;
		header.getBoundingClientRect = () => ( { top: 0, height: headerHeight } );

		new Header( header );
		expect( main.style.paddingTop ).toBe( '300px' );

		// A display webfont finishing to load can grow the header without
		// firing a window resize.
		headerHeight = 460;
		resolveFontsReady();
		await document.fonts.ready;

		expect( main.style.paddingTop ).toBe( '460px' );

		window.getComputedStyle = realGetComputedStyle;
		delete document.fonts;
	} );
} );
