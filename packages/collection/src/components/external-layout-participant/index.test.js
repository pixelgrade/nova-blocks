/**
 * @jest-environment jsdom
 */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import ExternalLayoutParticipant, { getExternalLayoutParticipant } from './index';

describe( 'ExternalLayoutParticipant', () => {
  const recipes = [ {
    id: 'anima-collage',
    baseLayout: 'masonry',
    capabilities: { headerIntegration: true },
  } ];

  test( 'normalizes the integrated site header only for Masonry', () => {
    expect( getExternalLayoutParticipant( {
      headerIntegration: 'grid-item',
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    }, recipes ) ).toEqual( {
      id: 'site-header',
      role: 'site-header-proxy',
    } );

    expect( getExternalLayoutParticipant( {
      headerIntegration: 'standard',
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    }, recipes ) ).toBeNull();
    expect( getExternalLayoutParticipant( {
      headerIntegration: 'grid-item',
      layoutStyle: 'classic',
      layoutRecipe: 'anima-collage',
    }, recipes ) ).toBeNull();
  } );

  test( 'fails closed when the recipe is missing or lacks Header integration capability', () => {
    const attributes = {
      headerIntegration: 'grid-item',
      layoutStyle: 'masonry',
      layoutRecipe: 'missing-recipe',
    };

    expect( getExternalLayoutParticipant( attributes, recipes ) ).toBeNull();
    expect( getExternalLayoutParticipant( {
      ...attributes,
      layoutRecipe: 'anima-collage',
    }, [ { ...recipes[0], capabilities: {} } ] ) ).toBeNull();
  } );

  test( 'renders exactly one empty, hidden proxy instead of header markup', () => {
    const markup = renderToStaticMarkup( <ExternalLayoutParticipant attributes={ {
      headerIntegration: 'grid-item',
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    } } recipes={ recipes } /> );
    const container = document.createElement( 'div' );
    container.innerHTML = markup;
    const proxies = container.querySelectorAll( '[data-nb-external-participant="site-header"]' );

    expect( proxies ).toHaveLength( 1 );
    expect( proxies[ 0 ].classList.contains( 'nb-collection__layout-item' ) ).toBe( true );
    expect( proxies[ 0 ].classList.contains( 'nb-collection__layout-item--external' ) ).toBe( true );
    expect( proxies[ 0 ].getAttribute( 'data-nb-collection-item-role' ) ).toBe( 'site-header-proxy' );
    expect( proxies[ 0 ].getAttribute( 'aria-hidden' ) ).toBe( 'true' );
    expect( proxies[ 0 ].hidden ).toBe( true );
    expect( proxies[ 0 ].childNodes ).toHaveLength( 0 );
    expect( markup ).not.toContain( '<header' );
  } );

  test( 'renders nothing in standard mode', () => {
    expect( renderToStaticMarkup( <ExternalLayoutParticipant attributes={ {
      headerIntegration: 'standard',
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    } } recipes={ recipes } /> ) ).toBe( '' );
  } );

  test( 'renders no proxy for an unknown recipe', () => {
    expect( renderToStaticMarkup( <ExternalLayoutParticipant attributes={ {
      headerIntegration: 'grid-item',
      layoutStyle: 'masonry',
      layoutRecipe: 'missing-recipe',
    } } recipes={ recipes } /> ) ).toBe( '' );
  } );
} );
