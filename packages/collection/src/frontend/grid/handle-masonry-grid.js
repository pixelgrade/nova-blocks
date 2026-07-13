import { addClass, below, calculateFitColumnCount, removeClass } from "@novablocks/utils";

import {
  calculateColumnWidth,
  calculateMasonryLayout,
  getMasonryLayoutItems,
  normalizeColumnCount,
  shouldRelayoutForTransitionProperty,
} from './masonry-layout-engine';

const COLUMN_CLASSNAME_PATTERN = /(^|\s)nb-collection__layout-item--col-\S+/g;
const READY_CLASSNAME = 'nb-collection__layout--masonry-ready';
const LAYOUT_EVENT_NAME = 'nb:masonry-layout';
const BASE_LAYOUT_EVENT_NAME = 'nb:layout';
const CONTROLLER_PROPERTY = '__nbMasonryLayoutController';
const DESTROY_PROPERTY = '__nbDestroyMasonryLayout';
const TABLET_MEDIA_QUERY = '(min-width: 768px)';

const clearItemColumnClasses = ( item ) => {
  item.className = item.className.replace( COLUMN_CLASSNAME_PATTERN, '' ).trim();
};

const applyItemColumnClasses = ( item, columnIndex ) => {
  clearItemColumnClasses( item );
  item.classList.add(
    `nb-collection__layout-item--col-${ columnIndex }`,
    `nb-collection__layout-item--col-${ columnIndex % 2 === 0 ? 'even' : 'odd' }`
  );
};

const clearItemStyles = ( item ) => {
  item.style.position = '';
  item.style.top = '';
  item.style.left = '';
  item.style.width = '';
  item.style.transform = '';
  clearItemColumnClasses( item );
};

const getDirectLayoutItems = ( grid ) => Array.from( grid.children ).filter( item => (
  item.classList.contains( 'nb-collection__layout-item' )
) );

const getComputedGap = ( value, fallbackValue ) => {
  const parsedValue = Number.parseFloat( value );
  const fallbackGap = Number.parseFloat( fallbackValue );

  if ( Number.isFinite( parsedValue ) ) {
    return parsedValue;
  }

  if ( Number.isFinite( fallbackGap ) ) {
    return fallbackGap;
  }

  return 0;
};

const isBelowTablet = ( ownerWindow ) => {
  if ( typeof ownerWindow.matchMedia === 'function' ) {
    return ! ownerWindow.matchMedia( TABLET_MEDIA_QUERY ).matches;
  }

  return below( 'tablet' );
};

const createMasonryGridController = ( grid, initialBlock, initialAttributes ) => {
  const ownerDocument = grid.ownerDocument || document;
  const ownerWindow = ownerDocument.defaultView || window;
  const ResizeObserverConstructor = ownerWindow.ResizeObserver;
  const MutationObserverConstructor = ownerWindow.MutationObserver;
  const ElementConstructor = ownerWindow.Element;
  const observedItems = new Set();
  const observedImages = new Map();
  let block = initialBlock;
  let attributes = initialAttributes;
  let frameId = null;
  let resizeObserver = null;
  let mutationObserver = null;
  let destroyed = false;

  const requestFrame = callback => ownerWindow.requestAnimationFrame( callback );
  const cancelFrame = id => ownerWindow.cancelAnimationFrame( id );

  const dispatchLayoutEvents = ( layoutDetail = {} ) => {
    ownerWindow.dispatchEvent( new ownerWindow.CustomEvent( LAYOUT_EVENT_NAME, {
      detail: {
        block,
        grid,
        ...layoutDetail,
      },
    } ) );

    ownerWindow.dispatchEvent( new ownerWindow.Event( BASE_LAYOUT_EVENT_NAME ) );
  };

  const getGridGaps = () => {
    const styles = ownerWindow.getComputedStyle( grid );

    return {
      columnGap: getComputedGap( styles.columnGap, styles.gap ),
      rowGap: getComputedGap( styles.rowGap, styles.gap ),
    };
  };

  const resetLayout = () => {
    removeClass( grid, READY_CLASSNAME );
    grid.style.height = '';
    getDirectLayoutItems( grid ).forEach( clearItemStyles );
  };

  const layout = () => {
    if ( destroyed ) {
      return;
    }

    const allItems = getDirectLayoutItems( grid );
    const items = getMasonryLayoutItems( allItems );

    allItems.filter( item => ! items.includes( item ) ).forEach( clearItemStyles );

    if ( ! items.length ) {
      resetLayout();
      addClass( block, 'novablocks-block--ready' );
      dispatchLayoutEvents( { activeColumns: 0 } );
      return;
    }

    const containerWidth = grid.getBoundingClientRect().width;
    const { columnGap, rowGap } = getGridGaps();
    const fitMinWidth = Number.parseFloat( attributes.columnsFitMinWidth ) || 0;
    const activeColumns = fitMinWidth > 0
      ? calculateFitColumnCount( {
          containerWidth,
          columnGap,
          minColumnWidth: fitMinWidth,
          maxColumns: attributes.columns,
        } )
      : ( isBelowTablet( ownerWindow ) ? 1 : normalizeColumnCount( attributes.columns ) );

    if ( activeColumns <= 1 ) {
      resetLayout();
      addClass( block, 'novablocks-block--ready' );
      dispatchLayoutEvents( { activeColumns } );
      return;
    }

    const columnWidth = calculateColumnWidth( {
      containerWidth,
      columnCount: activeColumns,
      columnGap,
    } );
    const widthValue = `${ columnWidth }px`;

    items.forEach( item => {
      item.style.position = 'absolute';
      item.style.top = '0';
      item.style.left = '0';

      if ( item.style.width !== widthValue ) {
        item.style.width = widthValue;
      }

      if ( ! item.style.transform ) {
        item.style.transform = 'translate(0px, 0px)';
      }
    } );

    const itemHeights = items.map( item => item.getBoundingClientRect().height );
    const { positions, columnIndexes, containerHeight } = calculateMasonryLayout( {
      containerWidth,
      columnCount: activeColumns,
      columnGap,
      rowGap,
      columnWidth,
      itemHeights,
    } );

    positions.forEach( ( { x, y }, index ) => {
      const transform = `translate(${ x }px, ${ y }px)`;

      if ( items[ index ].style.transform !== transform ) {
        items[ index ].style.transform = transform;
      }

      applyItemColumnClasses( items[ index ], columnIndexes[ index ] );
    } );

    const heightValue = `${ containerHeight }px`;
    if ( grid.style.height !== heightValue ) {
      grid.style.height = heightValue;
    }

    addClass( grid, READY_CLASSNAME );
    addClass( block, 'novablocks-block--ready' );
    dispatchLayoutEvents( { activeColumns } );
  };

  const scheduleLayout = () => {
    if ( destroyed || frameId !== null ) {
      return;
    }

    frameId = requestFrame( () => {
      frameId = null;
      layout();
    } );
  };

  const observeImage = ( image ) => {
    if ( observedImages.has( image ) ) {
      return observedImages.get( image ).settled;
    }

    let settlePendingImage = null;
    const onSettle = () => {
      if ( settlePendingImage ) {
        settlePendingImage();
        settlePendingImage = null;
      }

      scheduleLayout();
    };
    const settled = image.complete
      ? ( typeof image.decode === 'function'
          ? image.decode().catch( () => {} )
          : Promise.resolve() )
      : new Promise( resolve => {
          settlePendingImage = resolve;
        } );

    image.addEventListener( 'load', onSettle );
    image.addEventListener( 'error', onSettle );
    observedImages.set( image, { onSettle, settled } );

    if ( image.complete ) {
      settled.finally( scheduleLayout );
    }

    return settled;
  };

  const stopObservingImage = ( image ) => {
    const imageState = observedImages.get( image );

    if ( ! imageState ) {
      return;
    }

    image.removeEventListener( 'load', imageState.onSettle );
    image.removeEventListener( 'error', imageState.onSettle );
    observedImages.delete( image );
  };

  const syncObservedItems = () => {
    const items = getDirectLayoutItems( grid );
    const currentItems = new Set( items );

    observedItems.forEach( item => {
      if ( currentItems.has( item ) ) {
        return;
      }

      if ( resizeObserver ) {
        resizeObserver.unobserve( item );
      }
      item.querySelectorAll( 'img' ).forEach( stopObservingImage );
      clearItemStyles( item );
      observedItems.delete( item );
    } );

    items.forEach( item => {
      if ( ! observedItems.has( item ) ) {
        observedItems.add( item );
        if ( resizeObserver ) {
          resizeObserver.observe( item );
        }
      }

      item.querySelectorAll( 'img' ).forEach( observeImage );
    } );

    observedImages.forEach( ( imageState, image ) => {
      if ( ! grid.contains( image ) ) {
        stopObservingImage( image );
      }
    } );

    return items;
  };

  const refresh = () => {
    if ( destroyed ) {
      return controller;
    }

    syncObservedItems();
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

  const onTransitionComplete = event => {
    const targetItem = ElementConstructor && event.target instanceof ElementConstructor
      ? event.target.closest( '.nb-collection__layout-item' )
      : null;

    if ( targetItem && grid.contains( targetItem ) && shouldRelayoutForTransitionProperty( event.propertyName ) ) {
      scheduleLayout();
    }
  };

  const onFontsLoaded = () => scheduleLayout();

  const destroy = () => {
    if ( destroyed ) {
      return;
    }

    destroyed = true;

    if ( frameId !== null ) {
      cancelFrame( frameId );
      frameId = null;
    }

    if ( resizeObserver ) {
      resizeObserver.disconnect();
    }

    if ( mutationObserver ) {
      mutationObserver.disconnect();
    }

    observedImages.forEach( ( imageState, image ) => stopObservingImage( image ) );
    observedItems.clear();
    grid.removeEventListener( 'transitionend', onTransitionComplete );
    grid.removeEventListener( 'transitioncancel', onTransitionComplete );

    if ( ownerDocument.fonts && typeof ownerDocument.fonts.removeEventListener === 'function' ) {
      ownerDocument.fonts.removeEventListener( 'loadingdone', onFontsLoaded );
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

  if ( typeof ResizeObserverConstructor === 'function' ) {
    resizeObserver = new ResizeObserverConstructor( scheduleLayout );
    resizeObserver.observe( grid );
  }

  syncObservedItems();

  if ( typeof MutationObserverConstructor === 'function' ) {
    mutationObserver = new MutationObserverConstructor( () => refresh() );
    mutationObserver.observe( grid, {
      attributes: true,
      attributeFilter: [ 'hidden' ],
      childList: true,
      subtree: true,
    } );
  }

  grid.addEventListener( 'transitionend', onTransitionComplete );
  grid.addEventListener( 'transitioncancel', onTransitionComplete );

  if ( ownerDocument.fonts && typeof ownerDocument.fonts.addEventListener === 'function' ) {
    ownerDocument.fonts.addEventListener( 'loadingdone', onFontsLoaded );
  }

  grid[ CONTROLLER_PROPERTY ] = controller;
  grid[ DESTROY_PROPERTY ] = destroy;

  const initialMedia = getMasonryLayoutItems( getDirectLayoutItems( grid ) )
    .flatMap( item => Array.from( item.querySelectorAll( 'img' ) ) )
    .map( observeImage );

  Promise.all( initialMedia ).finally( scheduleLayout );

  return controller;
};

export const handleMasonryGrid = ( grid, block, attributes ) => {
  const currentController = grid[ CONTROLLER_PROPERTY ];

  if ( currentController && ! currentController.destroyed ) {
    currentController.update( block, attributes );
    currentController.refresh();
    return currentController;
  }

  if ( typeof grid[ DESTROY_PROPERTY ] === 'function' ) {
    grid[ DESTROY_PROPERTY ]();
  }

  return createMasonryGridController( grid, block, attributes );
};
