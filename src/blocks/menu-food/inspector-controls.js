import { ControlsTab, ControlsSection } from "../../components/control-sections";

const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;

const FoodMenuInspectorControls = function( props ) {
	const {
		attributes: {
			enableTwoColumns,
			showPrices,
			showDescription
		},
		setAttributes,
	} = props;

	return (
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleControl
					label={__( '2 columns', '__plugin_txtd' )}
					checked={enableTwoColumns}
					onChange={() => setAttributes( {enableTwoColumns: !enableTwoColumns} )}
				/>

				<ToggleControl
					label={__( 'Price', '__plugin_txtd' )}
					checked={showPrices}
					onChange={() => setAttributes( {showPrices: !showPrices} )}
				/>

				<ToggleControl
					label={__( 'Description', '__plugin_txtd' )}
					checked={showDescription}
					onChange={() => setAttributes( {showDescription: !showDescription} )}
				/>
			</ControlsTab>
		</ControlsSection>
	);
};

export default FoodMenuInspectorControls;
