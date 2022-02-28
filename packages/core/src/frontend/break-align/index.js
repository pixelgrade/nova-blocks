import { moveImageClassesToBlock } from "./move-image-classes-to-block";
import { handleAlignedBlocks } from "./handle-aligned-blocks";
import { handleOverlappingOnScroll } from "./handle-overlapping-on-scroll";
import { IS_EDITOR } from "@novablocks/utils";

if ( ! IS_EDITOR ) {

  handleAlignedBlocks();
  handleOverlappingOnScroll();

}
