import { addClass, below, removeClass } from "@novablocks/utils";

const {
  calculateColumnWidth,
  calculateMasonryLayout,
  normalizeColumnCount,
  shouldRelayoutForTransitionProperty,
} = require( './masonry-layout-engine' );

const READY_CLASSNAME = 'nb-collection__layout--masonry-ready';
const LAYOUT_EVENT_NAME = 'nb:masonry-layout';
const BASE_LAYOUT_EVENT_NAME = 'nb:layout';

const dispatchLayoutEvents = ( block, grid ) => {
	window.dispatchEvent( new CustomEvent( LAYOUT_EVENT_NAME, {
		detail: {
			block,
			grid,
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
};

const getGridGap = ( grid ) => {
  const styles = window.getComputedStyle( grid );
  const columnGap = Number.parseFloat( styles.columnGap );
  const fallbackGap = Number.parseFloat( styles.gap );

  if ( Number.isFinite( columnGap ) ) {
    return columnGap;
  }

  if ( Number.isFinite( fallbackGap ) ) {
    return fallbackGap;
  }

  return 0;
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

  const items = Array.from( grid.children ).filter( item => item.classList.contains( 'nb-collection__layout-item' ) );

  if ( ! items.length ) {
    addClass( block, 'novablocks-block--ready' );
    return;
  }

  let frameId = null;
  let containerObserver = null;
  let itemObserver = null;
  let destroyed = false;
  let onTransitionComplete = null;

  const resetLayout = () => {
    removeClass( grid, READY_CLASSNAME );
    grid.style.height = '';
    items.forEach( clearItemStyles );
  };

  const layout = () => {
    if ( destroyed ) {
      return;
    }

    const activeColumns = below( 'tablet' )
      ? 1
      : normalizeColumnCount( attributes.columns );

    if ( activeColumns <= 1 ) {
      resetLayout();
      addClass( block, 'novablocks-block--ready' );
      return;
    }

    const containerWidth = grid.getBoundingClientRect().width;
    const gap = getGridGap( grid );
    const columnWidth = calculateColumnWidth( {
      containerWidth,
      columnCount: activeColumns,
      gap,
    } );

    items.forEach( item => {
      item.style.position = 'absolute';
      item.style.top = '0';
      item.style.left = '0';
      item.style.width = `${ columnWidth }px`;
      item.style.transform = 'translate(0px, 0px)';
    } );

    const itemHeights = items.map( item => item.getBoundingClientRect().height );
    const { positions, containerHeight } = calculateMasonryLayout( {
      containerWidth,
      columnCount: activeColumns,
      gap,
      itemHeights,
    } );

    positions.forEach( ( { x, y }, index ) => {
      items[ index ].style.transform = `translate(${ x }px, ${ y }px)`;
    } );

    grid.style.height = `${ containerHeight }px`;
    addClass( grid, READY_CLASSNAME );
    addClass( block, 'novablocks-block--ready' );
    dispatchLayoutEvents( block, grid );
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
    items.forEach( item => itemObserver.observe( item ) );
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

  waitForMedia( items ).finally( scheduleLayout );

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

    if ( onTransitionComplete ) {
      grid.removeEventListener( 'transitionend', onTransitionComplete );
      grid.removeEventListener( 'transitioncancel', onTransitionComplete );
    }

    resetLayout();
  };
};
