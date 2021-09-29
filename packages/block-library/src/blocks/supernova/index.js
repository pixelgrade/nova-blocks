/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";
import { addFilter } from "@wordpress/hooks";

/**
 * Internal dependencies
 */
import { getSvg } from '@novablocks/block-editor';

import edit from './edit';
import variations from './variations';
import iconSvg from './supernova-block.svg';

import attributes from './attributes';

import { withSetChildrenAttributes } from "./filters";

const withVariations = settings => {

  if ( settings.name !== 'novablocks/supernova' ) {
    return settings;
  }

  return {
    ...settings,
    variations,
  }
}

// We're doing this through a filter that should run last, to make sure all attributes needed for these variations
// are already added to the block's settings. Also, the filter needs to be added before the block is actually registered
addFilter( 'blocks.registerBlockType', 'novablocks/supernova/with-variations', withVariations, Number.MAX_SAFE_INTEGER );

registerBlockType( 'novablocks/supernova', {
  apiVersion: 2,
  title: __( 'Super Nova', '__plugin_txtd' ),
  category: 'nova-blocks',
  icon: getSvg( iconSvg ),
  attributes,
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
      scrollingEffect: {
        attributes: true,
        controls: true,
        customWrapper: true,
        doppler: true
      },
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
} );

addFilter( 'editor.BlockEdit', 'novablocks/supernova/with-set-children-attributes', withSetChildrenAttributes, Number.MAX_SAFE_INTEGER );
