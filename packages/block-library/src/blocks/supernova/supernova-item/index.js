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
import Blob from "@novablocks/blob";

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
    preview: {
      type: 'boolean',
      default: true,
    },
    level: {
      type: 'number',
      default: 2,
    },
    sourceType: {
      type: 'string',
      default: 'content',
    },
    metaAboveTitle: {
      type: 'string',
      default: '',
    },
    metaBelowTitle: {
      type: 'string',
      default: '',
    },
    showMeta: {
      type: 'boolean',
      default: true,
    },
    title: {
      type: 'string',
      default: '',
    },
    showTitle: {
      type: 'boolean',
      default: true,
    },
    subtitle: {
      type: 'string',
      default: '',
    },
    showSubtitle: {
      type: 'boolean',
      default: true,
    },
    description: {
      type: 'string',
      default: '',
    },
    showDescription: {
      type: 'boolean',
      default: true,
    },
    buttonText: {
      type: 'string',
      default: '',
    },
    buttonUrl: {
      type: 'string',
      default: '',
    },
    buttonOpensInNewTab: {
      type: 'boolean',
      default: false,
    },
    showFooter: {
      type: 'boolean',
      default: true,
    },
    ...Blob.attributes
  },
  supports: {
    html: false
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
} );
