import { ControlsSection, ControlsTab } from "../control-sections";

const { __ } = wp.i18n;

const {
	PanelBody,
	ToggleControl
} = wp.components;

function PositionIndicatorsPanel( props ) {

	const { attributes, setAttributes } = props;
	const { positionIndicators } = attributes;

	return (
		<ControlsSection label={ __( 'Indicators' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleControl
					key={ 'position-indicators' }
					label={ __( 'Enable Position Indicators', '__plugin_txtd' ) }
					checked={ positionIndicators }
					onChange={ positionIndicators => { setAttributes( { positionIndicators } ) } }
				/>
			</ControlsTab>
		</ControlsSection>
   )
}

export default PositionIndicatorsPanel;
