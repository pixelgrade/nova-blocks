/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Nova Blocks dependencies
 */
import { getSvg } from "@novablocks/block-editor";

/**
 * Internal dependencies
 */
import attributes from "./attributes";
import iconSvg from "./posts-collection-block.svg";
import edit from "./edit";
import transforms from "./transforms";
import variations from "./variations";

registerBlockType( 'novablocks/posts-collection', {
  apiVersion: 2,
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
      latestPosts: true,
      spaceAndSizing: true,
      elementsVisibility: true,
      collectionLayout: true,
      overlayFilter: true,
    },
  },
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
  transforms,
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
} );
