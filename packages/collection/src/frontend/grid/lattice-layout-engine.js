const DEFAULT_PULL_FORWARD_WINDOW = 3;
const DEFAULT_PHONE_BREAKPOINT = 600;
const DEFAULT_TABLET_BREAKPOINT = 1024;

const normalizeLatticeColumnCount = ( columnCount ) => {
  const parsedValue = parseInt( columnCount, 10 );

  return Number.isFinite( parsedValue ) && parsedValue > 0 ? parsedValue : 1;
};

const hasClass = ( item, className ) => {
  if ( item?.classList?.contains ) {
    if ( item.classList.contains( className ) ) {
      return true;
    }

    if ( 'function' === typeof item.querySelector ) {
      return null !== item.querySelector( `.${ className }` );
    }
  }

  const classNames = Array.isArray( item?.classNames )
    ? item.classNames
    : String( item?.className || '' ).split( /\s+/ );

  return classNames.includes( className );
};

const getLatticePreferredSpan = ( item, columnCount ) => {
  const normalizedColumns = normalizeLatticeColumnCount( columnCount );

  if ( 1 === normalizedColumns ) {
    return { columnSpan: 1, rowSpan: 1 };
  }

  let columnSpan = 1;
  let rowSpan = 1;

  if ( hasClass( item, 'is-sticky-post' ) ) {
    columnSpan = 2;
    rowSpan = 2;
  } else if ( hasClass( item, 'format-quote' ) ) {
    columnSpan = 2;
  } else if ( hasClass( item, 'nb-card--no-media' ) ) {
    columnSpan = 1;
  } else if ( hasClass( item, 'nb-card--media-wide' ) ) {
    columnSpan = 3;
  } else if ( hasClass( item, 'nb-card--media-landscape' ) ) {
    columnSpan = 2;
  } else if ( hasClass( item, 'nb-card--media-tall' ) ) {
    rowSpan = 2;
  }

  return {
    columnSpan: Math.min( columnSpan, normalizedColumns ),
    rowSpan,
  };
};

const getResponsiveLatticeColumnCount = ( {
  authoredColumns,
  viewportWidth,
  phoneBreakpoint = DEFAULT_PHONE_BREAKPOINT,
  tabletBreakpoint = DEFAULT_TABLET_BREAKPOINT,
} ) => {
  const normalizedColumns = normalizeLatticeColumnCount( authoredColumns );
  const normalizedViewportWidth = Number.parseFloat( viewportWidth );

  if ( Number.isFinite( normalizedViewportWidth ) && normalizedViewportWidth < phoneBreakpoint ) {
    return 1;
  }

  if ( Number.isFinite( normalizedViewportWidth ) && normalizedViewportWidth < tabletBreakpoint ) {
    return Math.min( normalizedColumns, 2 );
  }

  return normalizedColumns;
};

const getLatticeDemotions = ( span ) => {
  const demotions = [];
  let columnSpan = normalizeLatticeColumnCount( span?.columnSpan );
  let rowSpan = normalizeLatticeColumnCount( span?.rowSpan );

  while ( columnSpan > 1 ) {
    columnSpan--;
    demotions.push( { columnSpan, rowSpan } );
  }

  while ( rowSpan > 1 ) {
    rowSpan--;
    demotions.push( { columnSpan, rowSpan } );
  }

  return demotions;
};

const getCellKey = ( row, column ) => `${ row }:${ column }`;

const getCellIndex = ( row, column, columnCount ) => (
  ( row - 1 ) * columnCount + column - 1
);

const getFirstGap = ( occupied, columnCount ) => {
  let index = 0;

  while ( true ) {
    const row = Math.floor( index / columnCount ) + 1;
    const column = index % columnCount + 1;

    if ( ! occupied.has( getCellKey( row, column ) ) ) {
      return { row, column };
    }

    index++;
  }
};

const spanFits = ( occupied, columnCount, position, span ) => {
  if ( position.column + span.columnSpan - 1 > columnCount ) {
    return false;
  }

  for ( let row = position.row; row < position.row + span.rowSpan; row++ ) {
    for ( let column = position.column; column < position.column + span.columnSpan; column++ ) {
      if ( occupied.has( getCellKey( row, column ) ) ) {
        return false;
      }
    }
  }

  return true;
};

const reserveSpan = ( occupied, position, span ) => {
  for ( let row = position.row; row < position.row + span.rowSpan; row++ ) {
    for ( let column = position.column; column < position.column + span.columnSpan; column++ ) {
      occupied.add( getCellKey( row, column ) );
    }
  }
};

const createOccupiedCells = ( placements ) => {
  const occupied = new Set();

  placements.forEach( placement => reserveSpan( occupied, placement, placement ) );

  return occupied;
};

const findFirstInteriorGapIndex = ( placements, columnCount ) => {
  const occupied = createOccupiedCells( placements );
  const occupiedIndexes = [ ...occupied ].map( key => {
    const [ row, column ] = key.split( ':' ).map( Number );
    return getCellIndex( row, column, columnCount );
  } );
  const lastOccupiedIndex = Math.max( ...occupiedIndexes, -1 );

  for ( let index = 0; index < lastOccupiedIndex; index++ ) {
    const row = Math.floor( index / columnCount ) + 1;
    const column = index % columnCount + 1;

    if ( ! occupied.has( getCellKey( row, column ) ) ) {
      return index;
    }
  }

  return -1;
};

const closeTrailingInteriorGaps = ( placements, columnCount ) => {
  let firstGapIndex = findFirstInteriorGapIndex( placements, columnCount );

  while ( -1 !== firstGapIndex ) {
    const protrudingPlacement = placements.find( placement => (
      placement.rowSpan > 1 &&
      getCellIndex(
        placement.row + placement.rowSpan - 1,
        placement.column + placement.columnSpan - 1,
        columnCount
      ) > firstGapIndex
    ) );

    if ( ! protrudingPlacement ) {
      break;
    }

    protrudingPlacement.rowSpan = 1;
    protrudingPlacement.demoted = true;
    firstGapIndex = findFirstInteriorGapIndex( placements, columnCount );
  }
};

const calculateLatticeLayout = ( {
  items = [],
  columnCount,
  pullForwardWindow = DEFAULT_PULL_FORWARD_WINDOW,
} ) => {
  const normalizedColumns = normalizeLatticeColumnCount( columnCount );
  const queue = Array.from( items || [] ).map( ( item, sourceIndex ) => ( {
    item,
    sourceIndex,
  } ) );
  const occupied = new Set();
  const placements = [];

  while ( queue.length ) {
    const position = getFirstGap( occupied, normalizedColumns );
    const maximumCandidateIndex = Math.min(
      Math.max( parseInt( pullForwardWindow, 10 ) || 0, 0 ),
      queue.length - 1
    );
    let selectedIndex = -1;
    let selectedSpan = null;

    for ( let index = 0; index <= maximumCandidateIndex; index++ ) {
      const preferredSpan = getLatticePreferredSpan( queue[ index ].item, normalizedColumns );

      if ( spanFits( occupied, normalizedColumns, position, preferredSpan ) ) {
        selectedIndex = index;
        selectedSpan = preferredSpan;
        break;
      }
    }

    if ( -1 === selectedIndex ) {
      selectedIndex = 0;
      const preferredSpan = getLatticePreferredSpan( queue[0].item, normalizedColumns );
      selectedSpan = getLatticeDemotions( preferredSpan ).find( span => (
        spanFits( occupied, normalizedColumns, position, span )
      ) ) || { columnSpan: 1, rowSpan: 1 };
    }

    const [ selected ] = queue.splice( selectedIndex, 1 );
    const preferredSpan = getLatticePreferredSpan( selected.item, normalizedColumns );
    const placement = {
      item: selected.item,
      sourceIndex: selected.sourceIndex,
      row: position.row,
      column: position.column,
      columnSpan: selectedSpan.columnSpan,
      rowSpan: selectedSpan.rowSpan,
      pulledForward: selectedIndex > 0,
      demoted: selectedSpan.columnSpan !== preferredSpan.columnSpan ||
        selectedSpan.rowSpan !== preferredSpan.rowSpan,
    };

    reserveSpan( occupied, position, selectedSpan );
    placements.push( placement );
  }

  closeTrailingInteriorGaps( placements, normalizedColumns );

  const rowCount = placements.reduce( ( count, placement ) => (
    Math.max( count, placement.row + placement.rowSpan - 1 )
  ), 0 );

  return {
    columnCount: normalizedColumns,
    placements,
    placementOrder: placements.map( placement => placement.item ),
    rowCount,
  };
};

export {
  calculateLatticeLayout,
  getLatticeDemotions,
  getLatticePreferredSpan,
  getResponsiveLatticeColumnCount,
  normalizeLatticeColumnCount,
};
