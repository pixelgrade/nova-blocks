/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import { AlignmentToolbar } from '../../components/alignment-controls';
import { ColorToolbar } from '../../components/color-controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	IconButton,
	Toolbar,
} = wp.components;

const {
	BlockControls
} = wp.blockEditor;

const {
	MediaUpload,
} = wp.blockEditor;

const SlideshowBlockControls = function( props ) {

	const {
		attributes: {
			galleryImages,
		},
		setAttributes,
	} = props;

	const onChangeGallery = function( newGalleryImages ) {
		const promises = newGalleryImages.map( ( image, index ) => {
			return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( ( newImage ) => {
				newGalleryImages[ index ] = { ...newImage, ...image };
			} );
		} );

		Promise.all( promises ).then( () => {
			setAttributes( { galleryImages: newGalleryImages.filter( ( image ) => {
				if ( ! image.sizes.large ) {
					image.sizes.large = image.sizes.full;
				}
				return !! image.id && !! image.sizes && !! image.sizes.large && !! image.sizes.large.url;
			} ) } );
		} );
	};

	return (
		<BlockControls>
			<AlignmentToolbar { ...props } />
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					type="image"
					multiple
					gallery
					value={ galleryImages.map( ( image ) => image.id ) }
					onSelect={ onChangeGallery }
					render={ ( { open } ) => (
						<IconButton
							className="components-icon-button components-toolbar__control"
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick={ open }
						/>
					) }
				/>
			</Toolbar>
		</BlockControls>
	);
};

export default SlideshowBlockControls;
