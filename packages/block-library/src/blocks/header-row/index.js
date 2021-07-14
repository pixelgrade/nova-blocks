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
import {select} from "@wordpress/data";

registerBlockType( 'novablocks/header-row', {
  title: __( 'Header Row', '__plugin_txtd' ),
  description: __( 'Outputs header row markup.', '__plugin_txtd' ),
  category: 'nova-blocks',
  parent: ['novablocks/header'],
  icon: getSvg( iconSvg ),
  supports: {
    align: [ "wide", "full" ],
    html: false,
    novaBlocks: {
      colorSignal: true,
      spaceAndSizing: true,
    },
  },
  edit,
  save: function() {
    return <InnerBlocks.Content/>
  },
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'full' } : {};
  },
} );
