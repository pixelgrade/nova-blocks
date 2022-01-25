import { __ } from "@wordpress/i18n";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlocksFromInnerBlocksTemplate } from "@wordpress/blocks";
import { __experimentalBlockVariationPicker as BlockVariationPicker } from "@wordpress/block-editor";

const SidecarVariationPicker = ( props ) => {

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

  const onSelect = ( nextVariation = defaultVariation ) => {

    const nextVariationName = nextVariation.name;
    setAttributes( { layout: nextVariationName } );

    if ( nextVariation.attributes ) {
      setAttributes( nextVariation.attributes );
    }

    if ( nextVariation.innerBlocks ) {
      replaceInnerBlocks(
        clientId,
        createBlocksFromInnerBlocksTemplate( nextVariation.innerBlocks )
      );
    }
  };

  return (
    <BlockVariationPicker
      icon={ blockType?.icon?.src }
      label={ blockType?.title }
      instructions={ __( 'Select a variation to start with.', '__plugin_txtd' ) }
      variations={ variations }
      onSelect={ onSelect }
      allowSkip
    />
  )
};

export default SidecarVariationPicker;
