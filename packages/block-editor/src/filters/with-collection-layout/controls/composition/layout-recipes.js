import { getPresetApplyPatch } from '../../../../preset-engine';

const SUPPORTED_BASE_LAYOUTS = [ 'classic', 'masonry', 'carousel', 'parametric' ];
const SUPPORTED_LAYOUT_STRATEGIES = [ 'lattice' ];
const RECIPE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const CONTROL_ATTRIBUTE_PATTERN = /^[a-z][A-Za-z0-9]*$/;
const SUPPORTED_FINE_TUNE_CONTROL_TYPES = [ 'radio', 'range' ];

const normalizeFineTuneOptions = ( options ) => {
  if ( ! Array.isArray( options ) ) {
    return [];
  }

  const registeredValues = new Set();

  return options.reduce( ( normalized, option ) => {
    const label = 'string' === typeof option?.label ? option.label.trim() : '';
    const value = option?.value;
    const isSupportedValue = 'string' === typeof value ||
      ( 'number' === typeof value && Number.isFinite( value ) );
    const valueKey = `${ typeof value }:${ value }`;

    if ( ! label || ! isSupportedValue || registeredValues.has( valueKey ) ) {
      return normalized;
    }

    registeredValues.add( valueKey );
    normalized.push( { label, value } );

    return normalized;
  }, [] );
};

const normalizeFineTuneControl = ( control ) => {
  if ( ! control || 'object' !== typeof control ) {
    return null;
  }

  const attribute = 'string' === typeof control.attribute ? control.attribute.trim() : '';
  const type = 'string' === typeof control.type ? control.type.trim() : '';
  const label = 'string' === typeof control.label ? control.label.trim() : '';
  const help = 'string' === typeof control.help ? control.help.trim() : '';

  if (
    ! CONTROL_ATTRIBUTE_PATTERN.test( attribute ) ||
    ! SUPPORTED_FINE_TUNE_CONTROL_TYPES.includes( type ) ||
    ! label
  ) {
    return null;
  }

  if ( 'radio' === type ) {
    const options = normalizeFineTuneOptions( control.options );

    return options.length >= 2
      ? { attribute, type, label, help, options }
      : null;
  }

  const min = Number( control.min );
  const max = Number( control.max );
  const step = undefined === control.step ? 1 : Number( control.step );

  if ( ! Number.isFinite( min ) || ! Number.isFinite( max ) || min > max ||
    ! Number.isFinite( step ) || step <= 0 ) {
    return null;
  }

  return { attribute, type, label, help, min, max, step };
};

export const normalizeRecipeFineTune = ( groups ) => {
  if ( ! Array.isArray( groups ) ) {
    return [];
  }

  const registeredAttributes = new Set();

  return groups.reduce( ( normalized, group ) => {
    const label = 'string' === typeof group?.label ? group.label.trim() : '';

    if ( ! label || ! Array.isArray( group.controls ) ) {
      return normalized;
    }

    const controls = group.controls.reduce( ( groupControls, control ) => {
      const normalizedControl = normalizeFineTuneControl( control );

      if ( ! normalizedControl || registeredAttributes.has( normalizedControl.attribute ) ) {
        return groupControls;
      }

      registeredAttributes.add( normalizedControl.attribute );
      groupControls.push( normalizedControl );

      return groupControls;
    }, [] );

    if ( controls.length ) {
      normalized.push( { label, controls } );
    }

    return normalized;
  }, [] );
};

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
      fineTune: normalizeRecipeFineTune( recipe.fineTune ),
      gateId: 'string' === typeof recipe.gateId ? recipe.gateId : '',
    } );

    return normalized;
  }, [] );
};

export const getLayoutRecipeManagedAttributes = ( recipes ) => {
  const managedAttributes = [];
  const registeredAttributes = new Set();

  ( Array.isArray( recipes ) ? recipes : [] ).forEach( recipe => {
    Object.keys( recipe?.defaults || {} ).forEach( attribute => {
      if ( ! registeredAttributes.has( attribute ) ) {
        registeredAttributes.add( attribute );
        managedAttributes.push( attribute );
      }
    } );
  } );

  return managedAttributes;
};

const getLayoutRecipeResetPatch = ( recipe, recipes ) => getPresetApplyPatch( {
  id: recipe?.id || '',
  managedAttributes: getLayoutRecipeManagedAttributes( recipes ),
  values: recipe?.defaults || {},
} );

export const getLayoutRecipeSelection = ( recipe, recipes = [ recipe ] ) => ( {
  ...getLayoutRecipeResetPatch( recipe, recipes ),
  ...( false === recipe?.capabilities?.pile3d
    ? { pile3dEffect: false, pileParallaxAmount: 0 }
    : {} ),
  layoutStyle: recipe?.baseLayout || 'classic',
  layoutRecipe: recipe?.id || '',
} );

export const getLayoutStyleSelection = ( layoutStyle, recipes ) => ( {
  ...getLayoutRecipeResetPatch( null, recipes ),
  layoutStyle,
  layoutRecipe: '',
  headerIntegration: 'standard',
  ...( 'parametric' === layoutStyle ? { pile3dEffect: false } : {} ),
} );

export const getSelectedCompositionId = ( attributes, recipes ) => {
  const activeRecipe = getActiveLayoutRecipe( attributes, recipes );

  return activeRecipe ? activeRecipe.id : attributes?.layoutStyle;
};

export const getActiveLayoutRecipe = ( attributes, recipes ) => {
  const layoutRecipe = attributes?.layoutRecipe || '';
  const layoutStyle = attributes?.layoutStyle || '';

  return recipes.find( recipe => recipe.id === layoutRecipe && recipe.baseLayout === layoutStyle ) || null;
};

export const layoutRecipeSupports = ( attributes, recipes, capability ) => {
  const activeRecipe = getActiveLayoutRecipe( attributes, recipes );

  return ! activeRecipe || false !== activeRecipe?.capabilities?.[ capability ];
};
