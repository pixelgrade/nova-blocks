import { getSupports } from "@novablocks/block-editor";

const withColorSignalSaveDataAttributes = ( element, blockType, attributes ) => {

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.colorSignal ) {
    return element;
  }

  const newProps = {
    'data-palette': attributes?.palette,
    'data-palette-variation': attributes?.paletteVariation,
    'data-color-signal': attributes?.colorSignal,
  }

  if ( attributes.useSourceColorAsReference ) {
    Object.assign( newProps, {
      'data-use-source-color-as-reference': attributes?.useSourceColorAsReference,
    } );
  }

  return Object.assign( {}, element, {
    props: {
      ...element?.props,
      ...newProps,
    }
  } );
}

export default withColorSignalSaveDataAttributes;
