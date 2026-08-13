jest.mock(
	'@novablocks/block-editor',
	() => ( {
		getSupports: () => ( {
			novaBlocks: {
				spaceAndSizing: true,
			},
		} ),
	} ),
	{ virtual: true }
);

import withColorSignalSaveCustomProps from './with-color-signal-save-custom-props';

test( 'serializes numeric emphasis values as stable unitless strings', () => {
	const element = withColorSignalSaveCustomProps(
		{ props: { style: {} } },
		{ name: 'core/group' },
		{ emphasisArea: 100 }
	);

	expect( element.props.style['--nb-emphasis-area'] ).toBe( '100' );
} );

test( 'preserves the historical px emphasis unit while validating legacy markup', () => {
	const element = withColorSignalSaveCustomProps(
		{ props: { style: {} } },
		{ name: 'core/group' },
		{
			emphasisArea: 100,
			__novablocksLegacySpacing: {
				emphasisAreaSerializedAsPx: true,
			},
		}
	);

	expect( element.props.style['--nb-emphasis-area'] ).toBe( '100px' );
} );
