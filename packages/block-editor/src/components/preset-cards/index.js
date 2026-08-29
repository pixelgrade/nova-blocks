/**
 * PresetCardsControl — a visual card-grid preset picker.
 *
 * The card sibling of PresetControl, presented as thumbnail cards instead of
 * a text radio. Used by the Collection Layout Composition tab and the
 * Motion & Effects recipes tab. Two modes, exactly like PresetControl:
 *
 * - Managed mode (opt-in via the `managedAttributes` prop): selection and
 *   apply run through the Stage 3a managed-bundle preset engine — one
 *   setAttributes patch that writes the recipe's values and clears every
 *   managed attribute it omits, plus a derived Custom state. Used by the
 *   Motion & Effects recipes tab.
 *
 * - Legacy mode (no `managedAttributes`): presets are whole bundles and
 *   `resets` is merged UNDER each preset on apply, so applying one preset
 *   clears the attributes another family of presets may have set (e.g.
 *   picking a layout preset resets stacked depth unless the preset itself
 *   sets it). Selection is the historical exact-key match. Used by the
 *   Collection Layout Composition tab (not yet migrated).
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useCallback, useMemo } from '@wordpress/element';

import { useSettings } from '../../hooks';
import useRegisteredAttributeDefaults from '../../hooks/use-registered-attribute-defaults';
import { deriveActivePresetId, getPresetApplyPatch } from '../../preset-engine';
import { getSelectedPreset } from '../preset-control';
import { JustMyStyleThumb } from './thumbnails';

const JUST_MY_STYLE = 'just-my-style';

const PresetCardsControl = ( props ) => {
  const {
    label,
    options,
    randomize,
    resets,
    // Opt-in only, mirroring PresetControl: callers that pass an explicit
    // `managedAttributes` array run selection/apply through the Stage 3a
    // managed-bundle engine; callers that omit it (the Collection Layout
    // Composition tab today) keep the legacy resets-merge behavior
    // byte-for-byte. In managed mode `resets` is ignored for preset clicks —
    // the engine's managed clears subsume it ("Just My Style™" keeps it,
    // since randomize is an action outside the definitions).
    managedAttributes,
    // Families that render SEVERAL PresetCardsControl instances for one
    // managed family (Motion & Effects: free/cinematic/depth groups) set
    // this and render one shared Custom hint themselves, instead of one
    // hint per card group.
    hideCustomHint,
    attributes,
    setAttributes,
    name,
  } = props;

  const novablocksSettings = useSettings();
  const debug = !! novablocksSettings?.debug;
  const registeredDefaults = useRegisteredAttributeDefaults( name );

  const isManaged = Array.isArray( managedAttributes ) && managedAttributes.length > 0;

  const presetOptions = useMemo( () => {
    // Presets marked as in-development stay hidden outside debug mode.
    const presetOptions = ( Array.isArray( options ) ? options.slice() : [] )
      .filter( ( option ) => debug || option?.status !== 'development' );

    if ( typeof randomize === 'function' ) {
      presetOptions.push( {
        label: __( 'Just My Style™', '__plugin_txtd' ),
        sub: __( 'Your own mix', '__plugin_txtd' ),
        value: JUST_MY_STYLE,
        preset: {},
        thumbnail: <JustMyStyleThumb />,
      } );
    }

    return presetOptions;
  }, [ options, randomize, debug ] );

  const selectedPreset = useMemo( () => {
    if ( isManaged ) {
      // "Just My Style™" is a randomize action, not a definition — it never
      // participates in derivation (see PresetControl for the rationale).
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

  const applyPreset = useCallback( ( option ) => {
    if ( JUST_MY_STYLE === option.value ) {
      setAttributes( Object.assign( {}, resets, randomize() ) );
      return;
    }

    if ( isManaged ) {
      setAttributes( getPresetApplyPatch( {
        id: option.value,
        managedAttributes,
        values: option.preset || {},
      }, attributes, registeredDefaults ) );
      return;
    }

    setAttributes( Object.assign( {}, resets, option.preset ) );
  }, [ resets, randomize, setAttributes, isManaged, managedAttributes, attributes, registeredDefaults ] );

  // Custom state (managed families only) — same minimal pattern as
  // PresetControl: no card is selected, plus a small reused
  // `nb-settings-hint` label unless the caller renders a shared one.
  const isCustom = isManaged && null === selectedPreset;

  return (
    <div className="nb-preset-cards">
      { !! label && <span className="nb-preset-cards__label">{ label }</span> }
      <div className="nb-preset-cards__grid" role="group" aria-label={ label }>
        { presetOptions.map( ( option ) => {
          const isSelected = selectedPreset === option.value;

          return (
            <button
              type="button"
              key={ option.value }
              className={ 'nb-preset-card' + ( isSelected ? ' is-selected' : '' ) }
              aria-pressed={ isSelected }
              onClick={ () => applyPreset( option ) }
            >
              { option.thumbnail }
              <span className="nb-preset-card__name">{ option.label }</span>
              { !! option.sub && <span className="nb-preset-card__sub">{ option.sub }</span> }
            </button>
          );
        } ) }
      </div>
      { isCustom && ! hideCustomHint && (
        <p className="nb-settings-hint">{ __( 'Custom', '__plugin_txtd' ) }</p>
      ) }
      { typeof randomize === 'function' && selectedPreset === JUST_MY_STYLE && (
        <Button
          variant="primary"
          className="nb-preset-cards__randomize"
          onClick={ () => setAttributes( Object.assign( {}, resets, randomize() ) ) }
        >
          { __( '💡 Surprise me!', '__plugin_txtd' ) }
        </Button>
      ) }
    </div>
  );
};

export default PresetCardsControl;
