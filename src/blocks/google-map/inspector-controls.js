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
							apiKey={ savedApiKey }
							value={ styleSlug }
							options={ styles }
							onChange={ newStyleSlug => {
								const mapStyles = styles.find( style => style.slug === newStyleSlug ).styles;
								const newStyles = this.compileStyles( mapStyles );
								const newPinColor = newStyleSlug === 'customized' ? getMapAccentColor.call( this ) : '#222222';

								setAttributes( {
									styleSlug: newStyleSlug,
									styleData: newStyles,
									pinColor: newPinColor,
								} );
							} }
						/>
					</ControlsTab>
					<ControlsTab label={ __( 'Settings' ) }>
						<ToggleControl
							label={ __( 'Show Nearby Venues', '__plugin_txtd' ) }
							checked={ showIcons }
							onChange={ () => setAttributes( { showIcons: ! showIcons } ) }
						/>
						<ToggleControl
							label={ __( 'Show Labels', '__plugin_txtd' ) }
							checked={ showLabels }
							onChange={ () => setAttributes( { showLabels: ! showLabels } ) }
						/>
						<ToggleControl
							label={ __( 'Show Controls', '__plugin_txtd' ) }
							checked={ showControls }
							onChange={ () => setAttributes( { showControls: ! showControls } ) }
						/>
						<RangeControl
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
						<ApiKeyPanelBody { ...this.props } />
					</ControlsTab>
				</ControlsSection>
			</Fragment>
		)
	}
}

export default ButtonInspectorControls;
