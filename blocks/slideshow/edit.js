const { __ } = wp.i18n;

import {
	AlignmentControls,
	ColorPanel,
	LayoutPanel,
	ParallaxPanel,
	AlignmentToolbar,
	ColorToolbar,
	GalleryPreview, GalleryPlaceholder,
} from "../../components";

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
	"alt": "This is a catchy image title",
	"id": -1,
	"caption": "A brilliant caption to explain its catchiness",
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
		super( { ...arguments } );

		this.state = {
			selectedIndex: 0
		};
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

		if ( ! galleryImages.length ) {
			defaultGalleryImages.map( image => galleryImages.push( image ) )
		}

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

						<PanelBody title={ __( 'Height', '__plugin_txtd' ) } initialOpen={ false }>
							<RadioControl
								label={ __( 'Minimum Height', '__plugin_txtd' ) }
								selected={ minHeight }
								onChange={ minHeight => {
									console.log( minHeight );
									setAttributes( { minHeight } )
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

						<LayoutPanel { ...this.props } />

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
