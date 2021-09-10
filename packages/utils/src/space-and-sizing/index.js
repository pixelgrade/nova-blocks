export const getSpacingCSSProps = ( attributes ) => {

  const {
    blockTopSpacing,
    blockBottomSpacing,
    emphasisTopSpacing,
    emphasisBottomSpacing,
    verticalAlignment
  } = attributes;

  const emphasisTopSpacingValue = verticalAlignment === 'top' ? Math.abs(emphasisTopSpacing) : emphasisTopSpacing,
    emphasisBottomSpacingValue = verticalAlignment === 'bottom' ? Math.abs(emphasisBottomSpacing) : emphasisBottomSpacing;

  return {
    '--nb-emphasis-top-spacing': emphasisTopSpacingValue + '',
    '--nb-emphasis-bottom-spacing': emphasisBottomSpacingValue + '',
    '--nb-block-top-spacing': blockTopSpacing + '',
    '--nb-block-bottom-spacing': blockBottomSpacing + '',
    '--nb-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) ),
  }
}
