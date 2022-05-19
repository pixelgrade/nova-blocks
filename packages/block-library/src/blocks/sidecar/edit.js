/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { Fragment } from "@wordpress/element";
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import variations from './variations';

import { useInnerBlocks, VariationPicker } from "@novablocks/block-editor";

import InspectorControls from "./inspector-controls";
import BlockControls from "./block-controls";

const Edit = ( props ) => {

  const {
    attributes: {
      sidebarWidth,
      sidebarPosition,
      lastItemIsSticky,
      contentFontSize,
      sidebarFontSize
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
    'alignfull'
  );

  const blockProps = useBlockProps( {
    style: {
      ...props.style,
      '--nb-sidecar-content-font-size-base': `var(--nb-font-size-${ contentFontSize })`,
      '--nb-sidecar-sidebar-font-size-base': `var(--nb-font-size-${ sidebarFontSize })`,
    },
    className: className,
  } );

  const innerBlocksProps = useInnerBlocksProps( blockProps, {
    renderAppender: false,
    templateLock: 'all',
    allowedBlocks: [ 'novablocks/sidecar-area' ]
  } );

  if ( ! innerBlocks.length ) {
    return <VariationPicker { ...props } />
  }

  return (
    <Fragment>
      <BlockControls { ...props } />
      <InspectorControls { ...props } />
      <div { ...innerBlocksProps } />
    </Fragment>
  );
};

export default Edit;
