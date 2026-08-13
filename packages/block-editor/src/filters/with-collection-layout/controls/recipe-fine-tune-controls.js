import { RadioControl, RangeControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import { ControlsGroup } from '../../../components';

const getControlValue = ( attributes, recipe, attribute ) => (
  undefined !== attributes?.[ attribute ]
    ? attributes[ attribute ]
    : recipe?.defaults?.[ attribute ]
);

const getRadioValue = ( options, rawValue ) => {
  const option = options.find( candidate => String( candidate.value ) === String( rawValue ) );

  return option ? option.value : rawValue;
};

const RecipeFineTuneControl = ( {
  attributes,
  control,
  recipe,
  setAttributes,
} ) => {
  const value = getControlValue( attributes, recipe, control.attribute );

  if ( 'range' === control.type ) {
    return (
      <RangeControl
        help={ control.help || undefined }
        label={ control.label }
        max={ control.max }
        min={ control.min }
        onChange={ nextValue => {
          if ( undefined !== nextValue ) {
            setAttributes( { [ control.attribute ]: nextValue } );
          }
        } }
        step={ control.step }
        value={ value }
      />
    );
  }

  if ( 'radio' === control.type ) {
    const options = control.options.map( option => ( {
      ...option,
      value: String( option.value ),
    } ) );

    return (
      <RadioControl
        help={ control.help || undefined }
        label={ control.label }
        onChange={ nextValue => {
          setAttributes( {
            [ control.attribute ]: getRadioValue( control.options, nextValue ),
          } );
        } }
        options={ options }
        selected={ String( value ) }
      />
    );
  }

  return null;
};

const RecipeFineTuneControls = ( props ) => {
  const { attributes, recipe, setAttributes } = props;

  return (
    <Fragment>
      { recipe.fineTune.map( ( group, groupIndex ) => (
        <ControlsGroup key={ `${ group.label }-${ groupIndex }` } title={ group.label }>
          { group.controls.map( control => (
            <RecipeFineTuneControl
              attributes={ attributes }
              control={ control }
              key={ control.attribute }
              recipe={ recipe }
              setAttributes={ setAttributes }
            />
          ) ) }
        </ControlsGroup>
      ) ) }
    </Fragment>
  );
};

export { getControlValue, getRadioValue };
export default RecipeFineTuneControls;
