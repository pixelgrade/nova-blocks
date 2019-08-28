const { __ } = wp.i18n;

const {
	Fragment,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	ToggleControl,
	TextControl,
} = wp.components;

const FoodMenuItemInspectorControls = function( props ) {
	const {
		attributes: {
			enableFeaturedFoodItem,
			isFeatured,
			enableSalePrice,
			salePrice
		},
		setAttributes,
	} = props;

	return (
		<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Menu Item', '__plugin_txtd' ) } initialOpen={ true }>

					<ToggleControl
						label = { __( 'Featured', '__plugin_txtd' ) }
						checked = { enableFeaturedFoodItem }
						onChange = { () => setAttributes( { enableFeaturedFoodItem: ! enableFeaturedFoodItem } ) }
					/>

						{ !! enableFeaturedFoodItem &&
						  <TextControl
							  label="Label"
							  placeholder={ __( 'Chef selection' ) }
							  help="Short description"
							  value={ isFeatured }
							  onChange = { ( featured ) => setAttributes( { isFeatured: featured } ) }
						  />
						}

					<ToggleControl
						label = { __( 'Sale Price', '__plugin_txtd') }
						checked = { enableSalePrice }
						onChange = { () => setAttributes( { enableSalePrice: ! enableSalePrice } ) }
					/>

						{ !! enableSalePrice &&
						  <TextControl
							label={ __( 'Price' ) }
						    placeholder={ __( '$2.00' ) }
							value={ salePrice }
							onChange = { ( price ) => setAttributes({ salePrice: price } ) }
							/>

						}

					</PanelBody>
				</InspectorControls>
		</Fragment>
	)
};

export default FoodMenuItemInspectorControls;
