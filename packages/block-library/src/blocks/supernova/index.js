/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';

import edit from './edit';
import variations from './variations';
import iconSvg from './super-nova-block.svg';

import attributes from './attributes';

import './copy-attributes-to-inner-blocks';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";

registerBlockType( 'novablocks/supernova', {
  apiVersion: 2,
  title: __( 'Super Nova', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
//  attributes,
  supports: {
    html: false,
    novaBlocks: {
      cardElementsStacking: {
        attributes: true,
        controls: true,
      },
      collectionLayout: {
        attributes: true,
        controls: true,
      },
      colorSignal: true,
      contentPositionMatrixToolbar: true,
      elementsVisibility: true,
      latestPosts: true,
      mediaComposition: {
        attributes: true,
        controls: true,
      },
      overlayFilter: {
        attributes: true,
        controls: true,
        duotone: true
      },
//      scrollingEffect: {
//        attributes: true,
//        controls: true,
//      },
      shapeModeling: {
        attributes: true,
        controls: true,
      },
      spaceAndSizing: {
        attributes: true,
        controls: true,
      },
      noDataAlign: true
    },
    color: {
      __experimentalDuotone: 'img',
      text: false,
      background: false
    }
  },
  edit,
  save: function() {
    return <InnerBlocks.Content />
  },
  variations,
} );
