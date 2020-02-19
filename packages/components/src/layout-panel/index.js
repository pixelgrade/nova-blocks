/**
 * Internal dependencies
 */
import PaddingControls from './padding';
import WidthControls from './width';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import { PanelBody } from '@wordpress/components';

const LayoutPanel = function( props ) {
	return (
		<PanelBody
			className="pixelgrade-hero-button-group-wrapper"
			title={ __( 'Layout', '__plugin_txtd' ) }
			initialOpen={ false }>

			<PaddingControls { ...props } />
			<WidthControls { ...props } />

			{ props.children }
		</PanelBody>
	);
};

export default LayoutPanel;
