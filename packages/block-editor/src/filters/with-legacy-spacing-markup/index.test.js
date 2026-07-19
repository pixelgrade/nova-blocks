jest.mock( '@wordpress/hooks', () => ( {
	addFilter: jest.fn(),
} ) );

const { addFilter } = require( '@wordpress/hooks' );

require( './index' );

const getFilter = namespace => addFilter.mock.calls.find( call => call[ 1 ] === namespace )[ 2 ];

describe( 'legacy spacing compatibility state', () => {
	it( 'registers a local-only attribute on augmented core blocks', () => {
		const alterSettings = getFilter( 'novablocks/legacy-spacing-markup/attribute' );
		const settings = alterSettings( {
			name: 'core/group',
			attributes: {},
		} );

		expect( settings.attributes.__novablocksLegacySpacing ).toEqual( {
			type: 'object',
			role: 'local',
		} );
	} );

	it( 'keeps detected flags outside serializable block metadata', () => {
		const parseAttributes = getFilter( 'novablocks/legacy-spacing-markup' );
		const attributes = parseAttributes(
			{ metadata: { name: 'Footer' } },
			{ name: 'core/group' },
			'<div style="--nb-emphasis-top-spacing:0;--nb-card-media-padding-top:100%;"></div>'
		);

		expect( attributes.metadata ).toEqual( { name: 'Footer' } );
		expect( attributes.__novablocksLegacySpacing ).toMatchObject( {
			missingAspectRatioVar: true,
			missingMinHeightFallbackVar: true,
			legacyCardMediaPaddingTop: '100%',
		} );
	} );

	it( 'does not add the local attribute to unrelated blocks', () => {
		const alterSettings = getFilter( 'novablocks/legacy-spacing-markup/attribute' );
		const settings = {
			name: 'core/paragraph',
			attributes: {},
		};

		expect( alterSettings( settings ) ).toBe( settings );
	} );
} );
