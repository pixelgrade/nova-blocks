import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/element', () => require( 'react' ) );

const mockCalls = [];
let mockInnerBlocks = [];

jest.mock( '@wordpress/data', () => ( {
  useDispatch: () => ( {
    updateBlockAttributes: ( ...args ) => mockCalls.push( [ 'updateBlockAttributes', ...args ] ),
    __unstableMarkNextChangeAsNotPersistent: () => mockCalls.push( [ 'markNotPersistent' ] ),
  } ),
} ) );

jest.mock( '../../hooks', () => ( {
  useInnerBlocks: () => mockInnerBlocks,
} ) );

import useInnerBlocksLock from './index';

const QUERY_LOCK = { remove: true, move: true };

const Probe = ( { attributes } ) => {
  useInnerBlocksLock( 'collection', QUERY_LOCK, attributes, 'novablocks/supernova-item' );
  return null;
};

describe( 'useInnerBlocksLock', () => {
  let container;

  beforeEach( () => {
    mockCalls.length = 0;
    container = document.createElement( 'div' );
    document.body.appendChild( container );
  } );

  afterEach( () => {
    act( () => {
      unmountComponentAtNode( container );
    } );
    container.remove();
  } );

  test( 'legacy items without the derived lock get it in one non-persistent change (#543)', () => {
    mockInnerBlocks = [
      { clientId: 'a', name: 'novablocks/supernova-item', attributes: {} },
      { clientId: 'b', name: 'novablocks/supernova-item', attributes: { lock: QUERY_LOCK } },
      { clientId: 'c', name: 'novablocks/supernova-item', attributes: { lock: { remove: false, move: false } } },
      { clientId: 'd', name: 'core/paragraph', attributes: {} },
    ];

    act( () => {
      render( <Probe attributes={ {} }/>, container );
    } );

    expect( mockCalls ).toEqual( [
      [ 'markNotPersistent' ],
      [ 'updateBlockAttributes', [ 'a', 'c' ], { lock: QUERY_LOCK } ],
    ] );
  } );

  test( 'items that already carry the lock produce no change', () => {
    mockInnerBlocks = [
      { clientId: 'a', name: 'novablocks/supernova-item', attributes: { lock: QUERY_LOCK } },
      { clientId: 'b', name: 'novablocks/supernova-item', attributes: { lock: { move: true, remove: true } } },
    ];

    act( () => {
      render( <Probe attributes={ {} }/>, container );
    } );

    expect( mockCalls ).toEqual( [] );
  } );
} );
