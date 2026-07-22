/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useInnerBlocks } from '@novablocks/block-editor';

const SIDEBAR_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-pull-left',
    label: __( 'Show Sidebar on Left Side', '__plugin_txtd' ),
  },
  right: {
    icon: 'align-pull-right',
    label: __( 'Show Sidebar on Right Side', '__plugin_txtd' ),
  },
};

const SidecarBlockControls = function( props ) {

  const { attributes, setAttributes, clientId } = props;
  const { sidebarPosition } = attributes;

  const innerBlocks = useInnerBlocks( clientId );

  // The toolbar quick-flip writes ONLY sidebarPosition, which moves a legacy
  // `sidebar` rail (its side is resolved from position) but NOT an explicit-named
  // rail (`sidebar-left`/`sidebar-right`, placed by its own class). On an explicit
  // rail it would leave the rail put while contradicting its class and dropping to
  // Custom — so it is shown ONLY for legacy `sidebar`-area content, where it still
  // works exactly as before. Explicit rails (recipe-created or three-area) change
  // side through the Layout Recipe picker instead. (Task 4.2 review.)
  const hasExplicitRail = innerBlocks.some(
    ( block ) =>
      block.name === 'novablocks/sidecar-area' &&
      [ 'sidebar-left', 'sidebar-right' ].includes( block.attributes?.areaName )
  );

  if ( sidebarPosition === 'none' || hasExplicitRail ) {
    return null;
  }

  return (
    <BlockControls>
      <ToolbarGroup>
        { Object.keys( SIDEBAR_ALIGNMENTS_CONTROLS ).map( ( control ) => {
          return (
            <ToolbarButton
              icon={ SIDEBAR_ALIGNMENTS_CONTROLS[ control ].icon }
              label={ SIDEBAR_ALIGNMENTS_CONTROLS[ control ].label }
              key={ control }
              isActive={ control === sidebarPosition }
              onClick={ () => {
                setAttributes( { sidebarPosition: control } )
              } }
            />
          )
        } ) }
      </ToolbarGroup>
    </BlockControls>
  );
};

export default SidecarBlockControls;
