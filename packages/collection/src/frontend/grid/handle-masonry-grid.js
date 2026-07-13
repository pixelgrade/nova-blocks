import { addClass, below, calculateFitColumnCount, removeClass } from "@novablocks/utils";

const {
  calculateColumnWidth,
  calculateMasonryLayout,
  getMasonryLayoutItems,
  normalizeColumnCount,
  shouldRelayoutForTransitionProperty,
} = require( './masonry-layout-engine' );

const COLUMN_CLASSNAME_PATTERN = /(^|\s)nb-collection__layout-item--col-\S+/g;

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

const READY_CLASSNAME = 'nb-collection__layout--masonry-ready';
const LAYOUT_EVENT_NAME = 'nb:masonry-layout';
const BASE_LAYOUT_EVENT_NAME = 'nb:layout';

const dispatchLayoutEvents = ( block, grid, layoutDetail = {} ) => {
	window.dispatchEvent( new CustomEvent( LAYOUT_EVENT_NAME, {
		detail: {
			block,
			grid,
			...layoutDetail,
		},
	} ) );

	window.dispatchEvent( new Event( BASE_LAYOUT_EVENT_NAME ) );
};

const clearItemStyles = ( item ) => {
  item.style.position = '';
  item.style.top = '';
  item.style.left = '';
  item.style.width = '';
  item.style.transform = '';
  clearItemColumnClasses( item );
};

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

const getGridGaps = ( grid ) => {
  const styles = window.getComputedStyle( grid );

  return {
    columnGap: getComputedGap( styles.columnGap, styles.gap ),
    rowGap: getComputedGap( styles.rowGap, styles.gap ),
  };
};

const waitForImage = ( image ) => {
  if ( image.complete ) {
    if ( typeof image.decode === 'function' ) {
      return image.decode().catch( () => {} );
    }

    return Promise.resolve();
  }

  return new Promise( resolve => {
    const finalize = () => {
      image.removeEventListener( 'load', finalize );
      image.removeEventListener( 'error', finalize );
      resolve();
    };

    image.addEventListener( 'load', finalize, { once: true } );
    image.addEventListener( 'error', finalize, { once: true } );
  } );
};

const waitForMedia = ( items ) => {
  const images = items.flatMap( item => Array.from( item.querySelectorAll( 'img' ) ) );

  if ( ! images.length ) {
    return Promise.resolve();
  }

  return Promise.all( images.map( waitForImage ) );
};

export const handleMasonryGrid = ( grid, block, attributes ) => {
  if ( typeof grid.__nbDestroyMasonryLayout === 'function' ) {
    grid.__nbDestroyMasonryLayout();
  }

  const allItems = Array.from( grid.children ).filter( item => item.classList.contains( 'nb-collection__layout-item' ) );

  if ( ! allItems.length ) {
    addClass( block, 'novablocks-block--ready' );
    return;
  }

  let frameId = null;
  let containerObserver = null;
  let itemObserver = null;
  let itemStateObserver = null;
  let destroyed = false;
  let onTransitionComplete = null;

  const resetLayout = () => {
    removeClass( grid, READY_CLASSNAME );
    grid.style.height = '';
    allItems.forEach( clearItemStyles );
  };

  const layout = () => {
    if ( destroyed ) {
      return;
    }

    const items = getMasonryLayoutItems( allItems );

    allItems.filter( item => ! items.includes( item ) ).forEach( clearItemStyles );

    if ( ! items.length ) {
      resetLayout();
      addClass( block, 'novablocks-block--ready' );
      dispatchLayoutEvents( block, grid, { activeColumns: 0 } );
      return;
    }

    const containerWidth = grid.getBoundingClientRect().width;
    const { columnGap, rowGap } = getGridGaps( grid );

    // Fit-based responsive columns (columnsFitMinWidth > 0): the container
    // decides how many min-width columns fit, capped at the authored count.
    // Without it, keep the legacy rule: authored columns, 1 below tablet.
    const fitMinWidth = Number.parseFloat( attributes.columnsFitMinWidth ) || 0;
    const activeColumns = fitMinWidth > 0
      ? calculateFitColumnCount( {
          containerWidth,
          columnGap,
          minColumnWidth: fitMinWidth,
          maxColumns: attributes.columns,
        } )
      : ( below( 'tablet' ) ? 1 : normalizeColumnCount( attributes.columns ) );

    if ( activeColumns <= 1 ) {
      resetLayout();
      addClass( block, 'novablocks-block--ready' );
      dispatchLayoutEvents( block, grid, { activeColumns } );
      return;
    }
    const columnWidth = calculateColumnWidth( {
      containerWidth,
      columnCount: activeColumns,
      columnGap,
    } );

    items.forEach( item => {
      item.style.position = 'absolute';
      item.style.top = '0';
      item.style.left = '0';
      item.style.width = `${ columnWidth }px`;
      item.style.transform = 'translate(0px, 0px)';
    } );

    const itemHeights = items.map( item => item.getBoundingClientRect().height );
    const { positions, columnIndexes, containerHeight } = calculateMasonryLayout( {
      containerWidth,
      columnCount: activeColumns,
      columnGap,
      rowGap,
      itemHeights,
    } );

    positions.forEach( ( { x, y }, index ) => {
      items[ index ].style.transform = `translate(${ x }px, ${ y }px)`;
      applyItemColumnClasses( items[ index ], columnIndexes[ index ] );
    } );

    grid.style.height = `${ containerHeight }px`;
    addClass( grid, READY_CLASSNAME );
    addClass( block, 'novablocks-block--ready' );
    dispatchLayoutEvents( block, grid, { activeColumns } );
  };

  const scheduleLayout = () => {
    if ( destroyed || frameId !== null ) {
      return;
    }

    frameId = window.requestAnimationFrame( () => {
      frameId = null;
      layout();
    } );
  };

  if ( typeof ResizeObserver === 'function' ) {
    containerObserver = new ResizeObserver( scheduleLayout );
    containerObserver.observe( grid );

    itemObserver = new ResizeObserver( scheduleLayout );
    allItems.forEach( item => itemObserver.observe( item ) );
  }

  if ( typeof MutationObserver === 'function' ) {
    itemStateObserver = new MutationObserver( scheduleLayout );
    itemStateObserver.observe( grid, {
      attributes: true,
      attributeFilter: [ 'hidden' ],
      subtree: true,
    } );
  }

  onTransitionComplete = ( event ) => {
    const targetItem = event.target instanceof Element
      ? event.target.closest( '.nb-collection__layout-item' )
      : null;

    if ( ! targetItem || ! grid.contains( targetItem ) ) {
      return;
    }

    if ( shouldRelayoutForTransitionProperty( event.propertyName ) ) {
      scheduleLayout();
    }
  };

  grid.addEventListener( 'transitionend', onTransitionComplete );
  grid.addEventListener( 'transitioncancel', onTransitionComplete );

  waitForMedia( getMasonryLayoutItems( allItems ) ).finally( scheduleLayout );

  grid.__nbDestroyMasonryLayout = () => {
    destroyed = true;

    if ( frameId !== null ) {
      window.cancelAnimationFrame( frameId );
    }

    if ( containerObserver ) {
      containerObserver.disconnect();
    }

    if ( itemObserver ) {
      itemObserver.disconnect();
    }

    if ( itemStateObserver ) {
      itemStateObserver.disconnect();
    }

    if ( onTransitionComplete ) {
      grid.removeEventListener( 'transitionend', onTransitionComplete );
      grid.removeEventListener( 'transitioncancel', onTransitionComplete );
    }

    resetLayout();
  };
};
