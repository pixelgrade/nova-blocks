export const getOverlayFilterCSSProps = ( attributes ) => {

  const { overlayFilterStrength } = attributes;

  return {
    '--supernova-overlay-filter-strength': overlayFilterStrength / 100
  }
}
