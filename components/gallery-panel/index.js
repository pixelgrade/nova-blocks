const { __ } = wp.i18n;

const {
	Component,
	Fragment,
} = wp.element;

const {
	PanelBody,
	SelectControl,
} = wp.components;

const {
	MediaPlaceholder,
} = wp.blockEditor;


const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default class GalleryPanel extends Component {

	render() {

		const {
			galleryImages,
			selected,
			onSelectImage,
			onSelectImages,
			isSelected
		} = this.props;

		const hasImages = !! galleryImages.length;

		return (
			<PanelBody>
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
			</PanelBody>
		)
	}
}
