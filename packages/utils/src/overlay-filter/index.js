export const getOverlayFilterCSSProps = ( attributes ) => {

  const {
    overlayFilterStrength,
    overlayFilterHoverBorderSize,
  } = attributes;

  const props = {
    '--nb-overlay-filter-strength': overlayFilterStrength / 100
  };

  if ( typeof overlayFilterHoverBorderSize === 'number' ) {
    props['--nb-overlay-filter-hover-border-size'] = `${ overlayFilterHoverBorderSize }px`;
  }

  return props;
};
