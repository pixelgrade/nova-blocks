/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from './headline-block.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';

registerBlockType( 'novablocks/headline', {
	icon: getSvg( iconSvg ),
	save,
	edit,
	transforms,
} );
