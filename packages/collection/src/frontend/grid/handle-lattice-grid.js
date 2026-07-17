import { addClass, removeClass } from '@novablocks/utils';

import {
  calculateLatticeLayout,
  getResponsiveLatticeColumnCount,
} from './lattice-layout-engine';

const READY_CLASSNAME = 'nb-collection__layout--lattice-ready';
const LAYOUT_EVENT_NAME = 'nb:lattice-layout';
const BASE_LAYOUT_EVENT_NAME = 'nb:layout';
const CONTROLLER_PROPERTY = '__nbLatticeLayoutController';
const DESTROY_PROPERTY = '__nbDestroyLatticeLayout';
const DEFAULT_GAP = 26;
const DEFAULT_CAPTION_HEIGHT = 50;
const MUTATION_OPTIONS = {
  attributes: true,
  attributeFilter: [ 'class', 'hidden' ],
  childList: true,
  subtree: true,
};

const parseLength = ( value, fallback = 0 ) => {
  const parsedValue = Number.parseFloat( value );

  return Number.isFinite( parsedValue ) ? parsedValue : fallback;
};

const getDirectLayoutItems = ( grid ) => Array.from( grid.children ).filter( item => (
  item.classList.contains( 'nb-collection__layout-item' )
) );

const clearItemStyles = ( item ) => {
  item.style.gridColumn = '';
  item.style.gridRow = '';
};

const calculateLatticeGeometry = ( {
  containerWidth,
  columnCount,
  columnGap,
  captionHeight,
} ) => {
  const totalGapWidth = Math.max( columnCount - 1, 0 ) * columnGap;
  const columnWidth = Math.max( ( containerWidth - totalGapWidth ) / columnCount, 0 );
  const rowHeight = columnWidth * 4 / 3 + captionHeight;

  return { columnWidth, rowHeight };
};

const createLatticeGridController = ( grid, initialBlock, initialAttributes ) => {
  const ownerDocument = grid.ownerDocument || document;
  const ownerWindow = ownerDocument.defaultView || window;
  const ResizeObserverConstructor = ownerWindow.ResizeObserver;
  const MutationObserverConstructor = ownerWindow.MutationObserver;
  const sourceIndexes = new WeakMap();
  let nextSourceIndex = 0;
  let block = initialBlock;
  let attributes = initialAttributes;
  let frameId = null;
  let resizeObserver = null;
  let mutationObserver = null;
  let destroyed = false;

  const requestFrame = callback => ownerWindow.requestAnimationFrame( callback );
  const cancelFrame = id => ownerWindow.cancelAnimationFrame( id );

  const observeMutations = () => {
    if ( mutationObserver && ! destroyed ) {
      mutationObserver.observe( grid, MUTATION_OPTIONS );
    }
  };

  const pauseMutations = () => {
    if ( mutationObserver ) {
      mutationObserver.disconnect();
    }
  };

  const captureSourceIndexes = () => {
    const items = getDirectLayoutItems( grid );

    items.forEach( item => {
      if ( ! sourceIndexes.has( item ) ) {
        sourceIndexes.set( item, nextSourceIndex++ );
      }
    } );

    return items;
  };

  const sortBySourceIndex = ( items ) => [ ...items ].sort( ( first, second ) => (
    sourceIndexes.get( first ) - sourceIndexes.get( second )
  ) );

  const reorderItems = ( orderedItems ) => {
    const currentItems = getDirectLayoutItems( grid );

    if ( currentItems.length === orderedItems.length &&
      currentItems.every( ( item, index ) => item === orderedItems[ index ] ) ) {
      return;
    }

    pauseMutations();
    orderedItems.forEach( item => grid.appendChild( item ) );
    observeMutations();
  };

  const restoreSourceOrder = () => {
    reorderItems( sortBySourceIndex( captureSourceIndexes() ) );
  };

  const dispatchLayoutEvents = ( detail ) => {
    ownerWindow.dispatchEvent( new ownerWindow.CustomEvent( LAYOUT_EVENT_NAME, {
      detail: { block, grid, ...detail },
    } ) );
    ownerWindow.dispatchEvent( new ownerWindow.Event( BASE_LAYOUT_EVENT_NAME ) );
  };

  const resetLayout = ( { restoreOrder = true } = {} ) => {
    if ( restoreOrder ) {
      restoreSourceOrder();
    }

    getDirectLayoutItems( grid ).forEach( clearItemStyles );
    grid.style.gridTemplateColumns = '';
    grid.style.gridAutoRows = '';
    removeClass( grid, READY_CLASSNAME );
  };

  const layout = () => {
    if ( destroyed ) {
      return;
    }

    const allItems = captureSourceIndexes();
    restoreSourceOrder();
    const visibleItems = sortBySourceIndex( allItems ).filter( item => ! item.hidden );
    const activeColumns = getResponsiveLatticeColumnCount( {
      authoredColumns: attributes.columns,
      viewportWidth: ownerWindow.innerWidth,
    } );
    const computedStyles = ownerWindow.getComputedStyle( grid );
    const columnGap = parseLength( computedStyles.columnGap, parseLength( computedStyles.gap, DEFAULT_GAP ) );
    const captionHeight = parseLength(
      computedStyles.getPropertyValue( '--nb-lattice-caption-height' ),
      DEFAULT_CAPTION_HEIGHT
    );
    const containerWidth = grid.getBoundingClientRect().width;
    const { columnWidth, rowHeight } = calculateLatticeGeometry( {
      containerWidth,
      columnCount: activeColumns,
      columnGap,
      captionHeight,
    } );
    const result = calculateLatticeLayout( {
      items: visibleItems,
      columnCount: activeColumns,
    } );
    const hiddenItems = sortBySourceIndex( allItems ).filter( item => item.hidden );

    reorderItems( [ ...result.placementOrder, ...hiddenItems ] );
    grid.style.gridTemplateColumns = `repeat(${ activeColumns }, minmax(0, 1fr))`;
    grid.style.gridAutoRows = `${ rowHeight }px`;

    result.placements.forEach( placement => {
      placement.item.style.gridColumn = `${ placement.column } / span ${ placement.columnSpan }`;
      placement.item.style.gridRow = `${ placement.row } / span ${ placement.rowSpan }`;
    } );
    hiddenItems.forEach( clearItemStyles );

    addClass( grid, READY_CLASSNAME );
    addClass( block, 'novablocks-block--ready' );
    dispatchLayoutEvents( {
      ...result,
      activeColumns,
      captionHeight,
      columnGap,
      columnWidth,
      rowHeight,
    } );
  };

  const scheduleLayout = () => {
    if ( destroyed || null !== frameId ) {
      return;
    }

    frameId = requestFrame( () => {
      frameId = null;
      layout();
    } );
  };

  const refresh = () => {
    captureSourceIndexes();
    scheduleLayout();
    return controller;
  };

  const update = ( nextBlock, nextAttributes ) => {
    if ( nextBlock ) {
      block = nextBlock;
    }

    if ( nextAttributes ) {
      attributes = nextAttributes;
    }

    return controller;
  };

  const destroy = () => {
    if ( destroyed ) {
      return;
    }

    destroyed = true;

    if ( null !== frameId ) {
      cancelFrame( frameId );
      frameId = null;
    }

    if ( resizeObserver ) {
      resizeObserver.disconnect();
    } else {
      ownerWindow.removeEventListener( 'resize', scheduleLayout );
    }

    if ( mutationObserver ) {
      mutationObserver.disconnect();
    }

    resetLayout();

    if ( grid[ CONTROLLER_PROPERTY ] === controller ) {
      delete grid[ CONTROLLER_PROPERTY ];
    }

    if ( grid[ DESTROY_PROPERTY ] === destroy ) {
      delete grid[ DESTROY_PROPERTY ];
    }
  };

  const controller = {
    destroy,
    layout,
    refresh,
    update,
    get destroyed() {
      return destroyed;
    },
  };

  captureSourceIndexes();

  if ( 'function' === typeof ResizeObserverConstructor ) {
    resizeObserver = new ResizeObserverConstructor( scheduleLayout );
    resizeObserver.observe( grid );
  } else {
    ownerWindow.addEventListener( 'resize', scheduleLayout );
  }

  if ( 'function' === typeof MutationObserverConstructor ) {
    mutationObserver = new MutationObserverConstructor( refresh );
    observeMutations();
  }

  grid[ CONTROLLER_PROPERTY ] = controller;
  grid[ DESTROY_PROPERTY ] = destroy;
  scheduleLayout();

  return controller;
};

const handleLatticeGrid = ( grid, block, attributes ) => {
  const existingController = grid[ CONTROLLER_PROPERTY ];

  if ( existingController && ! existingController.destroyed ) {
    return existingController.update( block, attributes ).refresh();
  }

  return createLatticeGridController( grid, block, attributes );
};

export {
  calculateLatticeGeometry,
  handleLatticeGrid,
};
