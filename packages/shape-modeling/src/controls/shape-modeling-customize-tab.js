import { __ } from "@wordpress/i18n";
import { RadioControl } from "@wordpress/components";

import { ControlsTab } from "@novablocks/block-editor";
import { getControlsClasses } from "@novablocks/utils";

import ShapeSwapButton from "./shape-swap-button";

const shapeMixStyleOptions = [ {
  label: 'None',
  value: 'none',
}, {
  label: 'Media Shape',
  value: 'shape-mask',
}, {
  label: 'Decorative Shape',
  value: 'mixing-1',
}, {
  label: 'Shape Mixing',
  value: 'mixing-2',
  attributes: {
    blobsEnableMask: true,
    blobsEnableDecoration: true,
    blobsHorizontalDisplacement: 30,
    blobsVerticalDisplacement: 50,
    blobsSizeBalance: 50,
  }
}, {
  label: 'Shape Mixing ALT',
  value: 'mixing-3',
  attributes: {
    blobsEnableMask: true,
    blobsEnableDecoration: true,
    blobsHorizontalDisplacement: 70,
    blobsVerticalDisplacement: 50,
    blobsSizeBalance: 50,
  }
} ];

const getShapeStyleAttributes = ( attributes ) => {
  const { blobsMixStyle } = attributes;
  let newAttributes = attributes;

  if ( 'none' === blobsMixStyle ) {
    newAttributes = {
      blobsEnableMask: false,
      blobsEnableDecoration: false,
    }
  }

  if ( 'shape-mask' === blobsMixStyle ) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: false,
    }
  }

  if ( 'mixing-1' === blobsMixStyle ) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: true,
      blobsHorizontalDisplacement: 70,
      blobsVerticalDisplacement: 30,
      blobsSizeBalance: 50,
    }
  }

  if ( 'mixing-2' === blobsMixStyle ) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: true,
      blobsHorizontalDisplacement: 30,
      blobsVerticalDisplacement: 50,
      blobsSizeBalance: 50,
    }
  }

  if ( 'mixing-3' === blobsMixStyle ) {
    newAttributes = {
      blobsEnableMask: true,
      blobsEnableDecoration: true,
      blobsHorizontalDisplacement: 70,
      blobsVerticalDisplacement: 50,
      blobsSizeBalance: 50,
    }
  }

  return {
    ...attributes,
    ...newAttributes
  };
};

const ShapeModelingCustomizeTab = props => {

  const {
    attributes,
    setAttributes
  } = props;

  const {
    blobsMixStyle
  } = attributes;

  return (
    <ControlsTab label={ __( 'Customize', '__plugin_txtd' ) }>
      <div className={ getControlsClasses( attributes, getShapeStyleAttributes ) }>
        <RadioControl
          key={ 'blobs-mixing-style' }
          label={ 'Shape Usage Style', '__plugin_txtd' }
          selected={ blobsMixStyle }
          onChange={ blobsMixStyle => {
            setAttributes( getShapeStyleAttributes( { ...attributes, blobsMixStyle } ) );
          } }
          options={ shapeMixStyleOptions }
        />
      </div>
      <ShapeSwapButton { ...props } />
    </ControlsTab>
  )
};

export default ShapeModelingCustomizeTab;
