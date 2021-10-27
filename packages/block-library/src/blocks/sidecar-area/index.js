/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import edit from "./edit";

registerBlockType( 'novablocks/sidecar-area', {
  apiVersion: 2,
  title: __( 'Sidecar Area', '__plugin_txtd' ),
  category: 'nova-blocks',
  parent: [ 'novablocks/sidecar' ],
  edit,
  save: () => <InnerBlocks.Content />,
} );
