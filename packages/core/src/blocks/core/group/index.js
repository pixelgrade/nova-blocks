/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { select } from "@wordpress/data";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";

import { getColorSignalClassnames, getSpacingCSSProps } from "@novablocks/utils";

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/group' ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      ...settings.supports,
      align: [ "left", "right", "wide", "full" ],
      novaBlocks: {
        colorSignal: {
          attributes: true,
          controls: true,
          functionalColors: true,
          paletteClassname: true,
          paletteVariationClassname: true,
          colorSignalClassname: true,
        },
        // Boolean-true-equivalent object (attributes + controls both on),
        // plus the Stage 1 opt-out for the "Content Area Padding" control:
        // --nb-card-content-padding-multiplier has no CSS consumer on
        // Group (only supernova's _card.scss and contextual-post-card's
        // style.scss read it) — see
        // with-space-and-sizing/controls/is-content-padding-control-visible.js.
        // The contentPadding attribute itself stays registered; only the
        // control's render is gated.
        spaceAndSizing: {
          attributes: true,
          controls: true,
          contentPadding: false,
        },
      }
    },
  };
};

addFilter( 'blocks.registerBlockType', 'novablocks/group/settings-add-nb-support', addNovaBlocksSupport, 1 );
