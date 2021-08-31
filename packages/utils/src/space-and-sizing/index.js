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
    '--novablocks-emphasis-top-spacing': emphasisTopSpacingValue + '',
    '--novablocks-emphasis-bottom-spacing': emphasisBottomSpacingValue + '',
    '--novablocks-block-top-spacing': blockTopSpacing + '',
    '--novablocks-block-bottom-spacing': blockBottomSpacing + '',
    '--novablocks-block-zindex': Math.max( 0, -1 * ( blockTopSpacing + blockBottomSpacing ) ),
  }
}
