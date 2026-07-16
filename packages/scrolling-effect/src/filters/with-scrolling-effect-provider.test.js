import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

const mockContainerBox = {
  top: 0,
  left: 0,
  width: 1200,
  height: 800,
};
const mockScrollContainer = {};

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/compose', () => ( {
  createHigherOrderComponent: ( factory ) => factory,
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
  useResizeObserver: () => [ jest.fn(), { contentRect: mockContainerBox } ],
  useOnScroll: () => {},
  useScrollContainer: () => mockScrollContainer,
  useScrollContainerBox: () => mockContainerBox,
} ), { virtual: true } );

jest.mock( '../utils', () => ( {
  getState: jest.fn( () => ( { progress: 0 } ) ),
  getStyles: jest.fn( () => ( { objectPosition: '70% 30%' } ) ),
} ) );

import { getState, getStyles } from '../utils';
import ScrollingEffectPreviewContext from '../preview-context';
import withScrollingEffectProvider from './with-scrolling-effect-provider';

describe( 'withScrollingEffectProvider transient preview attributes', () => {
  let container;

  beforeEach( () => {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    getState.mockClear();
    getStyles.mockClear();
  } );

  afterEach( () => {
    unmountComponentAtNode( container );
    container.remove();
  } );

  it( 'computes media state and styles from the scoped preview patch', () => {
    const Media = () => null;
    const EnhancedMedia = withScrollingEffectProvider( Media );
    const attributes = {
      scrollingEffect: 'parallax',
      focalPoint: { x: 0.5, y: 0.5 },
      finalFocalPoint: { x: 0.5, y: 0.5 },
    };
    const previewAttributes = {
      motionPreset: 'custom',
      focalPoint: { x: 0.7, y: 0.3 },
      finalFocalPoint: { x: 0.7, y: 0.5 },
    };

    act( () => {
      render(
        <ScrollingEffectPreviewContext.Provider value={ previewAttributes }>
          <EnhancedMedia attributes={ attributes } />
        </ScrollingEffectPreviewContext.Provider>,
        container
      );
    } );

    expect( getState ).toHaveBeenLastCalledWith(
      expect.any( Object ),
      expect.objectContaining( previewAttributes )
    );
    expect( getStyles ).toHaveBeenLastCalledWith(
      expect.any( Object ),
      expect.objectContaining( previewAttributes )
    );
  } );
} );
