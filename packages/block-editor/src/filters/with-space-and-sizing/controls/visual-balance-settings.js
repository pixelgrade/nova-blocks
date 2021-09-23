import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { ControlsGroup } from "../../../components";

import {
  CONTENT_AREA_MIN_WIDTH,
  CONTENT_AREA_MAX_WIDTH,
  CONTENT_AREA_MID_VALUE
} from './visual-balance-constants';

const VisualBalanceSettings = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    contentAreaWidth,
    layoutGutter,

    imagePadding,
    contentPadding,
  } = attributes;

  return (
    <ControlsGroup key={ 'visual-balance' } title={ __( 'Content to Media Visual Balance' ) }>
      <RangeControl
        value={ contentAreaWidth }
        onChange={ ( contentAreaWidth ) => setAttributes( { contentAreaWidth } ) }
        label={ __( 'Content Width relative to Media Area' ) }
        min={ CONTENT_AREA_MIN_WIDTH }
        max={ CONTENT_AREA_MAX_WIDTH }
        step={ 5 }
      />
      <RangeControl
        label={ __( 'Content Area Padding', '__plugin_txtd' ) }
        value={ contentPadding }
        onChange={ contentPadding => {
          setAttributes( { contentPadding } )
        } }
        min={ 0 }
        max={ 100 }
        step={ 25 }
      />
      <RangeControl
        label={ __( 'Media Area Padding', '__plugin_txtd' ) }
        value={ imagePadding }
        onChange={ imagePadding => {
          setAttributes( { imagePadding } )
        } }
        min={ 0 }
        max={ 100 }
        step={ 25 }
      />
      <RangeControl
        label={ __( 'Content to Media Spacing / Layout Gutter', '__plugin_txtd' ) }
        value={ layoutGutter }
        onChange={ ( layoutGutter ) => setAttributes( { layoutGutter } ) }
        min={ 0 }
        max={ 100 }
        step={ 25 }
      />
    </ControlsGroup>
  )
}

export default VisualBalanceSettings;
