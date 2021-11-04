/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";
import { addFilter } from "@wordpress/hooks";

/**
 * Internal dependencies
 */
import iconSvg from './sharing-overlay-block.svg';
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
}
addFilter( 'blocks.registerBlockType', 'novablocks/sharing-overlay/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
	title: __( 'Sharing System', '__plugin_txtd' ),
	description: __( 'Add a button that toggles sharing overlay.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [ __( 'sharing', '__plugin_txtd' ) ],
	attributes,
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: {
        controls: true,
      }
    }
  },
	edit,
	save: function() {
		return null;
	},
} );
