import { getCardMediaPaddingTop } from "../index";

export const DENSITY_VALUES = [ 's', 'm', 'l', 'xl' ];

export const isDensityValue = value => DENSITY_VALUES.includes( value );

export const getDensityClassName = ( blockName, density ) => {
  if ( blockName !== 'core/group' || ! isDensityValue( density ) ) {
    return undefined;
  }

  return `nb-density-${ density }`;
};

// Emit this value unitless to match the editor preview, the PHP frontend render
// (block-rendering.php:507), and the SCSS, which consume
// --nb-card-media-container-height as a bare number inside
// calc( 10em + 20em * var(...) / 100 ). A `px` unit here produced invalid CSS
// (length * length) and drifted the saved markup away from older content
// (causing block-validation "unexpected or invalid content" recovery).
const toUnitless = ( value ) => {
  if ( typeof value === 'string' ) {
    const trimmed = value.trim().replace( /px$/, '' );
    const numericValue = Number( trimmed );
    return Number.isNaN( numericValue ) ? value : `${ numericValue }`;
  }

  return value;
};

export const getSpacingCSSProps = ( attributes, existingStyle = {} ) => {

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,
    verticalAlignment,
    contentAreaWidth,
    contentPadding,
    mediaContainerHeight,
    imagePadding,
    imageResizing,
    layoutGutter,
    minHeightFallback,
    thumbnailAspectRatio,
    thumbnailAspectRatioString,
    spacingModifier,
    spacingMultiplierOverride,
    density,
  } = attributes;

  const isOriginalAspectRatio = thumbnailAspectRatioString === 'original';
  const hasDensity = isDensityValue( density );

  const emphasisTopSpacingValue = verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing;
  const emphasisBottomSpacingValue = verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing;

  return {
    '--nb-emphasis-top-spacing': emphasisTopSpacingValue + '',
    '--nb-emphasis-bottom-spacing': emphasisBottomSpacingValue + '',
    '--nb-block-top-spacing': blockTopSpacing + '',
    '--nb-block-bottom-spacing': blockBottomSpacing + '',
    '--nb-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) ),
    '--nb-card-content-area-width': `${ contentAreaWidth }%`,
    '--nb-card-media-container-height': toUnitless(
      existingStyle?.['--nb-card-media-container-height'] ?? mediaContainerHeight
    ),
    '--nb-card-content-padding-multiplier': contentPadding / 100,
    ...( isOriginalAspectRatio ? {} : (() => {
      const paddingTop = parseFloat( getCardMediaPaddingTop( thumbnailAspectRatio ) );
      return {
        '--nb-card-media-padding-top': `${ paddingTop }%`,
        '--nb-card-media-aspect-ratio': 100 / paddingTop,
      };
    })() ),
    '--nb-card-media-object-fit': isOriginalAspectRatio ? 'contain' : ( imageResizing === 'cropped' ? 'cover' : 'scale-down' ),
    '--nb-card-media-padding-multiplier': imagePadding / 100,
    '--nb-card-layout-gap-modifier': layoutGutter / 100,
    '--nb-min-height-fallback': minHeightFallback,
    '--nb-minimum-container-height': minHeightFallback + 'vh',
    ...( hasDensity && spacingModifier === 1 ? {} : {
      '--nb-spacing-modifier': spacingModifier + '',
    } ),
    ...( hasDensity && spacingMultiplierOverride === 1 ? {} : {
      '--nb-spacing-multiplier-override': spacingMultiplierOverride + '',
    } ),
  }
};
