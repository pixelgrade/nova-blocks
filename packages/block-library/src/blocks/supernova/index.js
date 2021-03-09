/**
 * Internal dependencies
 */
import { getSvg } from "@novablocks/block-editor";

import edit from './edit';
import iconSvg from './super-nova-block.svg';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'novablocks/supernova', {
  title: __( 'Super Nova', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes: {
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
    }
  },
  supports: {
    html: false
  },
  edit,
  save: () => {},
} );
