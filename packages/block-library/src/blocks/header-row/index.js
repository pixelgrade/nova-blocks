/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import iconSvg from '../header/header-block.svg';
import edit from './edit';
import attributesOverwrite from "./attributes-overwrite.json";

const BLOCK_NAME = 'novablocks/header-row';

const overwriteAttributes = ( settings ) => {

  if ( settings.name !== BLOCK_NAME ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributesOverwrite
    }
  };
};

addFilter( 'blocks.registerBlockType', 'novablocks/header-row/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
  apiVersion: 2,
  title: __( 'Header Row', '__plugin_txtd' ),
  description: __( 'Outputs header row markup.', '__plugin_txtd' ),
  category: 'nova-blocks',
  parent: ['novablocks/header'],
  icon: getSvg( iconSvg ),
  supports: {
    align: [ "wide", "full" ],
    html: false,
    novaBlocks: {
      colorSignal: {
        attributes: true,
        controls: true,
        paletteClassname: true,
        paletteVariationClassname: true,
      },
      spaceAndSizing: true,
      customAlign: true,
    },
  },
  edit,
  save: function() {
    return <InnerBlocks.Content/>
  },
} );
