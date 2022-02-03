/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from "@wordpress/hooks";

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './google-map-block.svg';
import edit from "./edit";
import attributes from "./attributes";
import attributesOverwrite from "./attributes-overwrite.json";

const BLOCK_NAME = 'novablocks/google-map';

const overwriteAttributes = ( settings ) => {

  if ( settings.name !== BLOCK_NAME ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributesOverwrite
    }
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/google-map/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
	icon: getSvg( iconSvg ),
	getEditWrapperProps( attributes ) {
		const { align } = attributes;
		if ( 'center' === align || 'full' === align ) {
			return { 'data-align': align };
		}
	},
	attributes,
	edit,
	save: function() {
	  return false
  }
} );
