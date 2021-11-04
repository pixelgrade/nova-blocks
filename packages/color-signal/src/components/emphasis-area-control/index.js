import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { ControlsGroup, withVisibility } from "@novablocks/block-editor";

const EmphasisAreaControl = props => {

  const { attributes, setAttributes } = props;
  const { emphasisArea } = attributes;

  return (
    <ControlsGroup>
      <RangeControl
        value={ emphasisArea }
        onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
        label={ __( 'Emphasis Area' ) }
        min={ 0 }
        max={ 100 }
        step={ 5 }
      />
    </ControlsGroup>
  )
}

export default withVisibility( 'emphasis-area' )( EmphasisAreaControl );
