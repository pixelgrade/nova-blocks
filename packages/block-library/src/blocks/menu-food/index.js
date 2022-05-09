/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import attributes from './attributes.json';
import iconSvg from './icon.svg';
import edit from './edit';
import save from './save';

import './menu-food-section';
import './menu-food-item';
import { getSvg } from "@novablocks/block-editor";

import metadata from './block.json';
const { name: BLOCK_NAME } = metadata;

console.log( 'ABRACADABRA' );

registerBlockType( BLOCK_NAME, {
  icon: getSvg( iconSvg ),
  attributes: attributes,
  supports: {
    html: false
  },
  example: {
    attributes: {
      enableTwoColumns: false
    },
    innerBlocks: [
      {
        name: 'novablocks/menu-food-section',
        innerBlocks: [
          { name: 'novablocks/menu-food-item', },
          { name: 'novablocks/menu-food-item', },
        ],
      },
    ],
  },
  edit,
  save
} );
