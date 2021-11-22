/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { Fragment } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
const useInnerBlocksProps = wp.blockEditor.useInnerBlocksProps || wp.blockEditor.__experimentalUseInnerBlocksProps;

import { useInnerBlocks } from "@novablocks/block-editor";

import Controls from "./inspector-controls";
import { SidecarVariationPicker } from './components';

const Edit = ( props ) => {

  const {
    attributes: {
      sidebarWidth,
      sidebarPosition,
      lastItemIsSticky
    },
    clientId
  } = props;

  const innerBlocks = useInnerBlocks( clientId );

  const className = classnames(
    `nb-sidecar`,
    `nb-sidecar--sidebar-${ sidebarPosition }`,
    `nb-sidecar--sidebar-${ sidebarWidth }`,
    `alignfull`,
    {
      'nb-sidecar--sticky-sidebar': lastItemIsSticky === true,
    }
  );

  const blockProps = useBlockProps( {
    style: props.style,
  } );

  const innerBlocksProps = useInnerBlocksProps( blockProps, {
    renderAppender: false,
    templateLock: 'all',
  } );

  if ( ! innerBlocks.length ) {
    return <SidecarVariationPicker { ...props } />
  }

  return (
    <Fragment>
      <Controls { ...props } />
      <div { ...innerBlocksProps } className={ className } />
    </Fragment>
  );
}

export default Edit;
