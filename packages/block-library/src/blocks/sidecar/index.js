/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import edit from './edit';
import variations from './variations';
import iconSvg from './sidecar.svg';
import { getSvg } from "@novablocks/block-editor";
import attributes from "./attributes";
import transforms from './transforms';

registerBlockType( 'novablocks/sidecar', {
  apiVersion: 2,
  title: __( 'Sidecar', '__plugin_txtd' ),
  description: __( 'Establish supporting sections that relates to the main content.', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
  edit,
  keywords: [
    __( 'layout', '__plugin_txtd' ),
    __( 'sidebar', '__plugin_txtd' ),
    __( 'content', '__plugin_txtd' ),
    __( 'aside', '__plugin_txtd' )
  ],
  save: () => <InnerBlocks.Content />,
  transforms,
  variations,
} );
