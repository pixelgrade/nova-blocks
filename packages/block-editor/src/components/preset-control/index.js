import { __ } from '@wordpress/i18n';
import { Button, RadioControl } from '@wordpress/components';
import { Fragment, useCallback, useMemo } from '@wordpress/element';

const PresetControl = ( props ) => {

	const {
	  label,
    options,
	  randomize,
    attributes,
    setAttributes,
	} = props;

	const randomizeAttributes = useCallback( () => {
	  if ( typeof randomize === "function" ) {
      return randomize();
    }
	  return {};
  }, [ randomize ] );

  const presetOptions = useMemo( () => {
    const presetOptions = Array.isArray( options ) ? options.slice() : [];

    if ( typeof randomize !== "undefined" ) {

      presetOptions.push( {
        label: 'Just My Style™',
        value: 'just-my-style',
        preset: {}
      } );

    }

    return presetOptions;
  }, [ options, randomize ] );

	const selectedPreset = useMemo( () => {
	  return getSelectedPreset( presetOptions, attributes );
  }, [ presetOptions, attributes ] );

	const onPresetChange = useCallback( preset => {

    if ( 'just-my-style' === preset ) {
      setAttributes( Object.assign( {}, randomizeAttributes() ) );
      return;
    }

    const newAttributes = getNewAttributesFromPreset( preset, presetOptions );
    setAttributes( newAttributes );

  }, [ presetOptions ] );

	return (
		<Fragment>
			<RadioControl
        label={ label }
				options={ presetOptions.map( option => {
				  return {
            label: option.label,
            value: option.value
          }
        } ) }
				selected={ selectedPreset }
				onChange={ onPresetChange }
			/>
			{
				selectedPreset === 'just-my-style' &&
				<div key={ 'advanced-gallery-surprise-control' }>
					<Button
						isPrimary
						onClick={ () => {
							setAttributes( randomizeAttributes() )
						} }>
						{ __( '💡 Surprise me!', '__plugin_txtd' ) }
					</Button>
				</div>
			}
		</Fragment>
	);
};

export const getNewAttributesFromPreset = ( preset, presets ) => {
	let newAttributes = {};
	let newOption = presets.find( option => preset === option.value );

	if ( newOption && newOption.preset ) {
		newAttributes = Object.assign( newOption.preset, newAttributes );
	}

	return newAttributes;
};

export const getSelectedPreset = ( presetOptions, attributes ) => {
	const activePresets = presetOptions.filter( presetOption => {
		const { preset } = presetOption;

		return Object.keys( preset ).every( key => {
			return preset[key] === attributes[key];
		} );
	} );

	if ( activePresets.length ) {
		return activePresets[0].value;
	}

	return null;
};

export default PresetControl;
