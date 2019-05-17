const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

/**
 * Internal dependencies
 */
import { media } from '../icons';

export default registerBlockType( 'pixelgrade/media',
	{
		title: __( 'Pixelgrade Media', '__plugin_txtd' ),
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		icon: media,
		category: 'common'
	}
)