/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

import edit from './edit';
import variations from './variations';
import iconSvg from './sidecar.svg';
import { getSvg } from "@novablocks/block-editor";
import attributes from "./attributes"

registerBlockType( 'novablocks/sidecar', {
  title: __( 'Sidecar', '__plugin_txtd' ),
  description: __( 'Establish supporting sections that relates to the main content.', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  edit,
  keywords: [
    __( 'layout', '__plugin_txtd' ),
    __( 'sidebar', '__plugin_txtd' ),
    __( 'content', '__plugin_txtd' ),
    __( 'aside', '__plugin_txtd' )
  ],
  save: function() {
    return <InnerBlocks.Content/>
  },
  variations,
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'wide' } : {};
  },
} );
