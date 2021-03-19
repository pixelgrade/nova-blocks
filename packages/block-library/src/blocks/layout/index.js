/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import edit from './edit';
import variations from './variations';

import iconSvg from './layout.svg';

import {getSvg} from "@novablocks/block-editor";

registerBlockType('novablocks/layout', {
  title: __('Layout', '__plugin_txtd'),
  description: __('Custom Layout Block', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes: {
    layout: {
      type: 'string',
    }
  },
  supports: {
    align: [ 'wide', 'full' ],
    html: false,
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
  variations,
});
