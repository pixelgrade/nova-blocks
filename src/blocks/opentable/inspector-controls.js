/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, TextControl, ToggleControl, RadioControl} = wp.components;

const OpenTableInspectorControls = function( props ) {
	const {
		attributes: {
			restaurantId,
			showOpenTableLogo,
			layoutForm
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

					<ToggleControl
						label={__( 'Show OpenTable Logo', '__plugin_txtd' )}
						checked={showOpenTableLogo}
						onChange={() => setAttributes( {showOpenTableLogo: ! showOpenTableLogo} )}
					/>

					<RadioControl
						label={ __( 'Layout', '__plugin_txtd' ) }
						value={ layoutForm }
						selected={ layoutForm }
						options={ [
							{ label: 'Horizontal', value: 'wide' },
							{ label: 'Vertical', value: 'standard' },
						] }
						onChange={ ( nextLayout ) => setAttributes( { layoutForm: nextLayout } ) }
					/>

				</PanelBody>
			</InspectorControls>
		</Fragment>
	)
};

export default OpenTableInspectorControls;
