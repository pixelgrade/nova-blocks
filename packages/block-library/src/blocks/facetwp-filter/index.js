/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

import { getSvg } from '@novablocks/block-editor';

import edit from './edit';

/**
 * Internal dependencies
 */
import attributes from "./attributes";
import meta from "./block.json";
import iconSvg from './icon.svg';


registerBlockType( meta.name, {
  attributes,
  icon: getSvg( iconSvg ),
  edit,
  save: () => <InnerBlocks.Content />,
} );
