import { swap } from "@novablocks/icons";

import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	MediaUpload
 } from '@wordpress/block-editor';

import {
	Button,
	Toolbar
} from '@wordpress/components';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		onSelectImages,
		attributes,
	} = props;

	const gallery = attributes?.images;
	const galleryValue = gallery.map( ( image ) => image.id );

	if ( ! gallery || ! gallery.length ) {
		return false;
	}

	return (
		<Toolbar>
			<MediaUpload
				allowedTypes={ ALLOWED_MEDIA_TYPES }
				multiple
				value={ galleryValue }
				onSelect={ onSelectImages }
				render={ ( { open } ) => (
					<Button
						className="components-icon-button components-toolbar__control"
						label={ __( 'Change Media', '__plugin_txtd' ) }
						icon={ swap }
						onClick={ open }
					/>
				) }
			/>
		</Toolbar>
	);
};

const AdvancedGalleryBlockControls = ( props ) => {

	return (
		<BlockControls>
			<AdvancedGalleryChangeMediaToolbar { ...props } />
		</BlockControls>
	)
};

export default AdvancedGalleryBlockControls;
