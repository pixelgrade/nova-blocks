/**
 * WordPress dependencies
 */
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
};

// We're doing this through a filter that should run last, to make sure all attributes needed for these variations
// are already added to the block's settings. Also, the filter needs to be added before the block is actually registered
addFilter( 'blocks.registerBlockType', 'novablocks/supernova/with-variations', withVariations, Number.MAX_SAFE_INTEGER );

registerBlockType( 'novablocks/supernova', {
  icon: getSvg( iconSvg ),
  attributes,
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
};

addFilter( 'editor.BlockEdit', 'novablocks/supernova/with-set-children-attributes', withSetChildrenAttributes, Number.MAX_SAFE_INTEGER );
addFilter( 'editor.BlockEdit', 'novablocks/supernova/with-focal-point-image', withFocalPointImageFromChildren, Number.MAX_SAFE_INTEGER );
