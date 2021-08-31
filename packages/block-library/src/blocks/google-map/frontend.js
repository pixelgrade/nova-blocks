import pin from "./pin";
import { addVisibilityToStyles, getCenterFromMarkers } from "./utils";

(function( $, window, undefined ) {

	mapInit();

	function mapInit() {

		if ( ! window?.google?.maps ) {
			return;
		}

    $( '.js-novablocks-google-map' ).each( function( i, obj ) {

      const $obj = $( obj );
      const accentColor = $obj.data( 'accent-color' );
      const markers = $obj.data( 'markers' );
      const showLabels = $obj.data( 'show-labels' );
      const showIcons = $obj.data( 'show-icons' );
      const styles = $obj.data( 'styles' );
      const stylesWithColor = addColorToStyles( styles, accentColor );
      const zoom = $obj.data( 'zoom' );
      const hideControls = !$obj.data( 'controls' );
      const mapOptions = {
        mapTypeId: 'roadmap',
        center: getCenterFromMarkers( markers ),
        zoom: zoom,
        styles: addVisibilityToStyles( stylesWithColor, showLabels, showIcons ),
        disableDefaultUI: hideControls,
        clickableIcons: false,
        keyboardShortcuts: false,
      };
      const map = new google.maps.Map( obj, mapOptions );

      const pinMarkup = pin.replace( /%ACCENT_COLOR%/g, accentColor );
      const mapMarkers = markers.map( markerString => {
        const marker = JSON.parse( markerString );

        return new google.maps.Marker( {
          map: map,
          icon: {url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( pinMarkup )},
          title: marker.title,
          position: marker.geometry.location,
        } );
      } );

      $obj.data( 'map', map );
      $obj.data( 'mapMarkers', mapMarkers );

    } );

		const api = window?.parent?.wp?.customize;

		if ( !! api ) {

			api( 'sm_color_primary', ( setting ) => {
			  setting.bind( new_value => {
          $( '.js-novablocks-google-map' ).each( function( i, obj ) {
            const $obj = $( obj );
            const map = $obj.data( 'map' );
            const mapMarkers = $obj.data( 'mapMarkers' );
            const styles = $obj.data( 'styles' );
            const stylesWithColor = addColorToStyles( styles, new_value );

            const showLabels = $obj.data( 'show-labels' );
            const showIcons = $obj.data( 'show-icons' );
            const pinMarkup = pin.replace( /%ACCENT_COLOR%/g, new_value );

            map.setOptions( {
              styles: addVisibilityToStyles( stylesWithColor, showLabels, showIcons ),
            } );

            mapMarkers.forEach( mapMarker => {
              mapMarker.setOptions( {
                icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( pinMarkup ) },
              } );
            } )
          } );
        } );
      } );
		}
	}

	function addColorToStyles( styleData, color ) {
		return JSON.parse( JSON.stringify( styleData ).replace( /%ACCENT_COLOR%/g, color ) )
	}

})( jQuery, window );
