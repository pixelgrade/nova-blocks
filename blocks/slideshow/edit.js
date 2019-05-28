const { __ } = wp.i18n;

import {
	AlignmentControls,
	ColorPanel,
	LayoutPanel,
	ParallaxPanel,
	GalleryPanel,
	AlignmentToolbar,
	ColorToolbar,
} from "../../components";

import SlideshowPreview from './preview';

const {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
} = wp.blockEditor;

const {
	PanelBody,
	SelectControl,
} = wp.components;

const {
	Component,
	Fragment,
} = wp.element;

export default class Edit extends Component {

	constructor() {
		super( { ...arguments } );

		this.state = {
			selectedIndex: 0
		};
	}

	onChangeGallery( galleryImages ) {
		const newImages = [];
		const promises = galleryImages.map( image => {
			return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( newImage => {
				newImages.push( { ...newImage, ...image } )
			});
		} );

		Promise.all( promises ).then( () => {
			this.props.setAttributes( { galleryImages: newImages } );
		} );
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

					<PanelBody title={ __( 'Slideshow Type', '__plugin_txtd' ) }>
						<SelectControl
							id="pixelgrade-slideshow-type-control"
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
					</PanelBody>

					{ 'gallery' === slideshowType && <Fragment>

						<GalleryPanel
							galleryImages={ galleryImages }
							onChange={ this.onChangeGallery.bind( this ) }
							onSelectImage={ selectedIndex => { this.setState( { selectedIndex } ) } }
							isSelected={ isSelected }
							selected={ selectedIndex }
						/>

						<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) }>
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
						<ParallaxPanel { ...this.props } />

					</Fragment> }

				</InspectorControls>

				<BlockControls>
					<AlignmentToolbar { ...this.props } />
					<ColorToolbar { ...this.props } />
				</BlockControls>

			</Fragment>
		)
	}
}