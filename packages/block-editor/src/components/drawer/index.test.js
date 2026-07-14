import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '../../index', () => ( {
	useMemoryState: require( '../../hooks/use-memory-state' ).default,
} ) );

import {
	Drawer,
	Drawers,
	DrawerList,
	DrawerPanel,
} from './index';
import { resetMemoryStateStore } from '../../hooks/use-memory-state/store';

const DrawerControls = ( { panelHeight, goBack } ) => (
	<div data-panel-height={ panelHeight }>
		Color Signal controls
		<button className="drawer-back" onClick={ goBack }>Back</button>
	</div>
);

const DrawerFixture = ( { panelHeight, spacePanelHeight = 480, scopeKey } ) => (
	<Drawers scopeKey={ scopeKey }>
		<DrawerList>
			<Drawer id="color-signal" title="Color Signal" />
			<Drawer id="space-and-sizing" title="Space and Sizing" />
		</DrawerList>
		<DrawerPanel id="color-signal">
			<DrawerControls panelHeight={ panelHeight } />
		</DrawerPanel>
		<DrawerPanel id="space-and-sizing">
			<DrawerControls panelHeight={ spacePanelHeight } />
		</DrawerPanel>
	</Drawers>
);

// A block-type change (or a conditionally-absent section) can leave a
// section list that no longer contains the remembered active drawer id.
const DrawerFixtureWithoutColorSignal = ( { spacePanelHeight = 480, scopeKey } ) => (
	<Drawers scopeKey={ scopeKey }>
		<DrawerList>
			<Drawer id="space-and-sizing" title="Space and Sizing" />
		</DrawerList>
		<DrawerPanel id="space-and-sizing">
			<DrawerControls panelHeight={ spacePanelHeight } />
		</DrawerPanel>
	</Drawers>
);

describe( 'Drawers', () => {
	let container;
	let clientHeightDescriptor;
	let panelHeightReads;
	let resizeObserverCallbacks;
	let ResizeObserverOriginal;

	beforeEach( () => {
		resetMemoryStateStore();
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		clientHeightDescriptor = Object.getOwnPropertyDescriptor( HTMLElement.prototype, 'clientHeight' );
		panelHeightReads = 0;
		resizeObserverCallbacks = [];
		ResizeObserverOriginal = window.ResizeObserver;
		window.ResizeObserver = class ResizeObserver {
			constructor( callback ) {
				this.callback = callback;
				resizeObserverCallbacks.push( callback );
			}

			observe() {}

			disconnect() {
				resizeObserverCallbacks = resizeObserverCallbacks.filter( callback => callback !== this.callback );
			}
		};

		Object.defineProperty( HTMLElement.prototype, 'clientHeight', {
			configurable: true,
			get() {
				if ( this.classList.contains( 'novablocks-drawers__front' ) ) {
					return 80;
				}

				if ( this.classList.contains( 'novablocks-drawers__panel' ) ) {
					panelHeightReads += 1;
					return Number( this.firstElementChild?.dataset?.panelHeight || 0 );
				}

				return 0;
			},
		} );
	} );

	afterEach( () => {
		act( () => {
			unmountComponentAtNode( container );
		} );
		container.remove();

		if ( clientHeightDescriptor ) {
			Object.defineProperty( HTMLElement.prototype, 'clientHeight', clientHeightDescriptor );
		} else {
			delete HTMLElement.prototype.clientHeight;
		}

		window.ResizeObserver = ResizeObserverOriginal;
	} );

	const triggerResize = () => {
		act( () => {
			resizeObserverCallbacks.forEach( callback => callback( [] ) );
		} );
	};

	it( 'remeasures an open panel when block selection replaces its controls', () => {
		act( () => {
			render( <DrawerFixture panelHeight={ 220 } />, container );
		} );

		act( () => {
			container.querySelector( '.novablocks-drawer' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );

		const drawers = container.querySelector( '.novablocks-drawers' );
		expect( drawers.style.height ).toBe( '220px' );

		act( () => {
			render( <DrawerFixture panelHeight={ 360 } />, container );
		} );
		triggerResize();

		expect( drawers.style.height ).toBe( '360px' );
	} );

	it( 'does not remeasure an unchanged open panel on unrelated rerenders', () => {
		act( () => {
			render( <DrawerFixture panelHeight={ 220 } />, container );
		} );
		act( () => {
			container.querySelector( '.novablocks-drawer' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );
		panelHeightReads = 0;

		act( () => {
			render( <DrawerFixture panelHeight={ 220 } />, container );
		} );

		expect( panelHeightReads ).toBe( 0 );
	} );

	it( 'measures the selected drawer and restores the drawer-list height when closed', () => {
		act( () => {
			render( <DrawerFixture panelHeight={ 220 } spacePanelHeight={ 480 } />, container );
		} );
		const drawers = container.querySelector( '.novablocks-drawers' );
		const drawerButtons = container.querySelectorAll( '.novablocks-drawer' );

		act( () => {
			drawerButtons[ 1 ].dispatchEvent( new MouseEvent( 'click', { bubbles: true } ) );
		} );
		expect( drawers.style.height ).toBe( '480px' );

		act( () => {
			container.querySelector( '.drawer-back' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );
		expect( drawers.style.height ).toBe( '80px' );
	} );

	it( 'resets to the closed list state when the remembered active id no longer exists', () => {
		act( () => {
			render( <DrawerFixture panelHeight={ 220 } scopeKey="styles:novablocks/supernova" />, container );
		} );

		act( () => {
			container.querySelector( '.novablocks-drawer' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );
		expect( container.querySelector( '.novablocks-drawers' ).style.height ).toBe( '220px' );

		// Simulate the block type changing (or the section becoming
		// conditionally absent): the "color-signal" drawer disappears from
		// the section list while the memory store still points at it. This
		// swaps the root component, so React mounts a brand new DOM node —
		// re-query it rather than reuse the (now detached) old reference.
		act( () => {
			render(
				<DrawerFixtureWithoutColorSignal spacePanelHeight={ 480 } scopeKey="styles:novablocks/supernova" />,
				container
			);
		} );
		triggerResize();

		const drawersAfterReset = container.querySelector( '.novablocks-drawers' );
		expect( container.querySelector( '.novablocks-drawers__panel' ) ).toBeNull();
		expect( drawersAfterReset.style.height ).toBe( '80px' );
	} );

	it( 'scopes drawer state per scope key so different blocks/tabs never leak into each other', () => {
		const ScopedFixtures = () => (
			<div>
				<div className="scope-a">
					<DrawerFixture panelHeight={ 220 } scopeKey="styles:novablocks/group" />
				</div>
				<div className="scope-b">
					<DrawerFixture panelHeight={ 220 } scopeKey="settings:novablocks/supernova" />
				</div>
			</div>
		);

		act( () => {
			render( <ScopedFixtures />, container );
		} );

		const scopeADrawers = container.querySelector( '.scope-a .novablocks-drawers' );
		const scopeBDrawers = container.querySelector( '.scope-b .novablocks-drawers' );

		act( () => {
			container.querySelector( '.scope-a .novablocks-drawer' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );

		expect( scopeADrawers.style.height ).toBe( '220px' );
		// The un-opened scope stays on its (unmeasured, non-clipping) list view.
		expect( scopeBDrawers.querySelector( '.novablocks-drawers__panel' ) ).toBeNull();
	} );

	it( 'retains open state across unmount/remount within the same scope', () => {
		act( () => {
			render( <DrawerFixture panelHeight={ 220 } scopeKey="styles:novablocks/card" />, container );
		} );

		act( () => {
			container.querySelector( '.novablocks-drawer' ).dispatchEvent(
				new MouseEvent( 'click', { bubbles: true } )
			);
		} );
		expect( container.querySelector( '.novablocks-drawers__panel' ) ).not.toBeNull();

		act( () => {
			unmountComponentAtNode( container );
		} );

		act( () => {
			render( <DrawerFixture panelHeight={ 220 } scopeKey="styles:novablocks/card" />, container );
		} );

		expect( container.querySelector( '.novablocks-drawers__panel' ) ).not.toBeNull();
	} );
} );
