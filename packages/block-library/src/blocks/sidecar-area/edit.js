import classnames from 'classnames';

import { useSelectParent } from '@novablocks/block-editor';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

const SidecarAreaEdit = function( props ) {
  useSelectParent( props );

  const className = classnames(
    props.className,
    'nb-sidecar-area',
    `nb-sidecar-area--${ props.attributes.areaName }`,
    {
      'nb-content-layout-grid': props.attributes.areaName === 'content'
    }
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
