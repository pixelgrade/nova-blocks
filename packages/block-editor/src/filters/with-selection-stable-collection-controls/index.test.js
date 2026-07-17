import fs from 'fs';
import path from 'path';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/element', () => require( 'react' ) );
jest.mock( '@wordpress/compose', () => ( {
	createHigherOrderComponent: factory => factory,
} ) );

let mockRegistry;

jest.mock( '@wordpress/data', () => ( {
	useRegistry: () => mockRegistry,
} ) );
jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

const createRegistry = () => {
	let selectedClientId = 'collection-1';
	const listeners = new Set();
	const selectBlock = jest.fn( clientId => {
		selectedClientId = clientId;
	} );

	return {
		registry: {
			select: () => ( {
				getBlock: clientId => clientId === 'collection-1' ? { clientId } : null,
				getSelectedBlockClientId: () => selectedClientId,
			} ),
			dispatch: () => ( { selectBlock } ),
			subscribe: listener => {
				listeners.add( listener );
				return () => listeners.delete( listener );
			},
		},
		selectBlock,
		setSelectedClientId: clientId => {
			selectedClientId = clientId;
			[ ...listeners ].forEach( listener => listener() );
		},
		getListenerCount: () => listeners.size,
	};
};

describe( 'withSelectionStableCollectionControls', () => {
	let container;

	beforeEach( () => {
		jest.useFakeTimers();
		container = document.createElement( 'div' );
		document.body.appendChild( container );
	} );

	afterEach( () => {
		act( () => {
			unmountComponentAtNode( container );
		} );
		container.remove();
		jest.useRealTimers();
	} );

	it( 'keeps Cards Collection controls selected when an attribute update reconciles to saved state', () => {
		const modulePath = path.join( __dirname, 'index.js' );
		expect( fs.existsSync( modulePath ) ).toBe( true );

		const withSelectionStableCollectionControls = require( './index' ).default;
		const state = createRegistry();
		const setAttributes = jest.fn();
		let receivedProps;
		const BlockEdit = props => {
			receivedProps = props;
			return null;
		};
		const EnhancedBlockEdit = withSelectionStableCollectionControls( BlockEdit );
		mockRegistry = state.registry;

		act( () => {
			render(
				<EnhancedBlockEdit
					name="novablocks/supernova"
					clientId="collection-1"
					setAttributes={ setAttributes }
				/>,
				container
			);
		} );
		act( () => {
			receivedProps.setAttributes( { cardMetadataStyle: 'plain' } );
			state.setSelectedClientId( null );
		} );

		expect( setAttributes ).toHaveBeenCalledWith( { cardMetadataStyle: 'plain' } );
		expect( state.selectBlock ).toHaveBeenCalledWith( 'collection-1' );
		expect( state.getListenerCount() ).toBe( 0 );
	} );

	it( 'leaves unrelated block attribute updates unchanged', () => {
		const modulePath = path.join( __dirname, 'index.js' );
		expect( fs.existsSync( modulePath ) ).toBe( true );

		const withSelectionStableCollectionControls = require( './index' ).default;
		const state = createRegistry();
		const setAttributes = jest.fn();
		let receivedProps;
		const BlockEdit = props => {
			receivedProps = props;
			return null;
		};
		const EnhancedBlockEdit = withSelectionStableCollectionControls( BlockEdit );
		mockRegistry = state.registry;

		act( () => {
			render(
				<EnhancedBlockEdit
					name="core/group"
					clientId="collection-1"
					setAttributes={ setAttributes }
				/>,
				container
			);
		} );

		expect( receivedProps.setAttributes ).toBe( setAttributes );
		expect( state.getListenerCount() ).toBe( 0 );
	} );
} );
