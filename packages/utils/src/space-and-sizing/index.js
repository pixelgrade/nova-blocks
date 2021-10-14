import { getCardMediaPaddingTop } from "../index";

export const getSpacingCSSProps = ( attributes ) => {

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,
    verticalAlignment,
    contentAreaWidth,
    contentPadding,
    imagePadding,
    imageResizing,
    layoutGutter,
    minHeightFallback,
    thumbnailAspectRatio,
  } = attributes;

  const emphasisTopSpacingValue = verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
    emphasisBottomSpacingValue = verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing;

  return {
    '--nb-emphasis-top-spacing': emphasisTopSpacingValue + '',
    '--nb-emphasis-bottom-spacing': emphasisBottomSpacingValue + '',
    '--nb-block-top-spacing': blockTopSpacing + '',
    '--nb-block-bottom-spacing': blockBottomSpacing + '',
    '--nb-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) ),
    '--nb-card-content-area-width': `${ contentAreaWidth }%`,
    '--nb-card-content-padding-multiplier': contentPadding / 100,
    '--nb-card-media-padding-top': getCardMediaPaddingTop( thumbnailAspectRatio ),
    '--nb-card-media-object-fit': imageResizing === 'cropped' ? 'cover' : 'scale-down',
    '--nb-card-media-padding-multiplier': imagePadding / 100,
    '--nb-collection-gutter-multiplier': layoutGutter / 100,
    '--nb-minimum-container-height': minHeightFallback + 'vh',
  }
}
