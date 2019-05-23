
const { __ } = wp.i18n;

import {
	AlignmentControls,
	ColorPanel,
	LayoutControls
} from "../../components";

const {
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

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class Edit extends Component {

	constructor() {
		super( { ...arguments } );

		this.state = {
			selectedIndex: 0
		};
	}

	render() {

		const {
			attributes: {
				slideshowType,
				galleryImages,
				contentColor,
				overlayFilterStyle,
				overlayFilterStrength
			},
			setAttributes,
			isSelected,
			className
		} = this.props;

		const hasImages = !! galleryImages.length;

		const onSelectImages = galleryImages => {

			const newImages = [];

			const promises = galleryImages.map( image => {
				return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( newImage => {
					newImages.push( { ...newImage, ...image } )
				});
			} );

			Promise.all( promises ).then( () => {
				setAttributes( { galleryImages: newImages } );
			} );

		}

		const onSelectImage = ( selectedIndex ) => {
			this.setState( { selectedIndex } )
		}

		const mediaPlaceholder = (
			<MediaPlaceholder
				addToGallery={ hasImages }
				isAppender={ hasImages }
				className=""
				dropZoneUIOnly={ hasImages && ! isSelected }
				labels={ {
					title: ! hasImages && __( 'Gallery' ),
					instructions: ! hasImages && __( 'Drag images, upload new ones or select files from your library.' ),
				} }
				onSelect={ onSelectImages }
				accept="image/*"
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				multiple
				value={ hasImages ? galleryImages : undefined }
			/>
		);

		let { selectedIndex } = this.state;

		if ( selectedIndex >= galleryImages.length ) {
			selectedIndex = galleryImages.length - 1;
		}

		const selectedImage = galleryImages[ selectedIndex ];

		const styles = {
			hero: {
				color: contentColor,
			},
			image: {

			}
		}

		if ( overlayFilterStyle !== 'none' ) {
			styles.image.opacity = 1 - overlayFilterStrength / 100
		}

		const goToPrevSlide = () => {
			this.setState( { selectedIndex: ( selectedIndex + galleryImages.length - 1 ) % galleryImages.length } );
		}

		const goToNextSlide = () => {
			this.setState( { selectedIndex: ( selectedIndex + 1 ) % galleryImages.length } );
		}

		const slideshow = () => {
			const classes = [
				className,
				'nova-slideshow',
				`u-background`,
				`u-background-${overlayFilterStyle}`
			]

			return (
				<div className={ classes.join(' ') } style={ styles.hero }>
					<div className="nova-slideshow__slide">
						{ selectedImage && <Fragment>
							<img className="nova-slideshow__media" src={ selectedImage.sizes.large.url } alt="" style={ styles.image } />
							<div className="nova-slideshow__content">
								<h2>{ selectedImage.alt }</h2>
								<p>{ selectedImage.caption }</p>
							</div>
						</Fragment> }
					</div>
					<div className="nova-slideshow__controls">
						<div className="nova-slideshow__arrow nova-slideshow__arrow--prev" onClick={ goToPrevSlide }></div>
						<div className="nova-slideshow__arrow nova-slideshow__arrow--next" onClick={ goToNextSlide }></div>
					</div>
				</div>
			)
		}

		return (
			<Fragment>
				{ slideshow() }
				<InspectorControls>

					<PanelBody>
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

					<PanelBody>
						<ul class="nova-slideshow__gallery-edit">
							{ galleryImages.map( ( img, index ) => {

								const classes = [
									'nova-slideshow__gallery-item',
								];

								if ( selectedIndex === index ) {
									classes.push( 'nova-slideshow__gallery-item--active' );
								}

								return (
									<li key={ img.id || img.url } onClick={ () => { onSelectImage( index ) } }>
										<div className={ classes.join( ' ' ) }>
											<img src={ img.sizes.thumbnail.url } alt="" />
										</div>
									</li>
								);
							} ) }
						</ul>
						{ mediaPlaceholder }
					</PanelBody>

					<PanelBody title={ __( 'Content Position', '__plugin_txtd' ) }>
						<AlignmentControls { ...this.props } />
					</PanelBody>

					<ColorPanel { ...this.props } />

					<LayoutControls { ...this.props } />

				</InspectorControls>
			</Fragment>
		)
	}
}