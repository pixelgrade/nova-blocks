import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";
import { RangeControl } from '@wordpress/components';

import { clamp } from "@novablocks/utils";

import { ControlsGroup } from "../../../../components";

const BreakingTheGridControls = ( props ) => {

  const {
    attributes,
  } = props;

  const {
    featuresize,
    featureposition,
    fragmentation,
    hierarchycrossing,
  } = attributes;

  const getMinFeatureSize = useCallback( () => 1, [] );
  const getMaxFeatureSize = useCallback( () => attributes.gridcolumns, [ attributes ] );
  const getMinFeaturePosition = useCallback( () => 1, [] );
  const getMaxFeaturePosition = useCallback( () => attributes.gridcolumns - attributes.featuresize + 1, [ attributes ] );
  const getMinColumnsFragmentation = useCallback( () => 0, [] );
  const getMaxColumnsFragmentation = useCallback( () => {
    return Math.max( 0, Math.pow( 2, attributes.gridcolumns - attributes.featuresize - 1 ) - 1 );
  }, [ attributes ] );

  const normalizeAttributes = useCallback( newAttributes => {
    const atts = Object.assign( {}, attributes, newAttributes );

    atts.featuresize = clamp( atts.featuresize, getMinFeatureSize(), getMaxFeatureSize() );
    atts.featureposition = clamp( atts.featureposition, getMinFeaturePosition(), getMaxFeaturePosition() );
    atts.fragmentation = clamp( atts.fragmentation, getMinColumnsFragmentation(), getMaxColumnsFragmentation() );

    return atts;
  }, [ attributes ] );

  const setAttributes = useCallback( newAttributes => {
    props.setAttributes( normalizeAttributes( newAttributes ) );
  }, [ normalizeAttributes ] );

  return (
    <ControlsGroup title={ __( 'Breaking the Grid', '__plugin_txtd' ) }>
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
};

export default BreakingTheGridControls;
