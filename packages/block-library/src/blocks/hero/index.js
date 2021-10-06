/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";
import { select } from "@wordpress/data";
import { addFilter } from "@wordpress/hooks";

import { getSvg } from "@novablocks/block-editor";

import {
	generateDefaults,
	insertTemplate,
} from "@novablocks/block-editor";

/**
 * Internal dependencies
 */
import iconSvg from './hero-block.svg';
import edit from './edit';
import save from './save';
import transforms from './transforms';
import attributes from "./attributes.json";

// Load deprecated file
import './deprecated';

import getNewDefaults from './get-new-defaults';

const settings = select( 'novablocks' ).getSettings();

generateDefaults( 'novablocks/hero', getNewDefaults );
insertTemplate( 'novablocks/hero', settings.hero.template );

registerBlockType( 'novablocks/hero', {
	title: __( 'Hero of the Galaxy (Deprecated)', '__plugin_txtd' ),
	description: __( 'A great way to get your visitors acquainted with your content.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [
		__( 'cover', '__plugin_txtd' ),
		__( 'full width', '__plugin_txtd' ),
		__( 'hero image', '__plugin_txtd' ),
		__( 'cover section', '__plugin_txtd' )
	],
	supports: {
		anchor: true,
    html: false,
    novaBlocks: {
      colorSignal: {
        attributes: true,
        altAttributes: true,
        addOverlayColorDeprecatedMethod: true,
        controls: true,
      },
      overlayFilter: {
        attributes: true,
        controls: true,
      },
      contentPosition: {
        attributes: true,
        controls: true,
        deprecated: true
      },
      customDefaults: true,
      scrollingEffect: {
        attributes: true,
        altAttributes: true,
        controls: true,
        customWrapper: true,
      },
      spaceAndSizing: true
    },
	},
	attributes,
	edit,
	save,
	getEditWrapperProps() {
		const settings = select( 'core/block-editor' ).getSettings();
		return settings.alignWide ? { 'data-align': 'full' } : {};
	},
  transforms
} );
