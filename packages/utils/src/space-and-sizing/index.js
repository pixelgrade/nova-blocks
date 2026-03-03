import { getCardMediaPaddingTop } from "../index";

const normalizePxUnit = ( value ) => {
  if ( typeof value === 'number' ) {
    return `${ value }px`;
  }

  if ( typeof value === 'string' ) {
    const trimmed = value.trim();

    if ( trimmed.endsWith( 'px' ) ) {
      return value;
    }

    const numericValue = Number( trimmed );
    if ( ! Number.isNaN( numericValue ) ) {
      return `${ numericValue }px`;
    }
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
    spacingModifier,
    spacingMultiplierOverride,
  } = attributes;

  const emphasisTopSpacingValue = verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing;
  const emphasisBottomSpacingValue = verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing;

  return {
    '--nb-emphasis-top-spacing': emphasisTopSpacingValue + '',
    '--nb-emphasis-bottom-spacing': emphasisBottomSpacingValue + '',
    '--nb-block-top-spacing': blockTopSpacing + '',
    '--nb-block-bottom-spacing': blockBottomSpacing + '',
    '--nb-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) ),
    '--nb-card-content-area-width': `${ contentAreaWidth }%`,
    '--nb-card-media-container-height': normalizePxUnit(
      existingStyle?.['--nb-card-media-container-height'] ?? mediaContainerHeight
    ),
    '--nb-card-content-padding-multiplier': contentPadding / 100,
    '--nb-card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
    '--nb-card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
    '--nb-card-media-padding-multiplier': imagePadding / 100,
    '--nb-card-layout-gap-modifier': layoutGutter / 100,
    '--nb-min-height-fallback': minHeightFallback,
    '--nb-minimum-container-height': minHeightFallback + 'vh',
    '--nb-spacing-modifier': spacingModifier + '',
    '--nb-spacing-multiplier-override': spacingMultiplierOverride + '',
  }
};
