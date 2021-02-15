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
  parent: ['novablocks/header'],
  attributes: {
    name: {
      type: 'string',
      default: 'Header Row'
    },
    label: {
      type: 'string',
      default: 'Header Row Navigation'
    },
    isSticky: {
      type: 'boolean',
      default: false,
    },
    isPrimary: {
      type: 'boolean',
      default: false
    }
  },
  icon: getSvg( iconSvg ),
  edit,
  save: function() {
    return <InnerBlocks.Content/>
  }
} );
