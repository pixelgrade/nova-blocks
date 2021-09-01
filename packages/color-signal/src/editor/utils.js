import { select } from "@wordpress/data";
import { getSupports } from "@novablocks/block-editor";

import { getAbsoluteColorVariation, getSiteColorVariation } from "../utils";

/**
 * For a given block's clientId, return the container's paletteVariation to use as a reference for the block's color signal
 * The parent variation can be the closest parent with colorSignal support, or the actual webpage in which case
 * We return the Palette Basis Offset setting
 * @param clientId
 * @returns {number|*}
 */
export const getParentVariation = ( clientId ) => {
  const { getBlockParents, getBlock } = select( 'core/block-editor' );
  const parents = getBlockParents( clientId ).slice();

  // Loop through parents array until we find a block with Color Signal component enabled
  while ( parents.length ) {
    const parentClientId = parents.pop();
    const parentBlock = getBlock( parentClientId );
    const parentAttributes = parentBlock.attributes;
    const supports = getSupports( parentBlock.name );

    // if this parent supports colorSignal return it's absolute paletteVariation
    if ( supports?.novaBlocks?.colorSignal ) {
      return getAbsoluteColorVariation( parentAttributes );
    }
  }

  // return the Palette Basis Offset value
  return getSiteColorVariation();
}
