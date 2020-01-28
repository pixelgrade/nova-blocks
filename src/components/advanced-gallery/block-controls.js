import * as icons from "../../icons";

const { __ } = wp.i18n;

const {
	BlockControls,
	MediaUpload,
} = wp.blockEditor;

const {
	Toolbar,
	IconButton,
} = wp.components;

const AdvancedGalleryBlockControls = ( props ) => {

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
		<BlockControls>
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
							icon={ icons.swap }
							onClick={ open }
						/>
					) }
				/>
			</Toolbar>
		</BlockControls>
	)
}

export default AdvancedGalleryBlockControls;
