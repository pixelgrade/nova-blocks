import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { ControlsGroup, withVisibility } from "../../../components";

const MetadataPosition = props => {

  const {
    attributes: {
      metadataPosition
    },
    setAttributes
  } = props;

  return (
    <ControlsGroup title={ __( 'Metadata Position' ) }>
      <RadioControl
        key={ 'collection-image-resizing' }
        selected={ metadataPosition }
        onChange={ metadataPosition => {
          setAttributes( { metadataPosition } )
        } }
        options={ [
          { label: 'Above Title', value: 'above-title' },
          { label: 'Below Title', value: 'below-title' },
          { label: 'Split (Above Title / Below Content)', value: 'split' },
        ] }
      />
    </ControlsGroup>
  )
};

export default withVisibility( 'metadata-position' )( MetadataPosition );
