import ApiKeyPanelBody from './api-key-panel-body';
import MapStyleSelectControl from './map-style-select';
import styles from './styles';

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
	}

	render() {

		const {
			attributes: {
				styleLabel,
				zoom,
				showLabels,
				showControls,
				showIcons,
			},
			savedApiKey,
			setAttributes,
		} = this.props;

		if ( '' === savedApiKey ) {
			return null;
		}

		return (
			<InspectorControls>
				<PanelBody title={ __( 'Map Style' ) }>
					<MapStyleSelectControl
						{ ...this.props }
						apiKey={ savedApiKey }
						value={ styleLabel }
						options={ styles }
						onChange={ styleSlug => {
							setAttributes( {
								styleLabel: styleSlug,
								styleData: styles.find( style => style.slug === styleSlug ).styles
							} );
						} }
					/>
					<ToggleControl
						label={ __( 'Show Nearby Venues', '__plugin_txtd' ) }
						checked={ showIcons }
						onChange={ () => setAttributes( { showIcons: ! showIcons } ) }
					/>
					<ToggleControl
						label={ __( 'Show Street Labels', '__plugin_txtd' ) }
						checked={ showLabels }
						onChange={ () => setAttributes( { showLabels: ! showLabels } ) }
					/>
					<ToggleControl
						label={ __( 'Show Controls', '__plugin_txtd' ) }
						checked={ showControls }
						onChange={ () => setAttributes( { showControls: ! showControls } ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Zoom Level' ) }>
					<RangeControl
						value={ zoom }
						onChange={ ( newZoom ) => setAttributes( { zoom: newZoom } ) }
						min={ 5 }
						max={ 20 }
					/>
				</PanelBody>
				<ApiKeyPanelBody { ...this.props } />
			</InspectorControls>
		)
	}
}

export default ButtonInspectorControls;
