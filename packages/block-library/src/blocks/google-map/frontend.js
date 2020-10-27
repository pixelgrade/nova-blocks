import pin from "./pin";
import { addVisibilityToStyles, getCenterFromMarkers } from "./utils";
import Doppler from "@novablocks/doppler";

(function( $, window, undefined ) {

	const $blocks = $( '.novablocks-map' );

	Doppler.init( $blocks );
	mapInit();

	function mapInit() {

		if ( typeof google === "undefined" || typeof google.maps === "undefined" ) {
			return;
		}

		$( '.js-novablocks-google-map' ).each( function( i, obj ) {

			var $obj = $( obj ),
				accentColor = $obj.data( 'accent-color' ),
				markers = $obj.data( 'markers' ),
				showLabels = $obj.data( 'show-labels' ),
				showIcons = $obj.data( 'show-icons' ),
				styles = $obj.data( 'styles' ),
				stylesWithColor = addColorToStyles( styles, accentColor ),
				zoom = $obj.data( 'zoom' ),
				hideControls = ! $obj.data( 'controls' ),
				mapOptions = {
					mapTypeId: 'roadmap',
					center: getCenterFromMarkers( markers ),
					zoom: zoom,
					styles: addVisibilityToStyles( stylesWithColor, showLabels, showIcons ),
					disableDefaultUI: hideControls,
					clickableIcons: false,
					keyboardShortcuts: false,
				},
				map = new google.maps.Map( obj, mapOptions );

			var pinMarkup = pin.replace( /%ACCENT_COLOR%/g, accentColor );
			var mapMarkers = markers.map( markerString => {
				const marker = JSON.parse( markerString );

				return new google.maps.Marker( {
					map: map,
					icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( pinMarkup ) },
					title: marker.title,
					position: marker.geometry.location,
				} );
			} );

			$obj.data( 'map', map );
			$obj.data( 'mapMarkers', mapMarkers );

		} );

		const api = window?.parent?.wp?.customize;

		if ( !! api ) {

			api( 'sm_color_primary' ).bind( new_value => {
				$( '.js-novablocks-google-map' ).each( function( i, obj ) {
					const $obj = $( obj );
					const map = $obj.data( 'map' );
					const mapMarkers = $obj.data( 'mapMarkers' );
					const styles = $obj.data( 'styles' );
					const stylesWithColor = addColorToStyles( styles, new_value );

					const showLabels = $obj.data( 'show-labels' );
					const showIcons = $obj.data( 'show-icons' );
					const pinMarkup = pin.replace( /%ACCENT_COLOR%/g, new_value );

					console.log( 'after', addVisibilityToStyles( styles, showLabels, showIcons ) );

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
		}
	}

	function addColorToStyles( styleData, color ) {
		return JSON.parse( JSON.stringify( styleData ).replace( /%ACCENT_COLOR%/g, color ) )
	}

})( jQuery, window );
