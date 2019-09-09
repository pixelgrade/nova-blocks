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
	Component,
	Fragment,
} = wp.element;

const {
	compose,
	createHigherOrderComponent,
} = wp.compose;

import * as images from '../../images';

const HeroEdit = function( props ) {

	const { attributes } = props;
	const { example } = attributes;

	return (
		example ?
		<Fragment>
			<HeroPreview { ...props } />
			<BlockControls { ...props } />
			<InspectorControls>
				<LayoutPanel { ...props } />
				<HeightPanel { ...props } />
				<ScrollIndicatorPanel { ...props } />
				<PositionIndicatorsPanel { ...props } />
			</InspectorControls>
		</Fragment> : images.hero
	);
};

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( HeroEdit );
