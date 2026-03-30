const getCollectionLayoutCustomProperties = ( { columns, gridGap, pile3dEffect } ) => ( {
  '--nb-collection-columns-count': columns,
  '--nb-grid-spacing-modifier': gridGap,
  '--nb-grid-spacing-multiplier': pile3dEffect ? 2 : 1,
  '--nb-pile-3d-scale': pile3dEffect ? 0.82 : 1,
} );

module.exports = {
  getCollectionLayoutCustomProperties,
};
