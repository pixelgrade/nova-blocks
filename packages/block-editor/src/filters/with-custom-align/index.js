import { addFilter } from "@wordpress/hooks";

import withCustomAlignControls from "./with-custom-align-controls";
import withWrapperPropsRemoved from "./with-wrapper-props-removed";
import withAlignSettingsRemoved from "./with-align-settings-removed";

addFilter( 'editor.BlockEdit', 'novablocks/with-custom-align-controls', withCustomAlignControls );
addFilter( 'editor.BlockListBlock', 'novablocks/with-no-data-align', withWrapperPropsRemoved );
addFilter( 'blocks.registerBlockType', 'novablocks/remove-align-settings', withAlignSettingsRemoved, Number.MAX_SAFE_INTEGER );
