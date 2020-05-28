import toggles from "./toggles";
import { ToggleGroup } from "../";

const CardsManagerPanel = ( props ) => {

	const {
		label,
		onChange,
		attributes,
	} = props;

	return (
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
	);
}

export default CardsManagerPanel;
