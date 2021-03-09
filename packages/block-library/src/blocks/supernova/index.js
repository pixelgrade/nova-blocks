/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import edit from './edit';
import iconSvg from './super-nova-block.svg';

import './supernova-item';
import './copy-attributes-to-inner-blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {InnerBlocks} from "@wordpress/block-editor";

registerBlockType( 'novablocks/supernova', {
  title: __( 'Super Nova', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes: {
    layout: {
      type: 'string',
      default: 'grid'
    },
    cardLayout: {
      type: 'string',
      default: 'vertical',
    },
    itemsWidth: {
      type: 'string',
      default: 'fixed',
    },
    columnsCount: {
      type: 'number',
      default: 3,
    },
    cardMediaOpacity: {
      type: 'number',
      default: 100,
    },
  },
  supports: {
    html: false
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
} );
