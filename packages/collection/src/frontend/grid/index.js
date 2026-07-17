import domReady from '@wordpress/dom-ready';
import { getAttributes, IS_CUSTOMIZER, IS_EDITOR } from "@novablocks/utils";

import { handleClassicGrid } from "./handle-classic-grid";
import { handleLatticeGrid } from "./handle-lattice-grid";
import { handleMasonryGrid } from "./handle-masonry-grid";
import { handleParametricGrid } from "./handle-parametric-grid";

import { initLoadMore } from "../load-more";

domReady( () => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  const grids = document.querySelectorAll( '.nb-collection__layout' );

  grids.forEach( grid => {
    const block = grid.closest( '[data-layout-style]' );
    const attributes = getAttributes( block );

    if ( 'lattice' === attributes.layoutStrategy ) {
      handleLatticeGrid( grid, block, attributes );
    } else if ( [ 'classic', 'carousel' ].includes( attributes.layoutStyle ) ) {
      handleClassicGrid( grid, block, attributes );
    }

    if ( 'parametric' === attributes.layoutStyle ) {
      handleParametricGrid( grid, block, attributes );
    }

    if ( 'masonry' === attributes.layoutStyle ) {
      handleMasonryGrid( grid, block, attributes );
    }
  } );

  initLoadMore();

  const resize = new CustomEvent( 'nb:layout' );
  window.dispatchEvent( resize );

} )
