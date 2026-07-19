import { getSupports } from "@novablocks/block-editor";
import { isColorSignalActive } from "../utils";

const withColorSignalSaveDataAttributes = ( element, blockType, attributes ) => {

  if ( attributes?.__novablocksLegacySpacing?.noSpacingMarkup
    && ! attributes?.__novablocksLegacySpacing?.hasColorSignalMarkup ) {
    return element;
  }

  const supports = getSupports( blockType.name );

  if ( ! element || ! supports?.novaBlocks?.colorSignal ) {
    return element;
  }

  if ( ! isColorSignalActive( supports.novaBlocks.colorSignal, attributes ) ) {
    return element;
  }

  const newProps = {
    'data-palette': attributes?.palette,
    'data-palette-variation': attributes?.paletteVariation,
    'data-color-signal': attributes?.colorSignal,
  };
  const inheritanceAttribute = supports.novaBlocks.colorSignal?.paletteInheritanceAttribute;

  if ( inheritanceAttribute && typeof attributes?.[ inheritanceAttribute ] === 'boolean' ) {
    const dataAttribute = inheritanceAttribute.replace( /([A-Z])/g, '-$1' ).toLowerCase();
    newProps[ `data-${ dataAttribute }` ] = attributes[ inheritanceAttribute ] ? 'true' : 'false';
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
};

export default withColorSignalSaveDataAttributes;
