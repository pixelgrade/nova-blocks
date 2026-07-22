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

  // Rail presence is derived from the ACTUAL sidecar-area children (Task 4.1
  // three-area model): each area resolves to a side (explicit
  // sidebar-left/right, or the legacy `sidebar` mapped through sidebarPosition),
  // so a three-area sidecar emits NEITHER absence class. Falls back to the
  // position-derived rails when no areas are present yet. Mirrors the PHP
  // render (novablocks_render_sidecar_block) so canvas and frontend agree.
  const railPresence = innerBlocks.reduce( ( acc, block ) => {
    if ( block.name !== 'novablocks/sidecar-area' ) {
      return acc;
    }

    acc.found = true;
    const area = block.attributes && block.attributes.areaName;
    const side = area === 'sidebar-left' ? 'left'
      : area === 'sidebar-right' ? 'right'
      : area === 'sidebar' ? ( sidebarPosition === 'left' ? 'left' : 'right' )
      : '';

    if ( side === 'left' ) {
      acc.left = true;
    }
    if ( side === 'right' ) {
      acc.right = true;
    }

    return acc;
  }, { left: false, right: false, found: false } );

  const hasLeftRail = railPresence.found ? railPresence.left : sidebarPosition === 'left';
  const hasRightRail = railPresence.found ? railPresence.right : sidebarPosition === 'right';

  const className = classnames(
    'nb-sidecar',
    `nb-sidecar--sidebar-${ sidebarPosition }`,
    `nb-sidecar--sidebar-${ sidebarWidth }`,
    'nb-content-layout-grid',
    {
      'nb-sidecar--sticky-sidebar': lastItemIsSticky === true,
      'nb-sidecar--no-left-rail': ! hasLeftRail,
      'nb-sidecar--no-right-rail': ! hasRightRail,
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
