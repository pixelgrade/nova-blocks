/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
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
import iconSvg from './announcement-bar-block.svg';

registerBlockType( 'novablocks/announcement-bar', {
	title: __( 'Announcement Bar', '__plugin_txtd' ),
	description: __( 'Display a featured message through a banner across the top of your site.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	keywords: [ __( 'Promo Bar', '__plugin_txtd' ), __( 'Welcome Header Bar', '__plugin_txtd' ), __( 'Top Bar', '__plugin_txtd' ) ],
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		},
		url: {
			type: 'string',
			default: ''
		},
		opensInNewTab: {
			type: 'boolean',
			default: false
		},
		content: {
			type: 'string',
			default: '<b>Find me on Instagram!</b> New photos and interesting facts every day.',
		}
	},
  supports: {
	  html: false,
    novaBlocks: {
      colorSignal: {
        attributes: true,
        controls: true,
        functionalColors: true,
        paletteClassname: true,
        paletteVariationClassname: true
      }
    }
  },
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
