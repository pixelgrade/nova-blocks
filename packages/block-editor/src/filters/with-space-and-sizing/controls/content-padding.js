import { RangeControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';

import { ControlsGroup } from "../../../components";

const ContentPadding = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const { contentPadding } = attributes;

  return (
    <ControlsGroup title={ __( 'Content Area Padding', '__plugin_txtd' ) }>
      <RangeControl
        value={ contentPadding }
        onChange={ contentPadding => {
          setAttributes( { contentPadding } )
        } }
        min={ 0 }
        max={ 100 }
        step={ 25 }
      />
    </ControlsGroup>
  )
}

export default ContentPadding;
