import classnames from 'classnames';

import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const SidecarAreaEdit = function( props ) {

  const {
    attributes,
    clientId,
    isSelected
  } = props;

  const parentClientId = useSelect( select => select( 'core/block-editor' ).getBlockRootClientId( clientId ), [ clientId ] );
  const { selectBlock, clearSelectedBlock } = useDispatch( 'core/editor' );

  if ( isSelected ) {
    clearSelectedBlock().then( () => {
      selectBlock( parentClientId );
    } );
  }

  const className = classnames(
    props.className,
    'nb-sidecar-area',
    `nb-sidecar-area--${ attributes.areaName }`
  )

  const blockProps = useBlockProps( {
    className: className,
    style: props.style,
  } );

  const innerBlocksProps = useInnerBlocksProps( blockProps, {
    templateLock: false,
    renderAppender: InnerBlocks.ButtonBlockAppender
  } );

  return (
    <div { ...innerBlocksProps } />
  )
}

export default SidecarAreaEdit;
