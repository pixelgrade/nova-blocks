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
  const blockEditorSelect = select( 'core/block-editor' );
  const { getBlockParents, getBlock, getSelectedBlockClientId } = blockEditorSelect || {};

  if ( typeof getBlockParents !== 'function' || typeof getBlock !== 'function' ) {
    return getSiteColorVariation();
  }

  const resolvedClientId = clientId || getSelectedBlockClientId();
  const blockParents = resolvedClientId ? getBlockParents( resolvedClientId ) : undefined;
  const parents = Array.isArray( blockParents ) ? blockParents.slice() : [];

  // Loop through parents array until we find a block with Color Signal component enabled
  while ( parents.length ) {
    const parentClientId = parents.pop();
    const parentBlock = getBlock( parentClientId );
    const parentAttributes = parentBlock?.attributes;

    if ( ! parentBlock?.name || ! parentAttributes ) {
      continue;
    }

    const supports = getSupports( parentBlock.name );

    // if this parent supports colorSignal return it's absolute paletteVariation
    if ( supports?.novaBlocks?.colorSignal ) {
      return getAbsoluteColorVariation( parentAttributes );
    }
  }

  // return the Palette Basis Offset value
  return getSiteColorVariation();
};

/**
 * Given a block's current (live) attributes, compute the attribute patch that
 * should be applied when the user picks a new `colorSignal` level — whether
 * from the sidebar stepper (`BlockColorSignalControl`) or the block toolbar
 * dropdown (`BlockColorSignalToolbar`).
 *
 * This is the exact logic `BlockColorSignalControl`'s `onSignalChange` used to
 * inline. It is extracted here so both surfaces stay byte-for-byte identical —
 * neither one may drift into just setting `colorSignal` without also
 * recomputing `paletteVariation` from the palette + reference variation.
 *
 * Callers are expected to feed the returned patch into `updateBlock()` (from
 * `withColorSignalProps`) with `useSourceOnSameVariation` and
 * `useSourceOnSameSignal` both `true`, which runs it back through
 * `getUpdatedAttributes()` below to keep `colorSignal`, `paletteVariation`, and
 * `contentPaletteVariation` in sync.
 *
 * @param attributes the block's current (live) attributes
 * @param clientId the block's clientId
 * @param nextSignal the desired colorSignal value (0-3)
 * @returns {{paletteVariation: number, useSourceColorAsReference: boolean}}
 */
export const getSignalChangeAttributes = ( attributes, clientId, nextSignal ) => {
  const { palette } = attributes;
  const referenceVariation = getParentVariation( clientId );
  const absoluteVariation = getAbsoluteColorVariation( attributes );
  const nextVariation = computeColorSignal( referenceVariation, nextSignal, palette, absoluteVariation );
  const finalVariation = removeSiteVariationOffset( nextVariation );

  return {
    paletteVariation: finalVariation,
    useSourceColorAsReference: false,
  };
};

/**
 * The Content Area counterpart of `getSignalChangeAttributes()`: given a
 * block's current (live) attributes, compute the attribute patch to apply when
 * the user picks a new `contentColorSignal` level — whether from the sidebar
 * stepper (`ContentColorSignalControl`) or the block toolbar cycler.
 *
 * This is the exact logic `ContentColorSignalControl`'s inline `onChange` used
 * to perform: the content signal is computed relative to the block's own
 * absolute variation (not the parent's, which is why — unlike the block-level
 * helper — `clientId` is not consulted; it is kept in the signature for
 * symmetry with `getSignalChangeAttributes`), and `contentPaletteVariation` is
 * recomputed alongside `contentColorSignal` so the two never drift apart.
 *
 * Callers are expected to feed the returned patch into `updateBlock()` (from
 * `withColorSignalProps`) with its default flags — the sidebar control passes
 * no extra arguments, and the toolbar must match it exactly.
 *
 * @param attributes the block's current (live) attributes
 * @param clientId the block's clientId (unused — see above)
 * @param nextSignal the desired contentColorSignal value (0-3)
 * @returns {{contentColorSignal: number, contentPaletteVariation: number}}
 */
export const getContentSignalChangeAttributes = ( attributes, clientId, nextSignal ) => {
  const { palette, contentPaletteVariation } = attributes;
  const absoluteVariation = getAbsoluteColorVariation( attributes );
  const nextContentPaletteVariation = computeColorSignal( absoluteVariation, nextSignal, palette, contentPaletteVariation );
  const finalContentPaletteVariation = removeSiteVariationOffset( nextContentPaletteVariation );

  return {
    contentColorSignal: nextSignal,
    contentPaletteVariation: finalContentPaletteVariation,
  };
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
    contentColorSignal: contentColorSignal,
    contentPaletteVariation: contentColorSignal === 0 ? finalVariation : nextContentVariation,
  }
}
