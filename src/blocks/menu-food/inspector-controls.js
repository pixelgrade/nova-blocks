import { ControlsTab, ControlsSection } from "../../components/control-sections";

const { __ } = wp.i18n;
const { PanelBody, ToggleControl } = wp.components;

const FoodMenuInspectorControls = function( props ) {
	const {
		attributes: {
			enableTwoColumns
		},
		setAttributes,
	} = props;

	return (
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleControl
					label={__( '2 columns', '__plugin_txtd' ) }
					checked={ enableTwoColumns }
					onChange={ () => setAttributes( { enableTwoColumns: ! enableTwoColumns } ) }
				/>
			</ControlsTab>
		</ControlsSection>
	);
};

export default FoodMenuInspectorControls;
