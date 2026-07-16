jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/compose', () => ( {
	createHigherOrderComponent: ( factory ) => factory,
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
	useSupports: () => ( {} ),
} ), { virtual: true } );

jest.mock( './controls', () => () => null );

import { arePropsEqualForControls } from './with-color-signal-controls';

describe( 'arePropsEqualForControls', () => {
	it( 'invalidates controls when a configured activation attribute changes', () => {
		const sharedProps = {
			isSelected: true,
			clientId: 'dynamic-core-block',
			name: 'core/example',
			colorSignalActivationAttribute: 'enableNovaColor',
		};

		expect( arePropsEqualForControls(
			{
				...sharedProps,
				attributes: { enableNovaColor: false },
			},
			{
				...sharedProps,
				attributes: { enableNovaColor: true },
			}
		) ).toBe( false );
	} );
} );
