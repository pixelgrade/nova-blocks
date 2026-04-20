const getCollectionLayoutCustomProperties = ( { columns, gridGap, verticalGapModifier, pile3dEffect } ) => ( {
  '--nb-collection-columns-count': columns,
  '--nb-grid-spacing-modifier': gridGap,
  '--nb-grid-spacing-multiplier': pile3dEffect ? 2 : 1,
  '--nb-grid-row-spacing-multiplier': verticalGapModifier,
  '--nb-pile-3d-scale': pile3dEffect ? 0.82 : 1,
} );

module.exports = {
  getCollectionLayoutCustomProperties,
};
