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

	return (
		<BlockControls>
			<AlignmentToolbar { ...props } />
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					multiple
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ galleryImages.map( ( image ) => image.id ) }
					onSelect={ onSelectImages }
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
