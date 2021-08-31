import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";

import { RangeControl } from '@wordpress/components';

import { ControlsGroup } from "../../../../components";

const BreakingTheGridControls = ( props ) => {

  const {
    attributes,
    setAttributes,
  } = props;

  const {
    featuresize,
    featureposition,
    fragmentation,
    hierarchycrossing,
  } = attributes;

  const getMinFeatureSize = useCallback( atts => 1, [] );
  const getMaxFeatureSize = useCallback( atts => atts.gridcolumns, [ atts ] );
  const getMinFeaturePosition = useCallback( atts => 1, [] );
  const getMaxFeaturePosition = useCallback( atts => atts.gridcolumns - atts.featuresize + 1, [ atts ] );
  const getMinColumnsFragmentation = useCallback( attributes => 0, [] );
  const getMaxColumnsFragmentation = useCallback( attributes => {
    return Math.max( 0, Math.pow( 2, attributes.gridcolumns - attributes.featuresize - 1 ) - 1 );
  }, [ attributes ] );

  return (
    <ControlsGroup title={ __( 'Breaking the Grid' ) }>
      <RangeControl
        label={ __( `Featured Area Size`, '__plugin_txtd' ) }
        value={ featuresize }
        onChange={ featuresize => {
          if ( typeof featuresize !== "undefined" ) {
            setAttributes( { featuresize } );
          }
        } }
        min={ getMinFeatureSize( attributes ) }
        max={ getMaxFeatureSize( attributes ) }
      />
      <RangeControl
        label={ __( `Featured Area Position`, '__plugin_txtd' ) }
        value={ featureposition }
        onChange={ featureposition => {
          if ( typeof featureposition !== "undefined" ) {
            setAttributes( { featureposition } );
          }
        } }
        min={ getMinFeaturePosition( attributes ) }
        max={ getMaxFeaturePosition( attributes ) }
      />
      <RangeControl
        label={ __( `Grid Areas Fragmentation`, '__plugin_txtd' ) }
        value={ fragmentation }
        onChange={ fragmentation => {
          if ( typeof fragmentation !== "undefined" ) {
            setAttributes( { fragmentation } );
          }
        } }
        min={ getMinColumnsFragmentation( attributes ) }
        max={ getMaxColumnsFragmentation( attributes ) }
      />
      <RangeControl
        label={ __( `Grid Areas Crossing`, '__plugin_txtd' ) }
        value={ hierarchycrossing }
        onChange={ hierarchycrossing => {
          if ( typeof hierarchycrossing !== "undefined" ) {
            setAttributes( { hierarchycrossing } );
          }
        } }
        min={ 0 }
        max={ 200 }
      />
    </ControlsGroup>
  )
}

export default BreakingTheGridControls;
