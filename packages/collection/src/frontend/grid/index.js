import { getAttributes, IS_CUSTOMIZER, IS_EDITOR, registerFrontendModule } from "@novablocks/utils";

import { handleClassicGrid } from "./handle-classic-grid";
import { handleLatticeGrid } from "./handle-lattice-grid";
import { handleMasonryGrid } from "./handle-masonry-grid";
import { handleParametricGrid } from "./handle-parametric-grid";

import { initLoadMore } from "../load-more";

// A frontend module (nova-blocks#661): the layout engines' observers and
// listeners end on teardown and start again for the next page of an AJAX
// page swap.
registerFrontendModule( 'novablocks/collection/grid', ( scope ) => scope.ready( () => {

  if ( IS_EDITOR || IS_CUSTOMIZER ) {
    return;
  }

  const grids = document.querySelectorAll( '.nb-collection__layout' );

  grids.forEach( grid => {
    const block = grid.closest( '[data-layout-style]' );
    const attributes = getAttributes( block );

    if ( 'lattice' === attributes.layoutStrategy ) {
      const controller = handleLatticeGrid( grid, block, attributes );
      scope.add( () => controller?.destroy?.() );
    } else if ( [ 'classic', 'carousel' ].includes( attributes.layoutStyle ) ) {
      handleClassicGrid( grid, block, attributes );
    }

    if ( 'parametric' === attributes.layoutStyle ) {
      scope.add( handleParametricGrid( grid, block, attributes ) );
    }

    if ( 'masonry' === attributes.layoutStyle ) {
      const controller = handleMasonryGrid( grid, block, attributes );
      scope.add( () => controller?.destroy?.() );
    }
  } );

  initLoadMore();

  const resize = new CustomEvent( 'nb:layout' );
  window.dispatchEvent( resize );

} ) );
