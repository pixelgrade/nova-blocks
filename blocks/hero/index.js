import './scss/style.scss';
import './scss/editor.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

/**
 * Internal dependencies
 */
import edit from './edit';
import { hero } from '../icons';
import metadata from './block.json';
import save from './save';

export default registerBlockType( 'pixelgrade/hero',
	{
		title: __( 'Pixelgrade Hero', '__plugin_txtd' ),
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		...metadata,
		icon: hero,
		edit,
		save,
		getEditWrapperProps() {
			return {
				'data-align': 'full'
			}
		},
	}
)