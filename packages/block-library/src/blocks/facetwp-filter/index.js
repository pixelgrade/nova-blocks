/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import ServerSideRender from '@wordpress/server-side-render';

import edit from './edit';

/**
 * Internal dependencies
 */
import attributes from "./attributes";
import meta from "./block.json";

registerBlockType( meta.name, {
  attributes,
  edit,
  save:  function() {
    return <InnerBlocks.Content />
  },
} );
