import { __ } from "@wordpress/i18n";
import { ToggleControl } from '@wordpress/components';

import { ControlsGroup } from "../../../../components";

const MiscellaneousParametersControls = ( props ) => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    boostfeature,
    subfeature,
    balancemdandiw,
    flipcolsrows,
  } = attributes;

  return (
    <ControlsGroup title={ __( 'Miscellanous Parameters' ) }>
      <ToggleControl
        label={ __( 'Boost Featured Area Emphasis', '__plugin_txtd' ) }
        checked={ boostfeature }
        onChange={ () => {
          setAttributes( { boostfeature: ! boostfeature } )
        } }
      />
      <ToggleControl
        label={ __( 'Display Sub-featured Area', '__plugin_txtd' ) }
        checked={ subfeature }
        onChange={ () => {
          setAttributes( { subfeature: ! subfeature } )
        } }
      />
      <ToggleControl
        label={ __( 'Balance Meta and Image', '__plugin_txtd' ) }
        checked={ balancemdandiw }
        onChange={ () => {
          setAttributes( { balancemdandiw: ! balancemdandiw } )
        } }
      />
      <ToggleControl
        label={ __( 'Flip Cols and Rows', '__plugin_txtd' ) }
        checked={ flipcolsrows }
        onChange={ () => {
          setAttributes( { flipcolsrows: ! flipcolsrows } )
        } }
      />
    </ControlsGroup>
  )
};

export default MiscellaneousParametersControls;
