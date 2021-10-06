import {createHigherOrderComponent} from "@wordpress/compose";
import {useSupports} from "../../hooks";
import {dispatch, select} from "@wordpress/data";

const alignBlockChildren = ( clientId, horizontalAlignment ) => {

  const {getBlock} = select( 'core/block-editor' );
  const {updateBlockAttributes} = dispatch( 'core/block-editor' );
  const block = getBlock( clientId );

  block.innerBlocks.forEach( innerBlock => {
    const block = getBlock( innerBlock.clientId );
    const blockType = wp.data.select( 'core/blocks' ).getBlockType( block.name );

    const supportsAlign = blockType?.supports?.align;

    if ( Array.isArray( supportsAlign ) && (
      supportsAlign.indexOf( 'wide' ) > - 1 || supportsAlign.indexOf( 'full' ) > - 1
    ) ) {
      alignBlockChildren( block.clientId, horizontalAlignment );
      return;
    }

    updateBlockAttributes( block.clientId, {
      align: horizontalAlignment,
      textAlign: horizontalAlignment,
      contentJustification: horizontalAlignment,
    } );
  } );
}

const withContentPositionInnerBlocks = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );
    const {setAttributes, clientId} = props;

    if ( !supports?.novaBlocks?.contentPosition ) {
      return <OriginalComponent {...props} />
    }

    const newSetAttributes = ( attributes ) => {
      const {contentPosition} = attributes;

      if ( !!contentPosition ) {
        const alignment = contentPosition.split( " " );
        const horizontalAlignment = alignment[1] || 'center';

        alignBlockChildren( clientId, horizontalAlignment );
      }

      setAttributes( attributes );
    }

    return <OriginalComponent {...props} setAttributes={newSetAttributes}/>
  }

}, 'withContentPositionInnerBlocks' );

export default withContentPositionInnerBlocks;
