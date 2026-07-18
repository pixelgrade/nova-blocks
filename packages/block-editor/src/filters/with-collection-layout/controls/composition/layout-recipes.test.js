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
      layoutStrategy: '',
      fineTune: [],
      gateId: '',
    } ] );
  } );

  test( 'normalizes only the supported Lattice placement strategy', () => {
    const recipes = normalizeLayoutRecipes( [
      {
        ...animaRecipe,
        id: 'anima-lattice',
        label: 'Lattice',
        baseLayout: 'classic',
        layoutStrategy: 'lattice',
      },
      {
        ...animaRecipe,
        id: 'unsafe-strategy',
        label: 'Unsafe strategy',
        baseLayout: 'classic',
        layoutStrategy: 'masonry<script>',
      },
    ] );

    expect( recipes[0].layoutStrategy ).toBe( 'lattice' );
    expect( recipes[1].layoutStrategy ).toBe( '' );
  } );

  test( 'normalizes data-only recipe Fine-tune groups and rejects unsafe controls', () => {
    const [ recipe ] = normalizeLayoutRecipes( [ {
      ...animaRecipe,
      id: 'anima-lattice',
      label: 'Lattice',
      baseLayout: 'classic',
      layoutStrategy: 'lattice',
      fineTune: [
        {
          label: 'Lattice Anatomy',
          controls: [
            {
              attribute: 'latticeModuleShape',
              type: 'radio',
              label: 'Module Shape',
              help: 'Shape every shared media module.',
              options: [
                { label: 'Portrait 3:4', value: 'portrait' },
                { label: 'Square 1:1', value: 'square' },
              ],
            },
            {
              attribute: 'latticePackingWindow',
              type: 'range',
              label: 'Packing Flexibility',
              min: 0,
              max: 6,
              step: 1,
            },
            {
              attribute: 'unsafe attribute',
              type: 'component',
              label: 'Unsafe',
            },
          ],
        },
        { label: 'Empty', controls: [] },
      ],
    } ] );

    expect( recipe.fineTune ).toEqual( [ {
      label: 'Lattice Anatomy',
      controls: [
        {
          attribute: 'latticeModuleShape',
          type: 'radio',
          label: 'Module Shape',
          help: 'Shape every shared media module.',
          options: [
            { label: 'Portrait 3:4', value: 'portrait' },
            { label: 'Square 1:1', value: 'square' },
          ],
        },
        {
          attribute: 'latticePackingWindow',
          type: 'range',
          label: 'Packing Flexibility',
          help: '',
          min: 0,
          max: 6,
          step: 1,
        },
      ],
    } ] );
  } );

  test( 'persists recipe identity independently from the base layout', () => {
    expect( layoutAttributes.layoutRecipe ).toEqual( {
      type: 'string',
      default: '',
    } );
  } );

  test( 'registers stable Lattice engine attributes with legacy-compatible defaults', () => {
    expect( layoutAttributes ).toEqual( expect.objectContaining( {
      latticeModuleShape: { type: 'string', default: 'portrait' },
      latticePackingWindow: { type: 'number', default: 3 },
      latticeStickyFeatureSize: { type: 'number', default: 2 },
      latticeTallMediaSpan: { type: 'number', default: 2 },
      latticePanoramaSpan: { type: 'number', default: 3 },
    } ) );
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
