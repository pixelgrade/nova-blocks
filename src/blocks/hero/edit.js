import isShallowEqual from '@wordpress/is-shallow-equal';

/**
 * Internal dependencies
 */
import {
	HeightPanel,
	LayoutPanel,
	ScrollIndicatorPanel,
	PositionIndicatorsPanel,
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

	updateAttributes() {
		const { attributes, setAttributes } = this.props;
		const defaults = this.getDefaults( attributes );
		const newAttributes = this.getNewAttributes( { ...attributes, ...defaults } );

		setAttributes( newAttributes );
	}

	shouldComponentUpdate( nextProps ) {
		return ! isShallowEqual( nextProps.attributes, this.props.attributes );
	}

	componentDidMount() {
		this.updateAttributes();
	}

	componentDidUpdate() {
		this.updateAttributes();
	}

	render() {
		const { attributes, setAttributes } = this.props;
		const { media, focalPoint } = attributes;
		const parallaxFocalPointImage = media ? media.sizes.full : false;

		return (
			<Fragment>
				<HeroPreview { ...this.props } />
				<BlockControls { ...this.props } />
				<InspectorControls>
					{ parallaxFocalPointImage && <PanelBody
						title={ __( 'Focal Point', '__plugin_txtd' ) }
						initialOpen={ true }>
						<FocalPointPicker
							url={ parallaxFocalPointImage.url }
							dimensions={ {
								width: parallaxFocalPointImage.width,
								height: parallaxFocalPointImage.height,
							} }
							value={ focalPoint }
							onChange={ focalPoint => setAttributes( { focalPoint } ) }
						/>
					</PanelBody> }
					<LayoutPanel { ...this.props } />
					<FirstBlockControls { ...this.props } />
				</InspectorControls>
			</Fragment>
		);
	}
};

export default createHigherOrderComponent(compose([
	withSettings,
	withParallax,
]))( HeroEdit );
