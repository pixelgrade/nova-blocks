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

class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			fetchedScript: false,
			fetchedApiKey: false,
			savedApiKey: '',
			apiKey: '',
		}

		this.onChangeMarkers = this.onChangeMarkers.bind( this );
		this.settings = null;
	}

	onChangeMarkers( markers ) {
		this.props.setAttributes( { markers } );
	}

	componentDidMount() {

		wp.api.loadPromise.done( () => {
			this.settings = new wp.api.models.Settings();

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
		} );
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

		const { fetchedApiKey, fetchedScript, savedApiKey } = this.state;

		if ( ! fetchedApiKey ) {
			return <Spinner />
		}

		if ( ! fetchedScript || ! savedApiKey ) {
			return <MapPlaceholder
				saveApiKey={ this.saveApiKey.bind( this ) }
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
		const url = '//developers.google.com/maps/documentation/javascript/get-api-key';
		const hyperlink = <a target="_blank" href={ url }>{ __( 'register a Google Maps API Key ' ) }</a>;
		const instructions = <Fragment>{ __( 'To display the map, you need to' ) } { hyperlink } { __( 'and include it in the block settings' ) }</Fragment>;

		return instructions;
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
					apiKeyInstructions={ this.getInstructions() }
				/>
				{ this.renderPreview() }
			</Fragment>
       )
	}
}

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( Edit );
