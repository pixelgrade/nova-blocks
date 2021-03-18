import { select } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';
import Blob from '@novablocks/blob';

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
    preview: {
      type: 'boolean',
      default: true,
    },
    cardContentAlign: {
      type: 'string',
      default: 'center center',
    },
    cardLayout: {
      type: 'string',
      default: 'vertical',
    },
    cardMediaOpacity: {
      type: 'number',
      default: 100,
    },
    headerPosition: {
      type: 'number',
      default: 0,
    },
    title: {
      type: "string",
      default: "Latest Posts"
    },
    subtitle: {
      type: "string",
      default: "A collection of our latest articles displayed in a cohesive layout"
    },
    showCollectionTitle: {
      type: "boolean",
      default: true
    },
    showCollectionSubtitle: {
      type: "boolean",
      default: true
    },
    collectionTitleLevel: {
      type: "number",
      default: 2
    },
    ...Blob.attributes
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
    return settings.alignWide ? { 'data-spanac': 'full' } : {};
  },
} );
