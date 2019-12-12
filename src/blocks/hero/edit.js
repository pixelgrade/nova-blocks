import isShallowEqual from '@wordpress/is-shallow-equal';

/**
 * Internal dependencies
 */
import {
	HeightPanel,
	LayoutPanel,
	ScrollIndicatorPanel,
	PositionIndicatorsPanel,
	AdvancedScrollAnimationControls,
} from '../../components';

import withSettings from '../../components/with-settings';
import withParallax from '../../components/with-parallax';
import { withFirstBlockConditions } from '../../utils';

import HeroPreview from './preview';
import BlockControls from './block-controls';

const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	FocalPointPicker,
	PanelBody,
	RadioControl,
	ToggleControl,
} = wp.components;

const {
	Component,
	Fragment,
} = wp.element;

const {
	compose,
	createHigherOrderComponent,
} = wp.compose;

const {
	select,
	dispatch
} = wp.data;

const FirstBlockControls = withFirstBlockConditions( function( props ) {

	return (
		<Fragment>
			<HeightPanel { ...props } />
			<ScrollIndicatorPanel { ...props } />
			<PositionIndicatorsPanel { ...props } />
		</Fragment>
	);
} );

const BlockHeightControls = function( props ) {

	const {
		attributes,
		setAttributes,
		settings,
	} = props;

	const { minHeightFallback } = attributes;

	return (
		<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ false }>
			<RadioControl
				label={ __( 'Minimum Height', '__plugin_txtd' ) }
				selected={ minHeightFallback }
				onChange={ minHeightFallback => {
					setAttributes( {
						minHeightFallback: parseFloat( minHeightFallback )
					} );
				} }
				options={ settings.minimumHeightOptions }
			/>
		</PanelBody>
	);
}

class HeroEdit extends Component {

	getDefaults( attributes ) {
		const { settings } = this.props;
		const { minHeight, applyMinimumHeight, scrollIndicator } = attributes;
		const defaults = {};

		if ( ! minHeight ) {
			defaults.minHeight = settings.hero.attributes.minHeight.default;
		}

		if ( ! applyMinimumHeight ) {
			defaults.applyMinimumHeight = settings.hero.attributes.applyMinimumHeight.default;
		}

		if ( ! scrollIndicator ) {
			defaults.scrollIndicator = settings.hero.attributes.scrollIndicator.default;
		}

		return defaults;
	}

	getNewAttributes( attributes ) {
		const { minHeight, applyMinimumHeight, scrollIndicator } = attributes;

		const index = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
			return block.name === 'novablocks/hero';
		} ).findIndex( block => {
			return block.clientId === this.props.clientId
		} );

		const newApplyMinimumHeightBlock = ( index === 0 && applyMinimumHeight === 'first' ) || applyMinimumHeight === 'all';
		const newScrollIndicatorBlock = index === 0 && scrollIndicator;

		return {
			applyMinimumHeight: applyMinimumHeight,
			applyMinimumHeightBlock: newApplyMinimumHeightBlock,
			minHeight: minHeight,
			scrollIndicatorBlock: newScrollIndicatorBlock,
		};
	}

	updateAttributes( newAttributes = {} ) {
		const { attributes, setAttributes } = this.props;
		const defaults = this.getDefaults( attributes );
		const computedAttributes = this.getNewAttributes( { ...attributes, ...defaults, ...newAttributes } );

		setAttributes( computedAttributes );
	}

	componentDidMount() {
		this.updateAttributes();
	}

	render() {
		const { settings, attributes, setAttributes } = this.props;
		const { media, focalPoint } = attributes;
		const parallaxFocalPointImage = media ? media.sizes.full : false;
		const { usePostMetaAttributes } = settings;
		const updateAttributes = this.updateAttributes.bind( this );

		return (
			<Fragment>
				<HeroPreview { ...this.props } />
				<BlockControls { ...this.props } />
				<InspectorControls>
					{ false && <LayoutPanel { ...this.props } /> }
					{ usePostMetaAttributes && <FirstBlockControls { ...this.props } updateAttributes={ updateAttributes } /> }
					{ ! usePostMetaAttributes && <BlockHeightControls { ...this.props } /> }
				</InspectorControls>
			</Fragment>
		);
	}
};

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( HeroEdit );
