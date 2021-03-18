/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";
import iconSvg from './cards-collection-block.svg';
import edit from './edit';
import transforms from './transforms';

registerBlockType( 'novablocks/cards-collection', {
	title: __( 'Cards Collection (Deprecated)', '__plugin_txtd' ),
	description: __( 'Display a list of related items placed within a coherent layout.', '__plugin_txtd' ),
	category: 'nova-blocks',
  icon: getSvg( iconSvg ),
	keywords: [ __( 'grid', '__plugin_txtd' ), __( 'columns', '__plugin_txtd' ), __( 'collection', '__plugin_txtd' ), __( 'group', '__plugin_txtd' ) ],
  supports: {
    html: false
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
