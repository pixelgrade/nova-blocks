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
import attributes from './attributes.json';
import save from './save';

export default registerBlockType( 'pixelgrade/hero',
	{
		title: __( 'Pixelgrade Hero', '__plugin_txtd' ),
		icon: hero,
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		category: "nova-by-pixelgrade",
		...attributes,
		edit,
		save,
		getEditWrapperProps() {
			return {
				'data-align': 'full'
			}
		},
	}
)