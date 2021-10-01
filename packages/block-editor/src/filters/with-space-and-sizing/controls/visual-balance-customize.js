import { __ } from "@wordpress/i18n";
import { RadioControl, RangeControl } from "@wordpress/components";

import { getControlsClasses } from "@novablocks/utils";

import { ControlsGroup, withVisibility } from "../../../components";

import {
  CONTENT_AREA_MIN_WIDTH,
  CONTENT_AREA_MAX_WIDTH,
  CONTENT_AREA_MID_VALUE
} from './visual-balance-constants';

const VisualBalanceCustomize = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    balanceEmphasis,
    balanceFocalPoint,
  } = attributes;

  return (
    <ControlsGroup title={ __( 'Emphasis by Balance' ) } key={ 'media-card-visual-balance-customize-1' }>
      <div className={ getControlsClasses( attributes, getBalanceAttributes ) }>
        <RangeControl
          value={ balanceEmphasis }
          onChange={ ( balanceEmphasis ) => {
            setAttributes( getBalanceAttributes( { ...attributes, balanceEmphasis } ) );
          } }
          min={ 0 }
          max={ 100 }
          step={ 25 }
        />
        <RadioControl
          label={ __( 'Focal Point', '__plugin_txtd' ) }
          selected={ balanceFocalPoint }
          onChange={ ( balanceFocalPoint ) => {
            setAttributes( getBalanceAttributes( { ...attributes, balanceFocalPoint } ) );
          } }
          options={ [
            { label: __( 'Content Area' ), value: 'content' },
            { label: __( 'Media / Gallery' ), value: 'media' },
          ] }
        />
      </div>
    </ControlsGroup>
  )
}

const getBalanceAttributes = ( { balanceEmphasis, balanceFocalPoint } ) => {
  const width = balanceEmphasis * ( CONTENT_AREA_MAX_WIDTH - CONTENT_AREA_MID_VALUE ) / 100 + CONTENT_AREA_MID_VALUE;
  const contentAreaWidth = 'content' === balanceFocalPoint ? width : 100 - width;

  return {
    balanceEmphasis,
    balanceFocalPoint,
    contentAreaWidth,
  }
};

export default withVisibility( 'visual-balance' )( VisualBalanceCustomize );
