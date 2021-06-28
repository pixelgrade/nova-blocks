/**
 * Internal dependencies
 */
import {
  ColorToolbar,
  getIconSvg
} from '@novablocks/block-editor';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	MediaUpload
} from '@wordpress/block-editor';

import {
	Button,
	Toolbar,
 } from '@wordpress/components';

const BlockAlignmentMatrixToolbar = wp.blockEditor.__experimentalBlockAlignmentMatrixToolbar;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const HeroBlockControls = function( props ) {

	const {
		attributes: {
			contentPosition,
		},
		setAttributes,
	} = props;

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
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					onSelect={ ( media ) => setAttributes( { media } ) }
					render={ ( { open } ) => {
						return <Button
							className="components-icon-button components-toolbar__control"
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ getIconSvg( 'swap' ) }
							onClick={ open }
						/>;
					} }
				/>
			</Toolbar>
		</BlockControls>
	);
};

export default HeroBlockControls;
