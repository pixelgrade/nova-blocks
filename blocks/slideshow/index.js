const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

/**
 * Internal dependencies
 */
import { slideshow } from '../icons';

export default registerBlockType( 'pixelgrade/slideshow',
	{
		title: __( 'Pixelgrade Slideshow', '__plugin_txtd' ),
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		icon: slideshow,
		category: 'nova-by-pixelgrade'
	}
)