import { RangeControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';

import {
  ControlsGroup,
  withVisibility
} from "../../../components";
import { useSupports } from "../../../hooks";

const {
  isContentPaddingControlVisible,
} = require( './is-content-padding-control-visible' );

const ContentPadding = props => {

  const {
    attributes,
    setAttributes,
    name
  } = props;

  const { contentPadding } = attributes;

  const supports = useSupports( name );

  // Group and Columns opt out via spaceAndSizing.contentPadding: false —
  // the control is a confirmed no-op there (see
  // is-content-padding-control-visible.js for the full rationale). This
  // only gates the control's render; the contentPadding attribute stays
  // registered and save output is untouched.
  if ( ! isContentPaddingControlVisible( supports?.novaBlocks?.spaceAndSizing ) ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Content Area Padding', '__plugin_txtd' ) }>
      <RangeControl
        value={ contentPadding }
        onChange={ contentPadding => {
          setAttributes( { contentPadding } )
        } }
        min={ 0 }
        max={ 100 }
        step={ 10 }
      />
    </ControlsGroup>
  )
};

export default withVisibility( 'content-padding', false )( ContentPadding );
