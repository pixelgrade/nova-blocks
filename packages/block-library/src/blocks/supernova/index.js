import { select } from '@wordpress/data';

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
  title: __( 'Super Nova', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
//  attributes,
  supports: {
    align: [ "wide", "full" ],
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
      mediaComposition: true,
      overlayFilter: {
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
    },
    color: {
      __experimentalDuotone: 'img',
      text: false,
      background: false
    }
  },
  edit,
  getEditWrapperProps() {
    const settings = select( 'core/block-editor' ).getSettings();
    return settings.alignWide ? { 'data-align': 'full' } : {};
  },
  save: function() {
    return <InnerBlocks.Content />
  },
  variations,
} );
