/**
 * Internal dependencies
 */
import * as icons from "../../icons";
import {
	AlignmentToolbar
} from "../../components/alignment-controls";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	Component,
	Fragment
} = wp.element;

const {
	MediaUpload,
	BlockControls
} = wp.blockEditor;

const {
	IconButton,
	Toolbar
} = wp.components;

const MEDIA_ALIGNMENTS_CONTROLS = {
	left: {
		icon: 'align-pull-left',
		title: __( 'Show Media on Left Side', '__plugin_txtd' ),
	},
	right: {
		icon: 'align-pull-right',
		title: __( 'Show Media on Right Side', '__plugin_txtd' ),
	},
};

const MediaBlockControls = function( props ) {

	const {
		attributes,
		setAttributes,
		updateImages
	} = props;

	const {
		mediaPosition,
		images = [],
	} = attributes;

	const galleryImages = images.map( ( image ) => JSON.parse( image ) );
	const hasImages = !! images.length;

	const onChangeGallery = function( galleryImages ) {

		const promises = galleryImages.map( (image, index) => {
			return wp.apiRequest( { path: '/wp/v2/media/' + image.id } ).then( newImage => {
				galleryImages[index] = { ...newImage, ...image };
			} );
		} );

		Promise.all( promises ).then( () => {
			props.setAttributes( { galleryImages: galleryImages.filter( image => {
					return !! image.id && !! image.sizes && !! image.sizes.large && !! image.sizes.large.url;
				} ) } );
		} );

	}

	return (
		<BlockControls>

			<Toolbar
				controls={ Object.keys(MEDIA_ALIGNMENTS_CONTROLS).map(control => {
					return {
						...MEDIA_ALIGNMENTS_CONTROLS[control],
						onClick: () => { setAttributes({ mediaPosition: control } )},
						isActive: mediaPosition === control
					}
				}) }
			/>

			<AlignmentToolbar { ...props } />

			{ hasImages && <Toolbar>
				<MediaUpload
					type = "image"
					multiple
					gallery
					value = { galleryImages.map( ( image ) => image.id ) }
					onSelect = { updateImages }
					render = { ( { open } ) => (
						<IconButton
							className='components-icon-button components-toolbar__control'
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick= { open }
						/>
					)}
				/>
			</Toolbar> }

		</BlockControls>
	);
}

export default MediaBlockControls;
