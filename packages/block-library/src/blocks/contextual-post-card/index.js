import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import attributes from './attributes.json';
import meta from './block.json';

registerBlockType( meta.name, {
	icon: 'cover-image',
	attributes,
	edit,
	save() {
		return false;
	},
} );
