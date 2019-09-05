/**
 * Internal dependencies
 */
import {
	HeightPanel,
	LayoutPanel,
	ParallaxPanel,
	ScrollIndicatorPanel,
	PositionIndicatorsPanel
} from '../../components';

import withSettings from '../../components/with-settings';
import withParallax from '../../components/with-parallax';

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

const {
	compose,
	createHigherOrderComponent,
} = wp.compose;

const HeroEdit = function( props ) {
	return (
		<Fragment>
			<HeroPreview { ...props } />
			<BlockControls { ...props } />
			<InspectorControls>
				<LayoutPanel { ...props } />
				<HeightPanel { ...props } />
				<ScrollIndicatorPanel { ...props } />
				<PositionIndicatorsPanel { ...props } />
			</InspectorControls>
		</Fragment>
	);
};

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( HeroEdit );
