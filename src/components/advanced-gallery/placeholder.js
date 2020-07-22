const {
	MediaPlaceholder,
	BlockIcon,
} = wp.blockEditor;

const AdvancedGalleryPlaceholder = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const gallery = !! attributes?.gallery?.length ? attributes.gallery : attributes.images;

	if ( !! gallery && !! gallery.length ) {
		return false;
	}

	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon='format-gallery' /> }
			onSelect={ images => {
				setAttributes( { images } );
			} }
			accept="image/*"
			allowedTypes={ [ 'image' ] }
			multiple
		/>
	)
}

export default AdvancedGalleryPlaceholder;
