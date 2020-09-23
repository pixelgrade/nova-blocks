/**
 * Internal dependencies
 */
import PaddingControls from './padding';
import WidthControls from './width';

export { default as layoutAttributes } from './attributes';

import {
	ControlsTab,
	ControlsSection
} from "../index";

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

export const LayoutControls = function( props ) {
	return (
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<PaddingControls key={ 'padding-controls' } { ...props } />
				<WidthControls key={ 'width-controls' } { ...props } />
			</ControlsTab>
		</ControlsSection>
	);
};
