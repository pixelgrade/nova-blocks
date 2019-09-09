import ReactDOMServer from 'react-dom/server';
import styles from './styles';
import pin from './pin';
import { getMapStyles, getMarkersCenter, getMapAccentColor } from './utils';
import defaultMapCenter from './default-map-center';
import { withParallaxContext } from '../../components/with-parallax';

import { useTraceUpdate } from '../../utils';

const { __ } = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	Placeholder
} = wp.components

class Map extends Component {

	constructor() {
		super( ...arguments );

		this.map = null;
		this.searchBox = null;
		this.markers = [];

		this.getMapStyles = getMapStyles.bind( this );
	}

	clearMarkers() {
		this.markers.forEach( marker => { marker.setMap( null ) } );
		this.markers = [];
	}

	onPlacesChanged() {

		if ( ! this.searchBox ) {
			return;
		}

		this.props.onChange( this.searchBox.getPlaces().map( place => {
			const keepProps = [ 'name', 'geometry' ];
			const filtered = Object.keys( place )
               .filter( key => keepProps.includes( key ) )
               .reduce( ( obj, key ) => {
                   obj[ key ] = place[ key ];
                   return obj;
               }, {} );

			return JSON.stringify( filtered );
		} ) );
	}

	createMarkers() {
		const { attributes } = this.props;
		const { markers, styleSlug } = attributes;

		const accentColor = styleSlug === 'theme' ? getMapAccentColor.call( this ) : '#222222';
		const pinMarkup = ReactDOMServer.renderToStaticMarkup( pin ).replace( '%ACCENT_COLOR%', accentColor );

		markers.forEach( markerString => {
			const marker = JSON.parse( markerString );

			if ( ! marker.geometry ) {
				return;
			}

			this.markers.push( new google.maps.Marker( {
				map: this.map,
				icon: { url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( pinMarkup ) },
				title: marker.name,
				position: marker.geometry.location
			} ) );
		} );

		if ( this.markers.length ) {
			this.map.setCenter( getMarkersCenter.call( this ) );
		}
	}



	initializeMap() {
		const { attributes } = this.props;
		const { showControls, zoom } = attributes;

		this.map = new google.maps.Map( document.getElementById( `novablocks-google-map-${ this.props.clientId }` ), {
			mapTypeId: 'roadmap',
			center: defaultMapCenter,
			zoom: zoom,
			styles: this.getMapStyles(),

			clickableIcons: false,
			disableDefaultUI: ! showControls,
			disableDoubleClickZoom: true,
			draggable: false,
			gestureHandling: 'none',
			keyboardShortcuts: false,
			scrollwheel: false,
		} );
	}

	initializeSearchBox() {
		// Create the search box and link it to the UI element.
		const input = document.getElementById( `novablocks-google-map-search-input-${ this.props.clientId }` );
		this.searchBox = new google.maps.places.SearchBox( input );

		// Bias the SearchBox results towards current map's viewport.
		this.map.addListener( 'bounds_changed', () => {
			this.searchBox.setBounds( this.map.getBounds() );
		} );

		// Listen for the event fired when the user selects a prediction and retrieve
		// more details for that place.
		this.searchBox.addListener( 'places_changed', this.onPlacesChanged.bind( this ) );
	}

	updateMapOptions() {

		if ( this.map === null ) {
			return
		}

		const options = {};
		const { attributes } = this.props;
		const { showControls, showLabels, zoom } = attributes;

		options.zoom = zoom;
		options.disableDefaultUI = ! showControls;
		options.styles = this.getMapStyles();

		this.map.setOptions( options );
	}

	updateMapMarkers() {
		this.clearMarkers();
		this.createMarkers();
	}

	componentDidMount() {

		if ( this.map === null ) {
			this.initializeMap();
			this.initializeSearchBox();
			this.createMarkers();
			return;
		}

		google.maps.event.trigger( this.map, 'resize' );
	}

	shouldComponentUpdate( nextProps ) {
		let shouldUpdate = false;
		Object.entries( this.props ).forEach( ( [ key, val ] ) => {
			if ( nextProps[ key ] !== val ) {
				shouldUpdate = true;
			}
		} );

		return shouldUpdate;
	}

	componentDidUpdate( prevProps, prevState ) {
		this.updateMapOptions();

		if ( prevProps.attributes.markers !== this.props.attributes.markers ||
		     prevProps.attributes.styleSlug !== this.props.attributes.styleSlug ) {
			this.updateMapMarkers();
		}
	}

	render() {
		return <div className="novablocks-map__map" id={ `novablocks-google-map-${ this.props.clientId }` }></div>;
	}
}

const MapWrapper = ( Map ) => {

	return ( props ) => {

		const { parallax, ...otherProps } = props;
		const searchBoxStyles = {};

		if ( ! props.isSelected ) {
			searchBoxStyles.display = 'none';
		}

		return (
			<div className="novablocks-map">
				<div className="novablocks-map__search-box">
					<Placeholder style={ searchBoxStyles }>
						<input
							type="text"
							id={ `novablocks-google-map-search-input-${ props.clientId }` }
							placeholder={ __( 'Enter an address to drop a pin on this map' ) }
						/>
					</Placeholder>
				</div>
				<div className="novablocks-map__map-container">
					<div className="novablocks-mask">
						<div className="novablocks-map__map-parallax" style={ parallax.style }>
							<Map { ...otherProps }></Map>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withParallaxContext( MapWrapper( Map ) );
