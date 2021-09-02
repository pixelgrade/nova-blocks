import { __ } from "@wordpress/i18n";
import { RangeControl, ToggleControl } from "@wordpress/components";

import { getControlsDirtyClasses } from "@novablocks/utils";
import { ControlsGroup } from "@novablocks/block-editor";

const ShapePropsControls = props => {

  const {
    attributes,
    setAttributes,

    enableAttribute,
    prefix,
    groupTitle,
    toggleLabel
  } = props;

  const enabled = attributes[ enableAttribute ];

  if ( ! enabled ) {
    return null;
  }

  const isPatternSeedDisabled = attributes[ `${ prefix }Complexity` ] === 0;
  const isSidesDisabled = attributes[ `${ prefix }Complexity` ] === 0 && attributes[ `${ prefix }Smoothness` ] === 100;
  const isRotationDisabled = attributes[ `${ prefix }Complexity` ] === 0 && attributes[ `${ prefix }Smoothness` ] === 100;

  return (
    <ControlsGroup title={ groupTitle }>
      <ToggleControl
        label={ toggleLabel }
        checked={ enabled }
        onChange={ () => setAttributes( { [ enableAttribute ]: ! enabled } ) }
      />
      <div className={ getControlsDirtyClasses( isSidesDisabled ) }>
        <RangeControl
          value={ attributes[ `${ prefix }Sides` ] }
          onChange={ ( sides ) => {
            const newAttributes = {};
            newAttributes[ `${ prefix }Sides` ] = sides;
            setAttributes( newAttributes );
          } }
          label={ __( 'Sides' ) }
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
          label={ __( 'Pattern Seed' ) }
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
        label={ __( 'Variation' ) }
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
        label={ __( 'Smoothness' ) }
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
          label={ __( 'Rotation' ) }
          min={ 0 }
          max={ 100 }
          step={ 10 }
        />
      </div>
    </ControlsGroup>
  );
};

export default ShapePropsControls;
