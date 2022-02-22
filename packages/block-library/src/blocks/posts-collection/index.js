/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { InnerBlocks } from "@wordpress/block-editor";

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
import "./with-content-loader";

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
      collectionLayout: true,
      contentLoader: true,
      overlayFilter: true,
      spaceAndSizing: true,
      cardElementsStackingSupports:true,
      cardElementsVisibility:true,
    },
  },
	edit,
	save() {
		return <InnerBlocks.Content />;
	},
  transforms,
} );
