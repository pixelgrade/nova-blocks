import { RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import { PlusBadge } from "../../../components";

const PileParallaxControls = ( { attributes, setAttributes } ) => {
  const { pileParallaxAmount } = attributes;

  return (
    <RangeControl
      label={ <>{ __( 'Parallax Scrolling', '__plugin_txtd' ) }<PlusBadge gateId={ 'pile-parallax' } /></> }
      value={ pileParallaxAmount }
      onChange={ ( value ) => setAttributes( { pileParallaxAmount: value } ) }
      min={ 0 }
      max={ 120 }
      step={ 6 }
    />
  );
};

export default PileParallaxControls;
