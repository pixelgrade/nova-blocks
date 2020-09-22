import { ControlsTab, ControlsSection } from "../../components/control-sections";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToggleControl } = wp.components;

const FoodMenuItemInspectorControls = function( props ) {
	const {
		attributes: {
			enableHighlightFoodItem,
			enableSalePrice,
			showPrices,
			showDescription
		},
		setAttributes,
	} = props;

	return (
		<ControlsSection label={__('Layout')}>
			<ControlsTab label={ __( 'Settings' ) }>
				<ToggleControl
					label={__( 'Highlight item', '__plugin_txtd' )}
					help={__( 'Use it if you want to highlight some of the menu items and make them stand out.', '__plugin_txtd' )}
					checked={enableHighlightFoodItem}
					onChange={() => setAttributes( {enableHighlightFoodItem: ! enableHighlightFoodItem} )}
				/>

				{ showPrices && <ToggleControl
					label={__( 'On sale', '__plugin_txtd' )}
					checked={enableSalePrice}
					onChange={() => setAttributes( {enableSalePrice: ! enableSalePrice} )}
				/> }
			</ControlsTab>
		</ControlsSection>
	);
};

export default FoodMenuItemInspectorControls;
