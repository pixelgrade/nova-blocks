import domReady from "@wordpress/dom-ready";

import {
  addVisibilityToStyles,
  createHtmlMapMarker,
  getCenterFromMarkers,
  getMarkerLatLng,
  getMarkerMarkup,
  pin
} from "./utils";

domReady( () => {

  if ( !window?.google?.maps ) {
    return;
  }

  const mapsElements = Array.from( document.querySelectorAll( '.js-novablocks-google-map' ) );

  mapsElements.forEach( mapElement => {

    const {
      accentColor,
      showControls,
      styleData
    } = mapElement.dataset;

    const markers = JSON.parse( mapElement.dataset.markers );
    const zoom = parseInt( mapElement.dataset.zoom, 10 );

    const mapOptions = {
      mapTypeId: 'roadmap',
      center: getCenterFromMarkers( markers ),
      zoom: zoom,
      styles: getCompiledStyles( styleData, mapElement.dataset, accentColor ),
      disableDefaultUI: !showControls,
      clickableIcons: false,
      keyboardShortcuts: false,
    };

    const map = new google.maps.Map( mapElement, mapOptions );

    mapElement.dataset.map = map;
    mapElement.dataset.mapMarkers = createMapMarkers( markers, map, mapElement.dataset, accentColor );
  } );

  const api = window?.parent?.wp?.customize;

  if ( !!api ) {

    api( 'sm_color_primary', ( setting ) => {
      setting.bind( new_value => {

        mapElements.forEach( mapElement => {
          const { styleData, markers, map, mapMarkers } = mapElement.dataset;

          map.setOptions( { styles: getCompiledStyles( styleData, mapElement.dataset, new_value ) } );

          mapMarkers.forEach( mapMarker => {
            mapMarker.remove();
            mapMarker.setMap( null );
          } );

          mapElement.dataset.mapMarkers = createMapMarkers( markers, map, mapElement.dataset, new_value );
        } );
      } );
    } );
  }
} );

function getCompiledStyles( styleData, attributes, accentColor ) {
  const { showLabels, showIcons } = attributes;
  const stylesWithColor = addColorToStyles( styleData, accentColor );
  return addVisibilityToStyles( stylesWithColor, showLabels, showIcons );
}

function createMapMarkers( markers, map, attributes, accentColor ) {
  const { showMarkerLabels, styleSlug } = attributes;

  return markers.map( marker => {
    const latlng = getMarkerLatLng( marker );
    const html = getMarkerMarkup( marker, { showMarkerLabels, styleSlug }, accentColor );
    console.log( html );
    const htmlMarker = createHtmlMapMarker( latlng, html );
    htmlMarker.setMap( map );
    return htmlMarker;
  } );
}

function addColorToStyles( styleData, color ) {
  return JSON.parse( JSON.stringify( styleData ).replace( /%ACCENT_COLOR%/g, color ) )
}
