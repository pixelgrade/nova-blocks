/**
 * PresetCardsControl — a visual card-grid preset picker.
 *
 * The card sibling of PresetControl: same bundle-application and
 * selection-detection contract (exact attribute match), presented as
 * thumbnail cards instead of a text radio. Used by the Collection Layout
 * Composition tab and the Motion & Effects recipes tab.
 *
 * Presets are whole bundles: `resets` is merged UNDER each preset on apply,
 * so applying one preset clears the attributes another family of presets may
 * have set (e.g. picking a layout preset resets stacked depth unless the
 * preset itself sets it).
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useCallback, useMemo } from '@wordpress/element';

import { useSettings } from '../../hooks';
import { getSelectedPreset } from '../preset-control';
import { JustMyStyleThumb } from './thumbnails';

const JUST_MY_STYLE = 'just-my-style';

const PresetCardsControl = ( props ) => {
  const {
    label,
    options,
    randomize,
    resets,
    attributes,
    setAttributes,
  } = props;

  const novablocksSettings = useSettings();
  const debug = !! novablocksSettings?.debug;

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

  const selectedPreset = useMemo(
    () => getSelectedPreset( presetOptions, attributes ),
    [ presetOptions, attributes ]
  );

  const applyPreset = useCallback( ( option ) => {
    if ( JUST_MY_STYLE === option.value ) {
      setAttributes( Object.assign( {}, resets, randomize() ) );
      return;
    }

    setAttributes( Object.assign( {}, resets, option.preset ) );
  }, [ resets, randomize, setAttributes ] );

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
