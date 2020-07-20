/**
 * Internal dependencies
 */
import PaddingControls from './padding';
import WidthControls from './width';

import { ControlsTab, ControlsSection } from "../control-sections";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const LayoutPanel = function( props ) {
	return (
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<PaddingControls key={ 'padding-controls' } { ...props } />
				<WidthControls key={ 'width-controls' } { ...props } />
			</ControlsTab>
		</ControlsSection>
	);
};

export default LayoutPanel;
