/**
 * Internal dependencies
 */
import * as icons from '@novablocks/icons';
import { AlignmentToolbar, ColorToolbar } from '@novablocks/components';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	MediaUpload
 } from '@wordpress/block-editor';

const {
	Button,
	Toolbar,
} = wp.components;

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const HeroBlockControls = function( props ) {
	const {
		setAttributes,
	} = props;

	return (
		<BlockControls>
			<AlignmentToolbar { ...props } />
			<ColorToolbar { ...props } />
			<Toolbar>
				<MediaUpload
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					onSelect={ ( media ) => setAttributes( { media } ) }
					render={ ( { open } ) => {
						return <Button
							className="components-icon-button components-toolbar__control"
							label={ __( 'Change Media', '__plugin_txtd' ) }
							icon={ icons.swap }
							onClick={ open }
						/>;
					} }
				/>
			</Toolbar>
		</BlockControls>
	);
};

export default HeroBlockControls;
