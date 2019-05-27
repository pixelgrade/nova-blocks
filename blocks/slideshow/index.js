import * as icons from '../icons';
import attributes from './attributes.json';
import edit from './edit';
import save from './save';

import './scss/style.scss';
import './scss/editor.scss';

const { __ } = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

export default registerBlockType( 'pixelgrade/slideshow',
	{
		title: __( 'Slideshow Me the Way', '__plugin_txtd' ),
		description: __( 'Display more than one piece of content in a single, coveted space.', '__plugin_txtd' ),
		icon: icons.slideshow,
		category: 'nova-by-pixelgrade',
		...attributes,
		edit,
		save,
	}
)