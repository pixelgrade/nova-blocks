import {
	MediaPlaceholder,
	BlockIcon
 } from '@wordpress/block-editor';

const MediaCompositionPlaceholder = props => {

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
			allowedTypes={ [ 'image', 'video' ] }
			multiple
			onSelect={ onSelectImages }
		/>
	)
};

export default MediaCompositionPlaceholder;
