/**
 * Internal dependencies
 */
import {
	LayoutPanel,
	withParallax,
	withSettings, ToggleGroup,
} from '../../components';

import heroAttributes from './attributes';

import { ControlsTab, ControlsSection } from "../../components/control-sections";

import HeroPreview from './preview';
import BlockControls from './block-controls';

const { __ } = wp.i18n;

const {
	InspectorControls,
} = wp.blockEditor;

const {
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
};

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
		setAttributes( Object.assign( {}, newAttributes, computedAttributes ) );
	}

	componentDidMount() {
		this.updateAttributes();
	}

	render() {
		const { attributes } = this.props;
		const updateAttributes = this.updateAttributes.bind( this );

		const { getBlocks, getSelectedBlockClientId } = select( 'core/block-editor' );

		const heroBlocks = getBlocks().filter( ( block ) => {
			return block.name === 'novablocks/hero';
		} );

		const index = heroBlocks.findIndex( block => block.clientId === getSelectedBlockClientId() );

		const toggles = [{
			label: __( 'Inner Content' ),
			attribute: 'displayInnerContent'
		}];

		if ( index === 0 ) {
			toggles.push({
				label: __( 'Position Indicators' ),
				attribute: 'positionIndicators'
			}, {
				label: __( 'Scroll Indicator' ),
				attribute: 'scrollIndicator'
			});
		}

		return (
			<Fragment>
				<HeroPreview { ...this.props } />
				<BlockControls { ...this.props } />
				<InspectorControls>
					<LayoutPanel { ...this.props } />
					<BlockHeightControls { ...this.props } />
					<ControlsSection label={ __( 'Indicators' ) }>
						<ControlsTab label={ __( 'Settings' ) }>
							<ToggleGroup
								onChange={ updateAttributes }
								toggles={ toggles.map( toggle => {
									return {
										...toggle,
										value: attributes[ toggle.attribute ]
									}
								} ) }
							/>
						</ControlsTab>
					</ControlsSection>
				</InspectorControls>
			</Fragment>
		);
	}
};

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( HeroEdit );
