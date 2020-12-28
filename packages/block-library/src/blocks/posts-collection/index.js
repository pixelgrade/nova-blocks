/**
 * Internal dependencies
 */
import iconSvg from './posts-collection-block.svg';
import edit from './edit';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import { getSvg } from "@novablocks/block-editor";

import blockAttributes from "./attributes";
import { Collection } from "@novablocks/collection";
const attributes = Object.assign( {}, blockAttributes, Collection.attributes );

registerBlockType( 'novablocks/posts-collection', {
	title: __( 'Posts Collection', '__plugin_txtd' ),
	description: __( 'Show Latest Posts', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  supports: {
    html: false
  },
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
