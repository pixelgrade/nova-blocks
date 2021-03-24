import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';
import AdvancedGallery from '@novablocks/advanced-gallery';
import Blob from '@novablocks/blob';

import edit from './edit';
import variations from './variations';
import iconSvg from './super-nova-block.svg';

import attributes from './attributes.json';

import './copy-attributes-to-inner-blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType( 'novablocks/supernova', {
  title: __( 'Super Nova', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes: {
    ...attributes,
    ...Blob.attributes,
  },
  supports: {
    align: [ "wide", "full" ],
    html: false,
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
  variations,
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'full' } : {};
  },
} );
