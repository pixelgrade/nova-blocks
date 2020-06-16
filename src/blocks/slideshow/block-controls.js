/**
 * Internal dependencies
 */
import * as icons from '../../icons';
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

const BlockAlignmentMatrixToolbar = wp.blockEditor.__experimentalBlockAlignmentMatrixToolbar;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const SlideshowBlockControls = function( props ) {

	const {
		attributes: {
			galleryImages,
			contentPosition,
		},
		setAttributes,
	} = props;

	const onChangeGallery = function( items ) {
		const promises = items.map( ( item, index ) => {
			return wp.apiRequest( { path: '/wp/v2/media/' + item.id } ).then( data => {
				items[ index ] = { ...data, ...item };
			} );
		} );

		Promise.all( promises ).then( () => {
			setAttributes( { galleryImages: items } );
		} );
	};

	return (
		<BlockControls>
			<BlockAlignmentMatrixToolbar
				label={ __( 'Change content position' ) }
				value={ contentPosition }
				onChange={ ( nextPosition ) =>
					setAttributes( { contentPosition: nextPosition } )
				}
			/>
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					multiple
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ galleryImages.map( ( image ) => image.id ) }
					onSelect={ onChangeGallery }
					render={ ( { open } ) => (
						<Button
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
