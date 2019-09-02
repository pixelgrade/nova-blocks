/**
 * Internal dependencies
 */
import * as icons from "../../icons";
import edit from "./edit";

import { parallaxAttributes } from '../../components/with-parallax';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

export default registerBlockType( 'novablocks/google-map',
	{
		title: __( 'Map of the World', '__plugin_txtd' ),
		description: __( 'Outputs custom map.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.map,
		attributes: {
			align: {
				type: 'string',
				default: 'center',
			},
			pinColor: {
				type: 'string',
				default: '#222222',
			},
			zoom: {
				type: 'number',
				default: 17,
			},
			styleLabel: {
				type: 'string',
				default: 'regular',
			},
			styleData: {
				type: 'array',
				default: [],
			},
			markers: {
				type: 'array',
				default: []
			},
			showLabels: {
				type: 'boolean',
				default: true,
			},
			showIcons: {
				type: 'boolean',
				default: true,
			},
			showControls: {
				type: 'boolean',
				default: false,
			},
			...parallaxAttributes,
		},
		getEditWrapperProps( attributes ) {
			const { align } = attributes;
			if ( 'center' === align || 'full' === align ) {
				return { 'data-align': align };
			}
		},
		edit,
		save: function() {}
	}
)
