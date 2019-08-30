/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, TextControl} = wp.components;

const OpenTableInspectorControls = function( props ) {
	const {
		attributes: {
			restaurantId
		},
		setAttributes,
	} = props;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={__( 'Settings', '__plugin_txtd' )} initialOpen={true}>

					<TextControl
						label="Restaurant ID"
						placeholder={__( '895621' )}
						help="Restaurant Id"
						type="number"
						value={restaurantId}
						onChange={( restaurantId ) => setAttributes( {restaurantId: restaurantId} )}
					/>

				</PanelBody>
			</InspectorControls>
		</Fragment>
	)
};

export default OpenTableInspectorControls;
