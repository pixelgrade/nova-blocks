import { swap, alignCenter } from "../../icons";

const { __ } = wp.i18n;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	Dropdown,
	IconButton,
	RadioControl,
	Toolbar,
} = wp.components;

const {
	Fragment
} = wp.element;

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		setAttributes,
		attributes: {
			images,
		}
	} = props;

	if ( ! images || ! images.length ) {
		return false;
	}

	return (
		<Toolbar>
			<MediaUpload
				type="image"
				multiple
				gallery
				value={ images.map( ( image ) => image.id ) }
				onSelect={ ( images ) => {
					setAttributes( { images } );
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
		attributes: {
			verticalSpacing,
		}
	} = props;

	return (
		<BlockControls>
			<AdvancedGalleryChangeMediaToolbar { ...props } />
		</BlockControls>
	)
}

export default AdvancedGalleryBlockControls;
