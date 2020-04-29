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
	} = props;

	const hasImages = !! galleryImages.length;

	function onChangeGallery( newGalleryImages ) {
		const promises = newGalleryImages.map( ( image, index ) => {
			return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( ( newImage ) => {
				newGalleryImages[ index ] = { ...newImage, ...image };
			} );
		} );

		Promise.all( promises ).then( () => {
			props.setAttributes( { galleryImages: newGalleryImages.filter( ( image ) => {
				return !! image.id && !! image.sizes && !! image.sizes.large && !! image.sizes.large.url;
			} ) } );
		} );
	}

	return (
		<MediaPlaceholder
			addToGallery={ hasImages }
			className=""
			labels={ {
				title: '',
				instructions: __( 'Drag images, upload new ones or select files from your library.', '__plugin_txtd' ),
			} }
			onSelect={ onChangeGallery }
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

					let thumb = false;

					const {
						sizes: {
							thumbnail,
							medium,
							medium_large,
							large,
							full
						}
					} = img;

					thumb = thumbnail || medium || medium_large || full || thumb;

					if ( ! thumb || typeof thumb.url === "undefined" ) {
						return null;
					}

					return (
						<li key={ img.id || img.url } onClick={ () => {
							onSelectImage( index );
						} }>
							<div className={ classes.join( ' ' ) }>
								<img src={ thumb.url } alt="" />
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
