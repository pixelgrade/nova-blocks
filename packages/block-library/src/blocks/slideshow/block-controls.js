/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import {
	AlignmentToolbar,
	ColorToolbar
} from '@novablocks/components';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	Button,
	Toolbar,
} from '@wordpress/components';

import {
	BlockControls,
	MediaUpload,
} from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const SlideshowBlockControls = function( props ) {

	const {
		attributes: {
			galleryImages,
		},
		onSelectImages,
	} = props;

	const hasImages = !! galleryImages.length;

	return (
		<BlockControls>
			<AlignmentToolbar { ...props } />
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					accept="image/*"
					addToGallery={ hasImages }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					gallery={ true }
					multiple
					onSelect={ onSelectImages }
					render={ ( { open } ) => (
						<Button
							className="components-icon-button components-toolbar__control"
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick={ open }
						/>
					) }
					value={ galleryImages.map( ( image ) => image.id ) }
				/>
			</Toolbar>
		</BlockControls>
	);
};

export default SlideshowBlockControls;
