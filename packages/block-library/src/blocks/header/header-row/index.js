/**
 * Internal dependencies
 */
import iconSvg from '../header-block.svg';
import edit from './edit';
import save from './save';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import {getSvg} from "@novablocks/block-editor";

registerBlockType('novablocks/header-row', {
  title: __('Header Row', '__plugin_txtd' ),
  description: __('Outputs header row markup.', '__plugin_txtd'),
  category: 'nova-blocks',
  parent: 'novablocks/header',
  icon: getSvg( iconSvg ),
  edit,
  save
});
