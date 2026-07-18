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
const WIDTH_CHANGE_EPSILON = 0.5;
const CAPTION_HEIGHT_PROPERTY = '--nb-lattice-caption-height';
const CAPTION_REGION_SELECTOR = '.nb-supernova-item__content--contains-title';
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

const normalizeObservedClassNames = value => String( value || '' )
  .split( /\s+/ )
  .filter( className => className && READY_CLASSNAME !== className )
  .sort()
  .join( ' ' );

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

const measureSharedCaptionHeight = ( grid, block ) => {
  // Read the recipe/theme baseline without a stale measurement from a previous
  // layout pass. The semantic title region may then raise that one shared shelf
  // when authored typography or a narrow module needs more room.
  grid.style.removeProperty( CAPTION_HEIGHT_PROPERTY );

  const computedStyles = grid.ownerDocument.defaultView.getComputedStyle( grid );
  const baselineHeight = parseLength(
    computedStyles.getPropertyValue( CAPTION_HEIGHT_PROPERTY ),
    DEFAULT_CAPTION_HEIGHT
  );
  const usesCaptionShelf = block.classList.contains( 'nb-supernova--card-layout-vertical' ) ||
    block.classList.contains( 'nb-supernova--card-layout-vertical-reverse' );

  if ( ! usesCaptionShelf ) {
    return baselineHeight;
  }

  const measuredHeight = Array.from( grid.querySelectorAll( CAPTION_REGION_SELECTOR ) )
    .filter( region => {
      const item = region.closest( '.nb-collection__layout-item' );

      return ! item?.hidden && ! region.closest( '.nb-card--no-media, .format-quote' );
    } )
    .reduce( ( height, region ) => Math.max( height, region.scrollHeight ), baselineHeight );
  const captionHeight = Math.ceil( measuredHeight );

  if ( captionHeight > baselineHeight ) {
    grid.style.setProperty( CAPTION_HEIGHT_PROPERTY, `${ captionHeight }px` );
  }

  return captionHeight;
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
  let lastContainerWidth = null;
  let settleAfterResize = false;
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
    let highestExplicitIndex = -1;

    items.forEach( item => {
      const explicitIndex = Number.parseInt( item.dataset?.nbLatticeSourceIndex, 10 );

      if ( Number.isInteger( explicitIndex ) && explicitIndex >= 0 ) {
        sourceIndexes.set( item, explicitIndex );
        highestExplicitIndex = Math.max( highestExplicitIndex, explicitIndex );
      }
    } );

    nextSourceIndex = Math.max( nextSourceIndex, highestExplicitIndex + 1 );

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
    grid.style.removeProperty( CAPTION_HEIGHT_PROPERTY );
    removeClass( grid, READY_CLASSNAME );
  };

  const layout = () => {
    if ( destroyed ) {
      return;
    }

    const allItems = captureSourceIndexes();
    restoreSourceOrder();
    const visibleItems = sortBySourceIndex( allItems ).filter( item => ! item.hidden );
    const computedStyles = ownerWindow.getComputedStyle( grid );
    const columnGap = parseLength( computedStyles.columnGap, parseLength( computedStyles.gap, DEFAULT_GAP ) );
    const captionHeight = measureSharedCaptionHeight( grid, block );
    const containerWidth = grid.getBoundingClientRect().width;
    lastContainerWidth = containerWidth;
    const activeColumns = getResponsiveLatticeColumnCount( {
      authoredColumns: attributes.columns,
      viewportWidth: containerWidth || ownerWindow.innerWidth,
    } );
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

    if ( ! grid.classList.contains( READY_CLASSNAME ) ) {
      addClass( grid, READY_CLASSNAME );
    }

    if ( ! block.classList.contains( 'novablocks-block--ready' ) ) {
      addClass( block, 'novablocks-block--ready' );
    }
    dispatchLayoutEvents( {
      ...result,
      activeColumns,
      captionHeight,
      columnGap,
      columnWidth,
      rowHeight,
    } );

    if ( settleAfterResize ) {
      settleAfterResize = false;
      scheduleLayout();
    }
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

  const scheduleLayoutForResize = entries => {
    const gridEntry = Array.from( entries || [] ).find( entry => entry.target === grid );
    const observedWidth = parseLength(
      gridEntry?.contentRect?.width,
      grid.getBoundingClientRect().width
    );

    if ( null !== lastContainerWidth &&
      Math.abs( observedWidth - lastContainerWidth ) < WIDTH_CHANGE_EPSILON ) {
      return;
    }

    settleAfterResize = true;
    scheduleLayout();
  };

  const scheduleLayoutForViewportResize = () => {
    settleAfterResize = true;
    scheduleLayout();
  };

  const refresh = () => {
    captureSourceIndexes();
    scheduleLayout();
    return controller;
  };

  const refreshForMutations = records => {
    const mutations = Array.from( records || [] );
    const onlyOwnReadyClassChanged = mutations.length > 0 && mutations.every( record => (
      'attributes' === record.type &&
      grid === record.target &&
      'class' === record.attributeName &&
      normalizeObservedClassNames( record.oldValue ) ===
        normalizeObservedClassNames( grid.getAttribute( 'class' ) )
    ) );

    if ( onlyOwnReadyClassChanged ) {
      return controller;
    }

    return refresh();
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
    settleAfterResize = false;

    if ( null !== frameId ) {
      cancelFrame( frameId );
      frameId = null;
    }

    if ( resizeObserver ) {
      resizeObserver.disconnect();
    }
    ownerWindow.removeEventListener( 'resize', scheduleLayoutForViewportResize );

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
    resizeObserver = new ResizeObserverConstructor( scheduleLayoutForResize );
    resizeObserver.observe( grid );
  }
  ownerWindow.addEventListener( 'resize', scheduleLayoutForViewportResize );

  if ( 'function' === typeof MutationObserverConstructor ) {
    mutationObserver = new MutationObserverConstructor( refreshForMutations );
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
