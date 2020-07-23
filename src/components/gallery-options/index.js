/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Component,
} = wp.element;

const {
	MediaPlaceholder,
} = wp.blockEditor;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const GalleryPlaceholder = function( props ) {
	const {
		attributes: {
			galleryImages,
		},
		onSelectImages
	} = props;

	const hasImages = !! galleryImages.length;

	return (
		<MediaPlaceholder
			addToGallery={ hasImages }
			className=""
			labels={ {
				title: '',
				instructions: __( 'Drag images, upload new ones or select files from your library.', '__plugin_txtd' ),
			} }
			onSelect={ onSelectImages }
			accept="image/*"
			allowedTypes={ ALLOWED_MEDIA_TYPES }
			multiple
			value={ hasImages ? galleryImages : undefined }
		/>
	);
};

class GalleryPreview extends Component {

	render() {

		const {
			galleryImages,
			selected,
			onSelectImage,
		} = this.props;

		return (
			<ul className="novablocks-slideshow__gallery-edit">
				{ galleryImages.map( ( img, index ) => {
					const classes = [
						'novablocks-slideshow__gallery-item',
					];

					if ( selected === index ) {
						classes.push( 'novablocks-slideshow__gallery-item--active' );
					}

					let thumbnail = false;

					if ( 'video' === img.type ) {
						thumbnail = img?.thumb?.src;
						classes.push( 'novablocks-slideshow__gallery-item--video' );
					} else {
						thumbnail = img?.sizes?.novablocks_tiny?.url || img?.sizes?.novablocks_large?.url || img?.sizes?.novablocks_huge?.url
					}

					return (
						<li key={ index } onClick={ () => { onSelectImage( index ); } }>
							<div className={ classes.join( ' ' ) }>
								<img src={ thumbnail } alt="" />
							</div>
						</li>
					);
				} ) }
			</ul>
		);
	}
}

export {
	GalleryPlaceholder,
	GalleryPreview,
};
