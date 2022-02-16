import { addFilter } from "@wordpress/hooks";

import "./update-blocks";

import withColorSignalAttributes from "./filters/with-color-signal-attributes";
import withColorSignalsDeprecated from "./filters/with-color-signal-deprecated";
import withColorSignalControls from "./filters/with-color-signal-controls";
import withColorSignalEditClassnames from "./filters/with-color-signal-edit-classnames";
import withColorSignalSaveClassnames from "./filters/with-color-signal-save-classnames";
import withColorSignalSaveDataAttributes from "./filters/with-color-signal-save-data-attributes";
import withSpaceAndSizingEditCustomProps from "./filters/with-color-signal-edit-custom-props";
import withSpaceAndSizingSaveCustomProps from "./filters/with-color-signal-save-custom-props";

addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-attributes', withColorSignalAttributes );
addFilter( 'blocks.registerBlockType', 'novablocks/with-color-signal-deprecated', withColorSignalsDeprecated );
addFilter( 'editor.BlockEdit', 'novablocks/with-color-signal-controls', withColorSignalControls );
addFilter( 'editor.BlockListBlock', 'novablocks/with-color-signal-edit-classnames', withColorSignalEditClassnames );
addFilter( 'blocks.getSaveContent.extraProps', 'novablocks/with-color-signal-save-classnames', withColorSignalSaveClassnames, 1 );
addFilter( 'blocks.getSaveElement', 'novablocks/add-color-signal-data-to-save-element', withColorSignalSaveDataAttributes, 1 );

addFilter( 'editor.BlockEdit', 'novablocks/with-space-and-sizing-edit-custom-props', withSpaceAndSizingEditCustomProps );
addFilter( 'blocks.getSaveElement', 'novablocks/with-space-and-sizing-save-custom-props', withSpaceAndSizingSaveCustomProps );

export * from './utils';
