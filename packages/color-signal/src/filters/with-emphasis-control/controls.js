import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { withVisibility } from "@novablocks/block-editor";

import { ColorSignalCustomizeControls } from "../../components";

const EmphasisAreaControl = props => {

  const { attributes, setAttributes } = props;
  const { emphasisArea } = attributes;

  return (
    <ColorSignalCustomizeControls>
      <RangeControl
        value={ emphasisArea }
        onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
        label={ __( 'Emphasis Area' ) }
        min={ 0 }
        max={ 100 }
        step={ 5 }
      />
    </ColorSignalCustomizeControls>
  )
}

export default withVisibility( 'emphasis-area' )( EmphasisAreaControl );
