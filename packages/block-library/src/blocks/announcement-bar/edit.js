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

const ALLOWED_BLOCKS = [ 'novablocks/openhours', 'core/paragraph' ];
const ANNOUNCEMENT_BAR_TEMPLATE = [ [ 'novablocks/openhours', { openHoursStyle: 'status',  } ] ];

const Edit = ( props ) => {

  const {
    clientId,
    className,
    attributes: {
      url,
      opensInNewTab,
    },
    setAttributes,
    isSelected,
  } = props;

  // Whenever the block clientId changes, update the blockId attribute.
  useEffect( () => {
    setAttributes( { blockId: clientId } );
  }, [ clientId ] );

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
