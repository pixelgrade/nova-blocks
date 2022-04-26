import classnames from 'classnames';

import { Component, useCallback, useMemo, useState } from '@wordpress/element';

import { compileStyles, getCenterFromMarkers, getMarkersCenter } from "./utils";
import defaultMapCenter from './default-map-center';

const MapStyleSelect = props => {
  const { attributes, apiKey, options, selected } = props;
  const { markers, zoom } = attributes;
  const onChange = typeof props.onChange === "function" ? props.onChange : () => {};
  const center = useMemo( () => {
    if ( Array.isArray( markers ) && markers.length ) {
      return getCenterFromMarkers( markers );
    }
    return new google.maps.LatLng( defaultMapCenter );
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
  }, [] );

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

const ImageSelectControl = props => {
  const [ active, setActive ] = useState( selected );
  const { options, selected } = props;
  const onChange = typeof props.onChange === "function" ? props.onChange : () => {};

  return (
    <div className="components-base-control components-image-select-control">
      { options.map( option => {
        return (
          <div
            key={ option.slug }
            role={ "button" }
            aria-label={ option.label }
            onClick={ () => {
              setActive( option.slug );
              onChange( option.slug );
            } }
            className={ classnames(
              'components-image-select-control__option',
              { 'components-image-select-control__option--selected': option.slug === selected }
            ) }>
            <div className="components-image-select-control__image">
              <img src={ option.src } alt={ option.label } />
            </div>
            <div className="components-image-select-control__label">{ option.label }</div>
          </div>
        )
      } ) }
    </div>
  )
}

export default MapStyleSelect;
