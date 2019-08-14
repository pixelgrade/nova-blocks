/**
 * Internal dependencies
 */
import {
	HeightPanel,
	LayoutPanel,
	ParallaxPanel,
	ScrollIndicatorPanel,
} from '../../components';

import withSettings from '../../components/with-settings';

/**
 * WordPress dependencies
 */
import HeroPreview from './preview';
import BlockControls from './block-controls';

const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	Fragment,
} = wp.element;

const HeroEdit = function( props ) {
	return (
		<Fragment>
			<HeroPreview { ...props } />
			<BlockControls { ...props } />
			<InspectorControls>
				<LayoutPanel { ...props } />
				<HeightPanel { ...props } />
				<ScrollIndicatorPanel { ...props } />
				<ParallaxPanel { ...props } />
			</InspectorControls>
		</Fragment>
	);
};

export default withSettings( HeroEdit );
