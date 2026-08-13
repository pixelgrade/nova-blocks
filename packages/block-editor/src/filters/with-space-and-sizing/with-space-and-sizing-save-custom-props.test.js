jest.mock( '@novablocks/utils', () => ( {
	getSpacingCSSProps: () => ( {
		'--nb-card-media-container-height': '50',
	} ),
} ) );

jest.mock( '../../utils', () => ( {
	getSupports: () => ( {
		novaBlocks: {
			spaceAndSizing: true,
		},
	} ),
} ) );

import withSpaceAndSizingSaveCustomProps from './with-space-and-sizing-save-custom-props';

test( 'preserves the historical px media-height unit while validating legacy markup', () => {
	const props = withSpaceAndSizingSaveCustomProps(
		{},
		{ name: 'core/group' },
		{
			__novablocksLegacySpacing: {
				mediaHeightSerializedAsPx: true,
			},
		}
	);

	expect( props.style['--nb-card-media-container-height'] ).toBe( '50px' );
} );
