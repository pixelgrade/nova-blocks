import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const EmphasisAreaControl = props => {

  const { attributes, setAttributes } = props;
  const { emphasisArea } = attributes;

  return (
    <RangeControl
      value={ emphasisArea }
      onChange={ ( emphasisArea ) => setAttributes( { emphasisArea } ) }
      label={ __( 'Emphasis Area' ) }
      min={ 0 }
      max={ 100 }
      step={ 5 }
    />
  )
}

export default EmphasisAreaControl;
