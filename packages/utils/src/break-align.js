import { matches } from "./index";

export const BREAK_LEFT_CLASS = 'break-align-left';
export const BREAK_RIGHT_CLASS = 'break-align-right';

export const cleanupBreakClasses = () => {
  const breakSelector = `.${ BREAK_LEFT_CLASS }, .${ BREAK_RIGHT_CLASS }`;
  const breakNodeList = document.querySelectorAll( breakSelector );
  const breakElementsArray = Array.from( breakNodeList );
  breakElementsArray.forEach( element => {
    element.classList.remove( BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS );
    // jsdom caveat (napkin): clear inline styles with removeProperty, never
    // by assigning an empty string.
    element.style.removeProperty( 'grid-row-end' );
  } );
};

export const getAlignedSiblings = ( block, side ) => {
  const siblings = Array.from( block.parentElement.children ).filter( sibling => sibling !== block );
  return siblings.filter( sibling => { return sibling.classList.contains( `align${ side }` ) } );
};

// Blocks whose break decision is authored (the per-block Auto/Always/Never
// control serializes nb-break-always / nb-break-never) are DECIDED: the CSS
// consumes the serialized class directly and measurement must not touch them.
//
// A text-wrap pull-out (nb-wrap-around / nb-wrap-extend, Task 4b.2) is ALSO
// decided: the wrap placement owns the block's geometry (a real CSS float
// inside a .nb-flow-segment on the frontend; the Beside approximation in the
// editor). Measurement must never add break-align-* grid classes to it —
// wrap wins over break by construction, and the "Extend over sidebar" control
// is hidden while a wrap is active so no new contradiction can be authored.
export const shouldMeasureBreakClasses = ( block ) => {
  return ! block.classList.contains( 'nb-break-always' )
    && ! block.classList.contains( 'nb-break-never' )
    && ! block.classList.contains( 'nb-wrap-around' )
    && ! block.classList.contains( 'nb-wrap-extend' );
};

// FRONTEND-ONLY skip (Task 3.4): when every ancestor rail is either absent
// (layer 1, server-known absence classes) or exists without element children
// (layer 2, the :has() empty-rail flip), the CSS layers already open the
// wide/full spans and the measured classes would be geometric no-ops.
// Pull-outs (alignleft/right) are NEVER skipped — layers 1/2 do not
// reproduce their placement (grid-column + row span + sibling adjustments).
//
// The editor canvas can never satisfy the empty-rail condition (block
// appenders make rails non-empty), so this predicate self-neutralizes
// there — but the editor path must STILL not opt in (see runBreakAlignment
// options): a locked template without appenders would otherwise skip in the
// canvas while the frontend :has() rule may see different markup.
export const shouldSkipForCssCoveredRails = ( block ) => {
  const isWideOrFull = block.classList.contains( 'alignwide' ) || block.classList.contains( 'alignfull' );

  if ( ! isWideOrFull ) {
    return false;
  }

  let sidecar = block.closest( '.nb-sidecar' );
  let insideSidecar = false;

  while ( sidecar ) {
    insideSidecar = true;
    // PER-RAIL (Task 4.1): a three-area sidecar has BOTH a left and a right
    // rail. Check EVERY rail — if ANY existing rail has element children the
    // CSS layers (layer-1 absence / layer-2 :has() empty) do not fully cover
    // this block and it must be measured. Taking only the first rail child
    // would falsely skip when an empty first rail sits beside an occupied
    // second rail.
    const rails = Array.from( sidecar.children ).filter( child => child.classList.contains( 'nb-sidecar-area--sidebar' ) );

    if ( rails.some( rail => rail.firstElementChild ) ) {
      return false;
    }

    sidecar = sidecar.parentElement ? sidecar.parentElement.closest( '.nb-sidecar' ) : null;
  }

  return insideSidecar;
};

export const getAdjacentSidebarBlocks = ( block, sidebarBlocks = [] ) => {
  const sidecar = block.closest( '.nb-sidecar' );

  if ( ! sidecar ) {
    return sidebarBlocks;
  }

  const rails = Array.from( sidecar.children ).filter( child => child.classList.contains( 'nb-sidecar-area--sidebar' ) );

  if ( ! rails.length ) {
    return sidebarBlocks;
  }

  // PER-RAIL (Task 4.1): collect obstacles from EVERY rail, and take each
  // block's side from the RAIL's own resolved class — a three-area sidecar has
  // both a left and a right rail under one `sidebarPosition`, so deriving the
  // side from the sidecar's position class would mislabel one rail's blocks.
  // The sidecar-position fallback covers any transitional rail that carries
  // only the legacy generic class.
  const newSidebarBlocks = rails.reduce( ( acc, rail ) => {
    const side = rail.classList.contains( 'nb-sidecar-area--sidebar-left' ) ? 'left'
      : rail.classList.contains( 'nb-sidecar-area--sidebar-right' ) ? 'right'
      : ( sidecar.classList.contains( 'nb-sidecar--sidebar-left' ) ? 'left' : 'right' );

    return acc.concat( Array.from( rail.children ).map( element => ( { element, side } ) ) );
  }, [] );

  return getAdjacentSidebarBlocks( sidecar.parentNode, sidebarBlocks.concat( newSidebarBlocks ) );
};

// Helper function to check if two boxes are overlapping — horizontal AND
// vertical (compare boxesOverlapVertically for the vertical-only variant).
// Consumed by the sticky-rail overlap module.
export const doOverlap = ( el1, el2 ) => {

  const el1Box = el1.getBoundingClientRect();
  const el2Box = el2.getBoundingClientRect();

  const el1Style = getComputedStyle( el1 );
  const el2Style = getComputedStyle( el2 );

  const el1MarginBottom = Math.max( parseInt( el1Style.marginBottom ), parseInt( el2Style.marginTop ) );
  const el2MarginBottom = Math.max( parseInt( el2Style.marginBottom ), parseInt( el1Style.marginTop ) );
  const el1MarginRight = Math.max( parseInt( el1Style.marginRight ), parseInt( el2Style.marginLeft ) );
  const el2MarginRight = Math.max( parseInt( el2Style.marginRight ), parseInt( el1Style.marginLeft ) );

  return !( el2Box.bottom + el2MarginBottom <= el1Box.top ||
            el2Box.top >= el1Box.bottom + el1MarginBottom ||
            el2Box.right + el2MarginRight <= el1Box.left ||
            el2Box.left >= el1Box.right + el1MarginRight );

};

/* ------------------------------------------------------------------------ *
 * Measurement v2 (Task 3.4): batched read-phase/write-phase engine.
 *
 * A pass has exactly three phases:
 *   WRITE 1 — temp-extend EVERY measurable block (both break classes);
 *   READ    — snapshot every relevant box in one go (a single layout flush,
 *             instead of the old per-element toggle-measure-toggle thrash);
 *   WRITE 2 — remove the temp classes and apply the computed decisions
 *             (classes + honest pull-out row spans) from the cached boxes.
 *
 * Decisions are pure math over the snapshots. A pass reports whether any
 * class changed so the caller can run ONE fixpoint follow-up pass (applied
 * classes change geometry — extended images get taller — so a second pass
 * re-derives against the settled state; it converges because the second
 * pass measures the exact background the old top-to-bottom engine ended in).
 * ------------------------------------------------------------------------ */

const readBox = ( element ) => {
  const rect = element.getBoundingClientRect();
  const style = window.getComputedStyle( element );

  return {
    top: rect.top,
    bottom: rect.bottom,
    left: rect.left,
    right: rect.right,
    marginTop: parseInt( style.marginTop, 10 ) || 0,
    marginBottom: parseInt( style.marginBottom, 10 ) || 0,
    marginLeft: parseInt( style.marginLeft, 10 ) || 0,
    marginRight: parseInt( style.marginRight, 10 ) || 0,
  };
};

// Pure-box twin of doOverlap(): horizontal AND vertical intersection with
// collapsed-margin slack.
export const boxesOverlap = ( a, b ) => {
  const aMarginBottom = Math.max( a.marginBottom, b.marginTop );
  const bMarginBottom = Math.max( b.marginBottom, a.marginTop );
  const aMarginRight = Math.max( a.marginRight, b.marginLeft );
  const bMarginRight = Math.max( b.marginRight, a.marginLeft );

  return ! (
    b.bottom + bMarginBottom <= a.top ||
    b.top >= a.bottom + aMarginBottom ||
    b.right + bMarginRight <= a.left ||
    b.left >= a.right + aMarginRight
  );
};

// Pure-box twin of wouldOverlap(): vertical intersection only.
export const boxesOverlapVertically = ( a, b ) => {
  const aMarginBottom = Math.max( a.marginBottom || 0, b.marginTop || 0 );
  const bMarginBottom = Math.max( b.marginBottom || 0, a.marginTop || 0 );

  return ! (
    b.bottom + bMarginBottom <= a.top ||
    b.top >= a.bottom + aMarginBottom
  );
};

// Honest pull-out row span (replaces the `span 5` magic number): the
// pull-out occupies its own row plus one row per following sibling whose
// vertical band intersects it — "the measurement is already there" refers
// to exactly this wouldOverlap() semantics, applied to cached boxes.
export const computePulloutRowSpan = ( pulloutBox, followingSiblingBoxes ) => {
  const overlapped = ( followingSiblingBoxes || [] ).filter( box => boxesOverlapVertically( pulloutBox, box ) ).length;
  return Math.max( 1, 1 + overlapped );
};

const collectFollowingSiblings = ( block ) => {
  const siblings = [];
  let node = block.nextElementSibling;
  while ( node ) {
    siblings.push( node );
    node = node.nextElementSibling;
  }
  return siblings;
};

export const measureBreakClassesPass = ( blocks, { skipCssCoveredRails = false, context = 'current' } = {} ) => {
  let measurable = ( blocks || [] ).filter( shouldMeasureBreakClasses );

  if ( skipCssCoveredRails ) {
    measurable = measurable.filter( block => ! shouldSkipForCssCoveredRails( block ) );
  }

  if ( ! measurable.length ) {
    return false;
  }

  // Gather context (queries only — no layout reads yet). Sidebar chains are
  // cached per parent element: siblings share the exact same rail sets.
  const railSetsByParent = new Map();
  const infos = measurable.map( block => {
    const parent = block.parentElement;
    if ( ! railSetsByParent.has( parent ) ) {
      railSetsByParent.set( parent, getAdjacentSidebarBlocks( block ) );
    }
    const railBlocks = railSetsByParent.get( parent );
    const isPullLeft = block.classList.contains( 'alignleft' );
    const isPullRight = block.classList.contains( 'alignright' );

    return {
      block,
      isPullout: isPullLeft || isPullRight,
      previousLeft: block.classList.contains( BREAK_LEFT_CLASS ),
      previousRight: block.classList.contains( BREAK_RIGHT_CLASS ),
      previousSpan: block.style.getPropertyValue( 'grid-row-end' ),
      leftObstacles: getAlignedSiblings( block, 'left' )
        .concat( railBlocks.filter( obj => obj.side === 'left' ).map( obj => obj.element ) ),
      rightObstacles: getAlignedSiblings( block, 'right' )
        .concat( railBlocks.filter( obj => obj.side === 'right' ).map( obj => obj.element ) ),
      followingSiblings: ( isPullLeft || isPullRight ) ? collectFollowingSiblings( block ) : [],
    };
  } );

  // Two context modes, both fully batched (max two layout flushes a pass):
  //
  // - context 'extended' (the SEED pass): every box — obstacles included —
  //   is read in the all-temp-extended state. This grant-biased world
  //   matches the attractor the old top-down engine settled into (blocks
  //   above the one being measured were already extended when it measured).
  //
  // - context 'current' (the VERIFY pass): obstacle and context positions
  //   come from the world AS IT IS, and only each block's OWN extended box
  //   (horizontal span — var-driven — and extended height — width-driven)
  //   comes from the all-extended snapshot. This is the old engine's
  //   per-element semantics reconstructed without its toggle-measure-toggle
  //   reflow thrash, and it trims grants that would actually collide in the
  //   settled world (the field case: an alignright broken over occupied
  //   rail content on right-large-sticky-long).
  const currentBoxes = new Map();
  const snapshotCurrent = ( element ) => {
    if ( ! currentBoxes.has( element ) ) {
      currentBoxes.set( element, readBox( element ) );
    }
    return currentBoxes.get( element );
  };

  if ( context !== 'extended' ) {
    // READ 1 (current state) happens BEFORE any write.
    infos.forEach( info => {
      info.currentBox = snapshotCurrent( info.block );
      info.leftObstacleBoxes = info.leftObstacles.map( snapshotCurrent );
      info.rightObstacleBoxes = info.rightObstacles.map( snapshotCurrent );
      info.followingSiblingBoxes = info.followingSiblings.map( snapshotCurrent );
    } );
  }

  // WRITE 1: temp-extend every measurable block, THEN READ 2 (all-extended).
  infos.forEach( ( { block } ) => {
    block.classList.add( BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS );
  } );

  const extendedBoxes = new Map();
  const snapshotExtended = ( element ) => {
    if ( ! extendedBoxes.has( element ) ) {
      extendedBoxes.set( element, readBox( element ) );
    }
    return extendedBoxes.get( element );
  };
  infos.forEach( info => {
    info.extendedBox = snapshotExtended( info.block );
    if ( context === 'extended' ) {
      info.leftObstacleBoxes = info.leftObstacles.map( snapshotExtended );
      info.rightObstacleBoxes = info.rightObstacles.map( snapshotExtended );
      info.followingSiblingBoxes = info.followingSiblings.map( snapshotExtended );
    }
  } );

  // WRITE 2: drop the temp classes, then apply the computed decisions.
  infos.forEach( ( { block } ) => {
    block.classList.remove( BREAK_LEFT_CLASS, BREAK_RIGHT_CLASS );
  } );

  infos.forEach( info => {
    if ( context === 'extended' ) {
      info.box = info.extendedBox;
      return;
    }

    // Composite per-block box: top from the current world, extended height
    // and horizontal span from the all-extended snapshot.
    info.box = {
      top: info.currentBox.top,
      bottom: info.currentBox.top + ( info.extendedBox.bottom - info.extendedBox.top ),
      left: info.extendedBox.left,
      right: info.extendedBox.right,
      marginTop: info.currentBox.marginTop,
      marginBottom: info.currentBox.marginBottom,
      marginLeft: info.currentBox.marginLeft,
      marginRight: info.currentBox.marginRight,
    };
  } );

  let changed = false;

  infos.forEach( info => {
    const breakLeft = ! info.leftObstacleBoxes.some( box => boxesOverlap( box, info.box ) );
    const breakRight = ! info.rightObstacleBoxes.some( box => boxesOverlap( box, info.box ) );

    if ( breakLeft ) {
      info.block.classList.add( BREAK_LEFT_CLASS );
    }
    if ( breakRight ) {
      info.block.classList.add( BREAK_RIGHT_CLASS );
    }

    let nextSpan = '';
    const isBrokenPullout = info.isPullout && (
      ( info.block.classList.contains( 'alignleft' ) && breakLeft ) ||
      ( info.block.classList.contains( 'alignright' ) && breakRight )
    );

    if ( isBrokenPullout ) {
      nextSpan = `span ${ computePulloutRowSpan( info.box, info.followingSiblingBoxes ) }`;
      info.block.style.setProperty( 'grid-row-end', nextSpan );
    } else {
      info.block.style.removeProperty( 'grid-row-end' );
    }

    if (
      breakLeft !== info.previousLeft ||
      breakRight !== info.previousRight ||
      nextSpan !== info.previousSpan
    ) {
      changed = true;
    }
  } );

  return changed;
};

// Runs the grant-biased SEED pass and, only when it changed something, ONE
// composite VERIFY pass that trims grants colliding in the settled world.
// Returns the number of passes executed (test signal).
export const runBreakAlignment = ( { skipCssCoveredRails = false, collect = getContentBlocksArray } = {} ) => {
  const changed = measureBreakClassesPass( collect(), { skipCssCoveredRails, context: 'extended' } );

  if ( ! changed ) {
    return 1;
  }

  measureBreakClassesPass( collect(), { skipCssCoveredRails, context: 'current' } );
  return 2;
};

export const getContentBlocksArray = () => {
  const gridSelectors = [
    ".is-root-container",
    ".wp-block-query",
    ".wp-block-post-content",
    ".wp-site-blocks",
    ".wp-block-template-part",
    ".nb-content-layout-grid",
    ".nb-sidecar",
    ".nb-sidecar-area--content",
    ".nb-supernova",
  ];

  const mergedGridSelector = gridSelectors.join( ', ' );
  const grids = Array.from( document.querySelectorAll( mergedGridSelector ) );

  const alignedElements = grids.reduce( ( acc, curr ) => {
    const currentAlignedElements = Array.from( curr.children ).filter( element => {
      return matches( element, ".alignfull, .alignwide, .alignleft, .alignright" );
    } );
    return acc.concat( currentAlignedElements );
  }, [] );

  return alignedElements;
};
