const normalizeColumnCount = ( columnCount ) => {
  const parsedValue = parseInt( columnCount, 10 );

  if ( ! Number.isFinite( parsedValue ) || parsedValue < 1 ) {
    return 1;
  }

  return parsedValue;
};

const normalizeGap = ( gap ) => {
  const parsedValue = Number.parseFloat( gap );

  if ( ! Number.isFinite( parsedValue ) || parsedValue < 0 ) {
    return 0;
  }

  return parsedValue;
};

const normalizeContainerWidth = ( containerWidth ) => {
  const parsedValue = Number.parseFloat( containerWidth );

  if ( ! Number.isFinite( parsedValue ) || parsedValue < 0 ) {
    return 0;
  }

  return parsedValue;
};

const getMasonryLayoutItems = ( items ) => Array.from( items || [] ).filter( item => (
  item.classList.contains( 'nb-collection__layout-item' ) && ! item.hidden
) );

const calculateColumnWidth = ( {
  containerWidth,
  columnCount,
  columnGap = 0,
  gap = columnGap,
} ) => {
  const normalizedColumns = normalizeColumnCount( columnCount );
  const normalizedColumnGap = normalizeGap( columnGap ?? gap );
  const normalizedWidth = normalizeContainerWidth( containerWidth );
  const totalGapWidth = normalizedColumnGap * Math.max( normalizedColumns - 1, 0 );

  return Math.max( ( normalizedWidth - totalGapWidth ) / normalizedColumns, 0 );
};

const getTopColumnPosition = ( columnHeights ) => {
  const minimumY = Math.min( ...columnHeights );

  return {
    columnIndex: columnHeights.indexOf( minimumY ),
    y: minimumY,
  };
};

const calculateMasonryLayout = ( {
  containerWidth,
  columnCount,
  columnGap = 0,
  rowGap = 0,
  gap = columnGap,
  columnWidth: suppliedColumnWidth,
  itemHeights = [],
} ) => {
  const normalizedColumns = normalizeColumnCount( columnCount );
  const normalizedColumnGap = normalizeGap( columnGap ?? gap );
  const normalizedRowGap = normalizeGap( rowGap );
  const parsedColumnWidth = Number.parseFloat( suppliedColumnWidth );
  const columnWidth = Number.isFinite( parsedColumnWidth ) && parsedColumnWidth >= 0
    ? parsedColumnWidth
    : calculateColumnWidth( {
        containerWidth,
        columnCount: normalizedColumns,
        columnGap: normalizedColumnGap,
      } );
  const columnHeights = Array.from( { length: normalizedColumns }, () => 0 );
  const columnIndexes = [];

  const positions = itemHeights.map( itemHeight => {
    const normalizedItemHeight = normalizeContainerWidth( itemHeight );
    const { columnIndex, y } = getTopColumnPosition( columnHeights );
    const x = ( columnWidth + normalizedColumnGap ) * columnIndex;

    columnHeights[ columnIndex ] = y + normalizedItemHeight + normalizedRowGap;
    columnIndexes.push( columnIndex );

    return { x, y };
  } );

  const tallestColumn = Math.max( ...columnHeights, 0 );
  const containerHeight = tallestColumn > 0 ? tallestColumn - normalizedRowGap : 0;

  return {
    columnWidth,
    positions,
    columnIndexes,
    containerHeight,
  };
};

// Fit-based responsive column derivation lives in `@novablocks/utils`
// (`fit-columns`) so both the editor preview and the frontend handler share
// one ESM implementation. Keep this module ESM because the same dependency
// graph is bundled for both the editor component and the frontend runtime.

const shouldRelayoutForTransitionProperty = ( propertyName ) => {
  const normalizedProperty = String( propertyName || '' ).trim().toLowerCase();

  if ( ! normalizedProperty ) {
    return false;
  }

  return [
    'width',
    'height',
    'min-width',
    'max-width',
    'min-height',
    'max-height',
    'margin',
    'padding',
    'border',
    'inset',
    'top',
    'right',
    'bottom',
    'left',
    'flex-basis',
    'grid-template-rows',
    'grid-template-columns',
  ].some( token => normalizedProperty === token || normalizedProperty.startsWith( `${ token }-` ) );
};

export {
  calculateColumnWidth,
  calculateMasonryLayout,
  getMasonryLayoutItems,
  normalizeColumnCount,
  shouldRelayoutForTransitionProperty,
};
