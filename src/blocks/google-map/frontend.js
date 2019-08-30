import ReactDOMServer from "react-dom/server";
import pin from "./pin";

(function( $, window, undefined ) {

	function getBoundsFromMarkers( markers ) {
		// For each place, get the icon, name and location.
		var bounds = new google.maps.LatLngBounds();

		markers.forEach( marker => {
			if ( ! marker.geometry ) {
				return;
			}

			if ( marker.geometry.viewport ) {
				// Only geocodes have viewport.
				bounds.union( marker.geometry.viewport );
			} else {
				bounds.extend( marker.geometry.location );
			}
		} );

		return bounds;
	}

	$( '.js-novablocks-google-map' ).each( function( i, obj ) {

		var $obj = $( obj ),
			markers = $obj.data( 'markers' ),
			styles = $obj.data( 'styles' ),
			zoom = $obj.data( 'zoom' ),
			bounds = getBoundsFromMarkers( markers ),
			mapOptions = {
				mapTypeId: 'roadmap',
				center: bounds.getCenter(),
				zoom: zoom,
				styles: styles,

				clickableIcons: false,
				disableDefaultUI: true,
				disableDoubleClickZoom: true,
				draggable: false,
				gestureHandling: 'none',
				keyboardShortcuts: false,
				scrollwheel: false,
			},
			map = new google.maps.Map( obj, mapOptions );

		markers.forEach( marker => {
			new google.maps.Marker( {
				position: marker.geometry.location,
				title: marker.title,
				icon: {
					url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( ReactDOMServer.renderToStaticMarkup( pin ) )
				},
				map: map
			} );
		} );
	} );

})( jQuery, window );
