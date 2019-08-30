import ReactDOMServer from 'react-dom/server';
import styles from './styles';
import pin from './pin';
import { compileStyles, getMarkersCenter } from './utils';
import defaultMapCenter from './default-map-center';

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

		this.markers = [];
		this.searchBox = null;
		this.map = null;
	}

	clearMarkers() {
		this.markers.forEach( marker => {
			marker.setMap( null );
		} );

		this.markers = [];
	}

	onPlacesChanged() {

		if ( ! this.searchBox ) {
			return;
		}

		const places = this.searchBox.getPlaces();

		if ( places.length == 0 ) {
			return;
		}

		this.clearMarkers();
		this.createMarkersForPlaces( places );
		this.props.onChange( places );
	}

	createMarkersForPlaces( places ) {

		places.forEach( marker => {

			if ( ! marker.geometry ) {
				return;
			}

			this.markers.push( new google.maps.Marker( {
				map: this.map,
				icon: {
					url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent( ReactDOMServer.renderToStaticMarkup(pin) )
				},
				title: marker.name,
				position: marker.geometry.location
			} ) );
		} );


		const markersCenter = getMarkersCenter( places );
		this.map.setCenter( getMarkersCenter( places ) );
	}

	initializeMap() {
		const {
			attributes: {
				zoom,
				markers,
				showControls,
				styleData,
			}
		} = this.props;

		const compileTheseStyles = compileStyles.bind( this );

		this.map = new google.maps.Map( document.getElementById( `novablocks-google-map-${ this.props.clientId }` ), {
			mapTypeId: 'roadmap',
			center: defaultMapCenter,
			zoom: zoom,
			styles: compileTheseStyles( styleData ),

			clickableIcons: false,
			disableDefaultUI: ! showControls,
			disableDoubleClickZoom: true,
			draggable: false,
			gestureHandling: 'none',
			keyboardShortcuts: false,
			scrollwheel: false,
		} );

		if ( markers.length ) {
			const places = this.prepareMarkers( markers )
			this.createMarkersForPlaces( places );
		}
	}

	prepareMarkers( markers ) {
		return markers.map( marker => {
			const place = {};
			const { lat, lng } = marker.geometry.location;
			place.title = marker.title;
			place.geometry = {};
			place.geometry.location = new google.maps.LatLng( lat, lng );
			return place;
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

	componentDidMount() {
		if ( this.map === null ) {
			this.initializeMap();
			this.initializeSearchBox();
		}
	}

	updateMapOptions() {

		if ( this.map === null ) {
			return
		}

		const options = {};
		const { attributes } = this.props;
		const { zoom, showLabels, showControls, styleData } = attributes;

		options.zoom = zoom;
		options.disableDefaultUI = ! showControls;
		options.styles = compileStyles.call( this, styleData );

		this.map.setOptions( options );
	}

	render() {
		this.updateMapOptions();

		return (
			<div className="editor-novablocks-map">
				<div className="editor-novablocks-map__search-box">
					<Placeholder>
						<input
							type="text"
							id={ `novablocks-google-map-search-input-${ this.props.clientId }` }
							placeholder={ __( 'Enter an address to drop a pin on this map' ) }
						/>
					</Placeholder>
				</div>
				<div className="editor-novablocks-map__map-container">
					<div className="editor-novablocks-map__map" id={ `novablocks-google-map-${ this.props.clientId }` }></div>
				</div>
			</div>
	   )
	}
}

export default Map;
