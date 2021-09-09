export const getOverlayFilterCSSProps = ( attributes ) => {

  const { overlayFilterStrength } = attributes;

  return {
    '--nb-overlay-filter-strength': overlayFilterStrength / 100
  }
}
