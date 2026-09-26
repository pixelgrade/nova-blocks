jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

jest.mock( '@wordpress/block-editor', () => ( {
	useBlockProps: {
		save: jest.fn( props => props ),
	},
} ) );

jest.mock( '@wordpress/data', () => ( {
	select: jest.fn( () => ( {
		getSettings: jest.fn( () => ( { separator: { markup: '' } } ) ),
	} ) ),
} ) );

jest.mock( './edit', () => jest.fn() );
jest.mock( './with-separator-rule-controls', () => ( { withSeparatorRuleControls: jest.fn() } ) );

const { addFilter } = require( '@wordpress/hooks' );

require( './index' );

const getFilter = namespace => addFilter.mock.calls.find( call => call[ 1 ] === namespace )[ 2 ];

describe( 'core/separator Color Signal support', () => {
	it( 'inherits the surrounding palette while allowing an explicit override', () => {
		const alterSeparatorSettings = getFilter( 'novablocks/separator/alter-support' );
		const settings = alterSeparatorSettings( {
			name: 'core/separator',
			supports: {},
		} );

		expect( settings.supports.novaBlocks.colorSignal ).toMatchObject( {
			inheritParentPalette: true,
			paletteInheritanceAttribute: 'useParentPalette',
			legacyInheritedPalette: '1',
			stickySourceColor: false,
		} );
	} );

	it( 'registers the explicit palette-ownership attribute', () => {
		const alterSeparatorAttributes = getFilter( 'novablocks/separator/alter-attributes' );
		const settings = alterSeparatorAttributes( {
			name: 'core/separator',
			attributes: {},
		} );

		expect( settings.attributes.useParentPalette ).toEqual( {
			type: 'boolean',
		} );
	} );

	it( 'registers the rule weight with the theme default so untouched separators serialize nothing', () => {
		const alterSeparatorAttributes = getFilter( 'novablocks/separator/alter-attributes' );
		const settings = alterSeparatorAttributes( {
			name: 'core/separator',
			attributes: {},
		} );

		expect( settings.attributes.ruleWeight ).toEqual( { type: 'number', default: 3 } );
	} );

	it( 'keeps the saved markup independent of the rule weight', () => {
		const alterSeparatorSettings = getFilter( 'novablocks/separator/alter-support' );
		const { save } = alterSeparatorSettings( { name: 'core/separator', supports: {} } );
		const render = attributes => JSON.stringify( save( { className: 'is-style-simple', attributes } ) );

		expect( render( { align: 'none' } ) ).toBe( render( { align: 'none', ruleWeight: 1 } ) );
		expect( render( { align: 'none' } ) ).not.toContain( 'rule-weight' );
	} );
} );
