import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';
import { dispatch, select } from '@wordpress/data';

import { getVariationFromSignal } from '../utils';
import { getPracticeSectionTemplate } from './practice-section';

// Align the template's color attributes with the palette in use where the block is inserted:
// blocks that participate in the color system get the current palette, and any explicit signal
// gets its palette-consistent variation.
const withPaletteVariations = ( template, palette ) =>
  template.map( ( [ name, attributes = {}, innerBlocks = [] ] ) => {
    const participates =
      typeof attributes.colorSignal !== 'undefined' ||
      typeof attributes.contentColorSignal !== 'undefined' ||
      typeof attributes.paletteVariation !== 'undefined';

    const newAttributes = participates ? { ...attributes, palette } : attributes;

    if ( typeof newAttributes.colorSignal !== 'undefined' ) {
      newAttributes.paletteVariation = getVariationFromSignal( newAttributes.colorSignal, palette );
    }

    if ( typeof newAttributes.contentColorSignal !== 'undefined' ) {
      newAttributes.contentPaletteVariation = getVariationFromSignal( newAttributes.contentColorSignal, palette );
    }

    return [ name, newAttributes, withPaletteVariations( innerBlocks, palette ) ];
  } );

const insertPracticeSection = () => {
  const {
    getBlocks,
    getBlockAttributes,
    getSelectedBlockClientId,
    getBlockHierarchyRootClientId,
    getBlockIndex,
  } = select( 'core/block-editor' );
  const { insertBlocks } = dispatch( 'core/block-editor' );

  const selectedClientId = getSelectedBlockClientId();
  const rootClientId = selectedClientId ? getBlockHierarchyRootClientId( selectedClientId ) : null;
  const palette = ( rootClientId && getBlockAttributes( rootClientId )?.palette ) || '1';

  const template = withPaletteVariations( getPracticeSectionTemplate(), palette );
  const blocks = createBlocksFromInnerBlocksTemplate( template );
  const index = rootClientId ? getBlockIndex( rootClientId ) + 1 : getBlocks().length;

  insertBlocks( blocks, index );

  return blocks.map( block => block.clientId );
};

export default insertPracticeSection;
