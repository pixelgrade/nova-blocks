/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getSvg, useSelectParent } from "@novablocks/block-editor";

import iconSvg from './logo-block.svg';
import attributes from "./attributes";

registerBlockType( 'novablocks/logo', {
  icon: getSvg( iconSvg ),
  attributes,
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
