import { dispatch, select, subscribe } from "@wordpress/data";

import { getSupports } from "@novablocks/block-editor";

import { getParentColorContext } from "./editor/utils";
import {
  clampColorSignal,
  computeColorSignal,
  getAbsoluteColorVariation,
  getSignalRelativeToVariation,
  removeSiteVariationOffset,
  resolveColorSignalContext,
  shouldInheritParentPalette,
} from "./utils";

( () => {

  const editor = select( 'core/block-editor' );

  if ( ! editor ) {
    return;
  }

  const getBlockList = () => editor.getBlocks();

  let blockList = getBlockList();

  /**
   * Subscribe to any changes to the block list in order to update each block's final palette variation value
   * based on their and their parent's colorSignal attribute value
   */
  subscribe( () => {
    const newBlockList = getBlockList();
    const blockListChanged = newBlockList !== blockList;
    blockList = newBlockList;

    if ( blockListChanged ) {
      // You can trigger here any behavior when the block list in the post changes.
      blockList.forEach( ( block ) => {
        updateBlock( block );
      } );
    }
  } );

} )();

/**
 * Update block's paletteVariation attribute value based on their and their parent's colorSignal attribute value
 * @param block props of the block that we intend to change the variation for
 */
const updateBlock = ( block ) => {

  const supports = getSupports( block.name );

  if ( supports?.novaBlocks?.colorSignal ) {
    const { updateBlockAttributes } = dispatch( 'core/block-editor' );
    const { attributes, clientId } = block;
    const { colorSignal, paletteVariation, useSourceColorAsReference } = attributes;
    const colorSignalSupport = supports.novaBlocks.colorSignal;
    const paletteInheritanceAttribute = colorSignalSupport?.paletteInheritanceAttribute;
    const inheritParentPalette = shouldInheritParentPalette( colorSignalSupport, attributes );
    const inheritanceNeedsMigration = paletteInheritanceAttribute
      && typeof attributes[ paletteInheritanceAttribute ] !== 'boolean';
    const parentContext = getParentColorContext( clientId );
    const resolvedContext = resolveColorSignalContext( attributes, parentContext, inheritParentPalette );
    const effectiveUseSourceColorAsReference = resolvedContext.useSourceColorAsReference;

    const config = window.styleManager?.colorsConfig || [];

    // make sure we're using an actual palette
    const palette = ( () => {
      const palette = config.find( palette => `${ palette.id }` === `${ resolvedContext.palette }` );

      if ( ! palette ) {
        return '1';
      }

      return `${ palette.id }`;
    } )();

    const { getBlockParents, getBlock } = select( 'core/block-editor' );
    const parents = getBlockParents( clientId ).slice();

    if ( typeof colorSignal === "undefined" || typeof paletteVariation === "undefined" ) {
      return false;
    }

    // @todo maybe find closest parent with colorSignal support
    if ( parents.length ) {
      const parentClientId = parents.pop();
      const parentBlock = getBlock( parentClientId );
      const parentSupports = getSupports( parentBlock.name );

      // @todo contentColorSignal should be part of the colorSignal config
      const parentColorSignalSupport = parentSupports?.novaBlocks?.colorSignal;

      if ( parentColorSignalSupport === true || parentColorSignalSupport?.contentColorSignal ) {
        const { contentColorSignal, contentPaletteVariation } = parentBlock.attributes;

        // @todo check if computed signal of contentPaletteVariation is the same as contentColorSignal
        const nextContentColorSignal = clampColorSignal( contentColorSignal, colorSignalSupport );
        const nextContentPaletteVariation = nextContentColorSignal === contentColorSignal
          ? contentPaletteVariation
          : removeSiteVariationOffset( computeColorSignal(
            resolvedContext.parentVariation,
            nextContentColorSignal,
            palette,
            contentPaletteVariation
          ) );

        if ( paletteVariation !== nextContentPaletteVariation
          || colorSignal !== nextContentColorSignal
          || ( inheritParentPalette && attributes.palette !== palette )
          || useSourceColorAsReference !== effectiveUseSourceColorAsReference
          || inheritanceNeedsMigration ) {
          const patch = {
            palette,
            colorSignal: nextContentColorSignal,
            paletteVariation: nextContentPaletteVariation,
            useSourceColorAsReference: effectiveUseSourceColorAsReference,
          };

          if ( inheritanceNeedsMigration ) {
            patch[ paletteInheritanceAttribute ] = inheritParentPalette;
          }

          updateBlockAttributes( clientId, patch );
        }

        updateInnerBlocks( block );

        return false;
      }
    }

    const parentVariation = resolvedContext.parentVariation;
    const effectiveAttributes = {
      ...attributes,
      palette,
      useSourceColorAsReference: effectiveUseSourceColorAsReference,
    };
    const absoluteVariation = getAbsoluteColorVariation( effectiveAttributes );
    const effectiveColorSignal = clampColorSignal( colorSignal, colorSignalSupport );
    const nextVariation = computeColorSignal( parentVariation, effectiveColorSignal, palette, absoluteVariation );

    const nextColorSignal = clampColorSignal(
      effectiveUseSourceColorAsReference ? getSignalRelativeToVariation( absoluteVariation, parentVariation, palette ) : effectiveColorSignal,
      colorSignalSupport
    );
    const finalVariation = effectiveUseSourceColorAsReference ? 1 : removeSiteVariationOffset( nextVariation );

    // dispatch new attributes only if the new paletteVariation value differs from the current one
    if ( attributes.palette !== palette
      || paletteVariation !== finalVariation
      || colorSignal !== nextColorSignal
      || useSourceColorAsReference !== effectiveUseSourceColorAsReference
      || inheritanceNeedsMigration ) {
      const patch = {
        palette,
        colorSignal: nextColorSignal,
        paletteVariation: finalVariation,
        useSourceColorAsReference: effectiveUseSourceColorAsReference,
      };

      if ( inheritanceNeedsMigration ) {
        patch[ paletteInheritanceAttribute ] = inheritParentPalette;
      }

      updateBlockAttributes( clientId, patch );
    }
  }

  updateInnerBlocks( block );
};

const updateBlocks = ( blocks ) => {
  if ( Array.isArray( blocks ) ) {
    blocks.forEach( block => {
      updateBlock( block );
    } );
  }
}

const updateInnerBlocks = ( block ) => {
  // recursively update all innerBlocks
  updateBlocks( block.innerBlocks );
};
