/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	BlockControls,
 } from '@wordpress/block-editor';

import {
	Toolbar,
 } from '@wordpress/components';

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
        label={ __( 'Orientation', '__plugin_txtd' ) }
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
		</BlockControls>
	);
};

export default MediaBlockControls;
