import classnames from "classnames";
import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { getColorSignalClassnames, getSpacingCSSProps } from "@novablocks/utils";

const withAlteredSettings = ( settings ) => {

  if ( settings.name !== 'core/media-text' ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      novaBlocks: {
        customAlign: true,
      }
    }
  }
};

addFilter( 'blocks.registerBlockType', 'novablocks/media-text/settings', withAlteredSettings, 1 );
