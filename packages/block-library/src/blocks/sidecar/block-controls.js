/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

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

  const { attributes, setAttributes } = props;
  const { sidebarPosition } = attributes;

  if ( sidebarPosition === 'none' ) {
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
