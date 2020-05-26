import {ControlsSection, ControlsTab} from "../../components/control-sections";

/**
 * WordPress dependencies
 */
const {__} = wp.i18n;
const {Fragment} = wp.element;
const {InspectorControls} = wp.blockEditor;
const {PanelBody, TextControl, ToggleControl, RadioControl, SelectControl} = wp.components;

const OpenTableInspectorControls = function( props ) {
	const {
		attributes: {
			restaurantId,
			language,
			layoutForm,
			showOpenTableLogo
		},
		setAttributes,
	} = props;

	return (
		<Fragment>

			<ControlsSection label={ __( 'Setup' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<TextControl
						label="Restaurant ID"
						placeholder={__( '1' )}
						help="You can find your restaurant ID on the OpenTable website."
						type="number"
						value={restaurantId}
						onChange={( restaurantId ) => setAttributes( {restaurantId: restaurantId} )}
					/>
					<SelectControl
						label="Language"
						value={ language }
						options={ [
							{ label: 'English-EN', value: 'en-US' },
							{ label: 'Français-CA', value: 'fr-CA' },
							{ label: 'Deutsch-DE', value: 'de-DE' },
							{ label: 'Español-MX', value: 'es-MX' },
							{ label: '日本語-JP', value: 'ja-JP' },
							{ label: 'Nederlands-NL', value: 'nl-NL' },
							{ label: 'Italiano-IT', value: 'it-IT' },
						] }
						onChange={ ( nextLanguage ) => setAttributes( { language: nextLanguage } ) }
					/>
				</ControlsTab>
			</ControlsSection>

			<ControlsSection label={ __( 'Layout' ) }>
				<ControlsTab label={ __( 'Customize' ) }>
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
					<ToggleControl
						label={__( 'Show OpenTable Logo', '__plugin_txtd' )}
						checked={showOpenTableLogo}
						onChange={() => setAttributes( {showOpenTableLogo: ! showOpenTableLogo} )}
					/>
				</ControlsTab>
			</ControlsSection>

		</Fragment>
	)
};

export default OpenTableInspectorControls;
