import {
	ControlsTab,
	ControlsSection
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';

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
		<ControlsSection id={ 'layout' } label={ __( 'Layout', '__plugin_txtd' ) }>
			<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
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
