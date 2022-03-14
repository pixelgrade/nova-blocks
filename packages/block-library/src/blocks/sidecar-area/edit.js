import classnames from 'classnames';

import { useSelectParent } from '@novablocks/block-editor';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const SidecarAreaEdit = function( props ) {
  useSelectParent( props );

  const className = classnames(
    props.className,
    'nb-sidecar-area',
    `nb-sidecar-area--${ props.attributes.areaName }`,
    {
      'nb-content-layout-grid': props.attributes.areaName === 'content'
    }
  );

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
};

export default SidecarAreaEdit;
