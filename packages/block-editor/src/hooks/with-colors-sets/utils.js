import { normalizeVariationValue } from "@novablocks/utils";

export const getVariationFromSignal = ( signal ) => {

  if ( signal === 1 ) {
    return 3;
  }

  if ( signal === 2 ) {
    return 6;
  }

  if ( signal === 3 ) {
    return 10;
  }

  return 1;
}

export const getSignalFromVariation = ( variation ) => {

  if ( variation === 1 ) {
    return 0;
  }

  if ( variation < 5 ) {
    return 1;
  }

  if ( variation < 9 ) {
    return 2;
  }

  return 3;
}

export const isFunctionalPalette = palette => {
  return palette.label.charAt(0) === '_';
}

export const mapPalettesToColorPalette = palette => {
  const { colors, sourceIndex } = palette;
  return {
    name: palette.label,
    color: colors[sourceIndex].value
  };
}

export const getAttributesFromSignal = ( signal, palette, paletteVariation ) => {
  const { sourceIndex } = palette;
  const sourceSignal = sourceIndex < 4 ? 1 : sourceIndex < 8 ? 2 : 3;

  const newAttributes = {
    palette: palette.id,
    paletteVariation,
    useSourceColorAsReference: false
  }

  if ( signal === sourceSignal ) {
    Object.assign( newAttributes, compileVariationAttributes( palette, sourceIndex + 1, true ) );
  }

  return newAttributes;
}

export const compileVariationAttributes = ( palette, paletteVariation, useSourceColorAsReference ) => {
  const { sourceIndex } = palette;
  const siteVariation = window?.customify_config?.sm_site_color_variation?.value || 1;
  let offset = siteVariation - sourceIndex - 1;
  let newPaletteVariation = useSourceColorAsReference ? paletteVariation + offset : paletteVariation;
  newPaletteVariation = normalizeVariationValue( newPaletteVariation );

  return {
    useSourceColorAsReference: useSourceColorAsReference,
    paletteVariation: newPaletteVariation,
  }
}

export const getAbsoluteVariation = ( palette, paletteVariation, useSourceColorAsReference ) => {
  const { sourceIndex } = palette;
  const siteVariation = window?.customify_config?.sm_site_color_variation?.value || 1;
  let offset = siteVariation - sourceIndex - 1;

  return useSourceColorAsReference ? paletteVariation + offset : paletteVariation - offset;
}

export const getCurrentPalette = ( props ) => {

  const {
    settings: {
      palettes
    },
    attributes: {
      palette
    }
  } = props;

  return palettes.find( paletteIterator => paletteIterator.id === palette );
}

export const getAbsoluteColorVariation = ( props ) => {

  const {
    settings: {
      customify_config
    },
    attributes: {
      paletteVariation,
      useSourceColorAsReference
    }
  } = props;

  const currentPalette = getCurrentPalette( props );
  const { sourceIndex } = currentPalette;
  const siteVariation = customify_config?.sm_site_color_variation?.value || 1;
  const siteVariationOffset = useSourceColorAsReference ? 0 : ( siteVariation - 1 );
  const colorReferenceOffset = useSourceColorAsReference ? sourceIndex : 0;

  return paletteVariation + colorReferenceOffset + siteVariationOffset;
}

export const getCurrentPaletteRelativeColorVariation = ( paletteVariation, props ) => {
  return getRelativeColorVariation( getCurrentPalette( props ), paletteVariation, props );
}

export const getRelativeColorVariation = ( paletteConfig, paletteVariation, props ) => {

  const {
    settings: {
      customify_config
    },
    attributes: {
      useSourceColorAsReference
    }
  } = props;

  const { sourceIndex } = paletteConfig;
  const siteVariation = customify_config?.sm_site_color_variation?.value || 1;
  const siteVariationOffset = useSourceColorAsReference ? 0 : ( siteVariation - 1 );
  const colorReferenceOffset = useSourceColorAsReference ? sourceIndex : 0;

  return normalizeVariationValue( paletteVariation - colorReferenceOffset - siteVariationOffset )
}

export const disableFunctionalColorsOnBlocks = [
  'novablocks/header',
  'novablocks/header-row',
  'novablocks/hero',
  'novablocks/media',
  'novablocks/cards-collection',
  'novablocks/posts-collection',
];
