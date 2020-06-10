import toggles from "./toggles";
import { ToggleGroup } from "../../components";
import { ControlsSection, ControlsTab } from "../control-sections";

const { __ } = wp.i18n;

const CardsManagerPanel = ( props ) => {

	const {
		label,
		onChange,
		attributes,
	} = props;

	return (
		<ControlsSection label={ label }>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleGroup
					label={ label }
					onChange={ onChange }
					toggles={ toggles.map( toggle => {
						return {
							...toggle,
							value: attributes[ toggle.attribute ]
						}
					} ) }
				/>
			</ControlsTab>
		</ControlsSection>
	);
}

export default CardsManagerPanel;
