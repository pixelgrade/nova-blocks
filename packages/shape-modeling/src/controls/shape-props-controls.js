import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { RangeControl, ToggleControl } from "@wordpress/components";

import { getControlsDirtyClasses } from "@novablocks/utils";
import { ControlsGroup } from "@novablocks/block-editor";

const ShapeControls = props => {

  const { groupTitle } = props;

  return (
    <ControlsGroup title={ groupTitle }>
      <ShapePropsToggle { ...props } />
      <ShapePropsControls { ...props } />
    </ControlsGroup>
  );
};

const ShapePropsToggle = props => {

  const {
    attributes,
    setAttributes,
    enableAttribute,
    toggleLabel
  } = props;

  const enabled = attributes[ enableAttribute ];

  return (
    <ToggleControl
      label={ toggleLabel }
      checked={ enabled }
      onChange={ () => setAttributes( { [ enableAttribute ]: !enabled } ) }
    />
  )
};

const ShapePropsControls = props => {

  const {
    attributes,
    setAttributes,
    enableAttribute,
    prefix,
  } = props;

  const isPatternSeedDisabled = attributes[ `${ prefix }Complexity` ] === 0;
  const isSidesDisabled = attributes[ `${ prefix }Complexity` ] === 0 && attributes[ `${ prefix }Smoothness` ] === 100;
  const isRotationDisabled = attributes[ `${ prefix }Complexity` ] === 0 && attributes[ `${ prefix }Smoothness` ] === 100;

  const enabled = attributes[ enableAttribute ];

  if ( ! enabled ) {
    return null;
  }

  return (
    <Fragment>
      <div className={ getControlsDirtyClasses( isSidesDisabled ) }>
        <RangeControl
          value={ attributes[ `${ prefix }Sides` ] }
          onChange={ ( sides ) => {
            const newAttributes = {};
            newAttributes[ `${ prefix }Sides` ] = sides;
            setAttributes( newAttributes );
          } }
          label={ __( 'Sides', '__plugin_txtd' ) }
          min={ 3 }
          max={ 8 }
          step={ 1 }
        />
      </div>
      <div className={ getControlsDirtyClasses( isPatternSeedDisabled ) }>
        <RangeControl
          value={ attributes[ `${ prefix }PatternSeed` ] }
          onChange={ ( preset ) => {
            const newAttributes = {};
            newAttributes[ `${ prefix }PatternSeed` ] = preset;
            setAttributes( newAttributes );
          } }
          label={ __( 'Pattern Seed', '__plugin_txtd' ) }
          min={ 0 }
          max={ 100 }
          step={ 10 }
        />
      </div>
      <RangeControl
        value={ attributes[ `${ prefix }Complexity` ] }
        onChange={ ( complexity ) => {
          const newAttributes = {};
          newAttributes[ `${ prefix }Complexity` ] = complexity;
          setAttributes( newAttributes );
        } }
        label={ __( 'Variation', '__plugin_txtd' ) }
        min={ 0 }
        max={ 100 }
        step={ 10 }
      />
      <RangeControl
        value={ attributes[ `${ prefix }Smoothness` ] }
        onChange={ ( smoothness ) => {
          const newAttributes = {};
          newAttributes[ `${ prefix }Smoothness` ] = smoothness;
          setAttributes( newAttributes );
        } }
        label={ __( 'Smoothness', '__plugin_txtd' ) }
        min={ 0 }
        max={ 100 }
        step={ 10 }
      />
      <div className={ getControlsDirtyClasses( isRotationDisabled ) }>
        <RangeControl
          value={ attributes[ `${ prefix }Rotation` ] }
          onChange={ ( rotation ) => {
            const newAttributes = {};
            newAttributes[ `${ prefix }Rotation` ] = rotation;
            setAttributes( newAttributes );
          } }
          label={ __( 'Rotation', '__plugin_txtd' ) }
          min={ 0 }
          max={ 100 }
          step={ 10 }
        />
      </div>
    </Fragment>
  )
};

export default ShapeControls;
