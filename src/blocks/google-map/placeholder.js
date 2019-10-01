import * as icons from "../../icons";

const { __ } = wp.i18n;

const {
	Component,
	Fragment,
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

		const { apiKeyInstructions } = this.props;
		const icon = <div className="editor-block-icon block-editor-block-icon">{ icons.map }</div>

		return (
			<Placeholder
				icon={ icon }
				label={ __( 'Location Map of The World', '__plugin_txtd' ) }>
				{ apiKeyInstructions && <div className="components-placeholder__instructions">
					{ apiKeyInstructions }
				</div> }
				<TextControl
					className="components-placeholder__input"
					placeholder={ __( 'Paste API key here', '__plugin_txtd' ) }
					value={ this.state.apiKey }
					onChange={ ( apiKey ) => { this.setState( { apiKey } ) } }
					onKeyDown={ ( { keyCode } ) => { this.handleKeyDown( keyCode ) } }
				/>
				<Button isLarge disabled={ ! this.state.apiKey } type="button" onClick={ () => { this.props.saveApiKey( this.state.apiKey ) } }>
					{ __( 'Save', '__plugin_txtd' ) }
				</Button>
			</Placeholder>
		)
	}
}

export default MapPlaceholder;
