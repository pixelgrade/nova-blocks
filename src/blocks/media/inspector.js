import {
	AlignmentControls
} from "../../components/alignment-controls";

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
							options = { [
								{ label: __( 'Basic', '__plugin_txtd' ), value: 'basic' },
								{ label: __( 'Moderate', '__plugin_txtd' ), value: 'moderate' },
								{ label: __( 'Highlighted', '__plugin_txtd' ), value: 'highlighted' }
							] }
							onChange = { contentStyle => setAttributes( { contentStyle } ) }
						/>

						<AlignmentControls { ...this.props } />
					</PanelBody>


					<PanelBody title={ __( 'Block Area', '__plugin_txtd' ) } initialOpen = { true }>
						<RadioControl
							label = { __( 'Emphasis Level', '__plugin_txtd' ) }
							value = { blockStyle }
							selected = { blockStyle }
							options = { [
								{ label: __( 'Basic', '__plugin_txtd' ), value: 'basic' },
								{ label: __( 'Moderate', '__plugin_txtd' ), value: 'moderate' },
								{ label: __( 'Highlighted', '__plugin_txtd' ), value: 'highlighted' }
							] }
							onChange = { blockStyle => setAttributes( { blockStyle } ) }
						/>
					</PanelBody>

				</InspectorControls>
			</Fragment>
		);
	}
}

export default Inspector;

