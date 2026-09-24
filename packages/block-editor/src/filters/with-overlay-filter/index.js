import { addFilter, removeFilter } from "@wordpress/hooks";

import withOverlayFilterAttributes from "./with-overlay-filter-attributes";
import withOverlayFilterControls from "./with-overlay-filter-controls"
import withOverlayFilterEditCustomProps from "./with-overlay-filter-edit-custom-props";
import withOverlayFilterSaveCustomProps from "./with-overlay-filter-save-custom-props";

removeFilter( 'editor.BlockEdit', 'core/editor/duotone/with-editor-controls' );

addFilter( 'blocks.registerBlockType', 'novablocks/with-overlay-filter-attributes', withOverlayFilterAttributes );
// Priority 30 places the inspector controls OUTSIDE withPreviewAttributes
// (priority 20), so in a preview-capable layout's Edit Mode they read the
// block's stored attributes instead of the canvas-only forced ones (#642;
// same boundary as with-collection-layout).
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-controls', withOverlayFilterControls, 30 );
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-edit-custom-props', withOverlayFilterEditCustomProps );
addFilter( 'blocks.getSaveElement', 'novablocks/with-overlay-filter-save-custom-props', withOverlayFilterSaveCustomProps );
