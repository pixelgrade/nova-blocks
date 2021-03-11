import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';

import edit from './edit';
import iconSvg from './super-nova-block.svg';

import './supernova-item';
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
    align: {
      type: 'string',
      default: 'wide',
    },
    layout: {
      type: 'string',
      default: 'grid'
    },
    itemsWidth: {
      type: 'string',
      default: 'fixed',
    },
    columnsCount: {
      type: 'number',
      default: 3,
    },
    sourceType: {
      type: 'string',
      default: 'auto',
    },
    cardContentAlign: {
      type: 'string',
      default: 'center center',
    },
    cardLayout: {
      type: 'string',
      default: 'vertical',
    },
    cardMediaAspectRatio: {
      type: 'number',
      default: 50,
    },
    cardMediaOpacity: {
      type: 'number',
      default: 100,
    },
  },
  supports: {
    align: [ "wide", "full" ],
    html: false
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'full' } : {};
  },
} );
