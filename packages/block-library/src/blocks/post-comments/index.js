
/**
 * Internal dependencies
 */
import iconSvg from './icon.svg';
import edit from './edit';

/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { addFilter } from "@wordpress/hooks";
import { InnerBlocks } from "@wordpress/block-editor";
import { getSvg } from "@novablocks/block-editor";

registerBlockType( 'novablocks/post-comments', {
	icon: getSvg( iconSvg ),
	attributes: {  // Define block attributes
	  hasUserExperience: {
		type: 'boolean',
		default: true,
	  },
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
  
