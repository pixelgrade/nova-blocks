import { getColorSignalAdoptionAttributes } from './core-color-adoption';

describe( 'getColorSignalAdoptionAttributes', () => {
	it( 'activates Color Signal and removes only conflicting core color values', () => {
		const attributes = {
			backgroundColor: 'primary',
			textColor: 'base',
			gradient: 'primary-to-secondary',
			style: {
				color: {
					background: '#123456',
					text: '#ffffff',
				},
				elements: {
					link: {
						color: {
							text: 'var:preset|color|base',
						},
						typography: {
							textDecoration: 'none',
						},
					},
				},
				spacing: {
					padding: {
						top: '0.5rem',
					},
				},
			},
		};

		expect( getColorSignalAdoptionAttributes( attributes, {
			activationAttribute: 'useColorSignal',
			clearCoreColorsOnChange: true,
		} ) ).toEqual( {
			useColorSignal: true,
			backgroundColor: undefined,
			textColor: undefined,
			gradient: undefined,
			style: {
				elements: {
					link: {
						typography: {
							textDecoration: 'none',
						},
					},
				},
				spacing: {
					padding: {
						top: '0.5rem',
					},
				},
			},
		} );
	} );

	it( 'does not touch core colors for ordinary always-active blocks', () => {
		expect( getColorSignalAdoptionAttributes( {
			backgroundColor: 'primary',
		}, {} ) ).toEqual( {} );
	} );
} );
