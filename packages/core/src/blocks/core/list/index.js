/**
 * WordPress Dependencies
 */
import { addFilter } from "@wordpress/hooks";

import { withAlteredSettings } from "./components/with-altered-settings";
import { withControls } from "./components/with-controls";
import { withSaveExtraProps } from "./components/with-save-extra-props";
import { withBlockEditProps } from "./components/with-block-edit-props";

addFilter( 'blocks.registerBlockType', 'novablocks/list/settings', withAlteredSettings, 1 );
addFilter( 'editor.BlockEdit', 'novablocks/list/list-style', withControls, 1 );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/list/with-save-extra-props', withSaveExtraProps, 1 );
addFilter( 'editor.BlockListBlock', 'novablocks/list/with-edit-block-attributes', withBlockEditProps, 1 );
