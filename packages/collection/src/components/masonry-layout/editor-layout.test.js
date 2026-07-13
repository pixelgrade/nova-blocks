/**
 * @jest-environment jsdom
 */

import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '@novablocks/utils', () => ( {
  calculateFitColumnCount: jest.fn( () => 3 ),
} ) );

jest.mock( '../../frontend/grid/handle-masonry-grid', () => ( {
  handleMasonryGrid: jest.fn(),
} ) );

import { handleMasonryGrid } from '../../frontend/grid/handle-masonry-grid';
import MasonryLayout from './index';

const renderFixture = ( container, attributes, childIds ) => {
  act( () => {
    render(
      <section data-layout-style="masonry">
        <MasonryLayout className="nb-collection__layout nb-collection__layout--masonry" attributes={ attributes }>
          { childIds.map( childId => (
            <div className="nb-collection__layout-item" data-child-id={ childId } key={ childId } />
          ) ) }
        </MasonryLayout>
      </section>,
      container
    );
  } );
};

describe( 'editor MasonryLayout', () => {
  let container;
  let controller;

  beforeEach( () => {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    controller = {
      destroy: jest.fn(),
      refresh: jest.fn(),
      update: jest.fn(),
    };
    handleMasonryGrid.mockReset();
    handleMasonryGrid.mockReturnValue( controller );
  } );

  afterEach( () => {
    act( () => {
      unmountComponentAtNode( container );
    } );
    container.remove();
  } );

  test( 'renders direct children in source order without column-major wrappers', () => {
    renderFixture( container, { columns: 3, columnsFitMinWidth: 350 }, [ 'header', 'a', 'b', 'c' ] );
    const grid = container.querySelector( '.nb-collection__layout' );

    expect( grid.querySelectorAll( ':scope > .nb-collection__layout-column' ) ).toHaveLength( 0 );
    expect( Array.from( grid.children ).map( child => child.dataset.childId ) ).toEqual( [ 'header', 'a', 'b', 'c' ] );
  } );

  test( 'updates one shared controller and destroys it only when the editor layout unmounts', () => {
    const firstAttributes = { columns: 3, columnsFitMinWidth: 350 };
    renderFixture( container, firstAttributes, [ 'header', 'a', 'b' ] );
    const grid = container.querySelector( '.nb-collection__layout' );
    const block = grid.closest( '[data-layout-style]' );

    expect( handleMasonryGrid ).toHaveBeenLastCalledWith( grid, block, firstAttributes );
    expect( controller.destroy ).not.toHaveBeenCalled();

    const nextAttributes = { columns: 4, columnsFitMinWidth: 350 };
    renderFixture( container, nextAttributes, [ 'header', 'a', 'b', 'c' ] );

    expect( handleMasonryGrid ).toHaveBeenLastCalledWith( grid, block, nextAttributes );
    expect( controller.destroy ).not.toHaveBeenCalled();

    act( () => {
      unmountComponentAtNode( container );
    } );
    expect( controller.destroy ).toHaveBeenCalledTimes( 1 );
  } );
} );
