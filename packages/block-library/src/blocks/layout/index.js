/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

import edit from './edit';
import variations from './variations';
import iconSvg from './layout.svg';
import {getSvg} from "@novablocks/block-editor";
import attributes from "./attributes"

registerBlockType('novablocks/layout', {
  title: __('Layout', '__plugin_txtd'),
  description: __('Custom Layout Block', '__plugin_txtd'),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
  variations,
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'wide' } : {};
  },
});
