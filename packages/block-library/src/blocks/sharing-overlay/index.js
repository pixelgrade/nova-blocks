/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";
import { addFilter } from "@wordpress/hooks";

/**
 * Internal dependencies
 */
import iconSvg from './icon.svg';
import edit from './edit';
import attributes from './attributes';
import attributesOverwrite from "./attributes-overwrite.json";

const BLOCK_NAME = 'novablocks/sharing-overlay';

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
addFilter( 'blocks.registerBlockType', 'novablocks/sharing-overlay/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  icon: getSvg( iconSvg ),
	attributes,
	edit,
	save: function() {
		return null;
	},
} );
