/**
 * Internal dependencies
 */
import {
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

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const HeroBlockControls = function( props ) {

	const {
		setAttributes,
	} = props;

	return (
		<BlockControls>
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
