import ApiKeyPanelBody from './api-key-panel-body';
import MapStyleSelectControl from './map-style-select';
import {compileStyles, getMapAccentColor} from './utils';
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

		if ( '' === savedApiKey ) {
			return null;
		}

		return (
			<InspectorControls>
				<PanelBody title={ __( 'Map Design' ) }>
					<MapStyleSelectControl
						{ ...this.props }
						apiKey={ savedApiKey }
						value={ styleSlug }
						options={ styles }
						onChange={ newStyleSlug => {
							const mapStyles = styles.find( style => style.slug === newStyleSlug ).styles;
							setAttributes( {
								styleSlug: newStyleSlug,
								styleData: this.compileStyles( mapStyles ),
								pinColor: newStyleSlug === 'theme' ? getMapAccentColor.call( this ) : '#222222',
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
