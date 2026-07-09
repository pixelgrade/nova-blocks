const supportsPile3dEffect = ( { layoutStyle, cardLayout, pile3dEffect } ) => {
  return [ 'classic', 'masonry' ].includes( layoutStyle )
    && 'stacked' === cardLayout
    && !! pile3dEffect;
};

const getCollectionLayoutCustomProperties = ( attributes ) => {
  const { columns, gridGap, verticalGapModifier } = attributes;
  const hasPile3dEffect = supportsPile3dEffect( attributes );

  return {
    '--nb-collection-columns-count': columns,
    '--nb-grid-spacing-modifier': gridGap,
    '--nb-grid-spacing-multiplier': hasPile3dEffect ? 2 : 1,
    '--nb-grid-row-spacing-multiplier': verticalGapModifier,
    '--nb-pile-3d-scale': hasPile3dEffect ? 0.82 : 1,
  };
};

module.exports = {
  getCollectionLayoutCustomProperties,
  supportsPile3dEffect,
};
