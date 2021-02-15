/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import iconSvg from './header-block.svg';
import edit from './edit';
import variations from './variations';
import deprecated from './deprecated';

import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/header', {
	title: __( 'Header', '__plugin_txtd' ),
	description: __( 'Outputs custom header markup.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [ __( 'logo', '__plugin_txtd' ), __( 'menu', '__plugin_txtd' ) ],
	supports: {
    align: [ "wide", "full" ],
    default: "full",
    html: false,
    multiple: false
  },
	variations,
  deprecated,
	edit,
	save: function() {
		return <InnerBlocks.Content />
	},
} );
