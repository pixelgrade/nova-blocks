import { __ } from '@wordpress/i18n';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { RangeControl } from '@wordpress/components';

import attributes from './attributes.json';
import { EmphasisContentAreaControls } from "../../components";

const blocksWithVisualBalanceInspectorControls = [
  'novablocks/media',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

const withEmphasisLevelControls = createHigherOrderComponent(OriginalComponent => {

  return ( props ) => {

    if ( ! blocksWithVisualBalanceInspectorControls.includes( props.name ) ) {
      return <OriginalComponent { ...props } />
    }

    const {
      attributes: {
        emphasisArea
      },
      setAttributes
    } = props;

    return (
      <Fragment>
        <OriginalComponent { ...props } />
        <EmphasisContentAreaControls>
          <RangeControl
            value={ emphasisArea }
            onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
            label={ __( 'Emphasis Area' ) }
            min={ 10 }
            max={ 100 }
            step={ 5 }
          />
        </EmphasisContentAreaControls>
      </Fragment>
    );
  };
});
addFilter( 'editor.BlockEdit', 'novablocks/with-ehphasis-level-controls', withEmphasisLevelControls );


const blocksWithVisualBalanceAttributes = [
  'novablocks/media',
  'novablocks/supernova',
  'novablocks/supernova-item',
];

function addVisualBalanceAttributes( block ) {

  if ( ! blocksWithVisualBalanceAttributes.includes( block.name ) ) {
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
addFilter( 'blocks.registerBlockType', 'novablocks/add-emphasis-level-attributes', addVisualBalanceAttributes );
