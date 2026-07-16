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

import EndFramePanel from './end-frame-panel';

describe( 'EndFramePanel focal-point preview', () => {
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

  it( 'previews every drag value and commits the linked end frame once', () => {
    const setAttributes = jest.fn();
    const setScrollingEffectPreviewAttributes = jest.fn();

    act( () => {
      render(
        <EndFramePanel
          attributes={ {
            focalPoint: { x: 0.5, y: 0.2 },
            finalFocalPoint: { x: 0.5, y: 0.8 },
            finalBackgroundScale: 1.2,
            scrollingEffect: 'doppler',
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

    const dragPoint = { x: 0.7, y: 0.6 };
    const expectedPatch = {
      motionPreset: 'custom',
      focalPoint: { x: 0.7, y: 0.2 },
      finalFocalPoint: dragPoint,
    };

    expect( mockFocalPointPickerProps.disabled ).toBeUndefined();

    act( () => {
      mockFocalPointPickerProps.onDragStart( { x: 0.6, y: 0.7 } );
      mockFocalPointPickerProps.onDrag( dragPoint );
    } );

    expect( setScrollingEffectPreviewAttributes ).toHaveBeenCalledTimes( 2 );
    expect( setScrollingEffectPreviewAttributes ).toHaveBeenLastCalledWith( expectedPatch );
    expect( setAttributes ).not.toHaveBeenCalled();

    act( () => {
      mockFocalPointPickerProps.onChange( dragPoint );
    } );

    expect( setScrollingEffectPreviewAttributes ).toHaveBeenLastCalledWith( expectedPatch );
    expect( setAttributes ).toHaveBeenCalledTimes( 1 );
    expect( setAttributes ).toHaveBeenCalledWith( expectedPatch );
  } );
} );
