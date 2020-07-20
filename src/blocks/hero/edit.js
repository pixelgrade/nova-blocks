/**
 * Internal dependencies
 */
import {
	LayoutPanel,
	ScrollIndicatorPanel,
	PositionIndicatorsPanel,
	AdvancedScrollAnimationControls,
	withParallax,
	withSettings,
} from '../../components';

import heroAttributes from './attributes';

import { ControlsTab, ControlsSection } from "../../components/control-sections";

import { withFirstBlockConditions } from '../../utils';

import HeroPreview from './preview';
import BlockControls from './block-controls';

const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
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
	select
} = wp.data;

const FirstBlockControls = withFirstBlockConditions( function( props ) {

	return (
		<Fragment>
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
		<ControlsSection label={ __( 'Layout' ) }>
			<ControlsTab label={ __( 'Settings' ) }>
				<RadioControl
					key={ 'hero-minimum-height-controls' }
					label={ __( 'Minimum Height', '__plugin_txtd' ) }
					selected={ minHeightFallback }
					onChange={ minHeightFallback => {
						setAttributes( {
							minHeightFallback: parseFloat( minHeightFallback )
						} );
					} }
					options={ settings.minimumHeightOptions }
				/>
			</ControlsTab>
		</ControlsSection>
	);
}

class HeroEdit extends Component {

	getDefaults( attributes ) {
		const { settings } = this.props;
		const { scrollIndicator } = attributes;
		const defaults = {};

		if ( settings.usePostMetaAttributes ) {
			if ( ! scrollIndicator ) {
				defaults.scrollIndicator = heroAttributes.scrollIndicator.default;
			}
		}

		return defaults;
	}

	getNewAttributes( attributes ) {
		const { scrollIndicator } = attributes;

		const index = select( 'core/block-editor' ).getBlocks().filter( ( block ) => {
			return block.name === 'novablocks/hero';
		} ).findIndex( block => {
			return block.clientId === this.props.clientId
		} );

		const newScrollIndicatorBlock = index === 0 && scrollIndicator;

		return {
			scrollIndicator: scrollIndicator,
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
		const { settings } = this.props;
		const { usePostMetaAttributes } = settings;
		const updateAttributes = this.updateAttributes.bind( this );

		return (
			<Fragment>
				<HeroPreview { ...this.props } />
				<BlockControls { ...this.props } />
				<InspectorControls>
					<LayoutPanel { ...this.props } />
					<BlockHeightControls { ...this.props } />
					{ usePostMetaAttributes && <FirstBlockControls { ...this.props } updateAttributes={ updateAttributes } /> }
				</InspectorControls>
			</Fragment>
		);
	}
};

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( HeroEdit );
