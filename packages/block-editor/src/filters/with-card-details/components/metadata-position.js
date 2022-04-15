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
    <ControlsGroup title={ __( 'Metadata Position', '__plugin_txtd' ) }>
      <RadioControl
        key={ 'collection-image-resizing' }
        selected={ metadataPosition }
        onChange={ metadataPosition => {
          setAttributes( { metadataPosition } )
        } }
        options={ [
          { label: __( 'Above Title', '__plugin_txtd' ), value: 'above-title' },
          { label: __( 'Below Title', '__plugin_txtd' ), value: 'below-title' },
          { label: __( 'Split (Above Title / Below Content)', '__plugin_txtd' ), value: 'split' },
        ] }
      />
    </ControlsGroup>
  )
};

export default withVisibility( 'metadata-position' )( MetadataPosition );
