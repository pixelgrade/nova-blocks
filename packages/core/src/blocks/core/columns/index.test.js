jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

const { addFilter } = require( '@wordpress/hooks' );

require( './index' );

const getFilter = namespace => addFilter.mock.calls.find( call => call[ 1 ] === namespace )[ 2 ];

describe( 'Core Columns Color Signal support', () => {
	const addNovaBlocksSupport = getFilter( 'novablocks/columns/settings-add-nb-support' );

	it( 'makes the outer Columns block an opt-in independent Color Signal context', () => {
		const settings = addNovaBlocksSupport( {
			name: 'core/columns',
			supports: {},
		} );

		expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
			attributes: true,
			activationAttribute: 'useColorSignal',
			clearCoreColorsOnChange: true,
			controls: true,
			functionalColors: true,
			paletteClassname: true,
			paletteVariationClassname: true,
			colorSignalClassname: true,
		} );
		expect( settings.supports.novaBlocks.colorSignal ).not.toHaveProperty( 'inheritParentPalette' );
		expect( settings.supports.novaBlocks.spaceAndSizing ).toMatchObject( {
			attributes: true,
			controls: true,
			contentPadding: false,
		} );
	} );

	it( 'makes each Column cell inherit its parent palette until explicitly overridden', () => {
		const settings = addNovaBlocksSupport( {
			name: 'core/column',
			supports: {},
		} );

		expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
			attributes: true,
			activationAttribute: 'useColorSignal',
			clearCoreColorsOnChange: true,
			controls: true,
			functionalColors: true,
			paletteClassname: true,
			paletteVariationClassname: true,
			colorSignalClassname: true,
			inheritParentPalette: true,
			paletteInheritanceAttribute: 'useParentPalette',
			legacyInheritedPalette: '1',
		} );
		expect( settings.supports.novaBlocks ).not.toHaveProperty( 'spaceAndSizing' );
	} );

	it( 'leaves unrelated blocks unchanged', () => {
		const settings = {
			name: 'core/paragraph',
			supports: {},
		};

		expect( addNovaBlocksSupport( settings ) ).toBe( settings );
	} );
} );
