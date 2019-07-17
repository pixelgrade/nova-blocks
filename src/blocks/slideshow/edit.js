const { __ } = wp.i18n;

import {
	AlignmentControls,
	ColorPanel,
	LayoutPanel,
	ParallaxPanel,
	AlignmentToolbar,
	ColorToolbar,
	GalleryPreview,
	GalleryPlaceholder,
} from "../../components";

import { shuffleArray } from "../../components/util";

import SlideshowPreview from './preview';

const {
	BlockControls,
	InspectorControls,
} = wp.blockEditor;

const {
	PanelBody,
	RadioControl,
	SelectControl,
} = wp.components;

const {
	Component,
	Fragment,
} = wp.element;

const defaultGalleryImages = [{
	"url": "https://source.unsplash.com/_nqApgG-QrY/1600x900",
	"id": -1,
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/_nqApgG-QrY/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/_nqApgG-QrY/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}, {
	"url": "https://source.unsplash.com/Gt_4iMB7hY0/1600x900",
	"alt": "This is a catchy image title",
	"caption": "A brilliant caption to explain its catchiness",
	"id": -2,
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/Gt_4iMB7hY0/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/Gt_4iMB7hY0/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}, {
	"url": "https://source.unsplash.com/1vKTnwLMdqs/1600x900",
	"id": -3,
	"sizes": {
		"thumbnail": {
			"url": "https://source.unsplash.com/1vKTnwLMdqs/150x150"
		},
		"large": {
			"url": "https://source.unsplash.com/1vKTnwLMdqs/1600x900",
			"width": 1600,
			"height": 900
		}
	}
}];

export default class Edit extends Component {

	constructor() {
		super( ...arguments );

		this.state = {
			selectedIndex: 0
		};
	}

	componentWillMount() {
		const {
			attributes: {
				galleryImages
			},
			clientId
		} = this.props;

		if ( ! galleryImages.length ) {
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( clientId, {
				galleryImages: shuffleArray( defaultGalleryImages.slice(0) )
			} );
		}
	}

	onPrevArrowClick() {
		const { attributes: { galleryImages } } = this.props;
		const { selectedIndex } = this.state;
		const newIndex = ( selectedIndex + galleryImages.length - 1 ) % galleryImages.length;
		this.setState( { selectedIndex: newIndex } );
	}

	onNextArrowClick() {
		const { attributes: { galleryImages } } = this.props;
		const { selectedIndex } = this.state;
		const newIndex = ( selectedIndex + 1 ) % galleryImages.length;
		this.setState( { selectedIndex: newIndex } );
	}

	render() {

		const {
			attributes: {
				slideshowType,
				galleryImages,
				minHeight,
			},
			setAttributes,
			isSelected,
			className
		} = this.props;

		let { selectedIndex } = this.state;

		if ( selectedIndex >= galleryImages.length ) {
			selectedIndex = galleryImages.length - 1;
		}

		return (
			<Fragment>

				<SlideshowPreview
					{ ...this.props }
					previewImage={ galleryImages[ selectedIndex ] }
					onPrevArrowClick={ this.onPrevArrowClick.bind( this ) }
					onNextArrowClick={ this.onNextArrowClick.bind( this ) }
				/>

				<InspectorControls>

					<PanelBody
						className={ 'nova-blocks-slideshow-type-panel' }
						title={ __( 'Slideshow Type', '__plugin_txtd' ) }>
						<SelectControl
							value={ slideshowType }
							onChange={ slideshowType => setAttributes( { slideshowType } ) }
							options={[
								{
									label: __( 'Gallery', '__plugin_txtd' ),
									value: 'gallery'
								}, {
									label: __( 'Custom', '__plugin_txtd' ),
									value: 'custom'
								}, {
									label: __( 'Projects', '__plugin_txtd' ),
									value: 'projects'
								}
							]}
						/>
						{ !! galleryImages.length && <GalleryPreview
							galleryImages={ galleryImages }
							onSelectImage={ selectedIndex => { this.setState( { selectedIndex } ) } }
							isSelected={ isSelected }
							selected={ selectedIndex }
						/> }
						<GalleryPlaceholder { ...this.props } />
					</PanelBody>

					{ 'gallery' === slideshowType && <Fragment>

						<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) } initialOpen={ false }>
							<AlignmentControls { ...{
								...this.props,
								attributes: {
									...this.props.attributes,
									applyMinimumHeightBlock: true
								}
							} } />
						</PanelBody>

						<ColorPanel { ...this.props } />
						<LayoutPanel { ...this.props } />

						<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ false }>
							<RadioControl
								label={ __( 'Minimum Height', '__plugin_txtd' ) }
								selected={ minHeight }
								onChange={ minHeight => {
									setAttributes( { minHeight: parseInt( minHeight, 10 ) } )
								} }
								options={[{
									label: __( 'Auto', '__plugin_txtd' ),
									value: 0
								}, {
									label: __( 'Half', '__plugin_txtd' ),
									value: 50
								}, {
									label: __( 'Two Thirds', '__plugin_txtd' ),
									value: 66
								}, {
									label: __( 'Three Quarters', '__plugin_txtd' ),
									value: 75
								}, {
									label: __( 'Full Height', '__plugin_txtd' ),
									value: 100
								}]}
							/>
						</PanelBody>

						<ParallaxPanel { ...this.props } />

					</Fragment> }

					{ 'gallery' !== slideshowType && <PanelBody>
						{ __( 'Coming Soon', '__plugin_txtd' ) }
					</PanelBody> }

				</InspectorControls>

				<BlockControls>
					<AlignmentToolbar { ...this.props } />
					<ColorToolbar { ...this.props } />
				</BlockControls>

			</Fragment>
		)
	}
}
