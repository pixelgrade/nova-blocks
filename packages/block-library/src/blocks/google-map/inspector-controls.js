import ApiKeyPanelBody from './api-key-panel-body';
import MapStyleSelectControl from './map-style-select';
import { compileStyles, getMapAccentColor } from './utils';

import styles from './styles';

import {
	ControlsSection,
	ControlsTab
} from "@novablocks/block-editor";

import { __ } from '@wordpress/i18n';

import {
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

import {
	Component,
	Fragment,
} from '@wordpress/element';

class ButtonInspectorControls extends Component {

	constructor() {
		super( ...arguments );

		this.compileStyles = compileStyles.bind( this );
	}

	render() {

		const {
			attributes: {
				styleSlug,
				zoom,
				showLabels,
				showControls,
				showIcons,
			},
			savedApiKey,
			setAttributes,
		} = this.props;

		if ( ! savedApiKey ) {
			return null;
		}

		return (
			<Fragment>
				<ControlsSection id={ 'map-design' } label={ __( 'Map Design', '__plugin_txtd' ) }>
					<ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
						<MapStyleSelectControl
							{ ...this.props }
							key={ 'google-map-style-controls' }
							apiKey={ savedApiKey }
							selected={ styleSlug }
							options={ styles }
							onChange={ newStyleSlug => {
								const mapStyles = styles.find( style => style.slug === newStyleSlug ).styles;
								const newPinColor = newStyleSlug === 'customized' ? getMapAccentColor.call( this ) : '#222222';

								setAttributes( {
									styleSlug: newStyleSlug,
									styleData: mapStyles,
									pinColor: newPinColor,
								} );
							} }
						/>
					</ControlsTab>
					<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
						<ToggleControl
							key={ 'google-map-show-venues-control' }
							label={ __( 'Show Nearby Venues', '__plugin_txtd' ) }
							checked={ showIcons }
							onChange={ () => setAttributes( { showIcons: ! showIcons } ) }
						/>
						<ToggleControl
							key={ 'google-map-show-labels-control' }
							label={ __( 'Show Labels', '__plugin_txtd' ) }
							checked={ showLabels }
							onChange={ () => setAttributes( { showLabels: ! showLabels } ) }
						/>
						<ToggleControl
							key={ 'google-map-show-controls' }
							label={ __( 'Show Controls', '__plugin_txtd' ) }
							checked={ showControls }
							onChange={ () => setAttributes( { showControls: ! showControls } ) }
						/>
						<RangeControl
							key={ 'google-map-zoom-controls' }
							value={ zoom }
							onChange={ ( newZoom ) => setAttributes( { zoom: newZoom } ) }
							min={ 5 }
							max={ 20 }
							label={ __( 'Zoom Level', '__plugin_txtd' ) }
						/>
					</ControlsTab>
				</ControlsSection>
				<ControlsSection id={ 'setup' } label={ __( 'Setup', '__plugin_txtd' ) }>
					<ControlsTab label={ __( 'Settings', '__plugin_txtd' ) }>
						<ApiKeyPanelBody
							key={ 'google-map-api-key-controls' }
							{ ...this.props }
						/>
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		)
	}
}

export default ButtonInspectorControls;
