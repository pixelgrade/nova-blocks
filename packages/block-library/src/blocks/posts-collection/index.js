/**
 * Internal dependencies
 */
import iconSvg from './posts-collection-block.svg';
import edit from './edit';
import transforms from './transforms';
import variations from './variations';

/**
 * Nova Blocks dependencies
 */
import { getSvg } from "@novablocks/block-editor";
import { Collection } from "@novablocks/collection";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import blockAttributes from './attributes';
const attributes = Object.assign( {}, blockAttributes, Collection.attributes );

registerBlockType( 'novablocks/posts-collection', {
	title: __( 'Posts Collection (Deprecated)', '__plugin_txtd' ),
	description: __( 'Show Latest Posts', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  variations,
  supports: {
    html: false,
    novaBlocks: {
      colorSignal: true,
      contentColorSignal: true,
      latestPosts: true,
      spaceAndSizing: true,
    },
  },
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
  transforms,
	getEditWrapperProps() {
		const settings = wp.data.select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
