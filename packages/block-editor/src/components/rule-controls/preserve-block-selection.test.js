import { preserveBlockSelectionWhileApplying } from './preserve-block-selection';

const createRegistry = ( initialSelectedClientId = 'block-1' ) => {
	let selectedClientId = initialSelectedClientId;
	const listeners = new Set();
	const selectBlock = jest.fn( clientId => {
		selectedClientId = clientId;
	} );
	const registry = {
		select: () => ( {
			getBlock: clientId => clientId === 'block-1' ? { clientId } : null,
			getSelectedBlockClientId: () => selectedClientId,
		} ),
		dispatch: () => ( { selectBlock } ),
		subscribe: listener => {
			listeners.add( listener );
			return () => listeners.delete( listener );
		},
	};

	return {
		registry,
		selectBlock,
		setSelectedClientId: clientId => {
			selectedClientId = clientId;
			[ ...listeners ].forEach( listener => listener() );
		},
		getListenerCount: () => listeners.size,
	};
};

describe( 'preserveBlockSelectionWhileApplying', () => {
	beforeEach( () => {
		jest.useFakeTimers();
	} );

	afterEach( () => {
		jest.useRealTimers();
	} );

	it( 'reselects the edited block when core clears selection after the update', () => {
		const state = createRegistry();
		const apply = jest.fn();

		preserveBlockSelectionWhileApplying( {
			registry: state.registry,
			clientId: 'block-1',
			apply,
		} );
		state.setSelectedClientId( null );

		expect( apply ).toHaveBeenCalledTimes( 1 );
		expect( state.selectBlock ).toHaveBeenCalledWith( 'block-1' );
		expect( state.getListenerCount() ).toBe( 0 );
	} );

	it( 'does not override an intentional selection of another block', () => {
		const state = createRegistry();

		preserveBlockSelectionWhileApplying( {
			registry: state.registry,
			clientId: 'block-1',
			apply: jest.fn(),
		} );
		state.setSelectedClientId( 'block-2' );
		state.setSelectedClientId( null );

		expect( state.selectBlock ).not.toHaveBeenCalled();
		expect( state.getListenerCount() ).toBe( 0 );
	} );

	it( 'cleans up when core keeps the block selected', () => {
		const state = createRegistry();

		preserveBlockSelectionWhileApplying( {
			registry: state.registry,
			clientId: 'block-1',
			apply: jest.fn(),
		} );
		jest.runAllTimers();

		expect( state.selectBlock ).not.toHaveBeenCalled();
		expect( state.getListenerCount() ).toBe( 0 );
	} );
} );
