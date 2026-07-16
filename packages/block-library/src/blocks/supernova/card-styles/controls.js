/**
 * Card Styles — the supernova-only tile section (Stage 3a Phase 3).
 *
 * Rendered from supernova's edit alongside its other inspector sections.
 * `order: 5` places it at the top of the drawer (the list sorts ascending
 * with default 100; Color Signal is 10). One PresetCardsControl in managed
 * mode: one setAttributes patch per click, derived selection, the standard
 * Custom hint. No Plus gate: both motion-bearing tiles use plain parallax,
 * which is explicitly free (lib/plus-gating.php — only `doppler` is gated).
 *
 * Known, out-of-scope caveat: on supernova every setAttributes fans out to
 * per-child updateBlockAttributes dispatches (withSetChildrenAttributes), so
 * one-step undo is not guaranteed by the engine alone on this block.
 */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import {
  ControlsSection,
  ControlsTab,
  PresetCardsControl,
} from '@novablocks/block-editor';
import { getParentVariation } from '@novablocks/color-signal';

import CardStyleThumb from './card-style-thumb';
import {
  buildCardStyleOptions,
  CARD_STYLE_MANAGED_ATTRIBUTES,
  CARD_STYLE_TILES,
} from './definitions';

const CardStyleControls = ( props ) => {
  const { clientId } = props;

  // Through useSelect so tile selection re-derives when a parent's variation
  // changes; getParentVariation alone reads the store non-reactively.
  const referenceVariation = useSelect( () => getParentVariation( clientId ), [ clientId ] );

  // Memoized on the palettes payload reference so thumbnails and resolved
  // duotone/signal values repaint when a fresh payload arrives.
  const colorsConfig = window.styleManager?.colorsConfig;
  const options = useMemo( () => {
    return buildCardStyleOptions( CARD_STYLE_TILES, referenceVariation ).map( ( option ) => ( {
      ...option,
      thumbnail: (
        <CardStyleThumb
          palette={ option.palette }
          variation={ option.variation }
          cardLayout={ option.cardLayout }
          treatment={ option.treatment }
        />
      ),
    } ) );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ referenceVariation, colorsConfig ] );

  return (
    <ControlsSection id={ 'card-styles' } label={ __( 'Card Styles', '__plugin_txtd' ) } order={ 5 }>
      <ControlsTab label={ __( 'Presets', '__plugin_txtd' ) }>
        <PresetCardsControl
          key={ 'card-style-presets' }
          label={ __( 'Card style presets', '__plugin_txtd' ) }
          options={ options }
          managedAttributes={ CARD_STYLE_MANAGED_ATTRIBUTES }
          { ...props }
        />
      </ControlsTab>
    </ControlsSection>
  );
};

export default CardStyleControls;
