import { render, unmountComponentAtNode } from 'react-dom';

const mockGetScrollContainer = jest.fn( element => element );

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@wordpress/dom', () => ( {
  getScrollContainer: element => mockGetScrollContainer( element ),
} ) );

jest.mock( '../../utils', () => ( {
  getEditorScrollContainer: jest.fn( () => null ),
} ) );

jest.mock( '../index', () => ( {
  useResizeObserver: () => [ jest.fn(), {} ],
} ) );

import useScrollContainer from './index';
import useScrollContainerBox from '../use-scroll-container-box';

describe( 'editor scroll container geometry', () => {
  let container;
  let iframe;
  let iframeBody;

  beforeEach( () => {
    container = document.createElement( 'div' );
    iframe = document.createElement( 'iframe' );
    iframe.name = 'editor-canvas';
    document.body.append( iframe, container );
    iframeBody = iframe.contentDocument.body;
    mockGetScrollContainer.mockClear();
  } );

  afterEach( () => {
    unmountComponentAtNode( container );
    iframe.remove();
    container.remove();
  } );

  it( 'provides iframe scroll geometry on the first render when the canvas already exists', () => {
    const Probe = () => {
      const scrollContainer = useScrollContainer();
      const scrollContainerBox = useScrollContainerBox( scrollContainer );

      return (
        <div
          data-scroll-container-ready={ scrollContainer === iframeBody }
          data-scroll-container-box-ready={ !! scrollContainerBox }
        />
      );
    };

    render( <Probe />, container );

    const probe = container.firstElementChild;
    expect( probe.dataset.scrollContainerReady ).toBe( 'true' );
    expect( probe.dataset.scrollContainerBoxReady ).toBe( 'true' );
  } );
} );
