import classnames from 'classnames';

import { useSelectParent } from '@novablocks/block-editor';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

// Resolve a rail area to its side — mirrors the PHP
// novablocks_resolve_sidecar_area_side(): explicit per-side names win, and the
// legacy `sidebar` name maps to the parent Sidecar's sidebarPosition (the
// historical default is the right rail). Returns '' for content / no rail.
const resolveSidecarAreaSide = ( areaName, sidebarPosition ) => {
  if ( areaName === 'sidebar-left' ) {
    return 'left';
  }
  if ( areaName === 'sidebar-right' ) {
    return 'right';
  }
  if ( areaName === 'sidebar' ) {
    return sidebarPosition === 'left' ? 'left' : 'right';
  }
  return '';
};

const SidecarAreaEdit = function( props ) {
  useSelectParent( props );

  const { areaName } = props.attributes;

  // The legacy `sidebar` area needs the parent Sidecar's position to resolve
  // its side. Prefer block context (usesContext novablocks/sidebarPosition),
  // but fall back to reading the immediate Sidecar parent's attribute directly
  // so resolution never depends on context bootstrapping in the canvas.
  const parentPosition = useSelect( ( select ) => {
    const { getBlockRootClientId, getBlock } = select( 'core/block-editor' );
    const parentId = getBlockRootClientId( props.clientId );
    const parent = parentId ? getBlock( parentId ) : null;

    return parent && parent.name === 'novablocks/sidecar'
      ? parent.attributes.sidebarPosition
      : undefined;
  }, [ props.clientId ] );

  const sidebarPosition = ( props.context && props.context[ 'novablocks/sidebarPosition' ] ) || parentPosition || '';

  const areaClasses = [];

  if ( areaName === 'content' ) {
    areaClasses.push( 'nb-sidecar-area--content', 'nb-content-layout-grid' );
  } else {
    const side = resolveSidecarAreaSide( areaName, sidebarPosition );

    if ( side ) {
      // Keep the legacy generic class alongside the resolved per-side class
      // (CSS + break-align back-compat during the two-area -> three-area
      // transition), matching the PHP render.
      areaClasses.push( 'nb-sidecar-area--sidebar', `nb-sidecar-area--sidebar-${ side }` );
    } else {
      areaClasses.push( `nb-sidecar-area--${ areaName }` );
    }
  }

  const className = classnames(
    props.className,
    'nb-sidecar-area',
    ...areaClasses
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
