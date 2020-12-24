/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './logo-block.svg';
import attributes from "./attributes";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/logo', {
	title: __( 'Logo', '__plugin_txtd' ),
	description: __( 'Outputs custom logo markup.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
  attributes,
	// Additional search terms
	keywords: [ __( 'branding', '__plugin_txtd' ) ],
	parent: ['novablocks/header'],
	save: function() {},
	edit: function( props ) {
		return (
			<wp.serverSideRender
				block="novablocks/logo"
				attributes={ props.attributes }
			/>
		)
	},
} );
