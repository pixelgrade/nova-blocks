const { __ } = wp.i18n;

const {
	Component
} = wp.element;

const {
	Button,
	Placeholder,
	TextControl,
} = wp.components;

const { ENTER } = wp.keycodes;

class MapPlaceholder extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			apiKey: this.props.apiKey
		}
	}

	handleKeyDown( keyCode ) {
		if ( keyCode === ENTER ) {
			this.props.saveApiKey( this.state.apiKey );
		}
	}

	render() {
		return (
			<Placeholder
				icon={ 'admin-site' }
				label={ __( 'Google Maps' ) }
				instructions={ __(
					'To use the Maps JavaScript API you must have an API key.'
				) }
			>
				<TextControl
					className="components-placeholder__input"
					placeholder={ __( 'Paste API key here' ) }
					onChange={ ( apiKey ) => { this.setState( { apiKey } ) } }
					onKeyDown={ ( { keyCode } ) => { this.handleKeyDown( keyCode ) } }
				/>
				<Button isLarge type="button" onClick={ () => { this.props.saveApiKey( this.state.apiKey ) } }>
					{ __( 'Set API Key' ) }
				</Button>
			</Placeholder>
		)
	}
}

export default MapPlaceholder;
