import { __ } from "@wordpress/i18n";
import { RangeControl } from '@wordpress/components';

import { ControlsGroup } from "../../../../components";

import ItemsGapControls from "../items-gap-control";

const GridAnatomyControls = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    featuresize,
    featureposition,
    gridcolumns,
    gridrows,
  } = attributes;

  return (
    <ControlsGroup title={ __( 'Grid Anatomy', '__plugin_txtd' ) }>
      <RangeControl
        label={ __( `Columns`, '__plugin_txtd' ) }
        value={ gridcolumns }
        onChange={ gridcolumns => {
          if ( typeof gridcolumns !== "undefined" ) {
            const maxFeaturePosition = gridcolumns + 1 - featuresize;
            const newFeaturePosition = Math.max( 1, Math.min( maxFeaturePosition, featureposition ) );
            const newFeatureSize = Math.max( 1, gridcolumns + 1 - newFeaturePosition );
            setAttributes( {
              featuresize: newFeatureSize,
              featureposition: newFeaturePosition,
              gridcolumns
            } );
          }
        } }
        min={ 1 }
        max={ 12 }
      />
      <RangeControl
        label={ __( `Rows`, '__plugin_txtd' ) }
        value={ gridrows }
        onChange={ gridrows => {
          if ( typeof gridrows !== "undefined" ) {
            setAttributes( { gridrows } );
          }
        } }
        min={ 1 }
        max={ 12 }
      />
      <ItemsGapControls { ...props } />
    </ControlsGroup>
  )
};

export default GridAnatomyControls;
