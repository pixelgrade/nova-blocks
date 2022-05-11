import classnames from 'classnames';

import { Component, useCallback, useMemo, useState } from '@wordpress/element';

import { ImageSelectControl } from "@novablocks/block-editor";

import { compileStyles, DEFAULT_MAP_CENTER, getCenterFromMarkers } from "../../utils";

const MapStyleSelect = props => {
  const { attributes, apiKey, options, selected } = props;
  const { markers, zoom } = attributes;
  const onChange = typeof props.onChange === "function" ? props.onChange : () => {};
  const center = useMemo( () => {
    if ( Array.isArray( markers ) && markers.length ) {
      return getCenterFromMarkers( markers );
    }
    return new google.maps.LatLng( DEFAULT_MAP_CENTER );
  }, [ markers ] );
  const getStaticStyle = useCallback( option => {
    const result = [];
    const styles = compileStyles( option.styles );

    styles.forEach( function( v, i, a ) {
      var style = '';
      if ( v.stylers ) {
        if ( v.stylers.length > 0 ) {
          style += ( v.hasOwnProperty( 'featureType' ) ? 'feature:' + v.featureType : 'feature:all' ) + '|';
          style += ( v.hasOwnProperty( 'elementType' ) ? 'element:' + v.elementType : 'element:all' ) + '|';
          v.stylers.forEach( function( val, i, a ) {
            var prop = Object.keys( val )[ 0 ];
            var propertyval = val[ prop ].toString().replace( '#', '0x' );
            style += prop + ':' + propertyval + '|';
          } );
        }
      }
      result.push( 'style=' + encodeURIComponent( style ) );
    } );
    return result.join( '&' );
  } );

  const getImageSrc = useCallback( option => {
    const latitude = center.lat();
    const longitude = center.lng();

    const style = getStaticStyle( option );
    const size = '200x200';
    const mapType = 'roadmap';
    const url = 'https://maps.googleapis.com/maps/api/staticmap';

    return `${ url }?center=${ latitude },${ longitude }&zoom=${ zoom }&size=${ size }&maptype=${ mapType }&${ style }&key=${ apiKey }`;
  }, [ center ] );

  const controlOptions = useMemo( () => {
    return options.map( option => {
      return {
        ...option,
        src: getImageSrc( option ),
      }
    } );
  }, [ options ] );


  return (
    <ImageSelectControl
      selected={ selected }
      onChange={ onChange }
      options={ controlOptions }
    />
  )
}

export default MapStyleSelect;
