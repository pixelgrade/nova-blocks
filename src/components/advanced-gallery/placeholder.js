const {
	MediaPlaceholder,
	BlockIcon,
} = wp.blockEditor;

const AdvancedGalleryPlaceholder = ( props ) => {

	const {
		setAttributes,
		attributes: {
			images
		}
	} = props;

	if ( !! images && !! images.length ) {
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
