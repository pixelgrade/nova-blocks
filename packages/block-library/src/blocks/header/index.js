/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { select } from "@wordpress/data";
import { InnerBlocks } from '@wordpress/block-editor';

import { getSvg } from "@novablocks/block-editor";

/**
 * Internal dependencies
 */
import iconSvg from './header-block.svg';
import edit from './edit';
import variations from './variations';
import deprecated from './deprecated';
import attributes from './attributes.json';

registerBlockType( 'novablocks/header', {
	icon: getSvg( iconSvg ),
	variations,
  deprecated,
  attributes,
	edit,
	save: () => <InnerBlocks.Content />,
} );
