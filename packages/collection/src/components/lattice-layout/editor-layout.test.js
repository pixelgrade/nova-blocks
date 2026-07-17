/**
 * @jest-environment jsdom
 */

import React from 'react';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock( '@wordpress/element', () => require( 'react' ) );

jest.mock( '../../frontend/grid/handle-lattice-grid', () => ( {
  handleLatticeGrid: jest.fn(),
} ) );

import { handleLatticeGrid } from '../../frontend/grid/handle-lattice-grid';
import LatticeLayout from './index';

const renderFixture = ( container, attributes, childIds ) => {
  act( () => {
    render(
      <section data-layout-style="classic" data-layout-strategy="lattice">
        <LatticeLayout className="nb-collection__layout nb-collection__layout--classic nb-collection__layout--lattice" attributes={ attributes }>
          { childIds.map( childId => (
            <div className="nb-collection__layout-item" data-child-id={ childId } key={ childId } />
          ) ) }
        </LatticeLayout>
      </section>,
      container
    );
  } );
};

describe( 'editor LatticeLayout', () => {
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
    handleLatticeGrid.mockReset();
    handleLatticeGrid.mockReturnValue( controller );
  } );

  afterEach( () => {
    act( () => {
      unmountComponentAtNode( container );
    } );
    container.remove();
  } );

  test( 'uses the shared controller for direct editor children', () => {
    const attributes = { columns: 5, layoutStyle: 'classic', layoutRecipe: 'anima-lattice' };
    renderFixture( container, attributes, [ 'a', 'b', 'c' ] );
    const grid = container.querySelector( '.nb-collection__layout' );
    const block = grid.closest( '[data-layout-style]' );

    expect( Array.from( grid.children ).map( child => child.dataset.childId ) )
      .toEqual( [ 'a', 'b', 'c' ] );
    expect( handleLatticeGrid ).toHaveBeenLastCalledWith( grid, block, attributes );
  } );

  test( 'updates one controller and destroys it only when Lattice unmounts', () => {
    renderFixture( container, { columns: 5 }, [ 'a', 'b' ] );
    renderFixture( container, { columns: 6 }, [ 'a', 'b', 'c' ] );

    expect( handleLatticeGrid ).toHaveBeenCalledTimes( 2 );
    expect( controller.destroy ).not.toHaveBeenCalled();

    act( () => {
      unmountComponentAtNode( container );
    } );
    expect( controller.destroy ).toHaveBeenCalledTimes( 1 );
  } );
} );
