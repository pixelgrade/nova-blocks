import {STORE_NAME} from "../../store";

const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	InspectorControls
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl
} = wp.components;

class Inspector extends Component {
	constructor ( props ) {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			setAttributes,
			settings
		} = this.props;

		const {
			contentStyle,
			blockStyle,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>

					<PanelBody title={ __( 'Content Area', '__plugin_txtd' ) } initialOpen = { true }>
						<RadioControl
							label = { __( 'Emphasis Level', '__plugin_txtd' ) }
							value = { contentStyle }
							selected = { contentStyle }
							options = { settings['content-area-options'] }
							onChange = { contentStyle => setAttributes( { contentStyle } ) }
						/>
					</PanelBody>


					<PanelBody title={ __( 'Block Area', '__plugin_txtd' ) } initialOpen = { true }>
						<RadioControl
							label = { __( 'Emphasis Level', '__plugin_txtd' ) }
							value = { blockStyle }
							selected = { blockStyle }
							options = { settings['block-area-options'] }
							onChange = { blockStyle => setAttributes( { blockStyle } ) }
						/>
					</PanelBody>

				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;

