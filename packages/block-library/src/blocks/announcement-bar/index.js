/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';

import {
  InnerBlocks
} from '@wordpress/block-editor';

import { getSvg } from "@novablocks/block-editor";

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import iconSvg from './icon.svg';

registerBlockType( 'novablocks/announcement-bar', {
	icon: getSvg( iconSvg ),
	save: () => {
		return (
		  <InnerBlocks.Content />
    )
	},
	edit,
	getEditWrapperProps( attributes ) {
		return { 'data-align': 'full' };
	},
	deprecated
} );
