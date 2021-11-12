/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from "@wordpress/block-editor";
import { addFilter } from "@wordpress/hooks";
import { useMemo } from "@wordpress/element";

/**
 * Internal dependencies
 */
import { getSvg, useInnerBlocks } from '@novablocks/block-editor';
import { getFocalPointImage } from "@novablocks/scrolling-effect";

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
      contentPosition: {
        attributes: true,
        controls: true
      },
      elementsVisibility: true,
      contentLoader: true,
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
        advancedSpacing: true,
      },
      customAlign: true
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

const withFocalPointImageFromChildren = ( BlockEdit ) => {

  return ( props ) => {

    const { clientId } = props;

    const innerBlocks = useInnerBlocks( clientId );

    const newProps = useMemo( () => {
      if ( innerBlocks.length ) {
        const { attributes } = innerBlocks[0];
        const { images } = attributes;

        if ( images?.length ) {
          return Object.assign( {}, props, {
            focalPointImage: getFocalPointImage( images[0] )
          } )
        }
      }

      return props;

    }, [ props ] );

    return (
      <BlockEdit { ...newProps } />
    )
  }
}

addFilter( 'editor.BlockEdit', 'novablocks/supernova/with-set-children-attributes', withSetChildrenAttributes, Number.MAX_SAFE_INTEGER );
addFilter( 'editor.BlockEdit', 'novablocks/supernova/with-focal-point-image', withFocalPointImageFromChildren, Number.MAX_SAFE_INTEGER );
