jest.mock( '@wordpress/element', () => require( 'react' ) );
jest.mock( 'classnames', () => ( ...values ) => values.filter( Boolean ).join( ' ' ) );
jest.mock( '../index', () => ( {
  CarouselLayout: () => null,
  ClassicLayout: () => null,
  LatticeLayout: () => null,
  MasonryLayout: () => null,
  ParametricLayout: () => null,
} ) );

import { getCollectionLayoutStrategy } from './index';

describe( 'CollectionLayout recipe strategy', () => {
  const recipes = [ {
    id: 'anima-lattice',
    baseLayout: 'classic',
    layoutStrategy: 'lattice',
  } ];

  test( 'selects Lattice only for the active matching recipe', () => {
    expect( getCollectionLayoutStrategy( {
      layoutStyle: 'classic',
      layoutRecipe: 'anima-lattice',
    }, recipes ) ).toBe( 'lattice' );

    expect( getCollectionLayoutStrategy( {
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-lattice',
    }, recipes ) ).toBe( '' );

    expect( getCollectionLayoutStrategy( {
      layoutStyle: 'classic',
      layoutRecipe: 'missing',
    }, recipes ) ).toBe( '' );
  } );
} );
