/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { Fragment } from "@wordpress/element";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

import { useInnerBlocks, VariationPicker } from "@novablocks/block-editor";

import Controls from "./inspector-controls";

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
    'nb-sidecar',
    `nb-sidecar--sidebar-${ sidebarPosition }`,
    `nb-sidecar--sidebar-${ sidebarWidth }`,
    'nb-content-layout-grid',
    {
      'nb-sidecar--sticky-sidebar': lastItemIsSticky === true,
    },
  );

  const blockProps = useBlockProps( {
    style: props.style,
    className: className,
  } );

  const innerBlocksProps = useInnerBlocksProps( blockProps, {
    renderAppender: false,
    templateLock: 'all',
  } );

  if ( ! innerBlocks.length ) {
    return <VariationPicker { ...props } />
  }

  return (
    <Fragment>
      <Controls { ...props } />
      <div { ...innerBlocksProps } />
    </Fragment>
  );
};

export default Edit;
