/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { BlockControls } from '@wordpress/block-editor';

import { Toolbar } from '@wordpress/components';

const SIDECAR_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-pull-left',
    title: __( 'Show sidebar on left side', '__plugin_txtd' ),
  },
  right: {
    icon: 'align-pull-right',
    title: __( 'Show sidebar on right side', '__plugin_txtd' ),
  },
};

const SidecarBlockControls = function( props ) {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    sidebarPosition,
  } = attributes;

  return (
    <BlockControls>

      <Toolbar
        controls={ Object.keys( SIDECAR_ALIGNMENTS_CONTROLS ).map( ( control ) => {
          return {
            ...SIDECAR_ALIGNMENTS_CONTROLS[ control ],
            onClick: () => {
              setAttributes( { sidebarPosition: control } );
            },
            isActive: sidebarPosition === control,
          };
        } ) }
      />

    </BlockControls>
  );
};

export default SidecarBlockControls;
