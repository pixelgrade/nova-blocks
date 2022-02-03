/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

import edit from './edit';
import variations from './variations';
import iconSvg from './sidecar.svg';
import { getSvg } from "@novablocks/block-editor";
import attributes from "./attributes";
import transforms from './transforms';

registerBlockType( 'novablocks/sidecar', {
  icon: getSvg( iconSvg ),
  attributes,
  edit,
  save: () => <InnerBlocks.Content />,
  transforms,
  variations,
} );
