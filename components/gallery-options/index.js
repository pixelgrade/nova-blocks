const { __ } = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	Button,
	IconButton,
	FormFileUpload,
	SelectControl,
} = wp.components;

const {
	MediaUpload,
	MediaPlaceholder,
} = wp.blockEditor;


const ALLOWED_MEDIA_TYPES = [ 'image' ];

class GalleryPlaceholder extends Component {

	onChangeGallery( galleryImages ) {

		const promises = galleryImages.map( (image, index) => {
			return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( newImage => {
				galleryImages[index] = { ...newImage, ...image };
			} );
		} );

		Promise.all( promises ).then( () => {
			this.props.setAttributes( { galleryImages } );
		} );

	}

	render() {

		const {
			attributes: {
				galleryImages,
				selected,
				onSelectImage,
				onChange,
			},
			setAttributes
		} = this.props;

		const chasImages = !! galleryImages.length;

		return (
			<MediaPlaceholder
				addToGallery={ hasImages }
				isAppender={ hasImages }
				className=""
				labels={ {
					title: '',
					instructions: __( 'Drag images, upload new ones or select files from your library.', '__plugin_txtd' ),
				} }
				onSelect={ galleryImages => { setAttributes( { galleryImages } ) } }
				accept="image/*"
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				multiple
				value={ hasImages ? galleryImages : undefined }
			/>
		)
	}
}

class GalleryPreview extends Component {

	render() {

		const {
			galleryImages,
			selected,
			onSelectImage,
			isSelected
		} = this.props;

		return (
			<ul class="nova-slideshow__gallery-edit">
				{ galleryImages.map( ( img, index ) => {

					const classes = [
						'nova-slideshow__gallery-item',
					];

					if ( selected === index ) {
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
		)
	}
}

export {
	GalleryPlaceholder,
	GalleryPreview
}
