/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
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
import attributesColorSignal from './attributes-color-signal.json';

const withColorSignalAttributes = ( settings ) => {

  if ( 'novablocks/header' !== settings.name ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributesColorSignal
    }
  };

}
addFilter( 'blocks.registerBlockType', 'novablocks/header-color-signal-attributes-overwrite', withColorSignalAttributes, 20 );

registerBlockType( 'novablocks/header', {
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
      colorSignal: true,
    },
  },
	variations,
  deprecated,
  attributes,
	edit,
	save: function() {
		return <InnerBlocks.Content />
	},
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'full' } : {};
  }
} );
