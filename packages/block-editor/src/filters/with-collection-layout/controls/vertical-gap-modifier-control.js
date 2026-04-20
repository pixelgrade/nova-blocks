import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const VerticalGapModifierControl = ( props ) => {

  const {
    attributes: {
      verticalGapModifier,
    },
    setAttributes,
  } = props;

  return (
    <RangeControl
      value={ verticalGapModifier }
      onChange={ ( nextVerticalGapModifier ) => {
        setAttributes( { verticalGapModifier: nextVerticalGapModifier } );
      } }
      label={ __( 'Vertical Gap Modifier', '__plugin_txtd' ) }
      min={ 0.5 }
      max={ 2 }
      step={ 0.5 }
    />
  )
};

export default VerticalGapModifierControl;
