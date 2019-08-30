import MapPlaceholder from './placeholder';
import Map from './map';
import InspectorControls from './inspector-controls';

import withSettings from '../../components/with-settings';

const { __ } = wp.i18n;

const API_KEY_SETTING_ID = 'novablocks_google_maps_api_key';

const {
	Component,
	Fragment,
} = wp.element;

const {
	Spinner,
	TextControl,
} = wp.components;

const {
	BlockAlignmentToolbar,
	BlockControls,
} = wp.blockEditor;

const {
	Settings
} = wp.api.models;

class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			fetchedScript: false,
			fetchedApiKey: false,
			savedApiKey: '',
			apiKey: '',
		}

		this.settings = new Settings();
	}

	componentDidMount() {

		this.settings.on( `change:${ API_KEY_SETTING_ID }`, model => {
			const apiKey = model.get( API_KEY_SETTING_ID );

			this.setState( {
				fetchedApiKey: true,
				savedApiKey: apiKey,
				apiKey,
			} );

			if ( apiKey !== '' ) {
				this.loadGoogleMapsScript();
			}
		} );

		this.settings.fetch();
	}

	loadGoogleMapsScript() {
		const { savedApiKey } = this.state;
		const keyParam = savedApiKey !== '' ? `key=${savedApiKey}&` : '';
		const scriptSrc = `//maps.googleapis.com/maps/api/js?${keyParam}libraries=places`;
		const scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]' );

		if ( scripts.length ) {
			this.setState( { fetchedScript: true } );
			return Promise.resolve();
		}

		const promise = new Promise( ( resolve, reject ) => {
			const script = document.createElement( 'script' );
			script.onload = resolve;
			script.onerror = reject;
			script.async = true;
			script.src = scriptSrc;
			document.body.appendChild( script );
		} );

		return promise.then( () => {
			this.setState( { fetchedScript: true } );
		} );
	}

	saveApiKey( apiKey ) {
		const key = new Settings( { [ API_KEY_SETTING_ID ]: apiKey } );
		key.save().then(() => {
			this.settings.fetch();
		});
	}

	renderPreview() {

		if ( ! this.state.fetchedApiKey ) {
			return <Spinner />
		}

		if ( ! this.state.fetchedScript || '' === this.state.savedApiKey ) {
			return <MapPlaceholder saveApiKey={ this.saveApiKey.bind( this ) } />
		}

		return (
			<Fragment>
				<Map
					{ ...this.props }
					onChange={ markers => {
						this.props.setAttributes( {
							markers: markers.map( marker => {
								return {
									title: marker.name,
									geometry: {
										location: {
											lat: marker.geometry.location.lat(),
											lng: marker.geometry.location.lng(),
										}
									}
								}
							} ) } );
					} }
				/>
			</Fragment>
		)
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { align } = attributes;

		return (
			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={ align }
						onChange={ align => setAttributes( { align } ) }
						controls={ [ 'center', 'full' ] }
					/>
				</BlockControls>
				<InspectorControls
					{ ...this.props }
					apiKey={ this.state.apiKey }
					savedApiKey={ this.state.savedApiKey }
					onChangeApiKey={ ( apiKey ) => {
						this.setState( { apiKey } );
					} }
					onSaveApiKey={ this.saveApiKey.bind( this ) }
				/>
				{ this.renderPreview() }
			</Fragment>
       )
	}
}

export default withSettings( Edit );
