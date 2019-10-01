import MapPlaceholder from './placeholder';
import Map from './map';
import InspectorControls from './inspector-controls';

import withSettings from '../../components/with-settings';
import withParallax from '../../components/with-parallax';

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
	compose,
	createHigherOrderComponent,
} = wp.compose;

const {
	Settings
} = wp.api.models;

window.gm_authFailure = function() {
	// This is a GLOBAL function that, when present, gets called by the Google Maps script on authentication errors.
	window.dispatchEvent( new Event('novablock.googlemaps_authfailure') );
}

class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			fetchedScript: false,
			fetchedApiKey: false,
			savedApiKey: '',
			apiKey: '',
			gmAuthFailure: false,
		}

		this.onChangeMarkers = this.onChangeMarkers.bind( this );
		this.onGoogleMapsAuthFailure = this.onGoogleMapsAuthFailure.bind( this );
		this.settings = null;
	}

	onGoogleMapsAuthFailure(event) {
		this.setState( {
			gmAuthFailure: true,
		} );
	}

	onChangeMarkers( markers ) {
		this.props.setAttributes( { markers } );
	}

	componentDidMount() {

		window.addEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);

		wp.api.loadPromise.done( () => {
			this.settings = new wp.api.models.Settings();

			this.settings.on( `change:${ API_KEY_SETTING_ID }`, model => {
				const apiKey = model.get( API_KEY_SETTING_ID );

				this.setState( {
					fetchedApiKey: true,
					savedApiKey: apiKey,
					apiKey,
				} );

				if ( !!apiKey ) {
					this.loadGoogleMapsScript();
				}
			} );

			this.settings.fetch();
		} );
	}

	componentWillUnmount() {
		window.removeEventListener('novablock.googlemaps_authfailure', this.onGoogleMapsAuthFailure);
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
		const key = new wp.api.models.Settings( { [ API_KEY_SETTING_ID ]: apiKey } );

		key.save().then(() => {
			this.settings.fetch();
		} );
	}

	renderPreview() {

		const { fetchedApiKey, fetchedScript, savedApiKey, gmAuthFailure } = this.state;

		if ( ! fetchedApiKey ) {
			return <Spinner />
		}

		if ( ! fetchedScript || ! savedApiKey || gmAuthFailure ) {
			return <MapPlaceholder
				saveApiKey={ this.saveApiKey.bind( this ) }
				apiKey={ savedApiKey }
				apiKeyInstructions={ this.getInstructions() }
			/>
		}

		return (
			<Fragment>
				<Map
					{ ...this.props }
					onChange={ this.onChangeMarkers }
				/>
			</Fragment>
		)
	}

	getInstructions() {
		const { gmAuthFailure } = this.state;
		const url = '//developers.google.com/maps/documentation/javascript/get-api-key';
		const hyperlink = <a target="_blank" href={ url }>{ __( 'register a Google Maps API Key' ) }</a>;

		if ( gmAuthFailure ) {
			return (
				<Fragment>{ __( 'It seems that your Google Maps API key is INVALID. Please double check that you pasted it correctly and that it is a valid API key. More information about how to' ) } { hyperlink }</Fragment>
			)
		}

		return (
			<Fragment>{ __( 'To display the map, you need to' ) } { hyperlink } { __( 'and include it bellow.' ) }</Fragment>
		)
	}

	render() {
		const { fetchedApiKey, fetchedScript, savedApiKey, gmAuthFailure } = this.state;
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
				{ !!fetchedApiKey && !!fetchedScript && !!savedApiKey && !gmAuthFailure && <InspectorControls
					{ ...this.props }
					apiKey={ this.state.apiKey }
					savedApiKey={ this.state.savedApiKey }
					onChangeApiKey={ ( apiKey ) => {
						this.setState( { apiKey } );
					} }
					onSaveApiKey={ this.saveApiKey.bind( this ) }
					apiKeyInstructions={ this.getInstructions() }
				/> }
				{ this.renderPreview() }
			</Fragment>
       )
	}
}

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( Edit );
