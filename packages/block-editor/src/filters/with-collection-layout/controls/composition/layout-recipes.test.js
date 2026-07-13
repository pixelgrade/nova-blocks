import {
  getActiveLayoutRecipe,
  getLayoutRecipeSelection,
  getSelectedCompositionId,
  normalizeLayoutRecipes,
} from './layout-recipes';
import layoutAttributes from '../../attributes.json';

describe( 'collection layout recipes', () => {
  const animaRecipe = {
    id: 'anima-collage',
    label: 'Collage Grid',
    baseLayout: 'masonry',
    thumbnail: 'masonry',
    defaults: {
      columns: 4,
      columnsFitMinWidth: 420,
      thumbnailAspectRatioString: 'original',
    },
    capabilities: {
      headerIntegration: true,
      itemGap: true,
      grid3d: true,
    },
  };

  test( 'normalizes an Anima recipe without adding a Plus gate', () => {
    expect( normalizeLayoutRecipes( [ animaRecipe ] ) ).toEqual( [ {
      ...animaRecipe,
      gateId: '',
    } ] );
  } );

  test( 'persists recipe identity independently from the base layout', () => {
    expect( layoutAttributes.layoutRecipe ).toEqual( {
      type: 'string',
      default: '',
    } );
  } );

  test( 'selecting a recipe preserves its editable defaults but pins its engine and identity', () => {
    const [ recipe ] = normalizeLayoutRecipes( [ {
      ...animaRecipe,
      defaults: {
        ...animaRecipe.defaults,
        layoutStyle: 'parametric',
        layoutRecipe: 'wrong-recipe',
      },
    } ] );

    expect( getLayoutRecipeSelection( recipe ) ).toEqual( {
      columns: 4,
      columnsFitMinWidth: 420,
      thumbnailAspectRatioString: 'original',
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    } );
  } );

  test( 'uses the registered recipe as the selected composition without changing the base layout', () => {
    const recipes = normalizeLayoutRecipes( [ animaRecipe ] );

    expect( getSelectedCompositionId( {
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    }, recipes ) ).toBe( 'anima-collage' );

    expect( getSelectedCompositionId( {
      layoutStyle: 'masonry',
      layoutRecipe: 'missing-recipe',
    }, recipes ) ).toBe( 'masonry' );

    expect( getActiveLayoutRecipe( {
      layoutStyle: 'masonry',
      layoutRecipe: 'anima-collage',
    }, recipes ) ).toEqual( recipes[0] );

    expect( getActiveLayoutRecipe( {
      layoutStyle: 'masonry',
      layoutRecipe: 'missing-recipe',
    }, recipes ) ).toBeNull();
  } );

  test( 'rejects malformed recipes and unsupported base layouts', () => {
    expect( normalizeLayoutRecipes( [
      null,
      {},
      { id: 'missing-label', baseLayout: 'masonry' },
      { id: 'wrong-layout', label: 'Wrong', baseLayout: 'collage' },
      { id: 'unsafe id', label: 'Unsafe', baseLayout: 'masonry' },
    ] ) ).toEqual( [] );
  } );

  test( 'keeps the first valid recipe when integrations register duplicate ids', () => {
    const recipes = normalizeLayoutRecipes( [
      animaRecipe,
      {
        ...animaRecipe,
        label: 'Conflicting Collage',
        baseLayout: 'parametric',
      },
    ] );

    expect( recipes ).toHaveLength( 1 );
    expect( recipes[0].label ).toBe( 'Collage Grid' );
    expect( recipes[0].baseLayout ).toBe( 'masonry' );
  } );
} );
