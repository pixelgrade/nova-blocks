import { RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const PileParallaxControls = ( { attributes, setAttributes } ) => {
  const { pileParallaxAmount } = attributes;

  return (
    <RangeControl
      label={ __( 'Parallax Scrolling', '__plugin_txtd' ) }
      value={ pileParallaxAmount }
      onChange={ ( value ) => setAttributes( { pileParallaxAmount: value } ) }
      min={ 0 }
      max={ 120 }
      step={ 6 }
    />
  );
};

export default PileParallaxControls;
