export const getOverlayFilterCSSProps = ( attributes ) => {

  const {
    overlayFilterType,
    overlayFilterStrength,
    overlayFilterHoverBorderSize,
  } = attributes;

  const effectiveOverlayFilterStrength = overlayFilterType === 'duotone' ? 0 : ( overlayFilterStrength || 0 ) / 100;

  const props = {
    '--nb-overlay-filter-strength': effectiveOverlayFilterStrength
  };

  if ( typeof overlayFilterHoverBorderSize === 'number' ) {
    props['--nb-overlay-filter-hover-border-size'] = `${ overlayFilterHoverBorderSize }px`;
  }

  return props;
};
