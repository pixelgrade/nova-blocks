import { moveImageClassesToBlock } from "./move-image-classes-to-block";
import { handleAlignedBlocks } from "./handle-aligned-blocks";
import { handleOverlappingOnScroll } from "./handle-overlapping-on-scroll";
import { IS_EDITOR, registerFrontendModule } from "@novablocks/utils";

// A frontend module (nova-blocks#661): torn down and set up again for every
// AJAX page swap instead of re-executing this script.
registerFrontendModule( 'novablocks/core/break-align', ( scope ) => {

  scope.ready( moveImageClassesToBlock );

  if ( IS_EDITOR ) {
    return;
  }

  scope.add( handleAlignedBlocks() );
  scope.add( handleOverlappingOnScroll() );

} );
