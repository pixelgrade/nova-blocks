import { AlignmentToolbar } from "../../components/alignment-controls";
import { ColorToolbar } from "../../components/color-controls";
import * as icons from "../../icons";

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

export default function( props ) {

	const {
		attributes: {
			galleryImages,
		},
		setAttributes,
	} = props;

	const onChangeGallery = function( galleryImages ) {

		const promises = galleryImages.map( (image, index) => {
			return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( newImage => {
				galleryImages[index] = { ...newImage, ...image };
			} );
		} );

		Promise.all( promises ).then( () => {
			setAttributes( { galleryImages: galleryImages.filter( image => {
					return !! image.id && !! image.sizes && !! image.sizes.large && !! image.sizes.large.url;
				} ) } );
		} );

	}

	return (
		<BlockControls>
			<AlignmentToolbar { ...props } />
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					type = "image"
					multiple
					gallery
					value = { galleryImages.map( ( image ) => image.id ) }
					onSelect = { onChangeGallery }
					render = { ( { open } ) => (
						<IconButton
							className='components-icon-button components-toolbar__control'
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick= { () => {
								open();
							} }
						/>
					)}
				/>
			</Toolbar>
		</BlockControls>
	)
}