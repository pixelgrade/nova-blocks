/**
 * Internal dependencies
 */
import {
	LayoutPanel,
	ScrollIndicatorPanel,
	PositionIndicatorsPanel,
	withParallax,
	withSettings,
	ControlsTab,
	ControlsSection
 } from '@novablocks/components';

import { withFirstBlockConditions } from '@novablocks/utils';

import HeroPreview from './preview';
import BlockControls from './block-controls';

import { __ } from '@wordpress/i18n';

import {
	InspectorControls
 } from '@wordpress/block-editor';

import {
	PanelBody,
	RadioControl
 } from '@wordpress/components';

import {
	Component,
	Fragment
 } from '@wordpress/element';

import {
	compose,
	createHigherOrderComponent
 } from '@wordpress/compose';

import {
	select
} from '@wordpress/data';

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
				defaults.scrollIndicator = settings.hero.attributes.scrollIndicator.default;
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
