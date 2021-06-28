import { isUndefined } from "lodash";

import Controls from './controls';
import attributes from './attributes.json';

import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { select, dispatch } from "@wordpress/data";
import { Fragment } from "@wordpress/element";

function withContentPositionMatrixAttributes( block ) {

  if ( ! block?.supports?.novaBlocks?.contentPositionMatrixToolbar ) {
    return block;
  }

  return {
    ...block,
    attributes: {
      ...block.attributes,
      ...attributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-content-position-matrix-attributes', withContentPositionMatrixAttributes );

const withContentPositionMatrixControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.contentPositionMatrixToolbar ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <Controls { ...props } />
        <OriginalComponent { ...props } />
      </Fragment>
    )
  };
} );
addFilter( 'editor.BlockEdit', 'novablocks/wwith-content-position-matrix-controls', withContentPositionMatrixControls );

const withInnerBlocksContentPosition = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = select( 'core/blocks' ).getBlockType( props.name ).supports;

    if ( ! supports?.novaBlocks?.contentPositionMatrixToolbar ) {
      return <OriginalComponent { ...props } />
    }

    const { clientId, attributes } = props;
    const { contentPosition } = attributes;
    const { getBlock } = select( 'core/block-editor' );

    const alignment = contentPosition.split( " " );
    const horizontalAlignment = alignment[1] || 'center';

    const { updateBlockAttributes } = dispatch( 'core/block-editor' );
    const block = getBlock( clientId );

    block.innerBlocks.forEach( block => {
      updateBlockAttributes( block.clientId, {
        align: horizontalAlignment
      } );
    } );

    return <OriginalComponent { ...props } />
  };
}, 'withInnerBlocksContentPosition' );
addFilter( 'editor.BlockListBlock', 'novablocks/with-content-position-matrix-inner-blocks', withInnerBlocksContentPosition );

const withContentPositionMatrixDeprecated = ( settings, name ) => {

  if ( ! settings?.supports?.novaBlocks?.contentPositionMatrixToolbar ) {
    return settings;
  }

  return Object.assign( {}, settings, {
    deprecated: [ {
      attributes: {
        horizontalAlignment: {
          type: "string",
          default: "center"
        },
        verticalAlignment: {
          type: "string",
          default: "center"
        }
      },
      migrate( oldAttributes, innerBlocks ) {
        const { horizontalAlignment, verticalAlignment, ...attributes } = oldAttributes;

        return {
          ...attributes,
          contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
        };
      },
      isEligible( attributes, innerBlocks ) {
        return ! isUndefined( attributes.horizontalAlignment ) || ! isUndefined( attributes.verticalAlignment );
      },
      save: settings.save
    } ].concat( settings.deprecated ),
  } );
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-content-position-matrix-deprecated', withContentPositionMatrixDeprecated );
