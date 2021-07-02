/**
 * Internal dependencies
 */
import iconSvg from './sharing-overlay-block.svg';
import attributes from './attributes';
import edit from './edit';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/sharing-overlay', {
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
        altAttributes: true
      }
    }
  },
	edit,
	save: function() {
		return null;
	},
} );
