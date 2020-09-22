/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import { AlignmentToolbar } from '../../components/alignment-controls';
import { ColorToolbar } from '../../components/color-controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Button,
	Toolbar,
} = wp.components;

const {
	BlockControls
} = wp.blockEditor;

const {
	MediaUpload,
} = wp.blockEditor;

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
