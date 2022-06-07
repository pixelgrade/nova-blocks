import domReady from "@wordpress/dom-ready";

import { getAttributes } from "@novablocks/utils";

import {
  addVisibilityToStyles,
  createHtmlMapMarker,
  fitMapBoundsToMarkers,
  getCenterFromMarkers,
  getCompiledStyles,
  getMarkerLatLng,
  getMarkerMarkup,
  getMarkersBounds,
  pin,
  styles
} from "./utils";

export const REFERENCES = {};

domReady( () => {

  if ( !window?.google?.maps ) {
    return;
  }

  const DarkMode = window?.sm?.darkMode?.default;
  const mapsElements = Array.from( document.querySelectorAll( '.js-novablocks-google-map' ) );

  mapsElements.forEach( ( mapElement, index ) => {
    const attributes = getAttributes( mapElement );
    const { accentColor, showControls, markers, zoom } = attributes;
    const refId = `google-map-${ index }`;

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
    const mapMarkers = createMapMarkers( markers, map, attributes, accentColor );

    google.maps.event.addListenerOnce( map, 'idle', function() {
      const mapBounds = map.getBounds();
      const mapMarkersContained = mapMarkers.every( mapMarker => mapBounds.contains( mapMarker.latlng ) );

      if ( ! mapMarkersContained ) {
        fitMapBoundsToMarkers( map, mapMarkers );
      }
    } );

    mapElement.dataset.refId = refId;

    REFERENCES[ refId ] = {
      map: map,
      mapMarkers: mapMarkers
    }

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
          const refId = mapElement.dataset.refId;

          map.setOptions( { styles: getCompiledStyles( attributes, new_value ) } );

          mapMarkers.forEach( mapMarker => {
            mapMarker.remove();
            mapMarker.setMap( null );
          } );

          REFERENCES[ refId ].mapMarkers = createMapMarkers( markers, map, attributes, new_value );
        } );
      } );
    } );
  }
} );

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
