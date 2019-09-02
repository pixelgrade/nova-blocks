export const compileStyles = function( styleData ) {
	const {
		attributes: {
			showLabels,
			showIcons,
			styleLabel,
		}
	} = this.props;

	const accentColor = getMapAccentColor.call( this );
	const styleDataString = JSON.stringify( styleData ).replace( /%ACCENT_COLOR%/g, accentColor );
	const newStyles = JSON.parse( styleDataString );

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

export const getMapAccentColor = function() {
	const { settings } = this.props;
	const { colors } = settings;
	const fallbackColor = '#222222';

	if ( colors && colors.length ) {

		const primary = colors.find( color => color.slug === 'sm-color-primary' );
		const secondary = colors.find( color => color.slug === 'sm-color-secondary' );
		const tertiary = colors.find( color => color.slug === 'sm-color-tertiary' );

		if ( primary ) {
			return primary.color;
		}

		if ( secondary ) {
			return secondary.color;
		}

		if ( tertiary ) {
			return tertiary.color;
		}

		return colors[0].color;
	}

	return fallbackColor;
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
