import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

let mockSignalControlProps;
let mockColorSignalSupport;

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/i18n', () => ( {
	__: text => text,
} ) );

jest.mock( '@novablocks/block-editor', () => {
	const React = require( 'react' );

	return {
		ControlsGroup: ( { children } ) => React.createElement( React.Fragment, null, children ),
		SignalControl: props => {
			mockSignalControlProps = props;
			return null;
		},
		useSupports: () => ( {
			novaBlocks: {
				colorSignal: mockColorSignalSupport,
			},
		} ),
	};
}, { virtual: true } );

jest.mock( '../../editor/utils', () => ( {
	getContentSignalChangeAttributes: jest.fn(),
} ) );

jest.mock( '../../utils', () => ( {
	getMaxSignal: () => 3,
} ) );

import ContentColorSignalControl from './index';

describe( 'ContentColorSignalControl label', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockSignalControlProps = undefined;
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
		jest.clearAllMocks();
	} );

	const renderControl = () => {
		act( () => {
			render(
				<ContentColorSignalControl
					name="core/post-terms"
					clientId="terms-client-id"
					attributes={ { palette: '1', contentColorSignal: 1 } }
					updateBlock={ jest.fn() }
				/>,
				container
			);
		} );
	};

	it( 'uses the semantic content-signal label supplied by block support', () => {
		mockColorSignalSupport = {
			contentColorSignal: true,
			contentColorSignalLabel: 'Term Links Color Signal',
		};

		renderControl();

		expect( mockSignalControlProps.label ).toBe( 'Term Links Color Signal' );
	} );

	it( 'keeps the existing Content Area label when support does not override it', () => {
		mockColorSignalSupport = { contentColorSignal: true };

		renderControl();

		expect( mockSignalControlProps.label ).toBe( 'Content Area Color Signal' );
	} );
} );
