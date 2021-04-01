/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import iconSvg from './layout-area.svg';

import {getSvg} from "@novablocks/block-editor";

import edit from "./edit";

import attributes from "./attributes"

registerBlockType('novablocks/layout-area', {
  title: __('Layout Area', '__plugin_txtd'),
  description: __('Custom Layout Area Block', '__plugin_txtd'),
  category: 'nova-blocks',
  attributes,
  icon: getSvg( iconSvg ),
  parent: ['novablocks/layout'],
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
});
