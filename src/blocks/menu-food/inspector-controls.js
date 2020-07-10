/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor;

const {PanelBody, ToggleControl} = wp.components;

const FoodMenuInspectorControls = function( props ) {
	const {
		attributes: {
			enableTwoColumns,
			showPrices,
			showDescription
		},
		childrenBlocks,
		innerBlocks,
		setAttributes,
	} = props;


	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__( 'Layout', '__plugin_txtd' )} initialOpen={true}>
					<ToggleControl
						label={__( '2 columns', '__plugin_txtd' )}
						checked={enableTwoColumns}
						onChange={() => setAttributes( {enableTwoColumns: ! enableTwoColumns} )}
					/>

					<ToggleControl
						label={__( 'Price', '__plugin_txtd' )}
						checked={ showPrices }
						onChange={() => setAttributes( {showPrices: ! showPrices} )}
					/>

					<ToggleControl
						label={__( 'Description', '__plugin_txtd' )}
						checked={showDescription}
						onChange={() => setAttributes( {showDescription: ! showDescription} )}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
};

export default FoodMenuInspectorControls;
