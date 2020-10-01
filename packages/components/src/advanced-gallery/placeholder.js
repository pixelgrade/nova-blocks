import {
	MediaPlaceholder,
	BlockIcon
 } from '@wordpress/block-editor';

const AdvancedGalleryPlaceholder = ( props ) => {

	const {
		attributes,
		onSelectImages,
	} = props;

	const gallery = attributes?.images;

	if ( !! gallery && !! gallery.length ) {
		return false;
	}

	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon='format-gallery' /> }
			onSelect={ onSelectImages }
			accept="image/*"
			allowedTypes={ [ 'image' ] }
			multiple
		/>
	)
}

export default AdvancedGalleryPlaceholder;
