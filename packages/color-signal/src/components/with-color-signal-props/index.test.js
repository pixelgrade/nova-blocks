import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { select } from '@wordpress/data';

let mockControlProps;

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/data', () => ( {
	select: jest.fn(),
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
	useMemoryState: () => [ false, jest.fn() ],
	useSupports: () => ( {
		novaBlocks: {
			colorSignal: {
				activationAttribute: 'useColorSignal',
				clearCoreColorsOnChange: true,
			},
		},
	} ),
} ), { virtual: true } );

jest.mock( '../use-current-color-signal-attributes', () => ( {
	useCurrentColorSignalAttributes: ( clientId, attributes ) => attributes,
} ) );

jest.mock( '../../editor/utils', () => ( {
	getUpdatedAttributes: () => ( {} ),
} ) );

jest.mock( '../../utils', () => ( {
	shouldInheritParentPalette: () => false,
	supportsPaletteSelection: () => false,
} ) );

import withColorSignalProps from './index';

const Control = ( props ) => {
	mockControlProps = props;
	return null;
};

describe( 'withColorSignalProps adoption', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockControlProps = undefined;
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
		jest.clearAllMocks();
	} );

	it( 'uses the current store attributes when the first signal action adopts core colors', () => {
		const staleAttributes = {
			style: {
				spacing: { padding: { top: '1rem' } },
			},
		};
		const currentAttributes = {
			backgroundColor: 'primary',
			style: {
				color: { text: '#123456' },
				spacing: { padding: { top: '2rem' } },
			},
		};
		const setAttributes = jest.fn();

		select.mockReturnValue( {
			getBlockAttributes: () => currentAttributes,
		} );

		const EnhancedControl = withColorSignalProps( Control );

		act( () => {
			render(
				<EnhancedControl
					name="core/post-terms"
					clientId="terms-client-id"
					attributes={ staleAttributes }
					setAttributes={ setAttributes }
				/>,
				container
			);
		} );

		act( () => {
			mockControlProps.updateBlock( { colorSignal: 1 } );
		} );

		expect( setAttributes ).toHaveBeenCalledWith( expect.objectContaining( {
			colorSignal: 1,
			useColorSignal: true,
			backgroundColor: undefined,
			style: {
				spacing: { padding: { top: '2rem' } },
			},
		} ) );
	} );
} );
