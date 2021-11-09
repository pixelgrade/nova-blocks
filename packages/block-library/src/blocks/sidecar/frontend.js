import { moveImageClassesToBlock } from "./frontend/move-image-classes-to-block";
import { handleAlignedBlocks } from "./frontend/handle-aligned-blocks";
import { handleOverlappingOnScroll } from "./frontend/handle-overlapping-on-scroll";

const IS_EDITOR = document.getElementsByTagName( 'body' )[ 0 ].classList.contains( 'block-editor-page' );

handleAlignedBlocks();
handleOverlappingOnScroll();

if ( ! IS_EDITOR ) {
  window.addEventListener( 'DOMContentLoaded', () => {
    moveImageClassesToBlock();
  } );
}
