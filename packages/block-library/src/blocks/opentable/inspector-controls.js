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

			<ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
				<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
					<TextControl
						key={ 'opentable-restaurant-id-controls' }
						label={ __( 'Restaurant ID', '__plugin_txtd' ) }
						placeholder={ __( '1', '__plugin_txtd' ) }
						help={ __( 'You can find your restaurant ID on the OpenTable website.', '__plugin_txtd' ) }
						type="number"
						value={ restaurantId }
						onChange={ ( restaurantId ) => setAttributes( { restaurantId: restaurantId } ) }
					/>
					<SelectControl
						key={ 'opentable-language-controls' }
						label={ __( 'Language', '__plugin_txtd' ) }
						value={ language }
						options={ [
							{ label: __( 'English-EN', '__plugin_txtd'), value: 'en-US' },
							{ label: __( 'French-CA', '__plugin_txtd' ), value: 'fr-CA' },
							{ label: __( 'Deutsch-DE', '__plugin_txtd' ), value: 'de-DE' },
							{ label: __( 'Spanish-MX', '__plugin_txtd' ), value: 'es-MX' },
							{ label: __( 'Japanese-JP', '__plugin_txtd' ), value: 'ja-JP' },
							{ label: __( 'Dutch-NL', '__plugin_txtd' ), value: 'nl-NL' },
							{ label: __( 'Italian-IT', '__plugin_txtd' ), value: 'it-IT' },
						] }
						onChange={ ( nextLanguage ) => setAttributes( { language: nextLanguage } ) }
					/>
				</ControlsTab>
			</ControlsSection>

			<ControlsSection id={ 'layout' } label={ __( 'Layout', '__plugin_txtd' ) }>
				<ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
					<RadioControl
						key={ 'opentable-layout-controls' }
						label={ __( 'Layout', '__plugin_txtd' ) }
						value={ layoutForm }
						selected={ layoutForm }
						options={ [
							{ label: __( 'Horizontal', '__plugin_txtd' ), value: 'wide' },
							{ label: __( 'Vertical', '__plugin_txtd' ), value: 'standard' },
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
