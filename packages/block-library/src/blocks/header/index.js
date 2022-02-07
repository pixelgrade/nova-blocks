/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
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
  apiVersion: 2,
  title: __( 'Header', '__plugin_txtd' ),
	description: __( 'Outputs custom header markup.', '__plugin_txtd' ),
	category: 'nova-blocks',
	icon: getSvg( iconSvg ),
	// Additional search terms
	keywords: [ __( 'logo', '__plugin_txtd' ), __( 'menu', '__plugin_txtd' ) ],
	supports: {
    html: false,
    multiple: false,
    novaBlocks: {
      colorSignal: {
        attributes: true,
        controls: true,
        paletteClassname: true,
        paletteVariationClassname: true,
        colorSignalClassname: true,
      },
    },
  },
	variations,
  deprecated,
  attributes,
	edit,
	save: () => <InnerBlocks.Content />,
} );
