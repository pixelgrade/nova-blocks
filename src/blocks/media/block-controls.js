/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import { AlignmentToolbar } from '../../components/alignment-controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

const {
	MediaUpload,
	BlockControls,
} = wp.blockEditor;

const {
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
	} = props;

	const {
		mediaPosition,
	} = attributes;

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

		</BlockControls>
	);
};

export default MediaBlockControls;
