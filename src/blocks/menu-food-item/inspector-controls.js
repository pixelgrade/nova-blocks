/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, ToggleControl} = wp.components;

const FoodMenuItemInspectorControls = function( props ) {
	const {
		attributes: {
			enableHighlightFoodItem,
			enableSalePrice,
			showDescription,
			showPrices
		},
		setAttributes,
	} = props;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__( 'Menu Item', '__plugin_txtd' )} initialOpen={true}>

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

				</PanelBody>
			</InspectorControls>
		</Fragment>
	)
};

export default FoodMenuItemInspectorControls;
