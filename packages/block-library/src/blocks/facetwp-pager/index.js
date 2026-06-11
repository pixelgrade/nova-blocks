import { registerBlockType } from '@wordpress/blocks';

import attributes from "./attributes";
import meta from "./block.json";
import edit from './edit';

registerBlockType( meta.name, {
	attributes,
	edit,
	save: () => null,
} );
