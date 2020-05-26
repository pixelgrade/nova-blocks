const { __ } = wp.i18n;

const {
	Button,
	TextControl,
	PanelBody,
} = wp.components;

const {
	Component,
	Fragment
} = wp.element;

class ApiKeyPanelBody extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			apiKey,
			apiKeyInstructions,
			savedApiKey,
			onChangeApiKey,
			onSaveApiKey,
		} = this.props;

		if ( savedApiKey === '' ) {
			return null;
		}

		return (
			<Fragment>
				<TextControl
					placeholder={ __( 'Paste API key here', '__plugin_txtd' ) }
					value={ apiKey }
					label={ __( 'Google Maps API Key', '__plugin_txtd' ) }
					onChange={ onChangeApiKey }
					help={ apiKeyInstructions }
				/>
				<Button isDefault onClick={ () => { onSaveApiKey( apiKey ) } }>
					{ __( 'Save', '__plugin_txtd' ) }
				</Button>
			</Fragment>
		)
	}
}

export default ApiKeyPanelBody;
