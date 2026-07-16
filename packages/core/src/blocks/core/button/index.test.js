jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

const { addFilter } = require( '@wordpress/hooks' );

require( './index' );

const getFilter = namespace => addFilter.mock.calls.find( call => call[ 1 ] === namespace )[ 2 ];

describe( 'core/button Color Signal support', () => {
	it( 'inherits the surrounding palette and disables sticky source colors', () => {
		const addNovaBlocksSupport = getFilter( 'novablocks/button/alter-support' );
		const settings = addNovaBlocksSupport( {
			name: 'core/button',
			supports: {},
		} );

		expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
			inheritParentPalette: true,
			stickySourceColor: false,
		} );
	} );
} );
