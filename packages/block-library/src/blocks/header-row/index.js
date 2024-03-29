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

import iconSvg from './icon.svg';
import edit from './edit';
import attributesOverwrite from "./attributes-overwrite.json";
import metadata from './block.json';

const { name: BLOCK_NAME } = metadata;

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
  save: () => <InnerBlocks.Content/>,
} );
