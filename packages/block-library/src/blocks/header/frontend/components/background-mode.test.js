// Exercise the real Header, HeaderColors, HeaderMobile, HeaderSticky, and menu
// button. Only the platform utility boundary (viewport/RAF/DOM helpers) is stubbed.
jest.mock( '@novablocks/utils', () => ( {
	above: () => global.window.innerWidth >= 1024,
	below: () => global.window.innerWidth < 1024,
	matches: ( element, selector ) => !! element?.matches( selector ),
	hasClass: ( element, classname ) => !! element?.classList.contains( classname ),
	getFirstChild: element => element?.firstElementChild,
	addClass: ( element, classes ) => element?.classList.add( ...classes.split( /\s+/ ).filter( Boolean ) ),
	removeClass: ( element, classes ) => element?.classList.remove( ...classes.split( /\s+/ ).filter( Boolean ) ),
	toggleClass: ( element, classname, force ) => element?.classList.toggle( classname, force ),
	debounce: callback => callback,
	onScrollRAF: jest.fn(),
} ) );

import Header from './index';
import { onScrollRAF } from '@novablocks/utils';

const authoredClasses = [ 'sm-palette-1', 'sm-variation-11', 'sm-color-signal-3' ];
const heroClasses = [ 'sm-palette-2', 'sm-variation-4', 'sm-color-signal-2' ];
const expectColors = ( element, classes ) => {
	classes.forEach( classname => expect( element.classList.contains( classname ) ).toBe( true ) );
};

const renderHeader = ( { mode, sticky = false, multiple = false, branding = true, ordinary = false } = {} ) => {
	document.body.innerHTML = `
		<input id="nova-menu-toggle" class="c-menu-toggle__checkbox" type="checkbox">
		<button class="c-menu-toggle sm-palette-1 sm-variation-7 sm-color-signal-3"
			data-menu-toggle-checkbox="nova-menu-toggle" type="button">Menu</button>
		<div class="nb-header nb-header--main sm-palette-1 sm-variation-7 sm-color-signal-3"
			data-layout="${ multiple ? 'logo-above' : 'logo-left' }"
			${ mode === undefined ? '' : `data-background-mode="${ mode }"` }>
			<div class="nb-header__inner-container">
				<div class="nb-header-row ${ authoredClasses.join( ' ' ) }"
					data-is-primary="true" ${ sticky ? 'data-is-sticky="true"' : '' }>
					${ branding ? '<div class="c-branding">Logo</div>' : '' }
				</div>
				${ multiple ? '<div class="nb-header-row sm-palette-3 sm-variation-8 sm-color-signal-1">Secondary</div>' : '' }
			</div>
		</div>
		<main class="${ ordinary ? 'sm-palette-1 sm-variation-1' : `alignfull ${ heroClasses.join( ' ' ) }` }"
			data-palette-variation="${ ordinary ? 1 : 4 }"><p>Content</p></main>
	`;
	const element = document.querySelector( '.nb-header--main' );
	return new Header( element );
};

const scroll = value => {
	onScrollRAF.mock.calls.forEach( ( [ callback ] ) => callback( value, 0 ) );
};

describe( 'authored Header background mode', () => {
	let resizeListeners;
	let realGetComputedStyle;

	beforeEach( () => {
		jest.useFakeTimers();
		onScrollRAF.mockClear();
		window.innerWidth = 1440;
		window.pageYOffset = 0;
		resizeListeners = [];
		const addEventListener = window.addEventListener.bind( window );
		jest.spyOn( window, 'addEventListener' ).mockImplementation( ( name, callback, options ) => {
			resizeListeners.push( [ name, callback ] );
			addEventListener( name, callback, options );
		} );
		realGetComputedStyle = window.getComputedStyle;
		window.getComputedStyle = element => ( {
			getPropertyValue: property => element.style.getPropertyValue( property ) || '0px',
		} );
	} );

	afterEach( () => {
		resizeListeners.forEach( ( [ name, callback ] ) => window.removeEventListener( name, callback ) );
		window.getComputedStyle = realGetComputedStyle;
		jest.restoreAllMocks();
		jest.clearAllTimers();
		jest.useRealTimers();
		document.body.innerHTML = '';
	} );

	it.each( [ undefined, 'transparent', 'unknown' ] )( 'preserves hero inheritance with mode %s', mode => {
		const header = renderHeader( { mode } );
		expect( header.element.classList.contains( 'nb-header--transparent' ) ).toBe( true );
		expectColors( header.rows[ 0 ].element, heroClasses );
	} );

	it( 'shows a static Solid header using its own row colors above ordinary content', () => {
		const header = renderHeader( { mode: 'solid', ordinary: true } );
		expect( header.element.classList.contains( 'nb-header--transparent' ) ).toBe( false );
		expectColors( header.rows[ 0 ].element, authoredClasses );
		scroll( 500 );
		expectColors( header.rows[ 0 ].element, authoredClasses );
	} );

	it( 'keeps Solid row colors over a hero through stick, unstick, and resize', () => {
		const header = renderHeader( { mode: 'solid', sticky: true } );
		expectColors( header.rows[ 0 ].element, authoredClasses );
		scroll( 500 );
		expect( header.element.classList.contains( 'nb-header--sticky' ) ).toBe( true );
		expectColors( header.rows[ 0 ].element, authoredClasses );
		scroll( 0 );
		window.dispatchEvent( new Event( 'resize' ) );
		expect( header.element.classList.contains( 'nb-header--transparent' ) ).toBe( false );
		expectColors( header.rows[ 0 ].element, authoredClasses );
	} );

	it( 'restores authored colors while a legacy transparent header is sticky', () => {
		const header = renderHeader( { sticky: true } );
		scroll( 500 );
		expectColors( header.rows[ 0 ].element, authoredClasses );
		scroll( 0 );
		expectColors( header.rows[ 0 ].element, heroClasses );
	} );

	it.each( [ 'solid', 'transparent' ] )( 'keeps the %s multi-row sticky clone in its authored context', mode => {
		const header = renderHeader( { mode, sticky: true, multiple: true } );
		const clone = document.querySelector( '.nb-header--secondary' );
		expect( clone.classList.contains( 'nb-header--transparent' ) ).toBe( false );
		expectColors( clone.querySelector( '.nb-header-row' ), authoredClasses );
		scroll( 500 );
		expect( clone.classList.contains( 'is-visible' ) ).toBe( true );
		expectColors( clone.querySelector( '.nb-header-row' ), authoredClasses );
		expectColors( header.rows[ 1 ].element, mode === 'solid'
			? [ 'sm-palette-3', 'sm-variation-8', 'sm-color-signal-1' ] : heroClasses );
	} );

	it( 'keeps the Solid compact mobile bar and closed menu button in the branding row colors', () => {
		window.innerWidth = 390;
		const header = renderHeader( { mode: 'solid', sticky: true } );
		const mobile = header.mobileHeader;
		expect( mobile.element.classList.contains( 'nb-header--transparent' ) ).toBe( false );
		expectColors( mobile.element, authoredClasses );
		expectColors( mobile.menuToggle.element, authoredClasses );
		scroll( 500 );
		scroll( 0 );
		expectColors( mobile.element, authoredClasses );
		expectColors( mobile.menuToggle.element, authoredClasses );
	} );

	it( 'restores Solid mobile colors after the shifted-palette menu opens and closes', () => {
		window.innerWidth = 390;
		const header = renderHeader( { mode: 'solid' } );
		const mobile = header.mobileHeader;
		mobile.menuToggle.element.click();
		expect( document.body.style.overflow ).toBe( 'hidden' );
		expect( header.element.classList.contains( 'sm-palette--shifted' ) ).toBe( true );
		mobile.menuToggle.element.click();
		jest.runOnlyPendingTimers();
		expect( document.body.style.overflow ).toBe( '' );
		expect( header.element.classList.contains( 'sm-palette--shifted' ) ).toBe( false );
		expectColors( mobile.element, authoredClasses );
		expectColors( mobile.menuToggle.element, authoredClasses );
	} );

	it( 'uses the parent Header colors for a Solid mobile bar when no branding row exists', () => {
		window.innerWidth = 390;
		const header = renderHeader( { mode: 'solid', branding: false } );
		const parentClasses = [ 'sm-palette-1', 'sm-variation-7', 'sm-color-signal-3' ];
		expectColors( header.mobileHeader.element, parentClasses );
		expectColors( header.mobileHeader.menuToggle.element, parentClasses );
	} );

	it( 'retains transparent mobile hero colors and restores them after menu close', () => {
		window.innerWidth = 390;
		const header = renderHeader();
		const mobile = header.mobileHeader;
		expect( mobile.element.classList.contains( 'nb-header--transparent' ) ).toBe( true );
		expectColors( mobile.element, heroClasses );
		mobile.menuToggle.element.click();
		mobile.menuToggle.element.click();
		jest.runOnlyPendingTimers();
		expectColors( mobile.menuToggle.element, heroClasses );
	} );
} );
