import ApiKeyPanelBody from './api-key-panel-body';
import MapStyleSelectControl from './map-style-select';
import { compileStyles, getMapAccentColor } from './utils';

import styles from './styles';
import {ControlsSection, ControlsTab} from "../../components/control-sections";
import {Fragment} from "react";

const { __ } = wp.i18n;

const {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} = wp.components;

const {
	Component,
} = wp.element;

const {
	InspectorControls,
} = wp.blockEditor;

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
				<ControlsSection label={ __( 'Map Design' ) }>
					<ControlsTab label={ __( 'Customize' ) }>
						<MapStyleSelectControl
							{ ...this.props }
							key={ 'google-map-style-controls' }
							apiKey={ savedApiKey }
							value={ styleSlug }
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
					<ControlsTab label={ __( 'Settings' ) }>
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
				<ControlsSection label={ __( 'Setup' ) }>
					<ControlsTab label={ __( 'Settings' ) }>
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
