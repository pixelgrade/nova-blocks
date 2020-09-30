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

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		onSelectImages,
		attributes,
	} = props;

	const gallery = attributes?.images;

	if ( ! gallery || ! gallery.length ) {
		return false;
	}

	return (
		<Toolbar>
			<MediaUpload
				type="image"
				multiple
				gallery
				value={ gallery.map( ( image ) => image.id ) }
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
