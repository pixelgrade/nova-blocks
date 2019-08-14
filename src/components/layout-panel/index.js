/**
 * Internal dependencies
 */
import PaddingControls from './padding';
import WidthControls from './width';
import './style.scss';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	PanelBody,
} = wp.components;

const LayoutPanel = function( props ) {
	return (
		<PanelBody
			className="pixelgrade-hero-button-group-wrapper"
			title={ __( 'Layout', '__plugin_txtd' ) }
			initialOpen={ true }>

			<PaddingControls { ...props } />
			<WidthControls { ...props } />

			{ props.children }
		</PanelBody>
	);
};

export default LayoutPanel;
