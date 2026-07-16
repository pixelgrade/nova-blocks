import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { useContext } from 'react';

const mockContainerBox = {
  top: 0,
  left: 0,
  width: 1200,
  height: 800,
};
const mockViewportContainerBox = {
  top: 240,
  left: 35,
  width: 1200,
  height: 800,
  right: 1235,
  bottom: 1040,
};
const mockScrollContainer = {};
let mockOnScroll;
const mockFlushSync = jest.fn( callback => callback() );

jest.mock( '@wordpress/element', () => ( {
  ...require( 'react' ),
  flushSync: callback => mockFlushSync( callback ),
} ) );

jest.mock( '@wordpress/compose', () => ( {
  createHigherOrderComponent: ( factory ) => factory,
} ) );

jest.mock( '@novablocks/block-editor', () => ( {
  useResizeObserver: () => [ jest.fn(), { contentRect: mockContainerBox } ],
  useOnScroll: ( element, onScroll ) => {
    mockOnScroll = onScroll;
  },
  useScrollContainer: () => mockScrollContainer,
  useScrollContainerBox: () => mockContainerBox,
} ), { virtual: true } );

jest.mock( '../utils', () => ( {
  getState: jest.fn( () => ( { progress: 0 } ) ),
  getStyles: jest.fn( () => ( { objectPosition: '70% 30%' } ) ),
} ) );

import { getState, getStyles } from '../utils';
import DopplerContext from '../context';
import ScrollingEffectPreviewContext from '../preview-context';
import withScrollingEffectProvider from './with-scrolling-effect-provider';

describe( 'withScrollingEffectProvider transient preview attributes', () => {
  let container;
  let getBoundingClientRectSpy;

  beforeEach( () => {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    getBoundingClientRectSpy = jest
      .spyOn( HTMLElement.prototype, 'getBoundingClientRect' )
      .mockReturnValue( mockViewportContainerBox );
    getState.mockClear();
    getStyles.mockClear();
    mockFlushSync.mockClear();
    mockOnScroll = null;
  } );

  afterEach( () => {
    unmountComponentAtNode( container );
    getBoundingClientRectSpy.mockRestore();
    container.remove();
  } );

  it( 'uses viewport coordinates when a resize measurement updates the container box', () => {
    const Media = () => null;
    const EnhancedMedia = withScrollingEffectProvider( Media );

    act( () => {
      render(
        <EnhancedMedia attributes={ { scrollingEffect: 'parallax' } } />,
        container
      );
    } );

    expect( getState ).toHaveBeenLastCalledWith(
      expect.objectContaining( {
        containerBox: mockViewportContainerBox,
      } ),
      expect.any( Object )
    );
  } );

  it( 'provides measured media styles before the browser can paint a mounted provider', () => {
    const Media = () => {
      const scrollingEffect = useContext( DopplerContext );

      return <img data-testid="media" style={ scrollingEffect?.style } />;
    };
    const EnhancedMedia = withScrollingEffectProvider( Media );

    render(
      <EnhancedMedia attributes={ { scrollingEffect: 'parallax' } } />,
      container
    );

    expect( container.querySelector( '[data-testid="media"]' ).style.objectPosition )
      .toBe( '70% 30%' );
  } );

  it( 'flushes scroll geometry before the browser can paint the next frame', () => {
    const scrollBox = {
      ...mockViewportContainerBox,
      top: -320,
      bottom: 480,
    };
    const Media = () => null;
    const EnhancedMedia = withScrollingEffectProvider( Media );

    act( () => {
      render(
        <EnhancedMedia attributes={ { scrollingEffect: 'parallax' } } />,
        container
      );
    } );

    getBoundingClientRectSpy.mockReturnValue( scrollBox );

    act( () => {
      mockOnScroll();
    } );

    expect( mockFlushSync ).toHaveBeenCalledTimes( 1 );
    expect( getState ).toHaveBeenLastCalledWith(
      expect.objectContaining( {
        containerBox: scrollBox,
      } ),
      expect.any( Object )
    );
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
