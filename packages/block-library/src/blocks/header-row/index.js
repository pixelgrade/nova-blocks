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
  icon: getSvg( iconSvg ),
  edit,
  save: function() {
    return <InnerBlocks.Content/>
  },
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'full' } : {};
  },
} );
