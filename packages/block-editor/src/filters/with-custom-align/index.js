import { addFilter } from "@wordpress/hooks";

//import withControls from "./with-controls";
import withWrapperProps from "./with-wrapper-props";
import withSettings from "./with-settings";
import withSaveProps from "./with-save-props";

//addFilter( 'editor.BlockEdit', 'novablocks/custom-align/controls', withControls );
addFilter( 'editor.BlockListBlock', 'novablocks/custom-align/wrapper-props', withWrapperProps, Number.MIN_SAFE_INTEGER );
addFilter( 'blocks.registerBlockType', 'novablocks/custom-align/alter-settings', withSettings, Number.MIN_SAFE_INTEGER );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/custom-align/save-props', withSaveProps );
