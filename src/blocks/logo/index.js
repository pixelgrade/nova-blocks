/**
 * Internal dependencies
 */
import * as icons from '../../icons';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType, } = wp.blocks;
const { ServerSideRender } = wp.components;

export default registerBlockType( 'novablocks/logo',
	{
		title: __( 'Logo', '__plugin_txtd' ),
		description: __( 'Outputs custom logo markup.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.media,
		parent: ['novablocks/header'],
		edit: function( props ) {
			return (
				<ServerSideRender
					block="novablocks/logo"
					attributes={ props.attributes }
				/>
			)
		},
	}
)
