import classnames from 'classnames';

import { Fragment, useEffect } from "@wordpress/element";
import { InnerBlocks, URLInput } from "@wordpress/block-editor";
import { BaseControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const ALLOWED_BLOCKS = [ 'novablocks/openhours', 'core/paragraph' ];
const ANNOUNCEMENT_BAR_TEMPLATE = [ [ 'novablocks/openhours', { openHoursStyle: 'status',  } ] ];

const withControlsVisibility = OriginalComponent => {

  return props => {

    const { setControlsVisibility } = props;

    useEffect( () => {
      setControlsVisibility( {
        'emphasis-area': false,
      } );
    }, [] );

    return <OriginalComponent { ...props } />
  }
}

const Edit = ( props ) => {

  const {
    className,
    attributes: {
      url,
      opensInNewTab,
    },
    setAttributes,
    isSelected,
  } = props;


  const classNames = classnames(
    className,
    'novablocks-announcement-bar',
  );

  return (
    <Fragment>
      <div className={ classNames }>
        <InnerBlocks
          allowedBlocks={ ALLOWED_BLOCKS }
          template={ ANNOUNCEMENT_BAR_TEMPLATE }
        />
      </div>
      { isSelected &&
        <div className="novablocks-announcement-bar__url-field-wrapper">
          <BaseControl
            label={ __( 'Add a link to make the whole Announcement Bar clickable.', '__plugin_txtd' ) }
            className="wp-block-button__inline-link">
            <URLInput
              className="wp-block-button__inline-link-input"
              value={ url }
              autoFocus={ false }
              onChange={ ( value ) => setAttributes( { url: value } ) }
              disableSuggestions={ ! isSelected }
              isFullWidth
              hasBorder
            />
          </BaseControl>
          <ToggleControl
            checked={ opensInNewTab }
            onChange={ ( opensInNewTab ) => {
              setAttributes( { opensInNewTab } );
            } }
            label={ __( 'Open in new tab', '__plugin_txtd' ) }
          />
        </div> }

    </Fragment>
  )
}

export default withControlsVisibility( Edit );
