import {
	MediaPlaceholder,
	BlockIcon
 } from '@wordpress/block-editor';

const AdvancedGalleryPlaceholder = ( props ) => {

	const {
		attributes,
		setAttributes,
	} = props;

	const gallery = ( attributes.gallery && attributes.gallery.length ) ? attributes.gallery : attributes.images;

	if ( !! gallery && !! gallery.length ) {
		return false;
	}

	return (
		<MediaPlaceholder
			icon={ <BlockIcon icon='format-gallery' /> }
			onSelect={ gallery => {
				setAttributes( { gallery } );
			} }
			accept="image/*"
			allowedTypes={ [ 'image' ] }
			multiple
		/>
	)
}

export default AdvancedGalleryPlaceholder;
