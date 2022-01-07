import { RangeControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';

import {ControlsGroup, withVisibility} from "../../../components";

const ContentToMediaSpacing = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const { layoutGutter } = attributes;

  return (
    <ControlsGroup title={ __( 'Content to Media Spacing', '__plugin_txtd' ) }>
      <RangeControl
        value={ layoutGutter }
        onChange={ ( layoutGutter ) => setAttributes( { layoutGutter } ) }
        min={ 0 }
        max={ 100 }
        step={ 25 }
      />
    </ControlsGroup>
  )
}

export default withVisibility( 'content-to-media-spacing', false )( ContentToMediaSpacing );
