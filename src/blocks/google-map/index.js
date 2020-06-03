/**
 * Internal dependencies
 */
import * as icons from "../../icons";
import edit from "./edit";

import { parallaxAttributes } from '../../components/with-parallax';
import styles from "./styles";

import blockAttributes from "./attributes"
import dopplerAttributes from "../../components/scrolling-effect-controls/attributes";

const attributes = Object.assign( {}, blockAttributes, dopplerAttributes );

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

function init() {

	registerBlockType( 'novablocks/google-map', {
		title: __( 'Map of the World', '__plugin_txtd' ),
		description: __( 'Display an interactive map to show the location of your venue.', '__plugin_txtd' ),
		category: 'nova-blocks',
		icon: icons.map,
		keywords: [
			__( 'google', '__plugin_txtd' ),
			__( 'maps', '__plugin_txtd' ),
			__( 'google maps', '__plugin_txtd' ),
			__( 'location', '__plugin_txtd' )
		],
		getEditWrapperProps( attributes ) {
			const { align } = attributes;
			if ( 'center' === align || 'full' === align ) {
				return { 'data-align': align };
			}
		},
		attributes,
		edit,
		save: function() {}
	} )
}

export default init;
