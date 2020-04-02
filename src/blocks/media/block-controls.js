/**
 * Internal dependencies
 */
import * as icons from '../../icons';
import { AlignmentToolbar } from '../../components/alignment-controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	MediaUpload,
	BlockControls
} = wp.blockEditor;

const {
	IconButton,
	Toolbar,
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
		updateImages,
	} = props;

	const {
		mediaPosition,
		images = [],
	} = attributes;

	let galleryImages = images;

	if ( images.length && typeof images[0] === 'string' ) {
		galleryImages = images.map( ( image ) => JSON.parse( image ) );
	}

	const hasImages = !! galleryImages.length;

	return (
		<BlockControls>

			<Toolbar
				controls={ Object.keys( MEDIA_ALIGNMENTS_CONTROLS ).map( ( control ) => {
					return {
						...MEDIA_ALIGNMENTS_CONTROLS[ control ],
						onClick: () => {
							setAttributes( { mediaPosition: control } );
						},
						isActive: mediaPosition === control,
					};
				} ) }
			/>

			<AlignmentToolbar { ...props } />

			{ hasImages && <Toolbar>
				<MediaUpload
					type="image"
					multiple
					gallery
					value={ galleryImages.map( ( image ) => image.id ) }
					onSelect={ updateImages }
					render={ ( { open } ) => (
						<IconButton
							className="components-icon-button components-toolbar__control"
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick={ open }
						/>
					) }
				/>
			</Toolbar> }

		</BlockControls>
	);
};

export default MediaBlockControls;
