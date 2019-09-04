import ReactDOMServer from "react-dom/server";
import pin from "./pin";
import { getCenterFromMarkers } from "./utils";
import { parallaxInit } from "../../utils";

(function( $, window, undefined ) {

	$( '.js-novablocks-google-map' ).each( function( i, obj ) {

		var $obj = $( obj ),
			markers = $obj.data( 'markers' ),
			styles = $obj.data( 'styles' ),
			zoom = $obj.data( 'zoom' ),
			hideControls = ! $obj.data( 'controls' ),
			pinColor = $obj.data( 'pin-color' ),
			mapOptions = {
				mapTypeId: 'roadmap',
				center: getCenterFromMarkers( markers ),
				zoom: zoom,
				styles: styles,
				disableDefaultUI: hideControls,
				clickableIcons: false,
				keyboardShortcuts: false,
			},
			map = new google.maps.Map( obj, mapOptions );

		var pinMarkup = ReactDOMServer.renderToStaticMarkup( pin ).replace( /%ACCENT_COLOR%/g, pinColor );

		markers.forEach( markerString => {
			const marker = JSON.parse( markerString );

			new google.maps.Marker( {
				map: map,
				icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( pinMarkup ) },
				title: marker.title,
				position: marker.geometry.location,
			} );
		} );

	} );

	parallaxInit( 'novablocks-map' );

})( jQuery, window );
