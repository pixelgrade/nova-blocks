import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { useEffect } from 'react';

jest.mock( '@wordpress/element', () => require( 'react' ) );
jest.mock( '@wordpress/compose', () => ( {
	createHigherOrderComponent: factory => factory,
} ) );
jest.mock( '@novablocks/block-editor', () => ( {
	useSupports: () => ( {
		novaBlocks: {
			colorSignal: { controls: true },
		},
	} ),
} ), { virtual: true } );
jest.mock( '../components/block-color-signal-toolbar', () => () => null );

import withColorSignalToolbar from './with-color-signal-toolbar';

describe( 'withColorSignalToolbar', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
	} );

	afterEach( () => {
		act( () => {
			unmountComponentAtNode( container );
		} );
		container.remove();
	} );

	it( 'keeps the edited block mounted when selection reveals the toolbar', () => {
		let mounts = 0;
		let unmounts = 0;
		const BlockEdit = () => {
			useEffect( () => {
				mounts += 1;
				return () => {
					unmounts += 1;
				};
			}, [] );

			return <div>Header contents</div>;
		};
		const EnhancedBlockEdit = withColorSignalToolbar( BlockEdit );

		act( () => {
			render( <EnhancedBlockEdit isSelected={ false } name="novablocks/header" />, container );
		} );
		act( () => {
			render( <EnhancedBlockEdit isSelected name="novablocks/header" />, container );
		} );

		expect( mounts ).toBe( 1 );
		expect( unmounts ).toBe( 0 );
	} );
} );
