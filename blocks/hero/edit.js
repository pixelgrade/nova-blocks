import { debounce } from '../utils';
import * as icons from '../icons';

import {
	AlignmentControls,
	AlignmentToolbar,
	ColorPanel,
	ColorToolbar,
	HeightPanel,
	LayoutPanel,
	ParallaxPanel,
	ScrollIndicatorPanel,
} from "../../components";

const { __ } = wp.i18n;

const {
	InspectorControls,
	BlockControls,
	MediaUpload,
	InnerBlocks
} = wp.blockEditor;

const {
	Component,
	Fragment
} = wp.element;

const {
	IconButton,
	PanelBody,
	ToggleControl,
	Toolbar,
} = wp.components;

export default class Edit extends Component {

	constructor() {
		super( ...arguments );
	}

	render() {

		const {
			attributes: {
				// layout
				contentPadding,
				contentPaddingCustom,
				contentWidth,
				contentWidthCustom,
				// alignment
				verticalAlignment,
				horizontalAlignment,
				// height
				minHeight,
				applyMinimumHeight,
				applyMinimumHeightBlock,
				scrollIndicatorBlock,
				// colors
				contentColor,
				overlayFilterStyle,
				overlayFilterStrength,
				// media
				media,
			},
			className,
			setAttributes,
			isSelected
		} = this.props;

		const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

		class Hero extends Component {
			render() {

				const classes = [
					className,
					'nova-hero',
					`nova-u-valign-${verticalAlignment}`,
					`nova-u-halign-${horizontalAlignment}`,
					`nova-u-spacing-${contentPadding}`,
					`nova-u-content-width-${contentWidth}`,
					`nova-u-background`,
					`nova-u-background-${overlayFilterStyle}`
				]

				const styles = {
					hero: { color: contentColor },
					foreground: {},
					content: {},
					image: {}
				}

				if ( !! applyMinimumHeightBlock ) {
					styles.hero.minHeight = minHeight + 'vh'
				}

				if ( contentPadding === 'custom' ) {
					styles.foreground.paddingTop = `${contentPaddingCustom}%`
					styles.foreground.paddingBottom = `${contentPaddingCustom}%`
				}

				if ( contentWidth === 'custom' ) {
					styles.content.maxWidth = `${contentWidthCustom}%`
				}

				if ( overlayFilterStyle !== 'none' ) {
					styles.image.opacity = 1 - overlayFilterStrength / 100
				}

				return (
					<div className={classes.join(' ')} style={styles.hero}>
						<div className='nova-hero__mask'>
							<div className='nova-hero__background'>
								{ media.type === 'image' && typeof media.sizes !== 'undefined'
								  && <img className='nova-hero__media' src={ media.sizes.full.url } style={ styles.image }/> }
								{ media.type === 'video'
								  && <video muted autoplay loop className='nova-hero__media' src={ media.url } style={ styles.image }/> }
							</div>
						</div>
						<div className='nova-hero__foreground nova-u-content-padding' style={ styles.foreground }>
							<div className='nova-u-content-align'>
								<div className='nova-hero__content nova-u-content-width' style={ styles.content }>
									<InnerBlocks template={[
										[ 'core/heading', { content: 'This is a catchy title', align: 'center' } ],
										[ 'core/paragraph', { content: 'A brilliant subtitle to explain its catchiness', align: 'center' } ],
										[ 'core/button', { text: 'Discover more', align: 'center' } ],
									]} />
								</div>
								{ scrollIndicatorBlock && <div className='nova-hero__indicator'></div> }
							</div>
						</div>
					</div>
				)
			}
		}

		return [
			<Hero />,
			<BlockControls>
				<AlignmentToolbar { ...this.props } />
				<ColorToolbar { ...this.props } />
				<Toolbar>
					<MediaUpload
						allowedTypes={ ALLOWED_MEDIA_TYPES }
						onSelect={ media => setAttributes( { media } ) }
						render={ ( { open } ) => {
							return <IconButton
								label={ __( 'Swap Media', '__plugin_txtd' ) }
								icon='format-image'
								onClick={ open }
							/>
						}}
					/>
				</Toolbar>
			</BlockControls>,
			<InspectorControls>
				<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) }>
					<AlignmentControls { ...this.props } />
				</PanelBody>
				<ColorPanel { ...this.props } />
				<LayoutPanel { ...this.props } />
				<HeightPanel { ...this.props } />
				<ScrollIndicatorPanel { ...this.props } />
				<ParallaxPanel { ...this.props } />
			</InspectorControls>
		]
	}
}