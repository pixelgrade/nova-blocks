import { addFilter, removeFilter } from "@wordpress/hooks";

import withOverlayFilterAttributes from "./with-overlay-filter-attributes";
import withOverlayFilterControls from "./with-overlay-filter-controls"
import withOverlayFilterEditCustomProps from "./with-overlay-filter-edit-custom-props";
import withOverlayFilterSaveCustomProps from "./with-overlay-filter-save-custom-props";

removeFilter( 'editor.BlockEdit', 'core/editor/duotone/with-editor-controls' );

addFilter( 'blocks.registerBlockType', 'novablocks/with-overlay-filter-attributes', withOverlayFilterAttributes );
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-controls', withOverlayFilterControls );
addFilter( 'editor.BlockEdit', 'novablocks/with-overlay-filter-edit-custom-props', withOverlayFilterEditCustomProps );
addFilter( 'blocks.getSaveElement', 'novablocks/with-overlay-filter-save-custom-props', withOverlayFilterSaveCustomProps );
