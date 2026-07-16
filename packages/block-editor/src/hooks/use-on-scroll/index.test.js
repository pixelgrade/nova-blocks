import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import { useLayoutEffect } from 'react';

jest.mock( '@wordpress/element', () => require( 'react' ) );

import useOnScroll from './index';

describe( 'useOnScroll', () => {
  let container;
  let scrollContainer;

  beforeEach( () => {
    container = document.createElement( 'div' );
    scrollContainer = document.createElement( 'div' );
    document.body.appendChild( container );
  } );

  afterEach( () => {
    unmountComponentAtNode( container );
    container.remove();
  } );

  it( 'listens before descendant layout effects can trigger scrolling', () => {
    const onScroll = jest.fn();

    const Probe = () => {
      useOnScroll( scrollContainer, onScroll );

      useLayoutEffect( () => {
        scrollContainer.dispatchEvent( new Event( 'scroll' ) );
      }, [] );

      return null;
    };

    act( () => {
      render( <Probe />, container );
    } );

    expect( onScroll ).toHaveBeenCalledTimes( 1 );
  } );

  it( 'listens on the document when the root scrolling element is used', () => {
    const onScroll = jest.fn();
    const rootScroller = document.documentElement;
    const originalScrollingElement = Object.getOwnPropertyDescriptor(
      document,
      'scrollingElement'
    );

    Object.defineProperty( document, 'scrollingElement', {
      configurable: true,
      value: rootScroller,
    } );

    const Probe = () => {
      useOnScroll( rootScroller, onScroll );

      useLayoutEffect( () => {
        document.dispatchEvent( new Event( 'scroll' ) );
      }, [] );

      return null;
    };

    act( () => {
      render( <Probe />, container );
    } );

    expect( onScroll ).toHaveBeenCalledTimes( 1 );

    if ( originalScrollingElement ) {
      Object.defineProperty( document, 'scrollingElement', originalScrollingElement );
    } else {
      delete document.scrollingElement;
    }
  } );
} );
