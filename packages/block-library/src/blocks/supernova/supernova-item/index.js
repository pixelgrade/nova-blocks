/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import edit from './edit';
import iconSvg from '../super-nova-block.svg';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType( 'novablocks/supernova-item', {
  title: __( 'Super Nova Item', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes: {
    cardContentAlign: {
      type: 'string',
      default: 'center center',
    },
    cardLayout: {
      type: 'string',
      default: 'horizontal'
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
