jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

const { addFilter } = require( '@wordpress/hooks' );

require( './index' );

const getFilter = namespace => addFilter.mock.calls.find( call => call[ 1 ] === namespace )[ 2 ];

describe( 'core/button Color Signal support', () => {
	it( 'keeps Color Signal opt-in while allowing an explicit palette override', () => {
		const addNovaBlocksSupport = getFilter( 'novablocks/button/alter-support' );
		const settings = addNovaBlocksSupport( {
			name: 'core/button',
			supports: {},
		} );

		expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
			activationAttribute: 'useColorSignal',
			inheritParentPalette: true,
			paletteInheritanceAttribute: 'useParentPalette',
			legacyInheritedPalette: '1',
			stickySourceColor: false,
		} );
	} );
} );
