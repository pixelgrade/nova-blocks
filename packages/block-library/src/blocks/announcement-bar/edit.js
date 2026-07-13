/**
 * WordPress dependencies
 */
import classnames from 'classnames';

import { Fragment } from "@wordpress/element";
import { InnerBlocks } from "@wordpress/block-editor";
import { BaseControl, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect } from '@wordpress/element';
import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";
import { useSelect } from '@wordpress/data';

import { getAnnouncementBlockId } from './block-id';

const ALLOWED_BLOCKS = [ 'novablocks/openhours', 'core/paragraph' ];
const ANNOUNCEMENT_BAR_TEMPLATE = [ [ 'novablocks/openhours', { openHoursStyle: 'status',  } ] ];

const Edit = ( props ) => {

  const {
    clientId,
    className,
    attributes: {
      blockId,
      url,
      opensInNewTab,
    },
    setAttributes,
    isSelected,
  } = props;

  const matchingClientIds = useSelect( select => {
    const editor = select( 'core/block-editor' );

    return editor.getClientIdsWithDescendants().filter( currentClientId => {
      const block = editor.getBlock( currentClientId );

      return block?.name === 'novablocks/announcement-bar' && block.attributes.blockId === blockId;
    } );
  }, [ blockId ] );

  // Keep a saved dismissal-cookie ID stable across reloads. A new or duplicated
  // block receives its own client ID so two bars cannot share dismissal state.
  useEffect( () => {
    const nextBlockId = getAnnouncementBlockId( blockId, clientId, matchingClientIds );

    if ( nextBlockId !== blockId ) {
      setAttributes( { blockId: nextBlockId } );
    }
  }, [ blockId, clientId, matchingClientIds ] );

  const blockProps = useBlockProps({
    className: classnames(
      'novablocks-announcement-bar',
      className,
    )
  });

  const innerBlockProps = useInnerBlocksProps( {
    className: 'novablocks-announcement-bar__wrapper'
  }, {
    allowedBlocks: ALLOWED_BLOCKS,
    template: ANNOUNCEMENT_BAR_TEMPLATE
  } );

  return (
    <div { ...blockProps }>
      <div { ...innerBlockProps } />
      { isSelected &&
        <div className="novablocks-announcement-bar__url-field-wrapper">
          <TextControl
            label={ __( 'Add a link to make the whole Announcement Bar clickable.', '__plugin_txtd' ) }
            className="wp-block-button__inline-link"
            type="url"
            value={ url || '' }
            onChange={ ( value ) => setAttributes( { url: value } ) }
            placeholder={ __( 'Paste URL or type to search…', '__plugin_txtd' ) }
          />
          <ToggleControl
            checked={ opensInNewTab }
            onChange={ ( opensInNewTab ) => {
              setAttributes( { opensInNewTab } );
            } }
            label={ __( 'Open in new tab', '__plugin_txtd' ) }
          />
        </div> }
    </div>
  )
};

export default Edit;
