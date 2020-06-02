import { swap, alignCenter } from "../../icons";

const { __ } = wp.i18n;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	IconButton,
} = wp.components;

const {
	Fragment
} = wp.element;

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		setAttributes,
		attributes,
	} = props;

	const gallery = ( attributes.gallery && attributes.gallery.length ) ? attributes.gallery : attributes.images;

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
				onSelect={ ( gallery ) => {
					setAttributes( { gallery } );
				} }
				render={ ( { open } ) => (
					<IconButton
						className="components-icon-button components-toolbar__control"
						label={ __( 'Change Media', '__plugin_txtd' ) }
						icon={ swap }
						onClick={ open }
					/>
				) }
			/>
		</Toolbar>
	);
}

const AdvancedGalleryBlockControls = ( props ) => {

	const {
		setAttributes,
	} = props;

	return (
		<BlockControls>
			<AdvancedGalleryChangeMediaToolbar { ...props } />
		</BlockControls>
	)
}

export default AdvancedGalleryBlockControls;
