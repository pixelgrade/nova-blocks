/**
 * Internal dependencies
 */
import iconSvg from '../header/header-block.svg';
import edit from './edit';

/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';
import {getSvg} from "@novablocks/block-editor";
import {InnerBlocks} from "@wordpress/block-editor";

registerBlockType( 'novablocks/header-row', {
  title: __( 'Header Row', '__plugin_txtd' ),
  description: __( 'Outputs header row markup.', '__plugin_txtd' ),
  category: 'nova-blocks',
  parent: 'novablocks/header',
  attributes: {
    headerRowType: {
      type: 'string',
    },
    headerRowLabel: {
      type: 'string',
    }
  },
  icon: getSvg( iconSvg ),
  edit,
  save: function() {
    return <InnerBlocks.Content/>
  }
} );
