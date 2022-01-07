import { RangeControl } from "@wordpress/components";
import { __ } from '@wordpress/i18n';

import { ControlsGroup } from "../../../components";
import withVisibility from "../../../components/with-visibility";

import {
  CONTENT_AREA_MIN_WIDTH,
  CONTENT_AREA_MAX_WIDTH,
} from './visual-balance-constants';

const VisualBalance = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const { contentAreaWidth } = attributes;

  return (
    <ControlsGroup title={ __( 'Content Width relative to Media Area', '__plugin_txtd' ) }>
      <RangeControl
        value={ contentAreaWidth }
        onChange={ ( contentAreaWidth ) => setAttributes( { contentAreaWidth } ) }
        min={ CONTENT_AREA_MIN_WIDTH }
        max={ CONTENT_AREA_MAX_WIDTH }
        step={ 5 }
      />
    </ControlsGroup>
  )
}

export default withVisibility( 'visual-balance', false )( VisualBalance );
