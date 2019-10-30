/**
 * Internal dependencies
 */
import * as icons from '../../icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType, } = wp.blocks;

function init() {
	registerBlockType( 'novablocks/logo', {
		title: __( 'Logo', '__plugin_txtd' ),
		description: __( 'Outputs custom logo markup.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.logo,
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
	} )
}

export default init;
