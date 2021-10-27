/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { __experimentalUseInnerBlocksProps as useInnerBlocksProps, useBlockProps } from "@wordpress/block-editor";

import { useInnerBlocks } from "@novablocks/block-editor";

import { SidecarVariationPicker } from './components';
//import InnerBlocksPicker from "./components/inner-blocks-picker";

const Edit = ( props ) => {

  const {
    attributes: {
      layout,
      sidebarWidth,
      sidebarPosition,
      lastItemIsSticky
    },
    clientId
  } = props;

  const innerBlocks = useInnerBlocks( clientId );

  const className = classnames(
    props.className,
    `novablocks-sidecar`,
    `novablocks-sidecar--sidebar-${ sidebarPosition }`,
    `novablocks-sidebar--${ sidebarWidth }`,
    {
      'last-block-is-sticky': lastItemIsSticky === true,
      'novablocks-sidecar--complex': layout === 'complex'
    }
  );

  const blockProps = useBlockProps( {
    className: className,
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
    <div { ...innerBlocksProps } />
  );
}

export default Edit;
