import { isUndefined } from "lodash";

import Controls from './controls';
import attributes from './attributes.json';

import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { useSelect, useDispatch } from "@wordpress/data";
import { Fragment } from "@wordpress/element";
import { useSupports } from "../../hooks";

function withContentPositionMatrixAttributes( settings ) {

  if ( ! settings?.supports?.novaBlocks?.contentPositionMatrixToolbar ) {
    return settings;
  }

  return {
    ...settings,
    attributes: {
      ...settings.attributes,
      ...attributes
    }
  };
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-content-position-matrix-attributes', withContentPositionMatrixAttributes );

const withContentPositionMatrixControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

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
}, 'withContentPositionMatrixControls' );

addFilter( 'editor.BlockEdit', 'novablocks/wwith-content-position-matrix-controls', withContentPositionMatrixControls );

const withInnerBlocksContentPosition = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    const supports = useSupports( props.name );

    if ( ! supports?.novaBlocks?.contentPositionMatrixToolbar ) {
      return <OriginalComponent { ...props } />
    }

    const { clientId, attributes } = props;
    const { contentPosition } = attributes;
    const alignment = contentPosition.split( " " );
    const horizontalAlignment = alignment[1] || 'center';

    alignBlockChildren( clientId, horizontalAlignment );

    return <OriginalComponent { ...props } />
  };
}, 'withInnerBlocksContentPosition' );

const alignBlockChildren = ( clientId, horizontalAlignment ) => {
  const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
  const block = useSelect( select => select( 'core/block-editor' ).getBlock( clientId ), [ clientId ] );

  block.innerBlocks.forEach( innerBlock => {
    const block = useSelect( select => select( 'core/block-editor' ).getBlock( innerBlock.clientId ), [ innerBlock.clientId ] );
    const blockType = useSelect( select => select( 'core/blocks' ).getBlockType( block.name ), [ block.name ] );

    const supportsAlign = blockType?.supports?.align;

    if ( Array.isArray( supportsAlign ) && ( supportsAlign.indexOf( 'wide' ) > -1 || supportsAlign.indexOf( 'full' ) > -1 ) ) {
      alignBlockChildren( block.clientId, horizontalAlignment );
      return;
    }

    updateBlockAttributes( block.clientId, {
      align: horizontalAlignment,
      textAlign: horizontalAlignment,
      contentJustification: horizontalAlignment,
    } );
  } );
}

addFilter( 'editor.BlockEdit', 'novablocks/with-content-position-matrix-inner-blocks', withInnerBlocksContentPosition );

const withContentPositionMatrixDeprecated = ( settings ) => {

  if ( ! settings?.supports?.novaBlocks?.contentPositionMatrixToolbar?.deprecated ) {
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
      isEligible( attributes ) {
        return ! isUndefined( attributes.horizontalAlignment ) && ! isUndefined( attributes.verticalAlignment ) && isUndefined( attributes.contentPosition );
      },
      migrate( oldAttributes ) {
        const { horizontalAlignment, verticalAlignment, ...attributes } = oldAttributes;

        return {
          ...attributes,
          contentPosition: `${ verticalAlignment } ${ horizontalAlignment }`
        };
      },
      save: settings.save
    } ].concat( settings.deprecated ),
  } );
}
addFilter( 'blocks.registerBlockType', 'novablocks/with-content-position-matrix-deprecated', withContentPositionMatrixDeprecated );
