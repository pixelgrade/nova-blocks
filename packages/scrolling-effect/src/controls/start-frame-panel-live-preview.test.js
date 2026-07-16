import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

let mockFocalPointPickerProps;

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/i18n', () => ( {
	__: ( text ) => text,
} ) );

jest.mock( '@wordpress/components', () => ( {
	FocalPointPicker: ( props ) => {
		mockFocalPointPickerProps = props;
		return null;
	},
	PanelBody: ( { children } ) => <div>{ children }</div>,
	RangeControl: () => null,
	ToggleControl: () => null,
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
	withVisibility: () => ( Component ) => Component,
} ), { virtual: true } );

jest.mock( '@novablocks/utils', () => ( {
	getSnapClassname: () => '',
	maybeSnapFocalPoint: ( point ) => point,
} ) );

jest.mock( '../utils', () => ( {
	getFocalPointImage: () => ( {
		url: 'image.jpg',
		width: 1200,
		height: 800,
	} ),
} ) );

import StartFramePanel from './start-frame-panel';

describe( 'StartFramePanel focal-point preview', () => {
	let container;

	beforeEach( () => {
		container = document.createElement( 'div' );
		document.body.appendChild( container );
		mockFocalPointPickerProps = undefined;
	} );

	afterEach( () => {
		unmountComponentAtNode( container );
		container.remove();
	} );

	it( 'previews every drag value without persisting and commits once on change', () => {
		const setAttributes = jest.fn();
		const setScrollingEffectPreviewAttributes = jest.fn();

		act( () => {
			render(
				<StartFramePanel
					attributes={ {
						focalPoint: { x: 0.5, y: 0.5 },
						finalFocalPoint: { x: 0.5, y: 0.5 },
						initialBackgroundScale: 1,
						scrollingEffect: 'parallax',
					} }
					focalPointImage={ {
						url: 'image.jpg',
						width: 1200,
						height: 800,
					} }
					setAttributes={ setAttributes }
					setScrollingEffectPreviewAttributes={ setScrollingEffectPreviewAttributes }
				/>,
				container
			);
		} );

		const dragStartPoint = { x: 0.6, y: 0.4 };
		const dragPoint = { x: 0.7, y: 0.3 };
		const expectedDragPatch = {
			motionPreset: 'custom',
			focalPoint: dragPoint,
			finalFocalPoint: { x: 0.7, y: 0.5 },
		};

		act( () => {
			mockFocalPointPickerProps.onDragStart( dragStartPoint );
			mockFocalPointPickerProps.onDrag( dragPoint );
		} );

		expect( setScrollingEffectPreviewAttributes ).toHaveBeenCalledTimes( 2 );
		expect( setScrollingEffectPreviewAttributes ).toHaveBeenLastCalledWith( expectedDragPatch );
		expect( setAttributes ).not.toHaveBeenCalled();

		act( () => {
			mockFocalPointPickerProps.onChange( dragPoint );
		} );

		expect( setScrollingEffectPreviewAttributes ).toHaveBeenLastCalledWith( expectedDragPatch );
		expect( setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( setAttributes ).toHaveBeenCalledWith( expectedDragPatch );
	} );
} );
