import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { useContext } from 'react';

let mockControlsProps;

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@novablocks/block-editor', () => ( {
	useSupports: () => ( {
		novaBlocks: {
			scrollingEffect: true,
		},
	} ),
} ), { virtual: true } );

jest.mock( '@wordpress/compose', () => ( {
	createHigherOrderComponent: ( factory ) => factory,
} ) );

jest.mock( '../controls', () => ( props ) => {
	mockControlsProps = props;
	return null;
} );

import withScrollingEffectControls from './with-scrolling-effect-controls';
import ScrollingEffectPreviewContext from '../preview-context';

const Canvas = ( { attributes } ) => {
	const previewAttributes = useContext( ScrollingEffectPreviewContext );

	return (
		<div
			className="mock-canvas"
			data-focal-point={ `${ attributes.focalPoint.x },${ attributes.focalPoint.y }` }
			data-preview-focal-point={ previewAttributes
				? `${ previewAttributes.focalPoint.x },${ previewAttributes.focalPoint.y }`
				: '' }
		/>
	);
};

describe( 'withScrollingEffectControls transient preview attributes', () => {
	let container;
	let EnhancedCanvas;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockControlsProps = undefined;
		EnhancedCanvas = withScrollingEffectControls( Canvas );
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
	} );

	const renderCanvas = ( attributes, setAttributes ) => {
		act( () => {
			render(
				<EnhancedCanvas
					name="novablocks/supernova"
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>,
				container
			);
		} );
	};

	it( 'provides transient attributes to nested media without replacing block props', () => {
		const setAttributes = jest.fn();
		const initialAttributes = {
			focalPoint: { x: 0.5, y: 0.5 },
			finalFocalPoint: { x: 0.5, y: 0.5 },
		};
		const previewPatch = {
			motionPreset: 'custom',
			focalPoint: { x: 0.7, y: 0.3 },
			finalFocalPoint: { x: 0.7, y: 0.5 },
		};

		renderCanvas( initialAttributes, setAttributes );

		act( () => {
			mockControlsProps.setScrollingEffectPreviewAttributes( previewPatch );
		} );

		expect( container.querySelector( '.mock-canvas' ).dataset.focalPoint ).toBe( '0.5,0.5' );
		expect( container.querySelector( '.mock-canvas' ).dataset.previewFocalPoint ).toBe( '0.7,0.3' );
		expect( setAttributes ).not.toHaveBeenCalled();
	} );

	it( 'releases the transient patch after committed attributes catch up', () => {
		const setAttributes = jest.fn();
		const previewPatch = {
			motionPreset: 'custom',
			focalPoint: { x: 0.7, y: 0.3 },
			finalFocalPoint: { x: 0.7, y: 0.5 },
		};

		renderCanvas( {
			focalPoint: { x: 0.5, y: 0.5 },
			finalFocalPoint: { x: 0.5, y: 0.5 },
		}, setAttributes );

		act( () => {
			mockControlsProps.setScrollingEffectPreviewAttributes( previewPatch );
		} );

		renderCanvas( previewPatch, setAttributes );
		renderCanvas( {
			...previewPatch,
			focalPoint: { x: 0.2, y: 0.8 },
		}, setAttributes );

		expect( container.querySelector( '.mock-canvas' ).dataset.focalPoint ).toBe( '0.2,0.8' );
		expect( container.querySelector( '.mock-canvas' ).dataset.previewFocalPoint ).toBe( '' );
	} );
} );
