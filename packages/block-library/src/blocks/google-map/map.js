import { __ } from '@wordpress/i18n';
import { Component, useCallback, useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { Placeholder } from '@wordpress/components';

import { useDidUpdateEffect, useSettings } from '@novablocks/block-editor';

import {
  getCenterFromMarkers,
  getMarkersCenter,
  getMapAccentColor,
  addVisibilityToStyles
} from './utils';

import styles from './styles';
import defaultMapCenter from './default-map-center';
import pin from './pin';

const Map = ( props ) => {
  const { attributes, setAttributes, isSelected, clientId } = props;
  const { markers, styleData, styleSlug, showControls, showLabels, showIcons, zoom } = attributes;
  const settings = useSettings();
  const accentColor = useMemo( () => settings?.map?.accentColor ?? '#222222', [ settings ] );
  const pinColor = useMemo( () => styleSlug === 'customized' ? accentColor : '#222222', [ styleSlug ] );
  const pinMarkup = useMemo( () => pin.replace( '%ACCENT_COLOR%', pinColor ), [ pinColor ] );

  const mapMarkers = useRef( [] );
  const searchInputRef = useRef( null );
  const mapContainerRef = useRef( null );
  const map = useRef( null );
  const searchBox = useRef( null );

  // initialize map
  useEffect( () => {
    const newMap = new google.maps.Map( mapContainerRef.current, {
      mapTypeId: 'roadmap',
      center: defaultMapCenter,
      zoom: zoom,
      styles: mapStyles,
      clickableIcons: false,
      disableDefaultUI: ! showControls,
      disableDoubleClickZoom: true,
      draggable: false,
      gestureHandling: 'none',
      keyboardShortcuts: false,
      scrollwheel: false,
    } );

    google.maps.event.trigger( map, 'resize' );

    map.current = newMap;
  }, [] );

  // initialize searchBox
  useEffect( () => {
    // Create the search box and link it to the UI element.
    searchBox.current = new google.maps.places.SearchBox( searchInputRef.current );

    // Bias the SearchBox results towards current map's viewport.
    map.current.addListener( 'bounds_changed', () => {
      searchBox.current.setBounds( map.current.getBounds() );
    } );

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.current.addListener( 'places_changed', onPlacesChanged );
  }, [] );

  const onPlacesChanged = useCallback( () => {
    const places = searchBox.current.getPlaces();
    const keepProps = [ 'name', 'geometry' ];
    const markers = places.map( place => {
      return Object.keys( place )
                   .filter( key => keepProps.includes( key ) )
                   .reduce( ( obj, key ) => {
                     obj[ key ] = place[ key ];
                     return obj;
                   }, {} );
    } );

    setAttributes( { markers } );
  }, [] );

  useMemo( () => {
    mapMarkers.current.forEach( marker => { marker.setMap( null ) } );
    mapMarkers.current = [];

    markers.forEach( marker => {

      if ( ! marker.geometry ) {
        return;
      }

      const newMarker = new google.maps.Marker( {
        icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( pinMarkup ) },
        title: marker.name,
        position: marker.geometry.location
      } );

      newMarker.setMap( map.current );
      mapMarkers.current.push( newMarker );

    } );

    if ( map.current ) {
      map.current.setCenter( getCenterFromMarkers( markers ) );
    }
  }, [ markers, pinMarkup ] );

  const mapStyles = useMemo( () => {
    const shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;
    const selectedStyles = styles.find( style => style.slug === styleSlug );
    const styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
    const data = shouldHaveCustomStyles && styleDataBySlug || styleData;
    const replacedData = JSON.parse( JSON.stringify( data ).replace( /%ACCENT_COLOR%/g, pinColor ) );

    return addVisibilityToStyles( replacedData, showLabels, showIcons );
  }, [ styleData, showLabels, showIcons, styleSlug ] );

  useEffect( () => {
    map.current.setOptions( {
      zoom: zoom,
      disableDefaultUI: ! showControls,
      styles: mapStyles
    } );
  }, [ showControls, zoom, mapStyles ] );

  const placeholderStyles = useMemo( () => isSelected ? {} : { display: 'none' }, [ isSelected ] );

  return (
    <div className="novablocks-map">
      <div className="novablocks-map__search-box">
        <Placeholder style={ placeholderStyles }>
          <input
            type="text"
            ref={ searchInputRef }
            placeholder={ __( 'Enter an address to drop a pin on this map', '__plugin_txtd' ) }
          />
        </Placeholder>
      </div>
      <div className="novablocks-map__map-container">
        <div
          className="novablocks-map__map"
          ref={ mapContainerRef }
          style={ props?.doppler?.style }
        />
      </div>
    </div>
  )
}

export default Map;
