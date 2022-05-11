import domReady from "@wordpress/dom-ready";

import {
  addVisibilityToStyles,
  createHtmlMapMarker,
  getCenterFromMarkers,
  getCompiledStyles,
  getMarkerLatLng,
  getMarkerMarkup,
  getMarkersBounds,
  pin,
  styles
} from "./utils";

domReady( () => {

  if ( !window?.google?.maps ) {
    return;
  }

  const DarkMode = window?.sm?.darkMode?.default;
  const mapsElements = Array.from( document.querySelectorAll( '.js-novablocks-google-map' ) );

  mapsElements.forEach( mapElement => {
    const attributes = getAttributes( mapElement );
    const { accentColor, showControls, markers, zoom } = attributes;

    const mapOptions = {
      mapTypeId: 'roadmap',
      center: getCenterFromMarkers( markers ),
      zoom: zoom,
      styles: getCompiledStyles( attributes, accentColor ),
      disableDefaultUI: !showControls,
      clickableIcons: false,
      keyboardShortcuts: false,
    };

    const map = new google.maps.Map( mapElement, mapOptions );

    mapElement.dataset.map = map;
    mapElement.dataset.mapMarkers = createMapMarkers( markers, map, attributes, accentColor );

    if ( DarkMode && typeof DarkMode.bind === "function" ) {
      DarkMode.bind( () => {
        map.setOptions( { styles: getCompiledStyles( attributes, accentColor ) } );
      } );
    }
  } );

  const api = window?.parent?.wp?.customize;

  if ( !!api ) {

    api( 'sm_color_primary', ( setting ) => {
      setting.bind( new_value => {

        mapElements.forEach( mapElement => {
          const attributes = getAttributes( mapElement );
          const { styleData, markers, map, mapMarkers } = attributes;

          map.setOptions( { styles: getCompiledStyles( attributes, new_value ) } );

          mapMarkers.forEach( mapMarker => {
            mapMarker.remove();
            mapMarker.setMap( null );
          } );

          mapElement.dataset.mapMarkers = createMapMarkers( markers, map, attributes, new_value );
        } );
      } );
    } );
  }
} );

function getAttributes( element ) {
  const attributes = {};

  Object.keys( element.dataset ).forEach( key => {
    try {
      attributes[ key ] = JSON.parse( element.dataset[ key ] );
    } catch (e) {
      attributes[ key ] = element.dataset[ key ];
    }
  } );

  return attributes;
}

function createMapMarkers( markers, map, attributes, accentColor ) {
  const { showMarkerLabels, styleSlug } = attributes;

  return markers.map( marker => {
    const latlng = getMarkerLatLng( marker );
    const html = getMarkerMarkup( marker, { showMarkerLabels, styleSlug }, accentColor );
    const htmlMarker = createHtmlMapMarker( latlng, html );
    htmlMarker.setMap( map );
    return htmlMarker;
  } );
}

function addColorToStyles( styleData, color ) {
  return JSON.parse( JSON.stringify( styleData ).replace( /%ACCENT_COLOR%/g, color ) )
}
