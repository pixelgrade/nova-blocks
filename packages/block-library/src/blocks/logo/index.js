/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from "@novablocks/block-editor";

import iconSvg from './logo-block.svg';
import attributes from "./attributes";

registerBlockType( 'novablocks/logo', {
  title: __( 'Logo', '__plugin_txtd' ),
  description: __( 'Outputs custom logo markup.', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  supports: {
    html: false
  },
  // Additional search terms
  keywords: [ __( 'branding', '__plugin_txtd' ) ],
  parent: [ 'novablocks/header-row' ],
  save: function() {
    return false
  },
  edit: function( props ) {
    useSelectParent( props );

    return (
      <wp.serverSideRender
        block="novablocks/logo"
        attributes={ props.attributes }
      />
    )
  },
} );
