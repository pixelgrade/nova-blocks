import { ControlsGroup } from "@novablocks/block-editor";
import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const ShapeScalingControls = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    blobsEnableDecoration,
    blobsHorizontalDisplacement,
    blobsVerticalDisplacement,
    blobsSizeBalance
  } = attributes;

  if ( ! blobsEnableDecoration ) {
    return null;
  }

  return (
    <ControlsGroup title={ __( 'Scaling' ) }>
      <RangeControl
        value={ blobsHorizontalDisplacement }
        onChange={ ( blobsHorizontalDisplacement ) => { setAttributes( { blobsHorizontalDisplacement } ) } }
        label={ __( 'Horizontal Displacement' ) }
        min={ 0 }
        max={ 100 }
        step={ 5 }
      />
      <RangeControl
        value={ blobsVerticalDisplacement }
        onChange={ ( blobsVerticalDisplacement ) => { setAttributes( { blobsVerticalDisplacement } ) } }
        label={ __( 'Vertical Displacement' ) }
        min={ 0 }
        max={ 100 }
        step={ 5 }
      />
      <RangeControl
        value={ blobsSizeBalance }
        onChange={ ( blobsSizeBalance ) => { setAttributes( { blobsSizeBalance } ) } }
        label={ __( 'Size Balance' ) }
        min={ 20 }
        max={ 80 }
        step={ 5 }
      />
    </ControlsGroup>
  )
}

export default ShapeScalingControls;
