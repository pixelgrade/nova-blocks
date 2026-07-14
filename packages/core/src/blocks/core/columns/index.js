import { addFilter } from "@wordpress/hooks";

const addNovaBlocksSupport = ( settings ) => {

  if ( settings.name !== 'core/columns' ) {
    return settings;
  }

  return {
    ...settings,
    supports: {
      ...settings.supports,
      novaBlocks: {
        // Boolean-true-equivalent object (attributes + controls both on),
        // plus the Stage 1 opt-out for the "Content Area Padding" control —
        // same no-op rationale as Group; Columns has no dedicated SCSS
        // file at all, so contentPadding never reaches CSS. See
        // with-space-and-sizing/controls/is-content-padding-control-visible.js.
        spaceAndSizing: {
          attributes: true,
          controls: true,
          contentPadding: false,
        },
      }
    },
  };
};
addFilter( 'blocks.registerBlockType', 'novablocks/columns/settings-add-nb-support', addNovaBlocksSupport, 1 );
