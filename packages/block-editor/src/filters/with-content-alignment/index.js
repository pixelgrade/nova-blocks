import { addFilter } from "@wordpress/hooks";

import withCustomAlignmentControls from "./with-custom-alignment-controls";
import withWrapperPropsRemoved from "./with-wrapper-props-removed";
import withAlignSettingsRemoved from "./with-align-settings-removed";

addFilter( 'editor.BlockEdit', 'novablocks/with-custom-alignment-controls', withCustomAlignmentControls );
addFilter( 'editor.BlockListBlock', 'novablocks/with-no-data-align', withWrapperPropsRemoved );
addFilter( 'blocks.registerBlockType', 'novablocks/remove-align-settings', withAlignSettingsRemoved, Number.MAX_SAFE_INTEGER );
