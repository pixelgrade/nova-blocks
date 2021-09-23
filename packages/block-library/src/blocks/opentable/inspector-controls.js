import {
	ControlsSection,
	ControlsTab
} from "@novablocks/block-editor";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	TextControl,
	ToggleControl,
	RadioControl,
	SelectControl
} from '@wordpress/components';

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

			<ControlsSection id={ 'setup' } label={ __( 'Setup' ) }>
				<ControlsTab label={ __( 'Settings' ) }>
					<TextControl
						key={ 'opentable-restaurant-id-controls' }
						label={ __( 'Restaurant ID' ) }
						placeholder={ __( '1' ) }
						help={ __( 'You can find your restaurant ID on the OpenTable website.' ) }
						type="number"
						value={ restaurantId }
						onChange={ ( restaurantId ) => setAttributes( { restaurantId: restaurantId } ) }
					/>
					<SelectControl
						key={ 'opentable-language-controls' }
						label={ __( 'Language' ) }
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

			<ControlsSection id={ 'layout' } label={ __( 'Layout' ) }>
				<ControlsTab label={ __( 'Customize' ) }>
					<RadioControl
						key={ 'opentable-layout-controls' }
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
						key={ 'opentable-logo-controls' }
						label={ __( 'Show OpenTable Logo', '__plugin_txtd' ) }
						checked={ showOpenTableLogo }
						onChange={ () => setAttributes( { showOpenTableLogo: ! showOpenTableLogo } ) }
					/>
				</ControlsTab>
			</ControlsSection>

		</Fragment>
	)
};

export default OpenTableInspectorControls;
