/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";
import edit from './edit';
import iconSvg from './icon.svg';
import attributes from './attributes.json';

registerBlockType( 'novablocks/supernova-item', {
  icon: getSvg( iconSvg ),
  attributes,
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
} );
