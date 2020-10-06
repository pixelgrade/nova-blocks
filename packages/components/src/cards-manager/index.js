import { ToggleGroup } from "../index";
import toggles from "./toggles";

const CardsManager = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	return (
		<ToggleGroup
			onChange={ setAttributes }
			toggles={ toggles.map( toggle => {
				return {
					...toggle,
					value: attributes[ toggle.attribute ]
				}
			} ) }
		/>
	)
};

export default {
	Component: CardsManager,
	toggles
};
