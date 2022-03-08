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

import {
  withVisibility
} from '@novablocks/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'image', 'video' ];

export const AdvancedGalleryChangeMediaToolbar = withVisibility( 'media-composition-block-controls' )( props => {

	const {
		onSelectImages,
		attributes,
    context,
	} = props;

  // If the parent block is in a Query Loop block, we don't want to control the media manually.
  const queryId = context?.queryId || false;
  const isDescendentOfQueryLoop = Number.isFinite( queryId );
  if ( isDescendentOfQueryLoop ) {
    return null;
  }

	const gallery = attributes?.images || [];
	const galleryValue = gallery.map( ( image ) => image.id );

	return (
    <Toolbar label={ __( 'Media', '__plugin_txtd' ) } group={ 'block' }>
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
	);
} );

const AdvancedGalleryBlockControls = ( props ) => {

	return (
		<BlockControls>
			<AdvancedGalleryChangeMediaToolbar { ...props } />
		</BlockControls>
	)
};

export default AdvancedGalleryBlockControls;
