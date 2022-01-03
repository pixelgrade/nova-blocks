import { moveImageClassesToBlock } from "./frontend/move-image-classes-to-block";
import { handleAlignedBlocks } from "./frontend/handle-aligned-blocks";
import { handleOverlappingOnScroll } from "./frontend/handle-overlapping-on-scroll";
import { IS_EDITOR } from "@novablocks/utils";

if ( ! IS_EDITOR ) {

  window.addEventListener( 'DOMContentLoaded', () => {
    moveImageClassesToBlock();
  } );

  handleAlignedBlocks();
  handleOverlappingOnScroll();

}
