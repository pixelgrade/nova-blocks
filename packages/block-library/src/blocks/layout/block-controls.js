/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
  BlockControls,
} from '@wordpress/block-editor';

import {
  Toolbar,
} from '@wordpress/components';

const LAYOUT_ALIGNMENTS_CONTROLS = {
  left: {
    icon: 'align-pull-left',
    title: __( 'Show Sidebar on Left Side', '__plugin_txtd' ),
  },
  right: {
    icon: 'align-pull-right',
    title: __( 'Show Sidebar on Right Side', '__plugin_txtd' ),
  },
};

const LayoutBlockControls = function( props ) {

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
        controls={ Object.keys( LAYOUT_ALIGNMENTS_CONTROLS ).map( ( control ) => {
          return {
            ...LAYOUT_ALIGNMENTS_CONTROLS[ control ],
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

export default LayoutBlockControls;
