import { __ } from '@wordpress/i18n';

import { PanelBody, ToggleControl } from '@wordpress/components';

function PositionIndicatorsPanel( props ) {

	const { attributes, setAttributes } = props;
	const { positionIndicators } = attributes;

	return (
		<PanelBody title={ __( 'Position Indicators', '__plugin_txtd' ) } initialOpen={ false }>
			<ToggleControl
				label={ __( 'Enable Position Indicators', '__plugin_txtd' ) }
				checked={ positionIndicators }
				onChange={ positionIndicators => { setAttributes( { positionIndicators } ) } }
			/>
		</PanelBody>
   )
}

export default PositionIndicatorsPanel;
