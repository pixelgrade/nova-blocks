import { select } from '@wordpress/data';

import DEFAULT_MAP_CENTER from "./default-map-center";
import styles from "./styles";
import pin from "./pin";

export const addVisibilityToStyles = function( styles, showLabels, showIcons ) {

  if ( ! showLabels ) {
    styles.unshift( {
      "elementType": "labels.text",
      "stylers": [ { "visibility": "off" } ]
    } )
  }

  if ( ! showIcons ) {
    styles.unshift( {
      "elementType": "labels.icon",
      "stylers": [ { "visibility": "off" } ]
    } )
  }

  return styles;
};

export const compileStyles = function( styleData ) {
  const accentColor = getMapAccentColor();
  const styleDataString = JSON.stringify( styleData ).replace( /%ACCENT_COLOR%/g, accentColor );
  return JSON.parse( styleDataString );
};

export const getMapStyles = function() {
  const { attributes } = this.props;
  const { styleData, styleSlug } = attributes;
  const shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;
  const selectedStyles = styles.find( style => style.slug === styleSlug );
  const styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  const mapStyles = shouldHaveCustomStyles && styleDataBySlug || styleData;
  return compileStyles.call( this, mapStyles );
};

export const getMapAccentColor = function() {
  const novablocksSettings = select( 'novablocks' ).getSettings();

  return novablocksSettings?.map?.accentColor || '#222222';
};

export const getCenterFromMarkers = ( markers ) => {

  if ( typeof google === "undefined" || typeof google.maps === "undefined" ) {
    return DEFAULT_MAP_CENTER;
  }

  const bounds = new google.maps.LatLngBounds();

  // when there is only one marker bounds aren't accurate at great zoom levels
  if ( markers.length === 1 ) {
    const center = markers[0];
    return new google.maps.LatLng( center.geometry.location );
  }

  markers.forEach( marker => {

    if ( ! marker.geometry ) {
      return;
    }

    if ( marker.geometry.viewport ) {
      bounds.union( marker.geometry.viewport );
    } else {
      bounds.extend( marker.geometry.location );
    }
  } );

  return bounds.getCenter();
};

export const getMarkersBounds = ( makers ) => {
  const bounds = new google.maps.LatLngBounds();

  makers.forEach( marker => {
    const latlng = getMarkerLatLng( marker )
    bounds.extend( latlng );
  } );

  return bounds;
}

export const DEFAULT_PIN_COLOR = '#222222';

export const getMarkerLatLng = marker => {
  const location = JSON.parse( JSON.stringify( marker.geometry.location ) );
  return new google.maps.LatLng( location.lat, location.lng );
};

export const getMarkerMarkup = ( marker, attributes, accentColor = DEFAULT_PIN_COLOR ) => {
  const { styleSlug, showMarkerLabels } = attributes;
  const pinColor = styleSlug === 'customized' ? accentColor : DEFAULT_PIN_COLOR;
  const pinMarkup = pin.replace( '%ACCENT_COLOR%', pinColor );
  const hasLabel = showMarkerLabels && marker.name;
  const labelMarkup = hasLabel ? `<div class="novablocks-gamp__marker-label">${ marker.name }</div>` : '';

  return `
        <div class="novablocks-gmap__marker">
          ${ labelMarkup }
          <div class="novablocks-gamp__marker-icon">${ pinMarkup }</div>
        </div>`
}

export const getCompiledStyles = ( attributes, accentColor ) => {
  const { showLabels, showIcons, styleData, styleSlug } = attributes;

  const shouldHaveCustomStyles = styleSlug !== 'original' && styleData.length !== 0;
  const selectedStyles = styles.find( style => style.slug === styleSlug );
  const styleDataBySlug = selectedStyles ? selectedStyles.styles : {};
  const data = shouldHaveCustomStyles && styleDataBySlug || styleData;
  const replacedData = JSON.parse( JSON.stringify( data ).replace( /%ACCENT_COLOR%/g, accentColor ) );

  return addVisibilityToStyles( replacedData, showLabels, showIcons );
}

export {
  DEFAULT_MAP_CENTER,
  pin,
  styles,
}

export { default as createHtmlMapMarker } from './create-html-map-marker';
