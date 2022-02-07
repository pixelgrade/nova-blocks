import { __ } from "@wordpress/i18n";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";
import { __experimentalBlockVariationPicker as BlockVariationPicker } from "@wordpress/block-editor";
import { useCallback } from "@wordpress/element";

const VariationPicker = ( props ) => {

  const {
    setAttributes,
    clientId,
    name
  } = props;

  const { blockType, variations, defaultVariation } = useSelect( select => {
    const { getBlockType, getBlockVariations, getDefaultBlockVariation } = select( 'core/blocks' );

    return {
      blockType: getBlockType( name ),
      variations: getBlockVariations( name ),
      defaultVariation: getDefaultBlockVariation( name )
    }
  }, [ name ] );

  const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );

  const onSelectVariation = useCallback( nextVariation => {
    const nextAttributes = { layout: nextVariation.name };

    if ( nextVariation.attributes ) {
      Object.assign( nextAttributes, nextVariation.attributes );
      setAttributes( nextAttributes );
    }

    if ( nextVariation.innerBlocks ) {
      replaceInnerBlocks(
        clientId,
        createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
      );
    }

  }, [] );

  return (
    <BlockVariationPicker
      icon={ blockType?.icon?.src }
      label={ blockType?.title }
      instructions={ __( 'Select a variation to start with.', '__plugin_txtd' ) }
      variations={ variations }
      onSelect={ onSelectVariation }
      allowSkip
    />
  )
};

export default VariationPicker;
