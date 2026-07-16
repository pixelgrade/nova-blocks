jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

const { addFilter } = require( '@wordpress/hooks' );

require( './index' );

const getFilter = namespace => addFilter.mock.calls.find( call => call[ 1 ] === namespace )[ 2 ];

describe( 'core/post-terms Color Signal support', () => {
	it( 'opts the wrapper into inherited, explicitly activated Color Signal', () => {
		const addNovaBlocksSupport = getFilter( 'novablocks/post-terms/alter-support' );
		const settings = addNovaBlocksSupport( {
			name: 'core/post-terms',
			supports: {},
		} );

			expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
			attributes: true,
			controls: true,
			paletteClassname: true,
			paletteVariationClassname: true,
			colorSignalClassname: true,
			inheritParentPalette: true,
			paletteInheritanceAttribute: 'useParentPalette',
			legacyInheritedPalette: '1',
			stickySourceColor: false,
			activationAttribute: 'useColorSignal',
			clearCoreColorsOnChange: true,
		} );
	} );

	it( 'leaves every other block untouched', () => {
		const addNovaBlocksSupport = getFilter( 'novablocks/post-terms/alter-support' );
		const settings = {
			name: 'core/categories',
			supports: {},
		};

		expect( addNovaBlocksSupport( settings ) ).toBe( settings );
	} );
} );
