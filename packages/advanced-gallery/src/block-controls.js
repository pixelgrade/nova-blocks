import { Fragment } from "@wordpress/element";

import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	MediaUpload
 } from '@wordpress/block-editor';

import {
	Dropdown,
	NavigableMenu,
	MenuItem,
	Toolbar,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

const AdvancedGalleryChangeMediaToolbar = ( props ) => {

	const {
		onSelectImages,
		attributes,
	} = props;

	const gallery = attributes?.images;
	const galleryValue = gallery.map( ( image ) => image.id );

	if ( ! gallery || ! gallery.length ) {
		return false;
	}

	return (
		<Fragment>

			<Toolbar>
				<Dropdown
					position="bottom right"
					contentClassName="block-editor-media-replace-flow__options"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<ToolbarGroup>
							<ToolbarButton onClick={ onToggle } aria-expanded={ isOpen }>
								{ __( 'Change Media', '__plugin_txtd' ) }
							</ToolbarButton>
						</ToolbarGroup>
					) }
					renderContent={ ( { onClose } ) => (
						<NavigableMenu>
							<MediaUpload
								gallery
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								multiple
								value={ galleryValue }
								onSelect={ onSelectImages }
								render={ ( { open } ) => (
									<MenuItem onClick={ open }>{ __( 'Edit Gallery', '__plugin_txtd' ) }</MenuItem>
								) }
							/>
							<MediaUpload
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								multiple
								value={ galleryValue }
								onSelect={ onSelectImages }
								render={ ( { open } ) => (
									<MenuItem onClick={ open }>{ __( 'Add Video', '__plugin_txtd' ) }</MenuItem>
								) }
							/>
						</NavigableMenu>
					) }
				/>
			</Toolbar>
		</Fragment>
	);
};

const AdvancedGalleryBlockControls = ( props ) => {

	return (
		<BlockControls>
			<AdvancedGalleryChangeMediaToolbar { ...props } />
		</BlockControls>
	)
};

export default AdvancedGalleryBlockControls;
