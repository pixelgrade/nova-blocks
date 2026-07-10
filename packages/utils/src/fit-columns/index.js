/**
 * Fit-based responsive columns: as many columns of at least `minColumnWidth`
 * as the container allows, capped at the authored `maxColumns`. A
 * non-positive `minColumnWidth` turns fit mode off and the authored column
 * count wins (backwards-compatible default).
 *
 * Shared by the masonry frontend engine (CJS re-implementation kept in
 * `packages/collection/src/frontend/grid/masonry-layout-engine.js` — keep the
 * math identical) and the editor masonry preview.
 */
export const calculateFitColumnCount = ( {
  containerWidth,
  columnGap = 0,
  minColumnWidth = 0,
  maxColumns = 1,
} ) => {
  const normalizedMax = Math.max( parseInt( maxColumns, 10 ) || 1, 1 );
  const normalizedMinWidth = Number.parseFloat( minColumnWidth );

  if ( ! Number.isFinite( normalizedMinWidth ) || normalizedMinWidth <= 0 ) {
    return normalizedMax;
  }

  const normalizedWidth = Math.max( Number.parseFloat( containerWidth ) || 0, 0 );
  const normalizedGap = Math.max( Number.parseFloat( columnGap ) || 0, 0 );
  const fitting = Math.floor( ( normalizedWidth + normalizedGap ) / ( normalizedMinWidth + normalizedGap ) );

  return Math.min( Math.max( fitting, 1 ), normalizedMax );
};
