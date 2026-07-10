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

const DrawerFixture = ( { panelHeight, spacePanelHeight = 480 } ) => (
	<Drawers>
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
				resizeObserverCallbacks.push( callback );
			}

			observe() {}
			disconnect() {}
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
} );
