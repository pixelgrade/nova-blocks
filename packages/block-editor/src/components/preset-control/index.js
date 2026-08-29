import { __ } from '@wordpress/i18n';
import { Button, RadioControl } from '@wordpress/components';
import { Fragment, useCallback, useMemo } from '@wordpress/element';

import { useSettings } from '../../hooks';
import useRegisteredAttributeDefaults from '../../hooks/use-registered-attribute-defaults';
import { deriveActivePresetId, getPresetApplyPatch } from '../../preset-engine';
import { buildPresetDefinitions } from './build-preset-definitions';

export { buildPresetDefinitions };

const JUST_MY_STYLE = 'just-my-style';

const PresetControl = ( props ) => {

	const {
	  label,
    options,
	  randomize,
    // Opt-in only: families that pass `managedAttributes` (an explicit
    // array) run selection/apply through the Stage 3a managed-bundle
    // engine instead of the legacy per-preset key comparison below. Any
    // caller that omits it (e.g. media-composition) keeps today's exact
    // behavior — see build-preset-definitions.js for how a family derives
    // this array from its own `{ label, value, preset }` option list.
    managedAttributes,
    attributes,
    setAttributes,
    name,
	} = props;

  const novablocksSettings = useSettings();
  const debug = !! novablocksSettings?.debug;
  const registeredDefaults = useRegisteredAttributeDefaults( name );

	const randomizeAttributes = useCallback( () => {
	  if ( typeof randomize === "function" ) {
      return randomize();
    }
	  return {};
  }, [ randomize ] );

  const presetOptions = useMemo( () => {
    // Presets marked as in-development stay hidden outside debug mode.
    const presetOptions = ( Array.isArray( options ) ? options.slice() : [] )
      .filter( option => debug || option?.status !== 'development' );

    if ( typeof randomize !== "undefined" ) {

      presetOptions.push( {
        label: 'Just My Style™',
        value: JUST_MY_STYLE,
        preset: {}
      } );

    }

    return presetOptions;
  }, [ options, randomize, debug ] );

  const isManaged = Array.isArray( managedAttributes ) && managedAttributes.length > 0;

	const selectedPreset = useMemo( () => {

    if ( isManaged ) {
      // "Just My Style™" is an action (roll a fresh random bundle), not a
      // real definition — it never participates in derivation, so a
      // manual edit and a freshly-randomized bundle both honestly resolve
      // to Custom (null) instead of a stale "selected" placeholder.
      const definitions = presetOptions
        .filter( ( option ) => option.value !== JUST_MY_STYLE )
        .map( ( option ) => ( {
          id: option.value,
          managedAttributes,
          values: option.preset || {},
        } ) );

      return deriveActivePresetId( definitions, attributes, registeredDefaults );
    }

	  return getSelectedPreset( presetOptions, attributes );
  }, [ presetOptions, attributes, isManaged, managedAttributes, registeredDefaults ] );

	const onPresetChange = useCallback( preset => {

    if ( JUST_MY_STYLE === preset ) {
      setAttributes( Object.assign( {}, randomizeAttributes() ) );
      return;
    }

    if ( isManaged ) {
      const option = presetOptions.find( ( presetOption ) => presetOption.value === preset );

      const definition = {
        id: preset,
        managedAttributes,
        values: option?.preset || {},
      };

      setAttributes( getPresetApplyPatch( definition, attributes, registeredDefaults ) );
      return;
    }

    const newAttributes = getNewAttributesFromPreset( preset, presetOptions );
    setAttributes( newAttributes );

  }, [ presetOptions, isManaged, managedAttributes, attributes, registeredDefaults ] );

  // Custom state (managed families only): no radio option matches, so none
  // is shown selected; this small hint makes that intentional instead of
  // looking like a rendering glitch. Reuses the existing `nb-settings-hint`
  // style (already shipped for other Settings-tab hints) rather than adding
  // new styling surface for one label.
  const isCustom = isManaged && null === selectedPreset;

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
				isCustom &&
				<p className="nb-settings-hint" key={ 'preset-control-custom-indicator' }>
					{ __( 'Custom', '__plugin_txtd' ) }
				</p>
			}
			{
				( selectedPreset === JUST_MY_STYLE || isCustom ) &&
				typeof randomize !== 'undefined' &&
				<div key={ 'advanced-gallery-surprise-control' }>
					<Button
						variant="primary"
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
