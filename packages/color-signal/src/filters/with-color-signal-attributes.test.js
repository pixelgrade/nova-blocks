import withColorSignalAttributes from './with-color-signal-attributes';

describe( 'withColorSignalAttributes', () => {
	it( 'registers a support-configured activation attribute as opt-in', () => {
		const settings = withColorSignalAttributes( {
			name: 'core/post-terms',
			attributes: {},
			supports: {
				novaBlocks: {
					colorSignal: {
						attributes: true,
						activationAttribute: 'useColorSignal',
						paletteInheritanceAttribute: 'useParentPalette',
					},
				},
			},
		} );

		expect( settings.attributes.useColorSignal ).toEqual( {
			type: 'boolean',
			default: false,
		} );
		expect( settings.attributes.useParentPalette ).toEqual( {
			type: 'boolean',
		} );
	} );
} );
