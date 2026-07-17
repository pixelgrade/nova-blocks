const SUPPORTED_BASE_LAYOUTS = [ 'classic', 'masonry', 'carousel', 'parametric' ];
const SUPPORTED_LAYOUT_STRATEGIES = [ 'lattice' ];
const RECIPE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const normalizeLayoutRecipes = ( recipes ) => {
  if ( ! Array.isArray( recipes ) ) {
    return [];
  }

  return recipes.reduce( ( normalized, recipe ) => {
    if ( ! recipe || 'object' !== typeof recipe ) {
      return normalized;
    }

    const id = 'string' === typeof recipe.id ? recipe.id.trim() : '';
    const label = 'string' === typeof recipe.label ? recipe.label.trim() : '';
    const baseLayout = 'string' === typeof recipe.baseLayout ? recipe.baseLayout.trim() : '';
    const layoutStrategy = 'string' === typeof recipe.layoutStrategy
      ? recipe.layoutStrategy.trim()
      : '';

    if (
      ! RECIPE_ID_PATTERN.test( id ) ||
      ! label ||
      ! SUPPORTED_BASE_LAYOUTS.includes( baseLayout ) ||
      normalized.some( normalizedRecipe => normalizedRecipe.id === id )
    ) {
      return normalized;
    }

    normalized.push( {
      id,
      label,
      baseLayout,
      layoutStrategy: SUPPORTED_LAYOUT_STRATEGIES.includes( layoutStrategy )
        ? layoutStrategy
        : '',
      thumbnail: 'string' === typeof recipe.thumbnail && recipe.thumbnail
        ? recipe.thumbnail
        : baseLayout,
      defaults: recipe.defaults && 'object' === typeof recipe.defaults
        ? { ...recipe.defaults }
        : {},
      capabilities: recipe.capabilities && 'object' === typeof recipe.capabilities
        ? { ...recipe.capabilities }
        : {},
      gateId: 'string' === typeof recipe.gateId ? recipe.gateId : '',
    } );

    return normalized;
  }, [] );
};

export const getLayoutRecipeSelection = ( recipe ) => ( {
  ...( recipe?.defaults || {} ),
  layoutStyle: recipe?.baseLayout || 'classic',
  layoutRecipe: recipe?.id || '',
} );

export const getSelectedCompositionId = ( attributes, recipes ) => {
  const layoutRecipe = attributes?.layoutRecipe || '';
  const hasRecipe = recipes.some( recipe => recipe.id === layoutRecipe );

  return hasRecipe ? layoutRecipe : attributes?.layoutStyle;
};

export const getActiveLayoutRecipe = ( attributes, recipes ) => {
  const layoutRecipe = attributes?.layoutRecipe || '';

  return recipes.find( recipe => recipe.id === layoutRecipe ) || null;
};
