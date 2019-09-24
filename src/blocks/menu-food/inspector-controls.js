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
			enableEquallyColumns
		},
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

					{ true === enableTwoColumns && <ToggleControl
					label={__( 'Equally Columns', '__plugin_txtd' )}
					checked={enableEquallyColumns}
					onChange={() => setAttributes( {enableEquallyColumns: ! enableEquallyColumns} )}
				/> }

				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
};

export default FoodMenuInspectorControls;
