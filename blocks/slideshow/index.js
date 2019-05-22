import * as icons from '../icons';
import attributes from './attributes.json';
import edit from './edit';

import './scss/style.scss';
import './scss/editor.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

export default registerBlockType( 'pixelgrade/slideshow',
	{
		title: __( 'Pixelgrade Slideshow', '__plugin_txtd' ),
		description: __( 'Some sort of description for the hero block', '__plugin_txtd' ),
		icon: icons.slideshow,
		category: 'nova-by-pixelgrade',
		...attributes,
		edit,
	}
)