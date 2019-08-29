/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, ToggleControl, TextControl} = wp.components;

const FoodMenuItemInspectorControls = function( props ) {
	const {
		attributes: {
			enableHighlightFoodItem,
			highlightLabel,
			enableSalePrice,
			salePrice
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

					{! ! enableHighlightFoodItem &&
					 <TextControl
						 label="Label"
						 placeholder={__( 'Chef selection' )}
						 help="Short description"
						 value={highlightLabel}
						 onChange={( featured ) => setAttributes( {highlightLabel: featured} )}
					 />
					}

					<ToggleControl
						label={__( 'Sale Price', '__plugin_txtd' )}
						checked={enableSalePrice}
						onChange={() => setAttributes( {enableSalePrice: ! enableSalePrice} )}
					/>

					{! ! enableSalePrice &&
					 <TextControl
						 label={__( 'Price' )}
						 placeholder={__( '$2.00' )}
						 value={salePrice}
						 onChange={( price ) => setAttributes( {salePrice: price} )}
					 />

					}

				</PanelBody>
			</InspectorControls>
		</Fragment>
	)
};

export default FoodMenuItemInspectorControls;
