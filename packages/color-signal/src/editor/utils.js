import { select } from "@wordpress/data";
import { getSupports } from "@novablocks/block-editor";

import {
  addSiteVariationOffset,
  computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  getSiteColorVariation,
  getSourceIndexFromPaletteId,
  removeSiteVariationOffset
} from "../utils";

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
};

export const getUpdatedAttributes = ( attributes, clientId, newAttributes = {}, stickySourceColor = true, useSourceOnSameVariation = false, useSourceOnSameSignal = false ) => {
  // prepare attribute values to be used in computing next attributes
  const nextAttributes = Object.assign( {}, attributes, newAttributes );
  const { palette, useSourceColorAsReference } = nextAttributes;

  // find out the the reference (parent) color variation to compute signal on
  const referenceVariation = getParentVariation( clientId );

  // find out the next absolute value of the paletteVariation attribute
  const absoluteVariation = getAbsoluteColorVariation( nextAttributes );
  const nextSignal = getSignalRelativeToVariation( absoluteVariation, referenceVariation, palette );

  const computedVariation = computeColorSignal( referenceVariation, nextSignal, palette, absoluteVariation );
  const nextVariation = removeSiteVariationOffset( computedVariation );

  // determine what will be the value for the useSourceColorAsReference attribute
  const sourceIndex = getSourceIndexFromPaletteId( palette );
  const sourceVariation = addSiteVariationOffset( sourceIndex + 1 );
  const sourceSignal = getSignalRelativeToVariation( sourceVariation, referenceVariation, palette );

  const nextSourceAsReference = stickySourceColor && ( useSourceColorAsReference ||
                                                       ( useSourceOnSameSignal && nextSignal === sourceSignal ) ||
                                                       ( useSourceOnSameVariation && absoluteVariation === sourceVariation ) );

  const finalVariation = nextSourceAsReference ? sourceVariation : nextVariation;
  const { contentColorSignal, contentPaletteVariation } = nextAttributes;
  const nextContentVariation = computeColorSignal( finalVariation, contentColorSignal, palette, contentPaletteVariation );

  return {
    palette: palette,
    paletteVariation: nextSourceAsReference ? 1 : finalVariation,
    useSourceColorAsReference: nextSourceAsReference,
    colorSignal: nextSignal,
    contentPaletteVariation: contentColorSignal === 0 ? finalVariation : nextContentVariation,
  }
}
