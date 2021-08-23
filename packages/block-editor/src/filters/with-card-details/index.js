import { Fragment } from "@wordpress/element";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import InspectorControls from './inspector-controls';
import attributes from './attributes.json';

const ALLOWED_BLOCKS = [
  'novablocks/cards-collection',
  'novablocks/posts-collection',
  'novablocks/supernova'
];


const withCardDetailsControls = createHigherOrderComponent( OriginalComponent => {

  return ( props ) => {

    if ( ! ALLOWED_BLOCKS.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <InspectorControls { ...props } />
      </Fragment>
    );
  };
}, 'withCardDetailsControls' );

addFilter( 'editor.BlockEdit', 'novablocks/with-card-details-controls', withCardDetailsControls );

const blocksWithCardDetailsAttributes = [
  'novablocks/posts-collection',
  'novablocks/cards-collection',
  'novablocks/card',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

function withCardDetailsAttributes( block ) {

  if ( ! blocksWithCardDetailsAttributes.includes( block.name ) ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/with-card-details-attributes', withCardDetailsAttributes );

