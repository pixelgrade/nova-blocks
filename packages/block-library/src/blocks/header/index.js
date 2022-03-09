/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { select } from "@wordpress/data";
import { InnerBlocks } from '@wordpress/block-editor';
import { addFilter } from "@wordpress/hooks";

import { getSvg } from "@novablocks/block-editor";

/**
 * Internal dependencies
 */
import iconSvg from './icon.svg';
import edit from './edit';
import variations from './variations';
import deprecated from './deprecated';
import attributes from './attributes.json';
import attributesOverwrite from "./attributes-overwrite.json";

const BLOCK_NAME = 'novablocks/header';

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

addFilter( 'blocks.registerBlockType', 'novablocks/header/attributes-overwrite', overwriteAttributes, Number.MAX_SAFE_INTEGER );

registerBlockType( BLOCK_NAME, {
	icon: getSvg( iconSvg ),
	variations,
  deprecated,
  attributes,
	edit,
	save: () => <InnerBlocks.Content />,
} );
