export const compileStyles = function( styleData ) {
	const {
		attributes: {
			showLabels,
			showIcons,
		}
	} = this.props;

	const newStyles = JSON.parse( JSON.stringify( styleData ) );

	if ( ! showLabels ) {
		newStyles.unshift( {
			"elementType": "labels.text",
			"stylers": [ { "visibility": "off" } ]
		} )
	}

	if ( ! showIcons ) {
		newStyles.unshift( {
			"elementType": "labels.icon",
			"stylers": [ { "visibility": "off" } ]
		} )
	}

	return newStyles;
}

export const getMarkersCenter = function( markers ) {

	if ( markers.length === 1 ) {
		return markers[0].geometry.location;
	}

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

	const center = bounds.getCenter();

	return {
		lat: center.lat(),
		lng: center.lng()
	};
}
