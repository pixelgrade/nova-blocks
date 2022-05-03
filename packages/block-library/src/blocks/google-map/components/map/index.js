import { __ } from '@wordpress/i18n';
import { Component, useCallback, useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { Placeholder } from '@wordpress/components';

import { useDidUpdateEffect, useSettings } from '@novablocks/block-editor';

import { MarkersList } from "../index";

import {
  addVisibilityToStyles,
  createHtmlMapMarker,
  getMarkerLatLng,
  getMarkerMarkup,
  getCenterFromMarkers,
  getMarkersCenter,
  getMapAccentColor,
  pin,
  styles,
  DEFAULT_MAP_CENTER,
  DEFAULT_PIN_COLOR
} from '../../utils';

const Map = ( props ) => {
  const { attributes, setAttributes, isSelected, clientId } = props;
  const { markers, styleData, styleSlug, showControls, showMarkerLabels, showLabels, showIcons, zoom } = attributes;
  const settings = useSettings();
  const accentColor = useMemo( () => settings?.map?.accentColor ?? DEFAULT_PIN_COLOR, [ settings ] );
  const pinColor = useMemo( () => styleSlug === 'customized' ? accentColor : DEFAULT_PIN_COLOR, [ styleSlug ] );
  const pinMarkup = useMemo( () => pin.replace( '%ACCENT_COLOR%', pinColor ), [ pinColor ] );
  const [ mapLoaded, setMapLoaded ] = useState( false );

  const mapMarkers = useRef( [] );
  const searchInputRef = useRef( null );
  const mapContainerRef = useRef( null );
  const map = useRef( null );
  const searchBox = useRef( null );

  // initialize map
  useEffect( () => {
    const newMap = new google.maps.Map( mapContainerRef.current, {
      mapTypeId: 'roadmap',
      center: DEFAULT_MAP_CENTER,
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

    setMapLoaded( true );
  }, [] );

  // initialize searchBox
  useEffect( () => {
    // Create the search box and link it to the UI element.
    searchBox.current = new google.maps.places.SearchBox( searchInputRef.current );

    // Bias the SearchBox results towards current map's viewport.
    map.current.addListener( 'bounds_changed', () => {
      searchBox.current.setBounds( map.current.getBounds() );
    } );

  }, [ onPlacesChanged ] );

  const onPlacesChanged = useCallback( () => {
    const places = searchBox.current.getPlaces();
    const keepProps = [ 'name', 'geometry' ];

    const newMarkers = places.map( place => {
      return Object.keys( place )
                   .filter( key => keepProps.includes( key ) )
                   .reduce( ( obj, key ) => {
                     obj[ key ] = place[ key ];
                     return obj;
                   }, {} );
    } );

    setAttributes( { markers: [ ...markers, ...newMarkers ] } );
  }, [ markers ] );

  const fitBounds = useCallback( () => {

    if ( mapMarkers.current.length < 1 ) {
      return;
    }

    if ( mapMarkers.current.length === 1 ) {
      map.current.setCenter( mapMarkers.current[0].latlng );
      return;
    }

    var bounds = new google.maps.LatLngBounds();
    mapMarkers.current.forEach( marker => {
      bounds.extend( marker.latlng );
    } )

    map.current.fitBounds( bounds, { top: 75 } );
    setAttributes( { zoom: map.current.getZoom() } );
  }, [] );

  useEffect( () => {
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    const listener = searchBox.current.addListener( 'places_changed', onPlacesChanged );

    return () => {
      google.maps.event.removeListener( listener );
    }
  }, [ onPlacesChanged ] );

  useEffect( () => {

    mapMarkers.current.forEach( marker => {
      marker.remove();
      marker.setMap( null );
    } );
    mapMarkers.current = [];

    markers.forEach( marker => {

      if ( ! marker.geometry ) {
        return;
      }

      const latlng = getMarkerLatLng( marker );
      const html = getMarkerMarkup( marker, { showMarkerLabels, styleSlug }, accentColor );
      const htmlMarker = createHtmlMapMarker( latlng, html );

      htmlMarker.setMap( map.current );

      mapMarkers.current.push( htmlMarker );

    } );

    if ( map.current ) {
      fitBounds();
    }
  }, [ showMarkerLabels, markers, accentColor, mapLoaded ] );

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
